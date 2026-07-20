---
title: "Economic Diversity and the Resilience of Cities"
authors: "François de Soyres, Simon Fuchs, Illenin O. Kondo, and Hélène Maghin"
date: "September 2025"
pdf: "/research/economic_resilience_v2.pdf"
markdown_source: "/research/markdown/economic-diversity-resilience-cities.md"
markdown_generated: "2026-07-20"
---

# Economic Diversity and the Resilience of Cities

**Authors:** François de Soyres, Simon Fuchs, Illenin O. Kondo, and Hélène Maghin<br>
**Version:** September 2025<br>
**JEL:** J61, J62, J21<br>
**Keywords:** Sufficient statistics; labor flows; concentration; economic diversity; welfare

[Download the paper as PDF](/research/economic_resilience_v2.pdf)

> This Markdown version was generated from the authors’ TeX source and checked against the PDF linked above. Figure images are omitted here; their captions and notes are retained.

## Abstract

We develop a framework to assess how economic shocks affect local labor markets and worker welfare, with a focus on city-level economic diversity. Using detailed worker flow data across cities, sectors, and occupations, we construct theory-consistent welfare measures. Our approach combines a dynamic discrete choice model with a dual representation that captures both direct effects and the insurance value of local economic diversity. Applied to French labor markets, we find that diversification dampens the effect of negative shocks: both job-to-job moves and net inflows decline less in diverse cities than in concentrated ones. Overall, we document sizable welfare insurance gains from local economic diversity.

**Author note:** Acknowledgements and institutional disclaimers are preserved in the paper notes.[^1]

## Introduction

Are workers in more economically diverse cities better or worse off when their industry or occupation faces a labor demand shock? We argue that answering this question requires accounting for the full range of options available to workers, including staying in the same job, switching locally to another occupation-industry pair, or to non-employment, or relocating to a different city. In this paper, we develop an approach to capture these effects by deriving sufficient statistics for a second-order approximation of local welfare changes within a standard dynamic discrete choice (DDC) framework. Using rich worker flows data from France, we show that economic diversity across cities generates sizable welfare insurance gains for workers.


<a id="fig:1"></a>

> **Local Economic Diversity and Nonspatial Labor Reallocation in France**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: The left panel, Figure 1b, shows a scatter plot of the sector-occupation Herfindahl-Hirschman Index (HHI) of a commuting zone in France and a measure of nonspatial labor reallocation: the share of local employment that switches to another occupation, sector or both without moving to a new location. The right panel, Figure 1a, shows a map of French commuting zones and their sector-occupation HHI.


Figure [1](#fig:1) illustrates the central idea of the paper: cities with more diverse local economies experience more worker reallocation within the city. Panel Figure relates sector-occupation concentration, measured using the Herfindahl-Hirschman Index (HHI), to non-spatial labor flows, defined as the share of local employment that switches occupation, sector, or both without moving. Cities with lower HHI, that is, more economically diverse cities, exhibit higher local churn, meaning a larger share of workers change jobs within the same city. Panel Figure maps French commuting zones by their sector-occupation HHI, highlighting substantial variation in local economic diversity.

Building on this, we analyze how worker flows, both within and across cities, respond to local labor demand shocks, and how local economic diversity shapes this response. We then use these estimates as theory-consistent sufficient statistics to evaluate the welfare value of diversity. Our main finding is that more diverse cities are more resilient to negative local labor demand shocks, providing residents with significant insurance benefits.

To infer welfare, we build a revealed preference argument based on a standard DDC model: welfare changes can be approximated using observed baseline choice probabilities and their dynamic response to shocks, following the convex-analytic approach of ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)). Our main theoretical result shows that welfare changes equal a weighted sum of changes in choice probabilities to first order, and, to second order, they depend on the covariance of choice adjustments and the cross-elasticities between alternatives.

We apply this framework to data on French workers' employment histories, constructing flows across location--industry--occupation cells. Using Bartik-style demand shocks and local projections-IV ([Jordà 2005](#ref-Jorda2005)), we trace both gross and net worker flows and separate spatial from non-spatial adjustments.

We find that local economic diversity significantly shapes labor market responses. After negative shocks, diversified cities experience a smaller drop in within-city churn and less severe net inflow contractions, suggesting that diversity provides a form of insurance. Responses to positive shocks are more symmetric: churn reacts similarly across cities, while net inflows are only slightly larger in diversified cities. In short, concentrated cities face deeper downturns and only modestly stronger expansions.

Finally, we use our theoretical framework to translate these flow responses into welfare terms and find a sizable "insurance value'' of local economic diversification, as captured by the second-order term.

