(() => {
  "use strict";

  const cards = [...document.querySelectorAll(".paper-entry")];
  const sections = [...document.querySelectorAll(".paper-section")];
  const filterInputs = [...document.querySelectorAll("input[data-filter-group]")];
  const searchInput = document.getElementById("search-filter");
  const priorityInput = document.getElementById("priority-filter");
  const visibleCount = document.getElementById("visible-count");
  const railPaperCount = document.getElementById("rail-paper-count");
  const filterSummary = document.getElementById("filter-summary");
  const activeFilterMark = document.getElementById("active-filter-mark");
  const clearButton = document.getElementById("clear-filters");

  function sameFilter(left, right) {
    return (
      left.dataset.filterGroup === right.dataset.filterGroup &&
      left.value === right.value
    );
  }

  function synchronizeCheckbox(target) {
    filterInputs.forEach((input) => {
      if (input !== target && sameFilter(input, target)) {
        input.checked = target.checked;
      }
    });
  }

  function groupState(group) {
    const inputs = filterInputs.filter(
      (input) => input.dataset.filterGroup === group
    );
    return {
      available: new Set(inputs.map((input) => input.value)),
      selected: new Set(
        inputs.filter((input) => input.checked).map((input) => input.value)
      ),
    };
  }

  function groupMatches(state, value) {
    return state.available.size === 0 || state.selected.has(value || "");
  }

  function applyFilters() {
    if (cards.length === 0) return;

    const workTypes = groupState("work-type");
    const disciplines = groupState("discipline");
    const projects = groupState("project");
    const relevances = groupState("relevance");
    const minimumPriority = Number(priorityInput?.value || 1);
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const show =
        groupMatches(workTypes, card.dataset.workType) &&
        groupMatches(disciplines, card.dataset.discipline) &&
        groupMatches(projects, card.dataset.project) &&
        groupMatches(relevances, card.dataset.relevance) &&
        Number(card.dataset.priority || 0) >= minimumPriority &&
        (!query || (card.dataset.search || "").includes(query));
      card.hidden = !show;
      if (show) visible += 1;
    });

    sections.forEach((section) => {
      const hasVisible = [...section.querySelectorAll(".paper-entry")].some(
        (card) => !card.hidden
      );
      section.hidden = !hasVisible;
    });

    const paperLabel = `${visible} paper${visible === 1 ? "" : "s"}`;
    if (visibleCount) visibleCount.textContent = paperLabel;
    if (railPaperCount) railPaperCount.textContent = `${visible} Papers`;
    if (filterSummary) {
      filterSummary.textContent =
        visible === cards.length ? "" : `Showing ${visible} of ${cards.length} papers`;
    }

    const constrainedGroups = [workTypes, disciplines, projects, relevances].filter(
      (state) => state.available.size && state.selected.size < state.available.size
    ).length;
    const active =
      constrainedGroups +
      (minimumPriority > 1 ? 1 : 0) +
      (query ? 1 : 0);
    if (activeFilterMark) activeFilterMark.textContent = active ? String(active) : "";
  }

  filterInputs.forEach((input) => {
    input.addEventListener("change", () => {
      synchronizeCheckbox(input);
      applyFilters();
    });
  });
  searchInput?.addEventListener("input", applyFilters);
  priorityInput?.addEventListener("change", applyFilters);

  clearButton?.addEventListener("click", () => {
    filterInputs.forEach((input) => {
      input.checked = true;
    });
    if (searchInput) searchInput.value = "";
    if (priorityInput) priorityInput.value = "1";
    applyFilters();
  });

  let previousFocus = null;
  const modalLayers = [...document.querySelectorAll(".modal-layer")];

  function openModal(id, trigger) {
    const layer = document.getElementById(id);
    if (!(layer instanceof HTMLElement)) return;
    previousFocus = trigger instanceof HTMLElement ? trigger : document.activeElement;
    layer.hidden = false;
    document.documentElement.classList.add("modal-open");
    const focusTarget =
      id === "filter-modal"
        ? layer.querySelector("#search-filter")
        : layer.querySelector("[data-modal-close]");
    window.setTimeout(() => focusTarget?.focus(), 0);
  }

  function closeModal(layer) {
    if (!(layer instanceof HTMLElement)) return;
    layer.hidden = true;
    if (!modalLayers.some((candidate) => !candidate.hidden)) {
      document.documentElement.classList.remove("modal-open");
    }
    if (previousFocus instanceof HTMLElement) previousFocus.focus();
  }

  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.modalOpen, button));
  });
  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal-layer")));
  });
  modalLayers.forEach((layer) => {
    layer.addEventListener("click", (event) => {
      if (event.target === layer) closeModal(layer);
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openLayer = modalLayers.find((layer) => !layer.hidden);
    if (openLayer) closeModal(openLayer);
  });

  const sourceSearch = document.getElementById("source-search");
  const sourceGroups = [...document.querySelectorAll("[data-source-group]")];
  const sourceSearchStatus = document.getElementById("source-search-status");

  function filterSources() {
    if (!sourceSearch || sourceGroups.length === 0) return;
    const query = sourceSearch.value.trim().toLowerCase();
    let visible = 0;
    sourceGroups.forEach((group) => {
      const show = !query || (group.dataset.sourceText || "").includes(query);
      group.hidden = !show;
      if (show) visible += 1;
    });
    if (sourceSearchStatus) {
      sourceSearchStatus.textContent = query
        ? `Showing ${visible} of ${sourceGroups.length} source groups`
        : "";
    }
  }

  sourceSearch?.addEventListener("input", filterSources);

  function siteRootURL() {
    const root = new URL(window.location.href);
    const markerIndex = root.pathname.lastIndexOf("/issues/");
    root.pathname =
      markerIndex >= 0
        ? root.pathname.slice(0, markerIndex + 1)
        : root.pathname.replace(/[^/]*$/, "");
    root.search = "";
    root.hash = "";
    return root;
  }

  async function loadIssueArchive() {
    const list = document.getElementById("issue-archive-list");
    const archiveLink = document.getElementById("archive-index-link");
    if (!list && !archiveLink) return;
    const root = siteRootURL();
    if (archiveLink) archiveLink.href = new URL("issues/", root).href;
    if (!list) return;

    try {
      const response = await fetch(new URL("issues.json", root), {
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Archive returned HTTP ${response.status}`);
      const payload = await response.json();
      const entries = Array.isArray(payload.issues) ? payload.issues : [];
      const currentIssue = list.dataset.currentIssue;
      const rows = entries.slice(0, 12).map((entry) => {
        const link = document.createElement("a");
        link.className = "issue-row";
        if (entry.id === currentIssue) link.classList.add("current");
        link.href = new URL(entry.path, root).href;

        const number = document.createElement("span");
        number.textContent = `Issue ${String(entry.issue_number).padStart(3, "0")}`;
        const date = document.createElement("span");
        date.textContent = entry.date_label;
        const count = document.createElement("span");
        count.textContent = String(entry.selected_count);
        link.append(number, date, count);
        return link;
      });
      if (rows.length) list.replaceChildren(...rows);
    } catch (error) {
      console.warn("Issue archive could not be loaded.", error);
    }
  }

  loadIssueArchive();
  applyFilters();
})();
