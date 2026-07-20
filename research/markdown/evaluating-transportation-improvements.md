---
title: "Evaluating Transportation Improvements Quantitatively: A Primer"
authors: "Treb Allen, Simon Fuchs, and Woan Foong Wong"
date: "September 2025"
pdf: "/research/EvalTransportImprovements_AFW_draft.pdf"
markdown_source: "/research/markdown/evaluating-transportation-improvements.md"
text_version_generated: "2026-07-20"
---

# Evaluating Transportation Improvements Quantitatively: A Primer

**Authors:** Treb Allen, Simon Fuchs, and Woan Foong Wong<br>
**Version:** September 2025<br>
**JEL:** H54, R12, R13, R41, R42<br>
**Keywords:** Transportation networks; infrastructure; social savings; quantitative spatial models

[Download the paper as PDF](/research/EvalTransportImprovements_AFW_draft.pdf)

> This accessible text version was generated from the authors’ TeX source and checked against the PDF linked above. Figure images are omitted here; their captions and notes are retained.

## Abstract

How do we evaluate the welfare gains from transport infrastructure investment? We present a quantitative spatial framework that integrates both traffic and economic responses to infrastructure investment and derive the elasticity of aggregate welfare to improvements in the transportation network. This approach extends the traditional “social savings” method to incorporate agglomeration and dispersion externalities and endogenous traffic congestion. We calibrate the model to the U.S. freight transport network and assess the welfare impact of upgrading segments of the U.S. Interstate Highway System, quantifying the marginal gains from improvements in specific corridors and highlighting where the returns to investment are highest.

**Author note:** Acknowledgements and institutional disclaimers are preserved in the paper notes.[^1]

## Introduction

