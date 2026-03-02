(function () {
  const API_URL = (window.ECON_LUNCH && window.ECON_LUNCH.API_URL) || "";
  const $ = (id) => document.getElementById(id);

  if (!API_URL || API_URL.includes("PASTE_")) {
    // Soft-fail: show a helpful error if config is missing
    window.addEventListener("DOMContentLoaded", () => {
      const el = $("fatal");
      if (el) el.classList.remove("hidden");
    });
    return;
  }

  // JSONP helper (works from GitHub Pages without CORS)
  function jsonp(action, params = {}) {
    return new Promise((resolve, reject) => {
      const cbName = "__cb_" + Math.random().toString(36).slice(2);
      const script = document.createElement("script");
      const qs = new URLSearchParams({
        action,
        ...params,
        callback: cbName,
        nonce: Date.now().toString(),
      });

      const url = API_URL + (API_URL.includes("?") ? "&" : "?") + qs.toString();
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error("Request timed out"));
      }, 15000);

      function cleanup() {
        clearTimeout(timeout);
        delete window[cbName];
        script.remove();
      }

      window[cbName] = (data) => {
        cleanup();
        resolve(data);
      };

      script.onerror = () => {
        cleanup();
        reject(new Error("Network error"));
      };

      script.src = url;
      document.body.appendChild(script);
    });
  }

  let serverOffsetMs = 0;
  function setServerNow(nowIso) {
    const serverNow = new Date(nowIso).getTime();
    serverOffsetMs = serverNow - Date.now();
  }
  function nowMs() {
    return Date.now() + serverOffsetMs;
  }

  function fmtDate(iso, tz) {
    try {
      return new Intl.DateTimeFormat([], {
        timeZone: tz || "America/New_York",
        dateStyle: "full",
        timeStyle: "short",
      }).format(new Date(iso));
    } catch {
      return new Date(iso).toLocaleString();
    }
  }

  function fmtCountdown(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(s / 86400);
    const hrs = Math.floor((s % 86400) / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    const parts = [];
    if (days) parts.push(days + "d");
    parts.push(String(hrs).padStart(2, "0") + "h");
    parts.push(String(mins).padStart(2, "0") + "m");
    parts.push(String(secs).padStart(2, "0") + "s");
    return parts.join(" ");
  }

  function setText(id, text) {
    const el = $(id);
    if (el) el.textContent = text;
  }

  function setDisabledForm(disabled) {
    const form = $("suggestForm");
    if (!form) return;
    [...form.querySelectorAll("input, textarea, button")].forEach((el) => {
      el.disabled = disabled;
    });
    if (disabled) form.classList.add("opacity-60");
    else form.classList.remove("opacity-60");
  }

  async function loadConfig() {
    const data = await jsonp("config");
    if (!data || !data.ok) throw new Error((data && data.error) || "Config failed");

    setServerNow(data.nowIso);
    setText("clubName", data.clubName || "Book Club");
    setText("tagline", data.tagline || "");
    setText("deadlinePretty", fmtDate(data.deadlineIso, data.timezone));
    setText("count", String(data.count ?? 0));

    // Countdown ticker
    const deadlineMs = new Date(data.deadlineIso).getTime();
    const badge = $("statusBadge");
    const countdown = $("countdown");
    const closedMsg = $("closedMsg");

    function tick() {
      const remaining = deadlineMs - nowMs();
      const open = remaining > 0;
      if (badge) {
        badge.textContent = open ? "Open" : "Closed";
        badge.className =
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold " +
          (open ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/30" :
                  "bg-rose-500/15 text-rose-200 ring-1 ring-rose-400/30");
      }
      if (countdown) countdown.textContent = open ? fmtCountdown(remaining) : "00h 00m 00s";
      if (closedMsg) closedMsg.classList.toggle("hidden", open);
      setDisabledForm(!open);
    }
    tick();
    setInterval(tick, 1000);

    return data;
  }

  function clearList() {
    const list = $("list");
    if (list) list.innerHTML = "";
  }

  function addListItem(s) {
    const list = $("list");
    if (!list) return;

    const li = document.createElement("li");
    li.className = "rounded-xl bg-white/5 p-4 ring-1 ring-white/10";

    const title = document.createElement("div");
    title.className = "text-base font-semibold text-slate-50";
    title.textContent = `${s.title} — ${s.author}`;

    const meta = document.createElement("div");
    meta.className = "mt-1 text-sm text-slate-300";
    meta.textContent = s.name ? `Suggested by ${s.name}` : "Suggestion";

    li.appendChild(title);
    li.appendChild(meta);
    list.appendChild(li);
  }

  async function loadList() {
    clearList();
    const data = await jsonp("list");
    if (!data || !data.ok) {
      setText("listNote", "Suggestions list is hidden.");
      return;
    }
    setText("listNote", data.count ? "" : "No suggestions yet — be the first.");
    (data.suggestions || []).slice().reverse().forEach(addListItem);
  }

  async function submitFromForm() {
    const name = ($("name") && $("name").value) || "";
    const title = ($("title") && $("title").value) || "";
    const author = ($("author") && $("author").value) || "";
    const link = ($("link") && $("link").value) || "";
    const notes = ($("notes") && $("notes").value) || "";
    const code = ($("code") && $("code").value) || "";
    const website = ($("website") && $("website").value) || ""; // honeypot

    const msg = $("submitMsg");
    if (msg) msg.textContent = "Submitting…";

    const res = await jsonp("submit", { name, title, author, link, notes, code, website });
    if (!res || !res.ok) {
      if (msg) msg.textContent = (res && (res.error || res.message)) || "Submit failed.";
      return;
    }
    if (!res.accepted) {
      if (msg) msg.textContent = res.message || "Submissions are closed.";
      return;
    }

    if (msg) msg.textContent = "Submitted ✅";
    const form = $("suggestForm");
    if (form) form.reset();

    // refresh count + list
    try {
      const cfg = await jsonp("config");
      if (cfg && cfg.ok) setText("count", String(cfg.count ?? 0));
    } catch {}
    try { await loadList(); } catch {}
  }

  async function loadWinner({ autopick } = { autopick: true }) {
    const data = await jsonp("winner"); // autopick behavior is controlled in Apps Script properties
    const box = $("winnerBox");
    const wTitle = $("winnerTitle");
    const wMeta = $("winnerMeta");

    if (!box) return;

    if (!data || !data.ok) {
      box.classList.remove("hidden");
      if (wTitle) wTitle.textContent = "Winner unavailable";
      if (wMeta) wMeta.textContent = (data && data.error) || "Check settings.";
      return;
    }

    if (!data.hasWinner) {
      box.classList.remove("hidden");
      if (wTitle) wTitle.textContent = "No winner yet";
      if (wMeta) wMeta.textContent = "Either there are no submissions, or auto-pick is off.";
      return;
    }

    const w = data.winner;
    box.classList.remove("hidden");
    if (wTitle) wTitle.textContent = `${w.title} — ${w.author}`;
    if (wMeta) wMeta.textContent = w.name ? `Suggested by ${w.name}` : "Winner selected";

    // confetti (if available)
    if (window.confetti) {
      window.confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
    }
  }

  async function adminPick(pass) {
    const data = await jsonp("pick", { pass });
    return data;
  }

  async function adminReset(pass) {
    const data = await jsonp("reset", { pass });
    return data;
  }

  // Page boot
  window.addEventListener("DOMContentLoaded", async () => {
    const page = document.body.getAttribute("data-page");

    try {
      const cfg = await loadConfig();

      if (page === "submit") {
        if (cfg.listPublic) {
          await loadList();
        } else {
          setText("listNote", "Suggestions list is hidden.");
        }

        const form = $("suggestForm");
        if (form) {
          form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            submitFromForm().catch((e) => {
              const msg = $("submitMsg");
              if (msg) msg.textContent = e.message || "Submit failed.";
            });
          });
        }
      }

      if (page === "results") {
        // If it's still open, show “come back later”
        // After deadline, winner endpoint will (optionally) auto-pick depending on Apps Script AUTO_PICK
        await loadWinner();
        if (cfg.listPublic) {
          await loadList();
        } else {
          setText("listNote", "Suggestions list is hidden.");
        }
      }

      if (page === "admin") {
        const pickBtn = $("pickBtn");
        const resetBtn = $("resetBtn");
        const passEl = $("adminPass");
        const out = $("adminOut");

        if (pickBtn) pickBtn.addEventListener("click", async () => {
          out.textContent = "Picking…";
          const res = await adminPick(passEl.value);
          out.textContent = res.ok ? `Winner: ${res.winner ? (res.winner.title + " — " + res.winner.author) : "None"}`
                                  : `Error: ${res.error || "Failed"}`;
        });

        if (resetBtn) resetBtn.addEventListener("click", async () => {
          out.textContent = "Resetting…";
          const res = await adminReset(passEl.value);
          out.textContent = res.ok ? (res.message || "Reset.") : `Error: ${res.error || "Failed"}`;
        });
      }

    } catch (err) {
      const el = $("fatal");
      if (el) el.classList.remove("hidden");
      const detail = $("fatalDetail");
      if (detail) detail.textContent = String(err && err.message ? err.message : err);
    }
  });
})();
