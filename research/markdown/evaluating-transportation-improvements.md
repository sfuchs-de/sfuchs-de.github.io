---
title: "From Social Savings to Spatial Equilibrium: Evaluating Transportation Improvements in Quantitative Spatial Models"
authors: "Treb Allen, Simon Fuchs, and Woan Foong Wong"
date: "August 2026"
pdf: "/research/EvalTransportImprovements_AFW_draft.pdf"
markdown_source: "/research/markdown/evaluating-transportation-improvements.md"
markdown_generated: "2026-08-04"
---

# From Social Savings to Spatial Equilibrium: Evaluating Transportation Improvements in Quantitative Spatial Models

**Authors:** Treb Allen, Simon Fuchs, and Woan Foong Wong<br>
**Version:** August 2026<br>
**JEL:** H54, R12, R13, R41, R42<br>
**Keywords:** Transportation networks; infrastructure; social savings; quantitative spatial models

[Download the paper as PDF](/research/EvalTransportImprovements_AFW_draft.pdf)

> This Markdown version was generated from the August 2026 resubmission TeX source and checked against the combined circulation PDF. It includes the paper appendix and online appendices. Figure images are omitted here; their captions and notes are retained.

## Abstract

How do we evaluate the welfare gains from transport infrastructure investment? We present a quantitative spatial framework that integrates traffic and economic responses to infrastructure improvements and derives the elasticity of aggregate welfare to changes in the transportation network. The resulting formula extends the traditional "social savings" method to incorporate route and mode choice, agglomeration and dispersion externalities, and traffic congestion. We apply the formula to the U.S. freight network and assess the benefits of reducing costs on each segment of the U.S. Interstate Highway System. The traditional and extended measures are closely related overall, but they differ in the level of estimated gains and in the ranking of some highly valued links. Where the rankings differ, network position determines how congestion and spatial adjustment alter a link's measured benefit.

**Author note:** Acknowledgements and institutional disclaimers are preserved in the paper notes.[^1]

## Introduction

Worldwide, annual capital investment in transport exceeds one trillion dollars (Lefevre et al. 2014). Is this money well spent? Traditionally, welfare gains from infrastructure improvements have been estimated using the social-savings approach of Fogel (1964, 1962), which approximates the welfare gains from the value of cost (or time) savings taking as given observed prices and distribution of economic activity. Yet recent advances in quantitative spatial modeling (see e.g. (Allen and Arkolakis 2014; Ahlfeldt et al. 2015; Redding 2016)) have emphasized that changes in transportation costs have general equilibrium effects on prices and the spatial distribution of economic activity. Moreover, the presence of traffic congestion and/or agglomeration externalities can result in market failures, undermining the Hulten-type intuition upon which the social savings approach is based. Is there a way to extend social savings to account for these general-equilibrium responses and externalities when evaluating an infrastructure improvement?

This paper extends the social-savings approach to evaluating transportation infrastructure investments by accounting explicitly for four features: (a) general equilibrium changes in the spatial distribution of economic activity; (b) optimal routing across multiple modes of transportation; (c) traffic congestion; and (d) agglomeration and dispersion externalities. Like the traditional approach, our extension continues to rely on sufficient statistics. These statistics allow us to assess the model-implied welfare effects of many possible improvements while keeping the calculation transparent and tractable enough for policy use. In the absence of traffic congestion and spatial externalities, we derive an expression equivalent to the traditional social-savings statistic. When these forces are present, the two approaches can differ because traffic and economic activity adjust throughout the network.

We begin by presenting a standard quantitative spatial framework, as in Allen and Arkolakis (2014), in which perfectly mobile agents trade among many locations with rich geographic differences. As in Allen and Arkolakis (2022), bilateral trade costs arise from moving goods through a transportation network, which may be subject to traffic congestion. As in Fuchs and Wong (2026), this network can include several transport modes, with costs that vary by mode and network segment, and shipments can adjust both routes and modes. Following both papers, we characterize the equilibrium recursively, so that each location's endogenous economic activity can be written as a function of the economic activity of neighboring locations and the costs of reaching them through the network.

This recursive formulation enables us to perturb the equilibrium conditions and show how an improvement to any segment of any transport mode affects aggregate welfare. Because the equilibrium at each location is linked to neighboring locations, it also traces how a local reduction in transport costs is transmitted through the rest of the network. The resulting expression---our "extended" social-savings approach---depends only on observed traffic and economic activity and on structural elasticities governing traffic congestion and spatial externalities. It can therefore be evaluated for many possible improvements without solving a separate counterfactual equilibrium for each one. Proposition 1 shows that, when congestion and spatial externalities are absent, the expression simplifies to the traditional social-savings statistic and the welfare gain is proportional to the share of economic activity using the network segment. In this benchmark, changes in routes, trade flows, prices, and the location of economic activity do not create additional first-order welfare gains. Proposition 2 shows that, when congestion or spatial externalities are present, these adjustments have first order effects, and the extended expression summarizes how these effects spread throughout the network.

Finally, we illustrate the value of this approach by examining the welfare effects of improving each of the 352 bidirectional links in the U.S. Interstate Highway System. We lower the underlying road cost by one percent in both directions of one link at a time and use data on the entire U.S. freight network to compare the traditional social-savings statistic with our extended statistic. Foreign import supply and export demand are held fixed, and the extended statistic measures welfare among U.S. residents. The traditional statistic ranks links exactly by baseline traffic. Across all links, the Pearson correlation between the two statistics is 0.945, and their rank correlation is 0.957. Among the fifty links with the highest traffic, the Pearson and rank correlations are 0.744 and 0.621, with only 4 appearing in both top-ten lists. The first two links under both approaches connect Los Angeles with San Diego and Riverside, while Durham--Raleigh rises from twenty-second under the traditional approach to third under the extended approach. Thus, baseline traffic remains informative overall, but congestion and spatial adjustment play a sizable role determining the relative importance of crucial links.

#### Contribution and related literature

The paper makes two contributions. First, it identifies the conditions under which the traditional social-savings approach is exact. Allowing economic activity and routes to adjust do not by themselves overturn social savings. Without congestion or spatial externalities, the competitive equilibrium is efficient, so adjustments to the distribution of economic activity do not have first order aggregate welfare impacts. Second, when congestion or spatial externalities make the equilibrium inefficient, these general equilibrium adjustments do have first order effects, and the paper derives a new analytical expression using based on observed economic data. The expression permits us to value and rank many links without solving a separate counterfactual equilibrium for each one.

These results connect conventional transport appraisal with general equilibrium spatial models. Conventional appraisal measures user benefits and external costs using estimates of demand, travel cost, and congestion (Small et al. 2024; Palma et al. 2011). We study how that accounting changes when infrastructure affects prices and the location of economic activity. Redding and Turner (2015) survey this spatial channel, while Donaldson (2025) and Redding (2025) discuss its treatment in modern transport-policy and quantitative urban models. Allen and Arkolakis (2025) provides a broader review of quantitative regional models.

Within this literature, the traditional social savings approach of Fogel (1964, 1962) estimates the welfare gains as equal to the value of costs saved arising from an improvement in the transportation network holding constant the patterns of trade at the observed equilibrium. Leunig (2010) develops this accounting tradition for transport innovations and clarifies how its measurement depends on the counterfactual alternative. Yet over the past decade, a number of papers have developed tractable frameworks in which changes in the transportation network alter the equilibrium distribution of economic activity across space. Some work has emphasized the role that transportation networks play in the trade of goods between locations (see e.g. (Allen and Arkolakis 2014; Redding 2016; Donaldson and Hornbeck 2016)), whereas others have emphasized the role transportation networks play in commuting (see e.g. (Ahlfeldt et al. 2015; Monte et al. 2018)), migration (see e.g. (Morten and Oliveira 2024)), or combinations thereof (see e.g. (Monte et al. 2018)). Together, these quantitative spatial models show how detailed spatial data and economic theory can be combined to characterize the general-equilibrium effects of changes in infrastructure networks.

This paper also contributes to the recent literature on multiple transport modes. A rich and growing literature has incorporated optimal route choice across the maritime shipping network, showing that welfare gains from infrastructure improvements are highly heterogeneous across links, shaped by network topology and endogenous transport costs (Brancaccio et al. 2020; Wong 2022; Ganapati et al. 2024; Heiland et al. 2025). In contrast, Fuchs and Wong (2026) develop a multimodal spatial model in which route and mode choices respond jointly to transport costs. Fan et al. (2023) estimate the mode choices between highways and regular roads for Chinese exporters, and Bonadio (2021) studies the distributional effects of road and port improvements. We use the same network structure to incorporate route and mode adjustment into the welfare calculation.

We consider two economic distortions that require extending the traditional social savings approach. Traffic congestion is the first. The "fundamental law" of road congestion finds that vehicle miles traveled rise roughly one-for-one with highway capacity, attenuating direct travel-time savings (Duranton and Turner 2011). Models that embed volume-dependent travel costs adjust welfare formulas accordingly, capturing both the congestion penalty on improved links and network spillovers when traffic re-allocates. Fuchs and Wong (2026) estimate congestion elasticities for road and terminal use in a multimodal network. More recent work has focused on the importance of ports and the benefits from technology adoption and investments in the presence of congestion. (Brancaccio et al. 2024) evaluate the returns to infrastructure investment at ports under disruptions and congestion, while (Ducruet et al. 2024) show how the adoption of container technology can crowd out economic activity by raising land rents.

Agglomeration provides a second departure from conventional user-benefit accounting. Venables (2007) and Graham (2007) show how greater effective density can generate wider economic benefits. Quantitative spatial models represent this channel by allowing local productivity to depend on economic density. Related applications examine scale economies around entrepôts (Ganapati et al. 2024), hub-country transshipment (Do et al. 2025), and transportation productivity growth in the United States (Coşar et al. 2024).

The calculation is not a complete social cost-benefit analysis of highway investment. It measures benefits arising through trade costs, routing, congestion, spatial externalities, and the location of economic activity, while it excludes construction and maintenance costs, financing, pollution, safety, neighborhood effects, displacement, segregation, and distributional incidence. Complementary research measures these effects. Balboni et al. (2025), for example, combine an urban model with traffic-induced air pollution; related work studies local quality-of-life effects (Brinkman and Lin 2024), displacement and mortality (Valenzuela-Casasempere 2026), segregation and racial incidence (Mahajan 2024; Weiwu 2025), how transit connectivity changes legitimate employment and crime (Khanna et al. 2025), and highway construction costs (Mehrotra et al. 2024).