Overall, our approach has two main advantages. (i) It relies only on observed choice probabilities and imposes less structure than a fully specified model, and is therefore less dependent on functional form assumptions. (ii) Its second-order approximation decomposes welfare changes into a part due to average utility changes and an insurance term due to comoving reallocation across choices.\
This paper contributes to several research strands: First, our paper contributes methodologically to the literature evaluating the welfare consequences of shocks using approximations and sufficient statistics.[^2] Closest to our paper, ([Kim and Vogel 2020](#ref-Kim2020-bw)) develop a methodology to approximate first-order welfare differences in the context of a static model using a sufficient statistic approach applied to U.S. commuting zones. Our paper builds on advances in the DDC literature from ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) to derive higher-order welfare change approximations that leverage the dynamics and composition of worker choice probabilities across more adjustment margins. Relative to models of the labor market that fully specify the worker's reallocation choice (e.g., ([Artuç et al. 2010](#ref-artucc2010trade)); ([Caliendo et al. 2019](#ref-Caliendo2019-gz))), our framework is lighter on assumptions: it recovers continuation values directly from conditional choice probabilities and delivers a transparent welfare decomposition into first- and second-order terms. The flip side is that it does not identify underlying fundamentals or allows for counterfactual analysis. We illustrate the approach by combining LPIV estimates from rich worker flows data in France to construct theory-consistent welfare measures and to derive the insurance value of local economic diversity.

Second, the paper contributes to an extensive literature on labor flows across cities and sectors in response to employment shocks following the canonical study by ([Blanchard and Katz 1992](#ref-Blanchard_Katz_92)).[^3] Studies such as ([Monte et al. 2018](#ref-Monte_et_al_2018)) and ([Marinescu and Rathelot 2018](#ref-Marinescu_Rathelot_2018)) highlight the heterogeneity in local employment elasticity and worker mobility preferences. The literature on adjustments to trade-induced shocks also highlights the role of spatial, sectoral composition and occupational adjustments. See, for example, ([Autor et al. 2014](#ref-Autor_et_al_2014)), ([Ebenstein et al. 2014](#ref-ebenstein2014occ)), ([Fuchs 2021](#ref-fuchs2021spoils)), ([Kondo 2018](#ref-kondo2018trade)) and ([Traiberman 2019](#ref-Traiberman2019)), among others. Disciplined by the DDC theory, we use rich industry-occupation-location worker flow data in France to document sizable asymmetries in the dynamic adjustment patterns of workers across their spatial and non-spatial options and estimate significant heterogeneity across labor markets with different degrees of economic diversity. We combine these estimates through the lens of our theory to suggest a significant insurance component in the welfare value of economically diverse labor markets.

The remainder of this paper is structured as follows: Section [2](#sec:Theory) introduces our approach to measure welfare implications of shocks using sufficient statistics, Section [3](#sec:Empirics) introduces the data, provides summary statistics on worker flows in France, and covers our analysis of local projections on worker adjustments. Section [4](#sec:Welfare) introduces our welfare results, and Section [5](#sec:Conclusion) concludes.

<a id="sec:Theory"></a>

## Theory

We begin from the simple observation that workers face *dynamic* and *discrete* choices---staying, switching sectors within a city, or moving---where switching costs and option values make decisions forward-looking. A dynamic discrete choice (DDC) framework is therefore natural for tracing how local shocks propagate into reallocation and welfare. DDC models are widely used in labor and trade economics because they link observed worker flows to welfare in a theory-consistent way. We build on recent convex-analytic identification results for DDC models ([Fosgerau et al. 2021](#ref-Fosgerau2021-zo); [Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) and measure welfare via the social surplus, the expected value of the menu of choices facing an agent. Put plainly, given what a worker can do today and tomorrow, how do changes in local labor-market conditions shift overall welfare? We first lay out the general DDC environment and then present our key surplus approximation, which we use to quantify the value of economic diversity across cities.

### Welfare in Dynamic Discrete Choice Models: An Approximation

We use a DDC model that describes how workers choose among discrete options over time, taking into account costs and benefits of each choice.

#### Setup.

Time is discrete and there are infinite periods. The state variable is $x\in \mathcal{X}$ and agents choose between a finite number of actions $y\in \mathcal{Y}$. The single period utility flow of choosing $y$ is given by $\bar{u}_{y}(x)+\varepsilon_{y}$ where $\varepsilon_{y}$ denotes an i.i.d additive utility shock. The set of utility shocks is assumed to follow a joint distribution function $Q(\cdot ; x)$. Following ([Rust 1987](#ref-Rust1987-rb)), we assume conditional independence. Agents are dynamic optimizers facing the following problem:

$$
y \in \arg \max _{\tilde{y} \in \mathcal{Y}}\Big\{\bar{u}_{\tilde{y}}(x)+\varepsilon_{\tilde{y}}+\beta \mathbb{E}_{x^{\prime}, \varepsilon^{\prime}}\left[\bar{V}\left(x^{\prime}, \varepsilon^{\prime}\right) \mid x, \tilde{y}\right]\Big\},
$$

where $\beta$ is the discount factor and primes denote next period values. Note that $V (x')$ is the expectation of $\overline{V}(x',\varepsilon')$: $V (x') \equiv \mathbb{E}_{\varepsilon'} \overline{V} (x',\varepsilon')$. We assume time-homogeneous dynamics (i.e. constant transition kernel $\Pr(x_{t+1} \mid x_t ,y_t )$ and distribution $Q$), and dropped time subscripts for simplicity. We define choice-specific continuation values as:

$$
w_y(x) \equiv \bar{u}_y(x)+\beta \mathbb{E}_{x^{\prime}}\left[V\left(x^{\prime}\right) \mid x, y\right],
$$

 which captures the total expected value of selecting $y$ today, including future payoffs.[^4]

#### Approximating Welfare.

To summarize expected welfare in this environment, we use the social surplus function[^5] , which is the expected maximum utility across all possible choices:


<a id="eq:social_surplus"></a>

$$
\mathcal{G}(w;x)=\mathbb{E}\left[\max_{y\in\mathscr{Y}}\left(w_{y}\left(x\right)+\varepsilon_{y}\right)\mid x\right],
$$

where the expectation is taken over the distribution of utility shocks. Because we take an expectation over the shocks, this object summarizes ex-ante welfare and is a smooth function of $w$. Importantly, the social surplus function is well-behaved (finite, convex, differentiable), which allows us to use a second-order Taylor expansion to approximate how welfare changes when continuation values or choice probabilities shift.[^6] The following proposition gives a second-order Taylor approximation of $\mathcal{G}$, showing how welfare changes relate to changes in continuation values and choice probabilities. Detailed derivations are in Appendix [9.1](#subsec:Theory_derivations).

<a id="prop:approximate_welfare"></a>

**Proposition 1** (Approximate Social Surplus). *We have,

$$
\mathrm{d}\ln\mathscr{G}(w;x)=\sum_{y}\omega_{y}\left(x\right)\mathrm{d}\ln w_{y}+\frac{1}{2}\sum_{y}\sum_{y^{\prime}}\varrho_{y,y^{\prime}}^{p,w}\omega_{y}\left(x\right)\mathrm{d}\ln w_{y}\mathrm{d}\ln w_{y^{\prime}}+o(\cdot)
$$

where $\omega_{y}\left(x\right)=\frac{p_{y}\left(x\right)w_{y}\left(x\right)}{\mathcal{G}(w;x)}$ is a weight that measures the relative contribution of choice $y$ to the expected welfare and where $\varrho_{y,y'}^{p,w}\equiv \frac{\partial\ln p_{y}}{\partial\ln w_{y'}}=\frac{\partial p_{y}}{\partial w_{y'}}\frac{w_{y'}}{p_{y}}$ is the elasticity of the choice probability $p_y$ with respect to changes in the choice-specific continuation value $w_{y'}$.*

#### Insights and Limitations.

Proposition [1](#prop:approximate_welfare) implies that approximating welfare changes requires three ingredients: (i) changes in continuation values $\{\mathrm{d}\!\ln w_y\}$; (ii) the cross--elasticity matrix $\{\varrho^{p,w}_{y,y'}\}$; and (iii) baseline welfare weights $\{\omega_y\}$. The second--order component emphasizes that it is the *covariance structure* of option--specific changes in continuation values---interacting with cross--elasticities---that drives curvature. In more economically diverse locations, option payoffs tend to move less in lockstep, reducing that covariance and attenuating curvature (i.e., offering insurance). However, to implement this approximation, two challenges arise: continuation values are unobserved, and cross-elasticities are high-dimensional.

#### Dual Approach via the Legendre-Fenchel Conjugate.

To circumvent these challenges, we use the Legendre-Fenchel conjugate of $\mathcal{G}$. Intuitively, the Legendre-Fenchel conjugate offers a dual perspective: instead of asking "what choice probabilities follow from given utilities?", it allows us to ask "what utilities are consistent with observed choice probabilities?". ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) show how this inversion lets us recover continuation values non-parametrically from observed choice probabilities, without imposing a specific functional form on flow utilities. The conjugate is defined as follows:


<a id="eq:conjugate_surplus"></a>

$$
\mathcal{G}^{*}(p;x)=\sup_{w\in\mathbb{R}^{\mathcal{Y}}}\left\{ \sum_{y\in\mathcal{Y}}p_{y}\left(x\right)w_{y}\left(x\right)-\mathcal{G}(w;x)\right\}
$$

where the vector $p$ denotes the choice variable of the conjugate $\mathcal{G}^*$. Therefore, $w$ and $p$ are connected through convex duality: $p$ can be seen as the shadow prices associated with $w$, and vice versa. Moreover, since duality holds, we can approximate the convex conjugate for an equivalent welfare approximation, which we summarize in the following proposition:[^7]

<a id="prop:approximate_conjugate_welfare"></a>

**Proposition 2** (Approximate Conjugate Social Surplus). *We have,

$$
\mathrm{d}\ln\mathcal{G}^{*}(p;x)=\sum_{y}\omega_{y}^{*}\left(x\right)\mathrm{d}\ln p_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\varrho_{y,y'}^{w,p}\omega_{y}^{*}\left(x\right)\mathrm{d}\ln p_{y}\mathrm{d}\ln p_{y'}+o\left(\cdot\right)
$$

where $\omega_y^*\left(x\right)=\frac{w_{y}\left(x\right)p_{y}\left(x\right)}{\mathcal{G}^{*}(p;x)}$ is a weight that measures the relative contribution of choice $y$ to the conjugate social surplus function $\mathcal{G}^*$ and where $\varrho_{y,y'}^{w,p}\equiv \frac{\partial\ln w_{y'}}{\partial\ln p_{y}}=\frac{\partial w_{y'}}{\partial p_{y}}\frac{p_{y}}{w_{y'}}$ is the *inverse* elasticity of the choice probability $p_y$ with regard to changes in the choice-specific continuation value $w_{y'}$.*

Proposition [2](#prop:approximate_conjugate_welfare) is an equivalent, but empirically more convenient approximation of the social surplus. First, it works with changes in choice probabilities ($\mathrm{d}\!\ln p_y$), which are observed and estimated directly in our data, instead of changes in continuation values ($\mathrm{d}\!\ln w_y$). Second, following Chiong et al. ([2016](#ref-chiong_galichon_shum_duality)), the dual representation provides a simple "mass--transport'' inversion that maps observed $p$ into the continuation values $w$ needed for the weights---no logit assumption required. Finally, because our primary interest is in understanding how economic diversity affects welfare, we use this framework to derive closed-form expressions that link welfare gains from diversification directly to the local HHI. As we show in more detail in Appendix [9.3](#subsec:Theory_and_HHI), the following can be derived:

<a id="thm:coro-1-div"></a>

**Corollary 1** (Value of Insurance and Diversification). *Consider a vector of shocks $s=\left\{s_m\right
\}_{m} \equiv \{\mathrm{d}\ln w_m\}_m$ with mean $\mathbb{E}[s]=0$, and covariance $\Sigma=\mathbb{E}[ss^{\top}]$. Assume the cross-elasticity of conditional choice probabilities $\left(\varrho_{k,m|\ell}^{p,w} = \frac{\partial\ln p_{k|\ell}}{\partial\ln w_{m|\ell}}\right)$ are iso-elastic such that $\varrho_{k,m|\ell}^{p,w}  \equiv - \gamma_{\ell} \,p_{m|\ell} + \gamma_{\ell} \mathbb{1}_{\{m=k\}}$. The expected welfare change from such shock is

$$
\mathbb{E}\!\left[\mathrm{d}\ln W_{\mathcal{C}}\right]
=\frac{1}{2}\sum_{\ell\in\mathcal{C}}\pi_{\ell}\gamma_{\ell}
\left[\sum_{m}\lambda_{m|\ell}\Sigma_{mm}-\lambda_{\ell}^{\top}\Sigma\lambda_{\ell}\right],
$$

where $\lambda_{m|\ell}\equiv\frac{w_m|\ell}{\mathcal{G}_{\ell}}p_{m|\ell}$ are welfare share weights and $\pi_{\ell}$ are local population shares.*

*Furthermore, under a constant substitution elasticity ($\gamma_{\ell} \equiv \gamma$), and equicorrelated shocks such that $\Sigma_{mm}=\sigma^{2}$ and $\Sigma_{mk}=\nu \sigma^{2}$ for $m\neq k$, the expected welfare gains are proportional to the shock variance and decreasing in market concentration:

$$
\mathbb{E}\!\left[\mathrm{d}\ln W_{\mathcal{C}}\right]
=\frac{\gamma}{2}\sigma^{2}(1-\nu)(1-\mathrm{HHI}_{\mathcal{C}}),
$$

where $\mathrm{HHI}_{\mathcal{C}} \equiv \sum_{\ell}\pi_{\ell} \underbrace{\sum_{m}\lambda_{m|\ell}^{2}}_{\mathrm{HHI}_{\ell}}$ is a market concentration index.*

Motivated by this corollary, we use the HHI statistic as a proxy for economic concentration in the empirical section in order to trace and quantify differences across locations in this insurance term.[^8]

#### Taking Stock.

Proposition [2](#prop:approximate_conjugate_welfare) clarifies the methodological advantages of the mass-transport sufficient-statistics approach and provides an empirically convenient representation of the worker's conjugate social surplus. The first-order term now depends on welfare weights ($\omega_y^*$) and impulse responses of choice probabilities ($\mathrm{d}\ln p_y$). The second-order term involves own and cross-price elasticities ($\varrho_{y,y'}^{w,p}$), which can be calibrated once an iso-elastic labor supply system is assumed, as discussed below. Our approach presents the advantage that it recovers welfare weights ($\omega_y^*$) non-parametrically and uses simple reduced-form estimation to obtain choice probability impulse responses. The implied second-order expansion also isolates direct effects from the insurance value of economic diversity.[^9]

Two important limitations remain. First, as with other sufficient-statistics methods, the analysis recovers only *relative* welfare changes across locations and does not pin down absolute welfare levels. Second, while the framework provides a detailed account of workers' adjustment choices within segmented labor markets, it abstracts from additional dynamic decisions such as intertemporal consumption and saving. With these strengths and caveats in view, the next section applies the framework to assess the resilience of French local labor markets to demand shocks.

<a id="sec:Empirics"></a>

## Adjustment to Labor Demand Shocks

Our approximation provides a practical strategy to quantify how labor demand shocks affect worker welfare. Guided by Proposition [2](#prop:approximate_conjugate_welfare), we estimate worker flow responses to local shocks and examine how local sectoral and occupational diversity shapes these responses. Using a large, representative sample of French employment spells, we construct worker flows across locations, industries, and occupations. We also build a standard labor demand shock and estimate the impulse responses of spatial and nonspatial adjustment margins using local projection IVs (LPIV). We then document significant heterogeneity in worker flow responses, illustrating how city-level economic diversity potentially shapes welfare.

<a id="subsec:data_overview"></a>

### Data: Worker Flows in France

#### Data.

Our data on French workers' employment histories comes from the DADS (*Déclarations Annuelles de Données Sociales*) administrative panel, maintained by INSEE (the French National Institute of Statistics and Economic Studies). The *DADS Fichier Postes* contains mandatory Social Security filings for all salaried employees in private and semi-public firms in France.[^10] The *DADS Panel* follows workers born in October of even years, covering about 4 percent of the private-sector workforce. This panel allows us to track individual workers across all non-public-sector employment spells from 2005 to 2019.[^11]

Each record provides a worker's establishment, including a unique identifier, 4-digit industry, and municipality. This allows us to observe transitions across sectors, occupations, and geographic locations, which is crucial for our analysis. For each spell, we define the sector using the establishment's 2-digit industry code, the occupation using the 2-digit INSEE occupation code, and the location as the "*Zone d'Emploi*" (commuting zone) derived from the establishment's postal code. The final dataset contains 30 occupations, 90 sectors, and 300 geographic areas, which we refer to as "cities" for simplicity.

#### Constructing Worker Flows.

For each quarter $t$, we assign every active worker to a unique city-sector-occupation $(i,s,o)$ cell, keeping the job with the longest duration.[^12] Quarters with no recorded activity are classified as "non-employment," a broad category that includes standard unemployment and exits from the private-sector labor force.

We define "job-to-job" transitions as cases where a worker's assigned labor market in $t+1$ differs from that in $t$. Following our DDC framework, we use directed gross flows rather than net flows, constructing both (i) the stock of workers in each labor market and (ii) the full matrix of worker flows between every pair of markets, including transitions to and from non-employment.[^13]

#### Anatomy of Worker Reallocation in France.

Table [Table](#table:raw_statistics_quarterly_2) reports key moments of city-level worker flows. In the median French city, 4.5% of workers switch labor-market affiliation each quarter in at least one dimension: city ($i$), sector ($s$), or occupation ($o$)---equivalent to roughly 18% per year.[^14] Rows 2--4 disaggregate flows by dimension, showing that 65% of switches involve changing occupation, 60% involve changing sector, and nearly half involve changing city.

Figure [4](#fig:Reallocation_distribution) further decomposes flows by all combinations of city, sector, and occupation changes. Nonspatial moves are more common than spatial ones, with occupation switches dominating overall. Nonspatial reallocation, particularly occupation-only switches, varies much more across cities than spatial reallocation.

<a id="table:raw_statistics_quarterly_2"></a>

> **Quarterly worker reallocation across markets**

----- ---------------------------------------------------------------- --------- ------ --------- --------- --------- ---------
                                                                          Median     SD      p5        p25       p75       p95
  1\.   $\frac{\text{Flows}_{i,s,o}}{\text{Emp}_{i}}$                     4.54 %    0.98   3.21 %    3.90 %    5.35 %    6.10 %
  2\.   $\frac{\text{Flows}_{i \rightarrow i'}}{\text{Flows}_{i,s,o}}$    48.95 %   9.79   34.32 %   41.48 %   56.14 %   65.65 %
  3\.   $\frac{\text{Flows}_{s \rightarrow s'}}{\text{Flows}_{i,s,o}}$    61.29 %   4.34   53.58 %   58.92 %   63.82 %   66.64 %
  4\.   $\frac{\text{Flows}_{o \rightarrow o'}}{\text{Flows}_{i,s,o}}$    64.91 %   4.74   57.36 %   62.19 %   67.10 %   70.29 %
  5\.   $\frac{\text{Flows}_{ne \rightarrow e}}{\text{Emp}_{i}}$          3.22 %    1.70   2.10 %    2.70 %    4.21 %    7.62 %

  ----- ---------------------------------------------------------------- --------- ------ --------- --------- --------- ---------

<a id="subsec:data_methodology"></a>

### Estimation Methodology

#### LPIV.

We estimate *average* dynamic responses of city-level outcomes to labor demand shocks using the local projection method of ([Jordà 2005](#ref-Jorda2005)) for $h=0,\ldots,20$ quarters:

<a id="equation:Main_Spec_Average"></a>

$$
\Delta y_{i,t+h} = \alpha^{h}+\gamma_{t}+\gamma_{i}+\beta_{h} \operatorname{Shock}_{i, t}
+\sum_{m=1}^{8} \gamma_{m}^{h} y_{i, t-m}+\sum_{m=1}^{8} \omega_{m}^{h} \operatorname{Shock}_{i, t-m} +\sum_{m=1}^{8} \delta_{m}^{h} \operatorname{Z}_{i, t-m}
$$

where $\Delta y_{i,t+h} = \log \left(y_{i, t+h}\right)-\log \left(y_{i, t-1}\right)$ and $y_{i,t+h}$ is the cumulative value at time $t+h$ since $t-1$.[^15] $\text{Shock}_{i,t}$ is an exogenous local shock and ${Z}_{i, t}$ denotes controls for various local labor market variables: the share of total flows to local employment, the local labor force, and ratios of city-level local churn, inflows, and outflows relative to all flows. $\gamma_{i}$ and $\gamma_t$ are city- and time-fixed effects accounting for cross-sectional heterogeneity and common macroeconomic shocks. Standard errors are Driscoll-Kraay, and we allow for $m=1,\ldots,8$ quarters of auto-correlation--a standard temporal correlation window of two years.

#### Constructing Labor Demand Shocks.

We use a shift-share approach (Bartik) to generate plausibly exogenous labor demand shocks at the city level. We compute national employment growths for each sector-occupation pair $(s,o)$ and construct the labor demand shock in city $i$ as:


<a id="eq:Bartik_def"></a>

$$
\text{Bartik}_{i,t} = \sum_{s,o} { \text{share}^{s,o}_{i,2004} \cdot g^{\text{national}}_{-i,s,o,t}}
$$

where $\text{share}^{s,o}_{i,2004}= E_{i,s,o,t=2004} / \sum_{s',o'} E_{i,s',o',t=2004}$ are within-location ($i$) shares of sector-occupation ($s,o$) cells and $g_{-i,s,o,t}$ are leave-one-out sector-occupation employment growths in 2004. Figure [5](#fig:bartik_distrib) shows the distribution of sector-occupation shocks. Cities are on average exposed to more positive than negative shocks, and some of them experience large changes of up to -5 or +10 %.

<a id="subsec:average_response"></a>

### Beyond Net Employment: The Dynamics of Gross Flows

<a id="subsec:data_avg_response"></a>

Our worker flows data allow us to unpack the net employment response to labor demand shocks by revealing the underlying gross flows. Examining net flows provides a clear lens into how employment adjusts across cities, sectors, and occupations, beyond what aggregate employment changes alone can show. City-level adjustments are presented in Figure [2](#fig:Average_Resp_Bartik).[^16] The left panel shows average gross spatial flows---city inflows and outflows---while the right panel shows spatial and nonspatial flows. Nonspatial flows include all worker transitions that do not involve a change of city, whereas spatial net flows are defined as inflows minus outflows, capturing employment changes before accounting for local unemployment or exits from private sector employment.

Following a labor demand shock, inflows rise immediately, steadily increasing and remaining elevated throughout the horizon. Outflows respond with a lag of roughly two years, then rise sharply and persist.[^17] Nonspatial flows initially match spatial flows but exceed them after a few quarters, highlighting the importance of local job reallocation.


<a id="fig:Average_Resp_Bartik"></a>

> **Average Response to a Bartik shock: Spatial and Nonspatial Flows**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: Figure Gross_Flows_Emp shows the gross flow of workers that move out of a city (solid line) and the gross flow of workers that move in a city (dashed line). Figure fSpatial_Nonspatial shows the net flow of workers that move in a city minus the ones that leave (solid line) and the average flow of workers that reallocate within a city (dashed line).


<a id="subsec:HHI_empirics"></a>

### The Asymmetric Role of City-Level Economic Diversity

Motivated by the insights from the second-order approximation in Section [2](#sec:Theory), we posit that city-level economic diversity plays an important role in shaping how worker flows respond to labor demand shocks.[^18] We augment the baseline dynamic LPIV with asymmetric and heterogeneous effects. We measure city-level economic concentration (the opposite of diversity) using the standard Herfindahl-Hirschman Index (HHI) defined over sectors and occupations as


$$
\begin{aligned}
\text{HHI}_{i}= \sum_{s,o} \left( \text{share}^{so}_{i,t=2004} \right)^2 ,
\end{aligned}
$$

where $\text{share}^{s,o}_{i,t=2004}$ is the share of locality $i$'s workers employed in a sector-occupation pair $(s,o)$ in 2004. Lower HHI indicates a more diverse labor market, with employment spread across multiple sectors and occupations, while higher HHI reflects a more concentrated economy

We separate positive shocks ($\operatorname{B}_{i,t}^{+}$) and negative shocks ($\operatorname{B}_{i,t}^{-}$), as workers may respond differently depending on the shock's sign.[^19] Both variables only take non-negative values and are interacted with local $\text{HHI}_{i}$ measures:

<a id="eq:asymmetric_spec"></a>
<a id="equation:Spec_Asymm_hhi"></a>

$$
\begin{aligned}

\Delta y_{i,t+h} &= \alpha^{h}+\gamma_{t}+\gamma_{i}+\beta_{h}^{-}\times\operatorname{B}_{i, t}^{-} + \psi_{h}^{-} \left(\operatorname{B}_{i,t}^{-}\times \text{HHI}_{i} \right) +\beta_{h}^{+}\times\operatorname{B}_{i, t}^{+}  + \psi_{h}^{+} \left(\operatorname{B}_{i,t}^{+}\times \text{HHI}_{i} \right)   \\
&\qquad+\sum_{m=1}^{8} \gamma_{m}^{h} {y}_{i, t-m}+\sum_{m=1}^{8} \omega_{m}^{h} \text { B }_{i, t-m}  +\sum_{m=1}^{8} \delta_{m}^{h} \operatorname{Z}_{i, t-m} \nonumber .
\end{aligned}
$$

 This specification shows how worker flows respond differently to positive and negative shocks (asymmetric) and how these responses vary with city-level economic diversity (heterogeneous).[^20] While both the HHI and the shift-share instrument use sectoral shares, Figure [7](#fig:bartik_distrib_HHI) shows that the distribution of Bartik shocks is very similar across highly concentrated (high HHI) and highly diversified (low HHI) cities.


<a id="fig:HHI_Asym_total"></a>

> **Asymmetric and Heterogeneous Response: Positive/Negative Shocks × High/Low HHI**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: Figure HHI_Asym_Nonspatial shows the differential response of nonspatial flows to a negative/positive labor demand shock for low-HHI (dashed blue/green lines) and high-HHI cities (solid blue/green lines). Figure HHI_Asym_Spatial shows the differential response of spatial flows to a negative/positive labor demand shock for low-HHI (dashed blue/green lines) and high-HHI cities (solid blue/green lines).


Figure [3](#fig:HHI_Asym_total) shows asymmetric responses for spatial and nonspatial flows, evaluated at the 90th (high HHI) and 10th (low HHI) percentiles of the HHI distribution. The results confirm our theoretical prediction that local economic diversity shapes how labor markets transmit shocks. In more diverse (low HHI) cities, negative labor demand shocks are noticeably dampened. Both nonspatial churn (workers switching jobs within the same city) and net spatial inflows fall less compared with more concentrated cities, suggesting that diversified local labor markets provide a buffer against employment disruptions. This effect is substantial, highlighting that the same shock produces very different labor market dynamics depending on the degree of local economic diversification.

By contrast, positive shocks do not exhibit a similarly asymmetric pattern: more concentrated cities do not experience a proportionally stronger increase in inflows or nonspatial reallocation relative to diversified cities. This asymmetry is consistent with the idea that economic diversity functions primarily as a form of insurance, limiting the downside of negative shocks rather than amplifying the upside of positive shocks.

Importantly, our approach provides a new lens on labor market adjustment. Combining the HHI measure with gross worker flows offers a clearer view of labor market adjustment than net employment changes alone, revealing how both the direction and scale of flows are systematically shaped by local diversity.

<a id="sec:Welfare"></a>

## From Estimation to Welfare

We now combine the approximation results from Section [2](#sec:Theory) with our estimated worker flow responses to quantify the welfare effects of local economic diversity under labor demand shocks.

### Methodology

#### Setup.

We adapt the dynamic discrete choice framework from Section [2](#sec:Theory) to model flows across segmented local labor markets. The choice set $\mathcal{Y}$ is defined as sector-occupation-location labor markets: $\mathcal{Y}\equiv \mathcal{S}\times \mathcal{O}\times \mathcal{L}$, where $\mathcal{S}$, $\mathcal{O}$, and $\mathcal{L}$ are the sets of sectors, occupations, and locations, respectively. Social surplus and its convex conjugate remain as in Equations [Equation](#eq:social_surplus) and [Equation](#eq:conjugate_surplus).

To construct welfare measures from the LPIV-estimated changes in choice probabilities ($d\ln p_y$), we collapse the full set of sector-occupation-location transitions ($\mathcal{Y} \times \mathcal{Y}$) into coarser adjustment margins: a "stay" margin for workers who do not change their sector-occupation-location, a "local" margin for workers who change sector or occupation within the same city, and a "spatial" margin for workers who change city.[^21]

#### Approximating Welfare Changes.

To implement Proposition [2](#prop:approximate_conjugate_welfare), three ingredients are required: (i) We use our LPIV estimates to obtain changes in conditional choice probabilities $\{\mathrm{d}\ln p_y\}_{y\in Y}$ along all margins. (ii) We construct theory-consistent welfare weights $\omega_y^*(x)=\frac{w_y(x)\,p_y(x)}{\mathscr{G}^*(p;x)}$ via the Mass-Transport Approach (MTA) of Chiong et al. ([2016](#ref-chiong_galichon_shum_duality)).[^22] (iii) To parsimoniously organize cross-elasticity terms in the second-order expansion, we adopt a common elasticity $\gamma$ that *does not* enter step (ii): the first-order piece depends only on $(p,w)$, while $\gamma$ scales the quadratic terms. We then obtain:


$$
\begin{aligned}
\frac{\mathrm{d}\ln\mathscr{G}^{*}(p;x)}{\mathrm{d}\ln\bar{z}}\approx & \underbrace{\sum_{\substack{\text{ y=stay (x), }\\
\text{ local (x), spatial (x) }
}
}\left[\omega_{y}^{*}\left(x\right)\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{z}}\right] }_{\text{first order approximation term}}\\
 +&\underbrace{\frac{1}{\gamma}\sum_{\substack{\text{ y=stay (x), }\\
\text{ local (x), spatial (x) }
}
}\left[\frac{\omega_{y}^{*}\left(x\right)}{1-p_{y}\left(x\right)}\left(\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{z}}\right)^{2}\right] \quad -\frac{1}{2\gamma}\sum_{\substack{\text{ y,y'=stay (x), }\\
\text{ local (x), spatial (x) }
}
}\sum_{\substack{y'\neq y}
}\left[\frac{\omega_{y}^{*}\left(x\right)}{p_{y'}\left(x\right)}\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{z}}\frac{\mathrm{d}\ln p_{y'}(x)}{\mathrm{d}\ln\bar{z}}\right]}_{\text{second order approximation term}} \nonumber
\end{aligned}
$$

 as derived in Appendix [9.2](#subsec:Theory_derivations_sec_4). Intuitively, this expression shows that the welfare impact of a labor demand shock can be captured using only three key ingredients. First, the labor supply elasticity $\gamma$ governs how strongly workers adjust their choices in response to local changes. Second, the baseline choice probabilities $\left\{ p_{\text{stay}}\left(x\right),p_{\text{spatial}}\left(x\right),p_{\text{local}}\left(x\right)\right\}$ reflect the relative importance of different adjustment margins---staying in the same job, switching sectors or occupations locally, or moving to a different city. Third, the impulse responses of these probabilities along each margin indicate how the likelihood of staying, switching locally, or moving spatially responds to a shock:

$$
\left\{ \frac{\mathrm{d}\ln p_{\text{stay}|x}\left(x\right)}{\mathrm{d}\ln z_{\ell}},\frac{\mathrm{d}\ln p_{\text{spatial}}\left(x\right)}{\mathrm{d}\ln z_{\ell}},\frac{\mathrm{d}\ln p_{\text{local}}\left(x\right)}{\mathrm{d}\ln z_{\ell}}\right\}
$$


The first-order term captures the direct effect of the shock on welfare through changes in choice probabilities weighted by their importance. The second-order term accounts for curvature effects, including interactions across margins and the moderating role of labor supply elasticity. Together, these terms provide a compact but accurate approximation of the welfare consequences of local labor demand shocks, relying only on observed worker flows and a few structural parameters.

#### From Local Projections to Welfare.

Following the literature, we assume $\gamma = 2$ and compute the welfare effects of local labor demand shocks using our estimation results. For each city $\ell$, we observe its sequence of annual shocks and baseline sector-occupation economic diversification index $\text{HHI}_{\ell}$. Using the LPIV estimates, we predict the implied changes in choice probabilities for each margin over the estimation horizon, for the realized average shocks $\left \{\widetilde{\text{B}}^{+}_{t}, \widetilde{\text{B}}^{-}_{t} \right \}$: $\left\{ \Delta \ln p^{\text{stay},t+h}_{\ell,t},\Delta \ln p^{\text{spatial},t+h}_{\ell,t},\Delta \ln p^{\text{local},t+h}_{\ell,t}\right\} _{h}$.[^23] Finally, we cumulate welfare effects over time using a discount factor $\beta=.99$.

<a id="tab:main_results"></a>

> **Welfare Effects and Decomposition by Economy Diversification**

+:-------:+:-------------:+:--------------:+:-------:+:-------------:+:--------------:+:-------:+
| HHI     | Positive Shocks                          | Negative Shocks                          |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| Deciles | *First order* | *Second order* | *Total* | *First order* | *Second order* | *Total* |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 1st     | 7.10          | -3.25          | 3.85    | -1.00         | -0.06          | -1.06   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 2nd     | 7.18          | -2.49          | 4.68    | -1.00         | -0.09          | -1.09   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 3rd     | 7.03          | -2.57          | 4.46    | -0.90         | -0.15          | -1.05   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 4th     | 7.39          | -2.82          | 4.57    | -1.43         | -0.24          | -1.66   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 5th     | 6.77          | -1.74          | 5.03    | -1.82         | -0.30          | -2.12   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 6th     | 6.49          | -0.74          | 5.75    | -2.29         | -0.33          | -2.62   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 7th     | 7.36          | -4.02          | 3.34    | -2.21         | -0.57          | -2.78   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 8th     | 9.41          | -5.82          | 3.59    | -1.75         | -0.77          | -2.52   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 9th     | 8.76          | -5.24          | 3.51    | -2.20         | -0.97          | -3.17   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 10th    | 12.75         | -6.94          | 5.81    | -2.38         | -2.55          | -4.93   |
+---------+---------------+----------------+---------+---------------+----------------+---------+

**Notes:** We set $\gamma=2$ and discount future continuation values relative to the base period using $\beta = 0.99$:

$$
\begin{aligned}
\Delta { \ln \mathcal{G}^{*}_{\ell} } & \equiv \sum_{t=\text{2006Q1}}^{\text{2019Q4}} \sum_{h=0}^{20}  \beta^{t+h-2006}  \left\{ \sum_{ \substack{y = \text{ stay}, \\ \text{ local}, \text{ spatial}}} \Big[  \omega^{*}_{y | \ell}  \Delta {\ln p^{y,t+h }_{\ell, t}}    \Big] +\frac{1}{\gamma}\sum_{\substack{y = \text{ stay}, \\ \text{ local}, \text{ spatial}
}
}\left[\frac{\omega_{y | \ell}^{*}}{1-p_{y |\ell} }\left(\Delta {\ln p^{y,t+h }_{\ell, t}}  \right)^{2}\right] - \frac{1}{2\gamma} \sum_{ \substack{y,y' = \text{ stay}, \\ \text{ local}, \text{ spatial}}} \sum_{ \substack{y' \neq y  }}   \left[  \frac{\omega_{y | \ell}^{*}}{p_{n |\ell} } \Delta {\ln p^{n, t+h }_{\ell,t}}   \Delta {\ln p^{y, t+h }_{\ell ,t}}   \right] \right\} . \nonumber
\end{aligned}
$$

The first column denotes HHI deciles. The welfare changes are in percentage changes relative to the baseline period for the average shock in each HHI decile bin, separately reporting the effect of positive and negative shocks. The next three columns present, for positive shocks: the FOA term and the SOA term of the welfare formula along with their sum. The last three columns present similar terms for negative shocks.

### Results

Our welfare results are summarized in [Table](#tab:main_results). We separately report the effect of positive and negative shocks for all HHI deciles.[^24] The first-order approximation term (FOA) captures the direct welfare impact of shocks, while the second-order approximation term (SOA) reflects the insurance value that comes from a city's economic diversity. Overall, our findings highlight that economic diversity is a key determinant of the heterogeneity in welfare outcomes observed across cities.[^25]

Focusing first on positive shocks, our sufficient-statistic framework reveals that more concentrated cities (with largest HHI values, or in higher deciles) exhibit larger first-order gains than more diversified cities, hinting at possible gains from specialization. That said, more negative values for SOA terms significantly alter these gains. The SOA terms are in fact large enough to revert the rising FOA gains with HHI in the upper half of HHI deciles. These findings suggest that lack of economic diversification also comes with negative insurance value, especially for the most specialized cities.

The effects of negative shocks strikingly confirm that economic diversity plays a substantial role in providing insurance against adverse economic shocks. Indeed, we observe negative second-order welfare effects (compared to the magnitude of the FOA terms) that increasing more strongly in magnitude with HHI. In other words, more diversified cities are associated with significantly smaller welfare losses from negative shocks, due to smaller change from the SOA term measuring "insurance value". This result echoes our empirical findings in section [3.4](#subsec:HHI_empirics) where we showed that, in response to negative shocks, local non-spatial churn and net spatial inflows fall less in more diversified labor markets.

Our results underscore the importance of economic diversification as a strategy for enhancing economic resilience: A more diversified economy may facilitate labor reallocation, reduce costly spatial mobility, and allow for more stable employment outcomes in the face of sector- or occupation-specific downturns.[^26] Perhaps more importantly, our results illustrate the applicability and usefulness of the higher-order sufficient-statistic approach using granular worker flows that we put forward in this paper.

<a id="sec:Conclusion"></a>

## Conclusion

This paper develops a second-order sufficient-statistics framework to analyze local shocks affect workers' welfare and applies it to the role of local economic diversity using rich worker flows data from France. We find substantial welfare insurance gains from diversity in the face of local labor demand shocks.

At a first-order approximation, workers in more specialized cities experience larger welfare gains from positive shocks, highlighting potential benefits of specialization. However, the second-order term, which captures the insurance value of diversity, shows that high economic concentration entails larger losses from negative shocks. This underscores the crucial role of economic diversity in buffering local labor markets against adverse shocks.

Our approach and results provide a framework for future empirical and quantitative studies of local labor market responses, offering new insights into how city-level characteristics shape the impact of national economic fluctuations.

## Additional Figures


<a id="fig:Reallocation_distribution"></a>

> **Mobility of workers across cities, sectors and occupations**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: Figure (a) illustrates the distribution (density) of workers who change cities (spatial mobility). The lines decompose this mobility into different combinations of transitions across sectors and occupations. Specifically, i represents moves that are purely geographic, is includes both geographic and sectoral changes, io represents geographic and occupational changes, and iso captures changes across all three dimensions: geographic, sectoral, and occupational. Figure (b) displays the density of workers who remain in the same city (nonspatial mobility). The lines break down non-geographic transitions, with s representing sector-only changes, o representing occupation-only changes, and so for workers who switch both sectors and occupations without changing location.


<a id="fig:bartik_distrib"></a>

> **Distribution of Bartik shocks**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: This figure shows the distribution of labor demand shocks as constructed in Equation [eq:Bartik_def]. The distribution captures the range of positive and negative shocks affecting cities, highlighting the heterogeneity in local labor demand changes across different regions.


<a id="fig:employment_size_hhi"></a>

> **Distribution of HHI over the time series**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: This figure presents the distribution of the Herfindahl-Hirschman Index (HHI) for local labor markets over time. It highlights key percentiles, including the 95th (p95), 90th (p90), mean, 10th (p10), and 5th (p5) values, offering insight into the variation in economic concentration across cities throughout the panel period.


<a id="fig:bartik_distrib_HHI"></a>

> **Density of Bartik shock by HHI Top and Bottom Quartile**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: This figure shows the distribution of Bartik shocks, as constructed in Equation [eq:Bartik_def], categorized by the bottom and top quartiles of the Herfindahl-Hirschman Index (HHI) distribution. It compares how labor demand shocks are distributed across cities with low and high economic concentration.


<a id="fig:response_HHI_bin"></a>

> **HHI and flows**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: Figure (a) displays the correlation between the Herfindahl-Hirschman Index (HHI) and the share of local employment that transitions to another occupation, sector, or both, without leaving the locality (nonspatial flows). Figure (b) shows the correlation between the HHI and the share of local employment that involves geographic mobility (spatial flows), reflecting how economic concentration influences worker relocation across cities.


<a id="fig:margin_hhi_asym"></a>

> **Welfare components: FOA, SOA, HHI**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).
>
> Notes: This figure presents scatterplots illustrating the relationship between the first-order approximation (FOA) and second-order approximation (SOA) terms, as constructed in Section 4. The FOA terms represent the direct welfare impact of labor demand shocks, capturing the immediate effects on local labor markets. The SOA terms measure the "insurance value" derived from economic diversification, reflecting how cities with different levels of sectoral and occupational diversity buffer the effects of these shocks.


<a id="fig:hhi_welfare"></a>

> **Heterogeneous Insurance (Positive)**
>
> Figure available in the [PDF](/research/economic_resilience_v2.pdf).


## Additional Tables

<a id="table:raw_statistics_quarterly"></a>

> **Quarterly worker reallocation across markets**

---------------------------------------------------------------------------------------- -------- ------- --------- --------- -------- --------
                                                                                            Median    SD       p5        p25      p75      p95
  $\text{Emp}_i$                                                                             693     6,396     170       380     1,633    5,252
  $\Delta \text{Emp}_i$                                                                     0.32 %   0.26    -0.11%    0.16 %    0.47 %   0.75 %
  $\frac{\text{Flow}_{i' \rightarrow i}}{\text{Emp}_i}$                                     1.67 %   0.59    1.04 %    1.32 %    2.08 %   2.89 %
  $\frac{\text{Flow}_{i \rightarrow i'}}{\text{Emp}_i}$                                     1.63 %   0.58    1.01 %    1.32 %    2.00 %   2.91 %
  $\frac{\text{Flow}_{s,o}}{\text{Emp}_i}$                                                  2.96 %   0.66    2.11 %    2.57 %    3.48 %   4.17 %
  $\frac{\text{Flow}_{i' \rightarrow i} - \text{Flow}_{i \rightarrow i'}}{\text{Emp}_i}$    0.03 %   0.13    -0.14 %   -0.05 %   0.12 %   0.26 %
  $\frac{\text{Flow}_{ne \rightarrow e} - \text{Flow}_{e \rightarrow ne}}{\text{Emp}_i}$    0.32 %   0.32    -0.11 %   0.16 %    0.50 %   0.86 %

  ---------------------------------------------------------------------------------------- -------- ------- --------- --------- -------- --------

<a id="table:cum_estim_year_5"></a>

> **Response to a labor demand shock**

-- -------------- -------------------------------------- -------------------------------------- --------------------------------------------------------------------------- -------------------------- -----------------------------------------------------------------------------------------------------------------
      $\text{Emp}$   $\sum \text{Flow}_{i'\rightarrow i}$   $\sum \text{Flow}_{i\rightarrow i'}$   $\sum \text{Flow}_{i'\rightarrow i} - \sum \text{Flow}_{i\rightarrow i'}$   $\sum \text{Flow}_{s,o}$   $\sum \text{Flow}_{s,o} - \left[\sum \text{Flow}_{i'\rightarrow i} - \sum \text{Flow}_{i\rightarrow i'}\right]$
       0.40\*\*\*                 0.37\*\*\*                              0.19\*\*                                                0.18\*\*\*                                          0.40\*\*\*                                                             0.23\*\*
         (0.10)                     (0.11)                                 (0.09)                                                   (0.06)                                              (0.09)                                                                (0.09)

  -- -------------- -------------------------------------- -------------------------------------- --------------------------------------------------------------------------- -------------------------- -----------------------------------------------------------------------------------------------------------------

<a id="table:Pooledreg_quarterly_asym"></a>

> **Effect of Bartik on worker reallocation: asymmetry and hhi**

*The table layout is available in the PDF.*

## Additional Results

To complement the analysis in the main text, we also introduce an LPIV that identifies the heterogeneous response, but without focusing on the asymmetric response. The estimating equation is specified as follows:

<a id="equation:Spec_Asymm"></a>

$$
\Delta y_{i, t+h}=\alpha^h+\gamma_t+\gamma_i+\beta_h \operatorname{Shock}_{i, t}+\psi_h\left(\operatorname{Shock}_{i, t} \times \operatorname{HHI}_i\right)+\sum_{m=1}^8 \gamma_m^h y_{i, t-m}+\sum_{m=1}^8 \omega_m^h \operatorname{Shock}_{i, t-m}+\sum_{m=1}^8 \delta_m^h Z_{i, t-m}
$$


In this equation, $\Delta y_{i,t+h}$ represents the change in the outcome variable of interest for location $i$ at horizon $h$, allowing us to model the response over a specified time horizon. The intercept $\alpha^h$ is a time-specific constant that adjusts for general trends in the data, while the fixed effects $\gamma_t$ and $\gamma_i$ control for temporal and spatial heterogeneity. These fixed effects are essential to ensure that the estimated response to the shock is not biased by time-invariant location-specific factors or broader macroeconomic trends. The key term, $\beta_h \operatorname{Shock}_{i,t}$, captures the direct effect of the shock at time $t$ on the outcome at time $t+h$. The shock $\operatorname{Shock}_{i,t}$ is an exogenous disturbance affecting location $i$ and is assumed to vary across locations and time. The term is furthermore interacted with the local $HHI_i$ as introduced in the main text.

To account for persistence in the outcome and the potential for shocks to have lasting effects, the model includes lags of both the outcome variable and the shock itself. The terms $\sum_{m=1}^8 \gamma_m^h y_{i,t-m}$ represent the influence of past values of the outcome on current changes, while the terms $\sum_{m=1}^8 \omega_m^h \operatorname{Shock}_{i,t-m}$ capture the dynamic effects of past shocks. These lagged terms allow us to model the full dynamic response of the outcome to shocks, recognizing that the effect of a shock may persist over multiple periods.

<a id="table:Pooledreg_quarterly_sym"></a>

> **Effect of Bartik on worker reallocation**

---------------------------------------- ------------ ------------ ------------- ------------- ------------- ---------- ------------ -------------
                                                Q1           Q2           Q3          Year 1        Year 2       Year 3      Year 4       Year 5
  **$\text{Emp}_i$**
  $\text{Bartik}$                           0.30\*\*\*   0.37\*\*\*   0.61\*\*\*    0.61\*\*\*    0.53\*\*\*    0.43\*\*    0.60\*\*    0.65\*\*\*
                                              (0.09)       (0.07)       (0.09)        (0.14)        (0.13)       (0.16)      (0.24)       (0.17)
  $\text{Bartik} \times \text{HHI}_{so}$       0.02         0.01      -0.05\*\*\*    -0.06\*\*      -0.03\*      -0.00       -0.05        -0.05\*
                                              (0.02)       (0.01)       (0.02)        (0.02)        (0.02)       (0.03)      (0.04)       (0.03)
  **$\text{Flow}_{s,o}$**
  $\text{Bartik}$                           0.22\*\*\*   0.35\*\*\*   0.36\*\*\*    0.34\*\*\*    0.35\*\*\*    0.34\*\*    0.35\*\*    0.43\*\*\*
                                              (0.06)       (0.10)       (0.10)        (0.10)        (0.11)       (0.13)      (0.15)       (0.16)
  $\text{Bartik} \times \text{HHI}_{so}$      -0.02        -0.03        -0.03\*     -0.03\*\*\*     -0.02\*      -0.01       -0.00         -0.02
                                              (0.02)       (0.02)       (0.02)        (0.01)        (0.01)       (0.02)      (0.02)       (0.02)
  **$\text{Flow}_{i' \rightarrow i}$**
  $\text{Bartik}$                              0.07       0.12\*\*    0.35\*\*\*    0.43\*\*\*    0.37\*\*\*     0.26\*    0.41\*\*\*   0.55\*\*\*
                                              (0.05)       (0.06)       (0.12)        (0.15)        (0.12)       (0.14)      (0.14)       (0.18)
  $\text{Bartik} \times \text{HHI}_{so}$    0.02\*\*\*   0.04\*\*\*      -0.02       -0.05\*\*       -0.02        0.00       -0.02       -0.06\*\*
                                              (0.01)       (0.01)       (0.02)        (0.02)        (0.02)       (0.02)      (0.02)       (0.03)
  **$\text{Flow}_{i \rightarrow i'}$**
  $\text{Bartik}$                              0.03       0.12\*\*       0.05        0.23\*\*     0.36\*\*\*    0.37\*\*   0.38\*\*\*   0.56\*\*\*
                                              (0.04)       (0.05)       (0.07)        (0.10)        (0.10)       (0.18)      (0.14)       (0.12)
  $\text{Bartik} \times \text{HHI}_{so}$      -0.00      -0.02\*\*       0.00         -0.04\*     -0.06\*\*\*    -0.04      -0.04\*     -0.09\*\*\*
                                              (0.01)       (0.01)       (0.01)        (0.02)        (0.01)       (0.03)      (0.02)       (0.02)
  Observations                                14,535       14,250       13,965        13,680        12,540       11,400      10,260        9,120
  ---------------------------------------- ------------ ------------ ------------- ------------- ------------- ---------- ------------ -------------

<a id="table:Pooledreg_quarterly"></a>

> **Effect of Bartik on worker reallocation**

-------------------------------------------------------------------------------------------- ------------ ------------- ------------ ------------- ------------- ------------ ------------ -------------
                                                                                                    Q1           Q2            Q3         Year 1        Year 2        Year 3       Year 4       Year 5
  **$\text{Flow}_{i' \rightarrow i} - \text{Flow}_{i \rightarrow i'}$**
  $\text{Bartik}$                                                                                  0.03         0.02        0.32\*\*     0.22\*\*        -0.01       -0.13\*        0.01         -0.04
                                                                                                  (0.05)       (0.06)        (0.14)       (0.09)        (0.09)        (0.07)       (0.08)       (0.06)
  $\text{Bartik} \times \text{HHI}_{so}$                                                         0.03\*\*    0.05\*\*\*      -0.02         -0.01      0.05\*\*\*    0.05\*\*\*      0.02       0.04\*\*
                                                                                                  (0.09)       (0.01)        (0.02)       (0.01)        (0.02)        (0.01)       (0.02)       (0.01)
  **$\text{Flow}_{s,o} - [ \text{Flow}_{i'\rightarrow i} - \text{Flow}_{i\rightarrow i'}]$**
  $\text{Bartik}$                                                                               0.20\*\*\*   0.37\*\*\*       0.06         0.14       0.36\*\*\*    0.48\*\*\*    0.35\*\*    0.47\*\*\*
                                                                                                  (0.07)       (0.09)        (0.10)       (0.08)        (0.10)        (0.17)       (0.17)       (0.11)
  $\text{Bartik} \times \text{HHI}_{so}$                                                        -0.05\*\*    -0.08\*\*\*     -0.01         -0.02      -0.07\*\*\*   -0.06\*\*      -0.02       -0.05\*\*
                                                                                                  (0.02)       (0.02)        (0.02)       (0.02)        (0.02)        (0.02)       (0.04)       (0.02)
  **$\text{Flow}_{i,s,o}$**
  $\text{Bartik}$                                                                               0.33\*\*\*   0.58\*\*\*    0.76\*\*\*   1.00\*\*\*    1.07\*\*\*     0.96\*\*    1.13\*\*\*   1.51\*\*\*
                                                                                                  (0.10)       (0.14)        (0.19)       (0.31)        (0.26)        (0.42)       (0.39)       (0.44)
  $\text{Bartik} \times \text{HHI}_{so}$                                                           0.00         -0.00       -0.05\*      -0.11\*\*    -0.10\*\*\*     -0.04        -0.06       -0.16\*\*
                                                                                                  (0.03)       (0.03)        (0.03)       (0.05)        (0.04)        (0.06)       (0.05)       (0.06)
  **$\text{Flow}_{ne \rightarrow e} - \text{Flow}_{e \rightarrow ne}$**
  $\text{Bartik}$                                                                               0.30\*\*\*   0.43\*\*\*     0.31\*\*    0.37\*\*\*    0.50\*\*\*    0.52\*\*\*    0.54\*\*    0.68\*\*\*
                                                                                                  (0.08)       (0.07)        (0.14)       (0.13)        (0.09)        (0.17)       (0.12)       (0.09)
  $\text{Bartik} \times \text{HHI}_{so}$                                                          -0.01      -0.05\*\*\*     -0.04       -0.05\*\*    -0.07\*\*\*     -0.04       -0.07\*     -0.09\*\*\*
                                                                                                  (0.01)       (0.02)        (0.03)       (0.02)        (0.02)        (0.03)       (0.03)       (0.02)
  $Emp_i - \text{Flow}_{i' \rightarrow i} - \text{Flow}_{i \rightarrow i'}$
  $\text{Bartik}$                                                                               0.53\*\*\*   0.80\*\*\*    0.70\*\*\*   0.74\*\*\*    0.88\*\*\*    0.89\*\*\*    0.93\*\*    1.12\*\*\*
                                                                                                  (0.12)       (0.13)        (0.15)       (0.19)        (0.18)        (0.27)       (0.35)       (0.26)
  $\text{Bartik} \times \text{HHI}_{so}$                                                          -0.03      -0.08\*\*\*   -0.07\*\*    -0.08\*\*\*   -0.10\*\*\*   -0.06\*\*      -0.07      -0.11\*\*\*
                                                                                                  (0.03)       (0.02)        (0.03)       (0.03)        (0.03)        (0.03)       (0.05)       (0.03)
  Observations                                                                                    14,535       14,250        13,965       13,680        12,540        11,400       10,260        9,120
  -------------------------------------------------------------------------------------------- ------------ ------------- ------------ ------------- ------------- ------------ ------------ -------------

<a id="tab:ranking_env_low_beta"></a>

> **Welfare Effects and Decomposition by Economy Diversification**

+:-------:+:-------------:+:--------------:+:-------:+:-------------:+:--------------:+:-------:+
| HHI     | Positive Shocks                          | Negative Shocks                          |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| Deciles | *First order* | *Second order* | *Total* | *First order* | *Second order* | *Total* |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 1st     | 3.54          | -1.94          | 1.60    | -0.44         | -0.03          | -0.46   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 2nd     | 3.70          | -1.50          | 2.20    | -0.42         | -0.04          | -0.46   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 3rd     | 3.71          | -1.55          | 2.15    | -0.35         | -0.07          | -0.42   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 4th     | 3.86          | -1.70          | 2.16    | -0.56         | -0.10          | -0.66   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 5th     | 3.64          | -1.06          | 2.58    | -0.69         | -0.13          | -0.82   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 6th     | 3.50          | -0.46          | 3.04    | -0.90         | -0.14          | -1.04   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 7th     | 3.91          | -2.38          | 1.53    | -0.85         | -0.23          | -1.08   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 8th     | 5.02          | -3.41          | 1.61    | -0.70         | -0.31          | -1.01   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 9th     | 4.75          | -3.06          | 1.69    | -0.84         | -0.39          | -1.23   |
+---------+---------------+----------------+---------+---------------+----------------+---------+
| 10th    | 6.92          | -3.97          | 2.95    | -0.92         | -0.99          | -1.91   |
+---------+---------------+----------------+---------+---------------+----------------+---------+

**Notes:** We set $\gamma=2$ and discount future continuation values relative to the base period using $\beta = 0.9$:

$$
\begin{aligned}
\Delta { \ln \mathcal{G}^{*}_{\ell} } & \equiv \sum_{t=\text{2006Q1}}^{\text{2019Q4}} \sum_{h=0}^{20}  \beta^{t+h-2006}  \left\{ \sum_{ \substack{y = \text{ stay}, \\ \text{ local}, \text{ spatial}}} \Big[  \omega^{*}_{y | \ell}  \Delta {\ln p^{y,t+h }_{\ell, t}}    \Big] +\frac{1}{\gamma}\sum_{\substack{y = \text{ stay}, \\ \text{ local}, \text{ spatial}
}
}\left[\frac{\omega_{y | \ell}^{*}}{1-p_{y |\ell} }\left(\Delta {\ln p^{y,t+h }_{\ell, t}}  \right)^{2}\right] - \frac{1}{2\gamma} \sum_{ \substack{y,y' = \text{ stay}, \\ \text{ local}, \text{ spatial}}} \sum_{ \substack{y' \neq y  }}   \left[  \frac{\omega_{y | \ell}^{*}}{p_{n |\ell} } \Delta {\ln p^{n, t+h }_{\ell,t}}   \Delta {\ln p^{y, t+h }_{\ell ,t}}   \right] \right\} . \nonumber
\end{aligned}
$$

The first column denotes HHI deciles. The welfare changes are in percentage changes relative to the baseline period for the average shock in each HHI decile bin, separately reporting the effect of positive and negative shocks. The next three columns present, for positive shocks: the FOA term and the SOA term of the welfare formula along with their sum. The last three columns present similar terms for negative shocks.

<a id="tab:ranking_env"></a>

> **Extended Welfare Effects and Decomposition by Economy Diversification**

+:-------:+:-----------:+:-----------:+:-------------------:+:-----:+:-------:+:-----------:+:-----------:+:-------------------:+:-----:+:-------:+
| HHI     | Positive Shocks                                                   | Negative Shocks                                                   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| Deciles | *FOA (Avg)* | *FOA (Obs)* | $\Delta$ *Exposure* | *SOA* | *Total* | *FOA (Avg)* | *FOA (Obs)* | $\Delta$ *Exposure* | *SOA* | *Total* |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 1st     | 7.03        | 7.10        | 0.07                | -3.25 | 3.85    | -1.53       | -1.00       | 0.54                | -0.06 | -1.06   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 2nd     | 7.20        | 7.18        | -0.02               | -2.49 | 4.68    | -1.56       | -1.00       | 0.56                | -0.09 | -1.09   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 3rd     | 7.34        | 7.03        | -0.31               | -2.57 | 4.46    | -1.58       | -0.90       | 0.68                | -0.15 | -1.05   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 4th     | 7.49        | 7.39        | -0.11               | -2.82 | 4.57    | -1.61       | -1.43       | 0.18                | -0.24 | -1.66   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 5th     | 7.68        | 6.77        | -0.91               | -1.74 | 5.03    | -1.64       | -1.82       | -0.19               | -0.30 | -2.12   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 6th     | 7.82        | 6.49        | -1.33               | -0.74 | 5.75    | -1.66       | -2.29       | -0.63               | -0.33 | -2.62   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 7th     | 7.96        | 7.36        | -0.60               | -4.02 | 3.34    | -1.68       | -2.21       | -0.54               | -0.57 | -2.78   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 8th     | 8.19        | 9.41        | 1.22                | -5.82 | 3.59    | -1.71       | -1.75       | -0.04               | -0.77 | -2.52   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 9th     | 8.53        | 8.76        | 0.22                | -5.24 | 3.51    | -1.76       | -2.20       | -0.44               | -0.97 | -3.17   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+
| 10th    | 10.28       | 12.75       | 2.47                | -6.94 | 5.81    | -2.03       | -2.38       | -0.35               | -2.55 | -4.93   |
+---------+-------------+-------------+---------------------+-------+---------+-------------+-------------+---------------------+-------+---------+

**Notes:** We set $\gamma=2$ and discount future continuation values relative to the base period using $\beta = 0.99$:

$$
\begin{aligned}
\Delta { \ln \mathcal{G}^{*}_{\ell} } & \equiv \sum_{t=\text{2006Q1}}^{\text{2019Q4}} \sum_{h=0}^{20}  \beta^{t+h-2006}  \Bigg\{
\underbrace{\sum_{y\in\{\text{stay, local, spatial}\}}\! \omega^{*}_{y | \ell} \, \Delta {\ln p^{y,t+h }_{\ell, t}}}_{\text{FOA}}
+\;\frac{1}{\gamma}\underbrace{\sum_{y}\frac{\omega_{y | \ell}^{*}}{1-p_{y |\ell} }\!\left(\Delta {\ln p^{y,t+h }_{\ell, t}}  \right)^{2}}_{\text{SOA (own)}}
-\;\frac{1}{2\gamma}\underbrace{\sum_{y\neq y'} \frac{\omega_{y | \ell}^{*}}{p_{y' |\ell} } \, \Delta {\ln p^{y', t+h }_{\ell,t}} \, \Delta {\ln p^{y, t+h }_{\ell ,t}}}_{\text{SOA (cross)}}
\Bigg\}.
\end{aligned}
$$

 The first column reports HHI deciles. We separately report positive and negative shocks. For each shock sign, the five columns are: (i) *FOA (Avg)*: first-order welfare computed using a *common shock path* and *decile-mean HHI* (holds exposure heterogeneity fixed); (ii) *FOA (Obs)*: first-order welfare using each decile's *observed HHI and exposure*; (iii) $\Delta$*Exposure* $\equiv$ *FOA (Obs)* $-$ *FOA (Avg)*, which isolates the contribution of exposure heterogeneity; (iv) *SOA*: second-order term (own and cross components combined); (v) *Total* $=$ *FOA (Obs)* $+$ *SOA*. All entries are percentage changes relative to the baseline period; rows are decile-bin averages.

## Additional Derivations

This appendix section provides additional derivations for the results in Section 2 and 4 as well as a motivation for the utilization of HHI indices.

<a id="subsec:Theory_derivations"></a>

### Proof of Proposition 1 and 2 (Section [2](#sec:Theory))

In this subsection, we provide additional derivations for the results in Section 2. Specifically, we present the derivations for the approximation results. To begin, it will be helpful to reiterate key results from ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)), specifically, their Theorem 1, which relates conditional choice probabilities and continuation values to the subdifferential of the $\mathcal{G}$ function and the convex conjugate of the $\mathcal{G}$ function, i.e.


$$
p \in \partial \mathcal{G}(w)
$$

and,

$$
w \in \partial \mathcal{G}^*(p)
$$

where the former equation is a generalization of the Williams-Daly-Zachery (WDZ) theorem as discussed in ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) and the latter generalizes results in ([Hotz and Miller 1993](#ref-Hotz1993-lu)). We then start by approximating the $\mathcal{G}^*$ function around $w_0$,


$$
\mathcal{G}(w)=\mathcal{G}(w^{0})+\sum_{y}\frac{\partial\mathcal{G}(w)}{\partial w_{y}}\left(w_{y}-w_{y}^{0}\right)+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\partial^{2}\mathcal{G}(w)}{\partial w_{y}\partial w_{y'}}\left(w_{y}-w_{y}^{0}\right)\left(w_{y'}-w_{y'}^{0}\right)+o\left(\cdot\right)
$$


$$
d\mathcal{G}(w)=\sum_{y}\frac{\partial\mathcal{G}(w)}{\partial w_{y}}dw_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\partial^{2}\mathcal{G}(w)}{\partial w_{y}\partial w_{y'}}dw_{y}dw_{y'}+o\left(\cdot\right)
$$

and similarly, for the convex conjugate function,


$$
\mathcal{G}^{*}(p)=\mathcal{G}^{*}(p^{0})+\sum_{y}\frac{\partial\mathcal{G}^{*}(p)}{\partial p_{y}}\left(p_{y}-p_{y}^{0}\right)+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\partial^{2}\mathcal{G}^{*}(p)}{\partial p_{y}\partial p_{y'}}\left(p_{y}-p_{y}^{0}\right)\left(p_{y'}-p_{y'}^{0}\right)+o\left(\cdot\right)
$$


$$
d\mathcal{G}^{*}(p)=\sum_{y}\frac{\partial\mathcal{G}^{*}(p)}{\partial p_{y}}dp_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\partial^{2}\mathcal{G}^{*}(p)}{\partial p_{y}\partial p_{y'}}dp_{y}dp_{y'}+o\left(\cdot\right)
$$


In terms of log changes we have,


$$
d\ln\mathcal{G}(w)=\sum_{y}\frac{\frac{\partial\mathcal{G}(w)}{\partial w_{y}}w_{y}}{\mathcal{G}(w)}d\ln w_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\frac{\partial^{2}\mathcal{G}(w)}{\partial w_{y}\partial w_{y'}}w_{y}w_{y'}}{\mathcal{G}(w)}d\ln w_{y}d\ln w_{y'}+o\left(\cdot\right)
$$


$$
d\ln\mathcal{G}^{*}(p)=\sum_{y}\frac{\frac{\partial\mathcal{G}^{*}(p)}{\partial p_{y}}p_{y}}{\mathcal{G}^{*}(p)}d\ln p_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\frac{\partial^{2}\mathcal{G}^{*}(p)}{\partial p_{y}\partial p_{y'}}p_{y}p_{y'}}{\mathcal{G}^{*}(p)}d\ln p_{y}d\ln p_{y'}+o\left(\cdot\right)
$$


Applying Theorem 1 from ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)), we obtain,


$$
d\ln\mathcal{G}(w)=\sum_{y}\frac{p_{y}w_{y}}{\mathcal{G}(w)}d\ln w_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\frac{\partial p_{y}}{\partial w_{y'}}\frac{w_{y'}}{p_{y}}p_{y}w_{y}}{\mathcal{G}(w)}d\ln w_{y}d\ln w_{y'}+o\left(\cdot\right)
$$


$$
d\ln\mathcal{G}^{*}(p)=\sum_{y}\frac{w_{y}p_{y}}{\mathcal{G}^{*}(p)}d\ln p_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\frac{\frac{\partial w_{y}}{\partial p_{y'}}\frac{p_{y'}}{w_{y}}w_{y}p_{y}}{\mathcal{G}^{*}(p)}d\ln p_{y}d\ln p_{y'}+o\left(\cdot\right)
$$


Defining the cross-elasticity, $\varrho_{y,y'}^{p,w}\equiv\frac{\partial\ln p_{y}}{\partial\ln w_{y'}}=\frac{\partial p_{y}}{\partial w_{y'}}\frac{w_{y'}}{p_{y}}$ and $\varrho_{y,y'}^{w,p}\equiv\frac{\partial\ln w_{y}}{\partial\ln p_{y'}}=\frac{\partial w_{y}}{\partial p_{y'}}\frac{p_{y'}}{w_{y}}$,


$$
d\ln\mathcal{G}(w)=\sum_{y}\frac{p_{y}w_{y}}{\mathcal{G}(w)}d\ln w_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\varrho_{y,y'}^{p,w}\frac{p_{y}w_{y}}{\mathcal{G}(w)}d\ln w_{y}d\ln w_{y'}+o\left(\cdot\right)
$$


$$
d\ln\mathcal{G}^{*}(p)=\sum_{y}\frac{w_{y}p_{y}}{\mathcal{G}^{*}(p)}d\ln p_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\varrho_{y,y'}^{w,p}\frac{w_{y}p_{y}}{\mathcal{G}^{*}(p)}d\ln p_{y}d\ln p_{y'}+o\left(\cdot\right)
$$


Rewrite in terms of generic weights,$\omega_{y}\equiv\frac{w_{y}p_{y}}{\mathcal{G}(w)}$ and $\omega_{y}^{*}\equiv\frac{w_{y}p_{y}}{\mathcal{G}^{*}(p)}$,


$$
d\ln\mathcal{G}(w)=\sum_{y}\omega_{y}d\ln w_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\varrho_{y,y'}^{p,w}\omega_{y}d\ln w_{y}d\ln w_{y'}+o\left(\cdot\right)
$$


$$
d\ln\mathcal{G}^{*}(p)=\sum_{y}\omega_{y}^{*}d\ln p_{y}+\frac{1}{2}\sum_{y}\sum_{y'}\varrho_{y,y'}^{w,p}\omega_{y}^{*}d\ln p_{y}d\ln p_{y'}+o\left(\cdot\right)
$$


which is the stated result and gives us a second-order characterization of the (conjugate) social surplus.[^27]

<a id="subsec:Theory_derivations_sec_4"></a>

### Derivations for Section [4](#sec:Welfare)

Turning towards an isoelastic labor supply system, i.e.


$$
p_y=\frac{w_y^\gamma}{\sum_y w_y^\gamma}
$$


We can totally differentiate and obtain,


$$
\varepsilon_{y,y'}^{w,p}\equiv\frac{\partial\ln w_{y}}{\partial\ln p_{y'}}=\left(\frac{\partial p_{y}}{\partial w_{y'}}\frac{w_{y'}}{p_{y}}\right)^{-1}=\left(-p_{y'}\gamma\right)^{-1}\qquad\text{if}\qquad y=y'
$$


$$
\varepsilon_{y,y'}^{w,p}\equiv\frac{\partial\ln w_{y}}{\partial\ln p_{y'}}=\left(\frac{\partial p_{y}}{\partial w_{y'}}\frac{w_{y'}}{p_{y}}\right)^{-1}=\left(\gamma-p_{y}\gamma\right)^{-1}\qquad\text{if}\qquad y\neq y'
$$


Substituting, we obtain,


$$
d\ln\mathcal{G}^{*}(p)=\sum_{y}\omega_{y}^{*}d\ln p_{y}+\frac{1}{\gamma}\sum_{y}\frac{\omega_{y}^{*}}{1-p_{y}}\left(d\ln p_{y}\right)^{2}-\frac{1}{2\gamma}\sum_{y}\sum_{y'\neq y}\frac{\omega_{y}^{*}}{p_{y'}}d\ln p_{y}d\ln p_{y'}+o\left(\cdot\right)
$$


Assuming, $y\in \mathcal{Y}=\left[\text{Stay},\text{Local},\text{Spatial} \right]$, we obtain,


$$
\begin{aligned}
\frac{\mathrm{d}\ln\mathscr{G}^{*}(p;x)}{\mathrm{d}\ln\bar{x}}\approx & \sum_{\substack{\text{ y=stay, }\\
\text{ local, spatial }
}
}\left[\omega_{Y}^{*}\left(x\right)\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{x}}\right] +\frac{1}{\gamma}\sum_{\substack{\text{ y=stay, }\\
\text{ local, spatial }
}
}\left[\frac{\omega_{Y}^{*}\left(x\right)}{1-p_{y}\left(x\right)}\left(\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{x}}\right)^{2}\right]\nonumber \\
 & -\frac{1}{2\gamma}\sum_{\substack{\text{ y=stay, }\\
\text{ local, spatial }
}
}\sum_{\substack{y'\neq y}
}\left[\frac{\omega_{y}^{*}\left(x\right)}{p_{y'}\left(x\right)}\frac{\mathrm{d}\ln p_{y}(x)}{\mathrm{d}\ln\bar{x}}\frac{\mathrm{d}\ln p_{n}(x)}{\mathrm{d}\ln\bar{x}}\right] \nonumber
\end{aligned}
$$


as reported in Section [4](#sec:Welfare).

Note that, while assuming stationarity is convenient because it allows us to interpret our first- and second-order welfare approximations as steady-state elasticities and to obtain a clean mapping between continuation values and Conditional Choice Probability (CCP), as discussed in ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)), it is not strictly necessary. Indeed, these approximations could also be computed period by period in a non-stationary setting.

<a id="subsec:Theory_and_HHI"></a>

### Proof of Corollary 1 (Section [2](#sec:Theory))

We now connect our second-order welfare approximation to an index of local labor market diversity. Consider a city $\mathcal{C}$ with local sub-population shares $\pi_\ell$. Starting from the general expression for welfare changes,

<a id="eq:Wdiff"></a>

$$
\begin{aligned}
\mathrm{d}\ln W_{\mathcal{C}}
&=\sum_{\ell\in\mathcal{C}}\pi_{\ell}\,\mathrm{d}\ln\mathcal{G}_{\ell} \nonumber\\
&=\sum_{\ell\in\mathcal{C}}\pi_{\ell}\Bigg[
\sum_{m}\frac{w_{m}}{\mathcal{G}_{\ell}}p_{m|\ell}\,\mathrm{d}\ln w_{m}
+\frac{1}{2}\sum_{m}\frac{w_{m}}{\mathcal{G}_{\ell}}p_{m|\ell}\gamma_{\ell}\bigl(\mathrm{d}\ln w_{m}\bigr)^{2}
-\frac{1}{2}\sum_{m,k}\frac{w_{m}}{\mathcal{G}_{\ell}}p_{m|\ell}\gamma_{\ell}p_{k|\ell}\,\mathrm{d}\ln w_{m}\,\mathrm{d}\ln w_{k}
\Bigg],
\end{aligned}
$$

where $p_{m|\ell}$ are conditional choice probabilities and $\gamma_{\ell}$ governs their cross substitution elasticities such that $\frac{\partial\ln p_{k|\ell}}{\partial\ln w_{m|\ell}} \equiv - \gamma_{\ell} \,p_{m|\ell} + \gamma_{\ell} \mathbb{1}_{\{m=k\}}$.

Define the log-elasticity weights $\lambda_{m|\ell}\equiv\frac{w_{m}}{\mathcal{G}_{\ell}}p_{m|\ell}$ (which satisfy $\sum_{m}\lambda_{m|\ell}=1$) and let $s_{m}\equiv\mathrm{d}\ln w_{m}$ denote the vector of shocks. Then [Equation](#eq:Wdiff) becomes

$$
\mathrm{d}\ln W_{\mathcal{C}}
=\sum_{\ell}\pi_{\ell}\left[
\sum_{m}\lambda_{m|\ell}s_{m}
+\frac{1}{2}\sum_{m}\gamma_{\ell}\lambda_{m|\ell}s_{m}^{2}
-\frac{1}{2}\sum_{m,k}\gamma_{\ell}\lambda_{m|\ell}\lambda_{k|\ell}s_{m}s_{k}
\right].
$$


Taking expectations with $\mathbb{E}[s]=0$ and $\mathrm{Cov}(s)=\Sigma$ eliminates the linear term and yields

$$
\mathbb{E}\bigl[\mathrm{d}\ln W_{\mathcal{C}}\bigr]
=\frac{1}{2}\sum_{\ell}\pi_{\ell}\gamma_{\ell}\left[
\sum_{m}\lambda_{m|\ell}\Sigma_{mm}-\lambda_{\ell}^{\top}\Sigma\lambda_{\ell}
\right].
$$

 Under equicorrelation ($\Sigma_{mm}=\sigma^{2}$ and $\Sigma_{mk}=\nu\sigma^2$ for $m\neq k$) and common elasticities ($\gamma_{\ell} = \gamma\; \forall \ell$), this simplifies to

$$
\mathbb{E}\bigl[\mathrm{d}\ln W_{\mathcal{C}}\bigr]
=\frac{1}{2}\sigma^{2}\left(1-\nu\right) \gamma
\left(1-\sum_{\ell}\pi_{\ell}\underbrace{\sum_{m}\lambda_{m|\ell}^{2}}_{\mathrm{HHI}_{\ell}}\right),
$$

 linking the expected welfare change to the complement of a concentration index akin to Herfindahl--Hirschman index (HHI).

This formalizes the intuition that the "insurance value" of diversity is proportional to the shock variance ($\sigma^2$) and inversely related to market concentration ($\mathrm{HHI}_{\mathcal{C}} \equiv \sum_{\ell}\pi_{\ell} \mathrm{HHI}_{\ell}$).

<a id="sec:comp_appdx"></a>

## Computational Details

This section explains how we recover welfare-consistent choice values from observed probabilities via the mass-transport approach and use them in our empirical welfare accounting.

The first subsection formally summarizes the ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) setup--convex surplus, its conjugate ${G}^*(p)$, and the optimal-transport formulation whose dual delivers continuation values and, after a single normalization, welfare weights.

The second subsection details how we deploy their approach and combine it with estimated dynamic responses (including sign asymmetry and HHI heterogeneity) to derive first- and second-order welfare effects.

The final subsection provides a pseudo-code as an overview of our approach.

<a id="mass-transport-approach"></a>

### Mass-Transport Approach (([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)))

Let $Y$ be a finite set of actions and, for state $x$, let $w=(w_y)_{y\in Y}$ denote choice-specific continuation values and $\varepsilon=(\varepsilon_y)_{y\in Y}\sim Q(\cdot\mid x)$ idiosyncratic shocks. The social surplus

$$
G(w;x)=\mathbb{E}\!\left[\max_{y\in Y}\{w_y+\varepsilon_y\}\,\middle|\,x\right]
$$

 is convex, and (under regularity) maps values to CCPs via the Williams--Daly--Zachary relation $p=\nabla G(w)$. Its convex conjugate

$$
G^*(p;x)=\sup_{w}\{p\cdot w-G(w;x)\}
$$

 satisfies $G(w;x)+G^*(p;x)=p\cdot w$ with $p\in\partial G(w;x)\iff w\in\partial G^*(p;x)$. Hence, given observed CCPs $p$, one can *invert* to rationalizing values $w$ using the subgradient of $G^*$.

#### Mass-transport formulation (CGS).

Chiong et al. ([2016](#ref-chiong_galichon_shum_duality)) show $G^*(p;x)$ equals the value of an optimal-transport problem that couples the multinomial $p$ over $Y$ with the shock distribution $Q$, under cost $c(y,\varepsilon)=-\varepsilon_y$. With a discrete approximation $Q\approx \{\varepsilon^{(s)}\}_{s=1}^S$ (with weights $1/S$ per ([Kennan 2006](#ref-kennan2006note))), this becomes the linear program

$$
\max_{\pi_{ys}\ge 0}\ \sum_{y,s}\varepsilon^{(s)}_y\,\pi_{ys}
\quad\text{s.t.}\quad
\sum_s \pi_{ys}=p_y\ \ \forall y,\qquad
\sum_y \pi_{ys}=\tfrac{1}{S}\ \ \forall s,
$$

 whose objective equals $G^*(p;x)$ (up to sign). The associated dual variables deliver a subgradient $w\in\partial G^*(p;x)$, i.e., the continuation values (up to an additive constant). This *mass-transport approach* accommodates general (including correlated) shock distributions and provides a numerically convenient inversion from CCPs to values, which we use as the basis for our welfare objects and weights.

### Implementation Overview

#### Welfare weights.

For each city--year cell, we start from observed conditional choice probabilities over three margins (stayers, spatial moves, non-spatial switches). We approximate the distribution of choice shocks with a finite support and solve the assignment linear program whose value equals the convex conjugate $G^*(p)$ of the social surplus. The program's dual variables deliver a subgradient of $G^*$, which we interpret as choice--specific continuation values, unique up to an additive constant. We impose a single normalization so that the dot product of these values with observed probabilities equals $G^*(p)$ in that cell. The resulting theory--consistent welfare weights are $\,\omega_y^*=(w_y p_y)/G^*(p)\,$.[^28]

#### Impulse responses, shocks, and welfare effects.

We then combine these weights with dynamic responses of probabilities that we estimate using local projections with external shifters. The empirical specification allows (i) separate positive and negative shocks, (ii) dynamic effects over multiple horizons including the contemporaneous term, and (iii) heterogeneity by market concentration via interactions with a Herfindahl index. From these estimated impulse responses, we form predicted paths for the three margins under three counterfactual scenarios of concentration and shock realization: holding both concentration and shifters at their across--cell averages, holding shifters at their average while letting concentration vary by cell, and allowing both to vary at observed values.

Per period and cell, first--order welfare is the inner product of weights and predicted probability changes. Second--order terms expand welfare around the baseline using the multinomial geometry: own--margin quadratic components enter with $w_y/(1-p_y)$ and cross--margin components enter with the appropriate negative terms scaled by $w_y/p_{y'}$. We discount over horizons and sum across time. For reporting, we aggregate by concentration quantiles, produce scatter and binscatter diagnostics against log concentration, and compile tables that separate positive and negative contributions and decompose second--order effects into diagonal and off--diagonal parts.

### Pseudo-code Implementation

1.  **Inputs (per baseline cell).** Choice probabilities $p$ ; discretization size $S$; discount factor $\delta$; elasticity $\gamma$; impulse-response coefficients with sign asymmetry and HHI interactions; counterfactual path of shocks.

2.  **Discretize shocks.** Draw $\{\varepsilon^{(s)}\}_{s=1}^S$ from a correlated multivariate distribution; set $w_s=1/S$.

3.  **Mass-transport program (conjugate side).** Solve

$$
\max_{\pi_{ys}\ge0}\ \sum_{y,s}\varepsilon^{(s)}_y\,\pi_{ys}
      \quad\text{s.t.}\quad
      \sum_s \pi_{ys}=p_y,\qquad \sum_y \pi_{ys}=w_s .
$$


4.  **Recover continuation values and normalize.** Construct a subgradient $w\in\partial G^*(p)$ from the duals and impose the single normalization $\sum_y w_y p_y = G^*(p)$. Form welfare weights $\omega_y^*=(w_y p_y)/G^*(p)$.

5.  **Build probability paths.** From the estimated responses, create $\Delta p_y(h)$ over horizons $h=0,\ldots,4$ with separate positive/negative components and HHI interactions; generate variants with averaged vs. observed HHI and shifters.

6.  **First-order welfare (FOA).** For each cell and horizon,

$$
\Delta W^{(1)}(h)=\sum_y \omega_y^*\,\Delta p_y(h)
$$


7.  **Second-order welfare (SOA).** For each cell and horizon,

$$
\Delta W^{(2)}(h)=\frac{1}{ \gamma}\sum_y \frac{\omega_y^*}{1-p_y}\big[\Delta p_y(h)\big]^2
      -\frac{1}{2 \gamma}\sum_{y}\sum_{y\ne y'} \frac{\omega_{y}^*}{p_{y'}}\,\Delta p_y(h)\,\Delta p_{y'}(h),
$$


8.  **Discounted welfare effects.** Sum over horizons $h$ for cell-level totals $\Delta W(h)=\delta^h\big[\Delta W^{(1)}(h)+\tfrac{1}{\gamma}\Delta W^{(2)}(h)\big]$; aggregate overall and by HHI quantiles; report FOA vs. SOA, positive vs. negative, and diagonal vs. off-diagonal components.


## References

<a id="ref-Allen2022-sn"></a>

Allen, Treb, Simon Fuchs, Rocio Madera, Sharat Ganapati, Alberto Graziano, and Judit Montoriol-Garriga. 2022. "Urban Welfare: Tourism in Barcelona." *Unpublished Manuscript*.

<a id="ref-artucc2010trade"></a>

Artuç, Erhan, Shubham Chaudhuri, and John McLaren. 2010. "Trade Shocks and Labor Adjustment: A Structural Empirical Approach." *American Economic Review* 100 (3): 1008--45.

<a id="ref-Atkin2018-rg"></a>

Atkin, David, Benjamin Faber, and Marco Gonzalez-Navarro. 2018. "Retail Globalization and Household Welfare: Evidence from Mexico." *Journal of Political Economy* 126 (1): 1--73.

<a id="ref-Autor_et_al_2014"></a>

Autor, David H., David Dorn, Gordon H. Hanson, and Jae Song. 2014. "Trade Adjustment: Worker-Level Evidence." *Quarterly Journal of Economics* 129 (4): 1799--860. <https://doi.org/10.1093/qje/qju026>.

<a id="ref-Baqaee2023-of"></a>

Baqaee, David R, and Ariel Burstein. 2023. "Welfare and Output with Income Effects and Taste Shocks." *Quarterly Journal of Economics* 138 (2): 769--834.

<a id="ref-Baqaee2020-oe"></a>

Baqaee, David R, and Emmanuel Farhi. 2020. "Productivity and Misallocation in General Equilibrium." *Quarterly Journal of Economics* 135 (1): 105--63.

<a id="ref-Beraja2023-dm"></a>

Beraja, Martin. 2023. "A Semistructural Methodology for Policy Counterfactuals." *Journal of Political Economy* 131 (1): 190--201.

<a id="ref-Blanchard_Katz_92"></a>

Blanchard, Olivier, and Lawrence Katz. 1992. "Regional Evolutions." *Brookings Papers on Economic Activity* 23 (1): 1--76.

<a id="ref-Caliendo2019-gz"></a>

Caliendo, Lorenzo, Maximiliano Dvorkin, and Fernando Parro. 2019. "Trade and Labor Market Dynamics: General Equilibrium Analysis of the China Trade Shock." *Econometrica* 87 (3): 741--835.

<a id="ref-chiong_galichon_shum_duality"></a>

Chiong, Khai Xiang, Alfred Galichon, and Matt Shum. 2016. "Duality in Dynamic Discrete-Choice Models." *Quantitative Economics* 7 (1): 83--115.

<a id="ref-Dao2017-uc"></a>

Dao, Mai, Davide Furceri, and Prakash Loungani. 2017. "Regional Labor Market Adjustment in the United States: Trend and Cycle." *Review of Economics and Statistics* 99 (2): 243--57.

<a id="ref-Deaton1989-ka"></a>

Deaton, Angus. 1989. "Rice Prices and Income Distribution in Thailand: A Non-Parametric Analysis." *Economic Journal* 99 (395): 1--37.

<a id="ref-Donald2025-kr"></a>

Donald, Eric, Masao Fukui, and Yuhei Miyauchi. 2025. "Unpacking Aggregate Welfare in a Spatial Economy." *SSRN Electron. J.*

<a id="ref-ebenstein2014occ"></a>

Ebenstein, Avraham, Ann Harrison, Margaret McMillan, and Shannon Phillips. 2014. "Estimating the Impact of Trade and Offshoring on American Workers using the Current Population Surveys." *Review of Economics and Statistics* 96 (4): 581--95. <https://doi.org/10.1162/REST_a_00400>.

<a id="ref-Fosgerau2021-zo"></a>

Fosgerau, Mogens, Emerson Melo, Matthew Shum, and Jesper R-V Sørensen. 2021. "Some Remarks on CCP-Based Estimators of Dynamic Models." *Economics Letters* 204 (May): 109911.

<a id="ref-fuchs2021spoils"></a>

Fuchs, Simon. 2021. *Spoils of War: Trade Shocks and Segmented Labor Markets in Spain During WWI*. Working Paper Series No. 2021-14. Federal Reserve Bank of Atlanta.

<a id="ref-Hotz1993-lu"></a>

Hotz, V Joseph, and Robert A Miller. 1993. "Conditional Choice Probabilities and the Estimation of Dynamic Models." *Review of Economic Studies* 60 (3): 497--529.

<a id="ref-Jorda2005"></a>

Jordà, Òscar. 2005. "Estimation and Inference of Impulse Responses by Local Projections." *American Economic Review* 95 (1): 161--82. <https://doi.org/10.1257/0002828053828518>.

<a id="ref-kennan2006note"></a>

Kennan, John. 2006. "A Note on Discrete Approximations of Continuous Distributions." *Mimeo*.

<a id="ref-Kim2020-bw"></a>

Kim, Ryan, and Jonathan Vogel. 2020. *Trade and Welfare (Across Local Labor Markets)*. NBER Working Paper No. w27133. National Bureau of Economic Research.

<a id="ref-Kleinman2021-bg"></a>

Kleinman, Benny, Ernest Liu, and Stephen J Redding. 2021. *Dynamic Spatial General Equilibrium*. NBER Working Paper No. w29101. Working Paper Series. National Bureau of Economic Research.

<a id="ref-kondo2018trade"></a>

Kondo, Illenin O. 2018. "Trade-Induced Displacements and Local Labor Market Adjustments in the u.s." *Journal of International Economics* 114: 180--202.

<a id="ref-Marinescu_Rathelot_2018"></a>

Marinescu, Ioana, and Roland Rathelot. 2018. "Mismatch Unemployment and the Geography of Job Search." *American Economic Journal: Macroeconomics* 10 (3): 42--70. <https://doi.org/10.1257/mac.20160312>.

<a id="ref-Monte_et_al_2018"></a>

Monte, Ferdinando, Stephen J. Redding, and Esteban Rossi-Hansberg. 2018. "Commuting, Migration, and Local Employment Elasticities." *American Economic Review* 108 (12): 3855--90. <https://doi.org/10.1257/aer.20151507>.

<a id="ref-moretti2024size"></a>

Moretti, Enrico, and Moises Yi. 2024. *Size Matters: Matching Externalities and the Advantages of Large Labor Markets*. NBER Working Paper No. w32250. National Bureau of Economic Research.

<a id="ref-Porto2006-xp"></a>

Porto, Guido G. 2006. "Using Survey Data to Assess the Distributional Effects of Trade Policy." *Journal of International Economics* 70 (1): 140--60.

<a id="ref-Rust1987-rb"></a>

Rust, John. 1987. "Optimal Replacement of GMC Bus Engines: An Empirical Model of Harold Zurcher." *Econometrica* 55 (5): 999--1033.

<a id="ref-Traiberman2019"></a>

Traiberman, Sharon. 2019. "Occupations and Import Competition: Evidence from Denmark." *American Economic Review* 109 (12): 4260--301. <https://doi.org/10.1257/aer.20161925>.

<a id="ref-Wolf2022-ih"></a>

Wolf, Christian K, and Alisdair McKay. 2022. *What Can Time-Series Regressions Tell Us about Policy Counterfactuals?* NBER Working Paper No. w30358. Working Paper Series. National Bureau of Economic Research.

[^1]: We thank Stefan Faridani, Kim Ruhl, Abbie Wozniak and seminar participants at the Urban Economics Association North America meeting, the Southern Economic Association annual meeting, and the Mid-Atlantic International Trade conference at Duke for very helpful comments. We also thank Ken Cowles for his excellent research assistance. This work was completed while Helene Maghin was at KU Leuven. The views expressed herein are those of the authors and not necessarily those of the Board of Governors of the Federal Reserve System, the Federal Reserve Bank of Atlanta, the Federal Reserve Bank of Minneapolis, or of any other person associated with the Federal Reserve System. All errors are our own.

[^2]: See, for example, ([Deaton 1989](#ref-Deaton1989-ka)), ([Kim and Vogel 2020](#ref-Kim2020-bw)), ([Atkin et al. 2018](#ref-Atkin2018-rg)), ([Baqaee and Burstein 2023](#ref-Baqaee2023-of)), ([Allen et al. 2022](#ref-Allen2022-sn)), ([Baqaee and Farhi 2020](#ref-Baqaee2020-oe)), ([Kleinman et al. 2021](#ref-Kleinman2021-bg)), ([Porto 2006](#ref-Porto2006-xp)), ([Wolf and McKay 2022](#ref-Wolf2022-ih)), and ([Beraja 2023](#ref-Beraja2023-dm)).

[^3]: See ([Dao et al. 2017](#ref-Dao2017-uc)) for a recent update of ([Blanchard and Katz 1992](#ref-Blanchard_Katz_92)) for the U.S.

[^4]: Note that $w_y$ is the ex ante value of an option $y$, that is before the realization of the preference shock $\varepsilon$.

[^5]: For a complementary aggregate treatment that also defines aggregate welfare via a *social welfare function* and derives a first-order decomposition---technology, dispersion of marginal utility, fiscal and technological externalities, and redistribution---see ([Donald et al. 2025](#ref-Donald2025-kr)). Our focus is local worker welfare recovered from choices (including an "insurance" component from diversification), whereas theirs is aggregate accounting and conditions under which the technology term alone can characterize welfare changes.

[^6]: Assuming a continuous shock distribution with finite moments ensures that $\mathcal{G}(w;x)$ is finite, convex, differentiable, and has a well-defined convex conjugate.

[^7]: Note that we require strictly positive conditional choice probability and continuation values, with $G$ strictly convex and twice continuously differentiable, so that Hessians and cross-elasticities exist, as shown in ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)). Moreover, in non-stationary settings, the method can be applied period by period using the corresponding Taylor coefficients, though at the cost of recomputing sufficient statistics each period.

[^8]: Strictly speaking, the concentration index $\mathrm{HHI}_{\mathcal{C}} \equiv = \sum_{\ell}\pi_{\ell} {\mathrm{HHI}_{\ell}} = \sum_{\ell}\pi_{\ell} {\sum_{m}\lambda_{m|\ell}^{2}}$ in Corollary [1](#thm:coro-1-div) is not the HHI in $\mathcal{C}$ using the local shares $\pi_{\ell}$, but an average of HHI-like indexes computed using welfare weights $\lambda_{m|\ell}$ as shares.

[^9]: Note that ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality)) introduce the conjugate duality approach we use, which maps observed choice probabilities to unobserved choice-specific values. This avoids the need to control for continuation values or specify the shock distribution, unlike ([Artuç et al. 2010](#ref-artucc2010trade)). They recast the problem as a *mass transport* problem and develop an estimator, the "mass transport approach (MTA)", to recover a reference vector $\mathcal{G}(w_0)\equiv 0$. Choice-specific values are determined only up to a constant, typically resolved by setting a reference option without loss of generality in static settings.

[^10]: DADS excludes the self-employed, central government employees (*Fonction Publique d'État*), and domestic workers.

[^11]: As in ([Traiberman 2019](#ref-Traiberman2019)), we restrict the sample to individuals aged 23--64.

[^12]: If two jobs have the same duration, we select the one with the higher salary; if salaries are equal, we choose the job with more hours worked.

[^13]: Because DADS covers only the private sector, flows into and out of non-employment include transitions to and from public-sector jobs and self-employment.

[^14]: Our estimate (18%) is somewhat higher than the 13% reported by ([Traiberman 2019](#ref-Traiberman2019)) for Denmark, who track occupation and sector but not geographic moves.

[^15]: When the $y$ outcome concept is a stock (e.g. employment levels) rather than a flow (e.g. location-changing workers), we simply take the $\log$ differences in the levels from $t-1$ to $t$. When the outcome concept is a flow, $y_{t+h}$ is constructed as the cumulative sum of the period-specific flows.

[^16]: [Table](#table:cum_estim_year_5) reports results for additional margins listed in [Table](#table:raw_statistics_quarterly_2).

[^17]: The delayed positive outflow response may reflect incomers replacing existing workers or unobserved shocks in neighboring cities.

[^18]: In Section [9.3](#subsec:Theory_and_HHI) in the appendix, we show that, under certain orthogonality conditions in our theoretical framework, the HHI mediates the insurance value of city-level diversity.

[^19]: We trim the top and the bottom 0.5% of the HHI for our regressions. Trimming beyond the top and bottom 0.5% does not affect our results. Note that this trimming does not lead us to drop Paris' commuting zone.

[^20]: ([Moretti and Yi 2024](#ref-moretti2024size)) highlight the interaction of education and labor market size. We control for local labor force size and focus on illustrating our high-order welfare approximation using city-level diversity. We leave a richer set of interactions and heterogeneous responses for future applications.

[^21]: This coarser partition assumes a homogeneous response of flows within each subset: "stay", "local", or "spatial".

[^22]: The MTA solves a linear assignment problem that couples the observed CCPs with a discretized approximation to the shock distribution $Q$ and returns both $\mathscr{G}^*(p;x)$ and a subgradient $w\in\partial \mathscr{G}^*(p;x)$. In our implementation, $Q$ is specified flexibly as a *correlated* multivariate distribution (i.i.d. across observations and time), discretized on $S$ support points; we fix the *scale* of $Q$ by construction and impose the single normalization $\mathscr{G}(w;x) = 0 \Leftrightarrow p\cdot w=\mathscr{G}^*(p;x)$ in each baseline cell. Because $\mathscr{G}^*$ is positively homogeneous, the welfare objects are homogeneous of degree zero in $(w,\text{scale}(Q))$, so this normalization is without loss for our comparative statics. Logit/Gumbel arises as a special case. Appendix [10](#sec:comp_appdx) details the discretization of $Q$, the LP, the recovery of $w$, and normalization.

[^23]: $\widetilde{\text{B}}^{+}_{t}$ and $\widetilde{\text{B}}^{-}_{t}$ are simple averages of $\left\{\text{B}^{+}_{\ell,t}\right\}_{\ell}$ and $\left\{\text{B}^{-}_{\ell,t}\right\}_{\ell}$. To reduce the influence of HHI outliers, we use decile-average HHI rather than each city's own value. Due to disclosure constraints, the response of the employment stock is used to approximate $\Delta \ln p^{\text{stay},t+h}_{\ell,t}$.

[^24]: We plot, in Figure [9](#fig:margin_hhi_asym) in the appendix, the city-level values that are averaged decile-by-decile to create the decile-level values reported in Table [Table](#tab:ranking_env).

[^25]: [Table](#tab:ranking_env) provides additional decompositional results, indicating to what extent shock and HHI heterogeneity within each HHI decile drives welfare differences.

[^26]: The spatial variation in these welfare effects is depicted in Figures Figure and Figure in the appendix. These figures show the distribution of welfare outcomes under both the "first-order only" approach and the welfare outcomes when accounting for the insurance value captured by the SOA term.

[^27]: Throughout the text, what we call a "second-order approximation of the social surplus" is formally a first-order log-linearization of a full second-order Taylor expansion in levels of $G$ (or $G^{*}$).

[^28]: We set $S{=}1000$ support points for the shock discretization, with a positive covariance across margins (diagonals around one half, moderate off--diagonals in the covariance matrix as in the baseline code in ([Chiong et al. 2016](#ref-chiong_galichon_shum_duality))). The assignment problem is solved with a standard LP solver.