More than a trillion dollars is spent every year on improving transportation infrastructure ([Lefevre et al. 2014](#ref-trillion)). Is this money well spent? Traditionally, welfare gains from infrastructure improvements have been estimated using the social-savings approach of Fogel ([1964](#ref-Fogel1964Railroads), [1962](#ref-fogel1962quantitative)), which approximates the welfare gains from the value of cost (or time) savings taking as given observed prices and distribution of economic activity. Yet recent advances in quantitative spatial modeling (see e.g. ([Allen and Arkolakis 2014](#ref-Allen2014Topography); [Ahlfeldt et al. 2015](#ref-Ahlfeldt2015Quantitative); [Redding 2016](#ref-REDDING2016148))) have emphasized that changes in transportation costs have general equilibrium effects on prices and the spatial distribution of economic activity. Moreover, the presence of traffic congestion and/or agglomeration externalities can result in market failures, undermining the Hulten-type intuition upon which the social savings approach is based. Is there a way to extend the social savings approach to account for such general equilibrium effects and externalities when evaluating the welfare impact of infrastructure improvements?

This paper extends the social savings approach to evaluate the welfare impact of transportation infrastructure investments to account explicitly for (a) the general equilibrium changes in the distribution of economic activity; (b) optimal routing across multiple modes of transportation; (c) traffic congestion; and (d) agglomeration and dispersion externalities. Like the traditional approach, our extension continues to rely on sufficient statistics that allow for a comprehensive assessment of the welfare impacts of transportation improvements, while remaining transparent and tractable enough for policy use. Indeed, in the absence of traffic congestion and externalities, we derive an expression equivalent to the traditional social savings approach. However, we show that the presence of such forces can lead to substantial differences with the traditional approach.

We begin by presenting a standard quantitative spatial framework as in ([Allen and Arkolakis 2014](#ref-Allen2014Topography)), where perfectly mobile agents trade between many locations with nearly arbitrary geographic differences. As in ([Allen and Arkolakis 2022](#ref-AA_2022restud)), the trade costs between different locations arise from movement through the transportation network, which may be subject to traffic congestion. As in ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), this transportation network can include many different modes of transport with nearly arbitrary costs along any network segment. As in ([Allen and Arkolakis 2022](#ref-AA_2022restud)) and ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), we then characterize the equilibrium recursively where each location's endogenous economic activity can be written only as a function of the economic activity of its neighbors.

This recursive formulation enables us to perturb the equilibrium conditions how an improvement to any segment of any mode of the transportation network affects the equilibrium welfare of the entire economy. This expression---the "extended\" social savings approach---can be written solely as a function of observed economic activity and structural elasticities governing the strength of traffic congestion and externalities. In the special case when these are not present, the expression simplifies to the traditional social savings approach where welfare gains are proportional to the share of economic activity using the network segment. In the presence of traffic congestion and externalities, however, the expression also incorporates how general equilibrium effects propagate throughout the network.

Finally, we illustrate the value of this new approach by examining the welfare impacts of improving each segment of the U.S. interstate highway system. To do so, we use data on the entire U.S. freight network and compare the welfare impacts of the traditional approach to our extended approach incorporating traffic congestion and externalities. While links with highest traffic shares have a one-to-one correlation with the links with highest welfare gains under the traditional approach, this correlation is lower under the extended approach, highlighting the importance of moving beyond traditional approaches when making decisions on how to best allocate resources toward infrastructure improvements.

#### Related Literature

As mentioned above, the primary purpose of this paper is to extend the traditional social savings approach to incorporate four new margins: (a) general equilibrium responses in the spatial distribution of economic activity; (b) optimal routing; (c) traffic congestion; and (d) agglomeration and dispersion externalities. Here, we offer a brief summary of recent advances in each of these four directions, although we refer interested readers to the excellent handbook chapters on transport infrastructure and policy evaluation by ([Donaldson 2025](#ref-donaldson2025transport)), quantitative regional economics by Allen and Arkolakis ([2025](#ref-allen2025quantitative)) and on quantitative urban economics by ([Redding 2025](#ref-redding2025quantitative)) for a more comprehensive discussion of the related literature.

The traditional social savings approach of Fogel ([1964](#ref-Fogel1964Railroads), [1962](#ref-fogel1962quantitative)) estimates the welfare gains as equal to the value of costs saved arising from an improvement in the transportation network holding constant the patterns of trade at the observed equilibrium. Yet over the past decade, a number of papers have developed tractable frameworks emphasizing how changes to the transportation network results in changes in the equilibrium distribution of economic activity across space. Some work has emphasized the role that transportation networks play in the trade of goods between locations (see e.g. ([Allen and Arkolakis 2014](#ref-Allen2014Topography); [Redding 2016](#ref-REDDING2016148); [Donaldson and Hornbeck 2016](#ref-DonaldsonHornbeck2016Railroads))), whereas others have emphasized the role transportation networks play in commuting (see e.g. ([Ahlfeldt et al. 2015](#ref-Ahlfeldt2015Quantitative); [Monte et al. 2018](#ref-monte2018commuting))), migration (see e.g. ([Morten and Oliveira 2024](#ref-morten2024effects))), or combinations thereof (see e.g. ([Monte et al. 2018](#ref-monte2018commuting))). Together, the quantitative spatial models developed in this literature has shown how it is possible to tractably characterize the general equilibrium responses to changes in infrastructure networks by combining detailed spatial data with economic theory.

A rich and growing literature has also incorporated the optimal route choice across the multimodal transportation network to highlight that the welfare benefits of infrastructure improvements are highly heterogeneous across links and depend on the topology and induced traffic patterns of the transportation network ([Ganapati et al. 2024](#ref-gwz_entrepot); [Wong 2022](#ref-wong_roundtrip); [Brancaccio et al. 2020](#ref-Brancaccio2020TradeCosts); [Heiland et al. 2019](#ref-RePEc:cpr:ceprdp:14193)). Studies that incorporate endogenous route and mode choice-----such as Fan et al. ([2023](#ref-Fan2023RouteChoice)) for Chinese exporters-----show that ignoring rerouting and the substitution between highways and regular roads can misstate welfare gains by 30 percent or more. ([Bonadio 2021](#ref-bonadio2021ports)) examines how road and port quality improvements affect distributional outcomes locally and abroad, where port upgrades benefit export-oriented regions while road improvements benefit domestic regions.

Our paper also contributes to the literature on congestion, initially focused on roads and more recently on ports. The "fundamental law" of road congestion finds that vehicle miles traveled rise roughly one-for-one with highway capacity, attenuating direct travel-time savings ([Duranton and Turner 2011](#ref-DurantonTurner2011Fundamental)). Models that embed volume-dependent travel costs adjust welfare formulas accordingly, capturing both the congestion penalty on improved links and network spillovers when traffic re-allocates. More recent work has focused on the importance of ports and the benefits from technology adoption and investments in the presence of congestion. ([Brancaccio et al. 2024](#ref-brancaccio2024investment)) evaluate the returns to infrastructure investment at ports under disruptions and congestion, while ([Ducruet et al. 2024](#ref-ducruet2024all)) show how the adoption of container technology can crowd out economic activity by raising land rents.

Finally, transport improvements can amplify agglomeration externalities by increasing effective economic density. Theoretical work by Venables ([2007](#ref-Venables2007Agglomeration)) and empirical estimates by Graham ([2007](#ref-Graham2007Agglomeration)) suggest that productivity rises 2--5 percent when employment density doubles, implying that conventional user-benefit appraisals may omit substantial "wider economic benefits." Modern quantitative spatial equilibrium frameworks incorporate these spillovers by letting productivity depend on local scale, providing a unified apparatus for evaluating direct cost savings, congestion feedback, and agglomeration gains within the same model. Ganapati et al. ([2024](#ref-gwz_entrepot)) further shows that scale economies in transportation can generate agglomerations by affecting trade costs, concentrate the gains from transport improvements at and around entrepôts---hubs within the hub-and-spoke transport network.[^2] ([Coşar et al. 2024](#ref-cocsar2024long)) shows that transportation productivity growth has sizeable welfare impacts on the US economy.

Relative to the existing literature, this paper makes two contributions. First, we show that incorporating general equilibrium responses and optimal routing do not on their own necessarily change the traditional social savings approach: indeed, in the absence of traffic congestion and/or externalities, the traditional social savings approach exactly captures the (first-order) welfare effects of transportation improvements. Second, however, we show that in the presence of traffic congestion and/or externalities, the general equilibrium and routing responses do have first order effects on the changes in welfare, and that quantitatively, these effects can result in substantial deviations from the traditional approach.

The paper is organized as follows. Section [2](#sec:model) develops the model and introduces the extended social savings approach. Section [3](#sec:data_cf) describes the data and calibration, and compares the traditional and extended approaches for quantitatively evaluating the transportation infrastructure improvement U.S. highway network. Section [4](#sec:end) concludes.

<a id="sec:model"></a>

## Evaluating Transportation Improvements: Theory

In this section, we present a quantitative spatial model where perfectly mobile agents engage in trade across many locations with rich geography. Onto this geography, we overlay a multimodal transportation network where bilateral trade costs arise endogenously through the optimal routing behavior of agents with traffic congestion. We then characterize the equilibrium recursively and derive an expression for the elasticity of aggregate welfare with respect to an improvement in any segment of the transportation network. In the absence of externalities and traffic congestion, this elasticity is equal to the traditional social savings approach; in the presence of such forces, the social savings approach must be extended to incorporate how the transportation improvements propagate throughout the transportation network.

<a id="subsec:model"></a>

### Model Setup

#### Locations

The world comprises $N$ locations indexed by $i=1,\dots,N$ inhabited by an exogenous measure $\bar{L}$ of perfectly mobile workers. Each location differs in its endowed *first-nature* productivity $\bar A_i>0$, amenity $\bar u_i>0$, and the variety of good it produces.

#### Production

The differentiated local variety is produced using only labor with a constant returns to scale production function under perfect competition. Denote the local wage by $w_i$. Each worker supplies one unit of labor inelastically.

#### Consumption

Preferences are CES over a continuum of varieties, one produced in each location, with elasticity of substitution $\sigma>1$. Indirect utility takes the familiar form $U_j = w_j P_j^{-1}\bar u_j$, where $P_j$ is the Dixit-Stiglitz price index. Labor is perfectly mobile across space, implying $U_j = U$ for all $j$.

#### Trade Costs

Shipping a unit of the variety from $i$ to $j$ requires $\tau_{ij}\ge 1$ physical units of the good, where $\tau_{ij}$ is the iceberg trade cost from $i$ to $j$ and is endogenously determined below.

#### Agglomeration and dispersion externalities

The total *second-nature* productivity and amenity in each location $i$, $A_i$ and $u_i$ respectively, depends on its first-nature productivity and amenity as well as its population $L_i$:

<a id="eq:externalities"></a>

$$
A_i=\bar A_i L_i^{\alpha}\qquad u_i=\bar u_i L_i^{\beta},
$$

where $\alpha,\beta\in \mathbb{R}$ govern the strength of the *agglomeration* and *dispersion externalities*. Note that when $\alpha=\beta=0$ there are no agglomeration and dispersion externalities.

### The transportation network

Goods are shipped between locations on a multi-modal transportation network. Suppose the $N$ locations are nodes on $M$ different graphs, where each graph $m\in\left\{ 1,...,M\right\}$ is summarized by an $N\times N$ adjacency matrix $\bar{K}_{m}=\left[\bar{\kappa}_{kl,m}\right]$, where $\bar{\kappa}_{kl,m}$ is the endowed *first-nature* (iceberg) cost of traversing the edge of the transportation network from node $k$ to node $l$ via mode $m$.

#### Traffic congestion

The total (*second-nature*) cost of traversing an edge from node $k$ to node $l$ via mode $m$ depends both on the first-nature cost and the value of traffic along the edge via that mode, $\Xi_{ik,m}$:

<a id="eq:congestion"></a>

$$
\kappa_{ik,m}=\bar\kappa_{ik,m}\,\Xi_{ik,m}^{\lambda_m},
$$

where $\lambda_m$ governs the strength of *traffic congestion* on mode $m$. Note that when $\lambda_m=0$ there is no traffic congestion on that particular mode. When we take the model to the data, we distinguish between road congestion and congestion at intermodal terminals which allows the switch from road to other modes.

#### Aggregation across modes

The total (*second-nature*) cost of traversing an edge from node $k$ to node $l$ across all possible modes is assumed to be summarized by a CES nest across modes:


<a id="eq:mode-ces"></a>

$$
\kappa_{ik}\equiv \Big(\sum_{m=0}^{M}\kappa_{ik,m}^{\,\eta}\Big)^{\!1/\eta},\qquad s_{ik,m}\equiv \frac{\kappa_{ik,m}^{\,\eta}}{\sum_{n}\kappa_{ik,n}^{\,\eta}},
$$

where $s_{ik,m}$ are mode shares and $\eta>0$ is the cross-mode substitution parameter.

#### Optimal routing

The optimal trade cost from location $i$ to location $j$, $\tilde\tau_{ij}$, is calculated by choosing the route through the transportation network which minimizes the costs incurred along the route. Formally, denote a path $\boldsymbol{p}^{ij}$ from $i$ to $j$ as a sequence of locations in vector form whose first element is $i$ and whose last element is $j$. Let $\mathcal{P}^{ij}$ denote the set of all such paths. Then we can write $\tilde\tau_{ij}$ as the solution to the following minimization problem:

<a id="eq:tau"></a>

$$
\tilde\tau_{ij}=\min_{\boldsymbol{p}^{ij}\in\mathcal{P}^{ij}}\prod_{k=1}^{\left|\boldsymbol{p}^{ij}\right|-1}\kappa_{\boldsymbol{p}_{k}^{ij},\boldsymbol{p}_{k+1}^{ij}},
$$

where $\left|\boldsymbol{p}^{ij}\right|$ is size of the path, i.e. one plus the number of edges traversed along the path.

We can approximate the optimal trade cost $\tilde\tau_{ij}$ with a \"nearly\" optimal trade cost $\tau_{ij}$ by replacing the minimand in equation ([Equation](#eq:tau)) with the LogSumExp function as follows:

<a id="eq:tau_soft"></a>

$$
\tau_{ij}^{-\theta}=\sum_{\boldsymbol{p}^{ij}\in\mathcal{P}^{ij}}\prod_{k=1}^{\left|\boldsymbol{p}^{ij}\right|-1}\left(\kappa_{\boldsymbol{p}_{k}^{ij},\boldsymbol{p}_{k+1}^{ij}}\right)^{-\theta},
$$

where $\tau_{ij}$ converges smoothly to $\tilde\tau_{ij}$ as $\theta\rightarrow\infty$. In what follows, we set $\theta=\sigma-1$ and refer the interested readers to ([Allen and Arkolakis 2022](#ref-AA_2022restud)) for an economic micro-foundation for this parameter choice and the transition from a "hard" minimization to a "soft" minimization based on heterogeneity in the productivity of shipping technologies.

#### Recursive formulation of the routing problem

Following ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), we can re-write equation ([Equation](#eq:tau_soft)) recursively using the principal of Bellman optimality ([Bellman 1966](#ref-bellman1966dynamic)). Let $\mathcal{N}\left(i\right)$ denote the set of locations neighboring location $i$, i.e. $\mathcal{N}\left(i\right)\equiv\left\{ j\in\left\{ 1,...,N\right\} |\kappa_{ij}<\infty\right\}$. Then the bilateral iceberg transportation costs can be written as the product of the edge costs of traveling to one's neighbors and their bilateral iceberg transportation costs of getting to the final destination, i.e.:

<a id="eq:tau_recursive"></a>

$$
\tau_{ij}^{1-\sigma}\approx\mathbf{1}\left\{ i=j\right\} +\sum_{k\in\mathcal{N}\left(i\right)}\kappa_{ik}^{1-\sigma} \tau_{kj}^{1-\sigma}.
$$

[Equation](#eq:tau_recursive) helpfully reformulates the equilibrium transportation costs solely as a function of each location's neighbors equilibrium transportation costs.

#### Traffic

Following ([Allen and Arkolakis 2022](#ref-AA_2022restud)), the equilibrium value of traffic flows along the edge from $k$ to $l$ can be calculated by summing across all origins and destinations the product of the value of bilateral trade flows and the intensity with which the edge is used along the optimally chosen route from the origin to the destination, i.e.:

<a id="eq:traffic"></a>

$$
\Xi_{kl}=\sum_{i\in\left\{ 1,...,N\right\} }\sum_{j\in\left\{ 1,...N\right\} }X_{ij}\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma},
$$

where $X_{ij}$ is the value of trade flows from $i$ to $j$. The expression for the intensity has the simple interpretation that the higher the cost of using the edge from $k$ to $l$ relative to the optimal route from $i$ to $j$, the less intensively it is used.

### Equilibrium

We now characterize the equilibrium of the economy.

#### A standard formulation of the equilibrium

Given CES preferences and imposing welfare equalization, the value of bilateral trade flows between any two locations can be written as:

<a id="eq:gravity"></a>

$$
X_{ij}=W^{1-\sigma}\left(\frac{A_{i}u_{j}}{\tau_{ij}}\right)^{\sigma-1}w_{i}^{1-\sigma}w_{j}^{\sigma}L_{j}.
$$

 The equilibrium wages and population must satisfy two market clearing conditions. First, the payments to labor in each location must equal that location's total sales, i.e.:

<a id="eq:eqm1"></a>

$$
w_{i}L_{i}=\sum_{j\in\left\{ 1,...,N\right\} }W^{1-\sigma}\left(\frac{A_{i}u_{j}}{\tau_{ij}}\right)^{\sigma-1}w_{i}^{1-\sigma}w_{j}^{\sigma}L_{j}.
$$

 Second, the payments to labor in each location must equal that location's total purchases, i.e.:

<a id="eq:eqm2"></a>

$$
w_{i}L_{i}=\sum_{j\in\left\{ 1,...,N\right\} }W^{1-\sigma}\left(\frac{A_{j}u_{i}}{\tau_{ji}}\right)^{\sigma-1}w_{j}^{1-\sigma}w_{i}^{\sigma}L_{i}.
$$

Combining equations [Equation](#eq:eqm1) and [Equation](#eq:eqm2) with the externalities equation [Equation](#eq:externalities) allows us to express the equilibrium distribution of populations and wages across locations as functions of the bilateral transportation costs. However, because those transportation costs arise endogenously from an optimal routing problem, it is more convenient to instead pursue a recursive formulation of the equilibrium, which we turn to next.

#### Recursive formulation of the equilibrium

Following ([Allen and Arkolakis 2022](#ref-AA_2022restud)) and ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), we substitute equation [Equation](#eq:tau_recursive) into equation [Equation](#eq:eqm1) to yield:


<a id="eq:recursive_eqm1"></a>

$$
\begin{aligned}
A_{i}^{1-\sigma}w_{i}^{\sigma}L_{i}= & W^{1-\sigma}u_{i}^{\sigma-1}w_{i}^{\sigma}L_{i}+\sum_{k\in\left\{ 1,..,N\right\} }\kappa_{ik}^{1-\sigma}A_{k}^{1-\sigma}w_{k}^{\sigma}L_{k}\nonumber \\
= & W^{1-\sigma}u_{i}^{\sigma-1}w_{i}^{\sigma}L_{i}+\sum_{k\in\mathcal{N}\left(i\right)}\kappa_{ik}^{1-\sigma}A_{k}^{1-\sigma}w_{k}^{\sigma}L_{k}.
\end{aligned}
$$


Similarly, substituting equation [Equation](#eq:tau_recursive) into equation [Equation](#eq:eqm2) yields:

<a id="eq:recursive_eqm2"></a>

$$
\begin{aligned}
w_{i}^{1-\sigma}u_{i}^{1-\sigma}=& W^{1-\sigma}A_{i}^{\sigma-1}w_{i}^{1-\sigma}+\sum_{k\in\left\{ 1,..,N\right\} }\kappa_{ki}^{1-\sigma}w_{k}^{1-\sigma}u_{k}^{1-\sigma}\nonumber \\
= & W^{1-\sigma}A_{i}^{\sigma-1}w_{i}^{1-\sigma}+\sum_{k\in\mathcal{N}\left(i\right)}\kappa_{ki}^{1-\sigma}w_{k}^{1-\sigma}u_{k}^{1-\sigma}.
\end{aligned}
$$

 There are two advantages of writing the equilibrium in this form. First, this formulation highlights that the equilibrium population and income in a location depend only on the population and income of its neighbors, i.e. the equilibrium can be written recursively, as emphasized by the second line of both equations. As we will show below, the recursive formulation directly characterize the general equilibrium impacts of transportation infrastructure improvements. This is because it allows us to express the equilibrium in terms of the transportation network rather than the equilibrium bilateral trade costs. The second advantage arises from the close relationship between equilibrium conditions [Equation](#eq:recursive_eqm1) and [Equation](#eq:recursive_eqm2) and equilibrium traffic flows. To see this, we first combine equation [Equation](#eq:traffic) with the gravity equation [Equation](#eq:gravity) to yield the following equation for equilibrium traffic flows:


<a id="eq:traffic_2"></a>

$$
\Xi_{kl}=\kappa_{kl}^{1-\sigma}\times P_{k}^{1-\sigma}\times\Pi_{l}^{1-\sigma},
$$

where $P_{k}^{1-\sigma}$ is the *inward market access* of location $k$ and $\Pi_{l}^{1-\sigma}\equiv\sum_{j\in\left\{ 1,...N\right\} }\tau_{lj}^{1-\sigma}P_{j}^{\sigma-1}w_{j}L_{j}$ is the *outward market access* of location $l$. Then applying the definition of the market access terms along with the equilibrium conditions [Equation](#eq:eqm1) and [Equation](#eq:eqm2) allow us to rewrite equations [Equation](#eq:recursive_eqm1) and [Equation](#eq:recursive_eqm2) as follows:


<a id="eq:recursive_eqm1a"></a>

$$
\Pi_{i}^{1-\sigma}=W^{1-\sigma}u_{i}^{\sigma-1}w_{i}^{\sigma}L_{i}+\sum_{k\in\mathcal{N}\left(i\right)}\kappa_{ik}^{1-\sigma}\Pi_{k}^{1-\sigma}
$$


<a id="eq:recursive_eqm2a"></a>

$$
P_{i}^{1-\sigma}=A_{i}^{\sigma-1}w_{i}^{1-\sigma}+\sum_{k\in\mathcal{N}\left(i\right)}\kappa_{ki}^{1-\sigma}P_{k}^{1-\sigma},
$$

i.e. the equilibrium system can be written as a recursive relationship between market access terms and a measure of the local economic activity in each location.

### The traditional social savings approach

Having defined the equilibrium, we turn to deriving how the aggregate welfare of the economy responds to changes in the underlying transportation network. We begin by presenting the "traditional\" social savings approach in our notation.

In introducing the "social savings approach\" as a means of evaluating the welfare impact of the introduction of the railroads, ([Fogel 1962](#ref-fogel1962quantitative)) (p.170) summarizes it as follows:

> ::: small
> In the year 1890, a certain bundle of agricultural commodities was shipped\... This pattern of shipments was carried out\... at some definite cost. With enough data, one could determine both this cost and the alternative cost of shipping exactly the same bundle of goods\... in exactly the same pattern without the railroad. The difference between these two amounts I call the social saving.
> :::

That is, the traditional social savings approach calculates the cost savings arising from an improvement in the transportation network holding constant the pattern of trade.

In our context, we are interested in how an infinitesimal improvement to a particular edge for a particular mode of the transportation network affects the aggregate welfare. Given the homothetic demand, iceberg trade costs, and normalizing the world income to one, the traditional social savings approach implies that the welfare elasticity from an improvement of a segment of the transportation network is simply equal to the observed value of traffic flowing across that segment, i.e.:


<a id="eq:trad"></a>

$$
\Delta W_{kl,m}^{trad}=\Xi_{kl,m}
$$

The traditional social savings approach fails to account for a number of adjustments that might occur in response to an infrastructure improvement, including changes route choice, changes in trade flows, and changes in the distribution of economic activity. How good an approximation is equation [Equation](#eq:trad)? The following proposition shows that in a special case, the traditional social savings approach is exactly correct:

<a id="thm:traditional"></a>

**Proposition 1**.

*Suppose that there are no agglomeration/dispersion externalities and no traffic congestion, i.e. $\alpha=\beta=\lambda_{m}=0$ for all $m\in\left\{ 1,...,M\right\}$. Then for any edge--mode $(k,l,m)$, the elasticity of aggregate welfare to any transportation infrastructure improvement is exactly equal to the traditional social savings approach, i.e.:

$$
-\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\Xi_{kl,m}.
$$

*

*Proof.* See Appendix [5.1](#sec:proofprop1). ◻

Proposition [1](#thm:traditional)---which extends results from the working paper version of ([Allen and Arkolakis 2022](#ref-AA_2022restud)) to incorporate multiple modes of transport---is, at first glance, quite surprising. It says that the traditional social savings approach, despite not accounting for the myriad general equilibrium responses, exactly captures the first order welfare benefits of a transportation infrastructure improvement. Put another way, the endogenous re-routing, changes in prices, changes in trade flows, and changes in the distribution of economic activity do not have (first-order) impacts on the welfare response to the infrastructure improvement. Why not? The answer is straightforward: in the absence of agglomeration/dispersion externalities and traffic congestion, the aggregate spatial economy is efficient, and so an envelope theorem result underlying the Hulten-like intuition (see e.g. ([Hulten 1978](#ref-hulten1978growth)) and ([Baqaee and Farhi 2019](#ref-baqaee2019macroeconomic))) applies: in terms of welfare, the general equilibrium responses to the infrastructure improvement are indeed second order.

When there are agglomeration/dispersion externalities and/or traffic congestion, however, the competitive equilibrium is generally not efficient and we have to account for these general equilibrium responses. We turn to this next.

### The extended social savings approach

We now turn towards studying how a marginal improvement to a single edge--mode of the transport network affects aggregate welfare in a spatial GE with agglomeration/dispersion externalities and/or traffic congestion. Relative to a frictionless (efficient) benchmark, externalities in production and amenities ($\alpha,\beta$) and congestion in transport ($\lambda_m$) generally make equilibrium responses inefficient. Yet the equilibrium admits a recursive market-access representation, which allows us to trace the evolution of externalities and congestion *tractably*: local changes feed into neighbors' market access, which in turn adjust flows and congestion, recursively propagating throughout the network.

<a id="thm:welfare"></a>

**Proposition 2**. *Consider any strength of agglomeration/dispersion externalities $\alpha$ and $\beta$ and any strength of traffic congestion $\left\{ \lambda_{m}\right\}$. Then for any edge--mode $(k,l,m)$, the welfare elasticity is:*

*

$$
\frac{d\ln W}{d\ln\kappa_{kl}}=\rho\Xi_{kl,m}\left(\mathcal{M}_{k}^{in}+\mathcal{M}_{l}^{out}\right),
$$

where $\rho\equiv\frac{1+\alpha+\beta}{1+\beta(\sigma-1)+\alpha\sigma}$ and $\mathcal{M}_{k}^{in}$ and $\mathcal{M}_{l}^{out}$ are local multipliers defined in Appendix [5.2](#sec:proofprop2) that depend only on model elasticities and observable data.*

*Proof.* See Appendix [5.2](#sec:proofprop2). ◻

Proposition [2](#thm:welfare) extends Proposition [1](#thm:traditional) to the general case to incorporate agglomeration and dispersion externalities and/or traffic congestion within the various modes of transportation. The following Corollary shows that in the special case where there are no agglomeration and dispersion externalities or traffic congestion, Proposition [2](#thm:welfare) simplifies to Proposition [1](#thm:traditional):

<a id="cor:fogel"></a>

**Corollary 1**. *Suppose that there are no agglomeration/dispersion externalities and no traffic congestion, i.e. $\alpha=\beta=\lambda_{m}=0$ for all $m\in\left\{ 1,...,M\right\}$. Then $\rho=\mathcal{M}_{k}^{in}+\mathcal{M}_{l}^{out}=1$ for all $k,l\in\left\{ 1,...,N\right\}$, i.e. Proposition [2](#thm:welfare) simplifies to Proposition [1](#thm:traditional).*

*Proof.* See Appendix [5.3](#sec:proofcor). ◻

Accordingly, in what follows, we refer to Proposition [2](#thm:welfare) as the \"extended\" social savings approach. Like Proposition [1](#thm:traditional), Proposition [2](#thm:welfare) remains tractable, as it only depends on observable data (the value of traffic flows, populations, and the value of output and expenditure in each location) and model elasticities. Unlike Proposition [1](#thm:traditional), however, Proposition [2](#thm:welfare) shows that in the presence of agglomeration/dispersion externalities and/or traffic congestion, the general equilibrium impacts of the transportation infrastructure improvement on the entirety of the trading network have first order welfare effects. These general equilibrium impacts are summarized by the local multipliers $\mathcal{M}_{k}^{in}$ and $\mathcal{M}_{l}^{out}$, which represent how a local change propagates through the entire network. Because the equilibrium is recursive, better access at $k$ improves its neighbors' access, which in turn improves their neighbors, and so forth; the same logic applies symmetrically for $l$. In this way, the multipliers summarize the full cascade of feedback effects.

Both agglomeration/dispersion externalities and traffic congestion affect how this propagation unfolds. If externalities are net congestive (i.e. $\alpha+\beta<0$), then the competitive equilibrium has more concentration of population then the planner would prefer (see ([Fajgelbaum and Gaubert 2020](#ref-fajgelbaumgaubert2020optimal))). As a result, transportation infrastructure improvements that tend to spread out the equilibrium distribution of economic activity (e.g. those in more rural areas) result in an additional welfare gain beyond that which the traditional social savings approach would capture.

Similarly, traffic congestion affects how transportation improvements propagate through the network and ultimately affect global welfare. When traffic increases, costs $\kappa_{ij,m}$ also rise if $\lambda_m>0$, which attenuate the transmission of improvements. Strong congestion can thus substantially offset the local gains.

How much do these additional effects change the distribution of welfare impacts of various real world infrastructure improvements? To answer this, we now turn to evaluating the potential gains of improving each segment of the U.S. interstate highway system.

<a id="sec:data_cf"></a>

## Quantitative Evaluation of Transportation Improvements: The U.S. Interstate Highway System

<a id="sec:data"></a>

### Data and Calibration

We rely on the dataset constructed by ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)) who map out the entirety of the U.S. freight network--rail, road, inland waterway, port, and intermodal--terminal data---into a single, geo-referenced network with consistent traffic measures. The backbone of the network comes from TIGER shapefiles from the Census Bureau, which provide line features for Class I rail corridors and the Interstate Highway System, as well as polygon features for navigable rivers and coastal shipping lanes.

#### Transport mode traffic and route

Traffic densities are harmonized across transport modes. For rail, we use the confidential Carload Waybill sample maintained by the Surface Transportation Board, specifically focusing on intermodal containers moved by the seven Class I carriers. Rail traffic routes---including rail station origins, interchange points, and destinations---are mapped to the TIGER rail graph, and freight tonnage is routed along the shortest feasible paths connecting these stations in sequence. Highway traffic is represented by Average Annual Daily Traffic from the 2012 Highway Performance Monitoring System (HPMS). Highway traffic counts are adjusted based on segment length when a single road segment corresponds to multiple links in the network graph, so that each link reflects the proportion of traffic it carries along the full segment. Inland-waterway tonnage is from the Waterborne Commerce Statistics of the U.S. Army Corps of Engineers (USACE) and routed along the digitized river network.

#### Intermodal terminals

Intermodal transfer points are added from the National Transportation Atlas Database (NTAD) and from the Port Performance Freight Statistics Program. These facilities include 30 deep-sea container ports, 54 inland rail--truck ramps, and the rail--barge trans-shipment nodes along the Mississippi and Illinois Rivers. Together they cover 98 percent of U.S. containerized trade by volume. After traffic is assigned, the resulting multimodal graph captures more than 90 percent of ton-miles recorded in the Freight Analysis Framework. Trucks dominate short hauls---over 90 percent of freight within 100 miles---while rail and multimodal routes account for more than 70 percent of shipments that travel beyond 1000 miles ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), motivating the transportation network framework developed in Section [2](#sec:model).

#### Calibration.

Following ([Fuchs and Wong 2026](#ref-FuchsWong2024Multimodal)), we overlay the HPMS traffic counts, confidential rail waybills, USACE waterborne tonnage, port throughput, and NTAD intermodal locations onto TIGER shapefiles, then collapse the layers to a sparse graph with 288 nodes (CBSAs, ports, and terminals) and 704 links (highway, rail, or barge arcs). Fundamental productivities and amenities are recovered so that the baseline equilibrium exactly matches 2018 county GDP and population, while mode-specific flows replicate the 2012 Commodity Flow Survey. Structural parameters follow the same two-step procedure as the multimodal paper: spatial fundamentals are pinned down by external estimates $(\sigma = 9,\;\alpha = 0.10,\;\beta = -0.30)$; road-congestion elasticity is taken from Allen and Arkolakis ([2022](#ref-AA_2022restud)) $(\lambda_{\text{road}} = 0.092)$; and the port-congestion elasticity is taken from Fuchs and Wong ([2026](#ref-FuchsWong2024Multimodal)) from an IV estimate of ship dwell-time on AIS data $(\lambda_{\text{port}} = 0.096)$.[^3] Since this paper focuses on the impact of highway infrastructure improvements, Figure [1](#fig:hpms_map) presents the sparse-graph representation of the Interstate Highway System used in our calibration.


<a id="fig:hpms_map"></a>

> **Traffic on the U.S. Interstate Highway System**
>
> Figure available in the [PDF](/research/EvalTransportImprovements_AFW_draft.pdf).
>
> Notes: The map displays the sparse‐graph representation of the Interstate Highway System used in our calibration. Each polyline corresponds to an interstate link defined from the TIGER shapefiles; line width is proportional to log vehicle‐miles travelled (VMT) in 2012. VMT on link e is computed as AADTe × lengthe × 365, where AADTe is the Average Annual Daily Traffic count reported in the 2012 Highway Performance Monitoring System (HPMS). Where multiple HPMS segments overlap a single graph edge we assign a length‐weighted mean AADT. The resulting network covers 96 % of interstate VMT recorded in HPMS and serves as the road layer in our multimodal freight model. Major freight corridors—e.g. I‐5 on the West Coast, I‐80/I‐90 across the Great Lakes, and I‐95 along the Eastern Seaboard—emerge as the thickest arcs. Grey nodes mark the 132 Core‐Based Statistical Areas (CBSAs) that act as origins and destinations in the quantitative analysis. Sources: TIGER/Line Shapefiles (Census Bureau); HPMS 2012 traffic counts (Federal Highway Administration); authors’ calculations.


<a id="sec:cf_trad"></a>

### Traditional social savings approach

We begin by calculating the elasticity of aggregate welfare to an improvement on each segment of the U.S. interstate highway system using the traditional social savings approach. From Proposition [1](#thm:traditional), this is simply equal to the fraction of aggregate economic activity flowing over that segment.

[Figure](#fig:pass1_map) presents the welfare gain results from a one percent decrease in the cost of accessing each highway segment, where the line width is proportional to the welfare elasticity. Segments with the largest welfare elasticities are those where the traffic is greatest, including the Eastern seaboard and broad "T-junctions" anchored on Chicago, Memphis, and Dallas---the great inland hubs where rail or barge lines connect to the Interstate grid; indeed, apart from the change in scales, [Figure](#fig:pass1_map) is identical to Figure [1](#fig:hpms_map).

[Figure](#fig:pass1_scatter) compares the welfare elasticities to the observed share of highway traffic. As is evident, the correlation between the two in the traditional approach is perfect.


<a id="fig:pass5_map"></a>
<a id="fig:pass1_map"></a>

> **Welfare gains from transportation infrastructure improvements**
>
> Figure available in the [PDF](/research/EvalTransportImprovements_AFW_draft.pdf).
>
> Notes: This figure depicts the elasticity of aggregate welfare to an improvement of each segment of the U.S. interstate highway system. An improvement of each segment is modeled as a one percent reduction in the cost of accessing that segment. Panel (a) follows the traditional social savings approach, which ignores traffic congestion and agglomeration/congestion externalities. Panel (b) employs the “extended” social savings approach of Proposition 1 that incorporates traffic congestion and agglomeration/congestion externalities. Sources: authors’ calculations from the Carload Waybill Sample (STB), Highway Performance Monitoring System (FHWA), Waterborne Commerce Statistics (USACE), AIS vessel tracks (Marine Cadastre), and Port Performance Freight Statistics (DOT).


<a id="fig:pass5_scatter"></a>
<a id="fig:pass1_scatter"></a>

> **Link–level welfare elasticities against highway traffic shares: Traditional vs Extended Social Savings Approaches**
>
> Figure available in the [PDF](/research/EvalTransportImprovements_AFW_draft.pdf).
>
> Notes: This figure compares the elasticity of aggregate welfare to an improvement of each segment of the U.S. interstate highway system (vertical axis) to the observed value of baseline traffic (horizontal axis). An improvement of each segment is modeled as a one percent reduction in the cost of accessing that segment. Panel (a) follows the traditional social savings approach, which ignores traffic congestion and agglomeration/congestion externalities. Panel (b) employs the “extended” social savings approach of Proposition 1 that incorporates traffic congestion and agglomeration/congestion externalities. Units are in 1/1000’s. Sources: Traffic data comes from the HPMS 2012 vehicle-miles (FHWA). Rail, waterway, and port statistics come from the Carload Waybill Sample (STB), Waterborne Commerce Statistics (USACE), AIS vessel tracks (Marine Cadastre), and Port Performance Freight Statistics (DOT).


Quantitatively, a one-percent cost cut on the median interstate segment raises real income by 0.023 percent, while the average gain across all 704 arcs is 0.028 percent because the distribution of elasticities is right-skewed. The top decile of links, dominated by the approaches to Los Angeles, Chicago, and New York, deliver gains ten times the median.

<a id="sec:cf_ex"></a>

### Extended social savings approach

We now contrast the traditional social savings approach with the "extended" social savings approach of Proposition [2](#thm:welfare) that incorporates agglomeration/dispersion externalities and traffic congestion.[^4]

Relative to the traditional social savings approach, transportation infrastructure improvements result in several additional forces. Because we calibrate the agglomeration/dispersion externalities to be net dispersive, the relative benefit of improving highway segments in more populated areas falls. In addition, improving highway segments increase the traffic on those segments, partially reducing the gain through additional congestion.

Figure [2](#fig:pass5_map) visualizes the equilibrium welfare gains incorporating all these effects. The gains from improving highway spokes into Chicago, Dallas, Memphis, and the Eastern seaboard continue to stand out, though their magnitude (thickness) is attenuated relative to the traditional approach. This attenuation reflects the fact that additional traffic on the spokes increases congestion, partially offsetting the welfare gains. At the same time, the welfare gains of highway segments in less populated areas become relatively larger, as the traffic congestion and dispersive externalities are less strong in these areas.

These mechanisms leave a much more dispersed pattern in the scatterplot in Figure [3](#fig:pass5_scatter), illustrating that in the presence of traffic congestion and agglomeration / dispersion externalities the strategic value of a segment hinges on the full general equilibrium structure of the network, not merely on the traffic it carries before the improvement. The correlation between the welfare elasticities and traffic shares here is 0.938, as opposed to one under the traditional approach.

In sum, incorporating agglomeration/dispersion externalities and traffic congestion amplifies the importance of system interactions and leads to substantial deviations from the traditional social savings approach. Upgrading a link can be worth less than suggested by the pure cost savings on that link, yet worth more than suggested by road data alone once spillovers onto rail, barge, and competing highways are counted. Recognizing these interactions is essential for ranking investments when scarce dollars must be allocated across a tightly coupled multimodal freight system.

<a id="sec:end"></a>

## Conclusion

The purpose of this paper has been to derive new expressions for the welfare impacts of transportation infrastructure improvements. There are two primary conclusions.

First, the traditional social savings approach pioneered by ([Fogel 1964](#ref-Fogel1964Railroads)) is surprisingly robust: in the absence of agglomeration/dispersion externalities and traffic congestion, it exactly captures the first order welfare impacts even in an economy where route choice, mode choice, prices, trade flows, and populations endogenously respond to changes in the transportation network. However, in the presence of agglomeration/dispersion externalities or traffic congestion, these various general equilibrium forces now have first-order impacts on the welfare impacts of transportation improvements.

Second, despite these potentially complicated general equilibrium forces, it is still possible to tractably characterize the welfare impacts of transportation infrastructure improvements using an extended social savings approach. Applying this approach to the U.S. interstate highway system suggests that the extended approach can vary substantially from the traditional approach, suggesting that in practice these general equilibrium effects are quantitatively important.

Looking forward, we see promise in extending the framework presented here to incorporate increasingly realistic infrastructure networks without sacrificing tractability in a way that is both rigorous and accessible to policy-makers.


## Proofs

<a id="sec:proofprop1"></a>

### Proof of Proposition 1

In this section, we prove the welfare--elasticity formula of Proposition [1](#thm:traditional).

The proof proceeds in three steps. First, we derive the elasticity of aggregate welfare with respect to a change in bilateral trade costs. Then, we derive the elasticity of bilateral trade costs to a change in the transportation network. Finally, we combine the results using the chain rule. The proof closely follows derivations from an earlier working paper version of ([Allen and Arkolakis 2022](#ref-AA_2022restud)), extended to include multiple modes of transport.

Consider first the elasticity of aggregate welfare with respect to a change in bilateral trade costs. Consider the following maximization problem where a "planner" chooses wages, population, and welfare to maximizes the (equalized) log welfare across locations subject to the constraint that aggregate labor income is equal to aggregate trade flows:

<a id="eq:max-1"></a>

$$
\begin{aligned}
\max_{\left\{ \left\{ w_{i}\right\} ,\left\{ L_{i}\right\} ,W\right\} }\ln W & \text{ subject to:}\nonumber \\
\text{ }\frac{1}{1-\sigma}\sum_{i=1}^{N}w_{i}L_{i} & =\frac{1}{1-\sigma}\sum_{i=1}^{N}\sum_{j=1}^{N}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W^{1-\sigma}w_{j}^{\sigma}L_{j}
\end{aligned}
$$

 The associated Lagrangian is:

$$
\mathcal{L}:\ln W-\frac{1}{1-\sigma}\lambda\left(\sum_{i}\sum_{j}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W^{1-\sigma}w_{j}^{\sigma}L_{j}-\sum_{i}w_{i}L_{i}\right)
$$

 The first order conditions of this maximization problem can be written as:

<a id="eq:FOC_2"></a>
<a id="eq:FOC_3"></a>

$$
\begin{aligned}
\frac{\partial\mathcal{L}}{\partial\ln W}=0:\text{ } & \frac{1}{W}=\lambda\sum_{i}\sum_{j}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W^{-\sigma}w_{j}^{\sigma}L_{j}\iff\nonumber \\
\lambda & =\frac{1}{Y^{W}}\nonumber \\
\frac{\partial\mathcal{L}}{\partial\ln w_{i}}=0:\text{ } & w_{i}L_{i}=\left(1-\sigma\right)\sum_{j=1}^{N}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W_{j}^{1-\sigma}w_{j}^{\sigma}L_{j}+\sigma\sum_{j}\left(\frac{\tau_{ji}}{A_{j}u_{i}}\right)^{1-\sigma}w_{j}^{1-\sigma}W^{1-\sigma}w_{i}^{\sigma}L_{i}\\
\frac{\partial\mathcal{L}}{\partial\ln L_{i}}=0: & w_{i}L_{i}=W^{1-\sigma}\sum_{j}\left(\frac{\tau_{ji}}{A_{j}u_{i}}\right)^{1-\sigma}w_{j}^{1-\sigma}w_{i}^{\sigma}L_{i}
\end{aligned}
$$

 Substituting equation ([Equation](#eq:FOC_3)) into equation ([Equation](#eq:FOC_2)) yields:

<a id="eq:FOC_2b"></a>

$$
\begin{aligned}
w_{i}L_{i} & =W^{1-\sigma}\sum_{j}\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}w_{j}^{\sigma}L_{j}
\end{aligned}
$$

 The first order conditions ([Equation](#eq:FOC_3)) and ([Equation](#eq:FOC_2b)) correspond to the equilibrium conditions [Equation](#eq:eqm1) and [Equation](#eq:eqm2), i.e. this "planner" problem corresponds to the competitive equilibrium. As a result, we can apply the envelope theorem to determine the elasticity of welfare to a change in the (endogenous) trade cost $\tau_{ij}$, which yields:

$$
\frac{\partial\ln W}{\partial\ln\tau_{ij}}=\frac{\partial\mathcal{L}}{\partial\tau_{ij}}\times\tau_{ij}=\lambda\left(\frac{\tau_{ij}}{A_{i}u_{j}}\right)^{1-\sigma}w_{i}^{1-\sigma}W^{1-\sigma}w_{j}^{\sigma}L_{j}=\frac{X_{ij}}{Y^{W}},
$$

 or, given a choice of numeraire $Y^{W}=1$, more succinctly as:

<a id="eq:AA_elast_3"></a>

$$
-\frac{\partial\ln W}{\partial\ln\tau_{ij}}=X_{ij},
$$

 i.e. the elasticity of welfare to a change in bilateral trade costs is simply equal to the value of bilateral trade flows.

Now consider the elasticity of bilateral trade costs to a change in the underlying infrastructure network. From the chain rule, we have:

<a id="eq:traffic_1"></a>

$$
\frac{\partial\ln\tau_{ij}}{\partial\ln\bar{\kappa}_{kl,m}}=\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}\times\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}.
$$

 Given the CES nest across modes from equation [Equation](#eq:mode-ces), we can immediately derive that the elasticity of total link costs to a change in any mode in the infrastructure network is simply equal to the modes share in the bilateral traffic, i.e.:



$$
\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}=s_{kl,m}.
$$

 To calculate $\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}$, we begin by re-writing equation [Equation](#eq:tau) in matrix notation and inverting, which yields:

<a id="eq:3"></a>

$$
\boldsymbol{\tau}^{1-\sigma}=\left(\mathbf{I}-\boldsymbol{\kappa}^{1-\sigma}\right)^{-1},
$$

where $\boldsymbol{\tau}^{1-\sigma}$ is the $N\times N$ matrix with $i,j^{th}$ element $\tau_{ij}^{1-\sigma}$ and $\boldsymbol{\kappa}^{1-\sigma}$ is similarly the $N\times N$ matrix with $i,j^{th}$ element $\kappa_{ij}^{1-\sigma}.$ Differentiating equation ([Equation](#eq:3)) yields:

<a id="eq:traffic_3"></a>

$$
\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}=\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma}.
$$

 Finally, we apply the chain rule. In the absence of traffic congestion, the elasticity of aggregate welfare to changes in the infrastructure network can be written as:

<a id="eq:welfare_1"></a>

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\sum_{i\in\left\{ 1,..,N\right\} }\sum_{j\in\left\{ 1,...,N\right\} }\frac{\partial\ln W}{\partial\ln\tau_{ij}}\frac{\partial\ln\tau_{ij}}{\partial\ln\kappa_{kl}}\frac{\partial\ln\kappa_{kl}}{\partial\ln\bar{\kappa}_{kl,m}}.
$$

 Substituting equations ([Equation](#eq:AA_elast_3)), ([Equation](#eq:traffic_2)), and ([Equation](#eq:traffic_3)) into equation ([Equation](#eq:welfare_1)) yields:

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\sum_{i\in\left\{ 1,..,N\right\} }\sum_{j\in\left\{ 1,...,N\right\} }X_{ij}\left(\frac{\tau_{ik}\kappa_{kl}\tau_{lj}}{\tau_{ij}}\right)^{1-\sigma}s_{kl,m},
$$

 which from equation [Equation](#eq:traffic) is simply equal to the value of traffic along the edge, i.e.:

$$
\frac{\partial\ln W}{\partial\ln\bar{\kappa}_{kl,m}}=\Xi_{kl,m},
$$

 as claimed.

<a id="sec:proofprop2"></a>

### Proof of Proposition [2](#thm:welfare)

We begin from the two accounting identities linking productivity $A_i$, amenity $u_i$, wages $w_i$, local population $L_i$, and bilateral frictions $\kappa_{ij}$:

<a id="eq:start-a"></a>
<a id="eq:start-b"></a>

$$
\begin{aligned}
A_i^{1-\sigma} w_i^\sigma L_i
&= W^{1-\sigma} u_i^{\sigma-1} w_i^\sigma L_i
  + \sum_{k\in\mathcal{N}(i)} \kappa_{ik}^{1-\sigma} A_k^{1-\sigma} w_k^\sigma L_k,
\\
w_i^{1-\sigma} u_i^{1-\sigma}
&= W^{1-\sigma} A_i^{\sigma-1} w_i^{1-\sigma}
  + \sum_{k\in\mathcal{N}(i)} \kappa_{ki}^{1-\sigma} w_k^{1-\sigma} u_k^{1-\sigma}.

\end{aligned}
$$

 Allow for nested modal choice and congestion on each bilateral link,

$$
\kappa_{ik}\equiv\left(\sum_{m=0}^{M}\kappa_{ik,m}^{\eta}\right)^{1/\eta},\quad s_{ik,m}\equiv\frac{\kappa_{ik,m}^{\eta}}{\sum_{n}\kappa_{ik,n}^{\eta}},\quad\kappa_{ik,m}=\bar{\kappa}_{ik,m}\Xi_{ik,m}^{\lambda_{m}}.
$$


We substitute $u_i=\bar u_i L_i^\beta$ and $A_i=\bar A_i L_i^\alpha$ to separate size from idiosyncratic components.

$$
\begin{aligned}
& \bar{A}_i^{1-\sigma} L_i^{\alpha(1-\sigma)} w_i^\sigma L_i=W^{1-\sigma} \bar{u}_i^{\sigma-1} L_i^{\beta(\sigma-1)} w_i^\sigma L_i+\sum_{k \in \mathcal{N}(i)} \kappa_{i k}^{1-\sigma} \bar{A}_k^{1-\sigma} L_k^{\alpha(1-\sigma)} w_k^\sigma L_k, \\
& \bar{u}_i^{1-\sigma} L_i^{\beta(1-\sigma)} w_i^{1-\sigma}=W^{1-\sigma} \bar{A}_i^{\sigma-1} L_i^{\alpha(\sigma-1)} w_i^{1-\sigma}+\sum_{k \in \mathcal{N}(i)} \kappa_{k i}^{1-\sigma} \bar{u}_k^{1-\sigma} L_k^{\beta(1-\sigma)} w_k^{1-\sigma} .
\end{aligned}
$$


To make the system linear in logs in a convenient set of endogenous variables, define

$$
x_i := \Big(W^{-\frac{1}{1+\alpha+\beta}} L_i\Big)^{1+\beta(\sigma-1)} w_i^{\sigma},
\qquad
y_i := \Big(W^{-\frac{1}{1+\alpha+\beta}} L_i\Big)^{\alpha(\sigma-1)} w_i^{1-\sigma},
$$

with $e:=1+\beta(\sigma-1)+\alpha\sigma$ and $D:=(\alpha+\beta)(\sigma-1)$. Inverting gives the useful back-substitution

$$
w_i= x_i^{\alpha/e}\, y_i^{-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}},
\qquad
L_i = W^{\frac{1}{1+\alpha+\beta}}\, x_i^{1/e}\, y_i^{\frac{\sigma}{(\sigma-1)e}}.
$$

 Dropping $\bar A_i,\bar u_i$, the two balance conditions can be compactly expressed by introducing the shorthand coefficients

$$
A:=\frac{1+\alpha}{e},\quad
B:=\frac{\sigma(\alpha+\beta)}{e},\quad
C:=\frac{D}{e}=\frac{(\alpha+\beta)(\sigma-1)}{e},\quad
E:=1-\frac{\sigma(\alpha+\beta)}{e}.
$$

 Let the welfare aggregator be

$$
Z_i:=x_i^{1/e}y_i^{\sigma/((\sigma-1)e)},\qquad
\mathcal{A}:=\Big(\tfrac{\sum_m Z_m}{\bar L}\Big)^{\sigma-1},
$$

and define the "sums" and shares

$$
S_i^{(1)}:=\mathcal{A}x_i+\sum_{k\in\mathcal{N}(i)}\kappa_{ik}^{1-\sigma}x_k^{A}y_k^{-B},
\qquad
S_i^{(2)}:=\mathcal{A}y_i+\sum_{k\in\mathcal{N}(i)}\kappa_{ki}^{1-\sigma}x_k^{-C}y_k^{E},
$$


$$
s_i^x:=\frac{\mathcal{A}x_i}{S_i^{(1)}},\quad s_i^y:=\frac{\mathcal{A}y_i}{S_i^{(2)}},\qquad
\mu_{ij}:=\frac{\kappa_{ij}^{1-\sigma}x_j^{A}y_j^{-B}}{S_i^{(1)}},\quad
\lambda_{ji}:=\frac{\kappa_{ji}^{1-\sigma}x_j^{-C}y_j^{E}}{S_i^{(2)}}.
$$

 By construction $s_i^x+\sum_j\mu_{ij}=1$ and $s_i^y+\sum_j\lambda_{ji}=1$. Using these shares, the $2N$ equations in the unknowns $(\ln x,\ln y)$ can be written as $G(\ln x,\ln y)=0$ with

$$
\begin{aligned}
G1_i&:=\ln S_i^{(1)}-A\ln x_i+B\ln y_i,\quad i=1,\dots,N,\\
G2_i&:=\ln S_i^{(2)}+C\ln x_i-E\ln y_i,\quad i=1,\dots,N-1,\\
G2_N&:=\frac{\alpha}{e}\ln x_N-\frac{\beta(\sigma-1)+1}{(\sigma-1)e}\ln y_N
\quad\text{(linearized normalization $w_N=1$).}
\end{aligned}
$$


Differentiating, we obtain,

$$
\begin{gathered}
\frac{\partial G 1_i}{\partial \ln x_j}=\left(s_i^x-A\right) 1\{i=j\}+A \mu_{i j}+\frac{\sigma-1}{e} s_i^x \frac{L_j}{L}+(1-\sigma) \sum_k \mu_{i k} \sum_m s_{i k, m} \lambda_m \frac{\partial \ln \Xi_{i k, m}}{\partial \ln x_j}, \\
\frac{\partial G 1_i}{\partial \ln y_j}=B 1\{i=j\}-B \mu_{i j}+\frac{\sigma}{e} s_i^x \frac{L_j}{\bar{L}}+(1-\sigma) \sum_k \mu_{i k} \sum_m s_{i k, m} \lambda_m \frac{\partial \ln \Xi_{i k, m}}{\partial \ln y_j}, \\
\frac{\partial G 2_i}{\partial \ln x_j}=C\left(1\{i=j\}-\lambda_{j i}\right)+\frac{\sigma-1}{e} s_i^y \frac{L_j}{\bar{L}}+(1-\sigma) \sum_k \lambda_{k i} \sum_m s_{k i, m} \lambda_m \frac{\partial \ln \Xi_{k i, m}}{\partial \ln x_j}, \\
\frac{\partial G 2_i}{\partial \ln y_j}=\left(s_i^y-E\right) 1\{i=j\}+E \lambda_{j i}+\frac{\sigma}{e} s_i^y \frac{L_j}{\bar{L}}+(1-\sigma) \sum_k \lambda_{k i} \sum_m s_{k i, m} \lambda_m \frac{\partial \ln \Xi_{k i, m}}{\partial \ln y_j} .
\end{gathered}
$$

For the normalization row we have,

$$
\frac{\partial G2_{N}}{\partial\ln x_{j}}=\frac{\alpha}{e}1\{j=N\},\quad\frac{\partial G2_{N}}{\partial\ln y_{j}}=-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}1\{j=N\}
$$

 Ordering equations as $\left(G1_{1..N};G2_{1..N-1};G2_N\right)$ vs. $(\ln x_{1..N};\ln y_{1..N})$ gives the block Jacobian (treating $W$ as fixed):

<a id="eq:DGcompact-new"></a>

$$
DG^{(W\text{ fixed})}=
\begin{bmatrix}
S_x - A I + A\,\mu & B\,I - B\,\mu\\[2pt]
C\,(I-\lambda_{1:(N-1),:}^\top)
& S_y^{(N-1)} - E\,(I_{N-1}-\lambda_{1:(N-1),:}^\top)\\
\hline \frac{\partial G2_N}{\partial\ln x} & \frac{\partial G2_N}{\partial\ln y}
\end{bmatrix}+\Delta^{\text {cong }},
$$

where $S_x=\mathrm{diag}(s_1^x,\dots,s_N^x)$ and $S_y^{(N-1)}=\mathrm{diag}(s_1^y,\dots,s_{N-1}^y)$, and the final normalization row replaces $G2_N$. Furthermore, $\Delta^{\text{cong}}$ collects the four congestion-feedback blocks, i.e.

$$
\Delta^{\text{cong }}=\left[\begin{array}{cc}
(1-\sigma)\sum_{k}\mu_{ik}\sum_{m}s_{ik,m}\lambda_{m}\frac{\partial\ln\Xi_{ik,m}}{\partial\ln x_{j}} & (1-\sigma)\sum_{k}\mu_{ik}\sum_{m}s_{ik,m}\lambda_{m}\frac{\partial\ln\Xi_{ik,m}}{\partial\ln y_{j}},\\
(1-\sigma)\sum_{k}\lambda_{ki}\sum_{m}s_{ki,m}\lambda_{m}\frac{\partial\ln\Xi_{ki,m}}{\partial\ln x_{j}} & (1-\sigma)\sum_{k}\lambda_{ki}\sum_{m}s_{ki,m}\lambda_{m}\frac{\partial\ln\Xi_{ki,m}}{\partial\ln y_{j}}
\end{array}\right]
$$


Because $\mathcal{A}$ depends on $(x,y)$ via $\sum_m Z_m$, the Jacobian with *fixed aggregate labor* (endogenous $W$) adds a rank-two adjustment:

$$
DG^{(\bar L\text{ fixed})}
= DG^{(W\text{ fixed})}
+ \frac{1}{e}\begin{bmatrix}
(\sigma-1)s^x (L/\bar L)^\top & \sigma s^x (L/\bar L)^\top\\[2pt]
\big.(\sigma-1)s^y (L/\bar L)^\top\big|_{1:(N-1)} &
\big.\sigma s^y (L/\bar L)^\top\big|_{1:(N-1)}
\end{bmatrix},
$$

and

$$
\frac{\partial G2_N}{\partial\ln x_j}=\frac{\alpha}{e}\mathbf{1}\{j=N\},\qquad
\frac{\partial G2_N}{\partial\ln y_j}=-\frac{1+\beta(\sigma-1)}{(\sigma-1)e}\mathbf{1}\{j=N\}.
$$


A perturbation of a single bilateral friction $\ln\kappa_{kl,m}$ enters $G1_k$ proportionally to $(1-\sigma)\mu_{kl}s_{kl,m}$ and $G2_l$ proportionally to $(1-\sigma)\lambda_{kl}s_{kl,m}$ (no effect on the normalization row). By the implicit-function theorem this yields

$$
\frac{\partial\ln y_i}{\partial\ln\kappa_{kl,m}}
=-(1-\sigma)s_{kl,m}\Big[(DG)^{-1}_{y,ik,1}\mu_{kl}+\mathbf{1}\{l\neq N\}(DG)^{-1}_{y,il,2}\lambda_{kl}\Big],
$$


$$
\frac{\partial\ln x_i}{\partial\ln\kappa_{kl,m}}
=-(1-\sigma)s_{kl,m}\Big[(DG)^{-1}_{x,ik,1}\mu_{kl}+\mathbf{1}\{l\neq N\}(DG)^{-1}_{x,il,2}\lambda_{kl}\Big].
$$

 Aggregating to welfare with the weighting by fixed aggregate labor,

$$
\frac{\partial \ln W}{\partial \ln \kappa_{kl,m}}
= -\frac{1+\alpha+\beta}{e}\sum_i\frac{L_i}{\bar L}
\left(\frac{\partial\ln x_i}{\partial\ln\kappa_{kl,m}}
+\frac{\sigma}{\sigma-1}\frac{\partial\ln y_i}{\partial\ln\kappa_{kl,m}}\right),
$$

and substituting the responses produces an edge--by--nodes decomposition

$$
\begin{aligned}
\frac{d \ln W}{d \ln \kappa_{k l}}=\frac{1+\alpha+\beta}{e}s_{kl,m} & \left\{\mu_{k l} \sum_i \frac{L_i}{\bar{L}}\left[(1-\sigma)(D G)_{x, i k, 1}^{-1}+\sigma(D G)_{y, i k, 1}^{-1}\right]\right. \\
& \left.+1\{l \neq N\} \lambda_{k l} \sum_i \frac{L_i}{\bar{L}}\left[(1-\sigma)(D G)_{x, i l, 2}^{-1}+\sigma(D G)_{y, i l, 2}^{-1}\right]\right\}
\end{aligned}
$$


Defining, $\rho\equiv\frac{1+\alpha+\beta}{e}$, we obtain,


$$
\frac{d\ln W}{d\ln\kappa_{kl,m}}=\rho\Xi_{kl,m}\left(\mathcal{M}_{k}^{\text{in }}+\mathcal{M}_{l}^{\text{out }}\right)
$$

where,

$$
\mathcal{M}_{k}^{\text{in }}\equiv\frac{1}{\Xi_{k}}\sum_{i}\frac{L_{i}}{\bar{L}}\left[(1-\sigma)(DG)_{x,ik,1}^{-1}+\sigma(DG)_{y,ik,1}^{-1}\right]
$$


$$
\mathcal{M}_{l}^{\text{out }}\equiv1\{l\neq N\}\frac{1}{\Xi_{l}}\sum_{i}\frac{L_{i}}{\bar{L}}\left[(1-\sigma)(DG)_{x,il,2}^{-1}+\sigma(DG)_{y,il,2}^{-1}\right]
$$


as stated.

<a id="sec:proofcor"></a>

### Proof of Corollary [1](#cor:fogel)

With $\alpha=\beta=0$ we have $e=1$ and $D=0$. The log--linearizing variables reduce to

$$
x_i \;=\; W^{-1} L_i\, w_i^\sigma,
\qquad
y_i \;=\; w_i^{1-\sigma},
$$

and, under fixed aggregate labor $\sum_i L_i=\bar L$, the welfare aggregator is

$$
Z_i:=x_i\,y_i^{\sigma/(\sigma-1)},
\qquad
\mathcal{A}:=\Big(\tfrac{\sum_m Z_m}{\bar L}\Big)^{\sigma-1}.
$$

 The two balance equations become

<a id="eq:fogel-x"></a>
<a id="eq:fogel-y"></a>

$$
\begin{aligned}
x_i &= \mathcal{A}\,x_i + \sum_{k} \kappa_{ik}^{1-\sigma} x_k,
\\
y_i &= \mathcal{A}\,y_i + \sum_{k} \kappa_{ki}^{1-\sigma} y_k.

\end{aligned}
$$

 Define

$$
S_i^{(1)}:=\mathcal{A}x_i+\sum_k\kappa_{ik}^{1-\sigma}x_k,
\qquad
S_i^{(2)}:=\mathcal{A}y_i+\sum_k\kappa_{ki}^{1-\sigma}y_k,
$$

and the shares

$$
s_i^x:=\frac{\mathcal{A}x_i}{S_i^{(1)}},\quad
\mu_{ij}:=\frac{\kappa_{ij}^{1-\sigma}x_j}{S_i^{(1)}},
\qquad
s_i^y:=\frac{\mathcal{A}y_i}{S_i^{(2)}},\quad
\lambda_{ji}:=\frac{\kappa_{ji}^{1-\sigma}y_j}{S_i^{(2)}},
$$

 so $s_i^x+\sum_j\mu_{ij}=1$ and $s_i^y+\sum_j\lambda_{ji}=1$. For $\alpha=\beta=0$, the log system is

$$
G1_i:=\ln S_i^{(1)}-\ln x_i=0,\qquad
G2_i:=\ln S_i^{(2)}-\ln y_i=0\ (i=1,\ldots,N-1),
$$

 plus the normalization $G2_N:= -\tfrac{1}{\sigma-1}\ln y_N=0$ (i.e. $w_N=1$). Differentiating gives the block Jacobian with $W$ treated as fixed:

$$
DG^{(W\text{ fixed})}=
\begin{bmatrix}
\ \ S_x - I + \mu\ \ & 0\\[3pt]
0 & \ S_y^{(N-1)} - \big(I_{N-1}-\lambda_{1:(N-1),:}^{\top}\big)\\
\hline
0 & -\tfrac{1}{\sigma-1}e_N^{\top}
\end{bmatrix},
$$

where $S_x=\mathrm{diag}(s_1^x,\ldots,s_N^x)$ and $S_y^{(N-1)}=\mathrm{diag}(s_1^y,\ldots,s_{N-1}^y)$. Furthermore, let us assume that $\lambda_m=0$ for all modes $m$, which implies:

$$
\Delta^\text{cong}=0
$$

 Because $\mathcal{A}=\big(\sum_m Z_m/\bar L\big)^{\sigma-1}$ with $Z_i=x_i\,y_i^{\sigma/(\sigma-1)}$ depends on $(x,y)$ through

$$
\frac{\partial\ln\mathcal{A}}{\partial\ln x_j}=(\sigma-1)\frac{L_j}{\bar L},
\qquad
\frac{\partial\ln\mathcal{A}}{\partial\ln y_j}=\sigma\frac{L_j}{\bar L},
$$

 the fixed--$\bar L$ Jacobian adds a rank--two term:

$$
DG=DG^{(W\text{ fixed})}
+\begin{bmatrix}
(\sigma-1)\,s^x (L/\bar L)^{\top} & \ \sigma\,s^x (L/\bar L)^{\top}\\[3pt]
\big.(\sigma-1)\,s^y (L/\bar L)^{\top}\big|_{1:(N-1)} & \big.\sigma\,s^y (L/\bar L)^{\top}\big|_{1:(N-1)}\\[2pt]
\hline
0 & 0
\end{bmatrix}.
$$

 Introduce the compact low--rank factorization

$$
DG_0:=
\begin{bmatrix}
S_x - I + \mu & 0\\
0 & S_y^{(N-1)} - \big(I_{N-1}-\lambda_{1:(N-1),:}^{\top}\big)\\
\hline 0 & -\tfrac{1}{\sigma-1}e_N^{\top}
\end{bmatrix},
$$


$$
U_x=\begin{bmatrix}(\sigma-1)s^x\\ (\sigma-1)s^y_{1:(N-1)}\\ 0\end{bmatrix},
\quad
V_x^{\top}=\begin{bmatrix}(L/\bar L)^{\top} & 0\end{bmatrix},
$$


$$
U_y=\begin{bmatrix}\sigma s^x\\ \sigma s^y_{1:(N-1)}\\ 0\end{bmatrix},
\qquad
V_y^{\top}=\begin{bmatrix}0 & (L/\bar L)^{\top}\end{bmatrix},
$$

 Notice that we can write the Jacobian as the sum of a block-diagonal matrix $DG_0$ and the low-rank factorization using the aforementioned vectors,

$$
DG=DG_0+U_xV_x^{\top}+U_yV_y^{\top},
$$

where the inverse of the first summand is given by the inverse of a block-diagonal matrix, i.e.

$$
(DG_0)^{-1}=\begin{bmatrix}B_x^{-1} & 0\\ 0 & B_y^{-1}\end{bmatrix},
$$

with

$$
B_x:=S_x - I + \mu \in\mathbb{R}^{N\times N},\qquad
B_y:=\begin{bmatrix} S_y^{(N-1)} - (I_{N-1}-\lambda_{1:(N-1),:}^{\top})\\[3pt]
-\tfrac{1}{\sigma-1}e_N^{\top}\end{bmatrix}\in\mathbb{R}^{N\times N}.
$$

 Let $U:=[U_x\ U_y]$ and $V:=[V_x\ V_y]$. An application of the Woodbury matrix identity gives

$$
DG^{-1}=DG_0^{-1}-DG_0^{-1}U\big(I_2+V^{\top}DG_0^{-1}U\big)^{-1}V^{\top}DG_0^{-1}.
$$

 Define the weights $\omega_x:=L/\bar L\in\mathbb{R}^{N}$ and $\omega_y:=L/\bar L\in\mathbb{R}^{N}$ (the latter acts on the $N$ rows of the $y$--block, with the normalization row contribution zero). Introduce the shorthand

$$
C_x:=\omega_x^{\top}B_x^{-1}s^x,\qquad
C_y:=\omega_y^{\top}B_y^{-1}s^y,
\qquad
m_x:=1+(\sigma-1)C_x,\qquad m_y:=1+\sigma C_y.
$$

 A direct calculation yields the $2\times2$ core and its inverse:

$$
M:=I_2+V^{\top}DG_0^{-1}U
=
\begin{bmatrix}
1+(\sigma-1)C_x & \sigma C_x\\[2pt]
(\sigma-1)C_y & 1+\sigma C_y
\end{bmatrix},
\qquad
\det M=1+(\sigma-1)C_x+\sigma C_y,
$$


$$
M^{-1}
=\frac{1}{\det M}
\begin{bmatrix}
m_y & -\sigma C_x\\[2pt]
-(\sigma-1)C_y & m_x
\end{bmatrix}.
$$

 A marginal shock to one friction enters as

$$
\frac{\partial G}{\partial\ln\kappa_{kl,m}}
=(1-\sigma)\begin{bmatrix}s_{kl,m}\mu_{kl}\,e_k\\ s_{kl,m}\lambda_{kl}\,e_l\\ 0\end{bmatrix}.
$$

 We need the $L$--weighted functional, for any column $c$ of $DG^{-1}$,

$$
\Psi[c]\;:=\;\sum_i \frac{L_i}{\bar L}\Big[(1-\sigma)(DG^{-1})_{x,i;c}+\sigma(DG^{-1})_{y,i;c}\Big].
$$

 Define $A_k:=\big[\omega_x^{\top}B_x^{-1}\big]_k$ for $k\in\{1,\ldots,N\}$ and $B_l:=\big[\omega_y^{\top}B_y^{-1}\big]_l$ for $l\in\{1,\ldots,N-1\}$. For the $G1_k$ column, by the Woodbury matrix identity we obtain,

$$
DG^{-1}e^{(1)}_k
= DG_0^{-1}e^{(1)}_k - DG_0^{-1}U\,M^{-1}V^\top DG_0^{-1}e^{(1)}_k,
\quad
DG_0^{-1}e^{(1)}_k=\begin{bmatrix}B_x^{-1}e_k\\[2pt]0\end{bmatrix},
\quad
V^\top DG_0^{-1}e^{(1)}_k=\begin{bmatrix}A_k\\ 0\end{bmatrix},
$$

 hence

$$
DG^{-1}e^{(1)}_k
=\begin{bmatrix}B_x^{-1}e_k\\ 0\end{bmatrix}
-\frac{A_k}{\det M}
\begin{bmatrix}
B_x^{-1}\!\big[(\sigma-1)m_y\,s^x - \sigma(\sigma-1)C_y\,s^x\big]\\[4pt]
B_y^{-1}\!\big[(\sigma-1)m_y\,s^y - \sigma(\sigma-1)C_y\,s^y\big]
\end{bmatrix}.
$$

 Applying $\Psi[\cdot]$ and simplifying using $\det M=1+(\sigma-1)C_x+\sigma C_y$, $m_x=1+(\sigma-1)C_x$, $m_y=1+\sigma C_y$ yields

$$
\Psi[G1_k]\;=\;-\,\frac{(\sigma-1)\,m_y}{m_x}\,A_k
\;=\;-\,\underbrace{\frac{(\sigma-1)\big(1+\sigma C_y\big)}{1+(\sigma-1)C_x}}_{=:~m^{y}}\,A_k.
$$

For the $G2_l$ column ($l\le N-1$),

$$
DG_0^{-1}e^{(2)}_l=\begin{bmatrix}0\\ B_y^{-1}e_l\end{bmatrix},
\qquad
V^\top DG_0^{-1}e^{(2)}_l=\begin{bmatrix}0\\ B_l\end{bmatrix},
$$

and therefore

$$
DG^{-1}e^{(2)}_l
=\begin{bmatrix}0\\ B_y^{-1}e_l\end{bmatrix}
-\frac{B_l}{\det M}
\begin{bmatrix}
B_x^{-1}\!\big[-\sigma(\sigma-1)C_x\,s^x+\sigma m_x\,s^x\big]\\[4pt]
B_y^{-1}\!\big[-\sigma(\sigma-1)C_x\,s^y+\sigma m_x\,s^y\big]
\end{bmatrix},
$$

 which gives

$$
\Psi[G2_l]\;=\;+\ \frac{\sigma\,m_x}{m_y}\,B_l
\;=\;\underbrace{\frac{\sigma\big(1+(\sigma-1)C_x\big)}{1+\sigma C_y}}_{=:~m^{x}}\,B_l.
$$

 The implicit-function step with $\partial G/\partial\ln\kappa_{kl}=(1-\sigma)\,[\,\mu_{kl}e_k;\ \lambda_{kl}e_l;\ 0\,]$ then gives

$$
\frac{d\ln W}{d\ln\kappa_{kl}}
= -\,\Psi\!\left[DG^{-1}\!\begin{bmatrix}(1-\sigma)\mu_{kl}e_k\\ (1-\sigma)\lambda_{kl}e_l\\ 0\end{bmatrix}\right]
= -\,m^{y}\,\mu_{kl}\,A_k\;+\; \mathbf{1}\{l\neq N\}\,m^{x}\,\lambda_{kl}\,B_l,
$$

with $m^{y}=\dfrac{(\sigma-1)(1+\sigma C_y)}{1+(\sigma-1)C_x}$ and $m^{x}=\dfrac{\sigma(1+(\sigma-1)C_x)}{1+\sigma C_y}$. Notice that these terms are simply global scalars,


$$
m^{y}=\left[-\frac{(\sigma-1)\left(1+\sigma C_{y}\right)}{1+(\sigma-1)C_{x}}\right]=\frac{\left[1+\sigma\sum_{p=1}^{N-1}\sum_{q=1}^{N-1}\frac{L_{p}}{\bar{L}}\tilde{b}_{pq}^{y}s_{q}^{y}\right]}{1+(\sigma-1)\sum_{r=1}^{N}\sum_{s=1}^{N}\frac{L_{r}}{\bar{L}}\tilde{b}_{rs}^{x}s_{s}^{x}}.
$$


$$
m^{x}=\left[\frac{\sigma\left(1+(\sigma-1)C_{x}\right)}{1+\sigma C_{y}}\right]_{k}=\frac{\left[1+\sigma\sum_{p=1}^{N-1}\sum_{q=1}^{N-1}\frac{L_{p}}{\bar{L}}\tilde{b}_{pq}^{x}s_{q}^{x}\right]}{1+(\sigma-1)\sum_{r=1}^{N}\sum_{s=1}^{N}\frac{L_{r}}{\bar{L}}\tilde{b}_{rs}^{y}s_{s}^{y}}.
$$


Using

$$
\Big[\omega_y^\top B_y^{-1}\Big]_k=\sum_i\frac{L_i}{\bar L}\,(B_y^{-1})_{ik},
\qquad
\Big[\omega_x^\top B_x^{-1}\Big]_l=\sum_i\frac{L_i}{\bar L}\,(B_x^{-1})_{il},
$$

and the flow-balance definitions $\Xi_{kl}:=\mu_{kl}\Xi_k=\lambda_{kl}\Xi_l$ with node flows $\Xi_k:=\sum_{l}\Xi_{kl}$ and $\Xi_l:=\sum_{k}\Xi_{kl}$, we obtain the edge--by--nodes form

$$
-\frac{\partial\ln W}{\partial\ln\kappa_{kl,m}}
=s_{kl,m}\Xi_{kl}\left[m^{y}\,\frac{\big[\omega_y^\top B_y^{-1}\big]_k}{\Xi_k}
+ m^{x}\,\frac{\big[\omega_x^\top B_x^{-1}\big]_l}{\Xi_l}\right].
$$

 Equivalently, using the resolvent identities $B_y^{-1}=(I-\tilde\lambda)^{-1}\,(I_{N-1}-S_y^{(N-1)})^{-1}$ and $B_x^{-1}=(I-\tilde\mu)^{-1}\,(I+S_x)^{-1}$,

$$
-\frac{\partial\ln W}{\partial\ln\kappa_{kl,m}}
=\sigma\,s_{kl,m}\Xi_{kl}\left[-\,\frac{\big[\omega_y^\top (I-\tilde\lambda)^{-1}(I_{N-1}-S_y^{(N-1)})^{-1}\big]_k}{\Xi_k}
+\frac{1-\sigma}{\sigma}\,\frac{\big[\omega_x^\top (I-\tilde\mu)^{-1}(I+S_x)^{-1}\big]_l}{\Xi_l}\right].
$$

 Under the additional weighting identities

$$
m^{y}\,\big[\omega_y^\top (I-\tilde\lambda)^{-1}(I_{N-1}-S_y^{(N-1)})^{-1}\big]_k=\frac{\Xi_k}{\sum_i y_i},
\qquad
m^{x}\,\big[\omega_x^\top (I-\tilde\mu)^{-1}(I+S_x)^{-1}\big]_l=\frac{\Xi_l}{\sum_i y_i},
$$

 the expression collapses to the canonical edge--by--node formula

$$
-\frac{\partial\ln W}{\partial\ln\kappa_{kl,m}}=s_{kl,m}\Xi_{kl}\,[\kappa_k+\nu_l],
\qquad
\kappa_k=\frac{\sigma}{\sum_i y_i},
\quad
\nu_l=\frac{1-\sigma}{\sum_i y_i},
$$

and therefore

$$
-\frac{\partial\ln W}{\partial\ln\kappa_{kl,m}}=\frac{\Xi_{kl,m}}{\sum_i y_i}.
$$


Applying the normalization $\sum_i y_i\equiv 1$, we obtain,


$$
-\frac{\partial\ln W}{\partial\ln\kappa_{kl,m}}=\Xi_{kl,m}.
$$


as stated.


## References

<a id="ref-Ahlfeldt2015Quantitative"></a>

Ahlfeldt, Gabriel, Stephen Redding, Daniel Sturm, and Nikolaus Wolf. 2015. "Quantifying the Gains from Integration: Evidence from the Berlin Wall." *Quarterly Journal of Economics* 130 (3): 1133--89.

<a id="ref-Allen2014Topography"></a>

Allen, Treb, and Costas Arkolakis. 2014. "Trade and the Topography of the Spatial Economy." *Quarterly Journal of Economics* 129 (3): 1085--140.

<a id="ref-AA_2022restud"></a>

Allen, Treb, and Costas Arkolakis. 2022. "The Welfare Effects of Transportation Infrastructure Improvements." *The Review of Economic Studies*, ahead of print, February. <https://doi.org/10.1093/restud/rdac001>.

<a id="ref-allen2025quantitative"></a>

Allen, Treb, and Costas Arkolakis. 2025. *Quantitative Regional Economics*. National Bureau of Economic Research Working Paper.

<a id="ref-baqaee2019macroeconomic"></a>

Baqaee, David Rezza, and Emmanuel Farhi. 2019. "The Macroeconomic Impact of Microeconomic Shocks: Beyond Hulten's Theorem." *Econometrica* 87 (4): 1155--203.

<a id="ref-bellman1966dynamic"></a>

Bellman, Richard. 1966. "Dynamic Programming." *Science* 153 (3731): 34--37.

<a id="ref-bonadio2021ports"></a>

Bonadio, Barthélémy. 2021. *Ports Vs. Roads: Infrastructure, Market Access and Regional Outcomes*. Working Paper.

<a id="ref-Brancaccio2020TradeCosts"></a>

Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2020. "Geography, Transportation, and Endogenous Trade Costs." *Econometrica* 88 (2): 657--91.

<a id="ref-brancaccio2024investment"></a>

Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2024. *Investment in Infrastructure and Trade: The Case of Ports*. National Bureau of Economic Research.

<a id="ref-cocsar2024long"></a>

Coşar, A Kerem, Sophie Osotimehin, and Latchezar Popov. 2024. *The Long-Run Effects of Transportation Productivity on the US Economy*. National Bureau of Economic Research.

<a id="ref-DGWZ_2024transshipment"></a>

Do, Anh D, Sharat Ganapati, Woan Foong Wong, and Oren Ziv. 2025. *Transshipment Hubs, Trade, and Supply Chains*. National Bureau of Economic Research.

<a id="ref-donaldson2025transport"></a>

Donaldson, Dave. 2025. "Transport Infrastructure and Policy Evaluation." In *Handbook of Regional and Urban Economics*, vol. 6. Elsevier.

<a id="ref-DonaldsonHornbeck2016Railroads"></a>

Donaldson, Dave, and Richard Hornbeck. 2016. "Railroads and American Economic Growth: A 'Market Access' Approach." *Quarterly Journal of Economics* 131 (2): 799--858.

<a id="ref-ducruet2024all"></a>

Ducruet, César, Réka Juhász, Dávid Krisztián Nagy, and Claudia Steinwender. 2024. "All Aboard: The Effects of Port Development." *Journal of International Economics* 151: 103963.

<a id="ref-DurantonTurner2011Fundamental"></a>

Duranton, Gilles, and Matthew A. Turner. 2011. "The Fundamental Law of Road Congestion: Evidence from US Cities." *American Economic Review* 101 (6): 2616--52.

<a id="ref-fajgelbaumgaubert2020optimal"></a>

Fajgelbaum, Pablo D, and Cecile Gaubert. 2020. "Optimal Spatial Policies, Geography, and Sorting." *The Quarterly Journal of Economics* 135 (2): 959--1036.

<a id="ref-Fan2023RouteChoice"></a>

Fan, Jingting, Yi Lu, and Wenlan Luo. 2023. "Valuing Domestic Transport Infrastructure: A View from the Route Choice of Exporters." *Review of Economics and Statistics* 105 (6): 1--46 (article in press).

<a id="ref-fogel1962quantitative"></a>

Fogel, Robert William. 1962. "A Quantitative Approach to the Study of Railroads in American Economic Growth: A Report of Some Preliminary Findings." *The Journal of Economic History* 22 (2): 163--97.

<a id="ref-Fogel1964Railroads"></a>

Fogel, Robert William. 1964. *Railroads and American Economic Growth: Essays in Econometric History*. Johns Hopkins University Press.

<a id="ref-FuchsWong2024Multimodal"></a>

Fuchs, Simon, and Woan Foong Wong. 2026. *Multimodal Transport Networks*. Working Paper No. 35065. Working Paper Series. National Bureau of Economic Research. <https://doi.org/10.3386/w35065>.

<a id="ref-gwz_entrepot"></a>

Ganapati, Sharat, Woan Foong Wong, and Oren Ziv. 2024. "Entrepot: Hubs, Scale, and Trade Costs." *American Economic Journal: Macroeconomics* 16 (4): 239--78.

<a id="ref-Graham2007Agglomeration"></a>

Graham, Daniel J. 2007. "Variable Returns to Agglomeration and the Effect of Road Traffic Congestion." *Journal of Urban Economics* 62 (1): 103--20.

<a id="ref-RePEc:cpr:ceprdp:14193"></a>

Heiland, Inga, Andreas Moxnes, Karen-Helene Ulltveit-Moe, and Yuan Zi. 2019. *Trade From Space: Shipping Networks and The Global Implications of Local Shocks*. CEPR Discussion Papers No. 14193. C.E.P.R. Discussion Papers. <https://ideas.repec.org/p/cpr/ceprdp/14193.html>.

<a id="ref-hulten1978growth"></a>

Hulten, Charles R. 1978. "Growth Accounting with Intermediate Inputs." *The Review of Economic Studies* 45 (3): 511--18.

<a id="ref-trillion"></a>

Lefevre, Benoit, David Leipziger, and Matthew Raifman. 2014. *The Trillion Dollar Question: Tracking Public and Private Investment in Transport*. World Resources Institute (WRI).

<a id="ref-monte2018commuting"></a>

Monte, Ferdinando, Stephen J Redding, and Esteban Rossi-Hansberg. 2018. "Commuting, Migration, and Local Employment Elasticities." *American Economic Review* 108 (12): 3855--90.

<a id="ref-morten2024effects"></a>

Morten, Melanie, and Jaqueline Oliveira. 2024. "The Effects of Roads on Trade and Migration: Evidence from a Planned Capital City." *American Economic Journal: Applied Economics* 16 (2): 389--421.

<a id="ref-redding2025quantitative"></a>

Redding, Stephen J. 2025. *Quantitative Urban Economics*. National Bureau of Economic Research Working Paper.

<a id="ref-REDDING2016148"></a>

Redding, Stephen J. 2016. "Goods Trade, Factor Mobility and Welfare." *Journal of International Economics* 101: 148--67. https://doi.org/10.1016/j.jinteco.2016.04.003.

<a id="ref-Venables2007Agglomeration"></a>

Venables, Anthony J. 2007. "Evaluating Urban Transport Improvements: Cost--Benefit Analysis in the Presence of Agglomeration and Income Taxation." *Journal of Transport Economics and Policy* 41 (2): 173--88.

<a id="ref-wong_roundtrip"></a>

Wong, Woan Foong. 2022. "The Round Trip Effect: Endogenous Transport Costs and International Trade." *American Economic Journal: Applied Economics* 14 (4): 127--66.

[^1]: Contact: treb.allen@dartmouth.edu, simon.fuchs@atl.frb.org, and wfwong@uoregon.edu. We thank Costas Arkolakis for early discussions and helpful comments and suggestions. The views in this paper are solely the responsibility of the authors and should not necessarily be interpreted as reflecting the views of the Board of Governors of the Federal Reserve System or of any other person associated with the Federal Reserve System. All errors are our own.

[^2]: Do et al. ([2025](#ref-DGWZ_2024transshipment)) examines the returns from being a hub country and shows that transshipment activity increases the hub country's trade flows.

[^3]: Fuchs and Wong ([2026](#ref-FuchsWong2024Multimodal)) additionally estimates cross-mode substitution elasticity which is identified with a highway-instrument IV that relates lane-mile expansions to the rail-versus-truck split.

[^4]: The current quantitative results are preliminary, as they are derived by approximating the welfare elasticities using small perturbations to the complete equilibrium system given by equations [Equation](#eq:recursive_eqm1) and [Equation](#eq:recursive_eqm2). The finalized results will be based on the expressions given in Proposition [2](#thm:welfare).