The paper is organized as follows. Section [2](#sec:model) develops the model and introduces the extended social savings approach. Section [3](#sec:data_cf) describes the data and implementation, then compares the two approaches for U.S. highway improvements. Section [4](#sec:end) concludes.

<a id="sec:model"></a>

## From Traffic to Welfare

In this section, we present a quantitative spatial model in which mobile agents trade across many locations with rich geography. Onto this geography, we overlay a multimodal transportation network in which bilateral trade costs arise from route and mode choice and may respond to traffic congestion. We then characterize the equilibrium recursively and derive the elasticity of aggregate welfare to an improvement in any link and transport mode. Proposition [1](#thm:traditional) shows that this elasticity equals the traditional social-savings statistic in the absence of congestion and spatial externalities. Proposition [2](#thm:welfare) shows how the welfare calculation changes when these distortions are present.

<a id="subsec:model"></a>

### Economic Environment

#### Locations

The world comprises $N$ locations indexed by $i=1,\dots,N$ inhabited by an exogenous measure $\bar{L}$ of perfectly mobile workers. Each location differs in its endowed *first-nature* productivity $\bar A_i>0$, amenity $\bar u_i>0$, and the variety of good it produces.

#### Production

The differentiated local variety is produced using only labor with a constant returns to scale production function under perfect competition. Denote the local wage by $w_i$. Each worker supplies one unit of labor inelastically.

#### Consumption

Preferences are CES over a continuum of varieties, one produced in each location, with elasticity of substitution $\sigma>1$. Indirect utility takes the familiar form $U_j = w_j P_j^{-1}u_j$, where $P_j$ is the Dixit-Stiglitz price index and $u_j$ is the total amenity defined in [equation](#eq:externalities). Labor is perfectly mobile across space, implying $U_j = U$ for all $j$. We write $W\equiv U$ for this common welfare level below.[^2]

#### Trade Costs

Bilateral trade is subject to an effective multiplicative cost index $\tau_{ij}>0$, which is determined by the available routes and their costs below. The index is defined up to a common normalization and need not itself be a physical iceberg factor.

#### Agglomeration and dispersion externalities

The overall *second-nature* productivity and amenity in each location $i$, $A_i$ and $u_i$ respectively, depend on its first-nature productivity and amenity as well as its population $L_i$:

<a id="eq:externalities"></a>

$$
A_i=\bar A_i L_i^{\alpha}\qquad u_i=\bar u_i L_i^{\beta},
$$

 The parameters $\alpha,\beta\in\mathbb R$ govern the strength of the *agglomeration* and *dispersion externalities*. Setting both to zero removes these externalities.

### The Transportation Network

The transportation network determines the bilateral costs that connect locations. Goods move on a multimodal network. For each mode $m\in\{1,\ldots,M\}$, let $\bar K_m=[\bar\kappa_{kl,m}]$ be the $N\times N$ adjacency matrix. Its element $\bar\kappa_{kl,m}$ is the endowed *first-nature* iceberg cost on directed edge $(k,l)$.

#### Traffic congestion

The total *second-nature* cost of a link-mode pair depends on its first-nature cost and its traffic $\Xi_{ik,m}$:

<a id="eq:congestion"></a>

$$
\kappa_{ik,m}=\bar\kappa_{ik,m}\,\Xi_{ik,m}^{\lambda_m},
$$

 Here, $\lambda_m$ governs the strength of *traffic congestion* on mode $m$. Note that when $\lambda_m=0$, there is no traffic congestion on that particular mode. When we take the model to the data, we distinguish between road congestion and congestion at intermodal terminals, which allow goods to switch from road to other modes. We consider terminal congestion separately as an extension.

#### Aggregation across modes

The total *second-nature* cost of traversing an edge from node $i$ to node $k$ across all available transport modes is summarized by a CES aggregator:

<a id="eq:mode-ces"></a>

$$
\kappa_{ik}\equiv \Big(\sum_{m=1}^{M}\kappa_{ik,m}^{-\eta}\Big)^{-1/\eta},\qquad s_{ik,m}\equiv \frac{\kappa_{ik,m}^{-\eta}}{\sum_{n=1}^{M}\kappa_{ik,n}^{-\eta}},
$$

 Under this aggregator, $s_{ik,m}$ is mode $m$'s share of traffic on the edge. It is also the elasticity of the edge cost $\kappa_{ik}$ with respect to the mode-specific cost $\kappa_{ik,m}$. The parameter $\eta>0$ governs substitution across modes: a larger $\eta$ makes shippers more responsive to relative costs.[^3]

#### Optimal routing

Let $\mathcal P^{ij}$ denote the set of finite walks connecting origin $i$ to destination $j$, including the walk with no edges when $i=j$. If $\boldsymbol p^{ij}\in\mathcal P^{ij}$ is one such walk, its cost is the product of the costs on its constituent edges. The cost of the least-cost route is therefore

<a id="eq:tau_main"></a>

$$
\tilde\tau_{ij}
=\min_{\boldsymbol p^{ij}\in\mathcal P^{ij}}
\prod_{h=1}^{|\boldsymbol p^{ij}|-1}
\kappa_{\boldsymbol p_h^{ij},\boldsymbol p_{h+1}^{ij}}.
$$

 The product is over iceberg cost factors. If an edge instead has an additive generalized cost $c_{kl}$ and $\kappa_{kl}=\exp(c_{kl})$, route costs are additive in logs and multiplicative in iceberg units.

Shipments need not all take the least-cost route. For a finite route-choice elasticity $\theta$, we aggregate the costs of all finite walks as

<a id="eq:tau_soft_main"></a>

$$
\tau_{ij}^{-\theta}
=\sum_{\boldsymbol p^{ij}\in\mathcal P^{ij}}
\prod_{h=1}^{|\boldsymbol p^{ij}|-1}
\left(\kappa_{\boldsymbol p_h^{ij},\boldsymbol p_{h+1}^{ij}}\right)^{-\theta}.
$$

 Cheaper routes receive greater weight, and traffic becomes more concentrated on the least-cost route as $\theta$ rises. In the limit as $\theta\to\infty$, $\tau_{ij}$ converges to $\tilde\tau_{ij}$. We follow Allen and Arkolakis (2022) and set $\theta=\sigma-1$.[^4]

#### Recursive formulation of the routing problem

[Equation](#eq:tau_soft_main) sums over all possible finite walks. We can evaluate the same route-cost index without enumerating these walks. Following Fuchs and Wong (2026), we use Bellman's principle of optimality (Bellman 1966) and group walks according to their first edge. Let $\mathcal N^+(i)\equiv\{k:\kappa_{ik}<\infty\}$ and $\mathcal N^-(i)\equiv\{k:\kappa_{ki}<\infty\}$ denote the outgoing and incoming neighbors of $i$. With $\theta=\sigma-1$, the route-cost index satisfies

<a id="eq:tau_recursive"></a>

$$
\tau_{ij}^{1-\sigma}
=\mathbf 1\{i=j\}
+\sum_{k\in\mathcal N^+(i)}
\kappa_{ik}^{1-\sigma}\tau_{kj}^{1-\sigma}.
$$

 The first term covers a shipment that has reached its destination. The remaining terms cover walks that begin with each available outgoing edge. Appendix [5.1](#sec:equilibrium_details) states the convergence condition and gives the equivalent recursion obtained by grouping walks according to their final edge.

#### Traffic

The route formulation also determines how much traffic uses each edge. Following Allen and Arkolakis (2022), traffic on directed edge $(k,l)$ sums bilateral trade over all origin--destination pairs, weighted by the intensity with which their routes use that edge:

<a id="eq:traffic_main"></a>

$$
\Xi_{kl}
=\frac{1}{Y^W}\sum_{i=1}^{N}\sum_{j=1}^{N}
X_{ij}
\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma},
\qquad
\Xi_{kl,m}=s_{kl,m}\Xi_{kl},
$$

 where $X_{ij}$ is the value of trade from $i$ to $j$ and $Y^W\equiv\sum_iw_iL_i$ is world income. Thus, $\Xi_{kl}$ is the edge's share of world income and $Y^W\Xi_{kl}$ is traffic in currency units. An edge carries more traffic when it serves large trade flows or lies on many relatively inexpensive routes. The mode-specific traffic $\Xi_{kl,m}$ is the observed input to the welfare calculations below.

### Spatial equilibrium

The transportation block determines bilateral costs and edge traffic. We now combine it with goods-market clearing and welfare equalization to determine wages, population, and trade.

#### A standard formulation of the equilibrium

Given CES demand and equalized welfare, bilateral trade from $i$ to $j$ is

<a id="eq:gravity_main"></a>

$$
X_{ij}=W^{1-\sigma}
\left(\frac{A_i u_j}{\tau_{ij}}\right)^{\sigma-1}
w_i^{1-\sigma}w_j^\sigma L_j.
$$

 The equilibrium wages and population must satisfy two market-clearing conditions. First, payments to labor at each location must equal the value of that location's total sales:

<a id="eq:eqm_sales_main"></a>

$$
w_iL_i
=\sum_{j=1}^{N}W^{1-\sigma}
\left(\frac{A_i u_j}{\tau_{ij}}\right)^{\sigma-1}
w_i^{1-\sigma}w_j^\sigma L_j.
$$

 Second, payments to labor at each location must equal the value of that location's total purchases:

<a id="eq:eqm_expenditure_main"></a>

$$
w_iL_i
=\sum_{j=1}^{N}W^{1-\sigma}
\left(\frac{A_j u_i}{\tau_{ji}}\right)^{\sigma-1}
w_j^{1-\sigma}w_i^\sigma L_i.
$$

 Combining these two conditions with [equation](#eq:externalities) determines the equilibrium distribution of wages and population as a function of bilateral transport costs. Because those costs arise endogenously from routing on the network, it is more useful to formulate the equilibrium recursively, which we do next.

#### Recursive formulation of the equilibrium

Following Allen and Arkolakis (2022) and Fuchs and Wong (2026), we substitute the first-edge route-cost recursion [Equation](#eq:tau_recursive) into the sales condition [Equation](#eq:eqm_sales_main). Appendix [5.1](#sec:equilibrium_details) provides the algebra. This substitution gives

<a id="eq:recursive_sales_main"></a>

$$
\begin{aligned}
A_i^{1-\sigma}w_i^\sigma L_i
&=W^{1-\sigma}u_i^{\sigma-1}w_i^\sigma L_i
+\sum_{k=1}^{N}\kappa_{ik}^{1-\sigma}
A_k^{1-\sigma}w_k^\sigma L_k \nonumber\\
&=W^{1-\sigma}u_i^{\sigma-1}w_i^\sigma L_i
+\sum_{k\in\mathcal N^+(i)}\kappa_{ik}^{1-\sigma}
A_k^{1-\sigma}w_k^\sigma L_k.
\end{aligned}
$$

 The second line makes the network structure explicit: only locations connected to $i$ by an outgoing edge enter the sum. For the purchases condition [Equation](#eq:eqm_expenditure_main), we use the equivalent recursion that groups routes by their final edge, stated in Appendix [5.1](#sec:equilibrium_details). This gives

<a id="eq:recursive_expenditure_main"></a>

$$
\begin{aligned}
w_i^{1-\sigma}u_i^{1-\sigma}
&=W^{1-\sigma}A_i^{\sigma-1}w_i^{1-\sigma}
+\sum_{k=1}^{N}\kappa_{ki}^{1-\sigma}
w_k^{1-\sigma}u_k^{1-\sigma} \nonumber\\
&=W^{1-\sigma}A_i^{\sigma-1}w_i^{1-\sigma}
+\sum_{k\in\mathcal N^-(i)}\kappa_{ki}^{1-\sigma}
w_k^{1-\sigma}u_k^{1-\sigma}.
\end{aligned}
$$

Writing the equilibrium in this form has two advantages. First, [equations](#eq:recursive_sales_main) and [Equation](#eq:recursive_expenditure_main) show that population and income at a location depend on population and income at neighboring locations. This recursive structure lets us trace the general-equilibrium effects of a local transport improvement through successive neighboring locations. It also expresses the equilibrium directly in terms of the transportation network rather than through a separate bilateral cost for every pair of locations. The second advantage is that the terms in these recursive equations are closely related to observed edge traffic. This relationship connects the model's equilibrium adjustments to data on network use. To make it explicit, define outward and inward market access, respectively, by

$$
\begin{aligned}
\mathcal Q_i
&\equiv \sum_{j=1}^{N}\tau_{ij}^{1-\sigma}P_j^{\sigma-1}w_jL_j
=A_i^{1-\sigma}w_i^\sigma L_i,\\
\mathcal P_i
&\equiv P_i^{1-\sigma}
=W^{\sigma-1}w_i^{1-\sigma}u_i^{1-\sigma}.
\end{aligned}
$$

 The summation in $\mathcal Q_i$ measures the demand that producers in $i$ can reach across destinations, discounted by bilateral trade costs, and is therefore outward market access. The term $\mathcal P_i=P_i^{1-\sigma}$ measures consumers' access to goods delivered from all origins through the CES price index and is inward market access. The equalities on the right follow from sales market clearing and welfare equalization. Combining the traffic expression [Equation](#eq:traffic_main) with the gravity [equation](#eq:gravity_main) then gives

<a id="eq:traffic_2"></a>

$$
\Xi_{kl}=\frac{1}{Y^W}\kappa_{kl}^{1-\sigma}\mathcal P_k\mathcal Q_l.
$$

 [Equation](#eq:traffic_2) factors traffic on an edge into its direct transport cost and inward and outward market access at its endpoints. An edge carries more traffic when it is inexpensive or when it connects locations with strong access to buyers and suppliers. The same market-access terms therefore describe both equilibrium adjustment and observed network use.

Using the same definitions, [equations](#eq:recursive_sales_main) and [Equation](#eq:recursive_expenditure_main) can be written more compactly as

<a id="eq:recursive_outward_main"></a>
<a id="eq:recursive_inward_main"></a>

$$
\begin{aligned}
\mathcal Q_i
&=W^{1-\sigma}u_i^{\sigma-1}w_i^\sigma L_i
+\sum_{k\in\mathcal N^+(i)}\kappa_{ik}^{1-\sigma}\mathcal Q_k,\\
\mathcal P_i
&=A_i^{\sigma-1}w_i^{1-\sigma}
+\sum_{k\in\mathcal N^-(i)}\kappa_{ki}^{1-\sigma}\mathcal P_k.
\end{aligned}
$$

 Each equation combines a term measuring local economic activity with the transport-cost-weighted market access of neighboring locations. [Equations](#eq:recursive_outward_main) and [Equation](#eq:recursive_inward_main) therefore summarize the equilibrium as a recursive relationship among locations. Because the same market-access terms also determine edge traffic in [equation](#eq:traffic_2), the recursive equilibrium can be connected directly to observed network flows. This connection is the basis for the welfare formulas below.

### The traditional social savings approach

Having defined the equilibrium, we turn to deriving how the aggregate welfare of the economy responds to changes in the underlying transportation network. We begin by presenting the "traditional" social savings approach in our notation.

In introducing the "social savings approach\" as a means of evaluating the welfare impact of the introduction of the railroads, (Fogel 1962) (p.170) summarizes it as follows:

> ::: small
> In the year 1890, a certain bundle of agricultural commodities was shipped\... This pattern of shipments was carried out\... at some definite cost. With enough data, one could determine both this cost and the alternative cost of shipping exactly the same bundle of goods\... in exactly the same pattern without the railroad. The difference between these two amounts I call the social saving.
> :::

That is, the traditional social savings approach calculates the cost savings arising from an improvement in the transportation network holding constant the pattern of trade.

In our context, we are interested in how an infinitesimal improvement to a particular edge for a particular transport mode affects aggregate welfare. Let $\Delta W_{kl,m}^{\mathrm{trad}}$ denote the traditional welfare elasticity associated with a reduction in the underlying cost $\bar\kappa_{kl,m}$. Given homothetic demand and iceberg trade costs, and measuring traffic as a share of world income, the traditional social-savings approach says that this elasticity is simply the observed traffic share:

<a id="eq:trad"></a>

$$
\Delta W_{kl,m}^{\mathrm{trad}}
    \equiv-\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}
    =\Xi_{kl,m}.
$$

 The traditional social savings approach fails to account for a number of adjustments that might occur in response to an infrastructure improvement, including changes in route choice, changes in trade flows, and changes in the distribution of economic activity. How good an approximation is [equation](#eq:trad)? The following proposition shows when the traditional social savings approach is exactly correct:

<a id="thm:traditional"></a>
**Proposition 1**.

*Suppose that there are no agglomeration/dispersion externalities and no traffic congestion, i.e. $\alpha=\beta=\lambda_{m}=0$ for all $m\in\left\{ 1,...,M\right\}$. Then, for any link-mode pair $(k,l,m)$, the welfare elasticity with respect to its first-nature cost equals the traditional social-savings statistic:

$$
-\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\Xi_{kl,m}.
$$

*

*Proof.* See Appendix [5.2](#sec:proofprop1). ◻

Proposition [1](#thm:traditional), which extends the working-paper result in Allen and Arkolakis (2022) to multiple transport modes, may appear surprising at first. The traditional social-savings statistic ignores the many general-equilibrium responses to an infrastructure improvement, yet it exactly captures the first-order welfare gain in this benchmark. Routes, prices, trade flows, and the location of economic activity all adjust, but none of these adjustments creates an additional first-order welfare effect.

Why can the traditional calculation ignore these responses? Without spatial externalities or traffic congestion, the competitive allocation is efficient for the common welfare measure used here. The envelope theorem then implies that marginal changes in endogenous choices affect welfare only at second order. The direct transport-cost saving is therefore sufficient at first order. This is the economic logic behind the Hulten result (Hulten 1978; Atkeson and Burstein 2010; Baqaee and Farhi 2019).[^5]

With agglomeration or dispersion externalities or traffic congestion, the competitive allocation need not be efficient. Changes in routes, prices, traffic, and the location of economic activity can then affect welfare at first order. We turn to this case next.[^6]

### The extended social savings approach

We now turn to studying how a marginal improvement to a single link-mode pair affects aggregate welfare in a spatial equilibrium with agglomeration and dispersion externalities and traffic congestion. Relative to the efficient benchmark in Proposition [1](#thm:traditional), externalities in production and amenities $(\alpha,\beta)$ and congestion in transportation $(\lambda_m)$ generally make the competitive equilibrium inefficient. Changes in routes, prices, traffic, and the location of economic activity can therefore affect welfare at first order. Yet the equilibrium admits a recursive market-access representation that allows us to trace these responses: a local cost reduction changes neighboring locations' market access, which in turn changes flows and congestion. These adjustments then propagate throughout the network. Proposition [2](#thm:welfare) summarizes this propagation through the market-access terms associated with the two ends of the improved link.

<a id="thm:welfare"></a>
**Proposition 2** (Extended social savings).

*Fix a link-mode pair $(k,l,m)$, and let $\bar\vartheta_{klm}\equiv\ln\bar\kappa_{kl,m}$ denote its underlying cost. Under the conditions stated in Appendix [5.3](#sec:proofprop2), the welfare gain from a marginal cost reduction is

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=\chi_{klm}\rho\,\Xi_{kl,m}
\left(\mathcal M_k^{in}+\mathcal M_l^{out}\right).
$$

 The formula begins with the link-mode traffic share $\Xi_{kl,m}$. The term $\chi_{klm}$ measures how much of the underlying cost reduction reaches users after mode choice and congestion respond, while $\rho$ captures the common effect of spatial externalities. The endpoint shadow values $\mathcal M_k^{in}$ and $\mathcal M_l^{out}$ measure how changes in market access at the two ends of the improved edge affect aggregate welfare. Appendix [5.3](#sec:proofprop2) states the local equilibrium and policy-forcing objects, Appendix [5.4](#sec:prop2-adjoint-proof) proves the formula, and Online Appendices [6.1](#sec:multiplier-equilibrium-jacobian) and [6.2](#sec:multiplier-welfare) derive the complete Jacobian and interpret its welfare adjoint.[^7]*

*Proof.* See Appendix [5.4](#sec:prop2-adjoint-proof). ◻

The endpoint multipliers summarize how the improvement changes access to suppliers and markets throughout the network. Only their sum enters the welfare calculation. Online Appendices [6.2.2](#sec:multiplier-dual)--[6.2.3](#sec:multiplier-endpoint-interpretation) derive the corresponding dual recursion and explain how traffic and the equilibrium Jacobian determine the sum. Each block of the Jacobian can be constructed from the baseline network, observed traffic and modal-flow shares, location-level labor, output, and expenditure shares, and the maintained elasticities. Appendix [5.3](#sec:proofprop2) states the local system, Online Appendix [6.1](#sec:multiplier-equilibrium-jacobian) derives each Jacobian block, and Online Appendix [7](#sec:computational_appendix) describes the numerical construction. Because $\rho$ is common across links for a given set of parameters, link rankings differ through $\chi_{klm}$, which measures how much of the underlying cost reduction reaches users, and through the market-access multipliers. Online Appendix [6.2.3.1](#sec:flow_expression) gives an equivalent expression using observed incoming and outgoing flows.[^8]

Proposition [2](#thm:welfare) allows for spatial externalities and traffic congestion. The next corollary shows that it reduces to Proposition [1](#thm:traditional) when both are absent.

<a id="cor:fogel"></a>
**Corollary 1**.

*Suppose that there are no agglomeration/dispersion externalities and no traffic congestion, i.e. $\alpha=\beta=\lambda_{m}=0$ for all $m\in\left\{ 1,...,M\right\}$. Then $\rho=1$, $\chi_{klm}=1$, and $\mathcal{M}_{k}^{in}+\mathcal{M}_{l}^{out}=1$ for every link--mode pair $(k,l,m)$ that carries positive traffic. Hence

$$
-\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\Xi_{kl,m},
$$

 so Proposition [2](#thm:welfare) simplifies to Proposition [1](#thm:traditional).*

*Proof.* See Appendix [5.5](#sec:proofcor). ◻

Accordingly, in what follows, we refer to Proposition [2](#thm:welfare) as the "extended" social-savings approach. Like Proposition [1](#thm:traditional), Proposition [2](#thm:welfare) remains tractable because its traffic term, cost-transmission term, and equilibrium multipliers can all be constructed from observable baseline data and model elasticities. The required data are the value of traffic flows, populations, output and expenditure at each location, and modal-flow shares. Online Appendix [6.2.3.1](#sec:flow_expression) shows how the exposure measures can be recovered from network flows, Online Appendix [6.1](#sec:multiplier-equilibrium-jacobian) derives the Jacobian from these baseline shares and the maintained elasticities, and Online Appendix [7](#sec:computational_appendix) describes the implementation.

Unlike Proposition [1](#thm:traditional), however, Proposition [2](#thm:welfare) shows that, in the presence of agglomeration or dispersion externalities or traffic congestion, the general-equilibrium effects of a transport improvement throughout the trading network can affect welfare at first order. These effects are summarized by the local market-access multipliers $\mathcal M_k^{in}$ and $\mathcal M_l^{out}$, which measure how a local change propagates through the network. Because the equilibrium is recursive, a change in access at $k$ changes its neighbors' access, which in turn changes their neighbors' access, and so forth. The same logic applies symmetrically at $l$ through outward market access. In this way, the multipliers summarize the full cascade of feedback effects and their contribution to aggregate welfare.

The two distortions enter the welfare calculation differently. When $\alpha+\beta<0$, dispersion dominates agglomeration in the local externality specification, and the competitive equilibrium can be more spatially concentrated than a planner would choose (see (Fajgelbaum and Gaubert 2020) and (Pablo D. Fajgelbaum and Schaal 2020b)). This inequality alone does not determine whether a particular transport improvement raises or lowers welfare relative to traditional social savings. That sign depends on where the improvement moves economic activity and how those changes propagate through market access. Traffic congestion instead affects the cost reduction transmitted through the network: if an improvement raises traffic on an edge with $\lambda_m>0$, the resulting congestion partly offsets the initial reduction in $\kappa_{ij,m}$.

We next measure how these additional effects change the estimated gains from improving each segment of the U.S. Interstate Highway System.

<a id="sec:data_cf"></a>

## Application: The U.S. Interstate Highway System

<a id="sec:data"></a>

### Data and Implementation

We rely on the dataset constructed by Fuchs and Wong (2026), which maps the U.S. road, rail, inland-waterway, port, and intermodal-terminal systems into a single georeferenced freight network with comparable traffic measures. The backbone of the network comes from Census TIGER/Line files for the Interstate Highway System and Class I rail corridors, together with digitized navigable rivers and coastal shipping lanes.

The reproducible version used here has 234 nodes: 228 domestic nodes and 6 foreign regions. Its road layer contains 704 directed arcs, paired into 352 bidirectional physical links. The other layers represent rail, domestic water, and foreign water transport. We evaluate both welfare formulas on this common observed baseline.

#### Transport-mode traffic and routes

Traffic measures are harmonized across transport modes. For rail, we use the confidential Carload Waybill Sample maintained by the Surface Transportation Board and focus on intermodal containers moved by the seven Class I carriers. Rail origins, interchange points, and destinations are matched to the TIGER rail graph, and shipments are routed along the shortest feasible paths connecting these locations in sequence. Highway traffic is measured by Average Annual Daily Traffic from the 2012 Highway Performance Monitoring System. When one HPMS segment corresponds to several links in the network graph, its count is allocated using segment length. Inland-waterway tonnage comes from the Waterborne Commerce Statistics of the U.S. Army Corps of Engineers and is routed along the digitized river network. These assignments follow Fuchs and Wong (2026). Because the application studies highway improvements, Figure [1](#fig:hpms_map) shows the Interstate network used in the calculation. Online Appendix [7](#sec:computational_appendix) records the data transformations and checks.

<a id="fig:hpms_map"></a>

> **Figure: Baseline road traffic shares on the U.S. Interstate Highway System**
>
> **Notes:** Each line is one of 352 physical road links. Color and width are based on the sum of the two directed traffic shares, expressed in basis points of total domestic income. One basis point is 0.01 percent, so a value of 10 means that traffic on the link equals 0.10 percent of domestic income. Locations used in the text are matched to public 2018 Census CBSA and Place polygons. Sources: HPMS 2012 traffic counts; 2018 Census TIGER/Line files; authors’ calculations.
>
> Figure image omitted; see the PDF.

#### Intermodal terminals and international flows

Intermodal transfer points come from the National Transportation Atlas Database and the Port Performance Freight Statistics Program. They include deep-sea container ports, inland rail--truck ramps, and rail--barge transfer points along the Mississippi and Illinois Rivers. We retain these domestic terminal locations and replace the original foreign-water layer with directional 2017 Census port trade. Imports flow from six foreign regions to U.S. gateways, while exports flow in the opposite direction. We adjust these flows so that imports and exports sum to a common total, without changing which direction goods move or where they originate and arrive. See Online Appendix [7](#sec:computational_appendix) for the underlying data source and the normalization procedure.

For the calculation, the six foreign regions are external market nodes rather than locations in the domestic labor market. Foreign-to-U.S. flows determine fixed import-supply schedules, while U.S.-to-foreign flows determine fixed export-demand schedules. The foreign nodes remain in the transport network, but their populations do not adjust and they receive no weight in welfare. The reported derivative is therefore a welfare effect for U.S. residents with foreign supply and demand held fixed.

#### Implementation and measurement

Applying the formulas requires a directed network, value flows by mode, local labor and income, and estimates of the main elasticities. We study a simultaneous one-percent reduction in the underlying road cost in both directions of one physical link. Following Fuchs and Wong (2026), we set $(\sigma,\alpha,\beta,\eta)=(9,0.10,-0.30,1.099)$, and we take the road-congestion elasticity of $0.092$ from Allen and Arkolakis (2022).[^9]

We evaluate the traditional statistic and the extended equilibrium derivative at the observed baseline, rather than solving a separate counterfactual equilibrium for each road improvement. Online Appendix [7](#sec:computational_appendix) describes how the data were processed, how the foreign-market boundary is imposed, the algorithm, and the checks used to verify it. These checks confirm that the code correctly implements the model, but they do not test its predictions against independent outcomes. We therefore interpret the estimates as model-based benefit measures, following the interpretation in Donaldson (2025) and Severen (2026). Online Appendix [8](#sec:parameter_sensitivity) reports how sensitive these results are to the parameter values.[^10]

With these inputs fixed, we evaluate the traditional and extended statistics for the same set of bidirectional road improvements.

### Quantitative Evaluation

We now use the U.S. freight network to compare the traditional and extended social-savings measures. To make the comparison meaningful, both calculations evaluate the same improvement to the same set of Interstate links at the same observed baseline.

The policy experiment applies both measures to a one-percent reduction in underlying road costs in both directions of each physical link. We compute the derivative on 704 directed road arcs and sum opposite directions for the 352 link-level interventions. Because the propositions report elasticities, the percentage gains below use the first-order change, $0.01$ times the corresponding elasticity, around the observed network.

Both measures measure benefits only, rather than net project value. The traditional statistic values the marginal cost reduction using baseline traffic, which is the standard first-order calculation of user benefits in conventional transport appraisal. A complete appraisal would then add construction and maintenance costs, along with separately measured external effects like pollution or safety (Small et al. 2024; Transportation Research Board and National Academies of Sciences, Engineering, and Medicine 2017). The extended statistic instead asks whether congestion and spatial externalities change the benefit calculation once routes, traffic, and economic activity adjust; it does not replace those additional cost terms.

<a id="sec:cf_trad"></a>

#### Traditional social savings approach

Proposition [1](#thm:traditional) gives a direct calculation for this policy experiment. Because the experiment lowers the underlying road cost in both directions of a physical link, the traditional welfare elasticity is the sum of the two directed traffic shares. In the efficient case covered by the proposition, routes, trade flows, prices, and the location of economic activity may adjust after the improvement. These responses do not create an additional first-order welfare gain. The traditional calculation therefore values a link using the economic activity that currently passes over it, without requiring a counterfactual traffic pattern.

Panel (a) of [Figure](#fig:counterfactual_pass_maps) maps the traditional measure for all 352 physical road links. Its geography follows the baseline road use in Figure [1](#fig:hpms_map): the largest values appear in major metropolitan corridors in Southern and Northern California, the Northeast, and the Midwest. Because the measure is the bidirectional traffic share, it ranks the links by baseline traffic (see Panel A of [Table](#tab:rsue_top_10_links) for the top 10 links). This map is the reference point for the extended calculation. [Figure](#fig:welfare_scatter_passes) places that measure on the horizontal axis; departures from the 45-degree line show how the additional mechanisms change a link's measured benefit.

<a id="sec:cf_ex"></a>

#### Extended social savings approach

We next apply Proposition [2](#thm:welfare) to the same physical links and the same one-percent bidirectional cost reduction. The main specification includes all four transport modes, a mode-choice elasticity of $\eta=1.099$, road congestion, and the directional Census port flows described above. Unlike the traditional calculation, the extended statistic allows the cost reduction to change market access and the spatial distribution of economic activity. It also accounts for the congestion created by the traffic response. Two links carrying similar baseline traffic can therefore have different extended welfare effects because they occupy different positions in the network and induce different traffic adjustments.

Relative to the traditional calculation, several additional forces now matter. A lower road cost can attract traffic from other routes or modes, and the additional traffic can offset part of the original cost reduction through congestion. The improvement can also shift population and production, changing local productivity and amenities when spatial externalities are present. Because these responses spread through buyers, suppliers, and competing routes, their net effect depends on the link's position in the network. The theory does not determine that sign in general; the maps and decomposition below show how the forces combine in the calibrated application.

Panel (b) of [Figure](#fig:counterfactual_pass_maps) maps the resulting welfare elasticities. The highest-ranked links include Los Angeles--San Diego, Los Angeles--Riverside, and Raleigh--Durham. We report the names assigned by the public 2018 Census location crosswalk. These examples show where the extended measure is large, but the map alone does not show which links move up or down relative to the traditional calculation. [Figure](#fig:welfare_scatter_passes) and [Table](#tab:rsue_top_10_links) make that comparison directly. [Figure](#fig:rsue_decomposition) later separates the roles of spatial adjustment and road congestion.

<a id="fig:pass5_map"></a>
<a id="fig:pass1_map"></a>
<a id="fig:counterfactual_pass_maps"></a>

> **Figure: Welfare elasticities for improving each road link**
>
> **Notes:** Each line is one physical road link, formed by summing the two directed arcs. Panel (a) reports the traditional welfare elasticity, which equals the bidirectional traffic share under Proposition 1. Panel (b) reports the extended welfare elasticity from Proposition 2, allowing routes, modes, traffic, and economic activity to adjust under the model. Both panels show the effect of lowering underlying road costs and use the same welfare-elasticity color scale. Sources: HPMS, Carload Waybill Sample, Waterborne Commerce Statistics, 2017 Census port trade, and authors’ calculations.
>
> Figure image omitted; see the PDF.

<a id="fig:pass5_scatter"></a>
<a id="fig:pass1_scatter"></a>
<a id="fig:welfare_scatter_passes"></a>

> **Figure: Traditional and extended welfare elasticities**
>
> **Notes:** Each observation is one bidirectional physical road link. The horizontal axis is the traditional statistic; the vertical axis is the extended welfare elasticity for a reduction in underlying road cost. The dashed line is the 45-degree line. Selected high-ranked links are labeled. The figure reports the Pearson and rank correlations and is generated from the archived replication results.
>
> Figure image omitted; see the PDF.

[Figure](#fig:welfare_scatter_passes) compares the two measures across all 352 links. Overall, they line up closely: the Pearson correlation is 0.945, and their rank correlation is 0.957. Within the top fifty links under the traditional statistic, the Pearson and rank correlations are 0.744 and 0.621; within the top one hundred, they are 0.83 and 0.772. These subset correlations are descriptive, however, because selecting links by the horizontal-axis variable narrows its range. We therefore examine rank changes and proportional differences directly in Online Appendix Tables [2](#tab:rsue_mechanism_links) and [3](#tab:rsue_rank_distribution).

The ranking differences are visible in the top-link lists. [Table](#tab:rsue_top_10_links) reports the ten highest-ranked links under each approach and each link's rank under the other measure (Online Appendix [Table](#tab:rsue_top_links) extends the comparison to the top 30). Only 4 links appear in both top-ten lists. The two leading links are the same, but six links in each list are absent from the other. For example, Durham--Raleigh ranks third under the extended approach and twenty-second under the traditional approach, whereas Washington--Baltimore ranks third under the traditional approach and fifteenth under the extended approach. Thus, a high rank correlation across the full sample can mask reshuffling among the highest-ranked links.

Online Appendix Table [2](#tab:rsue_mechanism_links) explains this contrast. The two links have similar cost-transmission terms, but the combined market-access multiplier is much larger for Durham--Raleigh. The extended measure therefore retains a larger share of the traditional benefit for Durham--Raleigh than for Washington--Baltimore. Los Angeles--San Diego remains first because its traffic-based benefit is sufficiently large despite attenuation from the additional mechanisms. These comparisons give empirical content to network position: the market-access multiplier records how the locations connected by a link are situated within the wider network.

<a id="tab:rsue_top_10_links"></a>

**Table: Top 10 physical road links under the traditional and extended approaches**

*Panel A. Ranked by the Traditional approach*

| Rank | Physical road link | Elasticity ($\times 10^{-4}$) | Other rank | Other elasticity ($\times 10^{-4}$) |
| --- | --- | --- | --- | --- |
| 1 | San Diego-Carlsbad--Los Angeles-Long Beach-Anaheim | 18.728 | 1 | 8.612 |
| 2 | Riverside-San Bernardino-Ontario--Los Angeles-Long Beach-Anaheim | 14.464 | 2 | 8.070 |
| 3 | Washington-Arlington-Alexandria--Baltimore-Columbia-Towson | 13.377 | 15 | 5.428 |
| 4 | San Francisco-Oakland-Hayward--Vallejo-Fairfield | 12.941 | 5 | 6.270 |
| 5 | San Francisco-Oakland-Hayward--Stockton-Lodi | 12.525 | 14 | 5.490 |
| 6 | San Diego-Carlsbad--Riverside-San Bernardino-Ontario | 12.014 | 4 | 6.290 |
| 7 | Washington-Arlington-Alexandria--Richmond | 11.352 | 17 | 5.335 |
| 8 | Boston-Cambridge-Newton--Providence-Warwick | 11.283 | 12 | 5.565 |
| 9 | Philadelphia-Camden-Wilmington--New York-Newark-Jersey City | 10.729 | 19 | 5.175 |
| 10 | Chicago-Naperville-Elgin--Milwaukee-Waukesha-West Allis | 9.923 | 23 | 4.902 |

*Panel B. Ranked by the Extended approach*

| Rank | Physical road link | Elasticity ($\times 10^{-4}$) | Other rank | Other elasticity ($\times 10^{-4}$) |
| --- | --- | --- | --- | --- |
| 1 | San Diego-Carlsbad--Los Angeles-Long Beach-Anaheim | 8.612 | 1 | 18.728 |
| 2 | Riverside-San Bernardino-Ontario--Los Angeles-Long Beach-Anaheim | 8.070 | 2 | 14.464 |
| 3 | Durham-Chapel Hill--Raleigh | 6.727 | 22 | 8.572 |
| 4 | San Diego-Carlsbad--Riverside-San Bernardino-Ontario | 6.290 | 6 | 12.014 |
| 5 | San Francisco-Oakland-Hayward--Vallejo-Fairfield | 6.270 | 4 | 12.941 |
| 6 | Tampa-St. Petersburg-Clearwater--Deltona-Daytona Beach-Ormond Beach | 6.069 | 16 | 9.302 |
| 7 | Portland-Vancouver-Hillsboro--Seattle-Tacoma-Bellevue | 6.041 | 27 | 8.368 |
| 8 | Atlanta-Sandy Springs-Roswell--Macon-Bibb County | 5.972 | 19 | 9.004 |
| 9 | Cincinnati--Dayton | 5.844 | 23 | 8.506 |
| 10 | Greensboro-High Point--Durham-Chapel Hill | 5.659 | 38 | 7.699 |

**Notes:** The policy unit is a simultaneous one-percent primitive-cost reduction in both directions of a physical road link. The Traditional approach ranks links by the sum of the two directed traffic shares; the Extended approach ranks them by the corresponding primitive-cost welfare elasticity. The cross-rank gives the link's rank under the other approach. Geographic labels use point-in-polygon assignments from public 2018 Census CBSA and Place polygons. When the endpoints do not identify two places, the table reports the metropolitan area and physical-link identifier. State suffixes are omitted; hyphenated Census place names are retained. Elasticities are multiplied by $10^4$.

<a id="fig:rsue_decomposition"></a>

> **Figure: Decomposition of the extended approach**
>
> **Notes:** The rows are aligned across panels. Fixed foreign supply and demand and U.S.-resident welfare are maintained throughout. Panel (a) begins with the no-externality, no-congestion baseline, then adds domestic spatial externalities and road congestion. Panel (b) reports the corresponding changes. The final change includes attenuation of the underlying cost reduction as traffic responds. Values are welfare gains from a one-percent improvement, in basis points of baseline welfare.
>
> Figure image omitted; see the PDF.

The comparison above shows where the two statistics differ, but not why. [Figure](#fig:rsue_decomposition) therefore starts from a common U.S.-welfare baseline with fixed foreign supply and demand and no domestic spatial externalities or congestion. It then adds domestic spatial externalities and, finally, road congestion, including the attenuation of the underlying cost reduction as traffic responds. Treating the foreign-market boundary as part of the baseline keeps the decomposition focused on the two domestic mechanisms.

For a one-percent improvement, the mean gain in the no-externality, no-congestion baseline is $0.04$ basis points of baseline welfare. Adding domestic spatial externalities raises it to $0.0485$ basis points, a change of $0.0085$ basis points. Online Appendix C separates this adjustment into the direct effect of the externalities and their propagation through market access. The two terms have opposite signs and nearly cancel. The positive remainder is a feature of the baseline network and calibration; neither $\alpha+\beta<0$ nor the theory alone determines its sign.

The final comparison adds road congestion. Congestion changes the welfare response to the costs faced by users, while induced traffic attenuates the underlying cost reduction. Together, these forces lower the mean by $-0.0259$ basis points. The extended mean gain is therefore $0.0225$ basis points, or $58.2$ percent of the traditional mean. These signs are calibration results, not theoretical restrictions.

[Figure](#fig:rsue_decomposition) shows how domestic spatial externalities and road congestion move the no-externality, no-congestion U.S.-welfare baseline to the extended result. Online Appendix Figure [4](#fig:rsue_sensitivity) then checks whether the extended results are sensitive to our choice of elasticities and congestion parameters. Link rankings remain close to the baseline across most of the reported parameter ranges, although road congestion produces the largest changes in both levels and rankings. The extended social savings approach is therefore stable across the sensitivity exercises, even though it differs from the traditional social savings approach in the level of benefits and the ordering of some highly ranked links.

<a id="sec:end"></a>

## Conclusion

Transportation usage and investment have grown substantially over recent decades (Lefevre et al. 2014; Ganapati and Wong 2023), raising the stakes for evaluating which improvements are worth making. The purpose of this paper has been to derive new expressions for the welfare effects of transportation infrastructure improvements. There are two primary conclusions.

First, the traditional social-savings approach pioneered by (Fogel 1964) is surprisingly robust. In the absence of agglomeration or dispersion externalities and traffic congestion, it exactly captures the first-order welfare effect even though routes, modes, prices, trade flows, and population respond to the improvement. When externalities or congestion are present, however, these general-equilibrium responses can affect welfare at first order.

Second, despite these potentially complicated responses, the welfare effects of transportation improvements can still be characterized tractably with an extended social-savings statistic. The statistic accounts for trade costs, route and mode choice, congestion, and changes in the location of economic activity. In the U.S. application, foreign supply and demand are held fixed and welfare is evaluated over U.S. residents. The traditional and extended measures are closely related across all links, but they differ in levels and in the ranking of some highly valued improvements.

The statistics derived here measure benefits that operate through the modeled network and spatial equilibrium; neither is a complete policy appraisal. Construction and maintenance costs, local disamenities, and distributional incidence require separate evidence. Some of these channels can be incorporated in richer spatial models. For example, Balboni et al. (2025) combine an urban model with traffic-induced air pollution.

Evidence from other settings helps draw this same distinction between project costs and spatial responses. Mehrotra et al. (2024) study construction costs for the Interstate Highway System, Khanna (2016) finds that the effects of Indian transport networks extend beyond directly connected regions, and Ducruet et al. (2024) show that port development entails local land-use and amenity costs. A complete project assessment would combine evidence like this on costs with the benefit calculation derived here.

Looking forward, the framework can accommodate richer transportation networks while preserving a transparent link between observed flows, economic adjustment, and welfare. Such extensions can broaden the set of benefits and costs considered without giving up the tractability needed for policy use.

## Appendix A: Proofs of the Welfare Formulas

This appendix proves the paper's welfare formulas. Appendix A.1 establishes the routing, traffic, and market-access identities used by both results. Appendix A.2 proves Proposition [1](#thm:traditional). Appendix A.3 states the local equilibrium system and derives the policy forcing for a single edge--mode improvement. Appendix A.4 applies the Implicit Function Theorem and the welfare adjoint to prove Proposition [2](#thm:welfare). Appendix A.5 then shows directly why the extended formula reduces to the traditional traffic statistic in the efficient benchmark. Online Appendix B supplies the full operator derivations behind the compact arguments here.

<a id="sec:equilibrium_details"></a>

### Routing and market-access accounting

This section derives the route, traffic, and equilibrium formulas stated in the main text and records the additional identities used in the proofs. Let $\mathcal P^{ij}$ be the set of finite walks connecting $i$ and $j$, including the zero-edge walk when $i=j$. The minimum route cost is

<a id="eq:tau"></a>

$$
\tilde\tau_{ij}
=\min_{\boldsymbol p^{ij}\in\mathcal P^{ij}}
\prod_{k=1}^{|\boldsymbol p^{ij}|-1}
\kappa_{\boldsymbol p_k^{ij},\boldsymbol p_{k+1}^{ij}}.
$$

 For finite route elasticity $\theta$, the smooth route-cost index is

<a id="eq:tau_soft"></a>

$$
\tau_{ij}^{-\theta}
=\sum_{\boldsymbol p^{ij}\in\mathcal P^{ij}}
\prod_{k=1}^{|\boldsymbol p^{ij}|-1}
\left(\kappa_{\boldsymbol p_k^{ij},\boldsymbol p_{k+1}^{ij}}\right)^{-\theta}.
$$

 Let $K_{\theta,kl}:=\mathbf 1\{l\in\mathcal N^+(k)\}
\kappa_{kl}^{-\theta}$, and assume that the spectral radius of $K_\theta$ is below one. The sum in [equation](#eq:tau_soft) then converges. Defining $G:=\tau^{-\theta}$, the route index has the equivalent resolvent representation

$$
G=(I-K_\theta)^{-1}=\sum_{n=0}^{\infty}K_\theta^n.
$$

 Partitioning finite walks by their first or last edge gives the two exact recursions

$$
G=I+K_\theta G,
\qquad
G=I+G K_\theta.
$$

 The first gives [equation](#eq:tau_recursive); the second supports the incoming market-access recursion below. With $\theta=\sigma-1$, $G=\tau^{1-\sigma}$. The product is over iceberg cost factors. If an edge has additive generalized cost $c_{kl}$ and $\kappa_{kl}=\exp(c_{kl})$, costs are additive in $c_{kl}$ and multiplicative in $\kappa_{kl}$. As $\theta\to\infty$, [equation](#eq:tau_soft) converges to [equation](#eq:tau); see Allen and Arkolakis (2022, Appendix D.1) and Miyauchi et al. (2025). The modal index $\kappa_{kl}$ and route index $\tau_{ij}$ are effective inclusive-value cost indexes. Without a normalization, either can be below one even when each primitive edge--mode iceberg factor exceeds one.

Following Allen and Arkolakis (2022), the world-income traffic share on directed edge $(k,l)$ is

<a id="eq:traffic"></a>

$$
\Xi_{kl}
=\frac{1}{Y^W}\sum_{i=1}^{N}\sum_{j=1}^{N}
X_{ij}
\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma},
\qquad
\Xi_{kl,m}=s_{kl,m}\Xi_{kl}.
$$

 The term in parentheses is the intensity with which shipments from $i$ to $j$ use edge $k\to l$.

Given CES demand and equalized welfare, bilateral trade is

<a id="eq:gravity"></a>

$$
X_{ij}=W^{1-\sigma}\left(\frac{A_{i}u_{j}}{\tau_{ij}}\right)^{\sigma-1}w_{i}^{1-\sigma}w_{j}^{\sigma}L_{j}.
$$

 Goods-market clearing requires local labor income to equal both local sales and local expenditure:

<a id="eq:eqm1"></a>
<a id="eq:eqm2"></a>

$$
\begin{aligned}
w_{i}L_{i}
&=\sum_{j=1}^{N}W^{1-\sigma}
\left(\frac{A_{i}u_{j}}{\tau_{ij}}\right)^{\sigma-1}
w_{i}^{1-\sigma}w_{j}^{\sigma}L_{j},\\
w_{i}L_{i}
&=\sum_{j=1}^{N}W^{1-\sigma}
\left(\frac{A_{j}u_{i}}{\tau_{ji}}\right)^{\sigma-1}
w_{j}^{1-\sigma}w_{i}^{\sigma}L_{i}.
\end{aligned}
$$

Substituting the first-edge recursion [Equation](#eq:tau_recursive) into the sales condition and the equivalent last-edge recursion into the expenditure condition gives

<a id="eq:recursive_eqm1"></a>
<a id="eq:recursive_eqm2"></a>

$$
\begin{aligned}
A_{i}^{1-\sigma}w_{i}^{\sigma}L_{i}
&=W^{1-\sigma}u_{i}^{\sigma-1}w_{i}^{\sigma}L_{i}
+\sum_{k\in\mathcal{N}^{+}(i)}
\kappa_{ik}^{1-\sigma}A_{k}^{1-\sigma}w_{k}^{\sigma}L_{k},\\
w_{i}^{1-\sigma}u_{i}^{1-\sigma}
&=W^{1-\sigma}A_{i}^{\sigma-1}w_{i}^{1-\sigma}
+\sum_{k\in\mathcal{N}^{-}(i)}
\kappa_{ki}^{1-\sigma}w_{k}^{1-\sigma}u_{k}^{1-\sigma}.
\end{aligned}
$$

 Define outward and inward market access, respectively, by

$$
\mathcal Q_i\equiv\Pi_i^{1-\sigma}
:=A_i^{1-\sigma}w_i^\sigma L_i,
\qquad
\mathcal P_i\equiv P_i^{1-\sigma}
:=W^{\sigma-1}w_i^{1-\sigma}u_i^{1-\sigma}.
$$

 The outward recursion follows directly from [equation](#eq:recursive_eqm1). Multiplying [equation](#eq:recursive_eqm2) by $W^{\sigma-1}$ gives the inward recursion. Thus,

<a id="eq:recursive_eqm1a"></a>
<a id="eq:recursive_eqm2a"></a>

$$
\begin{aligned}
\mathcal Q_i
&=W^{1-\sigma}u_{i}^{\sigma-1}w_{i}^{\sigma}L_{i}
+\sum_{k\in\mathcal{N}^{+}(i)}
\kappa_{ik}^{1-\sigma}\mathcal Q_k,\\
\mathcal P_i
&=A_{i}^{\sigma-1}w_{i}^{1-\sigma}
+\sum_{k\in\mathcal{N}^{-}(i)}
\kappa_{ki}^{1-\sigma}\mathcal P_k.
\end{aligned}
$$

 Combining [equations](#eq:traffic) and [Equation](#eq:gravity) then gives

$$
\Xi_{ij}
=\frac{1}{Y^W}\kappa_{ij}^{1-\sigma}\mathcal P_i\mathcal Q_j,
$$

 which is the market-access identity in [equation](#eq:traffic_2).

For later use, define the market-access exposure stock and the outward and inward continuation shares by

$$
\mathcal T_i:=\frac{\mathcal P_i\mathcal Q_i}{Y^W},
\qquad
\mu_{ij}:=\kappa_{ij}^{1-\sigma}\frac{\mathcal Q_j}{\mathcal Q_i},
\qquad
\lambda_{ij}^{in}:=
\kappa_{ij}^{1-\sigma}\frac{\mathcal P_i}{\mathcal P_j}.
$$

 The traffic identity can then be written in either direction as

<a id="eq:appendix-traffic-exposure"></a>

$$
\Xi_{ij}=\mathcal T_i\mu_{ij}
=\mathcal T_j\lambda_{ij}^{in}.
$$

 Indeed, these equalities follow directly from the definitions:

$$
\mathcal T_i\mu_{ij}
=\frac{\mathcal P_i\mathcal Q_i}{Y^W}
\kappa_{ij}^{1-\sigma}\frac{\mathcal Q_j}{\mathcal Q_i}
=\frac{\kappa_{ij}^{1-\sigma}\mathcal P_i\mathcal Q_j}{Y^W}
=\mathcal T_j\lambda_{ij}^{in}.
$$

 Online Appendix [6.2.1](#sec:multiplier-balanced-flow) derives the associated balanced-flow and time-reversal properties.

<a id="sec:proofprop1"></a>

### Proof of Proposition 1

In this section, we prove the welfare--elasticity formula of Proposition [1](#thm:traditional).

The proof proceeds in three steps. First, we derive the elasticity of aggregate welfare with respect to a change in bilateral trade costs. Then, we derive the elasticity of bilateral trade costs to a change in the transportation network. Finally, we combine the results using the chain rule. The proof closely follows derivations from an earlier working paper version of (Allen and Arkolakis 2022), extended to include multiple modes of transport.

Throughout this subsection, $\alpha=\beta=0$, so $A_i$ and $u_i$ are fixed with respect to population. To derive the first elasticity, consider the stationary conditions associated with the following auxiliary variational device. We use its Lagrangian only as a local equilibrium-potential representation. The argument requires a regular stationary point, but neither global concavity nor global planner optimality. Its variables are wages, population, and common welfare. We consider stationary points of $\ln W$ subject to the resource identity, fixed aggregate labor, and the nominal normalization $Y^W=\sum_iw_iL_i=1$:

<a id="eq:max-1"></a>
<a id="eq:max-labor"></a>
<a id="eq:max-numeraire"></a>

$$
\begin{aligned}
\frac{1}{1-\sigma}\sum_{i=1}^{N}w_{i}L_{i} & =\frac{1}{1-\sigma}\sum_{i=1}^{N}\sum_{j=1}^{N}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W^{1-\sigma}w_{j}^{\sigma}L_{j},\\
\sum_{i=1}^{N}L_i & =\bar L,\\
\sum_{i=1}^{N}w_iL_i & =1.
\end{aligned}
$$

Let the resource residual be

$$
\mathcal F(w,L,W;\tau)
:=\sum_{i,j}
\left(\frac{\tau_{ij}}{A_iu_j}\right)^{1-\sigma}
w_i^{1-\sigma}W^{1-\sigma}w_j^\sigma L_j
-\sum_iw_iL_i.
$$

 The Lagrangian of this stationary potential is

$$
\mathcal L
=\ln W-\frac{\lambda}{1-\sigma}\mathcal F(w,L,W;\tau)
+\nu\left(\bar L-\sum_iL_i\right)
+\xi\left(1-\sum_iw_iL_i\right).
$$

For compactness, define expenditure, sales, and labor income at location $i$ by

$$
\mathsf E_i:=\sum_jX_{ji},
\qquad
\mathsf S_i:=\sum_jX_{ij},
\qquad
Y_i:=w_iL_i.
$$

 The resource constraint implies $\sum_i\mathsf E_i=\sum_i\mathsf S_i=\sum_iY_i=Y^W$. We assume that the normalized stationary branch is locally regular. The normalization removes the nominal wage-scale indeterminacy without altering relative wages, labor allocation, or the welfare derivative. Because the resource residual is homogeneous of degree one in wages, summing the wage first-order conditions and using the resource identity gives $\xi=0$.

With this multiplier eliminated, the welfare, wage, and labor stationarity conditions can be written as

<a id="eq:FOC_W"></a>
<a id="eq:FOC_2"></a>
<a id="eq:FOC_L_pre"></a>

$$
\begin{aligned}
\frac{\partial\mathcal L}{\partial\ln W}=0
&:\quad
0=1-\lambda\sum_{i,j}X_{ij},
\qquad
\lambda=\frac{1}{Y^W},\\
\frac{\partial\mathcal L}{\partial\ln w_i}=0
&:\quad
Y_i=(1-\sigma)\mathsf S_i+\sigma\mathsf E_i,\\
\frac{\partial\mathcal L}{\partial\ln L_i}=0
&:\quad
0=-\frac{\lambda}{1-\sigma}(\mathsf E_i-Y_i)-\nu L_i.
\end{aligned}
$$

 Summing [equation](#eq:FOC_L_pre) over locations and using the resource identity and $\sum_iL_i=\bar L>0$ gives

$$
0=-\frac{\lambda}{1-\sigma}
\left(\sum_i\mathsf E_i-\sum_iY_i\right)-\nu\bar L
=-\nu\bar L.
$$

 Hence $\nu=0$, and the labor condition implies

<a id="eq:FOC_3"></a>

$$
\mathsf E_i=Y_i.
$$

 Substituting [equation](#eq:FOC_3) into [equation](#eq:FOC_2) then gives

<a id="eq:FOC_2b"></a>

$$
\mathsf S_i=Y_i.
$$

 [Equations](#eq:FOC_3) and [Equation](#eq:FOC_2b) are expenditure and sales clearing. Conversely, every regular interior competitive equilibrium satisfies these stationary conditions with $\lambda=1/Y^W$, $\nu=0$, and a common nominal scale fixed by [Equation](#eq:max-numeraire). Along a differentiable normalized branch, feasibility and stationarity therefore give the stationary-envelope identity

$$
\frac{d\ln W}{d\ln\tau_{ij}}
=\frac{\partial\mathcal L}{\partial\ln\tau_{ij}}.
$$

 Although the chosen gauge sets $Y^W=1$, we retain $Y^W$ in the formulas to display their scale-free form. The bilateral-cost derivative is

$$
\frac{d\ln W}{d\ln\tau_{ij}}
=-\lambda X_{ij}
=-\frac{X_{ij}}{Y^W},
$$

 or equivalently:

<a id="eq:AA_elast_3"></a>

$$
-\frac{\partial\ln W}{\partial\ln\tau_{ij}}=\frac{X_{ij}}{Y^W},
$$

 i.e. the welfare gain from a marginal reduction in bilateral trade costs equals bilateral expenditure as a share of world income.

Now consider the elasticity of bilateral trade costs to a change in the underlying infrastructure network. From the chain rule, we have:

<a id="eq:traffic_1"></a>

$$
\frac{\partial\ln\tau_{ij}}{\partial\ln\bar{\kappa}_{kl,m}}=\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}\times\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}.
$$

 Given the CES nest across modes from [equation](#eq:mode-ces), and using $\lambda_m=0$ so that $\kappa_{kl,m}=\bar\kappa_{kl,m}$, the elasticity of the aggregate edge cost to mode $m$'s primitive cost is the CES cost-elasticity weight on that mode,

<a id="eq:traffic_2_app"></a>

$$
\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}=s_{kl,m}.
$$

Throughout this step we maintain $\theta=\sigma-1$, so the route-use weights below are the same weights that enter the traffic definition. To calculate $\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}$, we use the weighted adjacency matrix from Appendix [5.1](#sec:equilibrium_details). Set $K:=K_{\sigma-1}$ and $\mathscr R_\kappa:=G=\tau^{1-\sigma}$. The resolvent representation in [equation](#eq:tau_soft) gives

<a id="eq:3"></a>

$$
\mathscr R_\kappa=(I-K)^{-1}.
$$

 Let $e_i$ denote the $i$-th standard basis vector. For a directed edge $k\to l$ in the network,

$$
\frac{\partial K}{\partial\ln\kappa_{kl}}
=(1-\sigma)K_{kl}e_ke_l^\top.
$$

 Differentiating [equation](#eq:3) using $d\mathscr R_\kappa=\mathscr R_\kappa(dK)\mathscr R_\kappa$ then yields

<a id="eq:traffic_3"></a>

$$
\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}=\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma}.
$$

Finally, we apply the chain rule. In the absence of traffic congestion, the elasticity of aggregate welfare to changes in the infrastructure network can be written as:

<a id="eq:welfare_1"></a>

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\sum_{i\in\left\{ 1,..,N\right\} }\sum_{j\in\left\{ 1,...,N\right\} }\frac{\partial\ln W}{\partial\ln\tau_{ij}}\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}.
$$

 Substituting equations ([Equation](#eq:AA_elast_3)), ([Equation](#eq:traffic_2_app)), and ([Equation](#eq:traffic_3)) into equation ([Equation](#eq:welfare_1)) yields:

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=-\sum_{i\in\left\{ 1,..,N\right\} }\sum_{j\in\left\{ 1,...,N\right\} }\frac{X_{ij}}{Y^W}\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma}s_{kl,m},
$$

 By [equation](#eq:traffic), the right-hand side is the negative of the world-income traffic share on the edge--mode:

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=-\Xi_{kl,m},
$$

 or equivalently $-\partial\ln W/\partial\ln\bar{\kappa}_{kl,m}=\Xi_{kl,m}$, as claimed.

<a id="sec:proofprop2"></a>

### A local representation of the distorted equilibrium

This subsection states the local equilibrium system needed for Proposition [2](#thm:welfare). Online Appendix [6.1.1](#sec:multiplier-transformation) derives the transformation and Online Appendix [6.1.4](#sec:multiplier-jacobian) gives every block of its Jacobian.

The baseline equilibrium is interior and differentiable, and the treated edge--mode pair carries positive traffic, so $s_{kl,m}>0$ and $\Xi_{kl,m}>0$. The route kernel has spectral radius below one, and the maintained route curvature is $\theta=\sigma-1$. We also require

$$
e:=1+\beta(\sigma-1)+\alpha\sigma\neq0,
\qquad
1+\alpha+\beta\neq0.
$$

 The relevant modal-congestion systems and the normalized equilibrium Jacobian defined below are nonsingular. These are local regularity conditions, and they do not require $e>0$. A negative $e$ changes the mapping from the transformed state to welfare, but it does not invalidate the local derivative as long as $e\neq0$ and the equilibrium Jacobian is nonsingular.

Define welfare-deflated population by

$$
\widetilde L_i:=W^{-\frac{1}{1+\alpha+\beta}}L_i.
$$

 The transformed variables are

$$
x_i := \widetilde L_i^{1+\beta(\sigma-1)}
w_i^\sigma,
\qquad
y_i := \widetilde L_i^{\alpha(\sigma-1)}
w_i^{1-\sigma},
$$

 and stack the transformed state as

$$
z:=
\begin{bmatrix}
\ln x\\
\ln y
\end{bmatrix}.
$$

 The inverse transformation is

$$
w_i=x_i^{\alpha/e}
y_i^{-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}},
\qquad
L_i=W^{\frac{1}{1+\alpha+\beta}}
x_i^{1/e}y_i^{\frac{\sigma}{(\sigma-1)e}}.
$$

 Let

$$
Z_i:=x_i^{1/e}y_i^{\sigma/((\sigma-1)e)},
\qquad
\omega_i:=\frac{Z_i}{\sum_jZ_j}=\frac{L_i}{\bar L}.
$$

 The fixed-labor condition gives

$$
W=\left(\frac{\bar L}{\sum_iZ_i}\right)^{1+\alpha+\beta},
\qquad
q:=D_z\ln W
=-\rho
\begin{bmatrix}
\omega\\[2pt]
\frac{\sigma}{\sigma-1}\omega
\end{bmatrix},
\qquad
\rho:=\frac{1+\alpha+\beta}{e}.
$$

For a compact statement of the equilibrium, define

$$
A:=\frac{1+\alpha}{e},\quad
B:=\frac{\sigma(\alpha+\beta)}{e},\quad
C:=\frac{(\alpha+\beta)(\sigma-1)}{e},\quad
E:=1-\frac{\sigma(\alpha+\beta)}{e}=\frac{1-\beta}{e},
$$

 so that

$$
A+C=1,
\qquad
B+E=1.
$$

 Also define

$$
\mathcal A:=\left(\frac{\sum_iZ_i}{\bar L}\right)^{\sigma-1},
\qquad
\phi_i:=(\bar A_i\bar u_i)^{\sigma-1},
$$

 and

$$
S_i^{(1)}:=\phi_i\mathcal A x_i
+\sum_{j\in\mathcal N^+(i)}
\kappa_{ij}^{1-\sigma}
\left(\frac{\bar A_j}{\bar A_i}\right)^{1-\sigma}
x_j^Ay_j^{-B},
$$



$$
S_i^{(2)}:=\phi_i\mathcal A y_i
+\sum_{j\in\mathcal N^-(i)}
\kappa_{ji}^{1-\sigma}
\left(\frac{\bar u_j}{\bar u_i}\right)^{1-\sigma}
x_j^{-C}y_j^E.
$$

 The coefficient $A$ governs how neighboring production access enters the first recursion. The coefficients $B$ and $C$ transmit the combined production and amenity externality across the two recursions, while $E$ changes the own elasticity in the inward recursion. The coefficient $\rho$ maps changes in the transformed state back into welfare when total labor is fixed. The normalized local equilibrium is $G(z,\bar\vartheta)=0$, where

$$
\begin{aligned}
G_{1i}
&:=\ln S_i^{(1)}-A\ln x_i+B\ln y_i,
&&i=1,\ldots,N,\\
G_{2i}
&:=\ln S_i^{(2)}+C\ln x_i-E\ln y_i,
&&i=1,\ldots,N-1,\\
G_{2N}
&:=\frac{\alpha}{e}\ln x_N
-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}\ln y_N .
\end{aligned}
$$

 At $G=0$, direct substitution of the inverse transformation into the market-access definitions in Appendix [5.1](#sec:equilibrium_details) shows that the neighbor term on edge $i\to j$, divided by $S_i^{(1)}$, is $\mu_{ij}$, while the same edge term divided by $S_j^{(2)}$ is $\lambda_{ij}^{in}$. Thus the residual shares used below are exactly the continuation shares in [equation](#eq:appendix-traffic-exposure), not new objects. The last equation imposes the wage normalization $w_N=1$. Realized transport costs may depend on $z$ through mode choice and congestion, so the total Jacobian

$$
J:=D_zG
$$

 includes those feedbacks. Online Appendix [6.1.4](#sec:multiplier-jacobian) derives $J$. Online Appendix [6.1.3](#sec:multiplier-congestion) derives the primitive-cost transmission term used next.

For $l<N$, let $\widetilde e_l$ be the $l$-th unit vector in $\mathbb R^{N-1}$, and set $\widetilde e_N:=0_{N-1}$. This notation keeps the inward-access residuals separate from the final scalar wage normalization.

<a id="lem:policy-forcing"></a>
**Lemma 1** (Policy forcing).

*Let $\bar\vartheta_{klm}:=\ln\bar\kappa_{kl,m}$ be the underlying cost of an edge--mode pair that carries positive traffic, and define

$$
\zeta_{klm}:=
\left.
\frac{\partial\ln\kappa_{kl}}{\partial\bar\vartheta_{klm}}
\right|_{dz=0},
\qquad
\chi_{klm}:=\frac{\zeta_{klm}}{s_{kl,m}}.
$$

 With one mode carrying traffic on the edge, Online Appendix [6.1.3](#sec:multiplier-congestion) gives $\chi_{klm}=[1+(\sigma-1)\lambda_m]^{-1}$. Thus induced congestion attenuates the underlying cost reduction before it enters the spatial equilibrium. For the ceteris-paribus realized-cost comparison $\vartheta_{klm}:=\ln\kappa_{kl,m}$, which holds all other realized modal costs fixed, the direct forcing is

<a id="eq:compact-realized-forcing"></a>

$$
b^r_{klm}:=D_{\vartheta_{klm}}G
=(1-\sigma)\Xi_{kl,m}
\begin{bmatrix}
e_k/\mathcal T_k\\[3pt]
\widetilde e_l/\mathcal T_l\\[3pt]
0
\end{bmatrix}.
$$

 The direct forcing for the underlying-cost policy is

<a id="eq:compact-policy-forcing"></a>

$$
b^p_{klm}:=D_{\bar\vartheta_{klm}}G
=(1-\sigma)\chi_{klm}\Xi_{kl,m}
\begin{bmatrix}
e_k/\mathcal T_k\\[3pt]
\widetilde e_l/\mathcal T_l\\[3pt]
0
\end{bmatrix}.
$$

 [Equation](#eq:compact-policy-forcing) contains the traditional traffic term: the underlying-cost shock perturbs the equilibrium in proportion to baseline edge--mode traffic. Appendix [5.4](#sec:prop2-adjoint-proof) shows how the inverse Jacobian adjusts this traffic-based effect for the welfare consequences of changes in market access throughout the network.*

*Proof.* Holding the equilibrium state fixed, a change in the aggregate realized cost of edge $k\to l$ enters only the origin's outward-access residual and the destination's inward-access residual. A ceteris-paribus change in realized modal cost therefore gives

$$
b^r_{klm}
=(1-\sigma)s_{kl,m}
\begin{bmatrix}
\mu_{kl}e_k\\
\lambda_{kl}^{in}\widetilde e_l\\
0
\end{bmatrix}.
$$

 A primitive modal-cost change instead gives

$$
b^p_{klm}
=(1-\sigma)\zeta_{klm}
\begin{bmatrix}
\mu_{kl}e_k\\
\lambda_{kl}^{in}\widetilde e_l\\
0
\end{bmatrix}.
$$

 By [equation](#eq:appendix-traffic-exposure),

$$
\mu_{kl}=\frac{\Xi_{kl}}{\mathcal T_k},
\qquad
\lambda_{kl}^{in}=\frac{\Xi_{kl}}{\mathcal T_l}.
$$

 Using $\zeta_{klm}=\chi_{klm}s_{kl,m}$ and $\Xi_{kl,m}=s_{kl,m}\Xi_{kl}$ gives [equations](#eq:compact-realized-forcing) and [Equation](#eq:compact-policy-forcing). The destination component is absent when $l=N$ because the corresponding inward-access equation is replaced by the wage normalization. ◻

<a id="sec:prop2-adjoint-proof"></a>

### Proof of Proposition [2](#thm:welfare): the equilibrium adjoint

Begin from the equilibrium system $G(z,\bar\vartheta)=0$. Following a marginal change in $\bar\vartheta_{klm}$, total differentiation gives

<a id="eq:compact-total-differential"></a>

$$
dG
=D_zG\,dz+D_{\bar\vartheta_{klm}}G\,d\bar\vartheta_{klm}
=J\,dz+b^p_{klm}\,d\bar\vartheta_{klm}=0.
$$

 Rearranging [equation](#eq:compact-total-differential) yields

$$
J\,dz=-b^p_{klm}\,d\bar\vartheta_{klm}.
$$

 Under the nonsingularity condition stated in Appendix [5.3](#sec:proofprop2), the Implicit Function Theorem therefore gives the local state response

<a id="eq:compact-ift-state-response"></a>

$$
\frac{dz}{d\bar\vartheta_{klm}}=-J^{-1}b^p_{klm}.
$$

 Because $q=D_z\ln W$ and welfare has no separate direct dependence on $\bar\vartheta_{klm}$, its differential is $d\ln W=q^\top dz$. Substituting [equation](#eq:compact-ift-state-response) gives the direct calculation

<a id="eq:compact-forward-welfare"></a>

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=q^\top J^{-1}b^p_{klm}.
$$

 [Equation](#eq:compact-forward-welfare) would require a new linear solve for every forcing vector. Because $J$ and $q$ are common across experiments, we can instead transpose the calculation:

$$
q^\top J^{-1}=\left(J^{-\top}q\right)^\top.
$$

 Define the welfare adjoint $\ell:=J^{-\top}q$, or equivalently solve the transposed system

<a id="eq:compact-adjoint"></a>

$$
J^\top\ell=q.
$$

 It follows immediately that

<a id="eq:compact-adjoint-welfare"></a>

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=q^\top J^{-1}b^p_{klm}
=\ell^\top b^p_{klm}.
$$

 Thus [equation](#eq:compact-adjoint) is solved once, after which each infrastructure improvement is evaluated by its forcing vector.

The same algebra has a useful Lagrangian interpretation. Define the local equilibrium Lagrangian

<a id="eq:compact-equilibrium-lagrangian"></a>

$$
\mathscr L^{eq}(z,\bar\vartheta,\ell)
:=\ln W(z)-\ell^\top G(z,\bar\vartheta).
$$

 This is not a planner's Lagrangian: the equilibrium need not maximize welfare. It is a device for assigning welfare weights to the equilibrium conditions. Along the equilibrium branch, $G=0$, so $\mathscr L^{eq}=\ln W$. Moreover,

$$
D_z\mathscr L^{eq}=q-J^\top\ell=0,
$$

 where the final equality follows from [equation](#eq:compact-adjoint). Differentiating [equation](#eq:compact-equilibrium-lagrangian) along the equilibrium branch then gives

$$
\frac{d\mathscr L^{eq}}{d\bar\vartheta_{klm}}
=\left(q-J^\top\ell\right)^\top
\frac{dz}{d\bar\vartheta_{klm}}-\ell^\top b^p_{klm}
=-\ell^\top b^p_{klm}.
$$

 Under the paper's convention that a benefit is the welfare effect of lowering the underlying transport cost, this recovers [equation](#eq:compact-adjoint-welfare). This is the adjoint form of comparative statics for an implicit nonlinear equilibrium system. An early application of the method to fluid dynamics is Pironneau (1974). Martins and Hwang (2013) review direct and adjoint derivatives for coupled computational models and place that application in the broader development of the method. Giles and Pierce (2000) provide a complementary introduction to the adjoint approach.

The forcing vector in [equation](#eq:compact-policy-forcing) has only two nonzero entries. Using the definition of $\widetilde e_l$ above, define the residual selectors

$$
d_k^{(1)}:=
\begin{bmatrix}e_k\\0\\0\end{bmatrix},
\qquad
d_l^{(2)}:=
\begin{bmatrix}0\\\widetilde e_l\\0\end{bmatrix}.
$$

 They pick the origin entry in the first market-access residual block and the destination entry in the second. The latter is zero when the destination residual has been replaced by the wage normalization. Because $\ell=J^{-\top}q$, the selected adjoint coefficients are

<a id="eq:compact-endpoint-columns"></a>

$$
\ell_k^{in}:=(d_k^{(1)})^\top\ell
=q^\top J^{-1}d_k^{(1)},
\qquad
\ell_l^{out}:=(d_l^{(2)})^\top\ell
=q^\top J^{-1}d_l^{(2)}.
$$

 Thus these endpoint coefficients are entries of the welfare-projected inverse Jacobian, not additional primitives. Substituting [equation](#eq:compact-policy-forcing) into [Equation](#eq:compact-adjoint-welfare) makes the connection explicit:

<a id="eq:compact-endpoint-adjoint"></a>

$$
\begin{aligned}
-\frac{d\ln W}{d\bar\vartheta_{klm}}
&=(1-\sigma)\chi_{klm}\Xi_{kl,m}
\left(
\frac{q^\top J^{-1}d_k^{(1)}}{\mathcal T_k}
+\frac{q^\top J^{-1}d_l^{(2)}}{\mathcal T_l}
\right)\\
&=(1-\sigma)\chi_{klm}\Xi_{kl,m}
\left(\frac{\ell_k^{in}}{\mathcal T_k}
+\frac{\ell_l^{out}}{\mathcal T_l}\right).
\end{aligned}
$$

To express these inverse-Jacobian terms in the market-access notation of the proposition, define

$$
\mathcal L:=\frac{1-\sigma}{\rho}\ell,
\qquad
\mathcal M_i^{in}:=\frac{\mathcal L_i^{in}}{\mathcal T_i},
\qquad
\mathcal M_i^{out}:=\frac{\mathcal L_i^{out}}{\mathcal T_i},
$$

 with $\mathcal L_N^{out}=0$ under the chosen normalization. Since

$$
q=\frac{\rho}{\sigma-1}\psi,
\qquad
\psi:=
\begin{bmatrix}
(1-\sigma)\omega\\
-\sigma\omega
\end{bmatrix},
$$

 [equation](#eq:compact-adjoint) is equivalently

$$
J^\top\mathcal L=-\psi.
$$

 Before applying this adjoint to the policy forcing, it is useful to state what determines its endpoint values. Online Appendices [6.1.2](#sec:multiplier-spatial-jacobian)--[6.1.4](#sec:multiplier-jacobian) show that the equilibrium Jacobian has the decomposition

<a id="eq:compact-jacobian-anatomy"></a>

$$
J
=\underbrace{J^0}_{\substack{\text{recursive market-access}\\
\text{propagation}}}
+\underbrace{uv^\top}_{\substack{\text{fixed aggregate}\\
\text{labor}}}
+\underbrace{J^{\mathrm{cong}}}_{\substack{\text{traffic-cost}\\
\text{feedback}}}.
$$

 The sparse block $J^0$ transmits changes through the outward and inward continuation shares. The transposed system assigns welfare values to those changes by following the same network in the reverse direction. The rank-one term enforces fixed aggregate labor, and the congestion block accounts for the feedback from equilibrium traffic to realized transport costs. All three blocks are evaluated from baseline continuation, absorption, labor, income, and modal shares, together with the elasticities governing trade, spatial externalities, mode choice, and congestion. Online Appendix [6.1](#sec:multiplier-equilibrium-jacobian) gives their entries explicitly. The endpoint multipliers are therefore exposure-normalized welfare values generated by the complete equilibrium system. Online Appendix [6.2.2](#sec:multiplier-dual) writes their corresponding nodewise recursion.

Rescaling [equation](#eq:compact-endpoint-adjoint) therefore gives

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=\rho\chi_{klm}\Xi_{kl,m}
\left(
\mathcal M_k^{in}+\mathcal M_l^{out}
\right),
$$

 which proves Proposition [2](#thm:welfare). Only the endpoint sum is normalization invariant. Online Appendix [6.2.2](#sec:multiplier-dual) derives the dual market-access recursion and proves this invariance directly. When $l=N$, the zero destination selector and $\mathcal M_N^{out}=0$ select the representative associated with the normalization $w_N=1$; they do not omit the destination effect. The same endpoint sum is obtained from any representative of the unreduced system.

At the paper's calibration, $\rho=-1.6$. Under the residual convention used here, the endpoint sum is also negative, so their product gives the positive welfare gains reported in the application. Neither sign should be interpreted in isolation under this transformed-residual convention; the welfare derivative is the invariant economic object.

For the realized-cost accounting comparison, substituting [equation](#eq:compact-realized-forcing) instead gives

$$
-\frac{d\ln W}{d\vartheta_{klm}}
=\rho\Xi_{kl,m}
\left(\mathcal M_k^{in}+\mathcal M_l^{out}\right).
$$

 Thus the primitive experiment differs from the realized-cost comparison through $\chi_{klm}$, exactly as stated in the proposition.

The adjoint is a local envelope method for an implicit and potentially inefficient equilibrium. It does not assert that the decentralized equilibrium maximizes welfare. Instead, it assigns shadow values to the equilibrium equations so that the derivative of the endogenous state cancels from the welfare derivative. Online Appendix [6.1](#sec:multiplier-equilibrium-jacobian) derives the complete Jacobian. Online Appendix [6.2](#sec:multiplier-welfare) then connects its adjoint to balanced traffic and interprets the two endpoint multipliers. Online Appendix [6.3](#sec:multiplier-additional-results) develops the efficient benchmark and other useful special cases. Online Appendix [7.5](#sec:computational-adjoint-method) then develops the same adjoint calculation for the application's domestic equilibrium system.

<a id="sec:proofcor"></a>

### Proof of Corollary [1](#cor:fogel)

We establish the corollary by specializing Proposition [2](#thm:welfare), rather than by comparing its conclusion with Proposition [1](#thm:traditional). Fix a link--mode pair that carries positive traffic, and suppose $\alpha=\beta=0$ and congestion is absent. Then

$$
e=\rho=A=E=1,\qquad B=C=0,\qquad \chi_{klm}=1.
$$

 It remains to show that the endpoint multiplier sum equals one.

Let $a_i:=s_i^x=s_i^y$ denote local absorption in the two market-access recursions, and let $\Theta_i$ be the efficient specialization of market-access exposure. Balanced flow gives

$$
\Xi_{ij}=\Theta_i\mu_{ij}
=\Theta_j\lambda_{ij}^{in}.
$$

 Consequently, $\Theta^\top a=1$ and

$$
\Theta^\top B_x=0,
\qquad
B_x:=\operatorname{diag}(a)-I+\mu.
$$

 Thus exposure is the stationary left measure of the same recursive system that enters the welfare adjoint.

At the efficient benchmark, these two identities imply the row relation

$$
[-\Theta^\top,0^\top]J^{\mathrm{eff}}
=\left[(1-\sigma)\omega^\top,-\sigma\omega^\top\right]
=\psi^\top.
$$

 Since $J^{\mathrm{eff}}$ is nonsingular,

$$
\mathcal L^\top
=-\psi^\top(J^{\mathrm{eff}})^{-1}
=[\Theta^\top,0^\top].
$$

 Exposure normalization therefore gives

$$
\mathcal M_i^{in}=1,
\qquad
\mathcal M_i^{out}=0
$$

 in the chosen wage normalization. The split between the two terms depends on the normalization, but their sum does not. Hence

$$
\mathcal M_k^{in}+\mathcal M_l^{out}=1.
$$

 Substituting this result and $\rho=\chi_{klm}=1$ into Proposition [2](#thm:welfare) yields

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}=\Xi_{kl,m},
$$

 which proves the corollary directly from Proposition 2.

This adjoint calculation is the dual counterpart of the stationary-envelope argument in Appendix [5.2](#sec:proofprop1). Routing and modal aggregation determine the traffic object $\Xi_{kl,m}$, but they do not alter its one-for-one welfare weight in the efficient benchmark. Online Appendix [6.3.1](#sec:multiplier-efficient-benchmark) gives the complete balanced-flow and adjoint derivation. Online Appendix [6.3.3](#sec:multiplier-anchored-woodbury) supplies a separate technical construction of the efficient inverse.

## Online Appendix B: Anatomy of the Extended Social-Savings Multiplier

Appendix A of the paper proves the welfare formulas using a compact local equilibrium system. This online appendix derives the operator behind those formulas and explains its economic structure. Proposition 2 first factors the welfare effect multiplicatively into traffic, cost transmission, common welfare scaling, and an endpoint multiplier. Sections B.1 and B.2 derive and interpret that multiplier: Section B.1 constructs the complete equilibrium Jacobian, while Section B.2 uses balanced flows and the transposed equilibrium system to interpret and measure its endpoint values. Section B.3 then gives an analytical decomposition of the inverse-Jacobian multiplier and two supporting benchmark results. These results concern the multiplier within a given equilibrium specification. They are distinct from the quantitative decomposition in Online Appendix C, which compares welfare derivatives across model closures.

<a id="sec:multiplier-equilibrium-jacobian"></a>

### The equilibrium Jacobian

Proposition 2 depends on the welfare-projected inverse Jacobian. We first derive that Jacobian from the transformed spatial equilibrium, then add the fixed-labor and transport-cost feedbacks. The final subsection assembles the pieces in the form used by the adjoint. Every entry is expressed in terms of baseline network shares and the maintained elasticities, making the multiplier computable without solving a separate nonlinear counterfactual for each link.

<a id="sec:multiplier-transformation"></a>

#### Transformed equilibrium

We begin from the two accounting identities linking productivity $A_i$, amenity $u_i$, wages $w_i$, local population $L_i$, and bilateral frictions $\kappa_{ij}$. Let $\mathcal N^+(i)$ and $\mathcal N^-(i)$ denote the outgoing and incoming neighbors of $i$, respectively:

<a id="eq:start-a"></a>
<a id="eq:start-b"></a>

$$
\begin{aligned}
A_i^{1-\sigma} w_i^\sigma L_i
&= W^{1-\sigma} u_i^{\sigma-1} w_i^\sigma L_i
  + \sum_{k\in\mathcal{N}^+(i)} \kappa_{ik}^{1-\sigma} A_k^{1-\sigma} w_k^\sigma L_k,\\
w_i^{1-\sigma} u_i^{1-\sigma}
&= W^{1-\sigma} A_i^{\sigma-1} w_i^{1-\sigma}
  + \sum_{k\in\mathcal{N}^-(i)} \kappa_{ki}^{1-\sigma} w_k^{1-\sigma} u_k^{1-\sigma}.
\end{aligned}
$$

 Substituting $u_i=\bar u_i L_i^\beta$ and $A_i=\bar A_i L_i^\alpha$ gives

$$
\begin{aligned}
\bar{A}_i^{1-\sigma} L_i^{\alpha(1-\sigma)} w_i^\sigma L_i
&=W^{1-\sigma} \bar{u}_i^{\sigma-1} L_i^{\beta(\sigma-1)} w_i^\sigma L_i
+\sum_{k \in \mathcal{N}^+(i)} \kappa_{i k}^{1-\sigma} \bar{A}_k^{1-\sigma} L_k^{\alpha(1-\sigma)} w_k^\sigma L_k,\\
\bar{u}_i^{1-\sigma} L_i^{\beta(1-\sigma)} w_i^{1-\sigma}
&=W^{1-\sigma} \bar{A}_i^{\sigma-1} L_i^{\alpha(\sigma-1)} w_i^{1-\sigma}
+\sum_{k \in \mathcal{N}^-(i)} \kappa_{k i}^{1-\sigma} \bar{u}_k^{1-\sigma} L_k^{\beta(1-\sigma)} w_k^{1-\sigma}.
\end{aligned}
$$

Define welfare-deflated population by

$$
\widetilde L_i:=W^{-\frac{1}{1+\alpha+\beta}}L_i.
$$

 Then define

$$
x_i := \widetilde L_i^{1+\beta(\sigma-1)} w_i^{\sigma},
\qquad
y_i := \widetilde L_i^{\alpha(\sigma-1)} w_i^{1-\sigma},
$$

 and let $e:=1+\beta(\sigma-1)+\alpha\sigma$. At a regular equilibrium $e\neq0$ and $1+\alpha+\beta\neq0$, and the inverse transformation is

$$
w_i= x_i^{\alpha/e}\,
y_i^{-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}},
\qquad
L_i = W^{\frac{1}{1+\alpha+\beta}}\,
x_i^{1/e}\,y_i^{\frac{\sigma}{(\sigma-1)e}}.
$$

 Set

$$
Z_i:=x_i^{1/e}y_i^{\sigma/((\sigma-1)e)}.
$$

 The fixed aggregate labor condition $\sum_iL_i=\bar L$ implies

$$
L_i=W^{\frac{1}{1+\alpha+\beta}}Z_i,\qquad
W=\left(\frac{\bar L}{\sum_i Z_i}\right)^{1+\alpha+\beta},\qquad
\omega_i:=\frac{L_i}{\bar L}=\frac{Z_i}{\sum_jZ_j}.
$$

 Therefore

$$
D_z\ln W
=-\rho\left[\omega^\top,\frac{\sigma}{\sigma-1}\omega^\top\right],
\qquad
\rho:=\frac{1+\alpha+\beta}{e}.
$$

Introduce

$$
A:=\frac{1+\alpha}{e},\quad
B:=\frac{\sigma(\alpha+\beta)}{e},\quad
C:=\frac{(\alpha+\beta)(\sigma-1)}{e},\quad
E:=1-\frac{\sigma(\alpha+\beta)}{e}=\frac{1-\beta}{e},
$$

 which implies

$$
A+C=1,
\qquad
B+E=1.
$$

 Also define

$$
\mathcal{A}:=\left(\frac{\sum_i Z_i}{\bar L}\right)^{\sigma-1},
\qquad
\phi_i:=(\bar A_i\bar u_i)^{\sigma-1}.
$$

 The coefficient $A$ governs how neighboring production-market access enters the $G1$ recursion. The coefficients $B$ and $C$ are the cross-equation feedback terms generated by the joint externality $\alpha+\beta$; $E$ changes the own elasticity in the $G2$ recursion; and $\rho=(1+\alpha+\beta)/e$ is the welfare projection from changes in $(x,y)$ back to fixed-$\bar L$ welfare. Keeping the first-nature fundamentals in the equations, define

$$
S_i^{(1)}:=\phi_i\mathcal{A}x_i
+\sum_{k\in\mathcal{N}^+(i)}
\kappa_{ik}^{1-\sigma}
\left(\frac{\bar A_k}{\bar A_i}\right)^{1-\sigma}
x_k^{A}y_k^{-B},
$$



$$
S_i^{(2)}:=\phi_i\mathcal{A}y_i
+\sum_{k\in\mathcal{N}^-(i)}
\kappa_{ki}^{1-\sigma}
\left(\frac{\bar u_k}{\bar u_i}\right)^{1-\sigma}
x_k^{-C}y_k^{E}.
$$

 The corresponding local and neighbor shares are

$$
s_i^x:=\frac{\phi_i\mathcal{A}x_i}{S_i^{(1)}},\quad
\mu_{ij}:=
\frac{\kappa_{ij}^{1-\sigma}
\left(\frac{\bar A_j}{\bar A_i}\right)^{1-\sigma}x_j^Ay_j^{-B}}{S_i^{(1)}},
$$



$$
s_i^y:=\frac{\phi_i\mathcal{A}y_i}{S_i^{(2)}},\quad
\lambda^{in}_{ji}:=
\frac{\kappa_{ji}^{1-\sigma}
\left(\frac{\bar u_j}{\bar u_i}\right)^{1-\sigma}x_j^{-C}y_j^E}{S_i^{(2)}}.
$$

 By construction $s_i^x+\sum_j\mu_{ij}=1$ and $s_i^y+\sum_j\lambda^{in}_{ji}=1$. The residual equations are

$$
\begin{aligned}
G1_i&:=\ln S_i^{(1)}-A\ln x_i+B\ln y_i,\quad i=1,\dots,N,\\
G2_i&:=\ln S_i^{(2)}+C\ln x_i-E\ln y_i,\quad i=1,\dots,N-1,\\
G2_N&:=\frac{\alpha}{e}\ln x_N
-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}\ln y_N
\quad\text{(normalization $w_N=1$).}
\end{aligned}
$$

<a id="sec:multiplier-spatial-jacobian"></a>

#### Spatial recursion and labor closure

Order the residuals with all $G1$ equations first, followed by the first $N-1$ $G2$ equations and the wage normalization. Order the columns by $\ln x$ and then $\ln y$. Let $\mu=(\mu_{ij})$, let $\Lambda^{in}=(\lambda^{in}_{ij})$ be the $N\times N$ matrix whose first index is the origin and second index is the destination, and let $\mathsf S_{-N}=[I_{N-1}\;0]$ select the first $N-1$ rows. The non-congestion part of the Jacobian is

<a id="eq:DGcompact-new"></a>

$$
J^0=
\begin{bmatrix}
S_x - A I_N + A\,\mu & B\,I_N - B\,\mu\\[2pt]
C\,\mathsf S_{-N}(I_N-(\Lambda^{in})^\top)
& \mathsf S_{-N}\left[S_y-E(I_N-(\Lambda^{in})^\top)\right]\\
\hline
\frac{\alpha}{e}e_N^\top &
-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}e_N^\top
\end{bmatrix},
$$

 where $S_x=\mathrm{diag}(s_1^x,\dots,s_N^x)$, $S_y=\mathrm{diag}(s_1^y,\dots,s_N^y)$. The fixed-labor dependence of $\mathcal A$ adds

$$
J^{\mathcal A}
=\frac{1}{e}
\begin{bmatrix}
(\sigma-1)s^x\omega^\top & \sigma s^x\omega^\top\\[2pt]
(\sigma-1)s^y_{1:(N-1)}\omega^\top
& \sigma s^y_{1:(N-1)}\omega^\top\\
\hline
0 & 0
\end{bmatrix}.
$$

 This update is rank one. In particular, it can be written as

<a id="eq:fixed-labor-rank-one"></a>

$$
J^{\mathcal A}=uv^\top,
\quad
u:=\frac{1}{e}
\begin{bmatrix}
s^x\\ s^y_{1:(N-1)}\\0
\end{bmatrix},
\quad
v^\top:=
\begin{bmatrix}
(\sigma-1)\omega^\top&\sigma\omega^\top
\end{bmatrix}.
$$

The sparse block $J^0$ propagates changes through local absorption and inward and outward market access. The rank-one term $J^{\mathcal A}=uv^\top$ imposes fixed aggregate labor and returns the common welfare adjustment to every location. Thus the network recursion remains sparse even though the labor closure is economy-wide.

<a id="sec:multiplier-congestion"></a>

#### Modal aggregation and congestion feedback

We next close the modal and congestion derivatives entering the Jacobian. To distinguish the congestion elasticity from the incoming neighbor share $\lambda^{in}_{ji}$, write $\gamma_n\equiv\lambda_n$ for the mode-$n$ congestion elasticity in this paragraph. For each edge $(i,j)$,

$$
\kappa_{ij}=\left(\sum_n\kappa_{ij,n}^{-\eta}\right)^{-1/\eta},
\qquad
s_{ij,n}=\frac{\kappa_{ij,n}^{-\eta}}{\sum_r\kappa_{ij,r}^{-\eta}},
\qquad
\Xi_{ij,n}=s_{ij,n}\Xi_{ij},
\qquad
\kappa_{ij,n}=\bar\kappa_{ij,n}\Xi_{ij,n}^{\gamma_n}.
$$

 Let

$$
\mathcal P_i(z):=P_i(z)^{1-\sigma},\qquad
\mathcal Q_j(z):=\Pi_j(z)^{1-\sigma},\qquad
\mathcal R_{ij}(z):=\frac{\mathcal P_i(z)\mathcal Q_j(z)}{Y^W(z)},
$$

 so that

$$
\Xi_{ij}=\kappa_{ij}^{1-\sigma}\mathcal{R}_{ij}(z),\qquad
d\ln\mathcal{R}_{ij}=(r_{ij}^{x})^\top d\ln x+(r_{ij}^{y})^\top d\ln y.
$$

 We now derive these gradients. The inverse transformation above gives

$$
\begin{aligned}
\mathcal P_i
&=\bar u_i^{1-\sigma}
W^{\frac{(\sigma-1)(1+\alpha)}{1+\alpha+\beta}}
x_i^{-C}y_i^E,\\
\mathcal Q_j
&=\bar A_j^{1-\sigma}
W^{\frac{1-\alpha(\sigma-1)}{1+\alpha+\beta}}
x_j^Ay_j^{-B},\\
Y^W
&=W^{\frac{1}{1+\alpha+\beta}}\mathcal Y,
\qquad
\mathcal Y:=\sum_hx_h^Ay_h^E.
\end{aligned}
$$

 Define the nominal-income share

$$
\pi_h:=\frac{x_h^Ay_h^E}{\mathcal Y}=\frac{w_hL_h}{Y^W},
\qquad \sum_h\pi_h=1.
$$

 Using the fixed-labor expression for $W$, the part of edge traffic that does not depend directly on the edge cost is

<a id="eq:nonedge-traffic-closed-form"></a>

$$
\mathcal R_{ij}(z)
=(\bar u_i\bar A_j)^{1-\sigma}\mathcal A^{-1}
\frac{x_i^{-C}y_i^E x_j^Ay_j^{-B}}{\mathcal Y}.
$$

 Moreover,

$$
\begin{aligned}
d\ln\mathcal A
&=\frac{\sigma-1}{e}\omega^\top d\ln x
+\frac{\sigma}{e}\omega^\top d\ln y,\\
d\ln\mathcal Y
&=A\pi^\top d\ln x+E\pi^\top d\ln y.
\end{aligned}
$$

 Let $\mathbf e_i$ denote the $i$-th unit vector. Differentiating [equation](#eq:nonedge-traffic-closed-form) yields

<a id="eq:nonedge-traffic-gradients"></a>

$$
\begin{aligned}
r_{ij}^x
&=A(\mathbf e_j-\pi)-C\mathbf e_i
-\frac{\sigma-1}{e}\omega,\\
r_{ij}^y
&=E(\mathbf e_i-\pi)-B\mathbf e_j
-\frac{\sigma}{e}\omega.
\end{aligned}
$$

 Each gradient separates the two endpoint terms from the world-income normalization, represented by $\pi$, and the fixed-labor welfare closure, represented by $\omega$.

The edge-by-edge system below covers edge-local congestion. Appendix [7](#sec:computational_appendix) uses a joint block system when one terminal affects costs on several edges. For a perturbation, set $a_{ij,n}:=d\ln\kappa_{ij,n}$, $a_{ij}:=d\ln\kappa_{ij}=\sum_ns_{ij,n}a_{ij,n}$, and $R_{ij}:=(r_{ij}^{x})^\top d\ln x+(r_{ij}^{y})^\top d\ln y$. Since

$$
d\ln s_{ij,n}=-\eta(a_{ij,n}-a_{ij}),\qquad
d\ln\Xi_{ij,n}=R_{ij}-\eta a_{ij,n}+(1-\sigma+\eta)a_{ij},
$$

 the congestion system for the modal cost changes is

$$
\sum_r\mathcal{H}_{ij,nr}a_{ij,r}
=\delta_{ij,n}+\gamma_n R_{ij},
\qquad
\mathcal{H}_{ij,nr}:=\mathbf{1}\{n=r\}(1+\eta\gamma_n)
-\gamma_n(1-\sigma+\eta)s_{ij,r},
$$

 where $\delta_{ij,n}=d\bar\vartheta_{klm}$ if $(i,j,n)=(k,l,m)$ and is zero otherwise. Regularity requires each relevant $\mathcal H_{ij}$ to be nonsingular.

The same system gives explicit expressions for the two congestion effects used below. Let $\boldsymbol s_{ij}$ collect the modal shares, let $\boldsymbol\gamma=(\gamma_1,\ldots,\gamma_M)^\top$, and define

$$
D_{ij}:=\operatorname{diag}(1+\eta\gamma_n),\qquad
g_{ij}:=\boldsymbol s_{ij}^\top D_{ij}^{-1}\boldsymbol\gamma
=\sum_n\frac{s_{ij,n}\gamma_n}{1+\eta\gamma_n}.
$$

 Because

$$
\mathcal H_{ij}
=D_{ij}-(1-\sigma+\eta)\boldsymbol\gamma\boldsymbol s_{ij}^\top,
$$

 the Sherman--Morrison formula gives

<a id="eq:modal-congestion-inverse-action"></a>

$$
\mathcal H_{ij}^{-1}
=D_{ij}^{-1}
+\frac{(1-\sigma+\eta)
D_{ij}^{-1}\boldsymbol\gamma\boldsymbol s_{ij}^\top D_{ij}^{-1}}
{1-(1-\sigma+\eta)g_{ij}},
\qquad
\mathcal H_{ij}^{-1}\boldsymbol\gamma
=\frac{D_{ij}^{-1}\boldsymbol\gamma}
{1-(1-\sigma+\eta)g_{ij}}.
$$

 For the endogenous-state contribution to the Jacobian, set the direct policy shock to zero. Then

<a id="eq:endogenous-congestion-wedge"></a>

$$
d\ln\kappa_{ij}
=\upsilon_{ij}\,d\ln\mathcal R_{ij},
\qquad
\upsilon_{ij}:=
\frac{g_{ij}}{1-(1-\sigma+\eta)g_{ij}},
$$

 and hence

<a id="eq:endogenous-congestion-gradients"></a>

$$
\nabla_{\ln x}\ln\kappa_{ij}=\upsilon_{ij}r_{ij}^x,
\qquad
\nabla_{\ln y}\ln\kappa_{ij}=\upsilon_{ij}r_{ij}^y.
$$

 For a unit change in the underlying cost of mode $m$, instead set $dz=0$. Let $\mathbf f_m$ denote the $m$-th unit vector in mode space. [Equation](#eq:modal-congestion-inverse-action) gives

<a id="eq:direct-congestion-wedge"></a>

$$
\zeta_{ijm}
=\boldsymbol s_{ij}^\top\mathcal H_{ij}^{-1}\mathbf f_m
=\frac{s_{ij,m}}
{(1+\eta\gamma_m)[1-(1-\sigma+\eta)g_{ij}]},
\qquad
\chi_{ijm}:=\frac{\zeta_{ijm}}{s_{ij,m}}.
$$

 Thus $\upsilon_{ij}$ records how changes elsewhere in the economy feed back into the realized edge cost through traffic, while $\chi_{ijm}$ records how much of a change in the underlying mode cost reaches the aggregate edge cost. When only one mode carries positive traffic on the edge, these expressions reduce to

$$
\upsilon_{ij}=\frac{\gamma_m}{1+(\sigma-1)\gamma_m},
\qquad
\chi_{ijm}=\frac{1}{1+(\sigma-1)\gamma_m}.
$$

 With no congestion, $\upsilon_{ij}=0$ and $\chi_{ijm}=1$.

<a id="sec:multiplier-jacobian"></a>

#### The complete Jacobian

Finally, [equations](#eq:nonedge-traffic-gradients) and [Equation](#eq:endogenous-congestion-gradients) give every entry of the congestion block. For $h=1,\ldots,N$,

$$
\begin{aligned}
J^{\mathrm{cong}}_{G1_i,\ln x_h}
&=(1-\sigma)\sum_{r\in\mathcal N^+(i)}
\mu_{ir}\upsilon_{ir}(r_{ir}^x)_h,\\
J^{\mathrm{cong}}_{G1_i,\ln y_h}
&=(1-\sigma)\sum_{r\in\mathcal N^+(i)}
\mu_{ir}\upsilon_{ir}(r_{ir}^y)_h,\\
J^{\mathrm{cong}}_{G2_i,\ln x_h}
&=(1-\sigma)\sum_{r\in\mathcal N^-(i)}
\lambda^{in}_{ri}\upsilon_{ri}(r_{ri}^x)_h,\\
J^{\mathrm{cong}}_{G2_i,\ln y_h}
&=(1-\sigma)\sum_{r\in\mathcal N^-(i)}
\lambda^{in}_{ri}\upsilon_{ri}(r_{ri}^y)_h,
\qquad i\le N-1,\\
J^{\mathrm{cong}}_{G2_N,\ln x_h}
&=J^{\mathrm{cong}}_{G2_N,\ln y_h}=0.
\end{aligned}
$$

 Thus

$$
J:=D_zG=J^0+J^{\mathcal A}+J^{\mathrm{cong}}.
$$

 The proposition assumes that this matrix is nonsingular at the baseline. The gradients $r_{ij}^x$ and $r_{ij}^y$ separate endpoint changes from the nominal-income normalization $\pi$ and the fixed-labor welfare closure $\omega$. The full Jacobian therefore has three economically distinct parts: recursive market access, the aggregate labor closure, and transport-cost feedback.

This decomposition makes the operator behind the multipliers explicit:

<a id="eq:complete-multiplier-operator"></a>

$$
\mathcal L
=-\left(J^0+uv^\top+J^{\mathrm{cong}}\right)^{-\top}\psi,
\qquad
\mathcal M_i^{in}=\frac{\mathcal L_i^{in}}{\mathcal T_i},
\qquad
\mathcal M_i^{out}=\frac{\mathcal L_i^{out}}{\mathcal T_i}.
$$

 The inverse in [equation](#eq:complete-multiplier-operator) combines all three equilibrium mechanisms rather than adding their effects separately. The recursive block uses continuation and absorption shares, the labor block uses baseline labor and income shares, and the transport-cost block uses modal shares and congestion elasticities. These objects are obtained from the observed baseline flows and location accounts described in the paper. Section B.2 shows how balanced traffic identifies the exposure denominators and how the transposed system propagates the corresponding welfare values to the two endpoints of an improved edge.

The edge-by-edge expressions above cover edge-local congestion. When a shared terminal affects several incident edge--mode costs, the same derivative is written as a joint block system. A congestion aggregation operator maps edge--mode traffic into terminal states, and a second operator maps those states back into incident costs. Eliminating the terminal states by a Schur complement adds the corresponding transport feedback to $J$. Online Appendix [7.4](#sec:computational-congestion-closure) states this block system and its policy forcing.

<a id="sec:multiplier-welfare"></a>

### The welfare multiplier

The Jacobian describes how the equilibrium state responds to a disturbance. The welfare multiplier is obtained by applying the welfare row to that response. The next three subsections connect this inverse-Jacobian object to observed traffic, derive its recursive adjoint representation, and interpret the two endpoint terms in Proposition 2.

<a id="sec:multiplier-balanced-flow"></a>

#### Exposure chains and balanced flows

<a id="lem:traffic-market-access"></a>
**Lemma 2** (Balanced flow and exposure chains). *At every interior equilibrium, the outward and inward local shares coincide:

$$
s_i^x=s_i^y=:a_i
=W^{1-\sigma}(A_iu_i)^{\sigma-1}.
$$

 Recall the market-access definitions

$$
Y^W:=\sum_i w_iL_i,\qquad
\mathcal P_i:=W^{\sigma-1}w_i^{1-\sigma}u_i^{1-\sigma},
\qquad
\mathcal Q_i:=A_i^{1-\sigma}w_i^\sigma L_i,
\qquad
\mathcal T_i:=\frac{1}{Y^W}\mathcal P_i\mathcal Q_i,
$$

 where $\mathcal T_i$ is market-access exposure in world-income units. Local absorption and exposure satisfy

$$
a_i\mathcal T_i=\frac{w_iL_i}{Y^W}.
$$

 For every active directed edge $i\to j$, the recursive shares and traffic satisfy

$$
\mu_{ij}=\kappa_{ij}^{1-\sigma}\frac{\mathcal Q_j}{\mathcal Q_i},
\qquad
\lambda^{in}_{ij}=\kappa_{ij}^{1-\sigma}\frac{\mathcal P_i}{\mathcal P_j},
\qquad
\Xi_{ij}=\frac{1}{Y^W}\kappa_{ij}^{1-\sigma}\mathcal P_i\mathcal Q_j
=\mathcal T_i\mu_{ij}
=\mathcal T_j\lambda^{in}_{ij}.
$$

 If $O_i:=\sum_j\Xi_{ij}$ and $I_i:=\sum_j\Xi_{ji}$, then balanced network flow implies

$$
O_i=I_i=(1-a_i)\mathcal T_i.
$$

*

*Let $D_a:=\operatorname{diag}(a)$ and define the forward and reverse exposure chains

$$
K^+:=D_a+\mu,
\qquad
K^-:=D_a+(\Lambda^{in})^\top.
$$

 Both matrices are row stochastic:

$$
K^+\mathbf 1=K^-\mathbf 1=\mathbf 1.
$$

 Moreover,

$$
\mathcal T_iK^+_{ij}=\mathcal T_jK^-_{ji},
\qquad
\mathcal T^\top K^+=\mathcal T^\top,
\qquad
\mathcal T^\top K^-=\mathcal T^\top.
$$

 Thus $K^-$ is the $\mathcal T$-time reversal of $K^+$.*

*Proof.* The local term in the outward recursion [Equation](#eq:recursive_eqm1a), divided by $\mathcal Q_i$, is

$$
s_i^x
=\frac{W^{1-\sigma}u_i^{\sigma-1}w_i^\sigma L_i}
{A_i^{1-\sigma}w_i^\sigma L_i}
=W^{1-\sigma}(A_iu_i)^{\sigma-1}.
$$

 The corresponding local term in the inward recursion [Equation](#eq:recursive_eqm2a), divided by $\mathcal P_i$, gives the same expression:

$$
s_i^y
=\frac{A_i^{\sigma-1}w_i^{1-\sigma}}
{W^{\sigma-1}w_i^{1-\sigma}u_i^{1-\sigma}}
=W^{1-\sigma}(A_iu_i)^{\sigma-1}.
$$

 This proves $s_i^x=s_i^y=a_i$. The definitions of market access also give

$$
\mathcal T_i
=W^{\sigma-1}(A_iu_i)^{1-\sigma}\frac{w_iL_i}{Y^W}.
$$

 Multiplying by $a_i$ therefore yields $a_i\mathcal T_i=w_iL_i/Y^W$.

Next, dividing the edge term in the outward recursion by $\mathcal Q_i$ gives $\mu_{ij}=\kappa_{ij}^{1-\sigma}\mathcal Q_j/\mathcal Q_i$. Dividing the edge term in the inward recursion for node $j$ by $\mathcal P_j$ gives $\lambda^{in}_{ij}=\kappa_{ij}^{1-\sigma}\mathcal P_i/\mathcal P_j$.

Using the traffic identity [Equation](#eq:traffic_2),

$$
\Xi_{ij}
=\frac{1}{Y^W}\kappa_{ij}^{1-\sigma}\mathcal P_i\mathcal Q_j
=\mathcal P_i\mathcal Q_i
\frac{1}{Y^W}\left(\kappa_{ij}^{1-\sigma}\frac{\mathcal Q_j}{\mathcal Q_i}\right)
=\mathcal T_i\mu_{ij}.
$$

 The same edge flow can also be written from the destination side:

$$
\Xi_{ij}
=\frac{1}{Y^W}\mathcal P_j\mathcal Q_j
\left(\kappa_{ij}^{1-\sigma}\frac{\mathcal P_i}{\mathcal P_j}\right)
=\mathcal T_j\lambda^{in}_{ij}.
$$

 Summing over outgoing and incoming edges and using $a_i+\sum_j\mu_{ij}=1$ and $a_i+\sum_j\lambda^{in}_{ji}=1$ gives

$$
O_i=\sum_j\Xi_{ij}
=\mathcal T_i\sum_j\mu_{ij}
=(1-a_i)\mathcal T_i,
$$

 and

$$
I_i=\sum_j\Xi_{ji}
=\mathcal T_i\sum_j\lambda^{in}_{ji}
=(1-a_i)\mathcal T_i.
$$

 Hence $O_i=I_i$.

The adding-up equations for $\mu$ and $\Lambda^{in}$ imply that $K^+$ and $K^-$ are row stochastic. For $i\neq j$, traffic consistency gives

$$
\mathcal T_iK^+_{ij}
=\mathcal T_i\mu_{ij}
=\Xi_{ij}
=\mathcal T_j\lambda^{in}_{ij}
=\mathcal T_jK^-_{ji}.
$$

 The diagonal terms satisfy the same identity because both chains include the same local mass $a_i$. Summing this time-reversal identity over $i$ and using $K^-\mathbf 1=\mathbf 1$ gives $\mathcal T^\top K^+=\mathcal T^\top$. Reversing the roles of the two chains gives $\mathcal T^\top K^-=\mathcal T^\top$. ◻

Conditional on movement over a network edge, the transition matrix is

$$
\mathsf P_{ij}:=\frac{\Xi_{ij}}{O_i}
=\frac{\mu_{ij}}{1-a_i}.
$$

 It is row stochastic when $O_i>0$, and its stationary mass is proportional to $O_i$, since $\sum_iO_i\mathsf P_{ij}=\sum_i\Xi_{ij}=I_j=O_j$. The continuation operators are substochastic because some market-access exposure is absorbed locally. Adding the common local absorption mass turns them into stochastic exposure chains, with $\mathcal T$ as their stationary measure. The resolvent $(I-\mu)^{-1}$ therefore summarizes repeated continuation before local absorption.

<a id="sec:multiplier-dual"></a>

#### The adjoint market-access recursion

The inverse Jacobian in Proposition [2](#thm:welfare) has a useful economic interpretation. Restore the final inward-access equation that was replaced by the wage numeraire, and let $\widetilde J^{NC}$ denote the resulting $2N$-by-$2N$ no-congestion Jacobian. Local regularity of the normalized system guarantees a solution to the unreduced adjoint; Lemma [3](#lem:gauge-invariance) below characterizes its one-dimensional indeterminacy. Define the adjoint weights by

$$
(\widetilde J^{NC})^\top
\begin{bmatrix}
\mathcal L^{in}\\
\mathcal L^{out}
\end{bmatrix}
=-\psi,
\qquad
\psi^\top
:=\left[(1-\sigma)\omega^\top,-\sigma\omega^\top\right],
$$

 and set

$$
\Gamma:=\sum_i a_i
\left(\mathcal L_i^{in}+\mathcal L_i^{out}\right).
$$

 The nodewise adjoint equations are

<a id="eq:dual-in"></a>
<a id="eq:dual-out"></a>

$$
\begin{aligned}
(A-a_j)\mathcal L_j^{in}
={}&A\sum_{i\in\mathcal N^-(j)}
\mu_{ij}\mathcal L_i^{in}
+C\left(
\mathcal L_j^{out}
-\sum_{r\in\mathcal N^+(j)}
\lambda^{in}_{jr}\mathcal L_r^{out}
\right)
\nonumber\\
&\quad+(\sigma-1)\omega_j
\left(\frac{\Gamma}{e}-1\right),\\
(E-a_j)\mathcal L_j^{out}
={}&B\left(
\mathcal L_j^{in}
-\sum_{i\in\mathcal N^-(j)}
\mu_{ij}\mathcal L_i^{in}
\right)
+E\sum_{r\in\mathcal N^+(j)}
\lambda^{in}_{jr}\mathcal L_r^{out}
\nonumber\\
&\quad+\sigma\omega_j
\left(\frac{\Gamma}{e}-1\right).
\end{aligned}
$$

 These equations are the transpose of the market-access system. The equilibrium recursions propagate access forward through $\mu$ and backward through $\Lambda^{in}$; the adjoint propagates the welfare value of those access changes in the reverse direction.

Congestion adds a transport block but does not change this interpretation. Write the unreduced augmented derivative system as

$$
\mathcal J=
\begin{bmatrix}
\widetilde J^{NC}&\mathcal C\\
-\mathcal D&H
\end{bmatrix},
$$

 where $H$ is the modal-congestion system, $\mathcal D$ maps equilibrium changes into traffic and realized costs, and $\mathcal C$ maps those costs back into the spatial residuals. The complete adjoint satisfies

$$
(\widetilde J^{NC})^\top\mathcal L-\mathcal D^\top\nu=-\psi,
\qquad
\mathcal C^\top\mathcal L+H^\top\nu=0.
$$

 Eliminating $\nu$ yields the transpose of the reduced congestion Jacobian used above. The same block argument covers shared terminal costs in Online Appendix [7](#sec:computational_appendix).

<a id="lem:gauge-invariance"></a>
**Lemma 3** (Gauge invariance of the endpoint multipliers). *Let $\widetilde J$ be the unreduced edge-local Jacobian, including congestion when present. Then

$$
\begin{bmatrix}
\mathcal T^\top&-\mathcal T^\top
\end{bmatrix}
\widetilde J=0.
$$

 Consequently, if $(\mathcal L^{in},\mathcal L^{out})$ solves the unreduced adjoint, then so does

$$
\mathcal L^{in}+c\mathcal T,
\qquad
\mathcal L^{out}-c\mathcal T
$$

 for any scalar $c$. The normalized endpoint sum

$$
\mathcal M_k^{in}+\mathcal M_l^{out}
:=\frac{\mathcal L_k^{in}}{\mathcal T_k}
+\frac{\mathcal L_l^{out}}{\mathcal T_l}
$$

 is invariant to this choice.*

*Proof.* For the recursive block, Lemma [2](#lem:traffic-market-access) gives $\mathcal T_i\mu_{ij}
=\mathcal T_j\lambda^{in}_{ij}
=\Xi_{ij}$. Premultiplying by $[\mathcal T^\top,-\mathcal T^\top]$ therefore cancels the forward and reverse contribution of every directed edge. The remaining recursive coefficients cancel because $s_i^x=s_i^y=a_i$, $A+C=1$, and $B+E=1$. The fixed-labor block cancels because its two residual families have the common row weight $a_i$. Finally, each edge-local congestion derivative enters the outward and inward residuals with the same traffic-consistent edge weight, so its two contributions cancel edge by edge. This proves the left-null identity.

Transposing that identity shows that $(\mathcal T^\top,-\mathcal T^\top)^\top$ lies in the null space of $\widetilde J^\top$. Adding any multiple of this vector therefore leaves the adjoint equation unchanged. Dividing the two components by $\mathcal T_i$ shifts $\mathcal M_i^{in}$ by $c$ and $\mathcal M_i^{out}$ by $-c$, so their endpoint sum is unchanged. Replacing the final inward-access equation with $w_N=1$ selects one representative of this equivalence class. ◻

<a id="sec:multiplier-endpoint-interpretation"></a>

#### Interpretation and measurement of the endpoint multipliers

The adjoint becomes economically meaningful when it is paired with the policy forcing derived in Appendix [5.3](#sec:proofprop2) and used in the adjoint proof in Appendix [5.4](#sec:prop2-adjoint-proof) of the paper. A reduction in the underlying cost of mode $m$ on edge $k\to l$ enters the outward-access equation at $k$ and the inward-access equation at $l$. Using the residual selectors defined there, the forcing vector is

$$
b^p_{klm}
=(1-\sigma)\chi_{klm}\Xi_{kl,m}
\left(
\frac{d_k^{(1)}}{\mathcal T_k}
+\frac{d_l^{(2)}}{\mathcal T_l}
\right).
$$

 The factor $\Xi_{kl,m}$ is the baseline economic activity exposed to the improvement. The coefficient $\chi_{klm}$ records how much of the underlying cost reduction reaches the aggregate edge cost once traffic responds, and $\rho$ gives the common mapping from the transformed equilibrium state to welfare. The remaining link-specific term is the sum of the two endpoint values:

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=\rho\chi_{klm}\Xi_{kl,m}
\left(\mathcal M_k^{in}+\mathcal M_l^{out}\right).
$$

 The origin multiplier values a marginal relaxation of the outward-access equation at $k$; the destination multiplier values the corresponding relaxation of inward access at $l$. Because the adjoint solves the transpose of the complete Jacobian in Section B.1, each value incorporates recursive market access, the fixed-labor closure, and congestion feedback throughout the network. The individual inward and outward values depend on the normalization, but Lemma [3](#lem:gauge-invariance) shows that their endpoint sum does not.

The same adjoint can be obtained from the local equilibrium Lagrangian

$$
\mathscr L^{eq}(z,\bar\vartheta,\ell)
:=\ln W(z)-\ell^\top G(z,\bar\vartheta).
$$

 This is not a planner's Lagrangian. It is a local differentiation device: choosing $J^\top\ell=q$ eliminates the derivative of the endogenous state from the welfare derivative. Online Appendix [7.5](#sec:computational-adjoint-method) applies this argument to the application's domestic equilibrium system.

The balanced-flow and adjoint construction is related to the dual representation of network flows in Pablo D. Fajgelbaum and Schaal (2020a). Their multipliers support allocations chosen by a planner subject to flow-conservation constraints. Here the adjoint instead assigns welfare values to marginal relaxations of the decentralized equilibrium equations. At the efficient benchmark underlying Proposition 1, the two interpretations coincide: the equilibrium adjoint is the dual representation of the stationary-envelope calculation in Appendix [5.2](#sec:proofprop1) of the paper.

Residual scaling and gauge choice are distinct. Rescaling one residual changes its adjoint coefficient and its forcing coefficient inversely. A gauge change instead reallocates the inward and outward endpoint values. In both cases, the policy derivative and the normalized endpoint sum remain unchanged.

<a id="sec:flow_expression"></a>

#### Equivalent flow-based expression.

Proposition [2](#thm:welfare) is written in terms of market-access exposure, whereas empirical applications may begin with observed incoming and outgoing edge-flow totals. The next corollary translates the same derivative into those flow-based objects.

<a id="cor:retention"></a>
**Corollary 2**. *Let $O_i=\sum_j\Xi_{ij}$ and $I_i=\sum_j\Xi_{ji}$, and define

$$
r_i^{out}:=\frac{O_i}{\mathcal T_i},
\qquad
r_i^{in}:=\frac{I_i}{\mathcal T_i}.
$$

 These ratios equal $1-s_i^x$ and $1-s_i^y$, where $s_i^x$ and $s_i^y$ are the local absorption shares in the recursive equilibrium. If $\widehat{\mathcal M}_i^{in}:=\mathcal L_i^{in}/O_i$ and $\widehat{\mathcal M}_i^{out}:=\mathcal L_i^{out}/I_i$, then Proposition [2](#thm:welfare) is equivalently

$$
-\frac{d\ln W}{d\bar\vartheta_{klm}}
=\chi_{klm}\rho\,\Xi_{kl,m}
\left(r_k^{out}\widehat{\mathcal M}_k^{in}
+r_l^{in}\widehat{\mathcal M}_l^{out}\right).
$$

*

*Proof.* Substitute $O_i=r_i^{out}\mathcal T_i$ and $I_i=r_i^{in}\mathcal T_i$ into the market-access-normalized multipliers in Proposition [2](#thm:welfare). ◻

<a id="sec:multiplier-additional-results"></a>

### Additional analytical results

The preceding sections construct and interpret the multiplier used in Proposition 2. We now specialize that structure to obtain three supporting results. The first derives its collapse in the efficient benchmark. The second decomposes the multiplier when congestion is absent. The third gives a technical inverse construction for the singular recursive block at the efficient benchmark.

<a id="sec:multiplier-efficient-benchmark"></a>

#### Efficient benchmark and multiplier collapse

The balanced-flow result gives a short economic route to the efficient benchmark. When $\alpha=\beta=0$, the forward exposure chain satisfies

$$
B_x=K^+-I,
\qquad
\mathcal T^\top B_x=0.
$$

 Thus market-access exposure is the stationary left measure of the same recursive system that governs the welfare adjoint. The next lemma verifies the corresponding adjoint identity directly and shows why the endpoint multiplier sum equals one.

<a id="lem:eff-weighting"></a>
**Lemma 4** (Efficient-benchmark market-access identity). *Suppose $\alpha=\beta=0$ and the mode-congestion elasticities are zero. Let $J^{eff}$ denote the corresponding fixed-$\bar L$ Jacobian. Set

$$
a_i:=s_i^x=s_i^y=\phi_i\mathcal A,\qquad
B_x:=\mathrm{diag}(a)-I+\mu,
$$

 where $a=(a_1,\ldots,a_N)^\top$ is the vector of local absorption shares. Define the pre-absorption market-access exposure stock

$$
\Theta_i:=\frac{x_iy_i}{a_i\sum_r x_ry_r}.
$$

 This is the efficient-benchmark specialization of the market-access exposure stock in Lemma [2](#lem:traffic-market-access), under the maintained world-income normalization. Then

$$
\sum_i a_i\Theta_i=1,\qquad
\Theta^\top B_x=0,
$$

 and edge traffic is consistently represented, as in Lemma [2](#lem:traffic-market-access), by

$$
\Xi_{ij}=\Theta_i\mu_{ij}=\Theta_j\lambda^{in}_{ij}.
$$

 Moreover, with

$$
\psi^\top:=\left[(1-\sigma)\omega^\top,-\sigma\omega^\top\right],
$$

 the full adjoint identity is

$$
[-\Theta^\top,0^\top]J^{eff}=\psi^\top,
\qquad
\psi^\top(J^{eff})^{-1}=[-\Theta^\top,0^\top].
$$

 Under the normalization $\mathcal T_i=\Theta_i$, the efficient-benchmark multipliers therefore satisfy

$$
\mathcal M_k^{in}+\mathcal M_l^{out}=1
$$

 for every edge $(k,l)$ with positive traffic.*

*Proof.* In the efficient benchmark, $A=E=1$ and $B=C=0$. The residual equations imply $S_i^{(1)}=x_i$ and $S_i^{(2)}=y_i$, and the local shares satisfy $s_i^x=s_i^y=a_i$. Hence

$$
\sum_j\mu_{ij}=1-a_i,\qquad
\sum_i\lambda^{in}_{ij}=1-a_j.
$$

 The residual shares are substochastic because they exclude the local absorption mass $a_i$. Equivalently, $1-a_i$ is the share of market-access exposure that continues over transportation links rather than being absorbed locally.

The edge-flow identity is the efficient specialization of Lemma [2](#lem:traffic-market-access). Directly, using the definitions of $\mu_{ij}$, $\lambda^{in}_{ij}$, and $\phi_i=(\bar A_i\bar u_i)^{\sigma-1}$,

$$
\Theta_i\mu_{ij}
=\frac{\kappa_{ij}^{1-\sigma}x_jy_i
\bar A_j^{1-\sigma}\bar u_i^{1-\sigma}}
{\mathcal A\sum_r x_ry_r}
=\Theta_j\lambda^{in}_{ij}.
$$

 This common value is the edge-flow object $\Xi_{ij}$. Summing over outgoing edges gives

$$
\sum_j\Xi_{ij}=(1-a_i)\Theta_i.
$$

 Thus, if $O_i:=\sum_j\Xi_{ij}$ denotes outgoing edge traffic, then

$$
\Xi_{ij}=\frac{\mu_{ij}}{1-a_i}O_i,
$$

 not $\mu_{ij}O_i$. The correct exposure stock in the unnormalized residual shares is $\Theta_i$.

The left-null identity follows from the same flow balance:

$$
(\Theta^\top B_x)_j
=-(1-a_j)\Theta_j+\sum_i\Theta_i\mu_{ij}
=-(1-a_j)\Theta_j+\Theta_j\sum_i\lambda^{in}_{ij}=0.
$$

 Also,

$$
\sum_i a_i\Theta_i
=\sum_i\frac{x_iy_i}{\sum_r x_ry_r}=1.
$$

Now compute the adjoint action of the full fixed-$\bar L$ Jacobian. In the efficient benchmark, the $G1$ block of $J^{eff}$ is

$$
\left[B_x+(\sigma-1)a\omega^\top,\quad \sigma a\omega^\top\right],
$$

 where $a=(a_1,\ldots,a_N)^\top$. Since the row $[-\Theta^\top,0^\top]$ places zero weight on all $G2$ rows,

$$
\begin{aligned}
[-\Theta^\top,0^\top]J^{eff}_{\cdot,x}
&=-\Theta^\top B_x-(\sigma-1)(\Theta^\top a)\omega^\top
=(1-\sigma)\omega^\top,\\
[-\Theta^\top,0^\top]J^{eff}_{\cdot,y}
&=-\sigma(\Theta^\top a)\omega^\top
=-\sigma\omega^\top.
\end{aligned}
$$

 Therefore

$$
[-\Theta^\top,0^\top]J^{eff}
=\left[(1-\sigma)\omega^\top,-\sigma\omega^\top\right]
=\psi^\top.
$$

 Because $J^{eff}$ is nonsingular, multiplying on the right by $(J^{eff})^{-1}$ gives

$$
\psi^\top(J^{eff})^{-1}=[-\Theta^\top,0^\top].
$$

The multiplier conclusion follows immediately. The welfare-gain row multipliers from Proposition [2](#thm:welfare) are

$$
\mathcal L_k^{in}=-\psi^\top(J^{eff})^{-1}e_k^{(1)}=\Theta_k,
\qquad
\mathcal L_l^{out}=0.
$$

 With $\mathcal T_i=\Theta_i$,

$$
\mathcal M_k^{in}=1,\qquad \mathcal M_l^{out}=0,
$$

 and hence $\mathcal M_k^{in}+\mathcal M_l^{out}=1$. The split $1+0$ depends on the $w_N=1$ normalization and the chosen residual coordinates; the invariant statement is the sum. ◻

<a id="sec:multiplier-externalities"></a>

#### Multiplier decomposition without congestion

The following result decomposes the welfare multiplier, rather than the empirical difference between the traditional and extended statistics. With congestion absent, it separates recursive market-access propagation from the correction imposed by fixed aggregate labor. The quantitative decomposition in [Figure](#fig:rsue_decomposition) instead compares complete welfare derivatives across model closures and is developed in Online Appendix C.

<a id="lem:spillover-woodbury"></a>
**Lemma 5** (No-congestion multiplier decomposition). *Suppose the mode-congestion elasticities are zero, while $\alpha$ and $\beta$ may be nonzero. Let

$$
J^s:=J^0,\qquad \mathcal R_J:=(J^s)^{-1},
$$

 where $J^0$ is the sparse no-fixed-labor Jacobian in [Equation](#eq:DGcompact-new). Assume $J^s$ is nonsingular. This representation is not available at the efficient benchmark, where the sparse block is singular and Lemma [6](#lem:anchored-woodbury) supplies the appropriate anchored argument. It should likewise not be used when $J^s$ is numerically close to singular. Let $u$ and $v$ be the rank-one factors in [equation](#eq:fixed-labor-rank-one). If

$$
d_{\mathcal A}:=1+v^\top\mathcal R_Ju\neq0,
$$

 then

$$
J^{-1}
=\mathcal R_J-\frac{\mathcal R_Juv^\top\mathcal R_J}{d_{\mathcal A}}.
$$

 Thus $\mathcal R_J=(J^s)^{-1}$ captures recursive market-access propagation holding the fixed-labor closure apart, while the second term is the aggregate labor-closure correction. For any residual-row selector $e_c$, the welfare-gain multiplier is

$$
\mathcal L_c
=-\psi^\top\mathcal R_J e_c
+\frac{(\psi^\top\mathcal R_Ju)(v^\top\mathcal R_J e_c)}
{d_{\mathcal A}}.
$$

 In particular,

$$
\mathcal L_k^{in}
=-\psi^\top\mathcal R_J e_k^{(1)}
+\frac{(\psi^\top\mathcal R_Ju)(v^\top\mathcal R_J e_k^{(1)})}
{d_{\mathcal A}},
$$

 and, for $l\le N-1$,

$$
\mathcal L_l^{out}
=-\psi^\top\mathcal R_J e_l^{(2)}
+\frac{(\psi^\top\mathcal R_Ju)(v^\top\mathcal R_J e_l^{(2)})}
{d_{\mathcal A}},
\qquad
\mathcal L_N^{out}=0.
$$

 Using the market-access exposure stocks from Lemma [2](#lem:traffic-market-access), the no-congestion welfare effect of a realized edge--mode shock is

$$
-\frac{d\ln W}{d\vartheta_{klm}}
=\rho\,\Xi_{kl,m}\left(\mathcal M_{k,W}^{in}+\mathcal M_{l,W}^{out}\right)
=\rho s_{kl,m}\Xi_{kl}\left(\mathcal M_{k,W}^{in}
+\mathcal M_{l,W}^{out}\right),
$$

 where

$$
\mathcal M_{k,W}^{in}:=
\frac{\mathcal L_k^{in}}{\mathcal T_k},
\qquad
\mathcal M_{l,W}^{out}:=
\frac{\mathcal L_l^{out}}{\mathcal T_l}.
$$

*

*Proof.* When congestion elasticities are zero, $J^{\mathrm{cong}}=0$, so the Jacobian constructed above is

$$
J=J^0+J^{\mathcal A}=J^s+uv^\top.
$$

 [Equation](#eq:fixed-labor-rank-one) establishes the second equality. Because $\mathcal R_J=(J^s)^{-1}$, the Sherman--Morrison identity gives

$$
(J^s+uv^\top)^{-1}
=\mathcal R_J-\frac{\mathcal R_Juv^\top\mathcal R_J}
{1+v^\top\mathcal R_Ju},
$$

 provided $d_{\mathcal A}=1+v^\top\mathcal R_Ju$ is nonzero. Left-multiplying $J^{-1}e_c$ by $-\psi^\top$ gives

$$
\mathcal L_c
=-\psi^\top\mathcal R_J e_c
+\frac{(\psi^\top\mathcal R_Ju)(v^\top\mathcal R_J e_c)}
{d_{\mathcal A}}.
$$

 Applying this expression to the origin and destination residual selectors gives the two formulas in the statement. The wage normalization sets $\mathcal L_N^{out}=0$.

Finally, substituting these multipliers into the scalar decomposition for a realized modal-friction shock gives

$$
-\frac{d\ln W}{d\vartheta_{klm}}
=\rho s_{kl,m}
\left(\mu_{kl}\mathcal L_k^{in}
+\lambda^{in}_{kl}\mathcal L_l^{out}\right).
$$

 Using Lemma [2](#lem:traffic-market-access),

$$
\begin{aligned}
-\frac{d\ln W}{d\vartheta_{klm}}
&=\rho s_{kl,m}\Xi_{kl}
\left(\frac{\mathcal L_k^{in}}{\mathcal T_k}
+\frac{\mathcal L_l^{out}}{\mathcal T_l}\right)\\
&=\rho\,\Xi_{kl,m}
\left(\mathcal M_{k,W}^{in}+\mathcal M_{l,W}^{out}\right).
\end{aligned}
$$

 This lemma decomposes the inverse Jacobian; it does not assert that the spillover multipliers collapse to one. ◻

<a id="sec:multiplier-anchored-woodbury"></a>

#### Technical construction of the efficient inverse

The efficient-collapse result above does not require an explicit inverse. For completeness, the next lemma constructs that inverse without attempting to invert the singular recursive block $B_x=K^+-I$. It is a technical verification of the adjoint calculation, not an additional decomposition of the welfare effect.

<a id="lem:anchored-woodbury"></a>
**Lemma 6** (Anchored efficient-benchmark Woodbury step). *In the efficient benchmark of Lemma [4](#lem:eff-weighting), suppose the forward exposure chain $K^+=D_a+\mu$ is irreducible. Since $B_x=K^+-I$, it follows that $\ker B_x=\mathrm{span}\{\mathbf 1\}$. Suppose also that the normalized $y$-block $B_y$ is nonsingular. Define

$$
\bar B_x:=B_x+(\sigma-1)a\omega^\top .
$$

 Then $\bar B_x$ is nonsingular. Moreover the efficient Jacobian can be inverted by first absorbing this rank-one anchor and then applying Sherman--Morrison to the remaining $y$-rank update.*

*Proof.* If $\bar B_xz=0$, premultiply by $\Theta^\top$. Lemma [4](#lem:eff-weighting) gives $\Theta^\top B_x=0$ and $\Theta^\top a=1$, so

$$
0=\Theta^\top \bar B_xz
=(\sigma-1)\omega^\top z.
$$

 Hence $\omega^\top z=0$. But then $\bar B_xz=0$ implies $B_xz=0$. By irreducibility, $z=c\mathbf 1$, and $0=\omega^\top z=c\omega^\top\mathbf 1=c$. Thus $z=0$, so $\bar B_x$ is nonsingular.

Write the fixed-$W$ efficient Jacobian as

$$
DG_0=\begin{bmatrix}B_x&0\\0&B_y\end{bmatrix},
$$

 where the $B_y$ block includes the $w_N=1$ normalization row. Let

$$
U_x=
\begin{bmatrix}
(\sigma-1)a\\
(\sigma-1)a_{1:N-1}\\
0
\end{bmatrix},
\qquad
V_x^\top=\begin{bmatrix}\omega^\top&0\end{bmatrix},
$$

 and

$$
U_y=
\begin{bmatrix}
\sigma a\\
\sigma a_{1:N-1}\\
0
\end{bmatrix},
\qquad
V_y^\top=\begin{bmatrix}0&\omega^\top\end{bmatrix}.
$$

 Do not invert $DG_0$, because $B_x$ is singular. Instead define

$$
H:=DG_0+U_xV_x^\top
=
\begin{bmatrix}
\bar B_x&0\\
R_y&B_y
\end{bmatrix},
\qquad
R_y:=(\sigma-1)
\begin{bmatrix}
a_{1:N-1}\\
0
\end{bmatrix}
\omega^\top .
$$

 Since $\bar B_x$ and $B_y$ are nonsingular,

$$
H^{-1}=
\begin{bmatrix}
\bar B_x^{-1}&0\\
-B_y^{-1}R_y\bar B_x^{-1}&B_y^{-1}
\end{bmatrix}.
$$

 The full efficient Jacobian is $J^{eff}=H+U_yV_y^\top$. Therefore

$$
(J^{eff})^{-1}
=H^{-1}
-\frac{H^{-1}U_yV_y^\top H^{-1}}
{1+V_y^\top H^{-1}U_y},
$$

 provided the scalar denominator is nonzero. Finally,

$$
\Theta^\top\bar B_x=(\sigma-1)\omega^\top,
\qquad
(1-\sigma)\omega^\top\bar B_x^{-1}=-\Theta^\top,
$$

 which is the anchored $x$-side resolvent identity. The corresponding global inverse action is the adjoint identity $\psi^\top(J^{eff})^{-1}=[-\Theta^\top,0^\top]$ from Lemma [4](#lem:eff-weighting); no separate unrestricted $B_y^{-1}$ weighting identity is needed. The sequential split into $U_xV_x^\top$ and $U_yV_y^\top$ is a proof device that avoids inverting the singular matrix $B_x$. The total fixed-labor update remains the single rank-one matrix $J^{\mathcal A}=uv^\top$ in [equation](#eq:fixed-labor-rank-one). ◻

<a id="sec:computational_appendix"></a>

## Online Appendix C: Computational Implementation

This appendix explains how the companion Julia package, `TransportNetworkWelfare.jl`, computes the paper's results. The package separates the general model routines from the code that imports the data for this application. A TOML configuration file records the parameters, units, and data transformations for each run. The accompanying practitioner guide documents the input schema and configuration, works through examples, and explains how to adapt the calculation to another network (Allen, Fuchs, et al. 2026a, 2026b).

### Data, calibration, and policy definition

The domestic road, rail, and water matrices are symmetrized, normalized to common totals, and assigned the modal weights used in Fuchs and Wong (2026). Rail links without the required terminal support are excluded. For international traffic, the source measure is monthly containerized vessel value (`CNT_VAL_MO`). We normalize imports and exports separately and adjust them to common port and foreign-region totals. This preserves direction and geography without treating the raw import and export totals as equal.

The RSUE adapter treats the six foreign regions as external market nodes. Foreign-to-U.S. water flows determine fixed import-supply schedules, and U.S.-to-foreign water flows determine fixed export-demand schedules. The foreign nodes remain in the route and traffic system, but they have no labor allocation equations and receive no weight in welfare. The spatial state and welfare derivative therefore cover the 228 domestic locations, while the transport system continues to cover all 234 nodes.

All traffic is expressed relative to total domestic income. The paper configuration sets $(\sigma,\alpha,\beta,\eta)=(9,0.10,-0.30,1.099)$, uses edge-local road congestion with $\lambda_{\mathrm{road}}=0.092$, and defines a policy as a simultaneous one-percent reduction in the underlying road cost in both directions of one physical link. The optional rail-terminal extension uses $\lambda_{\mathrm{terminal}}=0.096$. The configuration declares every transformation, and the run manifest records the configuration and input hashes.

### Package structure and user interface

The data and parameter declarations above become inputs to a common package workflow. The package exposes the following sequence:

> project = load_project(config)
>
> validate(project)
>
> model = build_model(project)
>
> results = decompose_welfare(model)
>
> write_results(results, output; project=project)

The same sequence can be called from the command line. Table [1](#tab:computational-modules) records the division of responsibilities across the code base.

<a id="tab:computational-modules"></a>

**Table: Main components of the computational package**

| Component | Role |
| --- | --- |
| Configuration (`src/ProjectConfig.jl`, `src/Specifications.jl`) | Parse the configuration and construct typed modal, congestion, policy, and parameter specifications. |
| Data adapters (`src/DataIO.jl`, `src/RSUEAdapter.jl`) | Validate generic inputs or reproduce the declared transformations used in the U.S. application. |
| Core engine (`src/CompleteEngine.jl`) | Construct route and edge--mode operators, equilibrium closures, policy forcing vectors, welfare effects, and the analytical decomposition. |
| Mathematical kernels (`src/kernels/AdjointRSUE.jl`, `src/kernels/IFTDecomposition.jl`) | Implement the transformed spatial Jacobian, welfare row, route resolvent, and inverse-gap identities corresponding to Appendix A of the paper and Online Appendix B. |
| Sensitivity (`src/Sensitivity.jl`) | Rebuild the model along parameter paths and calculate mean physical-link effects and rank stability. |
| Outputs (`src/Output.jl`) | Write directed-arc and physical-link results, diagnostics, cryptographic hashes, and run manifests. |
| Paper builder (`replication/rsue/build_paper_artifacts.jl`) | Produce the result vintage used by the paper, including claims, TeX macros, map inputs, figures, and sensitivity results. |

The generic interface reads a node table and a directed edge--mode table. Each edge--mode observation retained in the calculation has a stable edge identifier, a physical-link identifier, origin and destination nodes, a mode, and a positive baseline flow. Opposite directions are separate observations. The configuration declares the modal index, congestion channels, structural elasticities, policy unit, input units, and all transformations. The paper-specific adapter additionally verifies the hashes of the restricted domestic inputs and the checked-in Census port overlay before constructing any model objects.

<a id="sec:computational-baseline-operators"></a>

### Construction of the baseline operators

Once the inputs pass validation, the computation follows the economic sequence in the derivative. An edge--mode cost shock first changes aggregate edge costs, routing determines how the shock changes network flows, and the spatial equilibrium maps those flow changes into welfare. The package represents these three steps with separate linear operators and constructs them in that order.

Let $E$ denote the number of directed edges carrying traffic and $P$ the number of edge--mode pairs with positive baseline flow. The code first constructs a lifting matrix $\mathsf L\in\{0,1\}^{P\times E}$, which assigns an edge-level cost change to the modes represented on that edge, and an aggregation matrix $S_{\mathrm{agg}}\in\mathbb R^{E\times P}$, which combines edge--mode responses using baseline modal shares. Under the choice logsum used in the paper, the direct modal derivative enters with power $-\eta$.

The routing block is reconstructed from the baseline continuation matrix $\boldsymbol\mu$. The code forms

<a id="eq:computational-resolvent"></a>

$$
\mathscr R_\mu=(I-\boldsymbol\mu)^{-1}
$$

 and uses this resolvent to recover bilateral origin--destination flows, market-access exposure stocks, and the incidence of each directed edge in bilateral trade. It then differentiates these objects twice: once allowing routes to adjust and once holding baseline origin--destination edge use fixed. Before proceeding, the implementation requires the route kernel to be contractive and checks that the reconstructed bilateral flows reproduce the declared domestic-income and foreign-market margins and the observed directed-edge traffic.

Let $\mathcal D$ denote the 228 domestic locations and $\mathcal F$ the six foreign market nodes. The route and traffic operators retain all $N=234$ nodes. The spatial block instead keeps only the wage and population responses for $i\in\mathcal D$. It is represented by the $2|\mathcal D|\times2|\mathcal D|$ no-congestion Jacobian $J^{\mathrm{sp}}_{\mathcal D}$, including the fixed-labor feedback derived in Online Appendix [6.1.2](#sec:multiplier-spatial-jacobian), and by the U.S.-resident welfare gradient $q_{\mathcal D}$. Foreign supply and demand enter the route system as fixed schedules, so their state derivatives are zero. A domestic node supplies the wage normalization. A matrix $B_{\mathcal D}$ maps changes in aggregate directed-edge costs into the retained residual equations. Route and modal differentiation produce two additional operators: $X_z$, which maps a change in the domestic spatial state into edge--mode traffic, and $X_h$, which maps congestion states into edge--mode traffic. When every location is endogenous, these objects reduce to the integrated-economy system in Appendix A of the paper and Online Appendix B.

<a id="sec:computational-congestion-closure"></a>

### Congestion closure and policy derivatives

The baseline operators describe how costs, traffic, and the spatial state interact. Here and below, $S$ indexes one of the transport closures $NC$, $NT$, $F$, $FM$, or $FR$, which are defined in Section C.7. The index records which congestion, modal-response, and route-response operators are active. To close the system when transport costs depend on traffic, let $\mathsf A^{\mathrm{cong}}_S$ aggregate edge--mode traffic into the congestion states active under closure $S$, and let $\Gamma_S$ map those states back into edge--mode costs. Edge congestion creates one state for each affected edge--mode pair. Endpoint-terminal congestion instead aggregates all affected traffic using a terminal and applies the resulting cost change to the incident edge--mode pairs. The paper's headline specification activates only edge-local road congestion. Endpoint-terminal congestion remains a reproducible package extension and is not shown in the paper's sensitivity figure.

Conditional on a spatial-state change $dz$, the congestion-state response $dh$ solves

<a id="eq:computational-transport-system"></a>

$$
H_S\,dh=\mathsf A^{\mathrm{cong}}_S X_{z,S}\,dz,
\qquad
H_S\equiv I-\mathsf A^{\mathrm{cong}}_S X_{h,S}.
$$

 Stacking the homogeneous terms in the differentiated spatial and congestion residuals gives the block system

<a id="eq:computational-block-system"></a>

$$
\begin{pmatrix}
J^{\mathrm{sp}}_{\mathcal D} & B_{\mathcal D} S_{\mathrm{agg}}\Gamma_S\\
-\mathsf A^{\mathrm{cong}}_S X_{z,S} & H_S
\end{pmatrix}
\begin{pmatrix}
dz\\ dh
\end{pmatrix}
=
\begin{pmatrix}
0\\ 0
\end{pmatrix}
$$

 The lower block implies $dh=H_S^{-1}\mathsf A^{\mathrm{cong}}_S X_{z,S}\,dz$. Substitution into the upper block yields the reduced spatial system; policy forcing enters on the right-hand side below. The induced contribution of transport adjustment to the spatial Jacobian is therefore

<a id="eq:computational-jacobian"></a>

$$
J^{\mathrm{tr}}_{\mathcal D,S}
=B_{\mathcal D} S_{\mathrm{agg}}\Gamma_S H_S^{-1}
\mathsf A^{\mathrm{cong}}_S X_{z,S},
\qquad
J_{\mathcal D,S}=J^{\mathrm{sp}}_{\mathcal D}+J^{\mathrm{tr}}_{\mathcal D,S}.
$$

 Substituting the congestion response into the spatial equations reduces the joint route, mode, congestion, and spatial system. The code solves the resulting linear systems directly rather than constructing a matrix inverse.

For all policy arcs, the program builds a sparse selector matrix $\Pi\in\mathbb R^{P\times R}$, where $R$ is the number of directed policy arcs. A realized-friction change shifts the selected realized edge--mode cost while holding all other realized modal costs fixed. It is therefore a ceteris-paribus accounting derivative, with forcing matrix

<a id="eq:computational-realized-forcing"></a>

$$
B^r_{\mathcal D,S}=B_{\mathcal D} S_{\mathrm{agg}}\Pi.
$$

 A change in the underlying infrastructure cost, which we call a primitive-cost change, also affects mode choice and congestion. If $X_{p,S}$ is the direct edge--mode traffic response for all policies, the associated congestion response and forcing matrices are

<a id="eq:computational-primitive-congestion"></a>
<a id="eq:computational-primitive-forcing"></a>

$$
\begin{aligned}
H_S V_S&=\mathsf A^{\mathrm{cong}}_S X_{p,S},\\
B^{p}_{\mathcal D,S}&=B_{\mathcal D} S_{\mathrm{agg}}
\left(\Pi+\Gamma_S V_S\right).
\end{aligned}
$$

 These equations implement the distinction between the realized-cost accounting comparison and the primitive transport-cost experiment in Proposition [2](#thm:welfare). The implementation measures attenuation of the underlying cost reduction from the difference between the primitive and realized welfare derivatives. It reports their ratio only when the realized derivative is nonzero. For the edge-local specification, [equations](#eq:nonedge-traffic-gradients)--[Equation](#eq:direct-congestion-wedge) derive the entries of this transport response and its two congestion coefficients in closed form. The block system here applies the same logic when a terminal affects several edge--mode costs.

<a id="sec:computational-adjoint-method"></a>

### The equilibrium Lagrangian and the adjoint method

For a transport closure $S$, write the reduced and normalized domestic equilibrium as

$$
G_{\mathcal D,S}(z,\bar\vartheta)=0,
$$

 where $z$ contains the transformed domestic state and $\bar\vartheta$ is a transport-cost policy. Define

$$
J_{\mathcal D,S}:=D_zG_{\mathcal D,S},
\qquad
b_{\mathcal D,S,\bar\vartheta}:=
D_{\bar\vartheta}G_{\mathcal D,S},
\qquad
q_{\mathcal D}:=D_z\ln W_{\mathcal D},
$$

 where $W_{\mathcal D}$ is welfare among domestic residents. The local equilibrium Lagrangian is

<a id="eq:computational-local-lagrangian"></a>

$$
\mathscr L^{eq}_S(z,\bar\vartheta,\ell)
:=\ln W_{\mathcal D}(z)-\ell^\top
G_{\mathcal D,S}(z,\bar\vartheta).
$$

 This is not a planner's Lagrangian and does not require the decentralized equilibrium to maximize domestic welfare. It is a local device for differentiating an implicit equilibrium system.

Because $G_{\mathcal D,S}=0$ along the equilibrium branch, $\mathscr L^{eq}_S=\ln W_{\mathcal D}$. Differentiating gives

$$
\frac{d\mathscr L^{eq}_S}{d\bar\vartheta}
=\left(q_{\mathcal D}-J_{\mathcal D,S}^\top\ell\right)^\top
\frac{dz}{d\bar\vartheta}
-\ell^\top b_{\mathcal D,S,\bar\vartheta}.
$$

 Choose $\ell_S$ to solve

<a id="eq:computational-adjoint"></a>

$$
J_{\mathcal D,S}^{\top}\ell_S=q_{\mathcal D}.
$$

 The term involving the endogenous state then vanishes. Under the paper's convention that a benefit is the welfare effect of reducing a transport cost,

<a id="eq:computational-adjoint-benefit"></a>

$$
E_{S,\bar\vartheta}:=
-\frac{d\ln W_{\mathcal D}}{d\bar\vartheta}
=\ell_S^\top b_{\mathcal D,S,\bar\vartheta}.
$$

 For the realized- and primitive-cost forcing matrices above, the code therefore evaluates

<a id="eq:computational-elasticities"></a>

$$
E_S^r=\ell_S^{\top}B^r_{\mathcal D,S},
\qquad
E_S^{p}=\ell_S^{\top}B^{p}_{\mathcal D,S}.
$$

The adjoint components are local shadow values of the equilibrium equations. They depend on the scale of those equations, but the product $\ell_S^\top b_{\mathcal D,S,\bar\vartheta}$ does not. To make this interpretation explicit, perturb residual equation $a$ by $\varepsilon$:

$$
G_{\mathcal D,S}(z,\bar\vartheta)+\varepsilon e_a=0.
$$

 The induced state response is

$$
\left.\frac{dz}{d\varepsilon}\right|_{\varepsilon=0}
=-J_{\mathcal D,S}^{-1}e_a,
$$

 and therefore

$$
\left.\frac{d\ln W_{\mathcal D}}{d\varepsilon}\right|_{\varepsilon=0}
=-q_{\mathcal D}^\top J_{\mathcal D,S}^{-1}e_a
=-\ell_{S,a}.
$$

 Thus $-\ell_{S,a}$ is the welfare effect of a positive perturbation to residual $a$, or equivalently $\ell_{S,a}$ is the welfare value of relaxing that equation in the opposite direction. In the integrated market-access representation of Appendix A of the paper, the rescaled adjoint

$$
\mathcal L=\frac{1-\sigma}{\rho}\ell
$$

 satisfies $J^\top\mathcal L=-\psi$, and its exposure-normalized endpoint components are the multipliers in Proposition [2](#thm:welfare). The application uses the same adjoint argument with the domestic residual system and domestic welfare row. Foreign nodes remain in routing and traffic, but their supply and demand schedules are fixed and they carry no weight in $q_{\mathcal D}$.

The Implicit Function Theorem gives the equivalent forward calculation

$$
\frac{dz}{d\bar\vartheta}
=-J_{\mathcal D,S}^{-1}b_{\mathcal D,S,\bar\vartheta},
\qquad
E_{S,\bar\vartheta}
=q_{\mathcal D}^\top J_{\mathcal D,S}^{-1}
b_{\mathcal D,S,\bar\vartheta}.
$$

 The forward system follows one policy shock through the equilibrium. The adjoint instead propagates welfare values through the transposed system and then applies those values to every policy forcing. The two calculations contain the same equilibrium response.

<a id="sec:computational-algorithm"></a>

### Algorithm 1: adjoint evaluation of transport policies

The implementation evaluates many policies under each closure without forming either $H_S^{-1}$ or $J_{\mathcal D,S}^{-1}$. It uses matrix factorizations and linear solves in the following order. Its inputs are the validated baseline operators, closure $S$, policy selector $\Pi$, and domestic welfare row $q_{\mathcal D}$. Its outputs are the realized- and primitive-cost welfare derivatives and their diagnostics.

**Algorithm 1. Adjoint evaluation under closure $S$.**

**Step 1: close congestion.** Form and factor

$$
H_S=I-\mathsf A^{\mathrm{cong}}_S X_{h,S}.
$$

**Step 2: construct the reduced equilibrium Jacobian.** Solve

$$
H_SU_S=\mathsf A^{\mathrm{cong}}_S X_{z,S}
$$

 and set

$$
J_{\mathcal D,S}
=J^{\mathrm{sp}}_{\mathcal D}
+B_{\mathcal D}S_{\mathrm{agg}}\Gamma_SU_S.
$$

**Step 3: construct realized-cost forcing.** Set

$$
B^r_{\mathcal D,S}=B_{\mathcal D}S_{\mathrm{agg}}\Pi.
$$

**Step 4: construct primitive-cost forcing.** Solve

$$
H_SV_S=\mathsf A^{\mathrm{cong}}_S X_{p,S}
$$

 and set

$$
B^p_{\mathcal D,S}
=B_{\mathcal D}S_{\mathrm{agg}}\left(\Pi+\Gamma_SV_S\right).
$$

**Step 5: solve the welfare adjoint.** Solve

$$
J_{\mathcal D,S}^\top\ell_S=q_{\mathcal D}.
$$

**Step 6: evaluate and aggregate the policies.** Compute

$$
E_S^r=\ell_S^\top B^r_{\mathcal D,S},
\qquad
E_S^p=\ell_S^\top B^p_{\mathcal D,S},
$$

 then combine opposite directed arcs into physical links and record the linear-solve, closure, and finite-difference residuals.

The adjoint is preferable when the number of policies is large relative to the number of welfare objectives. A forward solve remains useful when the complete equilibrium response to a small number of policies is itself the object of interest. For brevity, the remainder of this appendix suppresses the subscript $\mathcal D$ on domestic Jacobians, welfare rows, and forcing matrices.

In the application, the domestic state has $2\times228=456$ variables and the policy set contains 704 directed road arcs. For each welfare objective and closure, the adjoint replaces 704 policy-specific forward solves with one transposed solve followed by multiplication against the sparse policy-forcing matrix.

### Closure decomposition and physical-link policies

Online Appendix B decomposes the welfare multiplier within a given equilibrium specification. This section answers a different question: how the welfare derivative changes as transport and equilibrium mechanisms are added to a common observed baseline. [Figure](#fig:rsue_decomposition) reports this closure comparison, not the Sherman--Morrison decomposition in Online Appendix [6.3.2](#sec:multiplier-externalities).

Having obtained the welfare derivative under each transport closure, the implementation compares the closures at the same observed allocation. $NC$ allows route and mode adjustment without congestion; $NT$ adds edge congestion; $F$ contains all congestion channels declared in the configuration; $FM$ fixes baseline modal shares; and $FR$ fixes baseline origin--destination use of physical directed edges. The traffic-only Hulten statistic is recorded as $H$. In the headline edge-local specification, $NT=F$, so the terminal component is exactly zero.

#### Exact Jacobian decomposition

To compare the closures at the same observed allocation, the code separates the spatial Jacobian from the transport response.

The no-congestion spatial Jacobian can be written as

<a id="eq:computational-spatial-parts"></a>

$$
J^{\mathrm{sp}}=\mathcal D+uv^{\top}.
$$

 Here, $\mathcal D$ contains the sparse allocation equations and $uv^{\top}$ is the rank-one aggregate feedback induced by the fixed-labor normalization. Combining [equations](#eq:computational-transport-system) and [Equation](#eq:computational-jacobian), the Jacobian for closure $S$ is

<a id="eq:computational-closure-parts"></a>

$$
J_S
=\mathcal D+uv^{\top}+\Delta_S^{\mathrm{tr}},
\qquad
\Delta_S^{\mathrm{tr}}
=B S_{\mathrm{agg}}\Gamma_S H_S^{-1}
\mathsf A^{\mathrm{cong}}_S X_{z,S}.
$$

 All closures are differentiated at the same observed allocation. Hence $\mathcal D$, $u$, and $v$ are common across $NC$, $NT$, $F$, $FM$, and $FR$. The closures differ only through the transport block $\Delta_S^{\mathrm{tr}}$: the active congestion map, the modal response, or the route-incidence response.

This common-baseline construction gives a particularly simple mapping to the allocation--scarcity--equilibrium decomposition. For each comparison $r\in\{\mathrm{road},\mathrm{terminal},\mathrm{mode},\mathrm{route}\}$,

<a id="eq:computational-structural-zeros"></a>

$$
d_{r,e}^{\mathrm{alloc}}=0,
\qquad
d_{r,e}^{\mathrm{eq}}=0,
\qquad
d_{r,e}^{\mathrm{scar}}=d_{r,e}.
$$

 These are structural zeros rather than fitted residuals. The allocation component is zero because $\mathcal D$ is unchanged, and the equilibrium-correction component is zero because the low-rank block $uv^{\top}$ is unchanged. The entire difference is therefore carried by $\Delta_S^{\mathrm{tr}}$. This conclusion is specific to local derivatives evaluated at a common baseline. In a finite comparison that recomputes baseline shares or spatial allocations, $\mathcal D$, $u$, and $v$ could also change.

For a change in the cost users face on directed policy arc $e$, define

<a id="eq:computational-closure-multiplier"></a>

$$
E_{e,S}^r=q^{\top}J_S^{-1}b_e^r,
\qquad
m_{e,S}=\frac{E_{e,S}^r}{\rho\Xi_e}.
$$

 The matrix resolvent identity gives

<a id="eq:computational-resolvent-gap"></a>

$$
J_A^{-1}-J_B^{-1}
=J_A^{-1}(J_B-J_A)J_B^{-1}.
$$

 Premultiplying by $q^{\top}$ and postmultiplying by the common forcing $b_e^r$ yields the inverse-gap identity used in the code:

<a id="eq:computational-inverse-gap"></a>

$$
E_{e,A}^r-E_{e,B}^r
=\left(J_A^{-\top}q\right)^{\top}
\left(J_B-J_A\right)J_B^{-1}b_e^r.
$$

 The code calculates each reported closure difference both as a direct difference between two adjoint solutions and from the intervening analytical Jacobian block. The normalized comparisons are

<a id="eq:computational-wedges"></a>

$$
\begin{aligned}
d_{\mathrm{road},e}&=m_{e,NC}-m_{e,NT},
&d_{\mathrm{terminal},e}&=m_{e,NT}-m_{e,F},\nonumber\\
d_{\mathrm{mode},e}&=m_{e,F}-m_{e,FM},
&d_{\mathrm{route},e}&=m_{e,F}-m_{e,FR}.
\end{aligned}
$$

 They satisfy the exact closure ladder

<a id="eq:computational-ladder"></a>

$$
m_{e,F}
=m_{e,NC}-d_{\mathrm{road},e}-d_{\mathrm{terminal},e}
=m_{e,FM}+d_{\mathrm{mode},e}
=m_{e,FR}+d_{\mathrm{route},e}.
$$

Finally, the difference between the traditional statistic and the full-model effect of a change in the cost users face is

<a id="eq:computational-realized-hulten-gap"></a>

$$
\Xi_e-E_{e,F}^{r}
=\Xi_e(1-\rho)+\rho\Xi_e(1-m_{e,F}).
$$

 Define the cost-attenuation contribution directly as

$$
\Delta_{e}^{\mathrm{att}}
:=E_{e,F}^{r}-E_{e,F}^{p}.
$$

 This difference is defined even when the realized-cost derivative is zero. When $E_{e,F}^{r}\neq0$, one may also report the welfare-effective ratio $\chi_e:=E_{e,F}^{p}/E_{e,F}^{r}$, in which case $\Delta_e^{\mathrm{att}}=E_{e,F}^{r}(1-\chi_e)$. Substituting the first equality in [equation](#eq:computational-ladder) into [equation](#eq:computational-realized-hulten-gap), and then adding the cost-attenuation contribution, gives

<a id="eq:computational-hulten-gap"></a>

$$
\begin{aligned}
\Xi_e-E_{e,F}^{p}
={}&\Xi_e(1-\rho)
+\rho\Xi_e(1-m_{e,NC})
+\rho\Xi_e d_{\mathrm{road},e}\nonumber\\
&+\rho\Xi_e d_{\mathrm{terminal},e}
+\Delta_e^{\mathrm{att}}.
\end{aligned}
$$

In the integrated economy of Section [2](#sec:model), the five terms in [equation](#eq:computational-hulten-gap) are, respectively, externality scaling, market-access propagation, road congestion, terminal congestion, and attenuation of the underlying cost reduction as traffic responds. This sign convention writes each term as a contribution to $\Xi_e-E_{e,F}^{p}$. A positive term lowers the extended statistic relative to the traditional statistic, while a negative term raises it.

The application maintains fixed foreign supply and demand and evaluates U.S.-resident welfare in every calculation shown in [Figure](#fig:rsue_decomposition). Its baseline is the external-node model $E_{e,\mathrm{US},0}^{p}$, evaluated at $\alpha=\beta=\lambda_m=0$. The figure then uses two comparisons:

<a id="eq:computational-spatial-subtotal"></a>
<a id="eq:computational-road-policy-subtotal"></a>

$$
\begin{aligned}
\Delta_e^{\mathrm{spatial}}
&\equiv E_{e,NC}^{r}-E_{e,\mathrm{US},0}^{p},\\
\Delta_e^{\mathrm{road}}
&\equiv E_{e,F}^{p}-E_{e,NC}^{r}
=-\rho\Xi_e d_{\mathrm{road},e}
-\rho\Xi_e d_{\mathrm{terminal},e}
-\Delta_e^{\mathrm{att}}.
\end{aligned}
$$

 The spatial term compares two calculations with the same external-node closure and isolates the net effect of domestic spatial externalities without congestion. For additional diagnosis, the package separates this term into direct externality scaling and propagation through market access. The road term compares the full primitive-cost derivative with its no-congestion counterpart. It includes both the effect of congestion on the response to costs faced by users and the attenuation of the underlying cost reduction as traffic responds.

The two terms satisfy

<a id="eq:computational-figure-change"></a>

$$
E_{e,F}^{p}-E_{e,\mathrm{US},0}^{p}
=\Delta_e^{\mathrm{spatial}}
+\Delta_e^{\mathrm{road}}.
$$

 The traditional statistic and the application's fixed-foreign-market baseline differ because they use different welfare constituencies and boundary conditions. To retain that distinction as an accounting diagnostic, define

<a id="eq:computational-boundary-adjustment"></a>

$$
\Delta_e^{\mathrm{boundary}}
:=E_{e,\mathrm{US},0}^{p}-\Xi_e.
$$

 [Equations](#eq:computational-figure-change) and [Equation](#eq:computational-boundary-adjustment) imply

<a id="eq:computational-application-total-gap"></a>

$$
E_{e,F}^{p}-\Xi_e
=\Delta_e^{\mathrm{boundary}}
+\Delta_e^{\mathrm{spatial}}
+\Delta_e^{\mathrm{road}}.
$$

 This identity is retained as an implementation check. [Figure](#fig:rsue_decomposition) begins from the external-node baseline and therefore does not display the boundary term as a separate step. Thus a positive bar in panel (b) raises the extended welfare elasticity and a negative bar lowers it. The rows are accounting comparisons at a common observed allocation, not a gradual parameter experiment. A positive realized-cost component should not be interpreted as evidence that congestion raises welfare: it is a ceteris-paribus derivative that holds the other realized modal costs fixed, not the primitive-cost policy experiment. Terminal congestion is zero in the main specification and remains in the identity only for the extension.

The package checks [equations](#eq:computational-inverse-gap)--[Equation](#eq:computational-road-policy-subtotal) for every directed policy arc and checks [equation](#eq:computational-figure-change) after aggregation to physical links. The fixed-mode and fixed-route closures remain available as alternative comparisons, but they are not steps in [Figure](#fig:rsue_decomposition). We omit them because they are not additive terms in the displayed accounting, not because they have zero effects at the distorted baseline. Proposition [1](#thm:traditional) implies cancellation only in the efficient integrated benchmark. The output tables retain every closure elasticity, additive component, and identity residual. [Figure](#fig:rsue_decomposition) reports means across physical links. To express the gain from a one-percent improvement in basis points of welfare, the figure multiplies each mean elasticity by $100$.

The paper's policy unit is a physical road link rather than one directed arc. The implementation first computes all 704 directed-arc derivatives. It then requires each physical-link identifier to contain exactly two observations with reversed endpoints and sums their welfare elasticities, traffic, and all additive decomposition components. Only after this summation does it construct link-level normalized multipliers. This procedure yields 352 bidirectional policy experiments.

<a id="sec:computational-artifacts"></a>

### Artifact pipeline and verification

The paper configuration selects the choice logsum with $\eta=1.099$, all four transport modes, edge-local road congestion with $\lambda_{\mathrm{road}}=0.092$, and directional 2017 Census port trade. The complete paper artifact set is generated by

> export RSUE_DATA_ROOT=/absolute/path/to/Input
>
> julia --project=. replication/rsue/build_paper_artifacts.jl

The script evaluates the main specification, a comparison using the legacy port data, and the rail-terminal extension. It writes results for directed arcs and physical links, the TeX values used in the paper, sensitivity results, map data, figures, diagnostics, and a record of the inputs and outputs. Quantitative statements in the manuscript are drawn from the generated TeX values. Geographic names are assigned by matching coordinates to public 2018 Census CBSA and Place polygons. When the endpoints do not identify two places, the output reports the metropolitan area and physical-link identifier rather than assigning a corridor name.

For each sensitivity value, the package rebuilds the affected model operators and reevaluates all physical links. It reports the mean physical-link benefit and the Spearman correlation between the new and baseline link rankings. A sensitivity point is rejected if it violates net dispersion, crosses the baseline sign branch of $e$, approaches a singular boundary, or exceeds a condition-number gate.

#### Numerical verification and reproducibility.

The program stops rather than return results when an input, equilibrium, or transport-system check fails. Each paper run records input and configuration hashes, declared transformations, node and edge counts, and physical-link pairing. It also reports the route-kernel spectral radius, absorption and margin errors, fixed foreign-schedule and traffic-reconstruction errors, condition numbers, linear-solve residuals, and the residuals for each accounting identity. Finally, it records the code and Julia versions, model specification, parameters, and output hashes. The paper configuration uses an algebraic tolerance of $10^{-10}$ and rejects condition numbers above $10^{12}$. The package test suite separately compares the analytical modal, congestion, route, and welfare derivatives with central finite differences; checks the efficient Hulten collapse; tests node and mode permutations and coherent unit rescaling; and covers no-congestion, one-mode, unique-route, parallel-route, and endpoint-terminal limiting cases. Restricted-data acceptance tests require 234 nodes, 704 directed road policies, 352 physical links, and the stored result hashes. These checks establish that the program computes the stated model and result vintage. They do not validate the model against untargeted economic outcomes.

The calculation measures small changes around the observed network. It requires balanced flows at each location, positive traffic on active links and modes, stable route probabilities, and uniquely solvable transport and spatial systems. The theorem also uses the same curvature parameter for route choice and trade. The code checks these conditions and does not force a solution by adding numerical regularization.

<a id="sec:parameter_sensitivity"></a>

## Online Appendix D: Additional Results and Parameter Sensitivity

[Table](#tab:rsue_top_links) reports the thirty highest-ranked links under each statistic, compared with ten in the main text. It also reports each link's rank under the other approach. Tables [2](#tab:rsue_mechanism_links) and [3](#tab:rsue_rank_distribution) then examine why individual links change rank and how those changes vary across the traffic distribution.

The first table broadens the comparison of the highest-ranked improvements. The next table then uses selected links to separate the cost reduction reaching users from the market-access multiplier. This distinction explains why links with similar traditional statistics can move in opposite directions in the extended ranking. The distributional table complements those examples by reporting rank changes and benefit ratios across the full traffic distribution. The appendix concludes by varying the externality and road-congestion parameters that govern the extended statistic.

<a id="tab:rsue_top_links"></a>

**Table D1: Top 30 physical road links under the traditional and extended approaches**

*Panel A. Traditional approach*

| Rank | Physical road link | Elasticity ($\times 10^{-4}$) | Extended rank |
| --- | --- | --- | --- |
| 1 | San Diego-Carlsbad--Los Angeles-Long Beach-Anaheim | 18.728 | 1 |
| 2 | Riverside-San Bernardino-Ontario--Los Angeles-Long Beach-Anaheim | 14.464 | 2 |
| 3 | Washington-Arlington-Alexandria--Baltimore-Columbia-Towson | 13.377 | 15 |
| 4 | San Francisco-Oakland-Hayward--Vallejo-Fairfield | 12.941 | 5 |
| 5 | San Francisco-Oakland-Hayward--Stockton-Lodi | 12.525 | 14 |
| 6 | San Diego-Carlsbad--Riverside-San Bernardino-Ontario | 12.014 | 4 |
| 7 | Washington-Arlington-Alexandria--Richmond | 11.352 | 17 |
| 8 | Boston-Cambridge-Newton--Providence-Warwick | 11.283 | 12 |
| 9 | Philadelphia-Camden-Wilmington--New York-Newark-Jersey City | 10.729 | 19 |
| 10 | Chicago-Naperville-Elgin--Milwaukee-Waukesha-West Allis | 9.923 | 23 |
| 11 | New York-Newark-Jersey City--New Haven-Milford | 9.897 | 41 |
| 12 | Baltimore-Columbia-Towson--Philadelphia-Camden-Wilmington | 9.657 | 35 |
| 13 | Atlanta-Sandy Springs-Roswell--Gainesville | 9.640 | 11 |
| 14 | New Haven-Milford--Hartford-West Hartford-East Hartford | 9.579 | 37 |
| 15 | Vallejo-Fairfield--Sacramento--Roseville--Arden-Arcade | 9.423 | 22 |
| 16 | Tampa-St. Petersburg-Clearwater--Deltona-Daytona Beach-Ormond Beach | 9.302 | 6 |
| 17 | Salt Lake City--Ogden-Clearfield | 9.243 | 18 |
| 18 | LaGrange--Atlanta-Sandy Springs-Roswell | 9.143 | 28 |
| 19 | Atlanta-Sandy Springs-Roswell--Macon-Bibb County | 9.004 | 8 |
| 20 | Hagerstown-Martinsburg--Washington-Arlington-Alexandria | 8.838 | 45 |
| 21 | Springfield--Hartford-West Hartford-East Hartford | 8.793 | 34 |
| 22 | Durham-Chapel Hill--Raleigh | 8.572 | 3 |
| 23 | Cincinnati--Dayton | 8.506 | 9 |
| 24 | Chattanooga--Atlanta-Sandy Springs-Roswell | 8.503 | 21 |
| 25 | Concord--Boston-Cambridge-Newton | 8.376 | 42 |
| 26 | Worcester--Boston-Cambridge-Newton | 8.371 | 57 |
| 27 | Portland-Vancouver-Hillsboro--Seattle-Tacoma-Bellevue | 8.368 | 7 |
| 28 | Flint--Detroit-Warren-Dearborn | 8.178 | 20 |
| 29 | Within New York-Newark-Jersey City metropolitan area (link 212_214) | 8.167 | 73 |
| 30 | Rockford--Chicago-Naperville-Elgin | 8.154 | 24 |

*Panel B. Extended approach*

| Rank | Physical road link | Elasticity ($\times 10^{-4}$) | Traditional rank |
| --- | --- | --- | --- |
| 1 | San Diego-Carlsbad--Los Angeles-Long Beach-Anaheim | 8.612 | 1 |
| 2 | Riverside-San Bernardino-Ontario--Los Angeles-Long Beach-Anaheim | 8.070 | 2 |
| 3 | Durham-Chapel Hill--Raleigh | 6.727 | 22 |
| 4 | San Diego-Carlsbad--Riverside-San Bernardino-Ontario | 6.290 | 6 |
| 5 | San Francisco-Oakland-Hayward--Vallejo-Fairfield | 6.270 | 4 |
| 6 | Tampa-St. Petersburg-Clearwater--Deltona-Daytona Beach-Ormond Beach | 6.069 | 16 |
| 7 | Portland-Vancouver-Hillsboro--Seattle-Tacoma-Bellevue | 6.041 | 27 |
| 8 | Atlanta-Sandy Springs-Roswell--Macon-Bibb County | 5.972 | 19 |
| 9 | Cincinnati--Dayton | 5.844 | 23 |
| 10 | Greensboro-High Point--Durham-Chapel Hill | 5.659 | 38 |
| 11 | Atlanta-Sandy Springs-Roswell--Gainesville | 5.582 | 13 |
| 12 | Boston-Cambridge-Newton--Providence-Warwick | 5.565 | 8 |
| 13 | Detroit-Warren-Dearborn--Monroe | 5.557 | 32 |
| 14 | San Francisco-Oakland-Hayward--Stockton-Lodi | 5.490 | 5 |
| 15 | Washington-Arlington-Alexandria--Baltimore-Columbia-Towson | 5.428 | 3 |
| 16 | Tampa-St. Petersburg-Clearwater--North Port-Sarasota-Bradenton | 5.423 | 37 |
| 17 | Washington-Arlington-Alexandria--Richmond | 5.335 | 7 |
| 18 | Salt Lake City--Ogden-Clearfield | 5.268 | 17 |
| 19 | Philadelphia-Camden-Wilmington--New York-Newark-Jersey City | 5.175 | 9 |
| 20 | Flint--Detroit-Warren-Dearborn | 5.173 | 28 |
| 21 | Chattanooga--Atlanta-Sandy Springs-Roswell | 5.133 | 24 |
| 22 | Vallejo-Fairfield--Sacramento--Roseville--Arden-Arcade | 5.097 | 15 |
| 23 | Chicago-Naperville-Elgin--Milwaukee-Waukesha-West Allis | 4.902 | 10 |
| 24 | Rockford--Chicago-Naperville-Elgin | 4.708 | 30 |
| 25 | Charlotte-Concord-Gastonia--Greensboro-High Point | 4.697 | 53 |
| 26 | Seattle-Tacoma-Bellevue metropolitan area--network boundary (link 9_12) | 4.696 | 35 |
| 27 | Spartanburg--Charlotte-Concord-Gastonia | 4.548 | 47 |
| 28 | LaGrange--Atlanta-Sandy Springs-Roswell | 4.494 | 18 |
| 29 | Within Raleigh metropolitan area (link 188_190) | 4.486 | 52 |
| 30 | Deltona-Daytona Beach-Ormond Beach--Miami-Fort Lauderdale-West Palm Beach | 4.386 | 31 |

> **Notes:** The policy unit is a simultaneous one-percent primitive-cost reduction in both directions of a physical road link. The cross-rank gives the link's rank under the other approach. Geographic labels use the public 2018 Census crosswalk; state suffixes are omitted. Elasticities are multiplied by $10^4$.

The top-link lists establish that the two approaches can rank the same links differently. To identify the source of those differences, Table [2](#tab:rsue_mechanism_links) factors the ratio of the extended and traditional measures into two terms. The cost-transmission term records how much of the underlying cost reduction reaches users after traffic responds. The combined market-access multiplier records how the two locations connected by the link transmit the improvement through the spatial equilibrium. Their product is the extended-to-traditional ratio.

<a id="tab:rsue_mechanism_links"></a>

**Table D2: Why selected link rankings differ**

| Physical road link | Traditional gain (bp) | Cost transmission $\chi_e$ | Market-access multiplier $\rho m_{e,F}$ | Extended/traditional | Ranks (traditional $\rightarrow$ extended) |
| --- | --- | --- | --- | --- | --- |
| Los Angeles--San Diego | 0.1873 | 0.536 | 0.857 | 0.460 | 1$\rightarrow$1 (+0) |
| Durham--Raleigh | 0.0857 | 0.486 | 1.615 | 0.785 | 22$\rightarrow$3 (+19) |
| Washington--Baltimore | 0.1338 | 0.471 | 0.861 | 0.406 | 3$\rightarrow$15 (-12) |
| Fort Smith--Fayetteville | 0.0255 | 0.415 | 2.048 | 0.850 | 232$\rightarrow$142 (+90) |

**Notes:** The traditional gain is the welfare gain, in basis points, from the paper's one-percent bidirectional improvement. Cost transmission is the effective ratio between the primitive-cost and realized-cost derivatives. The combined market-access multiplier includes the common externality scale $\rho$ and the two endpoint terms. The displayed ratio satisfies $E_e^{\mathrm{ext}}/E_e^{\mathrm{trad}}=\chi_e\rho m_{e,F}$. A positive rank change means that the link ranks higher under the Extended approach. Geographic labels use the public 2018 Census crosswalk.

The comparison between Durham--Raleigh and Washington--Baltimore illustrates the distinction. Their cost-transmission terms are similar, but Durham--Raleigh has a substantially larger market-access multiplier. It consequently moves from twenty-second to third, while Washington--Baltimore moves from third to fifteenth. Los Angeles--San Diego remains first because its large traffic-based gain outweighs the attenuation from the additional mechanisms. Fort Smith--Fayetteville provides a lower-traffic example: its large market-access multiplier raises it by ninety places, although it remains outside the highest-ranked group.

Correlations calculated within the links with the highest traditional statistics are affected by the narrower range of the horizontal-axis variable. Table [3](#tab:rsue_rank_distribution) therefore reports direct measures of disagreement. The largest mean absolute rank changes occur in the middle traffic deciles rather than in the highest decile. The median extended-to-traditional ratio is below one in every decile, but its level and dispersion vary across the distribution. The overlap between the two rankings rises as the list expands, showing substantial reshuffling near the top alongside broader agreement across larger sets of links.

<a id="tab:rsue_rank_distribution"></a>

**Table D3: Rank changes and benefit ratios by traditional-traffic decile**

| Traditional-traffic decile | Links | Mean absolute rank change | Median extended/traditional ratio | Interquartile range of ratio |
| --- | --- | --- | --- | --- |
| 1 | 36 | 6.8 | 0.591 | [0.484, 0.654] |
| 2 | 35 | 14.6 | 0.625 | [0.548, 0.662] |
| 3 | 35 | 20.8 | 0.610 | [0.556, 0.669] |
| 4 | 35 | 32.4 | 0.581 | [0.523, 0.654] |
| 5 | 35 | 31.5 | 0.603 | [0.542, 0.693] |
| 6 | 36 | 25.7 | 0.578 | [0.544, 0.653] |
| 7 | 35 | 27.7 | 0.620 | [0.524, 0.677] |
| 8 | 35 | 22.5 | 0.659 | [0.592, 0.706] |
| 9 | 35 | 24.1 | 0.569 | [0.502, 0.665] |
| 10 | 35 | 12.0 | 0.496 | [0.465, 0.586] |

**Notes:** Decile 1 contains the links with the lowest traditional traffic statistic and decile 10 the links with the highest. Links are sorted by that statistic and divided into equal-count groups, with the physical-link identifier breaking ties. Rank change is the absolute difference between a link's ranks under the two approaches. The ratio compares the Extended welfare elasticity with the Traditional traffic statistic. The top-$k$ overlaps are 4/10 at $k=10$, 18/25 at $k=25$, 40/50 at $k=50$, 89/100 at $k=100$. Unlike correlations calculated within a selected traffic range, these columns measure ranking and proportional differences directly.

The extended statistic depends on elasticities estimated outside this application. We therefore vary four parameters around the baseline and report both the mean benefit and the stability of the link rankings.

The $\alpha$ and $\beta$ panels vary one externality parameter at a time. The net-dispersion panel holds $\alpha$ fixed while changing $\beta$; it therefore changes both $\alpha+\beta$ and the composite coefficients $e$ and $\rho$. It should be read as a joint calibration sensitivity, rather than as the welfare effect of geographic dispersion alone. Across the reported ranges, these three paths mainly change the mean level of benefits, while link rankings remain close to the baseline. Road congestion affects both levels and rankings because it changes the cost consequences of concentrating additional traffic on already busy links.

<a id="fig:rsue_sensitivity"></a>

> **Figure: Sensitivity of mean benefits and link rankings**
>
> **Notes:** The left column reports the mean welfare gain from a one-percent bidirectional improvement across 352 physical road links, in basis points of baseline welfare. The right column reports the Spearman rank correlation with the baseline ranking. A vertical dotted line marks the baseline parameter value. Each row varies one parameter at a time in the headline edge-local model. Common- and terminal-congestion paths remain available as package diagnostics but are not shown here.
>
> Figure image omitted; see the PDF.

## References
<a id="ref-Ahlfeldt2015Quantitative"></a>
Ahlfeldt, Gabriel, Stephen Redding, Daniel Sturm, and Nikolaus Wolf. 2015. "Quantifying the Gains from Integration: Evidence from the Berlin Wall." *Quarterly Journal of Economics* 130 (3): 1133--89.

<a id="ref-Allen2014Topography"></a>
Allen, Treb, and Costas Arkolakis. 2014. "Trade and the Topography of the Spatial Economy." *Quarterly Journal of Economics* 129 (3): 1085--140.

<a id="ref-AA_2022restud"></a>
Allen, Treb, and Costas Arkolakis. 2022. "The Welfare Effects of Transportation Infrastructure Improvements." *The Review of Economic Studies* 89 (6): 2911--57. <https://doi.org/10.1093/restud/rdac001>.

<a id="ref-allen2025quantitative"></a>
Allen, Treb, and Costas Arkolakis. 2025. *Quantitative Regional Economics*. National Bureau of Economic Research Working Paper.

<a id="ref-AAL2026"></a>
Allen, Treb, Costas Arkolakis, and Xiangliang Li. 2026. *Efficiency in Space*. Working paper.

<a id="ref-AllenFuchsWong2026PractitionerGuide"></a>
Allen, Treb, Simon Fuchs, and Woan Foong Wong. 2026a. *Transport Network Welfare: Theory, Computation, and Practice with TransportNetworkWelfare.jl*.

<a id="ref-AllenFuchsWong2026TNW"></a>
Allen, Treb, Simon Fuchs, and Woan Foong Wong. 2026b. *TransportNetworkWelfare.jl*. [Https://github.com/sfuchs-de/TransportNetworkWelfare.jl](https://github.com/sfuchs-de/TransportNetworkWelfare.jl){.uri}.

<a id="ref-atkeson2010innovation"></a>
Atkeson, Andrew, and Ariel Tomas Burstein. 2010. "Innovation, Firm Dynamics, and International Trade." *Journal of Political Economy* 118 (3): 433--84.

<a id="ref-balboniBermanBoehmMarzanoWaseem2025ClearingAir"></a>
Balboni, Clare, Aaron Berman, Johannes Boehm, Lorenzo Marzano, and Mazhar Waseem. 2025. "Clearing the Air on the Costs and Benefits of Road Infrastructure." <https://jmboehm.github.io/>.

<a id="ref-baqaee2019macroeconomic"></a>
Baqaee, David Rezza, and Emmanuel Farhi. 2019. "The Macroeconomic Impact of Microeconomic Shocks: Beyond Hulten's Theorem." *Econometrica* 87 (4): 1155--203.

<a id="ref-bellman1966dynamic"></a>
Bellman, Richard. 1966. "Dynamic Programming." *Science* 153 (3731): 34--37.

<a id="ref-bonadio2021ports"></a>
Bonadio, Barthélémy. 2021. *Ports Vs. Roads: Infrastructure, Market Access and Regional Outcomes*. Working Paper.

<a id="ref-brancaccio2017geography"></a>
Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2020. "Geography, Transportation, and Endogenous Trade Costs." *Econometrica* 88 (2): 657--91.

<a id="ref-brancaccio2024investment"></a>
Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2024. *Investment in Infrastructure and Trade: The Case of Ports*. National Bureau of Economic Research.

<a id="ref-brinkmanlin2024freeway"></a>
Brinkman, Jeffrey, and Jeffrey Lin. 2024. "Freeway Revolts! The Quality of Life Effects of Highways." *The Review of Economics and Statistics* 106 (5): 1268--84. <https://doi.org/10.1162/rest_a_01244>.

<a id="ref-cocsar2024long"></a>
Coşar, A Kerem, Sophie Osotimehin, and Latchezar Popov. 2024. *The Long-Run Effects of Transportation Productivity on the US Economy*. National Bureau of Economic Research.

<a id="ref-DGWZ_2024transshipment"></a>
Do, Anh D, Sharat Ganapati, Woan Foong Wong, and Oren Ziv. 2025. *Transshipment Hubs, Trade, and Supply Chains*. National Bureau of Economic Research.

<a id="ref-donaldFukuiMiyauchi2026Welfare"></a>
Donald, Eric J., Masao Fukui, and Yuhei Miyauchi. 2026. "Unpacking Aggregate Welfare in a Spatial Economy." *The Review of Economic Studies*, ahead of print. <https://doi.org/10.1093/restud/rdag021>.

<a id="ref-donaldson2025transport"></a>
Donaldson, Dave. 2025. "Transport Infrastructure and Policy Evaluation." In *Handbook of Regional and Urban Economics*, vol. 6. Elsevier.

<a id="ref-DonaldsonHornbeck2016Railroads"></a>
Donaldson, Dave, and Richard Hornbeck. 2016. "Railroads and American Economic Growth: A 'Market Access' Approach." *Quarterly Journal of Economics* 131 (2): 799--858.

<a id="ref-ducruet2024all"></a>
Ducruet, César, Réka Juhász, Dávid Krisztián Nagy, and Claudia Steinwender. 2024. "All Aboard: The Effects of Port Development." *Journal of International Economics* 151: 103963. <https://doi.org/10.1016/j.jinteco.2024.103963>.

<a id="ref-DurantonTurner2011Fundamental"></a>
Duranton, Gilles, and Matthew A. Turner. 2011. "The Fundamental Law of Road Congestion: Evidence from US Cities." *American Economic Review* 101 (6): 2616--52.

<a id="ref-fajgelbaumgaubert2020optimal"></a>
Fajgelbaum, Pablo D, and Cecile Gaubert. 2020. "Optimal Spatial Policies, Geography, and Sorting." *The Quarterly Journal of Economics* 135 (2): 959--1036.

<a id="ref-Fajgelbaum2020"></a>
Fajgelbaum, Pablo D., and Edouard Schaal. 2020a. "Optimal Transport Networks in Spatial Equilibrium." *Econometrica* 88 (4): 1411--52.

<a id="ref-fajgelbaum2020optimal"></a>
Fajgelbaum, Pablo D, and Edouard Schaal. 2020b. "Optimal Transport Networks in Spatial Equilibrium." *Econometrica* 88 (4): 1411--52.

<a id="ref-Fan2023RouteChoice"></a>
Fan, Jingting, Yi Lu, and Wenlan Luo. 2023. "Valuing Domestic Transport Infrastructure: A View from the Route Choice of Exporters." *Review of Economics and Statistics* 105 (6): 1--46 (article in press).

<a id="ref-fogel1962quantitative"></a>
Fogel, Robert William. 1962. "A Quantitative Approach to the Study of Railroads in American Economic Growth: A Report of Some Preliminary Findings." *The Journal of Economic History* 22 (2): 163--97.

<a id="ref-Fogel1964Railroads"></a>
Fogel, Robert William. 1964. *Railroads and American Economic Growth: Essays in Econometric History*. Johns Hopkins University Press.

<a id="ref-FuchsWong2024Multimodal"></a>
Fuchs, Simon, and Woan Foong Wong. 2026. *Multimodal Transport Networks*. Working Paper No. 35065. Working Paper Series. National Bureau of Economic Research. <https://doi.org/10.3386/w35065>.

<a id="ref-GW_jep2023"></a>
Ganapati, Sharat, and Woan Foong Wong. 2023. "How Far Goods Travel: Global Transport and Supply Chains from 1965--2020." *Journal of Economic Perspectives* 37 (3): 3--30.

<a id="ref-gwz_entrepot"></a>
Ganapati, Sharat, Woan Foong Wong, and Oren Ziv. 2024. "Entrepot: Hubs, Scale, and Trade Costs." *American Economic Journal: Macroeconomics* 16 (4): 239--78.

<a id="ref-GilesPierce2000"></a>
Giles, Michael B., and Niles A. Pierce. 2000. "An Introduction to the Adjoint Approach to Design." *Flow, Turbulence and Combustion* 65 (3--4): 393--415. <https://doi.org/10.1023/A:1011430410075>.

<a id="ref-Graham2007Agglomeration"></a>
Graham, Daniel J. 2007. "Variable Returns to Agglomeration and the Effect of Road Traffic Congestion." *Journal of Urban Economics* 62 (1): 103--20.

<a id="ref-heiland2019trade"></a>
Heiland, Inga, Andreas Moxnes, Karen Helene Ulltveit-Moe, and Yuan Zi. 2025. "Trade from Space: Shipping Networks and the Global Implications of Local Shocks." *Review of Economics and Statistics*, 1--45.

<a id="ref-hulten1978growth"></a>
Hulten, Charles R. 1978. "Growth Accounting with Intermediate Inputs." *The Review of Economic Studies* 45 (3): 511--18.

<a id="ref-Khanna2016RoadOftTaken"></a>
Khanna, Gaurav. 2016. "Road Oft Taken: The Route to Spatial Development." <https://ssrn.com/abstract=2426835>.

<a id="ref-KhannaEtAl2025SpatialMobilityCrime"></a>
Khanna, Gaurav, Carlos Medina, Anant Nyshadham, Daniel Ramos-Menchelli, Jorge Tamayo, and Audrey Tiew. 2025. *Spatial Mobility, Economic Opportunity, and Crime*. Borradores de Economía No. 1334. Banco de la República de Colombia. <https://doi.org/10.32468/be.1334>.

<a id="ref-trillion"></a>
Lefevre, Benoit, David Leipziger, and Matthew Raifman. 2014. *The Trillion Dollar Question: Tracking Public and Private Investment in Transport*. Working Paper. World Resources Institute. <https://www.wri.org/research/trillion-dollar-question>.

<a id="ref-Leunig2010SocialSavings"></a>
Leunig, Tim. 2010. "Social Savings." *Journal of Economic Surveys* 24 (5): 775--800.

<a id="ref-mahajan2024highways"></a>
Mahajan, Kanika. 2024. "Highways and Segregation." *Journal of Urban Economics* 141: 103574. <https://doi.org/10.1016/j.jue.2023.103574>.

<a id="ref-MartinsHwang2013"></a>
Martins, Joaquim R. R. A., and John T. Hwang. 2013. "Review and Unification of Methods for Computing Derivatives of Multidisciplinary Computational Models." *AIAA Journal* 51 (11): 2582--99. <https://doi.org/10.2514/1.J052184>.

<a id="ref-mehrotraTurnerUribe2024InfrastructureCost"></a>
Mehrotra, Neil, Matthew A. Turner, and Jorge Uribe. 2024. "Does the US Have an Infrastructure Cost Problem? Evidence from the Interstate Highway System." *Journal of Urban Economics* 143: 103681. <https://doi.org/10.1016/j.jue.2024.103681>.

<a id="ref-MiyauchiNakajimaRedding2025Mobility"></a>
Miyauchi, Yuhei, Kentaro Nakajima, and Stephen J. Redding. 2025. "The Economics of Spatial Mobility: Theory and Evidence Using Smartphone Data." *The Quarterly Journal of Economics* 140 (4): 2507--70. <https://doi.org/10.1093/qje/qjaf038>.

<a id="ref-monte2018commuting"></a>
Monte, Ferdinando, Stephen J Redding, and Esteban Rossi-Hansberg. 2018. "Commuting, Migration, and Local Employment Elasticities." *American Economic Review* 108 (12): 3855--90.

<a id="ref-morten2024effects"></a>
Morten, Melanie, and Jaqueline Oliveira. 2024. "The Effects of Roads on Trade and Migration: Evidence from a Planned Capital City." *American Economic Journal: Applied Economics* 16 (2): 389--421.

<a id="ref-dePalmaEtAl2011Handbook"></a>
Palma, André de, Robin Lindsey, Emile Quinet, and Roger Vickerman, eds. 2011. *A Handbook of Transport Economics*. Edward Elgar.

<a id="ref-Pironneau1974"></a>
Pironneau, Olivier. 1974. "On Optimum Design in Fluid Mechanics." *Journal of Fluid Mechanics* 64 (1): 97--110. <https://doi.org/10.1017/S0022112074002023>.

<a id="ref-redding2025quantitative"></a>
Redding, Stephen J. 2025. *Quantitative Urban Economics*. National Bureau of Economic Research Working Paper.

<a id="ref-REDDING2016148"></a>
Redding, Stephen J. 2016. "Goods Trade, Factor Mobility and Welfare." *Journal of International Economics* 101: 148--67. <https://doi.org/10.1016/j.jinteco.2016.04.003>.

<a id="ref-ReddingTurner2015"></a>
Redding, Stephen J., and Matthew A. Turner. 2015. "Transportation Costs and the Spatial Organization of Economic Activity." *Handbook of Regional and Urban Economics* 5: 1339--98.

<a id="ref-severen2026qsm"></a>
Severen, Christopher. 2026. *Evaluating Transportation Improvements Within Cities Using Quantitative Spatial Models*. Working Paper Nos. 26-13. Federal Reserve Bank of Philadelphia. <https://www.philadelphiafed.org/the-economy/regional-economics/evaluating-transportation-improvements-within-cities-using-quantitative-spatial-models>.

<a id="ref-SmallVerhoefLindsey2024"></a>
Small, Kenneth A., Erik T. Verhoef, and Robin Lindsey. 2024. *The Economics of Urban Transportation*. 3rd ed. Routledge.

<a id="ref-NAP24680"></a>
Transportation Research Board and National Academies of Sciences, Engineering, and Medicine. 2017. *Guide for Conducting Benefit-Cost Analyses of Multimodal, Multijurisdictional Freight Corridor Investments*. Edited by Sharada Vadali, C. James Kruse, Kenneth Kuhn, and Anne Goodchild. The National Academies Press. <https://doi.org/10.17226/24680>.

<a id="ref-valenzuelaCasasempereDisplacement"></a>
Valenzuela-Casasempere, Pablo. 2026. *Infrastructure Provision and Displacement: Evidence from the Interstate Highway System*. <https://pvalenzuelac.github.io/research/>.

<a id="ref-Venables2007Agglomeration"></a>
Venables, Anthony J. 2007. "Evaluating Urban Transport Improvements: Cost--Benefit Analysis in the Presence of Agglomeration and Income Taxation." *Journal of Transport Economics and Policy* 41 (2): 173--88.

<a id="ref-weiwu2025unequal"></a>
Weiwu, Laura. 2025. *Unequal Access: Racial Segregation and the Distributional Impacts of Interstate Highways in Cities*. Working Paper. University of California, Berkeley. <https://lauraweiwu.com/assets/files/Unequal_Access_Complete.pdf>.

<a id="ref-wong_roundtrip"></a>
Wong, Woan Foong. 2022. "The Round Trip Effect: Endogenous Transport Costs and International Trade." *American Economic Journal: Applied Economics* 14 (4): 127--66.

[^1]: Contact: treb.allen@dartmouth.edu, simon.fuchs@atl.frb.org, and wfwong@uoregon.edu. We thank Costas Arkolakis for early discussions and helpful comments and suggestions. The views in this paper are solely the responsibility of the authors and should not necessarily be interpreted as reflecting the views of the Board of Governors of the Federal Reserve System or of any other person associated with the Federal Reserve System. All errors are our own.

[^2]: We maintain the assumption of perfect mobility to coincide with the long-run Rosen-Roback benchmark. However, it is the efficiency of the competitive equilibrium, rather than mobility itself, that matters for the social-savings result, as the same envelope logic can apply with immobile workers or mobility frictions. See Donald et al. (2026) and Allen, Arkolakis, et al. (2026) for more detailed discussions.

[^3]: One microfoundation assumes independent extreme-value shocks to transport productivity across modes. We set $\eta=1.099$, following Fuchs and Wong (2026). Terminal and transshipment costs can enter through network links, so Proposition [2](#thm:welfare) covers fixed transfer costs. Modeling transfers between all mode--node pairs would require the corresponding flows, which we do not observe. Endogenous switching costs would add their response to the equilibrium derivative and are not included in this application.

[^4]: This restriction gives route choice and trade a common elasticity and has a microfoundation based on heterogeneous shipping productivity. Estimating route-choice dispersion separately would require a different routing rule, although the same welfare method would apply.

[^5]: Donald et al. (2026) show that additional first-order effects can arise even when the economy is efficient if agents have idiosyncratic location tastes and the social-welfare criterion is utilitarian.

[^6]: Proposition [1](#thm:traditional) refers to the integrated economy described in this section. In the U.S. application, foreign supply and demand are held fixed and welfare is measured among U.S. residents. [Figure](#fig:rsue_decomposition) uses this boundary condition throughout and begins from the corresponding no-externality, no-congestion baseline.

[^7]: *Formally, $e=1+\beta(\sigma-1)+\alpha\sigma$, $\rho=(1+\alpha+\beta)/e$, and $\chi_{klm}=
    \left.\big(\partial\ln\kappa_{kl}/\partial\bar\vartheta_{klm}\big)\right|_{dz=0}/s_{kl,m}$. The corresponding realized-cost accounting derivative changes $\vartheta_{klm}\equiv\ln\kappa_{kl,m}$ while holding the other realized modal costs fixed; the same formula then applies with $\chi_{klm}=1$. A change in the underlying cost instead uses the modal-congestion response derived in Online Appendix [6.1.3](#sec:multiplier-congestion).*

[^8]: At the baseline, $e=-0.5$ and $\rho=-1.6$. The multiplier sum is also negative under the proposition's sign convention, so the formula yields the positive welfare gains reported below.

[^9]: The route elasticity of eight in Fuchs and Wong (2026) maps to $\sigma=9$ under $\theta=\sigma-1$. Automatic Identification System (AIS) records report vessel locations and timestamps, from which ship dwell time at ports can be measured. Using these data and an instrumental-variables design, Fuchs and Wong (2026) estimate an elasticity of ship dwell time with respect to port traffic of $0.096$. We use this estimate only as a transferred terminal-congestion calibration in the optional rail-terminal extension. The main specification includes only road congestion.

[^10]: The *TransportNetworkWelfare.jl* repository contains the replication details and a practitioner guide to preparing another network (Allen, Fuchs, et al. 2026b).
