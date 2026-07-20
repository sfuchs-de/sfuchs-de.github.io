---
title: "Multimodal Transport Networks"
authors: "Simon Fuchs and Woan Foong Wong"
date: "April 2026"
pdf: "/research/Multimodal_FW_compressed-compressed.pdf"
markdown_source: "/research/markdown/multimodal-transport-networks.md"
markdown_generated: "2026-07-20"
---

# Multimodal Transport Networks

**Authors:** Simon Fuchs and Woan Foong Wong<br>
**Version:** April 2026<br>
**JEL:** F11, R12, R42<br>
**Keywords:** Multimodal transport; transport networks; spatial equilibrium; endogenous transport costs; infrastructure investments; disruptions; bottlenecks

[Download the paper as PDF](/research/Multimodal_FW_compressed-compressed.pdf)

> This Markdown version was generated from the authors’ TeX source and checked against the PDF linked above. Figure images are omitted here; their captions and notes are retained.

## Abstract

Over half of distance-weighted U.S. freight is shipped using more than one transport mode. We examine how multimodal transport networks shape the economic and environmental impacts of infrastructure investments and disruptions. We develop a tractable spatial equilibrium model of multimodal routing with mode-specific congestion at intermodal terminals. We estimate a modal substitution elasticity using road and rail data, and a terminal congestion elasticity using vessel-positioning data. Calibrated to the U.S. freight network, the model identifies key bottlenecks and quantifies \$0.46–\$1.85 billion in real GDP gains from intermodal terminal improvements, with additional environmental benefits from shifting away from carbon-intensive road transport. Ignoring mode-specific congestion overstates welfare gains from highway improvements by 85%, while ignoring multimodal flexibility understates them by 22%. Losing rail network access is estimated to reduce real GDP by \$230 billion.

## Introduction

Freight transportation is inherently multimodal: over half of U.S. freight ton-miles is transported using two or more modes over an integrated network of roads, railways, barges, connected by ports and inland terminals (Department of Transportation ([2017-2024](#ref-bts_dot))). Recent global disruptions, from pandemic-related port congestion to the Panama Canal drought and U.S. rail strike threats, have highlighted how localized vulnerabilities can propagate throughout the broader multimodal transport network to significantly impact trade costs, supply chains, and welfare ([World Bank 2023](#ref-world2023connecting); [National Economic Council 2024](#ref-WhiteHouseSupplyChainReview2024)). Furthermore, since transportation is the largest source of direct U.S. greenhouse gas emissions ([EPA 2024](#ref-epa_2024)) and transport modes differ substantially in their emissions intensity-----trucks emit eight times more $\mathrm{CO_2}$per ton-mile than rail ([CBO 2022](#ref-CBO2022emissions))-----improvements and disruptions to the transport network can have important implications for climate change.

In this paper, we study how the multimodal structure of transport networks shapes the economic and environmental impacts of infrastructure investments and disruptions. We do so by developing a spatial equilibrium model of freight routing across multiple modes with mode-specific congestion at intermodal terminals, which are key transition points where freight shifts between modes. To identify how freight reallocates across modes, we estimate an elasticity of modal substitution using confidential U.S. rail shipment data combined with truck traffic data. To capture congestion effects, we use minute-level vessel positioning data to estimate congestion elasticities at intermodal port terminals. Incorporating these features allows us to quantify the system-wide effects of infrastructure investments and major disruptions taking into account the multimodal nature of transport networks. Relative to our approach, we show that single-mode frameworks can underestimate the welfare effects of infrastructure investments.

We account for the complexities of modeling multimodal transport networks within a general equilibrium setting by incorporating recent advances in the operations research literature ([Daly and Bierlaire 2006](#ref-Daly2006-lp)). Specifically, we develop a model that recursively specifies optimal choices for sourcing, routes, *and* modes. There are three main benefits to our framework. First, the model embeds the choice of transport modes within an optimal route choice model, with a separate elasticity of substitution across modes. This structure can flexibly nest canonical single-mode routing models as a special case. Second, it can include a rich set of mode-specific congestion patterns, including capacity constraints at intermodal terminals. Third, the model can derive closed-form expressions for equilibrium transport costs, traffic flows, and market access terms, which depend endogenously on mode and route choices as well as the topology of the transport network.

We formally demonstrate that mode-specific changes within the multimodal transport network generate both direct and indirect traffic adjustment effects that propagate through the entire network. First, a reduction in the cost of one mode on link $kl$ diverts traffic toward that mode and away from competing modes on the same link, generating a direct *modal substitution* effect. An improvement in road transport on a given link, for example, shifts traffic on that link away from rail and toward road. Second, because the cheaper mode lowers the composite transport cost of the link, it raises the attractiveness of routes and locations that use it and increases transport demand more broadly across the network; this is an indirect *modal complementarity* effect. The strength of this complementarity channel is greatest for links that are central to network connectivity and have few close alternatives, and its ultimate importance depends on how the induced traffic interacts with congestion across links and at terminals.

We then connect these traffic adjustments to welfare. Applying the inverse function theorem to our equilibrium system we derive *closed-form decompositions* of the welfare elasticity associated with a mode-specific link improvement which highlights two distinct margins. First, the *reallocation wedges* capture how the welfare of this improvement changes when traffic is allowed to reallocate across routes and modes. They are positive when it reinforces the improvement by directing traffic toward especially valuable uses of the affected link, and negative when the additional flexibility mainly creates bypasses that weaken its importance. Second, the *congestion wedges* measure how much of the welfare gains is absorbed once the induced traffic loads onto congested links and terminals within the network. Taken together, these wedges show whether a link-level improvement creates value because it reallocates traffic in useful ways, or whether part of that gain is dissipated because the additional traffic increases congestion elsewhere in the system. Using this decomposition, we can isolate and quantify the contributions of the main ingredients in our model by sequentially shutting down components of these two margins.

Our analysis relies on two central parameters: the elasticity of substitution across modes and impact of congestion at intermodal terminals. We estimate the elasticity of modal substitution by studying how traffic shifts between modes in response to cost changes in a one mode, specifically how relative rail and road traffic flows respond to a decrease in road costs. By matching confidential waybill rail traffic data to truck traffic in cities, our approach combines the mode-specific cost change research design by Duranton and Turner ([2011](#ref-duranton2011fundamental)), which approximates reductions in road cost with increases in interstate highways, with the analysis on relative traffic shift between modes as in Hummels and Schaur ([2013](#ref-hummels2013time)) and Lugovskyy et al. ([2025](#ref-lugovskyy2022unintended)). We find that a 1 percent increase in interstate highways results in a 0.9-1.2 percent decrease in relative rail to truck traffic use. Using the most conservative specification, we estimate the elasticity of modal substitution to be 1.099.

Next, we evaluate the impact of congestion at intermodal terminals using minute-level vessel positioning data, which allows us to estimate how responsive ship dwell times (time spent loading and unloading at port) are to overall port traffic at the time of arrival. To identify the causal effect of overall port traffic on ship dwell times, we employ a shift-share instrument that serves as a demand shifter for port services. We find that a 1 percent increase in port traffic increases ship dwell times by 0.24-0.26 percent, which corresponds to an intermodal terminal congestion elasticity of 0.096. We demonstrate the broader applicability of this elasticity to the entire multimodal network, including rail terminals, by highlighting a significant positive correlation between port traffic and railcar dwell times.

To conduct counterfactuals, we calibrate our framework to the U.S. transportation network using high-resolution geo-spatial data on roads, railways, waterways, and the location of intermodal terminals (both inland and ports). Our first application quantifies the welfare impact of improving the integration of the multimodal transport network by running 228 counterfactuals, each simulating a reduction in mode-switching cost at a different intermodal terminal in the U.S.. We find that terminals generating the largest gains are centrally located in the interior of the U.S., for example in Chicago and Atlanta, highlighting the role of the multimodal network transporting goods from coastal to interior regions. Terminals in major urban centers, like Los Angeles and Houston, also rank highly. Improving these central terminals would generate an aggregate welfare gain equivalent to an additional \$463-3,851 million of GDP (in 2012 USD). Congestion significantly affects these gains: welfare benefits are 2.7 times higher on average without congestion. These investments also result in modal substitution, shifting traffic use from road to rail and barges. Since trucks generate more greenhouse gases relative to trains, these substitution effects result in environmental benefits valued at \$17-214 million. These findings align with the goals of the inter-agency U.S. National Blueprint for Transportation Decarbonatization, which emphasizes improving multimodal freight transport ([DOE, DOT, EPA, and HUD 2024](#ref-blueprint_decarbon)).

Building on the theoretical decomposition earlier, we quantify the importance of four main channels driving welfare gains to transportation infrastructure improvements in our model: (1) road and terminal congestion, (2) productivity and amenity externalities, (3) flexibility across multiple transport modes, and (4) endogenous route choice. We implement this decomposition in a link-level U.S. highway improvement setting, evaluating 704 counterfactuals that improve each highway link individually for each specification. Our decomposition shows that standard approaches can substantially misestimate the welfare effects of transportation improvements. Ignoring congestion leads to an 85 percent overestimate of welfare gains, while abstracting from productivity and amenity externalities overstates gains by 57 percent. Conversely, shutting down multimodal flexibility---effectively reducing the network to a single mode---understates welfare gains by 22 percent, and fixing routes understates them by a similar magnitude, which suggests most of the rerouting response occurs across modes rather than within modes.

Additionally, we quantify the welfare and environmental impacts of three policy scenarios. First, we evaluate the value of the U.S. multimodal network by exploring the effects of the 2022 potential rail strike which would have shut down the entire rail transport system ([Kanno-Youngs and Cochrane 2022](#ref-nyt_railstrike)). While existing literature has quantified the significance of the road and highway transport network, there has been less attention on the value of the rail network apart from historical analyses. We find that losing access to the rail transport network would decrease U.S. GDP by approximately \$230 billion (in 2012 USD), inclusive of the mitigating effects of modal substitution towards roads and waterways, as well as the broader general equilibrium effects of reduced market access due to the loss of rail. This welfare loss is exacerbated by congestion effects and would generate additional environmental damage as transport shifts towards road transport, adding an estimated social cost of \$12 billion.

Second, we consider the consequences of repealing the Jones Act of 1920, an active U.S. trade regulation that requires all ships transporting goods and passengers between U.S. ports to be U.S.-built and majority-owned and crewed by U.S. citizens. By repealing this act and allowing cheaper foreign ships to operate on U.S. domestic waterways, we estimate a welfare gain equivalent to increasing U.S. GDP by about \$3.2 billion (in 2012 USD). Our finding falls on the lower end of existing government estimates, likely due to our focus on the continental U.S. and because the multimodal network has had a century to adjust away from domestic waterways under the Jones Act. Had waterborne transport been less expensive, the dense rail and road corridors that now line the U.S. coastlines might well have been built further inland instead. The repeal of the Jones Act would also allow for less reliance on trucks and rail, which would result in an environmental benefit of \$0.2 billion since waterway transport is greener.

Our third scenario investigates the impact of the Panama Canal disruptions due to decreased access from drought conditions ([Rojanasakul 2024](#ref-panama_drought)). The resulting welfare loss is equivalent to a \$2.7 billion decrease in U.S. GDP (in 2012 USD). To our knowledge, this is the first quantification of the Panama Canal disruption which accounts for both modal and route substitutions. We find environmental losses of about \$0.5 billion due to the substitution towards both trucks and rail. Across all three scenarios, we show that congestion---at terminals and for both terminals and roads---has a compounding effect on welfare. For the Panama Canal disruptions, this is particularly pronounced: without terminal congestion, the welfare losses increase by more than 186 percent. This large increase is driven by modal shifts from water to rail and road, and the crucial role of intermodal terminals in facilitating this shift. Removing both terminal and road congestion increases the effect by a further 35 percent.

#### Related Literature

Our paper is complementary to and builds on a number of different strands of research. First, this paper contributes to a rapidly expanding literature incorporating realistic transportation networks into quantitative spatial equilibrium models (see ([Donaldson 2025](#ref-donaldson2025transport)) and Allen and Arkolakis ([2025](#ref-allen2025quantitative)) for recent surveys). Within that literature, there have been multiple efforts to merge the disaggregated network structure of transportation infrastructure with a general equilibrium economic geography model ([Donaldson and Hornbeck 2016](#ref-donaldson2016railroads); [Fajgelbaum and Schaal 2020](#ref-fajgelbaum2020optimal); [Allen and Arkolakis 2022](#ref-AA_2022restud); [Fajgelbaum et al. 2023](#ref-fajgelbaum2023political)). Most relevant to our work, Allen and Arkolakis ([2022](#ref-AA_2022restud)) (hereafter abbreviated to AA2022) propose a tractable way of incorporating the optimal routing choice into a spatial equilibrium model to examine the general equilibrium implications of infrastructure improvements. Our paper builds on this seminal work and this literature by developing a model that recursively specifies optimal choices for sourcing, routes, *and* modes. Our approach allows us to embed mode choice within an optimal route choice model with a separate elasticity of substitution across modes, and identify how bottlenecks emerge from the multimodal transport network due to mode-specific congestion and limited substitution across modes.[^1]

Additionally, this literature has often focused on one mode of transport---road, maritime, *or* rail ([Coşar and Demir 2018](#ref-cosar2017shipping); [Brancaccio et al. 2020](#ref-brancaccio2017geography); [Heiland et al. 2019](#ref-RePEc:cpr:ceprdp:14193); [Ganapati et al. 2021](#ref-gwz_entrepot); [Degiovanni and Yang 2023](#ref-degiovanniyang); [Dunn and Leibovici 2023](#ref-dunn2023navigating); [Gibbons et al. 2024](#ref-Gibbons2024-ti); [Asturias 2020](#ref-asturias2020endogenous); [Economides 2024](#ref-economides2024unconventional); [Do et al. 2025](#ref-DGWZ_2025transshipment)). More recent and complementary work has expanded this analysis to more modes of transport. Focusing on roads, ([Fan et al. 2019](#ref-fan2019valuing)) study how domestic road and highways affect transport costs and welfare in China respectively.[^2] ([Jaworski et al. 2023](#ref-jaworski2023highways)) quantifies the value of U.S. highways allowing for modal substitution for transportation across states, not within. Our paper adds to this literature by studying the general equilibrium analysis of the U.S. multimodal transport system---roads, barges, *and* rail---as well as intermodal terminals which allow for switching across modes. We estimate an elasticity of modal substitution that allows us to pin down how freight reallocates across rail and truck.[^3] Combined with our model, we can quantify the economic and environmental impacts of infrastructure investments and real-world policy scenarios while accounting for substitution and complementarity within the multimodal network, and show that models limited to a single transport mode can understate these impacts.

More recent work has focused on the importance of ports and the gains from port development and efficiency. Brooks et al. ([2018](#ref-brooks2018local)) examines how the adoption of container technology at ports affects local activity, while Ducruet et al. ([2024](#ref-ducruet2020all)) identify how this technology adoption can crowd out economic activity by increasing land rents. ([Bonadio 2021](#ref-bonadio2021ports)) investigates how improvements in roads and ports have different distributional consequences locally and abroad. Focusing on dry bulk shipping, ([Brancaccio et al. 2024](#ref-brancaccio2024investment)) evaluates the returns to infrastructure investment at ports in the presence of disruptions and congestion. Our paper adds to this literature by studying intermodal terminals, both rail terminals and coastal ports, in the context of the multimodal transport network, showing that they are not just important for market access internationally but also domestically. Furthermore, we estimate an elasticity of congestion at intermodal terminals, and show that congestion---both at intermodal terminals and on roads---can substantially compound the effects of network improvements and disruptions: we show that abstracting from congestion can overstate both the welfare gains from both terminal and highway-link improvements .

Our paper is also related to a long-standing theoretical and empirical literature in transportation on route and mode choice ([McFadden et al. 1986](#ref-mcfadden_winston_boersch-supan_1986); [Rich et al. 2011](#ref-RePEc:eee:jotrge:v:19:y:2011:i:1:p:134-146); [Beuthe et al. 2014](#ref-beuthe2014estimating); [Winston 1981](#ref-10.2307/1912514)). The state-of-the-art in transportation studies solves high-dimensional traffic assignment problems algorithmically (see Notteboom ([2018](#ref-notteboom2018trade)) for a recent survey). We employ similar tools, specifically the *stochastic user equilibrium* where routes and modes are chosen subject to a stochastic perception error. However, we go beyond the extant literature by fully embedding the stochastic user equilibrium into a spatial general equilibrium framework, where input and output markets across space clear and factor and output prices are endogenously determined. This allows us to quantify the welfare effects of infrastructure improvements and disruptions within the multimodal transport network, capturing both modal substitution and general equilibrium complementarity effects.

Finally, our paper is related to the recent literature on the environmental impacts of transportation. Most of this literature focuses on the link between international trade and greenhouse gas emissions via transportation, and changes to this relationship in response to environmental regulations ([Shapiro 2016](#ref-shapiro2016_tradecosts); [Mundaca et al. 2021](#ref-mundaca2021carbon); [Lugovskyy et al. 2025](#ref-lugovskyy2022unintended); [Ludwig 2025](#ref-ludwig2025can)) or trade policies ([Cristea et al. 2013](#ref-cristea2013trade)). We instead highlight how infrastructure investments and disruptions can have environmental consequences via the multimodal transport network. While some of these papers have found compositional shifts in transport mode use due to regulation and trade policy changes,[^4] our quantitative general equilibrium framework allows us to distinguish between the substitution and complementarity effects. Given that transportation accounts for a quarter of global emissions ([United Nations 2021](#ref-un_2021)), our framework allows us to investigate how both of these effects contribute towards the environmental impacts of transportation infrastructure improvements and disruptions.

The rest of the paper is structured as follows. Section [2](#sec:Data) describes our data and the U.S. multimodal transport network. Section [3](#sec:Model) presents the multimodal spatial equilibrium routing model, and Section [4](#sec:Estimation) explains the estimation of modal substitution and congestion elasticities. Section [5](#sec:Calibration_Validation) describes the calibration of the model to the U.S. multimodal network and provides validation checks of our framework. In Section [6](#sec:Counterfactuals), we conduct counterfactual analyses to quantify the welfare and environmental impacts of infrastructure investments and policy scenarios, and decompose the results to highlight the model's key channels. Section [7](#sec:Conclusion) concludes.

<a id="sec:Data"></a>

## Data: U.S. Domestic Freight Transportation

In this section, we introduce our data sources and provide an overview of the U.S. domestic transport system. Figure [1](#fig:modeshare_wgt_by_distance) plots the share of U.S. freight moved by different modes across various distances. Trucks primarily handle freight for shorter distances under 100 miles, accounting for 92% by weight (similarly by value, Figure [15](#fig:modeshare_value_by_distance)), highlighting the role of the denser road network in facilitating transportation at the start and end of the movement of goods. This is commonly known as the first and last mile in freight transportation ([Rodrigue 2020](#ref-rodrigue2020geography); [Ranieri et al. 2018](#ref-ranieri2018review)). Freight moved over longer distances is increasingly transported using multiple modes. For freight transported over 500 miles, multimodal transport accounts for almost half by weight and for longer distances above 1,000 miles this share increases to more than two-thirds.[^5] On average, over 65% of U.S. freight shipped more than 500 miles uses multiple transport modes. For context, the road distance between Los Angeles and Chicago is about 2000 miles. Overall, more than half of U.S. freight in ton-miles is transported using more than one mode.


<a id="fig:modeshare_wgt_by_distance"></a>

> **U.S. Transport Mode Shares by Distance**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure plots the observed weight share of cargo transported by different modes across various distances in 2018. Multimodal indicates cargo movement that involves more than one mode, including truck, rail, and waterways. See Figure 15 for the observed value share of cargo across various distances. For freight transported over 1,500 miles, multimodal transport accounts for more than half by value. Both value and weight shares are similar when including multimodal shipments by air. Source: Freight Analysis Framework, U.S. Department of Transportation, and authors’ calculations.


<a id="sec:traffic_geo_data"></a>

### Rail, Road, Waterways, Ports, and Intermodal Terminals

#### Rail Geography Network and Traffic.

We use detailed geo-spatial information from the Topologically Integrated Geographic Encoding and Referencing Database (TIGER, Census Bureau) to construct a graph representation of the U.S. intermodal rail network. We subset the original network to segments owned by the largest Class I carriers and that are compatible with multimodal transport.[^6]

For rail traffic data, we obtained access to confidential carload waybills data from the Surface Transportation Board (see Section [9.1.1](#app_sec:rail) for further details). The waybill data captures the origin, destination, and interchange rail stations for freight cargo transported through the rail network. This detailed geographical information for rail cargo journeys allows us to capture their routes. Additionally, the data set contains information on number of car loads, weight, and intermodality. Intermodality indicates if rail freight movement involved other transport modes, which is almost entirely containers. The proportion of freight transported over multiple modes has increased dramatically over time: intermodal container rail traffic is the fastest growing rail traffic segment, having grown by more than 5 times since 1984 (Figure [16](#fig:rail_intermodal)). We restrict our rail traffic sample to intermodal freight transported by Class I carriers.

[Figure](#fig:rail_flow) presents the U.S. intermodal rail traffic flows. Thicker lines, indicating higher traffic flows, link the U.S. West and East coastal regions to interior locations like Chicago, Dallas, and Atlanta. Examples of such routes include Los Angeles to Chicago, New York City to Chicago, and Los Angeles to Dallas. Consistent with Figure [1](#fig:modeshare_wgt_by_distance), the rail network serves to transport freight over long distances.


<a id="fig:ports"></a>
<a id="fig:rail_flow"></a>
<a id="fig:road_flow"></a>
<a id="fig:water_flow"></a>
<a id="fig:maps_transport_network_traffic"></a>

> **Traffic along the U.S. Domestic Freight Transport System**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: Panel (a) presents U.S. domestic rail traffic for Class I carriers (the largest rail carriers) conditional on intermodal capability. Shortest routes are imputed between origin, interchange stations, and destination to assign total tonnage to individual rail segments along network. Thicker lines indicate higher traffic flows. Panel (b) presents U.S. domestic road traffic along the graph representation of the interstate highway system. Thicker lines indicate higher traffic flows. Panel (c) presents U.S. domestic waterborne traffic for manufactured goods, where the shortest routes are imputed between origin and destination to assign total tonnage to individual segments of the domestic water network. Thicker lines indicate higher traffic flows. Panel (d) presents the container traffic volume at international ports. Larger circles indicate higher container volumes. Sources: Authors’ calculations, Confidential Carload Waybill, Surface Transportation Board; Highway Performance Monitoring System, the Federal Highway Administration; Waterborne Commerce statistics, U.S. Army Corps of Engineers (USACE); and Port Performance Freight Statistics Program, Department of Transportation (DOT).


#### Road Geography Network and Traffic.

We follow AA2022 in constructing road geo-spatial and traffic flows data (see Section [9.1.2](#app_sec:road) for details). For road traffic data, we use the average annual daily traffic from the 2012 Highway Performance Monitoring System (HPMS) dataset by the Federal Highway Administration. Flows are allocated to individual links by constructing a length-weighted average of the annual daily traffic. [Figure](#fig:road_flow) presents a graph representation of the interstate highway system with thicker lines indicating higher road traffic flows. The highway flow patterns are quite different from rail ([Figure](#fig:rail_flow)). Here, heavier highway traffic connects large densely populated cities that are either on the coast or in the interior regions, like Los Angeles to San Diego, Boston to Philadelphia, and the surrounding areas around Chicago.

#### Waterway Traffic.

We next capture goods transported via U.S. waterways by bringing in waterborne traffic data and location of inland ports from the U.S. Army Corps of Engineers (USACE). We restrict our sample to manufactured goods which are primarily transported by barges. [Figure](#fig:water_flow) shows that most barge traffic is concentrated on the Great Lakes, Illinois River, and Mississippi River.

#### Port Location and Traffic.

We include the top U.S. container ports as these are important coastal intermodal terminals facilitating the transfer and distribution of goods between ships and trucks or rail (see Section [9.1.3](#app_sec:ports) for details). Geospatial data on port location comes from the USACE. Container volumes at these ports come from the Port Performance Freight Statistics Program maintained by the Department of Transportation (DOT). Figure [2](#fig:ports) visualizes the coastal ports in a geographic bubble map, where the largest container ports include Los Angeles/Long Beach and New York (Newark). Between the coastal and inland ports, we capture 98 percent of total U.S. container volumes.

#### Intermodal Terminals.

Intermodal terminals also include inland transfer points for goods moving between rail, road, and waterways. We capture the location of these intermodal terminals using the National Transportation Atlas Database (NTAD) maintained by the Department of Transportation (DOT).

#### U.S. Multimodal Transport Network.

To construct the U.S. multimodal transport network, we first combine all the geo-spatial information for each of the rail, road, and waterway networks. We then add the locations of intermodal terminals, including coastal and inland ports, as well as inland intermodal terminals. Figure [3](#fig:U.S.-Multimodal-Transportation) illustrates the resulting graph representation of the U.S. multimodal transport network consists of 288 nodes and 704 edges. The nodes are either core-based statistical areas (CBSAs) or endpoints and intersections in the network.


<a id="fig:U.S.-Multimodal-Transportation"></a>

> **U.S. Multimodal Transportation Network**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure shows the combined U.S. multimodal freight network. The original GIS information comes from the U.S. Census Bureau’s Topologically Integrated Geographic Encoding and Referencing (TIGER) Database. Red lines indicate the Class I multimodal railroad network. Blue lines indicate the interstate highway system (IHS). Black diamonds indicate freight terminals that are owned by Class I operators allow for road-to-rail or rail-to-road intermodal movements. Purple circles indicate the top 18 ports.


### Automatic Identification System (AIS) Vessel Traffic Data

We utilize automatic identification system (AIS) vessel traffic data from Marine Cadastre, a joint initiative between the Bureau of Ocean Energy Management and the National Oceanic and Atmospheric Administration. This data captures vessel location in U.S. waters at 1-minute intervals using 200 land-based receiving stations. We observe the vessel's unique identifying International Maritime Organization Vessel number (IMO) as well as longitude and latitude location down to the minute, speed, and navigation status. The vessel's navigation status captures whether the vessel is being propelled (under way using engine), or moored (held in position at a pier). Using information on the ship's speed and navigation status, we define a ship's dwell time as the time it spends moored at a pier at zero speed. This is a conservative measure of ship dwell time at ports because (1) ships spend time navigating within the port area as they prepare to moor at a pier and (2) ships can also end up waiting outside of the port area at anchor before navigating to the port ([Schmidt 2021](#ref-nyt_recordships)).

To match these ships to the ports where they are located, we use the USACE Port Statistical Area shapefiles and match these ships to the top 30 U.S. container ports. These port polygon areas also allow us to calculate the total amount of time a ship spends within the port region on top of the time it spends moored at a dock. Additionally, in order to identify the cargo capacity of these ships and their containership status, we match these ships to the USACE Port Entrance and Clearance dataset using their identifying information and when they are at these ports. See Section [9.1.4](#app_sec:ais) for examples illustrating how we observe these ships and the duration of their stay at ports. The ship cargo capacity measures the volume of the ship that can be used for loading cargo (net tonnage of a ship). This cargo capacity measure for each ship will contribute to our port traffic measure at each port every day.

#### Port Traffic

Our measure of port traffic is defined as the sum of the net tonnage of each ship moored at the port each day, multiplied by the percent of the day they spend at the port. Crucially, this measure includes ships that arrived on a prior day but remain moored at port. As an example, a ship that remained moored at port all day without exiting would contribute 100% of its net tonnage to the measure of port traffic. If that ship left at any point during that day, its net tonnage contribution would be instead determined by the amount of time it spent moored at port that day. With this daily port traffic measure, we calculate moving averages of the port-level traffic for varying time windows (3, 7, 14, 21, and 28 days). We present the 28-day moving average results in the main text and provide the remainder in the Online Appendix [9.4](#appendix:intermodal_estim).

#### Ship Dwell Times Summary Statistics

Our matched dataset has 3,755 unique vessels with 1,444 containerships. The top 30 ports in our dataset account for around 95% of all U.S. container trade by value and 98% by volume annually. For illustrative purposes, [Figure](#fig:ship_dwell) aggregates our minute- and ship-level dataset and plots the average of monthly containership dwell times across the top 30 U.S. ports from June 2015 to December 2021. The average dwell time over this period is around 33.3 hours per ship with a standard deviation of 5 hours.[^7] However, as seen in [Figure](#fig:ship_dwell), there is a significant increase in ship dwell times after 2021, averaging 42.8 hours.

Additionally, there is considerable variation in ship dwell times across different ports and time periods. Figure [4](#fig:ship_dwell_LA_LB) compares the average dwell times at the ports of Long Beach and Los Angeles (LA) to the overall average from [Figure](#fig:ship_dwell). The dwell times at both ports, 73.6 hours and 82.1 hours respectively, are more than twice the overall average. After 2021, dwell times at these ports surged even more dramatically, increasing to over 4 days at Long Beach (104 hours) and almost 6 days at LA (136 hours). This substantial variation highlights the growing congestion and delays at key intermodal terminals and the underlying interaction between ships and ports contributing to this congestion.


<a id="fig:ship_dwell_LA_LB"></a>
<a id="fig:ship_dwell"></a>

> **Containership Dwell Times at Port**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: Panel (a) plots the overall average of monthly containership dwell times across the top 30 U.S. ports from June 2015 to December 2021. Panel (b) plots the monthly containership dwell times at the top two largest U.S. ports, Long Beach and Los Angeles (red and green lines respectively), and compares their dwell times to the same Panel (a) overall average (blue line). Both panels are weighted by ship net tonnage. Sources: Authors calculations, Marine Cadastre, Bureau of Ocean Energy Management and the National Oceanic and Atmospheric Administration; International Maritime Organization; and Port Statistical Area, U.S. Army Corps of Engineers (USACE).


<a id="sec:Model"></a>

## Economic Geography Model with Multimodal Routing

In this section, we develop a tractable model of routing across multiple transport modes with mode-specific congestion, especially at intermodal terminals, and embed it in an otherwise standard economic geography model with domestic trade between discrete locations and freely mobile labor reallocation across locations ([Allen and Arkolakis 2014](#ref-aa_2014qje); [Redding 2016](#ref-REDDING2016148)). Two technical challenges arise in this environment. First, the number of feasible routes can be very large even in low-dimensional graphs, and the presence of multiple transport modes further compounds this path-enumeration problem. This curse of dimensionality makes brute-force solutions impractical. Second, existing route-choice approaches based on invertible matrix expressions, such as AA2022, do not readily accommodate a separate elasticity of substitution across modes. We address both issues by formulating route choice recursively and nesting mode choice at each segment along the route.[^8]

The main idea is to recast the equilibrium problem in terms of local link-level objects rather than the universe of full paths. This makes it possible to introduce multimodal routing, mode-specific congestion, and terminal bottlenecks into a spatial equilibrium framework while retaining closed-form transport and traffic objects that can be taken to the data. It also provides a convenient way to separate the two distinct substitution margins in the model: substitution across routes and sources, and substitution across transport modes.

We proceed as follows. Subsection [3.1](#subsec:setup) defines the multi-layered graph that represents the multimodal transport network, and specifies consumption and production. Second, Subsection [3.2](#subsec:recursive_sourcing_eqm) introduces the recursive routing choice. Subsection [3.3](#subsec:rec_eq) then expands on this to include the combined routing and sourcing choice, and resulting equilibrium. Next, Subsection [3.4](#subsec:multimodal) presents the nested transport mode choice while Subsection [3.5](#subsec:traffic) introduces congestion and the gravity equations for traffic flows. Finally, to provide further intuition for the model mechanisms, Subsection [3.6](#subsec:decomp_qual_channel_main) characterizes how changes in transport costs propagate through the network, shaping traffic and welfare outcomes.

<a id="subsec:setup"></a>

### Setup

#### Geography and transport

Let $\mathcal{G}\equiv(\mathcal{N},\mathcal{L})$ be a multigraph representing a multimodal transport network where $\mathcal{N}$ and $\mathcal{L}$ are the set of nodes and links respectively. We define the set of successor nodes $\mathcal{F}\left(i\right)$ and the set of predecessor nodes $\mathcal{B}\left(i\right)$ for each node $i\in\mathcal{N}$. Furthermore, let $\mathcal{G}_{m}\equiv(\mathcal{N}_{m},\mathcal{L}_{m})$ be the subgraph representing the transport network for mode $m$, where $\mathcal{N}_{m}\subseteq\mathcal{N}$ and $\mathcal{L}_{m}\subseteq\mathcal{L}$ are the mode-specific nodes and links respectively. We also define the mode-specific successor and predecessor nodes $\mathcal{F}_{m}\left(i\right)$ and $\mathcal{B}_{m}\left(i\right)$. Each link $ij$ in the set of $m$ mode-specific links, $ij\in\mathcal{L}_{m}$, is associated with a generalized link travel cost $t_{ij,m}$ which is specific to mode $m$ and can be endogenously dependent on flow. Within this multimodal transport network, we define a primary network, $m=1$, that represents the dense road network on which all cities and road intersections are located. All other modes, including rail and barges, are secondary transport networks ($m\neq1$). A subset of nodes on the primary and secondary networks are intermodal terminals which allow for switches between mode-specific networks.

#### Consumption and Production

A representative agent lives in location $j$, supplies one unit of labor inelastically, earns wage $w_{j}$, and consumes a continuum of varieties $\nu\in[0,1]$. Preferences are CES with elasticity of substitution $\sigma\geq 0$. We define aggregate income as $Y^W$, total labor endowment as $\bar L$, and normalize average income to one, so that $Y^W/\bar L=1$.

Each location $i$ produces a good $\nu\in\left[0,1\right]$ subject to a constant returns to scale technology and transports it to destination $j$ along a feasible route. As we detail below, transport costs are route-specific in the sense that they depend on which neighboring node the good is being sourced from. Assuming perfect competition, the price of good $\nu$ in destination $j$ from origin $i$ along neighboring node $k$ is given by $p_{ikj}=\frac{t_{k j} \tau_{i k}}{A_i} w_i$, where the marginal cost of production in $i$ is $\frac{w_{i}}{A_{i}}$, local wages are $w_{i}$, each worker can produce $A_{i}$ units of goods, and trade cost $\tau_{i k}$ is route-specific.[^9]

Next, we endogenize $\tau_{ik}$ through routing, sourcing, and mode choice within the multimodal network.


> **Recursive and Multimodal Routing**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: Panel (a) shows a directed transport network from origin o to destination d, with nodes as circles and edges representing transport costs. At node s1, an agent chooses between neighboring nodes s4 and s3, each having a continuation value for minimizing transport cost to d. Panel (b) depicts multimodal routing on a multi-layered graph, similar to Panel (a), with nodes as circles and edges linked by mode-specific transport costs. Three mode-specific graphs are shown: primary roads (yellow), secondary rail and barges (blue and red). The overall figure shows a multi-layered graph with a green example route and intermodal transfers highlighted at nodes where mode choice occurs.


<a id="subsec:recursive_sourcing_eqm"></a>

### Recursive Routing Choice

We begin with the routing block before extending the framework in the next subsection to encompass both routing and sourcing, building on recent advances in discrete route choice modeling ([Daly and Bierlaire 2006](#ref-Daly2006-lp); [Melo 2012](#ref-Melo2012-jm); [Oyama et al. 2022](#ref-Oyama2022-sj)). Rather than enumerate all feasible paths, we represent route choice recursively.

The routing decision is a joint choice of elemental links in an ordered sequence from origin $i$ to destination $j$ ([Papola and Marzano 2013](#ref-Papola2013-fc)). At each node, the agent compares the cost of moving to each neighboring node---current link cost plus the continuation value from that node to the final destination. Figure illustrates the idea. At node $s_1$, for example, the agent compares the cost of moving to $s_3$ and then continuing to $d$ against the cost of moving to $s_4$ and then continuing to $d$.

More generally, at node $i$, the agent compares the cost of moving to any neighboring node $k\in\mathcal{F}(i)$, with link cost $t_{ik}$, and then continuing from $k$ to destination $j$ with continuation cost $\tau_{kj}$. We assume transport costs are multiplicative over links and that the agent experiences a segment-specific preference shock $\varepsilon_{kj}$ that is iid Fréchet across successor nodes $k\in \mathcal{F}(i)$ with node-specific dispersion parameter $\theta_i$.[^10] Exploiting the properties of the Fréchet distribution, the expected transport cost from $i$ to $j$ is


<a id="eq:recursive_routing"></a>

$$
\tau_{i j}=\mathrm{E}\left[\min _{k \in \mathcal{F}(i)}\left\{\frac{t_{i k} \tau_{k j} }{\varepsilon_{k j}}\right\}\right]\propto \left(\sum_{k \in \mathcal{F}(i)}\left(t_{i k} \tau_{k j}\right)^{-\theta_i}\right)^{-\frac{1}{\theta_i}}
$$

 [Equation](#eq:recursive_routing) provides a recursive transport-cost index along the network topology.[^11] It has three features worth emphasizing. First, transport costs are explicitly tied to network topology through the feasible-neighbor set $\mathcal{F}(i)$. In the Figure example, the relevant choice set at $s_1$ consists only of the neighboring nodes $s_3$ and $s_4$. Second, allowing node-specific $\theta_i$ permits richer substitution patterns than the isoelastic benchmark. Third, with homogenous dispersion elasticities ($\theta_i=\theta$) and without considering multiple modes, this characterization is isomorphic to the routing characterization in AA2022,[^12] while still retaining its analytically convenient feature.

<a id="subsec:rec_eq"></a>

### Combined Routing and Sourcing Choice, and Recursive Equilibrium

We now combine the recursive routing choice in [Equation](#eq:recursive_routing) with the stochastic sourcing choice from ([Eaton and Kortum 2002](#ref-10.2307/3082019)) to derive a closed-form characterization for both route and sourcing choices. Next, we integrate the route and sourcing choice into the equilibrium conditions, relating endogenous equilibrium outcomes recursively along the network topology.

#### Routing and Sourcing

Under perfect competition, consumers (recursively) source their products by choosing the lowest-cost route-source combination. The price the consumer in $j$ faces is the expected minimum of choosing a variety $\nu$ that is both the least cost source $i$ and being routed along the lowest cost route from $i$ to $j$ utilizing the neighboring node $k$,

$$
p_j \equiv \mathbf{E}_\varepsilon \left[ \min _{(k, i) \in \mathcal{B}(j) \times N}\frac{ t_{kj} \tau_{ik} } {\varepsilon_{ikj}(\nu)}w_i \right]
$$

where, following ([Eaton and Kortum 2002](#ref-10.2307/3082019)), we assume that $\varepsilon_{ikj}\left(\nu\right)$ is iid Fréchet distributed across the set of (predecessor) neighboring nodes $k\in \mathcal{B}\left(j\right)$ and sourcing partners $i$ with scale parameter $1/A_{i}$, where $A_{i}$ captures origin-specific efficiency and $\theta_j$ is a node-specific shape parameter which regulates the inverse of shock dispersion.[^13] Given the distribution of shocks, the probability that $j$ sources a good from $i$ that is routed via neighboring node $k$ is as follows (see detailed derivations in Appendix [8.1](#Subsec:Route_Shares)),

<a id="eq:sourcing_shares"></a>

$$
\underbrace{\pi_{ij,k}}_{\substack{\text{Joint routing-sourcing prob.} \\ \text{from $i$ to $j$ via node $k$}}} = \underbrace{\frac{\tau_{ij}^{-\theta_{j}}\left(\frac{w_{i}}{A_i}\right)^{-\theta_{j}}}{\sum_{i'\in N}\tau_{i'j}^{-\theta_{j}}\left(\frac{w_{i'}}{A_{i'}}\right)^{-\theta_{j}}}}_{\text{Sourcing prob. from $i$}} \times \underbrace{\frac{\left(t_{ik}\tau_{kj}\right)^{-\theta_{j}}}{\sum_{k^{\prime}\in\mathcal{B}(j)}\left(t_{ik^{\prime}}\tau_{k'j}\right)^{-\theta_{j}}}}_{\text{Routing prob. via node $k$}} \equiv \pi_{ij} \times \pi_{ij}^{ik}
$$

where we have decomposed the combined routing-sourcing probability into two different components. The first term, $\pi_{ij}$, represents the sourcing probability given the expected bilateral transport cost, $\tau_{ij}$, defined as and is identical to the sourcing probability in ([Eaton and Kortum 2002](#ref-10.2307/3082019)) except for the inclusion of heterogeneous substitution elasticities along the network $\theta_j$. The second term, $\pi_{ij}^{ik}$, represents an implicit route choice probability, characterizing the likelihood of choosing a neighboring node $k$ amongst all neighboring nodes when sourcing from origin $i$.

#### Recursive Equilibrium

Using [Equation](#eq:sourcing_shares), we derive a generalized gravity equation and then impose goods-market clearing and balanced trade (see Appendix [8.2](#subsec:gravity_deriv) and Appendix Section [8.3](#Online_Appendix:Equilibrium)). The resulting equilibrium conditions are:


<a id="eq:recursive_eq_a"></a>

$$
\Pi_{i}^{-\theta_{i}}=\left(t_{ii}^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\tilde{\Pi}_{k}^{-\theta_{i}}, \qquad P_{j}^{-\theta_{j}}=\left(t_{jj}^{-\theta_{j}}\right)\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}P_{k}^{-\theta_{j}},
$$

where $\{\Pi_i,P_i\}$ are the producer and consumer market-access terms.[^14]

We can reformulate the equilibrium equations to solve for the spatial allocation of labor and income, allowing for a rich set of amenity and productivity spillovers. First, we assume welfare equalization, given by $W_{j}=\frac{w_{j}}{P_{j}}u_{j}$. Then, we allow for localized productivity ($A_{i}$) and amenity spillovers ($u_{i}$) that depend on the density of workers in a locality. Specifically, productivity is modeled as $A_{i}=\bar{A}_{i}L_{i}^{\alpha}$ and amenities as $u_{i}=\bar{u}_{i}L_{i}^{\beta}$, where $\bar{A}_{i}$ represents the exogenous productivity component at location $i$, and $\alpha$ measures the sensitivity of productivity to local population $L_{i}$ (capturing productivity spillovers). Similarly, $\bar{u}_{i}$ denotes the exogenous utility from residing in location $i$, while $\beta$ indicates the extent to which amenities are influenced by the local population (capturing amenity spillovers). This allows us to rewrite the price indices in terms of labor and income allocations (Footnote [note](#fn:indices) in Appendix [8.2](#subsec:gravity_deriv)). As a result, we have consumer price index $P_{j}=\frac{1}{\bar{W}}\bar{u}_{j}L_{j}^{\beta-1}Y_{j}$ and producer price index $\Pi_{i}=\bar{A}_{i}L_{i}^{1+\alpha}Y_{i}^{-\frac{\theta_i+1}{\theta_i}}$.[^15] Substituting both price indices into the equilibrium system in [Equation](#eq:recursive_eq_a), we obtain a system of equation that determines the the spatial distribution of income and labor as well as a global scalar that determines aggregate welfare $\bar{W}$ (see Appendix Section [8.3](#Online_Appendix:Equilibrium) for further details).

Specifically, given the productivity and amenity fundamentals $\left\{\bar{A}_{i}, \bar{u}_i \right\}$ as well as the aggregate transport costs, the system of $2N$ equations can be solved for the $2N$ endogenous equilibrium values. The equilibrium system determines the endogenous variables via the interaction of price indices along the network topology, where transport cost is endogenously determined as part of the equilibrium system.

Our framework has three main benefits. First, our approach allows us to nest the choice of different transport modes within the optimal route choice model, with a separate elasticity of substitution across modes from the elasticity across routes. This is possible because our model recasts the equilibrium problem in terms of edge-level outcomes and allows us to incorporate richer edge-level decision making and substitution margins. Second, we can include a rich set of mode-specific congestion patterns, including congestion at intermodal terminals as well as along the primary network. Third, we do not rely on matrix inversion methods and can derive closed-form expressions for equilibrium transport costs, traffic flows, and market access terms, which depends on mode and route choices as well as the topology of the transport network. To focus on multimodal transport networks and incorporate transport mode choice into this framework, we assume a homogeneous route choice elasticity ($\theta_j=\theta$) from now.

<a id="subsec:multimodal"></a>

### Nested Mode Choice and Aggregate Transport Cost

Previously, we considered a consumer making a route-source decision recursively, where choices are made sequentially along links of the graph. To expand this framework to incorporate routing decisions across multiple transport modes, we introduce a nested mode-choice structure into the current setup. Now, given the node the consumer has selected, she then chooses the cost-minimizing mode out of all available mode options when travelling to that node (subject to an extreme value distributed cost shock). To fix ideas, consider a consumer in location $i$ who has chosen to route via neighboring node $k$. At $k$, she then considers the different modes that are available along link $ik$, i.e. $m\in\mathcal{M}_{ik}$, where $\mathcal{M}_{ik}$ is the set of modes available between $i$ and $k$. One way to represent this is using a multi-layered graph (Figure), where the set of available nodes depends on the existing infrastructure. Each layer in Figure represent a mode-specific network, with the top red layer having fewer nodes than the blue (middle) and yellow (bottom) layers. The consumer selects a mode-specific layer for each link in the network.

In this setting we assume that the link-level and mode-specific transport costs for the primary mode is $t_{ik,1}$, but for any secondary mode $(m\neq1)$ a switching cost is imposed, i.e. $t_{ik,m}=s_{ii,m}\iota_{ik,m}s_{kk,m}$ for $m\neq1$, where $\iota_{ik,m}$ refers to the iceberg transport cost of traversing the link between node $i$ and $k$ along mode $m$. Notice that this specification is general and allows for geographies where the secondary modes might connect both primary and secondary nodes. We present the expected aggregate transport cost as the sum of the endogenous mode-specific transport cost, $t_{ik,m}$, that is available between neighboring nodes $i$ and $k$, i.e. $\mathcal{M}(i, k)$ (see detailed derivations in Appendix [8.4](#Subsec:Transport_Cost)):

$$
t_{i k}=\mathbb{E}\left[\min _{m \in \mathcal{M}(i, k)}\left\{\frac{t_{i k, m}}{ \varepsilon_{i k, m}}\right\}\right]\propto\left(\sum_{m \in \mathcal{M}(i, k)} t_{i k, m}^{-\eta}\right)^{-\frac{1}{\eta}}
$$

where the mode choice is subject to an extreme-value distributed shock with dispersion parameter $\eta$. The corresponding mode share is:

<a id="eq:mode_choice"></a>

$$
\pi_{ik}^m=\frac{t_{ik,m}^{-\eta}}{t_{ik}^{-\eta}}
$$


This nested structure introduces a second substitution margin without altering the recursive structure of the equilibrium system. The key distinction is that substitution across modes is governed by $\eta$, while substitution across routes and sources is governed by $\theta$. When $\eta=\theta$, or when only one transport mode is available, the model collapses to the single-elasticity case nested by AA2022 (Appendix [8.5](#subsec:Isomorphism_AA)).

This setup allows for a flexible introduction of transport mode choice in a setting where agents are already making endogenous routing and sourcing decisions. A lower cost for one mode affects behavior in two ways. Directly, it makes that mode relatively more attractive on the affected link. Indirectly, because the aggregate cost of the link falls, it changes the attractiveness of routes and locations that use that link. This distinction between within-link modal substitution and broader route-level reorganization will be important below.

<a id="subsec:traffic"></a>

### Congestion and Traffic Flows

To introduce congestion, we proceed in three steps. First, we characterize aggregate traffic on the network. Second, we derive mode-specific and terminal traffic. Third, we let these traffic objects feed back into transport costs through road and terminal congestion.

#### Traffic Flows on the Aggregate Network

We start by constructing a measure of link intensity---the probability that route $i$ to $j$ is used and the likelihood of selecting a specific link $kl$ on that route:

<a id="eq:link_intensity"></a>

$$
\pi_{i j}^{k l}=\left(\frac{\tau_{i j}}{\tau_{i k} t_{k l} \tau_{i j}}\right)^{\theta}
$$

 This formula follows directly from our recursive routing choice framework (see Appendix [8.6.1](#ap_sec:traffic_agg)). We then use these derivations to define a gravity equation for aggregate traffic flows on link $kl$,

<a id="eq:eq_traffic_1"></a>

$$
\Xi_{k l}=t_{k l}^{-\theta} \times P_{k}^{-\theta} \times \Pi_{l}^{-\theta}
$$

where traffic flows are a function of inward, $P_{k}^{-\theta}$, and outward market access measures, $\Pi_{l}^{-\theta}$, as well as the aggregate transport cost for that link across the multimodal transport network.

#### Traffic Flows on the Mode-Specific Networks

The nested choice implies that the probability of using route $ij$, selecting link $kl$, and choosing mode $m$ on that link is

$$
\pi_{ij,kl,m}=\pi_{ij}\times \pi_{ij}^{kl}\times \pi_{kl}^{m},
$$

where $\pi_{ij}$ is the joint source-route share from [Equation](#eq:sourcing_shares), $\pi_{ij}^{kl}$ is the link-use probability from [Equation](#eq:link_intensity), and $\pi_{kl}^{m}=t_{kl,m}^{-\eta}/t_{kl}^{-\eta}$ is the conditional mode share on link $kl$. Summing over origins and destinations yields mode-specific traffic (see Appendix Section [8.6.2](#ap_sec:traffic_mode) for details),

<a id="eq:traffic_modal"></a>

$$
\Xi_{k l, m}=\sum_{i \in \mathcal{N}} \sum_{j \in \mathcal{N}} \pi_{i j, k l, m} E_j=t_{k l, m}^{-\eta} \times t_{k l}^{\eta-\theta} \times P_k^{-\theta} \times \Pi_l^{-\theta}
$$

 which shows that the mode-specific traffic is the conditional mode share of aggregate traffic, i.e. $\Xi_{kl,m}=\pi_{kl}^{m}\Xi_{kl}$. This expression makes the two layers of the model transparent. First, aggregate traffic depends on the composite link cost and market access. Mode-specific traffic then allocates this aggregate flow across modes according to their relative costs.

#### Traffic Flows at Terminals

We next characterize traffic at terminals where goods switch between the primary and secondary modal networks. Summing mode-specific traffic over all successor nodes reachable through terminal $k$ on mode $m$ yields (see Appendix [8.6.3](#ap_sec:traffic_terminal) for details),

<a id="eq:traffic_terminals"></a>

$$
\Xi_{kk,m}=P_{k}^{-\theta}\times s_{kk,m}^{-\eta}\times\sum_{l\in\mathscr{F}_{m}(k)}\left(\tau_{kl,m}s_{ll,m}\right)^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta},
$$

 This equation differs slightly from the two previous traffic equations due to an additional summation term. This term, a higher-order market access measure, shows how traffic flows through a terminal depends on the sum of traffic generated by nodes that can be accessed via that terminal along the secondary network. This term also captures the centrality of terminals in connecting primary and secondary networks, highlighting their potential to become bottlenecks in the overall transport network.

#### Congestion on the Primary Transport Network.

Having derived traffic flows, we now incorporate congestion on the primary network and then at terminal stations.[^16] The congestion model for the primary network is based on AA2022, assuming that travel costs on a link depend on its traffic volume,

<a id="eq:primary_congestion"></a>

$$
t_{kl}=\bar{t}_{kl}\left(\Xi_{kl,1}\right)^{\lambda_{1}},
$$

where $\lambda_1$ determines the strength of congestion on the primary network, $\overline{\mathbf{T}} \equiv\left[\bar{t}_{k l}\right]$ is the primary network's infrastructure, and $\Xi_{kl,1}$ is the network's link-level traffic flows. As long as $\lambda_1>0$, transport cost on a link increases as its traffic flow increases.[^17] Using this expression, we first state the primary network's transport costs as a function of its infrastructure, aggregate-level transport costs, and market access terms ($t_{kl,1}$, first equation below). Next, we combine this transport cost with [Equation](#eq:eq_traffic_1) to express the equilibrium traffic flows ($\Xi_{kl,1}$, second equation below):

<a id="eq:primary_traffic_congestion"></a>

$$
t_{kl,1}=\bar{t}_{kl,1}^{\frac{1}{1+\eta\lambda_{1}}}\times t_{kl}^{\frac{\lambda_{1}\left(\eta-\theta\right)}{1+\eta\lambda_{1}}}\times P_{k}^{\frac{-\theta\lambda_{1}}{1+\eta\lambda_{1}}}\times\Pi_{l}^{\frac{-\theta\lambda_{1}}{1+\eta\lambda_{1}}},\quad    \Xi_{kl,1}=\bar{t}_{kl,1}^{\frac{-\eta}{1+\eta\lambda_{1}}}\times t_{kl}^{\frac{\eta-\theta}{1+\eta\lambda_{1}}}\times P_{k}^{\frac{-\theta}{1+\eta\lambda_{1}}}\times\Pi_{l}^{\frac{-\theta}{1+\eta\lambda_{1}}}
$$

 The equilibrium traffic flows on the primary network depend on the fundamental transport capacity and aggregate transport cost of each link ($\bar{t}_{kl,1}$ and $t_{kl}$), both inward and outward market access terms, as well as the strength of the congestion externality ($\lambda_1$). Intuitively, as better market access improves traffic flow on each link, this also increases congestion which mutes its overall impact.

#### Congestion at Intermodal Terminals.

When introducing congestion at terminals, we assume that the direct cost of transiting through a terminal depends on the overall traffic at the terminal,

<a id="eq:transport_cost_terminal_on"></a>

$$
s_{kk,m}=\bar{s}_{kk,m}\left[\Xi_{kk,m}\right]^{\lambda_{m}} , \quad \text{where}\quad  m\neq 1
$$

where $\lambda_m$ specifies the strength of congestion at terminals, $\overline{\mathbf{S}} \equiv\left[\bar{s}_{kk,m}\right]$ is the switching matrix that connects primary and secondary modes, and $\Xi_{kk,m}$ denotes the traffic at the terminal station. Combining with the terminal traffic expression ([Equation](#eq:traffic_terminals)), the transport cost for secondary modes, $t_{kl,m}$, is

<a id="eq:switching_cost_endog"></a>

$$
t_{kl,m}=\bar{s}_{kk,m}\times\tau_{kl,m}\times\bar{s}_{ll,m}\times P_{k}^{-\theta\lambda_{m}}\times\Pi_{l}^{-\theta\lambda_{m}}\times P_{k,m}^{-\theta\lambda_{m}}\times\Pi_{l,m}^{-\theta\lambda_{m}}, \quad \text{where}\quad  m\neq 1
$$

where $P_{l,m}\equiv\sum_{k\in\mathcal{B}\left(l\right)}t_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta}$ and $\Pi_{k,m}\equiv\sum_{l\in\mathcal{F}\left(k\right)}t_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}$ define mode-specific market access measures. Intuitively, if $\lambda_m>0$, transport cost increases with increasing traffic at the terminal. By combining [Equation](#eq:switching_cost_endog) with our modal traffic expression ([Equation](#eq:traffic_modal)), we determine the traffic flows for the secondary modes while taking into account endogenous congestion at terminals,

<a id="eq:eq_flows_modal"></a>

$$
\Xi_{kl,m}=\bar{s}_{kk,m}^{-\eta}\times\tau_{kl,m}^{-\eta}\times\bar{s}_{ll,m}^{-\eta}\times P_{k,m}^{\eta\theta\lambda_{m}}\times\Pi_{l,m}^{\eta\theta\lambda_{m}}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta(1-\eta\lambda_{m})}\times\Pi_{l}^{-\theta(1-\eta\lambda_{m})}, \quad \text{where}\quad  m\neq 1
$$


While increases in both incoming and outgoing market access measures generally increases traffic flows ([Equation](#eq:eq_traffic_1)), we highlight how these market access terms contribute to traffic flows on both the primary and secondary networks while taking congestion into account (Equations [Equation](#eq:primary_traffic_congestion) and [Equation](#eq:eq_flows_modal) respectively). Specifically, terminal congestion ($\lambda_m$) can reduce the appeal of multimodal routes and consequently decrease traffic on the secondary network ([Equation](#eq:eq_flows_modal)). This highlights the significant role terminals can have as potential bottlenecks within a multimodal network. In Section [4.2](#subsec:port_congestion), we estimate the terminal congestion elasticity by focusing on one important type of intermodal terminal: ports.

<a id="subsec:decomp_qual_channel_main"></a>

### Decomposing the Qualitative Channels

To build intuition, this section characterizes how transport cost changes propagate through the network, affecting traffic and welfare. A lower mode-specific transport cost on link $kl$ first changes traffic allocation across modes on that link and then across routes in the network. These adjustments then determine whether the resulting traffic increase is absorbed by congestion across links and at terminals, or converted into welfare gains through better connectivity and market access. The recursive equilibrium system developed earlier in Section [3.2](#subsec:recursive_sourcing_eqm) allows for a particularly convenient application of the inverse function theorem to characterize welfare elasticities in closed-form, following ([Allen et al. 2025](#ref-allen2025evaluating)). We extend these results further to derive decompositions of the welfare elasticities, with the goal of isolating the contributions of the four main ingredients in our model: road and terminal congestion, productivity and amenity spillovers, multiple modes, and endogenous routing.

#### Traffic Adjustments: Substitution and Complementarity Across Modes

We start with the traffic adjustments. On link $kl$, mode-specific traffic $\Xi_{kl,m}$can be written as

<a id="eq:traffic-block-main"></a>

$$
\Xi_{kl,m}=\pi_{kl}^{m}\,\Xi_{kl},
\qquad
\pi_{kl}^{m}\equiv\frac{t_{kl,m}^{-\eta}}{t_{kl}^{-\eta}},
\qquad
\Xi_{kl} \equiv t_{kl}^{-\theta}P_k^{-\theta}\Pi_l^{-\theta},
$$

where $t_{kl,m}$ is the cost of moving on link $kl$ using mode $m$, $t_{kl}$ is the corresponding aggregate link cost, $\eta$ is the elasticity of modal substitution, $\theta$ is the elasticity governing route and trade substitution, while $P_k$ and $\Pi_l$ are outgoing and incoming market access terms at $k$ and $l$. A mode-specific cost change therefore works through two traffic-side margins. First, it changes the conditional mode share on link $kl$ ($\pi_{kl}^{m}$), so traffic is reallocated across modes on that link. Second, it changes the aggregate cost of using that link, which changes the market access of the locations connected to it and the total traffic on that link ($\Xi_{kl}$). Appendix [8.7](#app:traffic-adjustments) shows that, for an alternative mode $m\neq m'$, mode-specific transport cost changes can generate the following direct and indirect traffic adjustments:

<a id="eq:traffic-subcomp-main"></a>

$$
\frac{d\ln \Xi_{kl,m}}{d\ln t_{kl,m'}}
\approx
\Bigl[
\underbrace{\eta}_{\text{direct substitution}}
-
\underbrace{\theta\bigl(1+[\widetilde\Omega^{t,P}]_{kl}+[\widetilde\Omega^{t,\Pi}]_{kl}\bigr)}_{\text{indirect complementarity}}
\Bigr]\varpi_{kl,m'},
$$

where $\varpi_{kl,m'}\equiv \Xi_{kl,m'}/\sum_n \Xi_{kl,n}$ is the baseline traffic share of mode $m'$ on link $kl$, and $\widetilde\Omega^{t,P}$ and $\widetilde\Omega^{t,\Pi}$ are reduced-form centrality objects that summarize how a change in the cost of link $kl$ propagates into inward and outward market access.

The first term in Equation [Equation](#eq:traffic-subcomp-main) captures direct *modal substitution*: if mode $m'$ becomes cheaper, traffic shifts toward it and away from alternative mode $m$ on the same link. In the example from the introduction, improving a link on the road network reduces road transport costs, making rail transport relatively more expensive and shifting traffic from rail to road on that link. The second term captures the broader indirect *modal complementarity* effect: because the aggregate cost of link $kl$ falls, that link becomes more attractive within the network as a whole, which raises total traffic and market access and can increase traffic on other modes as well. Better road access can thereby increase transport demand across all modes including rail. The strength of this latter channel is stronger for links that are more central within the network. We now turn to the welfare implications of these traffic adjustments.

#### Welfare Decomposition: Congestion and Reallocation Wedges

The traffic expression above in Equation [Equation](#eq:traffic-subcomp-main) studies a *mode-specific* perturbation $d\ln t_{kl,m'}$. Here, the welfare decomposition values that same kind of local transport change through the welfare elasticity of a marginal reduction in the primitive mode-specific cost $\bar t_{kl,m}$ on link $kl$. Under the common-baseline convention used throughout, the mode-specific shock is first mapped into the composite cost of link $kl$ and then propagated through the same equilibrium system under different model variants---each shutting down one main ingredient in our model in order to isolate its contribution. Appendix [8.8](#Subsec:decomp_qual_channel) shows that this mapping is proportional to the conditional mode share on the link, so the normalized multiplier remains link-specific while the exposure term remains mode-specific. With that interpretation in mind, let

<a id="eq:normalized-gain-main"></a>

$$
E_{kl,m}^c \equiv  -\frac{d\ln W^c}{d\ln \bar t_{kl,m}}
= \rho\,\Xi_{kl,m}\,m_{kl}^c,
$$

where $E_{kl,m}^c$ is the local welfare elasticity under model variant $c$, $\Xi_{kl,m}$ is the observed baseline traffic of mode $m$ on link $kl$, $\rho$ is a common scaling term, and $m_{kl}^c$ is the exact local multiplier that summarizes how the same initial mode-specific link improvement works its way through the network under that variant.[^18] $\Xi_{kl,m}$ tells us how exposed the economy is to the improved mode-specific link, while $m_{kl}^c$ tells us whether the resulting extra traffic is reallocated toward more valuable routes and modes, runs into congestion across links or at terminals, or generates broader market-access gains.

To individually isolate the contributions of four main mechanisms in our model, we compare the full model $F$ to the following model variants ($c\in \{\text{NC, NT, RO, FR, H}\})$: a no-congestion benchmark $\mathrm{NC}$, a no-terminal-congestion benchmark $\mathrm{NT}$, a road-only benchmark $\mathrm{RO}$ that suppresses multimodal flexibility, a fixed-routing benchmark $\mathrm{FR}$ that suppresses endogenous rerouting, and a Hulten benchmark that shuts down agglomeration and dispersion externalities $H$.[^19] Across all of these comparisons, the same initial mode-specific link improvement is evaluated at the observed transport assignment; what changes is not the shock itself, but which margins are allowed to respond after it hits. We define the four transport-side wedges as follows,

<a id="eq:main-wedge-defs-sec2"></a>

$$
\underbrace{
    d_{kl}^{\text{road}} \equiv m_{kl}^{\text{NC}}-m_{kl}^{\text{NT}}, \quad
    d_{kl}^{\text{term}} \equiv m_{kl}^{\text{NT}}-m_{kl}^F
}_{\text{Congestion Wedges}},
\quad \quad
\underbrace{
    d_{kl}^{\text{mode}} \equiv m_{kl}^F-m_{kl}^{\text{RO}}, \quad
    d_{kl}^{\text{route}} \equiv m_{kl}^F-m_{kl}^{\text{FR}}
}_{\text{Reallocation Wedges}}
$$

where $d_{kl}^{\text{road}}$ and $d_{kl}^{\text{term}}$ are the *congestion wedges*: they measure how much of the potential gains are absorbed once congestion, across links and at terminals, is allowed to bind. Specifically, road congestion wedge $d_{kl}^{\text{road}}$ is defined as the difference between no‑congestion benchmark $m_{kl}^{\mathrm{NC}}$ and no‑terminal‑congestion benchmark $m_{kl}^{\mathrm{NT}}$, isolating the welfare loss due to link‑level road congestion. The terminal congestion wedge $d_{kl}^{\text{term}}$ is the difference between $m_{kl}^{\mathrm{NT}}$ and the full model $m_{kl}^F$, capturing terminal bottlenecks. In contrast, $d_{kl}^{\text{mode}}$ and $d_{kl}^{\text{route}}$ are the *reallocation wedges*: they measure whether the way traffic reallocates across modes and routes makes the improved link more valuable or easier to substitute away from. The mode reallocation wedge $d_{kl}^{\text{mode}}$ is defined as the difference between the full model $m_{kl}^F$---with multiple modes---and the road‑only benchmark $m_{kl}^{\mathrm{RO}}$ while the route reallocation wedge $d_{kl}^{\text{route}}$ is defined as the difference between the full model $m_{kl}^F$ and the fixed‑routing benchmark $m_{kl}^{\mathrm{FR}}$.

The welfare effects of the full model can be decomposed into distinct qualitative channels forming an explicit decompositional "ladder\" over the set of benchmark models:

<a id="eq:main-exact-ladder"></a>

$$
\underbrace{m_{kl}^F}_{\substack{\text{Full}\\\text{Model}}}
=
\underbrace{m_{kl}^{\mathrm{NC}}}_{\substack{\text{No-Congestion}\\\text{Model}}}-d_{kl}^{\mathrm{road}}-d_{kl}^{\mathrm{term}}
=
\underbrace{m_{kl}^{\mathrm{NT}}}_{\substack{\text{No-Terminal}\\\text{Congestion Model}}}-d_{kl}^{\mathrm{term}}
=
\underbrace{m_{kl}^{\mathrm{RO}}}_{\substack{\text{Road-Only}\\\text{Model}}}+d_{kl}^{\mathrm{mode}}
=
\underbrace{m_{kl}^{\mathrm{FR}}}_{\substack{\text{Fixed-}\\\text{Routing Model}}}+d_{kl}^{\mathrm{route}}.
$$


In addition to this transport-side ladder, it is useful to keep the efficient-equilibrium ([Hulten 1978](#ref-hulten1978growth)) benchmark in view.[^20] This is the natural comparison point for our Hulten terms: it is the benchmark valuing the welfare effect of a local transport improvement solely by its baseline traffic while excluding agglomeration and dispersion externalities (productivity and amenity effects). The benchmark gap is

$$
h_{kl}
 \equiv
 \frac{E_{kl,m}^{H}-E_{kl,m}^{F}}{\Xi_{kl,m}}
 =
 \rho\bigl(m_{kl}^{H}-m_{kl}^{F}\bigr)
 =
 (1-\rho)+\rho(1-m_{kl}^{F}),
 \qquad
 \Delta_{kl,m}^{\mathrm{Hulten}}=\Xi_{kl,m}h_{kl}.
$$

 Unlike $d_{kl}^{\mathrm{road}}$, $d_{kl}^{\mathrm{term}}$, $d_{kl}^{\mathrm{mode}}$, and $d_{kl}^{\mathrm{route}}$, the Hulten gap is not a comparison between two transport-side Jacobian variants. Instead, it benchmarks the full equilibrium multiplier against the efficient-equilibrium Hulten object in which the welfare gain is proportional to the baseline traffic share. Economically, $h_{kl}$ measures the departure of the full-model welfare elasticity from that efficient benchmark: it is positive when congestion and externality feedback attenuate the gain relative to the traffic-share benchmark, and negative when network and spillover feedback amplify the gain beyond it.

We discuss each of these wedges qualitatively (formal characterization in Appendix [8.8](#Subsec:decomp_qual_channel)). Proposition [Proposition](#prop:congestion-wedges) shows that the road and terminal *congestion wedges* can be written as the interaction between two things: (1) how much a mode‑specific link improvement increases traffic on congested road or terminals, and (2) how valuable it is to relieve congestion on those margins. Economically, they capture congestion losses: when improvements push traffic toward already congested road links or heavily used terminals, part of the traffic-side complementarity in [Equation](#eq:traffic-subcomp-main) is absorbed by congestion elsewhere in the network rather than passed through to welfare.

Turning to the mode and route *reallocation wedges*, Proposition [Proposition](#prop:reallocation-wedges) shows that each wedge can be decomposed into three parts:

<a id="eq:main-three-channel"></a>

$$
d_{kl}^{\mathrm{mode}}
=
d_{kl,\mathrm{alloc}}^{\mathrm{mode}}+d_{kl,\mathrm{cong}}^{\mathrm{mode}}+d_{kl,\mathrm{glob}}^{\mathrm{mode}},
\qquad
d_{kl}^{\mathrm{route}}
=
d_{kl,\mathrm{alloc}}^{\mathrm{route}}+d_{kl,\mathrm{cong}}^{\mathrm{route}}+d_{kl,\mathrm{glob}}^{\mathrm{route}}.
$$

where the first term captures local reallocation effects: how lower costs on link $kl$ change nearby mode use and routing ($d_{kl,\mathrm{alloc}}^{\mathrm{mode}}$ and $d_{kl,\mathrm{alloc}}^{\mathrm{route}}$). The second term captures the resulting congestion feedback from the reallocation ($d_{kl,\mathrm{cong}}^{\mathrm{mode}}$ and $d_{kl,\mathrm{cong}}^{\mathrm{route}}$), while the third term captures broader spatial feedback as changes in transport access reallocate activity and demand across locations through market access channels.

This three-way decomposition sharpens the economic interpretation of the *reallocation wedges*. An overall positive mode wedge means that multimodal flexibility raises the value of the mode-specific link improvement because modal reallocation and its congestion consequences reinforce the improvement, and broader equilibrium feedback does not offset that effect. A negative mode wedge means that extra modal flexibility mainly allows traffic to substitute away from the improved link. From the earlier example, a positive mode wedge means that multimodal flexibility raises the value of a road-link improvement by expanding overall transport activity on that link, including rail, while a negative mode wedge means that this flexibility reduces reliance on the improved link, lowering its marginal welfare value.

For the route reallocation wedge, a positive wedge means that endogenous rerouting reinforces the value of the improved link by shifting traffic onto complementary paths that make the improved link more central within the network. A negative route wedge instead implies that rerouting reduces the network's dependence on the improved link by opening up alternative paths. For example, a road-link improvement can have a positive route wedge if rerouting directs traffic toward other road or rail links that are connected to the improved road, but a negative route wedge if it diverts traffic toward substitute corridors that diminish the role of that road segment.

We further provide conditions under which the wedges can be signed. Under the one-sided conditions reported in Appendix [8.8.4](#app:sign-bound), the *congestion wedges* are positive because additional traffic on already congested links or at terminals lowers the pass-through from a transport improvement to welfare. For the *reallocation wedges*, the appendix provides sufficient conditions and a dominance criterion: they are positive when the value created by local route and mode reallocation, together with the associated congestion relief, is larger than the offsetting aggregate feedback term.

Taken together, the section says one thing. A cheaper link first reorganizes traffic. That reorganization then either runs into congestion across links or at terminals, or increases the usefulness of the link within the broader network. The traffic decomposition identifies where the shock creates substitution and complementarity, while the welfare decomposition shows whether those same adjustments appear mainly as *congestion wedges* or as *reallocation wedges*.

<a id="sec:Estimation"></a>

## Estimation: Modal Substitution and Terminal Congestion

In order to quantify our model, we require two key elasticities. First, to motivate the mode choice channels in our model, we require an elasticity of substitution between transport modes ($\eta$). In Section [4.1](#subsec:modal_sub) we estimate this elasticity by examining how traffic shifts between modes in response to cost changes in a one mode. Second, the counterfactual equilibrium in our model depends on the strength of the congestion forces within the network, particularly at intermodal terminals $(\lambda_m)$.[^21] In Section [4.2](#subsec:port_congestion), we estimate $\lambda_m$ by analyzing the relationship between ship dwell times and port traffic. We demonstrate that this elasticity, though estimated using port terminals, also applies to inland intermodal rail terminals.

<a id="subsec:modal_sub"></a>

### Estimating the Elasticity of Modal Substitution

We start by motivating our approach to estimate the elasticity of modal substitution $\eta$, and its structural interpretation through the lens of our model, as discussed in Section [3.6](#subsec:decomp_qual_channel_main). Next, we explain how we estimate this elasticity by adopting the research design from Duranton and Turner ([2011](#ref-duranton2011fundamental)) and incorporating the focus on relative modal responses from Hummels and Schaur ([2013](#ref-hummels2013time)) and Lugovskyy et al. ([2025](#ref-lugovskyy2022unintended)). Third, we conduct several robustness checks to validate our results.

First, consider a mode-specific transport cost decrease, such as a local road improvement. As discussed in Subsection [3.6](#subsec:decomp_qual_channel_main), this improvement has both direct and indirect effects on traffic. Directly, lower road costs will substitute traffic from rail or barges to road. The strength of this substitution effect directly depends on the parameter of interest $\eta$. Indirectly, lower road costs will reduce aggregate trade costs and improve overall market access across all modes (the complementarity effect). Since we are interested in estimating $\eta$, the complementarity effect constitutes confounding variation, as changes in mode-specific traffic are endogenous to changes in both incoming and outgoing market access ([Equation](#eq:traffic-subcomp-main)). We address this, and demonstrate more formally in the Appendix [9.2](#Online_Appendix:Regression_Design), by examining the instrumented changes in relative modal traffic responses (modal split) to mode-specific cost changes, rather than through the mode-specific traffic responses directly ([Equation](#eq:deriv_regression_ratio), Appendix [9.2](#Online_Appendix:Regression_Design)).

#### Empirical Strategy

Our approach builds on Duranton and Turner ([2011](#ref-duranton2011fundamental)) (hereafter abbreviated to DT2011), who found that improving road infrastructure by increasing lane kilometers of interstate highways, increases the vehicle-kilometers traveled (VKT) in U.S. metropolitan cities, particularly for commercial freight trucks. To address the endogeneity between VKT demand and road stock changes at the metropolitan statistical area (MSA) level, the paper utilizes three instruments: kilometers of preliminary interstate highway from the 1947 highway plan in each MSA ([Baum-Snow 2007](#ref-baum2007did); [Michaels 2008](#ref-michaels2008effect)), kilometers of 1898 railroads in each MSA, and 1528-1850 exploration routes.[^22]

By aggregating our waybill rail traffic data to the MSA level and matching it to the DT2011 data, we are able to estimate the elasticity of modal substitution. We do this by studying how traffic shifts between modes in response to cost changes in one mode, specifically the effect of reduced road costs via interstate highway improvements on relative rail and truck road traffic flows.[^23] We start with the following OLS specification with fixed effects from DT2011:


<a id="eq:ModalSub_OLS"></a>

$$
\ln Y_{cy} = \alpha \ln \text{Interstate Highway Lanes}_{cy} + \psi C_{cy} + \zeta_{c} + \iota_{y} + \varepsilon_{cy}
$$

where $\ln Y_{cy}$ is log traffic use outcomes for MSA $c$ in year $y$, and $\ln \text{Interstate Highway Lanes}_{cy}$ is log number of interstate highway lanes going through MSA $c$ which proxies for its road infrastructure in year $y$. $C_{jt}$ are city-specific time-varying controls from DT2011 that includes population, geography, census divisions, and socioeconomic characteristics. We include MSA ($\zeta_{c}$) and year ($\iota_{y}$) fixed effects.

We measure road traffic use with truck VKT from DT2011, since our focus is on commercial freight transport. To match truck traffic use (measured in vehicle-kilometers traveled), we measure rail traffic use in total railcar-kilometers-traveled for each city. Our detailed rail data also allow us to calculate rail traffic use by destination (incoming rail traffic use) and by origin (outgoing rail traffic use). We also observe rail car weight and construct an alternative measure of rail traffic use by weight in weight-kilometers-traveled. In order to measure relative changes between truck and rail use for U.S. cities in response to road infrastructure improvements, we take the ratio of rail traffic use (measured in railcar-kilometers or weight-kilometers) to road traffic (measured in truck vehicle-kilometers) for city $c$ in year $t$ $\left(\frac{\text{Rail Traffic Use}_{cy}}{\text{Road Traffic Use}_{cy}}\right)$.

#### OLS Results

We begin by describing the road-specific and rail-specific responses, followed by the relative rail-to-road response. As mentioned earlier, a decrease in road cost will increase its traffic flows ([Equation](#eq:eq_traffic_1)). With our matched rail and truck data, we first show that we can replicate the significant positive road traffic use estimates from DT2011. Our OLS estimates (Columns (1) and (2), [Table](#tab:DT_replicate)) are within one standard error of their results (Columns (6) and (7), Table 9 of DT2011). Second, using our rail traffic use measure, we find a noisy, negative relationship with the decrease in road costs (Columns (1) and (2), [Table](#tab:iv_carload_dist by TOT)). These OLS coefficients are imprecisely estimated due to the two opposing substitution and complementarity forces shown in [Equation](#eq:traffic-subcomp-main) and discussed in Subsection [3.6](#subsec:decomp_qual_channel_main): while a decrease in road costs raises rail costs relative to roads, thereby *reducing* rail traffic, it can also lower aggregate transport costs for the city and improve overall market access, thereby *increasing* demand for rail traffic.

Next, we study the relative modal split responses in rail and road traffic use. In Columns (1) and (2) of [Table](#tab:iv_modalsub_carload by TOT), we find that relative rail-to-truck traffic use has a negative and significant relationship with road infrastructure improvement in U.S. cities. This result is robust to including city-level and year-level fixed effects, as well as time-varying city-level controls such as socioeconomic characteristics and population. Note that this result, a coefficient of -1.4, is *not* mechanically driven by the inverse of the road traffic use estimate. In particular, this estimate is lower in absolute terms and differs by more than one standard error from the road traffic use OLS estimate of +1.6 from [Table](#tab:DT_replicate) (Columns (1) and (2)). Further, this negative relationship is robust to measuring rail traffic use in terms of rail weight (Columns (1) and (2), [Table](#tab:iv_modalsub_weight by TOT)).

<a id="tab:iv_modalsub_carload by TOT"></a>

> **Elasticity of Modal Substitution**

------------------------------- --------- --------- --------- --------- ---------
                                    \(1\)     \(2\)     \(3\)     \(4\)     \(5\)
  Rail to Road Traffic Use           OLS       OLS       IV        IV        IV
  Interstate Highway Lane KM       -1.432    -1.432    -0.867    -1.249    -1.099
                                   (0.195)   (0.196)   (0.376)   (0.388)   (0.364)
  Population                                 -0.150     0.699     1.092     0.891
                                             (0.337)   (0.289)   (0.328)   (0.306)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  MSA FE
  Year FE
  Observations                       658       658       658       658       658
  R-squared                         0.88      0.88      -0.03     0.23      0.27
  KP F-stat                                             14.48     10.76     10.04
  ------------------------------- --------- --------- --------- --------- ---------

**Notes:** Robust standard errors clustered by MSAs in parentheses. All variables are in logs. Rail traffic use, measured in railcar-kilometers, is constructed using confidential rail waybill data. Truck traffic use (in vehicle-kilometers) and other variables are from Duranton and Turner ([2011](#ref-duranton2011fundamental)). Instruments are 1835 exploration routes, 1898 railroad route kilometers, and 1947 planned interstate highways. Each regression includes 658 observations corresponding to 221 MSAs for each regression. See [Table](#tab:DT_replicate_first) for first stage regressions.

#### IV Strategy

Since transport infrastructure and traffic use may be simultaneously determined, we require an instrumental variable (IV) approach to identify the causal effects of road infrastructure on rail traffic use and modal substitution. We employ the three instruments used in DT2011 to predict the stock of roads in U.S. cities and estimate the following two-stage least-squares IV regression:

<a id="eq:ModalSub_IV"></a>

$$
\begin{aligned}

    \begin{split}
        \ln \text{Interstate Highway Lanes}_{cy} &= \eta_1 \ln \text{Instruments}_{c} + \kappa C_{cy} + \iota_{y} + \nu_{cy} \\
         \ln Y_{cy} &= \eta_2 \ln \text{Interstate Highway Lanes}_{cy} + \phi C_{cy} +  \iota_{y} + \mu_{cy}
    \end{split}
\end{aligned}
$$

where $\ln Y_{cy}$ is log traffic use outcomes for MSA $c$ in year $y$, $\ln \text{Instruments}_{c}$ is the set of three instruments discussed earlier, $\ln \text{Interstate Highway Lanes}_{cy}$ is log number of interstate highway lanes going through each city $c$, which proxies for the road infrastructure for that city in year $y$. $C_{jt}$ are city-specific time-varying controls including population, physical geography, census divisions, and socioeconomic characteristics from DT2011, and $\iota_{y}$ is year fixed effects.

The validity of the IV strategy requires that the instrument be uncorrelated with unobserved changes in both road and rail traffic use, including changes in the relative mode-specific market access (Appendix [9.2](#Online_Appendix:Regression_Design)), conditional on the control variables and fixed effects in [Equation](#eq:ModalSub_IV). As detailed in DT2011 and later papers, the first instrument, the 1947 highway plan, aimed to connect major 1940s population centers rather than anticipate future traffic or population growth. The second instrument, the 1898 railroad network, was developed by for-profit private companies operating during that time in a smaller agricultural economy, rather than to anticipate demand for transport 100 years later. The third instrument, the 1528-1850 exploration routes, were expeditions to find efficient paths between places, instead of anticipating transport demand in cities 150 years later. Additionally, controlling for historical population and physical geography helps address potential confounders in these instruments.

#### Results: Elasticity of Modal Substitution

We first show that we can replicate the road traffic use IV results in DT2011 with our matched data set. Our IV estimates in Columns (3) and (4) ([Table](#tab:DT_replicate)) are within one standard error of their results (Columns (9) and (10), Table 9 of DT2011). Similar to them, we find that the IV estimates are slightly higher than the OLS estimates. Our results are also robust to including socioeconomic characteristics (Column (5), [Table](#tab:DT_replicate)). Next, we find that road infrastructure has a positive and noisy impact on rail traffic (Columns (3) to (5), [Table](#tab:iv_carload_dist by TOT)), suggesting that the complementarity effect dominates the substitution effect ([Equation](#eq:traffic-subcomp-main), Subsection [3.6](#subsec:decomp_qual_channel_main)).

Turning to the modal split responses, we find that road infrastructure improvements result in a larger increase in road traffic use relative to the rail increase---resulting in a decrease in the ratio of rail to road traffic use. A 1 percent increase in interstate highways causes a 0.9-1.2 percent decrease in rail to road traffic use (Columns (3) to (5), [Table](#tab:iv_modalsub_carload by TOT)). We use the estimate from the most conservative specification as our elasticity of modal substitution, $\eta=1.099$ (Column (5), [Table](#tab:iv_modalsub_carload by TOT)). Again, this result cannot be trivially attributed to the inverse of the road traffic use estimate: our estimates are lower in absolute terms and beyond one standard error from the road traffic use estimates, where a 1 percent increase in interstate highways causes a 1.7-2.1 percent increase in road traffic use (Columns (3) to (5), [Table](#tab:DT_replicate)).

To place our estimates in context, we next compare our modal substitution elasticity to the existing literature. Most of the economics literature focus on the substitution between ocean and air freight ([Harrigan 2010](#ref-harrigan2010airplanes); [Hummels and Schaur 2013](#ref-hummels2013time); [Lugovskyy et al. 2025](#ref-lugovskyy2022unintended); [Tolva 2025](#ref-tolva2025one)) or between bulk and container shipping within ocean freight ([Coşar and Demir 2018](#ref-cosar2017shipping)).[^24] Compared to studies on ocean and air freight, our estimates are generally smaller in magnitude, likely due to the higher costs of air shipping leading to a higher elasticity of substitution.[^25] In the transportation literature, our findings are broadly consistent with studies that focus on the substitution between rail and truck, with existing estimates falling within the confidence interval of our baseline estimate ([Oum 1979](#ref-oum1979cross), [1989](#ref-oum1989alternative); [Beuthe et al. 2014](#ref-beuthe2014estimating)).[^26]

#### Robustness Checks

We conduct several robustness checks of our elasticity of modal substitution. First, using an alternative measure of rail traffic by weight, we find estimates that retain the same sign and are within one standard error of our baseline (Columns (3) to (5), [Table](#tab:iv_modalsub_weight by TOT)). Second, since our rail traffic data is available at a more disaggregated level, we can examine incoming and outgoing rail traffic use separately. Using the ratio of directional rail traffic use to road traffic use, we find that these results again retain the same sign and are within one standard error of our baseline results, suggesting that both incoming and outgoing relative rail traffic use respond similarly to road infrastructure improvements (Columns (2) and (3) for incoming and outgoing traffic respectively, [Table](#tab:iv_modalsub_robust)). Third, we find similarly robust results combining both the alternative weight measure with directional rail traffic use (Columns (4) and (5) for incoming and outgoing traffic respectively, [Table](#tab:iv_modalsub_robust)).

Finally, while many of the 1898 railroads were abandoned and turned into roads ([Duranton and Turner 2011](#ref-duranton2011fundamental), [2012](#ref-duranton2012urban); [Duranton et al. 2014](#ref-duranton2014roads)), there may still be concerns that the historical rail network remains correlated with the contemporary rail infrastructure. To address this concern, we further test the robustness of our results by excluding the 1898 railroads as an instrument. Under this specification, both elasticities using our carload and weight-based measures retain the same sign and are within one confidence interval of our baseline results (Columns (6) and (7) for carload- and weight-based rail traffic use respectively, [Table](#tab:iv_modalsub_robust)).

<a id="subsec:port_congestion"></a>

### Estimation of Intermodal Terminal Congestion

In this subsection, we first describe our approach to estimating the congestion elasticity $\lambda_m$ at intermodal terminals by examining how ship loading and unloading times respond to port traffic. To account for the potential endogeneity of ship dwell times, we employ a shift-share instrument. We then describe our results and compare our estimates to the literature. Lastly, we conduct robustness checks to test the validity of our results.

Note that we apply $\lambda_m$ to all intermodal terminals in our model, including inland rail terminals, even though it is based on ports. This is because the highly detailed minute-level AIS panel data, which enables us to precisely capture ship dwell times and include extensive fixed effects in our estimation, are not available at the same granularity for rail terminals. Despite this, by using a smaller railcar dwell time dataset, we find a significant and positive link between railcar dwell times and port traffic, highlighting the interconnectedness of transport modes and suggesting that port congestion can proxy for congestion at other terminals.

#### Empirical Strategy

We measure port congestion by estimating the elasticity of ship dwell time with respect to port traffic. We estimate the following regression:

<a id="eq:congestion"></a>

$$
\ln \text {Ship Dwell Time}_{spdmy}=\beta_1 \ln \text {Port Traffic}_{pdmy} +\varphi_{sp}+\rho_{py}+\psi_{dmy}+\varepsilon_{spdmy}
$$

where $\ln \text{Ship Dwell Time}_{spdmy}$ is the log number of hours ship $s$ spent at port $p$ on day of the week $d$ in month $m$ and year $y$, $\ln \text{Port Traffic}_{pdmy}$ is the log 28-day moving average amount of port traffic at port $p$ ending on day $d$ of month $m$ and year $y$, $\varphi_{spy}$ is ship-port fixed effects, $\rho_{py}$ is port-year fixed effects and $\psi_{dmy}$ is day-month-year fixed effects. The key parameter of interest, $\beta_1$, captures the elasticity of ship dwell times with respect to port traffic. Standard errors are two-way clustered at the ship and port levels.

The ship-port fixed effects control for fixed characteristics at the ship level, port level, and ship-port level. Fixed ship characteristics like ship sizes are important to control for since larger ships have larger capacities and naturally require more time to load and unload. Fixed port characteristics, such as the geographical proximity of ports to large trading partners or to multiple major cities, can also play a role in attracting more trade. This can, in turn, contribute to longer loading and unloading times (as seen in Figure [4](#fig:ship_dwell_LA_LB) for LA and Long Beach). Fixed ship--port characteristics reflect time-invariant port-specific comparative advantages, including physical and geographic features such as deep natural harbors, that enable the accommodation of larger vessels and can ultimately increase dwell times. The port-year fixed effects control for time-varying port characteristics which includes potential technology or infrastructure upgrades over time that may affect ship dwell times, such as larger cranes or expanded berths at ports over time to accommodate larger ships. Lastly, the day-month-year fixed effects control for aggregate events that impact all ships.

#### OLS Results

We find that a 1 percent increase in port traffic is correlated with a statistically significant increase in ship dwell times by 0.1 percent (Column (2), [Table](#tab:dwelltimes_iv)). This elasticity is within one standard error of the baseline when estimated with ship fixed effects separately (Column (1), [Table](#tab:dwelltimes_iv)). West Coast ports, which are characterized by long histories of worker strikes, deeper harbors, and large volumes of U.S.-Asia trade (via LA and Long Beach), often experience longer ship dwell times. We show that the OLS coefficient for West Coast ports is indeed more than two times larger (Column (1), [Table](#tab:dwelltimes_iv_robust)). When including a pandemic period indicator (post-March 2020) to estimate separate coefficients during this time period, we find that the pre-March 2020 estimate is within one standard error of the baseline (Column (2), [Table](#tab:dwelltimes_iv_robust)), while the post-March 2020 estimates is slightly higher but still within one confidence interval of the baseline. Using shorter periods for the moving average calculation, we find that the ship dwell times are still statistically significantly correlated with port traffic, but the magnitudes of the coefficients are smaller ([Table](#tab:ave_all)).

<a id="tab:dwelltimes_iv"></a>

> **Congestion Elasticity of Port Traffic with respect to Ship Dwell Times**

--------------------- --------- --------- ------------- --------- ------------- ---------
                          \(1\)     \(2\)       \(3\)       \(4\)       \(5\)       \(6\)
                           OLS       OLS     First-Stage     IV      First-Stage     IV
  Port Traffic            0.093     0.100                   0.264                   0.236
                         (0.011)   (0.010)                 (0.095)                 (0.091)
  Port Trade Exposure                           0.229                   0.228
                                               (0.013)                 (0.014)
  Day-Month-Year FE
  Port-Year FE
  Ship-Port FE
  Ship FE
  Observations            90516     90516       90516       90516       90516       90516
  First Stage KP-F                                         299.03                  274.05
  --------------------- --------- --------- ------------- --------- ------------- ---------

**Notes:** Robust standard errors in parentheses are two-way clustered at the ship and port levels. All variables are in logs. Port traffic is the 28-day moving average of total daily net tonnage at the port. Weighted by ship net tonnage.

#### IV Strategy

To establish the causal impact of port traffic on ship dwell times, we require a demand shifter for port traffic that is uncorrelated with unobserved ship dwell time determinants $\varepsilon_{s p d m y}$. Our IV strategy leverages aggregate origin country- and product-level compositional changes for imports into top U.S. ports to predict the transport services demand at each port:

<a id="eq:iv"></a>

$$
\text { Port Trade Exposure }_{pmy} \equiv \sum_{O} \sum_{N} X_{on\backslash p,my} \times \omega_{onp, 2003}
$$

where the shift-share IV is the weighted sum of top 30 U.S. ports' imports of product $n$ from origin $o$ excluding port $p$ at month $m$ and year $y$. The first term in [Equation](#eq:iv) is the contemporaneous shift in overall imports into top U.S. ports excluding its own port $p$, capturing month-to-month fluctuations in demand for port services across origin-product pairs. The second term is a port-specific lagged weight, calculated from import shares at least 13 years prior at the start of the available sample period (year 2003). The weights sum to one across products and origins for each port-year observation. The Census Bureau ([2003-2021](#ref-censustrade)) monthly trade data allow us to match this IV with our 28-day moving average of port traffic.

For this IV strategy to be valid, the port trade exposure measure has to be generally uncorrelated with unobserved determinants of dwell times for ship servicing these ports after controlling for fixed ship-port characteristics, time-varying port characteristics, and aggregate time-varying events that impact all ships. Following recent best practices in shift-share IV designs ([Borusyak et al. 2025](#ref-borusyak2025practical)), we report both the effective sample size and the distribution of the instrument. The effective sample size of the instrument's exposure share is relatively high at 204.8, suggesting that our instrument is not overly influenced by a small number of dominant shocks. Furthermore, the largest exposure share accounts for only 2.9% of the total, suggesting a reasonable degree of dispersion.[^27] Additionally, we establish that our IV strategy has a strong first stage: the port trade exposure measure has a statistically significant and positive relationship with port traffic (Column (5) and (6), [Table](#tab:dwelltimes_iv)), with Kleibergen--Paap F-statistics exceeding the Staiger and Stock ([1997](#ref-staiger1997econometrica)) threshold.

To further support the validity of our identification strategy, we conduct a balance test to show the absence of correlation between the instrument and an approximation that is correlated with of unobserved ship dwell times determinants. One potential concern is that that time-varying port-ship interactions, which is outside the scope of our fixed effects, might affect our results. Specifically, busier ports may invest in infrastructure, such as increasing the number of container cranes, to accommodate growing containership traffic and reduce dwell times of these ships. To proxy for this type of time-varying port-specific investments targeted at containerships, we use data from the Bureau of Transportation Statistics (BTS) on the annual number of container cranes which is available for the top 25 U.S. container ports for a subset of years. We residualize both the number of container cranes and the port trade exposure instrument with respect to port and time fixed effects and find a noisy correlation between the two (Figure [19](#fig:iv_balancetest)). This lack of correlation suggests that our instrument is unlikely to be systematically related to endogenous, time-varying port investments aimed at particular ships.

#### Results: Elasticity of Intermodal Terminal Congestion

We find that a one percent increase in port traffic results in a statistically significant 0.24 percent increase in ship dwell time (Column (6), [Table](#tab:dwelltimes_iv)). This result is within one standard error of the specification that separately includes ship fixed effects (Column (4), [Table](#tab:dwelltimes_iv)). This congestion elasticity forms the basis for congestion elasticity at terminals: parameter $\lambda_m$ ([Equation](#eq:transport_cost_terminal_on)). Since this elasticity is measured in time while [Equation](#eq:transport_cost_terminal_on) is expressed in cost terms, we convert this time elasticity into a cost measure using the ad valorem tariff estimate for an additional day in transit from ([Hummels and Schaur 2013](#ref-hummels2013time)), resulting in $\lambda_m$=0.096.

Without directly comparable elasticities on intermodal terminal congestion, we compare our estimate with two strands of prior literature. First is the literature on processing times at ports. Using detailed Peruvian data, Carballo et al. ([2021](#ref-carballo2021import)) estimates an import processing cost elasticity of 0.06, which is within the confidence interval of our baseline estimate.[^28] Second, we compare our estimates to congestion elasticities from the urban literature which focuses on road congestion in cities. Existing U.S. estimates range from 0.03-0.11, also falling within one confidence interval of our baseline estimate ([Couture et al. 2018](#ref-couture2018speed); [Allen and Arkolakis 2022](#ref-AA_2022restud); [Akbar et al. 2023](#ref-akbar2023fast); [Duranton and Puga 2023](#ref-duranton2023urban)).[^29]

#### Robustness Checks

As noted earlier, West Coast ports typically have longer dwell times due to their location and history of labor strikes. Indeed, we estaimte a higher congestion elasticity for these ports (Column (3), [Table](#tab:dwelltimes_iv_robust)) that is still within one confidence interval of our baseline result. As additional checks, we examine the periods before and after the pandemic separately. While the post-pandemic period has a higher congestion elasticity (as we would expect), both elasticities are within one standard error of the baseline (Columns (4) and (5) respectively, [Table](#tab:dwelltimes_iv_robust)).

Although our congestion elasticity $\lambda_m$ is applied to all intermodal terminals within the multimodal network, it is estimated solely from AIS vessel traffic data at ports. This is due to the exceptional level of detail provided by these panel data, which allows us to capture ship dwell times with precision and incorporate an extensive range of fixed effects. To the best of our knowledge, comparable rail station dwell times data with the same level of granularity are not available. However, by using a smaller sample of rail dwell times matched to port traffic data for nearby rail stations, we find a statistically significant and positive relationship between port traffic and rail dwell times at these rail stations ([Table](#tab:rail_dwell), Appendix Section [9.5](#subsec:rail_congestion)).[^30] This finding highlights how congestion at ports likely leads to delays at other key intermodal terminals due to the interconnectedness of transport modes within the multimodal network. Consequently, port congestion can serve as a proxy for understanding congestion impacts at intermodal terminals across the broader multimodal network.

<a id="sec:Calibration_Validation"></a>

## Calibration and Validation

To conduct counterfactuals using our framework, we begin by presenting two propositions that in tandem define a system of equations for changes within the multimodal transport network. Next, we discuss how we use detailed traffic and geography data to construct the US multimodal transport network and the calibrate key parameters in the model. We then conduct three validity checks of our framework by (1) comparing observed and model-predicted mode-specific trade flows, (2) examining how both observed and predicted trade flows vary with distance to assess gravity model implications, and (3) comparing the distribution of observed and predicted trade across transport modes over distance.

<a id="subsec:counterfactuals"></a>

### Counterfactual Equilibrium

Our goal is to evaluate the welfare impact of infrastructure investments or disruptions in a setting where agents make sophisticated routing and mode choices within a multimodal transport network. To accomplish this, we derive a system of equations that determines the counterfactual equilibrium for arbitrary mode-specific cost changes within the multimodal network while also allowing for a rich characterization of congestion forces. We first extend the equilibrium system in [Equation](#eq:recursive_eq_a) to allow for mode choice (as in Section [3.4](#subsec:multimodal)) and for congestion (as in Section [3.5](#subsec:traffic)). Following ([Dekle et al. 2008](#ref-RePEc:nbr:nberwo:13846)), we then employ 'Hat Algebra' to express the equilibrium in terms of changes in the endogenous variables. We denote the changes in variables with hats, $\hat{\gamma}_{i} \equiv \frac{\gamma_{i}^{\prime}}{\gamma_{i}}$. The structure of this model allows for a convenient separation of the link- or edge-specific transport equilibrium *given* market access terms and the determination of the aggregate equilibrium *given* (aggregate) transport costs.

We present the counterfactual equilibrium in two parts: one characterizing the aggregate equilibrium and the other describing the edge-level transport equilibrium subroutine. Detailed derivations for both are provided in Appendix [8.10](#appendix:counterfactual_eq).

<a id="proposition"></a> Consider an economy in equilibrium with a primary transport network, $\overline{\mathbf{T}} \equiv\left[\bar{t}_{k l,1}\right]$, a secondary transport network ($m$), $\overline{\mathbf{T}}_m \equiv\left[\tau_{k l,m}\right]$, and an intermodal terminal network connecting both primary and secondary networks ($m$), $\overline{\mathbf{S}}_m \equiv\left[\bar{s}_{kk,m}\right]$. Consider any changes either in the primary infrastructure network, $\hat{\bar{t}}_{kl,1}$, in the intermodal terminal network, $\hat{\bar{s}}_{kk,m}$, or in the secondary transport network, $\hat{\tau}_{kk,m}$. Given observed aggregate and mode-specific traffic flows $\left(\Xi_{i k}, \Xi_{i k, m}\right)$, economic activity in the geography $(Y_{i},E_{j})$, and parameters $\left\{\alpha, \beta,\theta, \lambda_1, \lambda_m, \eta\right\}$, the equilibrium change in economic outcomes $\left(\hat{y}_{i},\hat{l}_{i},\hat{\chi}\right)$ is the solution to the following :

1.  **Aggregate Equilibrium.** Changes in incoming and outgoing market access terms $\left\{\hat{\Pi}_i,\hat{P}_j\right\}$ given by:

$$
\begin{aligned}
    \begin{split}
        \hat{P}_j^{-\theta}=\left(\frac{\gamma_j}{\gamma_j+\sum_{k \in \mathcal{B}(j)} \Xi_{k j}}\right) \frac{\hat{\gamma}_j}{\hat{\Pi}_i^{-\theta}}+\sum_{k \in \mathcal{B}(j)}\left(\frac{\Xi_{k j}}{\gamma_i+\sum_{k \in \mathcal{B}(j)} \Xi_{k j}}\right) \hat{t}_{k j}^{-\theta} \hat{P}_k^{-\theta} \\
        \hat{\Pi}_i^{-\theta}=\left(\frac{\delta_i}{\delta_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \frac{\hat{\delta}_i}{\hat{P}_i^{-\theta}}+\sum_{k \in \mathcal{F}(i)}\left(\frac{\Xi_{i k}}{\delta_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \hat{t}_{i k}^{-\theta} \hat{\Pi}_k^{-\theta}
        \end{split}
    \end{aligned}
$$

where $\hat{t}_{k i}^{-\theta} = F\left(\left\{P_j,\Pi_i\right\}\right)$ is the change in endogenous transport costs derived from [the transport equilibrium](#prop:TransEqm), $\delta_i=\gamma_i=y_i$ represents the share of income in location $i$, and changes in the market access terms $\hat{P}_j$ and $\hat{\Pi}_i$ are equal to changes in income and labor densities, $\hat{P}_j=\hat{y}_j \hat{l}_j^{\beta-1} \hat{W}^{-1}$ and $\hat{\Pi}_i=\hat{l}_i^{\alpha+1} \hat{y}_i^{-\frac{\theta+1}{\theta}}$ where $y_{i}$ is the share of world income in $i$, $y_{i}\equiv\frac{Y_{i}}{Y^{W}}$, and $l_{i}$ is the share of total labor in $i$, $l_{i}\equiv\frac{L_{i}}{L^{W}}$. <a id="prop:AggEqm"></a>

2.  **Transport Equilibrium.** Given $\left\{\hat{P}_i,\hat{\Pi}_i,\hat{\gamma},\hat{\delta}\right\}$, the equilibrium change in endogenous aggregate transport costs $\left(\hat{t}_{i k}^{-\theta}\right)$ is the solution to the edge-level transport equilibrium and given by:

<a id="eq:traffic_subroutine_1"></a>

$$
\hat{t}_{i k}^{-\theta}=\left(\sum_{m \in \mathcal{M}(i, k)} \frac{\Xi_{i k, m}}{\Xi_{i k}} \hat{t}_{i k, m}^{-\eta}\right)^{\frac{\theta}{\eta}}
$$

and changes in the endogenous transport cost on the primary mode and any alternative mode are given by, $\hat{t}_{k l, 1}=\hat{\bar{t}}_{k l, 0}^{\frac{1}{1 \cdot \lambda_1}} \hat{t}_{k l}^{\frac{\lambda_1(\eta-\theta)}{1+\eta \lambda_1}}  \hat{P}_k^{\frac{-\theta \lambda_1}{1+\gamma \lambda_1}}  \hat{\Pi}_l^{\frac{-\theta \lambda_1}{1 \cdot r \lambda_1}}$ and $\hat{t}_{k l, m}=\hat{\bar{s}}_{k k, m} \hat{\tau}_{k l, m} \hat{\bar{s}}_{l l, m} \hat{P}_k^{-\theta \lambda_m} \hat{\Pi}_{k, m}^{-\theta \lambda_m} \hat{\Pi}_l^{-\theta \lambda_m} \hat{P}_{l, m}^{-\theta \lambda_m}$ where the mode specific market access terms are defined as, $\hat{P}_{l, m}^{-\theta} \equiv \sum_{k \in B(l)} \frac{\Xi_{k l, m}}{\sum_{k \in \mathcal{B}(l)} \Xi_{k l, m}}  \hat{t}_{k l, m}^{-\eta} \hat{t}_{k l}^{\eta-\theta} \hat{P}_k^{-\theta}$ and $\hat{\Pi}_{k, m}^{-\theta} \equiv \sum_{l \in \mathcal{F}(k)} \frac{\Xi_{k l, m}}{\sum_{l \in \mathcal{F}(k)} \Xi_{k l, m}}  \hat{t}_{k l, m}^{-\eta}  \hat{t}_{k l}^{\eta-\theta}  \hat{\Pi}_l^{-\theta}$. <a id="prop:TransEqm"></a>

[The proposition](#proposition) constructs the aggregate counterfactual spatial equilibrium while simultaneously solving for the modal traffic assignment. The algorithm works like a nested fixed-point problem. Its first part, [Aggregate Equilibrium](#prop:AggEqm), solves for market-access terms; its second part, [Transport Equilibrium](#prop:TransEqm), is a nested subroutine for modal transport flows conditional on those terms. A computational benefit arises because---given a candidate solution for the aggregate equilibrium---the transport equilibrium is entirely disentangled from the determination of the aggregate spatial equilibrium, while the aggregate equilibrium inherits the speed and scalability of a gravity spatial-equilibrium system.

From a practitioner's point of view, the proposition implies that given observed traffic flows on the primary network, bilateral flows on the secondary network[^31], $\left(\Xi_{i k}, \Xi_{i k, m}\right)$ as well as knowledge of the model parameters, $\left\{\alpha, \beta,\theta, \lambda_1, \lambda_m, \eta\right\}$, we can employ the model to evaluate infrastructure improvements along the primary network or at terminal stations, thus improving the connectedness of the primary and secondary transport network. We further extend the model to allow for a partitioned set of domestic and foreign locations with international trade between a subset of domestic nodes and foreign locations, as presented in Appendix [8.12](#Online_Appendix:International_Trade).

Relative to the existing literature, the proposition provides a straightforward extension of Equations (28) and (29) in AA2022. The only difference is the presence of a nested subroutine, which, given a candidate solution for spatial equilibrium $\{P_i,\Pi_i\}$, solves the transport equilibrium at the edge-level (i.e. the set of equations defined by [Equation](#eq:traffic_subroutine_1)). This implicitly determines the modal choice, taking into account endogenous congestion, and generates an endogenous aggregate transport cost.[^32] This adjustment adds a novel channel by which to evaluate infrastructure improvements. In this setting, the impact of improving transport infrastructure has the same direct and general equilibrium effect as in AA2022 where route choice is impacted, congestion can be alleviated, and input and output markets can adjust, all of which collectively add up to welfare gains. In our setting, we also feature a direct interplay between the primary and secondary networks. Mode-specific infrastructure investments can lead to modal diversion and thus alleviate congestion on the alternative transport network. The extent to which this might occur depends on the cross-sectional variation in the access to the secondary transport system, which is reflected by variations in the weights on the final term across space.

### Model Calibration to the US Multimodal Network

In order to calibrate our framework to the US multimodal network, we require data on income and population as well as geo-spatial and traffic data on roads, rail, waterways, ports, and inland intermodal terminals. We utilize the existing income, population, as well as road geo-spatial and traffic data from AA2022. We then introduce additional geo-spatial and traffic data for rail, waterways, ports, and intermodal terminals, as discussed in Section [2.1](#sec:traffic_geo_data). To allow for international trade, we obtain Census Bureau ([2003-2021](#ref-censustrade)) data on flows from international locations to domestic ports.[^33] Our resultant sparse graph representation of the multimodal transport network collapses the high-dimensional geo-spatial information from each mode-specific shapefile and retains nodes at endpoints or intersections. Cities containing at least 10,000 people (CBSAs) are also represented by a single node within the network. The resulting graph consists of 228 nodes and 704 edges.

We now discuss our choice of model parameters $\left\{ \alpha,\beta,\theta,\lambda_{1},\lambda_{m}, \eta \right\}$. For the local productivity spillover $\alpha$, local amenity spillover $\beta$, and shape parameter $\theta$, we follow the literature and set $\theta=8$, $\alpha=.1$ and $\beta=-.3$ AA2022. For the road congestion elasticity, we use $\lambda_1=0.092$ following AA2022 who estimates this parameter by regressing the observed speed on individual highway segments against a measure of instrumented traffic.

The last two parameters come from our own estimates. For the intermodal terminal congestion parameter $\lambda_m$, we first determine the impact of port traffic on the observed duration a ship spends at port using an instrument which measures the trade exposure at these ports ([Table](#tab:dwelltimes_iv), Section [4.2](#subsec:port_congestion)). We use $\lambda_m=0.096$ after converting this time elasticity into a cost measure, relying on the ad valorem tariff estimate on an additional day in transit from Hummels and Schaur ([2013](#ref-hummels2013time)). For the modal elasticity of substitution $\eta$, we estimate the impact of road infrastructure improvements on rail relative to road traffic flows using the instruments from Duranton and Turner ([2011](#ref-duranton2011fundamental)). We use $\eta=1.099$ ([Table](#tab:iv_modalsub_carload by TOT), Section [4.1](#subsec:modal_sub)). The non-overlapping confidence intervals for $\eta$ and $\theta$ highlight a significant difference between them, supporting the validity of our modeling approach which allows for two distinct elasticities to govern transport mode and route-sourcing decisions separately. As discussed earlier in Section [3](#sec:Model), this also suggests that a simple extension of the AA2022 to allow for mode-specific subnetworks is insufficient to accurately capture both decisions (footnote [8](#fn_same_elasticities)).

<a id="sub:Predicted_traffic"></a>

### Predicted versus Observed Trade Flows by Transport Mode and Distance

We conduct three comparisons to assess the ability of our model to capture actual observed trade flows for different transport modes. First, we compare our model predictions for mode-specific trade flows between CBSAs against commensurate data from the Commodity Flow Survey (CFS). Second, we examining its gravity model implications by comparing the relationship between observed trade flows and distance to the relationship between the predicted trade flows and distance. Third, we compare our model predictions for the distribution of freight transported over multiple modes over distance against observed data from the Department of Transportation.

#### Mode-specific trade flows

In order to assess the ability of our model to capture actual observed trade flows for different transport modes, we compare our model predictions for mode-specific trade flows between CBSAs against commensurate data from the Commodity Flow Survey (CFS). The model-predicted mode-specific trade flows are calculated using [Equation](#eq:predicted_mode_flows) and observed mode-specific traffic flow data from the CFS.[^34] We include all three transport modes---truck, rail, and barges. [Figure](#fig:corr_flow) shows the scatter plot between the observed and predicted mode-specific trade flows, conditional on origin and destination fixed effects. This allows for a pair-wise comparison between the observed and predicted mode-specific flows at the origin-destination-level, independent of origin or destination characteristics. We find a strong positive correlation of 0.75 with all three modes, indicating that the model predictions reflect observed mode-specific trade flows. These results are also an improvement in terms of model fit relative to previous literature focusing on one mode. As a comparison point, AA2022 finds a strong positive correlation of 0.60 using truck flows. Column (1) of [Table](#tab:validation) reports the univariate regression outcome between the residualized observed and predicted trade flows, weighted by trade weight in tons. We find a significantly positive relationship, with a coefficient of 1 within one standard error.


<a id="fig:flow_dist"></a>
<a id="fig:corr_flow"></a>
<a id="fig:validation"></a>

> **Model Fit: Predicted and Observed Trade Flows**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: Figure corr_flow visualizes the comparison between observed bilateral origin to destination mode-specific trade flows with the mode-specific trade flows predicted by the multimodal economic geography model based on observed traffic data along the transport network. The observed mode-specific trade flows between metropolitan areas on the y-axis are obtained from the 2012 Commodity Flow Survey (CFS) data while the predicted mode-specific trade flows are on the x-axis. Both the observed and predicted trade flow measures are in logs and residualized using origin and destination fixed effects. This allows for the comparison to come from similarities at the origin-destination pair-level. Figure 5 visualizes the observed and predicted bilateral trade flows against distance, all residualized using origin and destination fixed effects. In both panels, circle sizes indicate trade weight in tons.


#### Gravity model implications

Additionally, we can evaluate the validity of our model by examining its gravity model implications. The standard gravity model implies a negative log-linear relationship between trade and trade costs at the bilateral level, both internationally between countries ([Head and Mayer 2014](#ref-head2014gravity)) and domestically between cities within a country ([Allen and Arkolakis 2014](#ref-aa_2014qje); [Fajgelbaum and Schaal 2020](#ref-fajgelbaum2020optimal)). Following previous literature, we compare the relationship between observed trade flows and distance to the relationship between the predicted trade flows and distance, similarly conditioned on origin and destination fixed effects as above. Figure [5](#fig:flow_dist) find similar strong negative correlations between the two, strong negative correlations of 0.64 in the model and 0.72 in the data. We find significantly negative relationships in linear regressions for both, with a negative coefficient of 0.61 in the model and 0.93 in the data. The similarity between the predicted and observed relationships with distance strengthens the validity of our model, suggesting that it provides reasonable approximations for the distribution of trade flows.

Looking into specific transport modes, we find strong positive correlations of 0.81 and 0.56 between the residualized observed and predicted trade flows for trucks and multiple modes respectively. Column (2) of [Table](#tab:validation) reports the regression outcome between the residualized observed and predicted trade flows for the three transport modes, weighted by trade weight in tons. We find a significantly positive relationship that is close to 1 for all three modes, with the rail coefficient slightly higher, suggesting that observed rail flows exceed model predictions. This may be due to the CFS data capturing flows for all commodities, while our model only predicts containerized flows. From our confidential waybill data, containerized trade accounts for 43 percent of all rail car loads in 2012.

#### Trade distribution over distance

Third, we assess our model predictions for the distribution of freight across transport modes over distance by comparing them with observed data from the Department of Transportation (Figure [1](#fig:modeshare_wgt_by_distance)). Our model closely matches the initially low multimodal share at short distances (below 100 miles), and captures its steady increase as distance grows, including its consistently high shares above 70% for long distances above 1,000 miles. The model does predict a slightly earlier shift towards multimodal use relative to the data in the intermediate distance range (100-999 miles). Overall, our model exhibits a strong correlation of 0.97 between predicted and observed multimodal freight shares over distance (Figure [6](#fig:welfare_comp_dist)). Notably, our model achieves this fit using a single elasticity of modal substitution parameter, without allowing substitution patterns to vary with distance.

#### Implied Modal Wedges.

To summarize the gap between observed modal cost advantages and observed modal adoption, we construct an implied modal adoption wedge from the estimated elasticity $\hat{\eta}$. For each non-road mode $m$, the observed road-relative shipment ratio pins down the generalized-cost ratio required by the model; comparing that revealed ratio with the calibrated per-TEU-mile cost ratio yields a multiplicative wedge $\Lambda_m$, interpreted as the extra generalized friction that must be loaded onto mode $\boldsymbol{m}$ for the model to match observed use. This object is informative because it is imputed from behavior rather than observed directly: it summarizes the combined effect of transfer costs, schedule inflexibility, reliability concerns, coordination frictions, access limitations, and other non-line-haul barriers that can prevent modal adoption even when engineering transport costs favor rail or water. At our baseline $\hat{\eta}=1.099$, the average local common-support wedge is 14.17 for rail, 30.98 for domestic water, and 28.30 for foreign water. Translating these into dollar-equivalent values at the benchmark haul distance $D=537.3$ miles yields an average-local rail equivalent of $\$ 5,585$ per TEU, with an exact national counterpart of $\$ 2,013$. We therefore interpret $\Lambda$ as a reduced-form revealed measure of modal adoption frictions, rather than as a literal terminal fee or switching charge. Detailed derivations in [8.9](#app:implied_modal_wedge).


<a id="fig:welfare_comp_dist"></a>

> **Model Fit: Predicted and Observed Transport Mode Distribution over Distance**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure presents a comparison of observed shares of freight transported multimodally across various distances (in meters), from the Department of Transportation (DoT), with model predicted multimodal shares.


<a id="sec:Counterfactuals"></a>

## Network Improvements, Decompositions, and Policy Scenarios

In this section, we apply our framework to evaluate the economic and environmental impacts of targeted infrastructure investments and policy-relevant scenarios, taking the multimodal nature of the U.S. domestic transport system into account.[^35] Our main application compares the welfare impact of investing in different terminals across the U.S., improving the intermodal integration of the multimodal transport network. Next, to illustrate the relative importance and contribution of the different channels in our model, we conduct four decompositions using counterfactual improvements to the U.S. highway network as a benchmark. Additionally, we quantify the welfare changes and environmental impacts of three policy-relevant scenarios: (1) the impact of losing rail network access, motivated by the averted rail strike in the fall of 2022, (2) the impact of repealing the Merchant Marine Act of 1920 (also known as the Jones Act), which restricts ships transporting goods between U.S. ports to those owned, crewed, and built by U.S. citizens, and (3) the impact of disruptions to the Panama Canal due to drought conditions.

<a id="sec:terminal_cf"></a>

### Gains from Intermodal Terminal Improvements

While previous papers have focused on estimating the welfare effects of improving individual segments of the U.S. road network or individual ports, less is known about the welfare impact of improving the degree to which the U.S. multimodal transport network is interconnected. In order to evaluate this, we use the counterfactual equations in [the proposition](#proposition) to estimate the aggregate welfare impact ($\hat{W}=\hat{\chi}^{-\frac{1}{\theta}}$) of a small (1%) improvement to the switching cost, $s_{ii,m}$, at each of the 228 intermodal nodes across the network, given the calibrated parameters and observed traffic on road, rail, waterways, rail terminals, and ports.


<a id="fig:welfare_map"></a>

> **Welfare Benefits of Improving Intermodal Terminals**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure visualizes the welfare impact of lowering the transshipment cost in each intermodal terminal node by 1 percent. The network includes 228 nodes in total, each corresponding to a separate counterfactual. The red circle size is proportional to the magnitude of welfare gains, with larger circles indicating larger welfare effects. The blue lines indicate the graph representation of the primary road network. State boundaries are included. See Table ranking for details on the top 10 terminals by welfare impact and Table ranking_long for the top 30.


Our results from these 228 counterfactual simulations are visualized in Figure [7](#fig:welfare_map) and the top 10 terminals with the highest impact are listed in [Table](#tab:ranking). For the welfare benefits, we convert the welfare elasticity into a dollar amount using a compensating variation approach by calculating the necessary increase, in millions of chained 2012 U.S. dollars, in annual U.S. real GDP (valued at \$19 trillion) to achieve the same welfare improvement that we estimate. Many of the most impactful terminals are located in the center of the United States, including Chicago, Atlanta, and Kansas City, highlighting the role of multimodal network transporting goods from coastal regions to the interior. Chicago, the top-ranked terminal, plays a central role as an intermodal hub for the Midwest, as reflected in its highest rail throughput ([Table](#tab:ranking), Column (3)). Unsurprisingly, several of the high-ranking intermodal terminals are also located in populous coastal cities like Los Angeles (which also includes Long Beach) and Houston, which rank second and third respectively. Several locations, like Riverside CA and Harrisburg PA, do not particularly large throughput flows, but their importance comes from their strategic positions within the multimodal system, linking nearby major cities like Los Angeles and Philadelphia to the broader network (Figure [7](#fig:welfare_map)). The implied welfare benefit of lowering the switching costs in the most central nodes could represent a welfare gain equivalent to increasing U.S. GDP between \$463-3,851 million (in 2012 USD, [Table](#tab:ranking), Column (6)).

<a id="tab:ranking"></a>

> **Ranking: Welfare Benefits of Improving Intermodal Terminals**

---- ----------------- ------------------ ------------------ ----------- --------------------- ------------------
        \(1\) CBSA Name   \(2\) Population   \(3\) Throughput   \(4\) ROI   \(5\) Benefit (\$m)   \(6\) Cost (\$m)
   1        Chicago           9368268            10368684         3.730            3851                 814
   2      Los Angeles         9639715            6836640          3.039            2168                 537
   3        Houston           3133212             630300         24.782            1086                  42
   4       Riverside          2173638             761760         10.999             942                  79
   5        Atlanta           1627623            1830840          4.643             811                 144
   6      Harrisburg           655561             793920         10.194             698                  62
   7     Jacksonville          936317             797880         17.252             689                  38
   8      Kansas City         1767872            1088760          5.335             510                  81
   9       Portland           1641801             424296         16.349             492                  28
   10       Detroit           2732964             557760         11.799             463                  36
  ---- ----------------- ------------------ ------------------ ----------- --------------------- ------------------

**Notes:** The table shows the ten terminals where a one percent reduction of the transshipment cost generates the highest benefit. Column (1) indicates the core based statistical areas (CBSA) name of the node, which includes both metropolitan and micropolitan areas. The terminal's population and rail throughput in TEUs are reported in Columns (2) and (3) respectively. Column (4) shows the imputed return on investment (ROI), Column (5) calculates how much 2012 U.S. GDP would need to increase in order to match the overall welfare gain, while Column (6) presents the required cost of making this one percent cost decrease. For an extended version including the top 30 terminals see [Table](#tab:ranking_long).

Our results are complementary to Brancaccio et al. ([2024](#ref-brancaccio2024investment)), which analyzes U.S. port infrastructure in the context of dry bulk commodities like grain and coal and identified that the East Coast and Gulf ports generate the highest welfare returns from increases in effective port capacity. Even though our focus is on containerized trade at intermodal terminals which includes both ports and inland terminals, we similarly find large welfare gains from improvements at major ports like Houston and Portland which handles large volumes of both container and dry bulk. Additionally, we find significant welfare returns from investments in interior intermodal terminals, such as Chicago and Atlanta. Our results are also complementary to AA2022 which identifies gains from highway link improvements in short coastal segments linking densely populated areas (like Boston-Philadelphia and Los Angeles-San Diego) and trade thoroughfares via Indiana. While our results also identify gains for large cities like Los Angeles, our improvement gains are mostly in the central United States. This distinction highlights the importance of multimodal transport network in facilitating long-distance trade and linking coastal to interior regions (as indicated in Figure [1](#fig:modeshare_wgt_by_distance)). These interior hub terminals are highly central to the transportation system and represent potential bottlenecks in the multimodal network.

Additionally, we combine our welfare benefits with cost assessments in order to compute the return on investment (ROI) for each of these terminal investments. To operationalize this, we utilize equation (42) in AA2022 adapted for terminal operations to determine the amount of container volume required to achieve a one percent reduction in switching cost at these terminals.[^36] Next, we calculate the number of gantry cranes in container terminals required to achieve this higher container volume using industry estimates. Since these terminals require land, each location will have a different construction cost based on local property prices which we obtain from Albouy et al. ([2018](#ref-albouy2018metropolitan)). Assuming a 20-year depreciation schedule, a 5% annual maintenance cost, and a 3% borrowing cost per existing literature, we estimate that 10% of the construction cost is accrued on an annual basis. We estimate high terminal improvement costs for populous cities with higher land prices like Chicago and Los Angeles ([Table](#tab:ranking), Column (7)), translating into low ROIs for these locations ([Table](#tab:ranking), Column (5)). On the other hand, we estimate lower construction costs for locations with relatively cheaper land prices like Houston, Jacksonville FL, and Portland OR which translates into high ROIs for these locations.

We further show that congestion plays an important role in determining the magnitudes of these welfare effects. Specifically, the benefits from improvements without congestion are 3.9 times higher at Chicago relative to improvements with congestion, 2.7 times for Los Angeles, 4.7 times for Atlanta, and 3.1 times at Kansas City (Figure [8](#fig:welfare_congestion_comp)). The weighted average benefits are 2.7 times higher without congestion compared to benefits with congestion (Figure [20](#fig:welfare_congestion_comp_all)). Targeting infrastructure investments at nodes that are likely bottlenecks is crucial since these bottlenecks tend to occur due to limited capacity or a lack of alternative routes, both of which can hinder the transportation of goods. Both these factors are particularly pertinent for intermodal terminals, suggesting that alleviating congestion at terminals can yield large positive returns for the overall performance of the multimodal network.


<a id="fig:welfare_congestion_comp"></a>

> **Welfare Benefits of Improving Intermodal Terminals: with and without Congestion**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure presents a comparison of the welfare impacts for the top 20 most impactful terminals with and without congestion effects. See Figure 20 for a scatterplot comparing both effects for all terminals.


In order to calculate the environmental impact from this counterfactual, we obtain data on transport mode-specific greenhouse gas (GHG) emissions from EPA ([2022a](#ref-epa2022)). For each counterfactual improvement of the intermodal terminals, we calculate the change in mode-specific traffic flows using [Equation](#eq:traffic_change) and multiply this change with the mode-specific GHG emissions in order to determine the change in GHG emissions.[^37] We employ EPA ([2022b](#ref-epa2022_socialcost))'s estimates when calculating the social cost of GHG emissions.

<a id="tab:ranking_env"></a>

> **Ranking: Environmental Impact of Intermodal Terminal Improvements**

---- ----------------- --------------------- ------------------ ---------------------- --------------------- -------------------------
        \(1\) CBSA Name   \(2\) Benefit (\$m)   \(3\) Cost (\$m)   \(4\) Truck GHG (kt)   \(5\) Rail GHG (kt)   \(6\) GHG Benefit (\$m)
   1        Chicago              3851                 814                 78.97                 151.25                  214.29
   2      Los Angeles            2168                 537                 20.42                  67.98                   98.21
   3        Houston              1086                  42                  0.52                  35.35                   52.78
   4       Riverside              942                  79                 25.64                  38.83                   54.05
   5        Atlanta               811                 144                 58.66                  30.99                   38.00
   6      Harrisburg              698                  62                 11.84                  38.47                   55.46
   7     Jacksonville             689                  38                 22.83                  30.71                   43.01
   8      Kansas City             510                  81                 11.26                  14.97                   21.01
   9       Portland               492                  28                  6.64                  14.44                   20.67
   10       Detroit               463                  36                  9.63                  12.43                   17.29
  ---- ----------------- --------------------- ------------------ ---------------------- --------------------- -------------------------

**Notes:** The table shows the environmental impact from the ten terminals where a one percent reduction of the transshipment cost generates the highest benefit. Column (1) indicates the core based statistical areas (CBSA) name of the node, which includes both metropolitan and micropolitan areas. Column (2) calculates how much 2012 U.S. GDP would need to increase in order to match the overall welfare gain (reproduced from [Table](#tab:ranking) Column (6)), while Column (3) presents the required cost of making this one percent cost decrease (reproduced from [Table](#tab:ranking) Column (7)). Columns (4) and (5) report changes in truck and rail GHG emissions respectively, which comes from the corresponding changes in their traffic flows and is measured in kilotons (kt). Column (6) then presents the resulting net social cost or benefit associated with these mode-specific GHG emission changes. Waterway emissions are included in Column (6) but omitted here for brevity.

[Table](#tab:ranking_env) reports the environmental impacts of the intermodal terminal improvements. For all terminals, this decrease in the cost of accessing multimodal transport raises the relative cost of using truck transport which decreases road traffic flows, resulting in a decrease in GHG emissions from trucks---highlighting the modal substitution effect ([Table](#tab:ranking_env), Column (4)). Since the switching cost of intermodal terminals have decreased, rail traffic flows will increase in response which increases GHG emissions for rail ([Table](#tab:ranking_env), Column (5)). However, since rail is much less polluting than road, the overall GHG emission change is net decrease for all the terminals. The implied welfare benefit of lowering the switching costs in some of the most central nodes could result in an unintended environmental benefit, equivalent to between \$17-214 million ([Table](#tab:ranking_env), Column (6)). Our findings are align with the objectives of the inter-agency U.S. National Blueprint for Transportation Decarbonatization, which prioritizes improving multimodal freight transport, and the European Green Deal, which aims to shift 75% of inland freight from road to rail and inland waterways ([DOE, DOT, EPA, and HUD 2024](#ref-blueprint_decarbon); [European Commission 2021](#ref-eu_mobility)).

<a id="sec:decomposition"></a>

### Channel Decomposition Using Highway System Improvements

Our framework incorporates four main ingredients: (1) road and terminal congestion, (2) productivity and amenity spillovers, (3) multiple transport modes, and (4) endogenous routing. Guided by the theoretical discussion in Section [3.6](#subsec:decomp_qual_channel_main), we decompose our results to quantify the contribution of each channel to welfare in counterfactual improvements of the U.S. highway improvement network.

Specifically, we quantify the welfare gains of reducing the transport cost by 1% on each link within the U.S. Highway System in both directions. The highway system consists of 704 highway links in total, each corresponding to a separate counterfactual. We begin by presenting our full multimodal results. Figure [9](#fig:welfare_map_road) maps the welfare gains associated with this cost reduction across individual road links. The largest gains arise on links connecting densely populated and economically integrated regions, including corridors such as San Diego--Los Angeles, New York--Philadelphia, and major Midwestern connections such as Chicago--Rockford and Chicago--Indianapolis, as well as key routes in the southern U.S. like Durham-Chapel Hill-Raleigh. Across all links, the GDP-weighted average welfare gain, where each link is weighted by the GDP of its origin and destination nodes, is equivalent to approximately \$87.7 million (in 2012 USD). Among the top 100 links, the corresponding weighted average gain rises to \$137.8 million.


<a id="fig:welfare_map_road"></a>

> **Welfare Benefits of Improving Road Links**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure visualizes the welfare impact of lowering the transport cost in on each U.S. highway road link by 1 percent. The highway system consists of 704 links in total, each corresponding to a separate counterfactual. The color scale on the right indicates the welfare gain size: the lighter the color, the larger the welfare gains. The lines indicate the graph representation of the primary road network. State boundaries are included.


Figure presents the decomposition by comparing the full multimodal framework (red line) to a specification that shuts down one of the four channels. For each specification, we run 704 counterfactuals---one for each highway link. In the scatterplot, each highway link is a dot with its welfare change plotted against the link's traffic share of GDP, which serves an indicator of its economic significance. As expected, there is a general positive relationship between a link's economic importance and its welfare gains from improvements. However, relative to the full model, shutting down individual channels alters both the slope of this relationship and the relative ranking of links. We now examine each comparison in turn.


<a id="fig:welfare_comp_road_fixedroute"></a>
<a id="fig:welfare_comp_road_congest"></a>
<a id="fig:welfare_comp_road_hulten"></a>
<a id="fig:welfare_comp_road_unimode"></a>

> **Figure panels: Without Congestion; Without Externalities (Hulten); Without Multimodal Flexibility; Without Endogenous Routing**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure reports the welfare effects of a 1% reduction in transport costs on each link of the U.S. highway system and decomposes the main mechanisms in the model. The highway system consists of 704 links in total, each corresponding to a separate counterfactual. Each model specification evaluates the same set of 704 link‑level counterfactuals. The red line in each panel represents the full multimodal model, which includes road and terminal congestion, productivity and amenity spillovers (Hulten effects), multiple transport modes, and endogenous routing. Each panel compares the full model to a specification that shuts down one channel: congestion (Figure 10), externalities (Figure 11), multimodal flexibility (unimodal road-only network, Figure 12), or endogenous routing (Figure 14). The legend in each panel reports the weighted average welfare effect for each specification, with weights given by the GDP of origin and destination nodes of each link). The percentage in parentheses indicates the difference relative to the full multimodal model. For example, abstracting from congestion increases the average estimated welfare gain by 85.1% relative to the full model (Figure 10). Figure 21 presents all decomposition results jointly in a single figure.


First, shutting down road and terminal congestion in Figure [10](#fig:welfare_comp_road_congest) leads to substantially larger average welfare effects, increasing the weighted mean by 85.1%. The links with the highest welfare gains and traffic share, San Diego--Los Angeles, sees welfare increases 23-40% (depending on the direction) showing that congestion is binding for these routes. Other links in the Los Angeles area, like Los Angeles--Riverside, rise even more in rankings, with welfare gains of 62--95%, indicating that this region is particularly affected by congestion. In contrast, less-congested links experience relative declines in ranking. The difference between the full model and the no-congestion specification tends to increase with the road link's traffic share of GDP, indicating that economically important routes experience higher levels of congestion and would therefore benefit even more from infrastructure improvements if congestion were absent.[^38] These quantitative findings mirror our discussion of *congestion wedges* in Section [3.6](#subsec:decomp_qual_channel_main) and their tendency to attenuate the welfare effects of transportation improvements.

Second, we compare our results against a local social-savings style approximation ([Hulten 1978](#ref-hulten1978growth)), where welfare gains are approximately proportional to a link's traffic and which shuts down agglomeration and dispersion externalities (productivity and amenity effects, see discussion in Section [3.6](#subsec:decomp_qual_channel_main)). The blue line in Figure [11](#fig:welfare_comp_road_hulten) closely follows the 45-degree line through the origin, reproducing the traditional social-savings intuition that "busy roads are valuable roads.\" However, since our calibration implies that agglomeration and dispersion externalities are net dispersive, the relative benefit of improving road links that are economically important declines. As a result, the traditional approach overestimates average welfare effects by 57%. For example, the Washington DC--Baltimore and Chicago--Milwaukee links are ranked much higher under the traditional approach, with estimated gains exceeding 95% and 80% respectively relative to the full model.

Third, we examine how including multiple modes of transport changes the welfare returns to road improvements. Removing multimodal flexibility effectively collapses the network to a single mode, roads, and leads to lower average welfare effects by 22.2% compared to the full model. Road improvements can generate both modal substitution (shifting traffic from rail/barges to road) and modal complementarity (increasing overall market access via better connectivity). In our results, the complementarity channel dominates, so a unimodal framework underestimate the welfare gains because it does not take into account market access benefits and spillovers onto other modes, particularly for central links in the multimodal network. For example, welfare gains for Chicago-Indianapolis, San Diego-Los Angeles, and New York-Philadelphia are 58.9%, 43.1%, and 74% lower, respectively, in the unimodal scenario compared with the full model. This is consistent with our previous results from Section [6.1](#sec:terminal_cf) showing that improving the intermodal terminals in these locations generate the highest welfare impacts (Figure [7](#fig:welfare_map)). Additionally, these quantitative findings reinforce our discussion of mode *reallocation wedges* in Section [3.6](#subsec:decomp_qual_channel_main): allowing multiple modes creates *net modal complementarity* which reinforce the value of the improved road links through expanded access and spillovers.

Finally, we implement a version of the model that determines welfare gains, but keeping route structure as fixed thus determining the additional benefit from modeling the additional flexible adjustment of traffic as infrastructure improves.[^39] Eliminating endogenous routing changes the spatial distribution of benefits between links that are central to the routing network and those that are less central (Figure [14](#fig:welfare_comp_road_fixedroute)). Links that are central to the network, meaning ones used by many other routes, experience larger welfare gains under the full model because traffic can increase in response to improvements on these links. Under fixed (exogenous) routing, these links cannot attract additional traffic, so their estimated welfare gains are substantially smaller, 35--43% lower for San Diego--Los Angeles and roughly 35--37% lower for Chicago--Rockford and Chicago--Indianapolis. Conversely, links connecting urban centers such as New York--Philadelphia experience even larger welfare gains under fixed routing since traffic cannot adjust. Overall, fixing routes underestimates the average welfare effects by 22.8% relative to the full model. This underestimate is similar in magnitude to the underestimate from ignoring multimodal flexibility, suggesting that most rerouting responses to highway improvements take place across modes rather than within modes. These results are aligned with our discussion of route *reallocation wedges* in Section [3.6](#subsec:decomp_qual_channel_main), showing that endogenous rerouting amplifies welfare gains for centrally positioned links.

Our estimates are complementary to and build upon existing literature. AA2022 shows that ignoring road traffic congestion overstates welfare gains from infrastructure improvements, particularly on busy segments. We find that this is the case in our setting as well, with the additional compounding role of terminal congestion. Fan et al. ([2019](#ref-fan2019valuing)) documents that ignoring rerouting and the substitution between expressways and regular roads in China can underestimate welfare loss from the removal of expressways by 21%-46%. In the U.S. context and and across three transport modes (highways, rail, and barges), we separately quantify these two channels and find similarly large biases (underestimate of 22.2% without modal substitution and underestimate of 22.5% without endogenous routing).[^40] Consistent with this, Foellmi et al. ([2024](#ref-foellmi2024triangle)) also shows that standard approaches with fixed routing underestimate welfare gains from trade cost reductions relative to models that allow for rerouting consistent with the triangle inequality.[^41] Using a sufficient statistics approach, Allen et al. ([2025](#ref-allen2025evaluating)) shows that traditional approaches overestimate welfare gains from road improvements without accounting for externalities and traffic congestion. This is consistent with our finding where we separately quantify the overestimate for each of these channels (overestimate of 85.1% without congestion and overestimate of 57% without externalities).

### Value of the Multimodal System: Impact from Losing Rail Network Access

In the fall of 2022, a nationwide rail strike that would have shut down the U.S. rail system was narrowly averted following intervention by U.S. President Biden ([Kanno-Youngs and Cochrane 2022](#ref-nyt_railstrike)). In order to evaluate the impact of losing access to the multimodal rail network, we estimate the aggregate welfare impact of increasing the cost on all rail links to prohibitively high levels (twenty-fold). The first row in [Table](#tab:scenarios_congest) shows that the welfare cost of losing the multimodal rail network is equivalent to decreasing U.S. GDP by about \$230 billion (in 2012 USD). While existing literature have quantified the importance of the road and highway transport network, the value of the rail network has received less attention except in historical analyses. Our estimate of the value of the contemporary rail network for container freight is roughly half the value of the U.S. highway system as estimated by Jaworski et al. ([2023](#ref-jaworski2023highways)), and about 1.8 times the historic inflation-adjusted value of railroads to agricultural land value as estimated by Donaldson and Hornbeck ([2016](#ref-donaldson2016railroads)).

<a id="tab:scenarios_congest"></a>

> **Welfare Impact of Policy Scenarios: The Role of Congestion**

-------------------------------- --------------------------- -------------------------------- ----------------------- --
           \(1\) Scenario           \(2\) Full Welfare (\$bn)   \(3\) No Terminal Cong. (\$bn)   \(4\) No Cong. (\$bn)
   Value of the Multimodal System            -230.46                       -236.40                      -278.94
      Removal of the Jones Act                3.15                          11.73                        16.16
      Panama Canal Disruptions                -2.67                         -7.64                       -10.29
  -------------------------------- --------------------------- -------------------------------- ----------------------- --

**Notes:** The table reports the welfare impact of three policy scenarios. The first row quantifies the loss of rail network access, motivated by the averted U.S. rail strike in fall 2022. The second row quantifies the repeal of the Merchant Marine Act of 1920 (Jones Act), which restricts domestic maritime shipping to vessels that are U.S.-owned, -built, and -crewed. The third row quantifies disruptions to the Panama Canal due to drought conditions. Column (1) labels each scenario. Column (2) reports how much 2012 U.S. GDP would need to change in order to match the welfare change in the scenario. Column (3) reports the same calculation assuming no congestion at intermodal terminals while Column (4) reports the same calculation assuming no congestion at both intermodal terminals and roads.

How much does congestion affect these results? We next estimate the same increase in rail link costs, but reducing the congestion at intermodal terminals to zero ($\lambda_m=0$). We find a very small increase in the negative welfare impact of 2.6%, which is expected since the terminal congestion effects are not binding due to prohibitively high cost of rail---there is very little traffic flows on the rail network. The small increase is likely due to intermodal terminals that are also ports. However, once all congestion effects are removed, the negative impact grows by an additional 18%, equivalent to decreasing U.S. GDP by about \$279 billion in 2012 USD, first row of [Table](#tab:scenarios_congest), Column (4)). Consistent with our terminal improvement counterfactuals, congestion has a compounding effect on welfare (Figures [8](#fig:welfare_congestion_comp) and [20](#fig:welfare_congestion_comp_all)).

Next, we evaluate the environmental consequences of the rail strike. Under this scenario, cargo that would typically move by rail is diverted onto the road network, leading to a large increase in truck GHG emissions of more than 38,000 kt (first row of [Table](#tab:scenarios_env), Column (2)). Although rail GHG emissions decline due to the absence of rail transport (first row, Column (3)), trucks are far more polluting per ton‑mile. The resulting net social cost from these emission changes is \$11.9 billion, on top of the initial welfare loss of \$230 billion (first row of [Table](#tab:scenarios_env), Columns (4) and (5)). Overall, the negative welfare impact of losing access to the multimodal rail network is compounded by the additional environmental damage from the modal substitution towards truck transport.

<a id="tab:scenarios_env"></a>

> **Environmental Impact of Policy Scenarios**

--- -------------------------- ----------------------------- ---------------------------- -------------------------- ----------------------
            \(1\) Scenario        \(2\) Truck GHG Change (kt)   \(3\) Rail GHG Change (kt)   \(4\) GHG Benefit (\$bn)   \(5\) Benefit (\$bn)
   1       Railroad Strike                   38947                        -5171                       -11.88                  -230.46
   2   Removal of the Jones Act              -589                          -47                         0.19                     3.15
   3         Panama Canal                    1524                          111                        -0.45                    -2.67
  --- -------------------------- ----------------------------- ---------------------------- -------------------------- ----------------------

**Notes:** The table reports the environmental impact of three policy scenarios. The first row quantifies the loss of rail network access, motivated by the averted U.S. rail strike in fall 2022. The second row quantifies the repeal of the Merchant Marine Act of 1920 (Jones Act), which restricts domestic maritime shipping to vessels that are U.S.-owned, -built, and -crewed. The third row quantifies disruptions to the Panama Canal due to drought conditions. Column (1) labels each scenario. Columns (2) and (3) report changes in truck and rail GHG emissions respectively, which comes from the corresponding changes in their traffic flows and is measured in kilotons (kt). Column (4) then presents the resulting net social cost or benefit associated with the mode-specific GHG emission changes. Column (5) calculates how much 2012 U.S. GDP would need to change in order to match the overall welfare change from each scenario (reproduced from [Table](#tab:scenarios_congest) Column (2)). Waterway emission changes are included in Column (4) but omitted here for brevity.

### Removal of Jones Act: U.S.-Owned, -Built, and -Crewed Shipping Requirement

Next, we quantify the consequences of repealing the Jones Act, the Merchant Marine Act of 1920. This is an active U.S. trade regulation which requires all ships transporting freight and passengers between U.S. ports to be built in the U.S., owned by U.S. citizens, and mostly crewed by U.S. citizen. Jones Act ships on average cost 2.7 times to operate than foreign-flag equivalents ([MARAD 2011](#ref-marad2011comparison)).[^42] We evaluate the repeal of the Jones Act by decreasing the link cost of waterways by the MARAD ([2011](#ref-marad2011comparison)) estimate. The second row in [Table](#tab:scenarios_congest) shows that the welfare gain of repealing the Jones Act and allowing foreign ships to transport cargo between U.S. ports is equivalent to increasing U.S. GDP by about \$3.2 billion (in 2012 USD). Our estimate lies towards the lower end of the range of previous federal government estimates: \$2.8 billion ([USITC 1995](#ref-usitc1995)) to \$9.8 billion ([USITC 1991](#ref-usitc1991)). One reason is scope: we evaluate only the continental United States. The Jones Act repeal will have much larger benefits for Hawaii, Alaska, and Puerto Rico since these locations rely a lot more on maritime transport and have limited substitutes to other modes. Another potential reason is that our estimates reflect the U.S. multimodal network today, which has had more than a century---since the Jones Act's passage in 1920---to adjust away from costly coastal shipping. Dense rail and road networks run up and down the U.S. coastlines in present day (Figure [3](#fig:U.S.-Multimodal-Transportation)). Had waterborne transport been less expensive, these networks might well have been built further inland instead.

In this scenario, the congestion effects of intermodal terminals play a much larger role in informing the welfare estimates. Without intermodal terminal congestion, the welfare benefits from repealing the Jones Act increase by 272% (second row in [Table](#tab:scenarios_congest) Column (3)). This is due to the gains from being able to increase waterway transport use once it is cheaper. Without all congestion (road and terminals), the welfare gains from the repeal increase by more than 4 times (second row in [Table](#tab:scenarios_congest) Column (4)).

Additionally, the repeal of the Jones Act decreases emissions overall. This is because cargo would substitute towards using waterways due to the lower cost, and so both road and rail traffic would decrease as a result (second row of [Table](#tab:scenarios_env), Columns (2) and (3)). Since barge emissions are much lower, this results in a GHG benefit increase of 0.2 billion dollars (second row of [Table](#tab:scenarios_env), Column (4)).

### Panama Canal Disruptions: Impact of Drought Conditions

Our third scenario studies the impact of the drought conditions in the Panama Canal, which decreases the number of ships that can access it ([Rojanasakul 2024](#ref-panama_drought)). To trace out the importance of the Panama Canal and how it interacts with the U.S. multimodal transportation system, we include in our calibration a (coarse) notion of routed imports at the port-level. Specifically, we include linkages from ports to foreign destinations and calibrate the importance of these linkages with port-destination specific trade flows.[^43] To simulate the impact of the Panama Canal, we assume that routes that typically require usage of the Panama Canal (e.g. Asia to ports on the East Coast) are affected by transport cost increase. We evaluate this disruption by increasing the cost of accessing the canal by five times.

The third row in [Table](#tab:scenarios_congest) shows that the welfare cost of disruptions at the Panama Canal is equivalent to decreasing U.S. GDP by about \$2.7 billion (in 2012 USD). To the best of our knowledge, this is the first estimate of this disruption allowing for modal and route substitution, including at ports. Here, removing congestion again compounds these effects. Without terminal congestion, the effects increase by more than 186%. This large increase is driven by the modal substitution from water to rail and road, and the intermodal terminals playing a crucial role in facilitating this transfer. Without terminal and road congestion, the increase is a further 35 percent. The modal substitution due to the canal disruptions in turn increases the use of both truck and rail which increases GHG emissions on both modes (third row of [Table](#tab:scenarios_env)). This results in an overall decrease in the GHG benefit of 0.5 billion dollars (third row of [Table](#tab:scenarios_env), Column (4)).

<a id="sec:Conclusion"></a>

## Conclusion

Freight transportation is fundamentally multimodal, yet most quantitative analyses of transport infrastructure still abstract from either transport mode choice, intermodal bottlenecks, or both. In this paper, we develop a tractable spatial equilibrium framework that embeds recursive route choice, nested mode choice, and mode-specific congestion into a unified model of the freight network. We then bring this framework to the data by estimating an elasticity of modal substitution between rail and truck and a congestion elasticity at intermodal terminals using vessel-positioning data. This combination of theory, estimation, and calibration allows us to evaluate infrastructure improvements and disruptions in a way that is both economically disciplined and operationally realistic.

Our results show that the multimodal structure of the transport system matters quantitatively for both welfare and emissions. Improvements at intermodal terminals generate large gains, especially at centrally located hubs such as Chicago, Atlanta, and Kansas City, because these nodes connect coastal gateways to the interior and mediate substitution across road, rail, and waterways. At the same time, the paper shows that congestion substantially attenuates the gains from infrastructure improvements: abstracting from congestion leads to sizable overstatements of the welfare effects of highway investments, while abstracting from multimodal flexibility or endogenous rerouting leads to understatements. More broadly, the decomposition makes clear that the value of a local improvement depends not only on the traffic it directly carries, but also on how that improvement reorganizes traffic across the rest of the network and on whether those induced adjustments run into scarcity at roads or terminals.

Our policy counterfactuals highlight the same message from a different angle. The multimodal rail network is valuable: shutting it down generates welfare losses on the order of \$ 230 billion in GDP-equivalent terms, with additional environmental costs as freight shifts toward road transport. Conversely, reducing barriers to waterborne domestic transport through repeal of the Jones Act raises welfare, while the Panama Canal disruptions impose meaningful losses that are amplified by congestion at the terminal nodes needed to absorb diverted traffic. Taken together, these results imply that the economic cost of disruptions depend on the extent of substitution into other modes, the capacity of intermodal terminals to accommodate that substitution, and the broader equilibrium effects on market access across space.

The broader implication is that intermodal terminals should be viewed as core infrastructure in their own right. They are not merely transfer points between networks. Instead, they are locations where the efficiency, resilience, and environmental performance of the freight system are jointly determined. This makes them natural targets for transport infrastructure policy, especially in an environment where geopolitical risk, climate-related disruptions, and decarbonization goals are becoming increasingly salient. By showing how multimodal substitution, congestion, and the network structure interact, our framework provides a way to rank such investments and to quantify the trade-offs between efficiency, robustness, and emissions reduction. Future work could extend this framework to incorporate additional margins, such as inventories, market power, scheduling and reliability, or international supply-chain propagation. The key insight remains: the welfare effects of transport infrastructure investments depend on the multimodal network through which goods actually move.

## Appendix: Theoretical Derivations

This appendix presents derivations for the theory section. [Table](#tab:notation_variables) lists the notations that are used in the theory framework.

<a id="tab:notation_variables"></a>

> **Overview of notation**

------------------------------------------------------------------- -------------------------------------------------
  **Object**                                                          **Notation**
  Multi-layered graph                                                 $\mathcal{G} \equiv (\mathcal{N}, \mathcal{L})$
  Successor nodes                                                     $\mathcal{B}(i)$
  Predecessor nodes                                                   $\mathcal{F}(i)$
  Neighboring nodes                                                   $\mathcal{N}(i)$
  Route of length $K$                                                 $r \equiv \{i=r_0, r_1, \ldots, r_K=j\}$
  Elasticity of substitution across goods                             $\sigma$
  Route dispersion parameter                                          $\theta$
  Mode dispersion parameter                                           $\eta$
  Expected minimal transport cost between $i$ and $j$                 $\tau_{ij}$
  Expected minimal edge-specific transport cost between $i$ and $k$   $t_{ik}$
  Mode-specific transport cost between $i$ and $k$ for mode $m$       $\tilde{t}_{ik,m}$
  Link intensity                                                      $\pi_{ij}^{kl}$
  Link-sourcing probability                                           $\pi_{ij,k}$
  Link choice probability conditional on sourcing from $i$ to $j$     $\pi_{ij}^{k}$
  Mode choice probability conditional on link $ik$                    $\pi_{ij,k}^{m}$
  Mode-link-sourcing probability                                      $\pi_{ij,k,m}$
  ------------------------------------------------------------------- -------------------------------------------------

<a id="Subsec:Route_Shares"></a>

### Derivations for Section [3.2](#subsec:recursive_sourcing_eqm): Recursive Routing Choice

A consumer resides in location $j$ and makes a route-sourcing choice comparing prices across all producer locations $i$ and transportation costs across multiple routes $r$. We make the assumption that transport cost are multiplicative and that they are furthermore the product of edge-specific transport costsalong the route $r$, i.e. $\tau_{ij,r}^{-\theta_j}=\left(\prod_{l=1}^{K}t_{r_{t-1},r_{l}}^{-\theta_j}\right)$. Finally, we assume that the consumer makes a recursive route-sourcing choice, beginning at the destination location $j$ by comparing the sourcing prices across the set of (predecessor) neighboring nodes $k\in\mathcal{B}\left(j\right)$ net of the transport cost of traversing via the set of (predecessor) neighboring nodes, $t_{kj}$. For now - without loss of generality - we simply assume that the consumer faces a routing problem along a single-layered graph. As such, the edge-specific transport cost $t_{kj}$ can be interpreted as the expected minimum link cost of traversing to the neighboring node along a multimodal transport network. In summary, the consumer at location $j$ faces the following set of (recursively defined) prices:

$$
p_{ij,k}(\nu)=\frac{t_{kj}\tau_{ik}w_{i}}{\varepsilon_{ij,k}(\nu)}
$$

where $\varepsilon_{ij,k}(\nu)$ is a random variable drawn from a Frechet distribution with cumulative distribution given by,

$$
F_{ijk}(\epsilon)=e^{-T_{ijk}\epsilon^{-\theta_j}}
$$


The consumer in location $j$ is presented with a set of route-source specific prices across producer locations $i$ and chooses a route by traversing towards neighboring node $k$, i.e.

$$
\begin{aligned}G_{ijk}(p) & =\operatorname{Pr}\left(P_{ijk}\leq p\right)=1-F_{ijk}\left(\frac{t_{kj}\tau_{ik}w_{i}}{p}\right)\\
 & =1-e^{-T_{ijk}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_j}p^{\theta_j}}
\end{aligned}
$$


We can use this distribution to characterize the lowest route-source specific price that consumer in location $j$ faces. To do so, fix an arbitrary threshold price $p$. The lowest price will be less than $p$, unless each route-source specific price is greater than $p$. We therefore seek to characterize, $G_{ijk}(p)=\operatorname{Pr}\left(P_{ijk}\leq p\right)$, which is given by,

$$
\begin{aligned}G_{j}(p) & =1-\prod_{i,k}\left(1-G_{ijk}(p)\right)\\
 & =1-\prod_{i,k}e^{-T_{ijk}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_j}p^{\theta_j}}\\
 & =1-e^{-\Phi_{j}p^{\theta_j}}
\end{aligned}
$$

where $\Phi_{j}=\sum_{ik}T_{ijk}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_j}$. If $p_{ij,k}(\nu)=p$ then the probability that $ijk$ is the cost minimizing route-source choice is given by,

$$
\begin{aligned}\prod_{i^{\prime}\neq i,k^{\prime}\neq k}\operatorname{Pr}\left[P_{ijrm}\geq p\right] & =\prod_{i^{\prime}\neq i,k^{\prime}\neq k}\left[1-G_{i'jk'}\right]\\
 & =\prod_{i^{\prime}\neq i,k^{\prime}\neq k}e^{-T_{ijk}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_j}p^{\theta_j}}\\
 & =e^{-\left(\sum_{i,k}T_{ijr}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_j}\right)p^{\theta_j}}
\end{aligned}
$$


Integrating over all possible equilibrium prices $p$ we can characterize the probability that node $k$ and producer location $i$ are the cost minimizing route-source choices:

$$
\begin{aligned}\pi_{ij,k} & =\int_{0}^{\infty}\prod_{i^{\prime}\neq i,k^{\prime}\neq k}\left[1-G_{i'jk'}\right]dG_{ijk}(p)\\
 & =\int_{0}^{\infty}\prod_{i^{\prime}\neq i,k^{\prime}\neq k}e^{-T_{i'jk'}\left(t_{k'j'}\tau_{i'k'}w_{i'}\right)^{-\theta_j}p^{\theta_j}}dG_{ijk}(p)
\end{aligned}
$$


Replacing with $dG_{ijk}(p)=\left[T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\theta_j p^{\theta_j-1}\right]e^{-T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}p^{\theta_j}}dp$, we obtain,

$$
\begin{aligned}\pi_{ij,k} & =\int_{0}^{\infty}\prod_{i^{\prime}\neq i,k^{\prime}\neq k}e^{-T_{i'jk'}\left(t_{k'j}\tau_{i'j}w_{i'}\right)^{-\theta_j}p^{\theta_j}}dG_{ijk}(p)\\
 & =\int_{0}^{\infty}\prod_{i^{\prime}\neq i,k^{\prime}\neq k}e^{-T_{i'jk'}\left(t_{k'j}\tau_{i'j}w_{i'}\right)^{-\theta_j}p^{\theta_j}}\left[T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\theta_j p^{\theta_j-1}\right]e^{-T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}p^{\theta_j}}dp\\
 & =T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\int_{0}^{\infty}\prod_{i,k}e^{-T_{ijk}\left(t_{jk}\tau_{ji}w_{i}\right)^{-\theta_j}p^{\theta_j}}\left[\theta_j p^{\theta_j-1}\right]dp\\
 & =T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\int_{0}^{\infty}e^{-\left(\sum_{i,k}T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\right)p^{\theta_j}}\left[\theta_j p^{\theta_j-1}\right]dp\\
 & =T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\int_{0}^{\infty}e^{-\Phi_{j}p^{\theta_j}}\left[\theta_j p^{\theta_j-1}\right]dp\\
 & =T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}\left[\frac{1}{\Phi_{j}}e^{-\Phi_{j}p^{\theta_j}}\right]_{0}^{\infty}\\
 & =\frac{T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}}{\Phi_{j}}
\end{aligned}
$$


Replacing with $\Phi_{j}=\sum_{ik}T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}$, we obtain,

$$
\pi_{ij,k}=\frac{T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}}{\sum_{ik}T_{ijk}\left(t_{kj}\tau_{ij}w_{i}\right)^{-\theta_j}}
$$


replacing $T_{ijk}\equiv\left(\frac{1}{A_{i}}\right)^{\theta_j}$, we obtain,


$$
\pi_{ij,k}=\frac{\left(w_{i}/A_{i}\right)^{-\theta_j}\left(t_{kj}\tau_{ik}\right)^{-\theta_j}}{\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta_j}\sum_{k'\in\mathcal{F}(i)}\left(t_{k'j}\tau_{ik'}\right)^{-\theta_j}}
$$


as stated above. Furthermore, the expected minimal price is given by,

$$
\begin{aligned}
p_{ij,k} & =\mathbb{E}\left[\min_{k\in\mathcal{F}(i)}\left\{ \frac{t_{ kj} \tau_{ ik} w_i}{\varepsilon_{i j, k}(v)}\right\} \right]\\
 & \propto\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta_j}\sum_{k'\in\mathcal{B}(i)}\left(t_{k'j}\tau_{ik'}\right)^{-\theta_j}\\
 & =\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta_j}\tau_{ij}^{-\theta_j}
\end{aligned}
$$

where in the last line we have used the result that if we consider separately the routing problem this implies an expected transport cost that is in itself recursively defined (see [Equation](#eq:recursive_routing), Section [3.2](#subsec:recursive_sourcing_eqm)),

$$
\tau_{ij}=\mathbb{E}\left[\min_{k\in\mathcal{F}(i)}\left\{ \frac{t_{ik}\tau_{kj}}{\varepsilon_{kj}}\right\} \right]\propto\left(\sum_{k\in\mathcal{B}(i)}\left(t_{ik}\tau_{kj}\right)^{-\theta_j}\right)^{-\frac{1}{\theta_j}}
$$

 which expressed the transport cost as an index of the continuation values along the different edges of the graph.

<a id="subsec:gravity_deriv"></a>

### Derivations for Section [3.3](#subsec:rec_eq): Combined Routing and Sourcing Choice, and Gravity

We follow the derivations for the general equilibrium gravity equation in ([Anderson and Wincoop 2003](#ref-10.1257/000282803321455214)) to derive a gravity formula, but allowing for generalized substitution patterns. Let us start by examining the expenditure shares, which are given by,

$$
\pi_{ij}=\frac{\delta_{i}^{-\theta_{j}}\tau_{ij}^{-\theta_{j}}}{\sum_{i\in N}\delta_{i}^{-\theta_{j}}\tau_{ij}^{-\theta_{j}}}=\frac{\delta_{i}^{-\theta_{j}}\tau_{ij}^{-\theta_{j}}}{P_{j}^{\theta_{j}}}
$$

where we have posited the existence of $\delta_i$ which is a generic origin-shifting gravity constant that is to be solved for. Combining this sourcing share expression to express bilateral trade flows, we obtain,

$$
X_{ij}=\left(\frac{\delta_{i}\tau_{ji}}{P_{j}}\right)^{-\theta_{j}}Y_{j}
$$

where we define the price index, allowing for node-specific substitution elasticities $\theta_j$, i.e.

$$
P_{j}=\left[\sum_{i\in N}\delta_{i}^{-\theta_{j}}\tau_{ij}^{-\theta_{j}}\right]^{-\frac{1}{\theta_{j}}}
$$

 We now impose market clearing to derive the expression for the gravity constant, i.e.

$$
\begin{aligned}
Y_i & =\sum_j X_{i j} \\
 & =\sum_j\left(\frac{\delta_i \tau_{i j}}{P_j}\right)^{-\theta_j} Y_j \\
 & =\left(\delta_i\right)^{-\theta_i} \sum_j \delta_i^{\left(\theta_i-\theta_j\right)} P_j^{\theta_j} \tau_{i j}^{-\theta_j} Y_j \\
 & =\left(\delta_i\right)^{-\theta_i} \sum_j \delta_i^{\Delta \theta_j} P_j^{\theta_j} \tau_{i j}^{-\theta_j} Y_j
\end{aligned}
$$

where we defined the difference between the substitution parameters between nodes $i$ and $j$ as $\Delta \theta_j\equiv \theta_i - \theta_j$. Solving for $\delta_{i}$,

$$
\delta_{i}=\left(\frac{Y_{i}}{\sum_{j}\delta_{i}^{\Delta\theta_{j}}\left(\frac{\tau_{ij}}{P_{j}}\right)^{-\theta_{j}}Y_{j}}\right)^{-\frac{1}{\theta_{i}}}
$$


Plugging $\delta_{i}$ back into the gravity equation, we obtain


$$
\begin{aligned}
& X_{i j}=\left(\frac{\delta_i \tau_{i j}}{P_j}\right)^{-\theta_j} Y_j=\left(\delta_i\right)^{-\theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} Y_j \\
& =\left(\frac{Y_i}{\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} Y_j}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} Y_j \\
& =\left(\frac{Y_i Y_j^{\frac{\theta_i}{\theta_j}}}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{1}{\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \\
& =\left(\frac{Y_i Y_j^{\frac{\theta_i}{\theta_j}}}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{1}{\left[\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}\right]^{-\frac{1}{\theta_j}}}\right)^{-\theta_j \frac{\theta_j}{\theta_i}}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \\
& =\left(\frac{Y_i Y_j^{\frac{\theta_i}{\theta_j}}}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{1}{\left[\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}\right]^{-\frac{1}{\theta_j}}}\right)^{-\theta_j \frac{\theta_j}{\theta_i}}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \\
& =\left(\frac{Y_i Y_j^{\frac{\theta_i}{\theta_j}}}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{\left(\tau_{i j}\right)^{\frac{\theta_i}{\theta_j}}}{\left[\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}\right]^{-\frac{1}{\theta_j}} P_j^{\frac{\theta_i}{\theta_j}}}\right)^{-\theta_j \frac{\theta_j}{\theta_i}} \\
& =\left(\frac{Y_i Y_j^{\frac{\theta_i}{\theta_j}}}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{\left(\tau_{i j}\right)^{\frac{\theta_i}{\theta_j}}}{\Pi_i P_j^{\frac{\theta_i}{\theta_j}}}\right)^{-\theta_j \frac{\theta_j}{\theta_i}} \\
&
\end{aligned}
$$

where the producer index is given by,

$$
\Pi_{i}=\left(\sum_{j}\delta_{i}^{\Delta\theta_{j}}\left(\frac{\tau_{ij}}{P_{j}}\right)^{-\theta_{j}}\frac{Y_{j}}{y^{W}}\right)^{-\frac{1}{\theta_{j}}}
$$


We can substitute in the equilibrium scaled prices to get,

$$
\begin{aligned}
& P_j=\left[\sum_i\left(\delta_i\right)^{-\theta_j}\left(\tau_{i j}\right)^{-\theta_j}\right]^{-\frac{1}{\theta_j}} \\
& =\left[\sum_i\left(\frac{Y_i}{\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} y_j}\right)^{\frac{\theta_j}{\theta_i}}\left(\tau_{i j}\right)^{-\theta_j}\right]^{-\frac{1}{\theta_j}} \\
& =\left[\sum_i\left(\frac{\frac{Y_i}{y^W}}{\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}}\right)^{\frac{\theta_j}{\theta_i}}\left(\tau_{i j}\right)^{-\theta_j}\right]^{-\frac{1}{\theta_j}} \\
& =\left[\sum_i\left(\frac{Y_i}{y^W}\right)^{\frac{\theta_j}{\theta_i}}\left(\frac{\left(\tau_{i j}\right)^{\frac{\theta_i}{\theta_j}}}{\left(\sum_j \delta_i^{\Delta \theta_j}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \frac{Y_j}{y^W}\right)^{-\frac{1}{\theta_j}}}\right)^{-\theta_j \frac{\theta_j}{\theta_i}}\right]^{-\frac{1}{\theta_j}} \\
& =\left[\sum_i \tau_{i j}^{-\theta_j}\left(\frac{\frac{Y_i}{y^W}}{\Pi_i}\right)^{\frac{\theta_j}{\theta_i}}\right]^{-\frac{1}{\theta_j}} \\
&
\end{aligned}
$$

 In conclusion we have the following producer and consumer price indices respectively,

$$
\begin{aligned}\Pi_{i} & \equiv\left(\sum_{j}\delta_{i}^{\Delta\theta_{j}}\left(\frac{\tau_{ij}}{P_{j}}\right)^{-\theta_{j}}\gamma_j\right)^{-\frac{1}{\theta_{j}}}\\
P_{j} & =\left[\sum_{i}\tau_{ij}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right]^{-\frac{1}{\theta_{j}}}
\end{aligned}
$$

and we obtain the following gravity equation,

<a id="eq:gravity"></a>

$$
X_{ij}=\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_i}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}
$$

where $\delta_i=Y_i$ and $\gamma_i=\frac{Y_j}{y^w}$ represent the gravity constants, $P_{j}$ is the consumer price index or inward market access term, and $\Pi_{i}$ is the producer price index or outward market access term.[^44] For symmetric substitution parameters (if $\theta_j=\theta_i=\theta$), both the gravity formula and price indices collapse to their traditional form.

<a id="Online_Appendix:Equilibrium"></a>

### Derivations for Section [3.3](#subsec:rec_eq): Combined Routing and Sourcing Choice, and Recursive Equilibrium

This section provides additional derivations for the equilibrium equations.

In terms of market clearing and trade balance we have the following two equilibrium conditions,


$$
\begin{aligned}Y_{i} & =\sum_{j}X_{ij}\\
E_{i} & =\sum_{j}X_{ji}
\end{aligned}
$$


Starting with the first equilibrium condition we can derive the first part of [Equation](#eq:recursive_eq_a):

$$
\begin{aligned}\gamma_{i} & =\sum_{j}X_{ij}\\
\gamma_{i} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\Pi_{i}^{\theta_{j}\frac{\theta_{j}}{\theta_{i}}-\theta_{i}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\Pi_{i}^{\Delta_{i,j}}\times\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\tau_{ij}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\left(\sum_{k\in\mathscr{B}\left(k\right)}t_{ik}^{-\theta_{j}}\tau_{kj}^{-\theta_{j}}\right)\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\left(\sum_{k\in\mathscr{F}\left(i\right)}t_{ik}^{-\theta_{j}}\tau_{kj}^{-\theta_{j}}\right)\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(-\tau_{ki}^{-\theta_{i}}\frac{\delta_{i}}{p_{i}^{-\theta_{i}}}+\sum_{j}t_{ik}^{\Delta\theta_{j}}\tau_{kj}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =\left(t_{ii}^{-\theta_{i}}+\sum_{k\in\mathscr{F}(i)}\left(t_{ik}\tau_{ki}\right)^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(-\tau_{ki}^{-\theta_{i}}\frac{\delta_{i}}{p_{i}^{-\theta_{i}}}+\sum_{j}t_{ik}^{\Delta\theta_{j}}\tau_{kj}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =\left(t_{ii}^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(\sum_{j}t_{ik}^{\Delta\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\tau_{kj}^{-\theta_{j}}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =t_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\tilde{\Pi}_{k}^{-\theta_{i}}
\end{aligned}
$$

where in the second line we defined, $\Pi_{i}^{\Delta_{i,j}}\equiv\Pi_{i}^{\theta_{j}\frac{\theta_{j}}{\theta_{i}}-\theta_{i}}$ and where $\tilde{\Pi}_{k}^{-\theta_{i}}=\left(\sum_{j}t_{ik}^{\Delta\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\tau_{kj}^{-\theta_{j}}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)^{\frac{\theta_{i}}{\theta_{j}}}$ is the approximate price index that controls for differences in elasticities of substitution between neighboring nodes. And where in the fourth line we have used the fact that at the penultimate node the set of predecessor nodes of k ($\mathcal{B}(k)$) coincides with set of successor nodes of i ($\mathcal{F}(i)$). And finally, where in the last line we used the definition of the recursive transport cost ([Equation](#eq:recursive_routing)), $\tau_{ii}^{-\theta}=\left(t_{ii}^{-\theta}+\sum_{k\in\mathcal{F}(i)}\left(t_{ik}\tau_{kj}\right)^{-\theta}\right)$.

Continuing with the second equilibrium condition we can derive the second part of [Equation](#eq:recursive_eq_a),


$$
\begin{aligned}\delta_{j} & =\sum_{i}X_{ij}\\
\delta_{j} & =\sum_{i}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
P_{j}^{-\theta_{j}} & =\sum_{i}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i\neq j}\tau_{ij}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i\neq j}\left(\sum_{k\in\mathscr{B}(j)}\tau_{ik}^{-\theta_{j}}t_{kj}^{-\theta_{j}}\right)\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(-\tau_{jk}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =\left(t_{jj}^{-\theta_{j}}+\sum_{k\in\mathscr{B}(j)}\left(t_{jk}\tau_{kj}\right)^{-\theta_{j}}\right)\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(-\tau_{jk}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =\left(t_{jj}^{-\theta_{j}}\right)\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =t_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}P_{k}^{-\theta_{j}}
\end{aligned}
$$

where in the last line we used the definition of the recursive transport cost ([Equation](#eq:recursive_routing)), $\tau_{ii}^{-\theta}=\left(t_{ii}^{-\theta}+\sum_{k\in\mathcal{F}(i)}\left(t_{ik}\tau_{kj}\right)^{-\theta}\right)$. Therefore we have,

$$
P_{j}^{-\theta_{j}}=t_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}P_{k}^{-\theta_{j}}
$$


$$
\Pi_{i}^{-\theta_{i}}=\left(t_{ii}^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(\sum_{j}t_{ik}^{\Delta\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\tau_{kj}^{-\theta_{j}}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)
$$


Notice that for the case where we have $\theta_{i}=\theta_{j}$, this reduces to,


$$
\Pi_{i}^{-\theta} =\left(t_{ii}^{-\theta}\right)\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta}\left(\sum_{j}\tau_{kj}^{-\theta}\frac{\delta_{j}}{P_{j}^{-\theta}}\right)
    =\left(t_{ii}^{-\theta}\right)\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta}\Pi_{k}^{-\theta}
$$


$$
P_{j}^{-\theta}=t_{jj}^{-\theta}\frac{\gamma_{j}}{\Pi_{j}^{-\theta}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta}P_{k}^{-\theta}
$$

 We can further express the price indices in terms of equilibrium labor and income allocations across space. We assume welfare equalization, $W_{j}=\frac{w_{j}}{P_{j}}u_{j}$, and assume localized productivity ($A_{i}$) and amenity spillovers ($u_{i}$) that depend on the density of workers in a locality, $A_{i}=\bar{A}_{i}L_{i}^{\alpha}$ and $u_{i}=\bar{u}_{i}L_{i}^{\beta}$, where $\bar{A}_{i}$ is the exogenous productivity component at location $i$ and $\alpha$ determines the extent to which productivity is affected by the local population $L_{i}$ (productivity spillovers), and where $\bar{u}_{i}$ is the exogenous utility derived from living in location $i$ and $\beta$ governs the extent to which amenities are affected by the location population (amenity spillovers). We rewrite the producer and consumer price index respectively,


$$
\begin{aligned}
& P_i=\frac{w_i u_i}{W} \Longleftrightarrow \\
& P_i=Y_i \bar{u}_i L_i^{\beta-1} W^{-1}
\end{aligned}
$$


$$
\begin{aligned}
& \Pi_i=A_i L_i Y_i^{-\frac{\theta+1}{\theta}} \Longleftrightarrow \\
& \Pi_i=A_i L_i^{\alpha+1} Y_i^{-\frac{\theta+1}{\theta}}
\end{aligned}
$$

 As a result, we have $P_{j}=\frac{1}{\bar{W}}\bar{u}_{j}L_{j}^{\beta-1}Y_{j}$ and $\Pi_{i}=\bar{A}_{i}L_{i}^{1+\alpha}Y_{i}^{-\frac{\theta_i+1}{\theta_i}}$.[^45] Specifically, given the productivity and amenity fundamentals $\left\{\bar{A}_{i}, \bar{u}_i \right\}$ as well as the aggregate transport costs, the system of $2N$ equations can be solved for the $2N$ endogenous equilibrium values. The equilibrium system determines the endogenous variables via the interaction of price indices along the network topology, where transport cost is endogenously determined as part of the equilibrium system.

<a id="Subsec:Transport_Cost"></a>

### Derivations for Section [3.4](#subsec:multimodal): Nested Mode Choice and Aggregate Transport Cost

As presented in the previous section, we consider a consumer that resides in location $j$ and makes a route-sourcing choice by choosing sequentially edges along the graph. This provides a convenient characterization of routing that avoids the curse of dimensionality by expressing the problem as a recursive problem instead of considering the universe of possible routes along a possibly high-dimensional graph. To furthermore accommodate multimodal routing choices, we incorporate a nested modal choice. In that setting, conditional on the neighboring node chosen, the consumer makes a modal choice by choosing the cost minimizing mode out of all modes along the edge, i. to traverse the edge (subject to an extreme value distributed cost shock). To fix ideas, consider a consumer in location $j$ having chosen to route towards the neighboring node $k$. The consumer then compares all the different modes that are available along this edge, i.e. $m\in\mathcal{M}_{jk}$, where $\mathcal{M}_{jk}$ is the set of modes available between nodes $j$and $k$, and where the edge mode specific transport costs given by,

$$
\tilde{t}_{jk,m}=\begin{cases}
t_{jk,m} & \text{if}\quad m=1\\
s_{jj,m}\tau_{jk,m}s_{kk,m} & \text{if}\quad m\neq1
\end{cases}
$$

where for the primary mode no switching cost is required, but for any non-primary mode $(m\neq1)$ a switching cost ist imposed, while $\tau_{jk,m}$ refers to the iceberg transport cost of traversing the edge between node $j$ and $k$ along mode $m$. Notice that this specification is extremeley general and allows for geographies where non-primary modes might connect an entirely different set of nodes than primary nodes. The consumer then faces a cost minimizing choice subject to an extreme-value distributed cost shock, i.e.

$$
\min_{m\in\mathcal{M}(j,k)}\left\{ \frac{t_{jk}}{\varepsilon_{m}}\right\}
$$

where the properties of the Frechet distribution implies that the expected cost minimizing transport along any mode between nodes $j$ and $k$ is given by,

$$
t_{ik}^{-\theta}\propto\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\eta}\right)^{\frac{\theta}{\eta}|}
$$


Overall, the consumer's route-sourcing choice can be written as a nested minimization problem where we can characterize the overall expected minimal cost, i.e.

$$
\begin{aligned}
p_{ij} & =\mathbb{E}\left[\min_{j\in\mathcal{F}(i)}\left\{ \mathbb{E}\left[\min_{m\in\mathcal{M}(i,k)}\left\{ \frac{t_{ik,m}}{\varepsilon_{m}}\right\} \right]\tau_{jd}w_{i}\frac{1}{\varepsilon_{ij}}\right\} \right]\\
 & \propto\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta}\sum_{k'\in\mathcal{F}(i)}\left(\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\eta}\right)^{-\frac{1}{\eta}}\tau_{k'i}\right)^{-\theta}\\
 & =\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta}\tau_{ij}^{-\theta}
\end{aligned}
$$

where in the last line we again have used the definition of the transportation cost in terms of the edge-specific costs and associated continuation values along neighboring nodes.

$$
\tau_{id}=\mathbb{E}\left[\min_{j\in\mathcal{F}(i)}\left\{ \frac{t_{ij}\tau_{jd}}{\varepsilon_{ij}}\right\} \right]\propto\left(\sum_{j\in\mathcal{F}(i)}\left(\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}t_{ik,m}^{-\eta}\right)^{-\frac{1}{\eta}|}\tau_{jd}\right)^{-\theta}\right)^{-\frac{1}{\theta}}
$$

 which expressed the transport cost as an index of the continuation values along the different edges of the graph.

The mode-route-sourcing choice probability is therefore given by,

$$
\begin{aligned}
\pi_{ij,k,m} & =\frac{\left(w_{i}/A_{i}\right)^{-\theta}\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta}\sum_{k'\in\mathcal{F}(i)}\left(t_{ik'}\tau_{k'i}\right)^{-\theta}}\frac{\tilde{t}_{ik,m}^{-\eta}}{t_{ik}^{-\eta}}\\
 & \equiv \pi_{ij,k}\times\pi_{ik}^{m}
\end{aligned}
$$

where in the last line, we can decompose this probability into the link choice probability ($\pi_{ij,k}$) and the mode choice probability along the link ($\pi_{ik}^{m}$)

<a id="subsec:Isomorphism_AA"></a>

### Isomorphism with ([Allen and Arkolakis 2022](#ref-AA_2022restud))

It might be insightful to link the recursive expression in our paper to the approach in AA2022 that instead relies on explicit enumeration of the universe of paths and utilizes matrix algebra to express the expected minimum transport cost in terms of the leontief inverse of the adjacency matrix that captures the underlying infrastructure network. As we will show, the model is isomorphic in the case where there is a simple unimodal transport network. Furthermore, we will also show that for the simplified case where the mode choice elasticity is equal to the route choice elasticity, we can show that their approach can be extended to provide a clean expression of the multimodal transport cost in terms of (leontief inverses) of the infrastructure matrices. First, let us demonstrate the isomorphism for unimodal transport network. Consider the recursive transport cost stated above,

$$
\tau_{id}=\mathbb{E}\left[\min_{j\in\mathcal{F}(i)}\left\{ \frac{t_{ij}\tau_{jd}}{\varepsilon_{ij}}\right\} \right]=\left(\sum_{j\in\mathcal{F}(i)}\left(t_{ij}\tau_{jd}\right)^{-\theta}\right)^{-\frac{1}{\theta}}
$$


If we assume a finite graph, then we can iteratively substitute and obtain a closed-form expression for the endogenous transport cost, i.e.


$$
\begin{aligned}
\left(\tau_{id}\right)^{-\theta} & =t_{d-1d}^{-\theta}\sum_{j\in F(i)}t_{ij}^{-\theta}\sum_{j'\in F(j)}\ldots\sum_{k'\in F(d-1)}t_{k'd-1}^{-\theta}\\
 & =\sum_{r\in\Re_{ij}}\left(\prod_{l=1}^{K}t_{r_{l-1},r_{l}}^{-\theta}\right)\\
 & =\sum_{K=0}^{\infty}A_{ij}^{K}\\
 & =(\mathbf{I}-\mathbf{A})^{-1}\equiv\mathbf{B}
\end{aligned}
$$

where in the second line we recognize that the recursive substitution on a finite graph results in a characterization of all possible routes of any length along the network. The resulting expression is identical to expression for endogenous transport cost in AA2022. In the third and fourth line we then employ the same argument as in their paper to show that the implied transport cost can be expressed as the leontief inverse of the underlying infrastructure matrix, where $\mathbf{A}\equiv\left[t_{ij}^{-\theta}\right]$ is an $N\times N$ matrix with $\left(i,j\right)$ element $t_{ij}^{-\theta}$ and $A_{ij}^{K}$ is the $(ij)$ element of the matrix $A$ to the matrix power $K.$ This shows that in essence, the two different approaches are isomorphic and capture the same underlying endogenous transport cost, albeit in different ways.

We now turn towards showing that for the special case where the mode choice elasticity is equal to the route choice elasticity, we can furthermore extend the approach in AA2022 to derive a clean decomposition of the multimodal transport cost in terms of a set of underlying mode-specific infrastructure matrices. Let us therefore consider the case where $\eta=\theta$. Notice that in this special case, the edge-specific transport cost is given by,

$$
\begin{aligned}
t_{ik}^{-\theta} & \propto\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\theta}
\end{aligned}
$$

where $\tilde{t}_{ik,m}^{-\theta}$are the mode specific traversal costs between node $i$ and $k$. As above, we can express recursively substitute the expected transport across modes between nodes, and obtain,

$$
\left(\tau_{id}\right)^{-\theta}=t_{d-1d}^{-\theta}\sum_{j\in F(i)}t_{ij}^{-\theta}\sum_{j'\in F(j)}\ldots\sum_{k'\in F(d-1)}t_{k'd-1}^{-\theta}
$$


By substituting the edge-specific transport cost in terms of the mode-specific cost, we obtain,


$$
\begin{aligned}
\left(\tau_{id}\right)^{-\theta} & =\left(\sum_{m\in\,\mathcal{M}\left(d-1,d\right)}\tilde{t}_{d-1d,m}^{-\theta}\right)\sum_{j\in F(i)}\left(\sum_{m\in\,\mathcal{M}\left(i,j\right)}\tilde{t}_{ij,m}^{-\theta}\right)\sum_{j'\in F(j)}\ldots\sum_{k'\in F(d-1)}\left(\sum_{m\in\,\mathcal{M}\left(k',d-1\right)}\tilde{t}_{k'd-1,m}^{-\theta}\right)\\
 & =\sum_{r\in\Re_{ij}}\left(\prod_{l=1}^{K}\sum_{m\in\,\mathcal{M}\left(r_{l-1},r_{l}\right)}\tilde{t}_{r_{l-1},r_{l},m}^{-\theta}\right)
\end{aligned}
$$

where the second line is a concise way of summarizing all possible uni and multi-modal paths along the multi-layered network.Without loss of generality, let us consider the case of two modes - one primary mode where flows originate and terminate, and a secondary mode that is accessible subject to some switching cost. Define the $(N_{1}+N_{2})\times(N_{1}+N_{2})$ matrix $\mathbf{A}=\left[a_{ij}\equiv t_{ij}^{-\theta}\right]$. Notice that this adjacency matrix forms a block partitioned matrix, i.e.

$$
\mathbf{A}=\left[\begin{array}{cc}
\mathbf{A_{1}} & \mathbf{S}\\
\mathbf{S'} & \mathbf{A_{2}}
\end{array}\right]
$$

where $\mathbf{A_{1}}=\left[a_{ij}\right]=\left[t_{ij}^{-\theta}\right]$ is the adjacency matrix for the primary transportation network, $\mathbf{A_{2}}=\left[a_{i'j'}\right]=\left[t_{i'j'}^{-\theta}\right]$ is the adjacency matrix for the secondary transportation network, and $\mathbf{S}=\left[s_{ii'}^{-\theta}\right]$ is the diagonal matrix that represents linkages between the primary and secondary transportation network. We can write $\tau_{ij}$ from by explicitly summing across all possible routes of all possible lengths. To do so, we sum across all locations that are traveled through all the possible paths as follows:


$$
\begin{aligned}
\tau_{ij}^{-\theta} & =\sum_{r\in\Re_{ij}}\left(\prod_{l=1}^{K}\sum_{m\in\,\mathcal{M}\left(r_{l-1},r_{l}\right)}\tilde{t}_{r_{l-1},r_{l},m}^{-\theta}\right)\\
 & =\sum_{K=0}^{\infty}\left(\sum_{k_{1}=1}^{\left(N_{1}+N_{2}\right)}\sum_{k_{2}=1}^{\left(N_{1}+N_{2}\right)}\ldots\sum_{k_{K-1}=1}^{\left(N_{1}+N_{2}\right)}a_{i,k_{1}}\times a_{k_{1},k_{2}}\times\ldots\times a_{k_{K-2},k_{K-1}}\times a_{k_{K-1}j}\right)
\end{aligned}
$$


By explicitly recognizing that this sum across all locations through all possible paths can be partitioned into unimodal paths on each transportation network and an arbitrary number of switches between transportation modes, we have,

$$
\tau_{ij}^{-\theta}=\sum_{t_{1}=1}^{N}\sum_{t_{2}=1}^{N}\ldots\sum_{t_{S}=1}^{N}\left(\left(\sum_{K=0}^{\infty}\mathbf{A}_{1,it_{1}}^{K}\right)\times s_{t_{1}t_{1}'}^{-\theta}\times\ldots\times s_{t_{s}'t_{s}}^{-\theta}\left(\sum_{K=0}^{\infty}\mathbf{A}_{1,T_{S}j}^{K}\right)\right)
$$

 which in matrix notation can be written as,

$$
\tau_{ij}^{-\theta}=\sum_{K=0}^{\infty}\left(\left(\sum_{K=0}^{\infty}\mathbf{A}_{1}^{K}\right)\left(\mathbf{S}\left(\sum_{K=0}^{\infty}\mathbf{A}_{2}^{K}\right)\mathbf{S}'\right)\right)^{K}\left(\sum_{K=0}^{\infty}\mathbf{A}_{1}^{K}\right)
$$


To simplify this expression let us first define the Leontief inverse for each infrastructure matrix separately, i.e.

$$
\sum_{K=0}^{\infty}\mathbf{A}_{1}^{K}=(\mathbf{I}-\mathbf{A}_{1})^{-1}\equiv\mathbf{B}
$$


$$
\sum_{K=0}^{\infty}\mathbf{A}_{2}^{K}=(\mathbf{I}-\mathbf{A}_{2})^{-1}\equiv\mathbf{C}
$$


We also define - for convenience - the sandwich matrix that adjusts the transport cost along the secondary transportation network for switching costs and therefore traces out the option value of having access to the secondary transportation network,

$$
\mathbf{S}\left(\sum_{K=0}^{\infty}\mathbf{A}_{2}^{K}\right)\mathbf{S}'\equiv\mathbf{D}
$$


From matrix calculus we can restate the following result that relates the inverse of the Schur complement of the partitioned infrastructure matrix to the geometric sum of matrix operations, specifically,

$$
\sum_{K=0}^{\infty}\left(\mathbf{B}^{-1}\mathbf{D}\right)^{K}\mathbf{B}^{-1}=(\mathbf{B}-\mathbf{D})^{-1}\equiv\mathbf{E}
$$


Applying this result, we can write,

$$
\begin{aligned}
\tau_{ij}^{-\theta} & =\sum_{K=0}^{\infty}\left((\mathbf{I}-\mathbf{A}_{1})^{-1}\left(\mathbf{S}(\mathbf{I}-\mathbf{A}_{2})^{-1}\mathbf{S}'\right)\right)^{K}(\mathbf{I}-\mathbf{A}_{1})^{-1}\\
 & =\left[\left(\mathbf{I}-\mathbf{A_{1}}\right)-\mathbf{S}\left(\mathbf{I}-\mathbf{A_{2}}\right)^{-1}\mathbf{S}'\right]_{ij}^{-1}
\end{aligned}
$$

 therefore we can write,

$$
\tau_{ij}=e_{ij}^{-\frac{1}{\theta}}
$$


Furthermore, the Woodbury matrix identity (see e.g. ([Horn and Johnson 2012](#ref-horn2012matrix))) states,

$$
(\mathbf{A}+\mathbf{UCV})^{-1}=\mathbf{A}^{-1}-\mathbf{A}^{-1}\mathbf{U}\left(\mathbf{C}^{-1}+\mathbf{V}\mathbf{A}^{-1}\mathbf{U}\right)^{-1}\mathbf{V}\mathbf{A}^{-1}
$$

 which implies

$$
\begin{aligned}
\tau_{ij}^{-\theta} & =\left[\left(\mathbf{I}-\mathbf{A_{1}}\right)-\mathbf{S}\left(\mathbf{I}-\mathbf{A_{2}}\right)^{-1}\mathbf{S}'\right]_{ij}^{-1}\\
 & =\left[\mathbf{B}+\mathbf{B}\mathbf{S}\left(\mathbf{A}/\mathbf{A_{1}}\right)^{-1}\mathbf{S'}\mathbf{B}\right]_{ij}\\
 & =\left[\left(\mathbf{I}-\mathbf{A_{1}}\right)^{-1}+\left(\mathbf{I}-\mathbf{A_{1}}\right)^{-1}\mathbf{S}\left(\mathbf{A}/\mathbf{A_{1}}\right)^{-1}\mathbf{S'}\left(\mathbf{I}-\mathbf{A_{1}}\right)^{-1}\right]_{ij}
\end{aligned}
$$

where $\mathbf{A}/\mathbf{A_{1}}:=\left(\mathbf{I}-\mathbf{A_{1}}\right)^{-1}-\mathbf{S}\left(\mathbf{A}/\mathbf{A_{1}}\right)^{-1}\mathbf{S'}$ defines the Schur complement of the adjacency matrix $A$. The expressions corresponds to the expression given in the main text and intuitively decomposes the transport cost into a component that originates from the unimodal paths and another component that originates from the multimodal paths. This result can also directly be obtained by applying to the partitioned matrix $A$ the formula for the inverse of block-partitioned matrices (see e.g. ([Horn and Johnson 2012](#ref-horn2012matrix))).

<a id="Subsec:Traffic"></a>

### Derivations for Section [3.5](#subsec:traffic): Congestion and Traffic Flows

We characterize equilibrium traffic at different nodes of the transportation network. First, we utilize the recursive routing choice to characterize aggregate traffic between any two nodes across any mode. Second, we characterize mode-specific traffic between nodes. Finally, we characterize traffic at terminal stations.

<a id="ap_sec:traffic_agg"></a>

#### Traffic Flows on the Aggregate Network

We start by characterizing the aggregate traffic between any two nodes across any mode. To do so we start by restating the (recursively defined) sourcing and link choice probability which is given by:


$$
\pi_{ij,k}=\frac{\left(w_{i}/A_{i}\right)^{-\theta}\left(t_{jk}\tau_{ki}\right)^{-\theta}}{\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta}\sum_{k'\in\mathcal{F}(i)}\left(t_{jk'}\tau_{k'i}\right)^{-\theta}}
$$

 which can be decomposed in the sourcing share and the link choice probability conditional on the sourcing choice, i.e.

$$
\begin{aligned}
\pi_{ij,kl} & =\frac{\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\sum_{k'\in\mathcal{F}(i)}\left(t_{ik'}\tau_{k'i}\right)^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}\\
 & =\frac{\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\tau_{ij}^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}\\
 & =\pi_{ij}^{k}\times\pi_{ij}
\end{aligned}
$$


The previous derivations only characterize the probability of choosing neighboring link $k$ when routing between $i$ and $j$. Notice that we can construct the probability of using any edge $kl$ when transporting goods from $i$ to $j$ in straightforward way,

$$
\begin{aligned}
\pi_{kj}^{kl} & =\frac{t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{kj}^{-\theta}}\\
 & =\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ik}^{-\theta}\tau_{kj}^{-\theta}}\\
 & =\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\\
&=\left(\frac{\tau_{i j}}{\tau_{i k} t_{k l} \tau_{i j}}\right)^{\theta}
\end{aligned}
$$

 which gives us the traffic equation in Section [3](#sec:Model). Notice that this arises naturally due to the markovian property of the recursive routing choice. To characterize traffic between nodes $k$ and $l$ along any mode, we characterize the share of goods that are being sourced from any location $i$ to any location $j$ and use the link $kl$ along the way, i.e.

$$
\begin{aligned} & \Xi_{kl}=\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\pi_{ij,kl}E_{j}\Longleftrightarrow\\
 & \Xi_{kl}=\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\pi_{ij}^{kl}X_{ij}\Longleftrightarrow\\
 & \Xi_{kl}=\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\times\tau_{ij}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\frac{E_{j}}{P_{j}^{-\theta}}\Longleftrightarrow\\
 & \Xi_{kl}=t_{kl}^{-\theta}\sum_{i\in\mathcal{N}}\tau_{ik}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\sum_{j\in\mathcal{N}}\tau_{lj}^{-\theta}\frac{E_{j}}{P_{j}^{-\theta}},\\
 & \Xi_{kl}=t_{kl}^{-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}
\end{aligned}
$$

where in the last line we used the definition of the consumer and producer market access terms. Furthermore, replacing market access terms,

$$
\begin{gathered}P_{i}=\frac{1}{\bar{W}}\bar{u}_{i}L_{i}^{\beta-1}Y_{i}\\
\Pi_{i}=\bar{A}_{i}L_{i}^{1+\alpha}Y_{i}^{-\frac{\theta+1}{\theta}}
\end{gathered}
$$

 we obtain,

$$
\begin{aligned}\Xi_{kl} & =t_{kl}^{-\theta}\times\left(\frac{1}{\bar{W}}\bar{u}_{k}L_{k}^{\beta-1}Y_{k}\right)^{-\theta}\times\left(\bar{A}_{l}L_{l}^{1+\alpha}Y_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & =t_{kl}^{-\theta}\left(\frac{\bar{L}^{-(\alpha+\beta)\theta}}{W^{-\theta}}\right)\bar{L}\bar{A}_{l}^{-\theta}\bar{u}_{k}^{-\theta}l_{k}^{-\theta(\beta-1)}l_{l}^{-\theta(1+\alpha)}y_{k}^{-\theta}y_{l}^{(1+\theta)}\\
 & =t_{kl}^{-\theta}\chi\bar{L}\bar{A}_{l}^{-\theta}\bar{u}_{k}^{-\theta}l_{k}^{-\theta(\beta-1)}l_{l}^{-\theta(1+\alpha)}y_{k}^{-\theta}y_{l}^{(1+\theta)}
\end{aligned}
$$

where in the last line we use the definition $\chi=\frac{\bar{L}^{(\alpha+\beta)\theta}}{W^{\theta}}$. We have,

$$
\Xi_{kl}=t_{kl}^{-\theta}\chi^{-1}\bar{L}\bar{A}_{l}^{-\theta}\bar{u}_{k}^{-\theta}l_{k}^{-\theta}l_{l}^{-\theta}y_{k}^{-\theta}y_{l}^{(1+\theta)}
$$

 which characterizes aggregate flows between neighboring nodes $k$ and $l$ in terms of the endogenous variables along the network.

<a id="ap_sec:traffic_mode"></a>

#### Traffic Flows on the Mode-Specific Networks

In the next step we now turn towards characterizing the probability of sourcing from location $j$ to location $i$ choosing neighboring node $k$ as the cost-minimizing routing choice and furthermore opting for mode $m$ between node $i$ and $k$. The nested choice implies that this choice probability is given by,

$$
\pi_{ijk,m}=\frac{\tilde{t}_{ik,m}^{-\eta}}{t_{ik}^{-\eta}}\frac{\left(t_{ik}\tau_{kj}\right)^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}
$$


which can be decomposed in the sourcing share, link choice probability conditional on sourcing choice, and the modal share conditional on both sourcing and link choice, i.e.

$$
\begin{aligned}
\pi_{ij,kl,m} & =\frac{\tilde{t}_{ik,m}^{-\eta}}{t_{ik}^{-\eta}}\frac{\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\sum_{k'\in\mathcal{F}(i)}\left(t_{ik'}\tau_{k'i}\right)^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}\\
 & =\pi_{ik}^{m}\times\pi_{ij}^{k}\times\pi_{ij}
\end{aligned}
$$


We can apply similar calculations as above to extend this for any link $kl$ when transporting goods from $i$ to $j$, i.e.

$$
\pi_{ij,kl,m}=\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}
$$


Given this choice probability we can characterize the mode-specific traffic between neighboring nodes $k$ and $l$, i.e.

$$
\begin{aligned}
\Xi_{kl,m} & =\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\pi_{ijk,m}E_{j}\Longleftrightarrow\\
 & =\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\pi_{ik}^{m}\times\pi_{ij}^{k}\times X_{ij}\\
 & =\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\times\tau_{ij}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\frac{E_{j}}{P_{j}^{-\theta}}\Longleftrightarrow\\
 & =\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\times t_{kl}^{-\theta}\sum_{i\in\mathcal{N}}\tau_{ik}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\sum_{j\in\mathcal{N}}\tau_{lj}^{-\theta}\frac{E_{j}}{P_{j}^{-\theta}},\\
 & =\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\times t_{kl}^{-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}\\
 & =\tilde{t}_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}
\end{aligned}
$$

 which gives us an expression for mode-specific traffic in terms of market access measures and the aggregate and mode specific iceberg transport cost along the edge. Note, that the nested formulation implies that mode-specific traffic is the conditional mode specific share of aggregate traffic, i.e. $\Xi_{kl,m}=\pi_{ik}^{m}\times\Xi_{kl}$.

<a id="ap_sec:traffic_terminal"></a>

#### Traffic Flows at Terminals

In the final step we characterize the traffic at mode-specific terminals that allow multimodal movements between nodes $kl$. To do so we start by characterizing the probability of sourcing from location $j$ to location $i$ choosing any neighboring node $k'\in\mathcal{F}\left(i\right)$, but crucially choosing an alternative non-primary mode of transport and therefore traversing through a terminal while routing. This choice probability can be characterized in the following way,

$$
\begin{aligned}
\pi_{ij,kk,m} & =\sum_{k\in\mathcal{F}\left(i\right)}\frac{\tilde{t}_{ik,m}^{-\eta}}{t_{ik}^{-\eta}}\frac{t_{ik}^{-\theta}\tau_{kj}^{-\theta}p_{j}^{-\theta}}{\sum_{j\in0}\sum_{k^{\prime}}t_{ik}\tau_{k_{j}j}p_{j}^{-\theta}}\\
 & =s_{ii}^{-\eta}\sum_{k\in\mathcal{F}\left(i\right)}\frac{\left(\tau_{ik}s_{kk,m}\right)^{-\eta}}{t_{ik}^{-\eta}}\frac{t_{ik}^{-\theta}\tau_{kj}^{-\theta}p_{j}^{-\theta}}{\sum_{j\in0}\sum_{k^{\prime}}t_{ik}\tau_{k_{j}j}p_{j}^{-\theta}}
\end{aligned}
$$


which can be decomposed into which can again be decomposed into sourcing shares, link choice shares conditional on sourcing choice, and mode choice conditional on link choice, i.e.

$$
\begin{aligned}
\pi_{ij,kk,m} & =\sum_{k\in\mathcal{F}\left(i\right)}\frac{s_{ii}^{-\eta}\left(\tau_{ik}s_{kk,m}\right)^{-\eta}}{t_{ik}^{-\eta}}\frac{\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\sum_{k'\in\mathcal{F}(i)}\left(t_{ik'}\tau_{k'i}\right)^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}\\
 & =\pi_{ij}\sum_{k\in\mathcal{F}\left(i\right)}\pi_{ik}^{m}\times\pi_{ij}^{k}
\end{aligned}
$$


We can apply similar calculations as above to extend this for any link $kl$ when transporting goods from $i$ to $j$, i.e.

$$
\begin{aligned}
\pi_{ij,kk,m} & =\sum_{l\in\mathcal{F}\left(k\right)}\frac{s_{kk}^{-\eta}\left(\tau_{kl}s_{ll,m}\right)^{-\eta}}{t_{kl}^{-\eta}}\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\frac{\tau_{ij}^{-\theta}p_{i}^{-\theta}}{\sum_{i\in\mathcal{N}}\tau_{ij}^{-\theta}p_{i}^{-\theta}}\\
 & =\pi_{ij}\sum_{l\in\mathcal{F}\left(k\right)}\pi_{kl}^{m}\times\pi_{ij}^{kl}
\end{aligned}
$$


Given this choice probability we can characterize the mode-specific traffic between neighboring nodes $k$ and $l$, i.e.

$$
\begin{aligned}
\Xi_{kk,m} & =\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\pi_{ij,kk,m}E_{j}\Longleftrightarrow\\
 & =\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\left(\sum_{l\in\mathcal{F}\left(k\right)}\pi_{kl}^{m}\times\pi_{ij}^{kl}\right)\times X_{ij}\\
 & =\sum_{l\in\mathcal{F}\left(k\right)}\frac{s_{kk}^{-\eta}\left(\tau_{kl}s_{ll,m}\right)^{-\eta}}{t_{kl}^{-\eta}}\sum_{i\in\mathcal{N}}\sum_{j\in\mathcal{N}}\frac{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}}{\tau_{ij}^{-\theta}}\times\tau_{ij}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\frac{E_{j}}{P_{j}^{-\theta}}\Longleftrightarrow\\
 & =\sum_{l\in\mathcal{F}\left(k\right)}\frac{s_{kk}^{-\eta}\left(\tau_{kl}s_{ll,m}\right)^{-\eta}}{t_{kl}^{-\eta}}\times t_{kl}^{-\theta}\sum_{i\in\mathcal{N}}\tau_{ik}^{-\theta}\frac{Y_{i}}{\Pi_{i}^{-\theta}}\sum_{j\in\mathcal{N}}\tau_{lj}^{-\theta}\frac{E_{j}}{P_{j}^{-\theta}},\\
 & =\sum_{l\in\mathcal{F}\left(k\right)}\frac{s_{kk}^{-\eta}\left(\tau_{kl}s_{ll,m}\right)^{-\eta}}{t_{kl}^{-\eta}}\times t_{kl}^{-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}\\
 & =s_{kk}^{-\eta}\times P_{k}^{-\theta}\times\sum_{l\in\mathcal{F}\left(k\right)}\left(\tau_{kl}s_{ll,m}\right)^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}
\end{aligned}
$$

 which gives us [Equation](#eq:traffic_terminals) in Section [3.5](#subsec:traffic).

#### Congestion on the Primary Transport Network

Incorporating congestion, for the primary mode of transport $(m=1)$, we have the following relationship as in the first part of in [Equation](#eq:primary_traffic_congestion) (Section [3.5](#subsec:traffic)),

$$
\begin{aligned}t_{kl,1} & =\bar{t}_{kl,1}\left[\Xi_{ij,1}\right]^{\lambda_{1}}\Longleftrightarrow\\
t_{kl,1} & =\bar{t}_{kl,1}\left[t_{kl,1}^{-\eta}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}\right]^{\lambda_{1}}\Longleftrightarrow\\
t_{kl,1} & =\bar{t}_{kl,1}\times t_{kl,1}^{-\eta\lambda_{1}}\times t_{kl}^{\lambda_{1}\left(\eta-\theta\right)}\times P_{k}^{-\theta\lambda_{1}}\times\Pi_{l}^{-\theta\lambda_{1}}\Longleftrightarrow\\
t_{kl,1}^{1+\eta\lambda_{1}} & =\bar{t}_{kl,1}\times t_{kl}^{\lambda_{1}\left(\eta-\theta\right)}\times P_{k}^{-\theta\lambda_{1}}\times\Pi_{l}^{-\theta\lambda_{1}}\Longleftrightarrow\\
t_{kl,1} & =\bar{t}_{kl,1}^{\frac{1}{1+\eta\lambda_{1}}}\times t_{kl}^{\frac{\lambda_{1}\left(\eta-\theta\right)}{1+\eta\lambda_{1}}}\times P_{k}^{\frac{-\theta\lambda_{1}}{1+\eta\lambda_{1}}}\times\Pi_{l}^{\frac{-\theta\lambda_{1}}{1+\eta\lambda_{1}}}
\end{aligned}
$$

 Substituting the equation above into to derive the expression for traffic flows as in the second part of in [Equation](#eq:primary_traffic_congestion) (Section [3.5](#subsec:traffic)),

$$
\begin{aligned}\Xi_{kl,1} & =\left(\bar{t}_{kl,1}^{\frac{1}{1+\theta\lambda_{1}}}\times t_{kl}^{\frac{\lambda_{1}(\eta-\theta)}{1+\eta\lambda_{1}}}\times P_{k}^{-\frac{\theta\lambda_{1}}{1+\theta\lambda_{1}}}\times\Pi_{l}^{-\frac{\theta\lambda_{1}}{1+\lambda_{1}}}\right)^{-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}\\
 & =\bar{t}_{kl,1}^{-\frac{\theta}{1+\theta\lambda_{1}}}\times t_{kl}^{\frac{-\theta\lambda_{1}(\eta-\theta)}{1+\eta\lambda_{1}}}\times P_{k}^{\frac{\theta\theta\lambda_{1}}{1+\theta\lambda_{1}}-\theta}\times\Pi_{l}^{\frac{\theta\lambda_{1}\theta}{1+\theta\lambda_{1}}-\theta}\\
 & =\bar{t}_{kl,1}^{-\frac{\theta}{1+\theta\lambda_{1}}}\times t_{kl}^{\frac{-\theta\lambda_{1}(\eta-\theta)}{\left.1+\eta\lambda_{1}\right)}}\times P_{k}^{-\frac{\theta}{1+\theta\lambda_{1}}}\times\Pi_{l}^{-\frac{\theta}{1+\theta\lambda_{1}}}
\end{aligned}
$$


#### Congestion at Intermodal Terminals

For any secondary mode of transportation ($m\neq 1$), we incorporate congestion at terminal stations that connect the primary and secondary networks. Let us characterize the transport cost net of congestion at any terminal, i.e.

$$
\begin{aligned}
& s_{k k, m}=\bar{s}_{k k, m}\left[\Xi_{k k, m}\right]^{\lambda_m} \\
& s_{k k, m}=\bar{s}_{k k, m}\left[s_{k k, m}^{-\eta} \times P_k^{-\theta} \times \sum_{l \in \mathcal{F}(k)}\left(\tau_{k l} s_{l l, m}\right)^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right]^{\lambda_m} \\
& s_{k k, m}=\bar{s}_{k k, m} \times s_{k k, m}^{-\eta \lambda_m} \times P_k^{-\theta \lambda_m} \times\left(\sum_{l \in \mathcal{F}(k)}\left(\tau_{k l} s_{l l, m}\right)^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right)^{\lambda_m} \\
& s_{k k, m}^{1+\eta \lambda_m}=\bar{s}_{k k, m} \times P_k^{-\theta \lambda_m} \times\left(\sum_{l \in \mathcal{F}(k)}\left(\tau_{k l} s_{l l, m}\right)^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right)^{\lambda_m} \\
& s_{k k, m}=\bar{s}_{k k, m}^{1+n \lambda_m} \times P_k^{\frac{-\theta \lambda_m}{1+\eta \lambda_m}} \times\left(\sum_{l \in \mathcal{F}(k)}\left(\tau_{k l} s_{l l, m}\right)^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right)^{\frac{\lambda_m}{1+\eta \lambda_m}} \\
& s_{k k, m}=\bar{s}_{k k, m}^{\frac{1}{1+\eta \lambda m}} \times P_k^{\frac{-\theta \lambda_m}{1+\eta \lambda_m}} \times\left(\sum_{l \in \mathcal{F}(k)}\left(\tau_{k l} s_{l l, m}\right)^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right)^{\frac{\lambda_m}{1+\eta \lambda_m}}
\end{aligned}
$$


Combining both the switching cost of access the non-primary transport network and the terminal cost of exiting it again, we obtain [Equation](#eq:switching_cost_endog) in Section [3.5](#subsec:traffic):

$$
\begin{aligned}
t_{k l, m} & =\bar{s}_{k k, m} \tau_{k l, m} \bar{s}_{l l, m}\left[\Xi_{k k, m}\right]^{\lambda_m}\left[\Xi_{l l, m}\right]^{\lambda_m} \\
& =\bar{s}_{k k, m} \tau_{k l, m} \bar{s}_{l l, m}\left[\sum_{l \in \mathcal{F}(k)} \Xi_{k l, m}\right]^{\lambda_m}\left[\sum_{k \in \mathcal{B}(l)} \Xi_{k l, m}\right]^{\lambda_m} \\
& =\bar{s}_{k k, m} \tau_{k l, m} \bar{s}_{l l, m}\left[P_k^{-\theta} \times \sum_{l \in \mathcal{F}(k)} \tilde{t}_{k l, m}^{-\eta} \times t_{k l}^{\eta-\theta} \times \Pi_l^{-\theta}\right]^{\lambda_m}\left[\Pi_l^{-\theta} \times \sum_{k \in \mathcal{B}(l)} \tilde{t}_{k l, m}^{-\eta} \times t_{k l}^{\eta-\theta} \times P_k^{-\theta}\right]^{\lambda_m} \\
& =\bar{s}_{k k, m} \tau_{k l, m} \bar{s}_{l l, m}\left[P_k^{-\theta} \times \Pi_{k, m}^{-\theta}\right]^{\lambda_m}\left[\Pi_l^{-\theta} \times P_{l, m}^{-\theta}\right]^{\lambda_m} \\
& =\bar{s}_{k k, m} \times \tau_{k l, m} \times \bar{s}_{l l, m} \times P_k^{-\theta \lambda_m} \times \Pi_l^{-\theta \lambda_m} \times P_{k, m}^{-\theta \lambda_m} \times \Pi_{l, m}^{-\theta \lambda_m}
\end{aligned}
$$

where $P_{l,m}\equiv\sum_{k\in\mathcal{B}\left(l\right)}t_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta}$ and $\Pi_{k,m}\equiv\sum_{l\in\mathcal{F}\left(k\right)}t_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}$.

<a id="app:traffic-adjustments"></a>

### Derivations for Section [3.6](#subsec:decomp_qual_channel_main): Traffic Substitution and Complementarity

This subsection develops the traffic-adjustment view used at the beginning of Section [3.6](#subsec:decomp_qual_channel_main). The aim is to show how a mode-specific change in transport cost on link $kl$ affects mode-specific traffic on that same link. To keep the mechanism transparent, the derivation abstracts here from congestion and focuses on the recursive route block with nested mode choice.

Start from

<a id="eq:traffic-block-app-v41"></a>

$$
\Xi_{kl,m}=\pi_{kl}^m\,\Xi_{kl},
\qquad
\pi_{kl}^m=\frac{t_{kl,m}^{-\eta}}{t_{kl}^{-\eta}},
\qquad
\Xi_{kl}=t_{kl}^{-\theta}P_k^{-\theta}\Pi_l^{-\theta},
$$

with

<a id="eq:traffic-share-app-v41"></a>

$$
t_{kl}=\Bigl(\sum_{n\in M(k,l)} t_{kl,n}^{-\eta}\Bigr)^{-1/\eta},
\qquad
\varpi_{kl,m}\coloneqq \frac{\Xi_{kl,m}}{\sum_n \Xi_{kl,n}}=\pi_{kl}^m.
$$

 Define the transport-propagation matrices

<a id="eq:Omega-traffic-app-v41"></a>

$$
\Omega^{t,P}=\Bigl[\frac{t_{kl}^{-\theta}P_k^{-\theta}}{P_l^{-\theta}}\Bigr]_{kl},
\qquad
\Omega^{t,\Pi}=\Bigl[\frac{t_{kl}^{-\theta}\Pi_l^{-\theta}}{\Pi_k^{-\theta}}\Bigr]_{kl},
$$

and their Leontief-type transforms

<a id="eq:Omega-tilde-app-v41"></a>

$$
\widetilde\Omega^{t,P}\coloneqq (I-\Omega^{t,P})^{-1}\Omega^{t,P},
\qquad
\widetilde\Omega^{t,\Pi}\coloneqq (I-\Omega^{t,\Pi})^{-1}\Omega^{t,\Pi}.
$$


<a id="prop:traffic-subcomp"></a> For an alternative mode $m\neq m'$ on link $kl$,

<a id="eq:traffic-subcomp-app-v41"></a>

$$
\frac{d\ln \Xi_{kl,m}}{d\ln t_{kl,m'}}
=
\epsilon_{t_{kl,m'}}^{\pi_{kl}^m}
+
\epsilon_{t_{kl}}^{\Xi_{kl}}\epsilon_{t_{kl,m'}}^{t_{kl}}
\approx
\Bigl[
\eta-\theta\bigl(1+[\widetilde\Omega^{t,P}]_{kl}+[\widetilde\Omega^{t,\Pi}]_{kl}\bigr)
\Bigr]\varpi_{kl,m'}.
$$

 Moreover,

<a id="eq:traffic-share-elasticities-app-v41"></a>

$$
\epsilon_{t_{kl,m}}^{\pi_{kl}^m}=-\eta(1-\varpi_{kl,m}),
\qquad
\epsilon_{t_{kl,m'}}^{\pi_{kl}^m}=\eta\varpi_{kl,m'}\quad (m\neq m'),
\qquad
\epsilon_{t_{kl,m'}}^{t_{kl}}=\varpi_{kl,m'}.
$$


*Proof.* Totally differentiating [Equation](#eq:traffic-block-app-v41) gives

$$
\frac{d\ln \Xi_{kl,m}}{d\ln t_{kl,m'}}
=
\epsilon_{t_{kl,m'}}^{\pi_{kl}^m}
+
\epsilon_{t_{kl}}^{\Xi_{kl}}\epsilon_{t_{kl,m'}}^{t_{kl}}.
$$

 Differentiating the conditional mode share and the aggregate link cost index yields [Equation](#eq:traffic-share-elasticities-app-v41). Differentiating aggregate traffic gives

<a id="eq:traffic-aggregate-elasticity-app-v41"></a>

$$
\epsilon_{t_{kl}}^{\Xi_{kl}}
=
-\theta
+
\epsilon_{t_{kl}}^{P_k^{-\theta}}
+
\epsilon_{t_{kl}}^{\Pi_l^{-\theta}}.
$$

 Abstracting from changes in local expenditure and sales shifters, the recursive market-access system implies the approximations

<a id="eq:traffic-market-access-elasticities-app-v41"></a>

$$
\epsilon_{t_{kl}}^{P_k^{-\theta}}\approx -\theta[\widetilde\Omega^{t,P}]_{kl},
\qquad
\epsilon_{t_{kl}}^{\Pi_l^{-\theta}}\approx -\theta[\widetilde\Omega^{t,\Pi}]_{kl}.
$$

 Substituting [Equation](#eq:traffic-share-elasticities-app-v41) and [Equation](#eq:traffic-market-access-elasticities-app-v41) into [Equation](#eq:traffic-aggregate-elasticity-app-v41) yields [Equation](#eq:traffic-subcomp-app-v41). ◻

Proposition [Proposition](#prop:traffic-subcomp) is the traffic counterpart of the welfare wedges used in the main text. The first term is direct substitution across modes on the same link. The second is indirect complementarity: changing the cost of one mode changes the aggregate cost of the link, which changes total traffic and market access across the network. Central links therefore generate stronger complementarity effects because improving them changes more than the local modal split.

<a id="Subsec:decomp_qual_channel"></a>

### Derivations for Section [3.6](#subsec:decomp_qual_channel_main): Welfare Elasticities, Wedges, and Signs

<a id="app:ladder-proof"></a>

The previous subsection described how a mode-specific cost change redistributes traffic through direct substitution and indirect complementarity. We now turn to the welfare-elasticity view and ask how a lower mode-specific cost on link $kl$ translates into welfare under different model variants. To do so, we develop a set of decompositional results that build on the inverse function theorem applied to this class of models as previously developed in ([Allen et al. 2025](#ref-allen2025evaluating)). The qualitative connection is the same as in the main text: the welfare formulas value the same route and mode reallocation, congestion across links and at terminals, and market-access propagation emphasized in the traffic block. For each model variant $c$, let the transformed equilibrium satisfy $G_c(\zeta)=0$ and write $J_c=\partial G_c/\partial \zeta$ for the Jacobian of that system. Applying the inverse function theorem gives the welfare effect of a marginal improvement in mode $m$ on link $kl$ as

<a id="eq:ift-welfare-appendix-v36"></a>

$$
E_{kl,m}^c=-g^\top J_c^{-1}b_{kl,m}.
$$

 The purpose of this appendix is to turn [Equation](#eq:ift-welfare-appendix-v36) into the closed-form objects discussed in Section [3.6](#subsec:decomp_qual_channel_main). Proposition [Proposition](#prop:congestion-wedges) fully characterizes the road and terminal wedges in closed form as the load placed by a mode-specific link improvement on congested road or terminal states times the welfare value of relaxing those states. Proposition [Proposition](#prop:reallocation-wedges), the main result for the reallocation side, fully characterizes the mode and route wedges in closed form as local reallocation, induced congestion, and broader equilibrium feedback. The final two subsections record the qualitative sign results used in the main text and the compact transformed-equilibrium ingredients behind the formulas.

<a id="app:normalization"></a>

#### Sparse Jacobian representation and exact ladder.

<a id="app:direct-gaps"></a>

Throughout the transport-side comparisons, the same initial mode-specific link improvement is evaluated at the observed transport assignment, so the welfare row and shock map are held fixed across model variants. For each model variant $c$, let the transformed equilibrium satisfy $G_c(\zeta)=0$ and write $J_c=\partial G_c/\partial \zeta$ for the Jacobian of that system. The inverse function theorem gives the welfare effect of a marginal improvement in mode $m$ on link $kl$ as



$$
E_{kl,m}^c=-g^\top J_c^{-1}b_{kl,m}.
$$

 Here $g^\top$ is the welfare row that maps changes in the transformed equilibrium variables into changes in $\ln W$, and $b_{kl,m}$ is the perturbation induced in the transformed equilibrium equations by the marginal reduction in the primitive cost of mode $m$ on link $kl$. Writing $\rho\coloneqq 1+\alpha+\beta$, let $B_t$ denote the common-baseline version of the cost-loading operator that maps composite-link cost changes into the transformed equilibrium equations, and define the composite-link shock

<a id="eq:omega-s-M-app-v36"></a>

$$
b_{kl}\coloneqq B_t\mathbf e_{kl},
 \qquad
 s_{kl}\coloneqq b_{kl}/\Xi_{kl},
 \qquad
 \omega^\top\coloneqq -g^\top/\rho,
 \qquad
 q_c^\top\coloneqq \omega^\top J_c^{-1},
 \qquad
 r_{kl}^c\coloneqq J_c^{-1}s_{kl}.
$$

 Here $\mathbf e_{kl}$ is the basis vector for a marginal reduction in the composite cost of link $kl$. The row vector $q_c^\top$ is the welfare adjoint under model variant $c$, and the column vector $r_{kl}^c$ is the equilibrium response to the normalized composite-link shock $s_{kl}$. A primitive mode-specific improvement enters through the nested mode aggregator. Define

<a id="eq:mode-specific-shock-map-v50"></a>

$$
\vartheta_{kl,m}\coloneqq \left.\frac{\partial \ln t}{\partial \ln \bar t_{kl,m}}\right|_{\zeta},
 \qquad
 b_{kl,m}\coloneqq B_t \vartheta_{kl,m},
 \qquad
 s_{kl,m}\coloneqq b_{kl,m}/\Xi_{kl,m}.
$$

 Under the nested CES link-cost index,

<a id="eq:mode-shock-collapse-v50"></a>

$$
\vartheta_{kl,m}=\pi_{kl}^m\mathbf e_{kl},
 \qquad
 b_{kl,m}=\pi_{kl}^m b_{kl},
 \qquad
 s_{kl,m}=s_{kl},
$$

where the last equality uses $\Xi_{kl,m}=\pi_{kl}^m\Xi_{kl}$.

<a id="prop:normalized-object"></a> For each model variant $c$,

<a id="eq:multiplier-equality-mode-v50"></a>

$$
m_{kl}^c=\omega^\top J_c^{-1}s_{kl}=\omega^\top J_c^{-1}s_{kl,m}=q_c^\top s_{kl}=\omega^\top r_{kl}^c,
$$

and the mode-specific welfare elasticity satisfies

<a id="eq:ess-app-v36"></a>

$$
E_{kl,m}^c=\rho\,\Xi_{kl,m}\,m_{kl}^c
 = \pi_{kl}^m\rho\,\Xi_{kl}\,m_{kl}^c.
$$

 In particular, the normalized multiplier is link-specific in the reduced equilibrium representation, while the mode label enters through the exposure term $\Xi_{kl,m}$.

*Proof.* Substitute $b_{kl,m}=\Xi_{kl,m} s_{kl,m}$ into [Equation](#eq:ift-welfare-appendix-v36), use [Equation](#eq:mode-shock-collapse-v50), and divide by $\rho$. ◻

To keep the appendix aligned with Section [3.6](#subsec:decomp_qual_channel_main), we organize the welfare formulas directly around the Jacobian blocks that generate the ladder. Define

<a id="eq:jacobian-block-split-app-v70"></a>

$$
J_c = R_c+\Delta_{\mathrm{road},c}+\Delta_{\mathrm{term},c}+G_c,
 \qquad
 G_c\coloneqq u_cv_c^\top,
$$

where $R_c$ is the grouped sparse reallocation block of the Jacobian, collecting the local own-share and sparse forward/backward propagation terms; $\Delta_{\mathrm{road},c}$ and $\Delta_{\mathrm{term},c}$ are the road- and terminal-congestion feedback blocks; and $G_c$ is the low-rank aggregate block, with $u_c$ and $v_c$ the vectors entering the aggregate component of the Jacobian. Appendix [8.8.5](#app:model-transformed) derives all four blocks explicitly.

A useful way to read the ladder is as an *adjoint--block--response* decomposition. For any comparison $(A,B)$, the response vector $r_{kl}^B=J_B^{-1}s_{kl}$ records the footprint of the link improvement on the equilibrium system under model variant $B$, the Jacobian difference $J_B-J_A$ records which propagation coefficients change when a given mechanism is turned on or off, and the adjoint vector $q_A^\top=\omega^\top J_A^{-1}$ weights those affected equations by their welfare shadow value under model variant $A$. Under the common-baseline convention, all of these objects are evaluated around the same observed transport assignment. The ladder therefore does not compare different baselines; it is a local comparative-static anatomy of the same baseline equilibrium, decomposed by the Jacobian blocks that govern sparse reallocation, congestion feedback, and aggregate market-access adjustment.

Economically, each block can be read as a distinct adjustment margin that is switched on or off around the same baseline allocation. The sparse reallocation block $R_c$ is the local choice-set margin: it governs whether, after the link improves, traffic can exploit additional route substitutions, additional mode substitutions, and additional feeder or sourcing continuations around that corridor. The road and terminal blocks are the scarcity margins: they determine how much of that extra local adjustment is taxed away once the induced traffic is allowed to congest links and terminals. The low-rank block $G_c$ is the broad market-access margin: it determines whether the local transport gain is amplified or diluted once activity and demand are allowed to rebalance through the common equilibrium channels. When two model variants are close in Jacobian space, so that $J_B-J_A$ is small, we may replace $r_{kl}^B$ by $r_{kl}^A$ and obtain the first-order reading

<a id="eq:first-order-jacobian-reading-app-v71"></a>

$$
d_{kl}(A,B)\approx q_A^\top (J_B-J_A)r_{kl}^A.
$$

 This approximation says that a wedge is the welfare value of passing the baseline footprint of the improved link through the additional propagation coefficients associated with the mechanism being turned on or off.

<a id="prop:jacobian-ladder"></a> For any two model variants $A,B$,

<a id="eq:gap-jacobian-master-app-v70"></a>

$$
d_{kl}(A,B)\coloneqq m_{kl}^A-m_{kl}^B = q_A^\top (J_B-J_A)r_{kl}^B.
$$

 Using [Equation](#eq:jacobian-block-split-app-v70), the gap admits the block decomposition

<a id="eq:gap-by-blocks-app-v70"></a>

$$
d_{kl}(A,B)
 =
 d_{kl}^{\mathrm{alloc}}(A,B)
 +d_{kl}^{\mathrm{road}}(A,B)
 +d_{kl}^{\mathrm{term}}(A,B)
 +d_{kl}^{\mathrm{glob}}(A,B),
$$

where

<a id="eq:alloc-block-def-app-v70"></a>
<a id="eq:road-block-def-app-v70"></a>
<a id="eq:term-block-def-app-v70"></a>
<a id="eq:glob-block-def-app-v70"></a>

$$
\begin{aligned}
 d_{kl}^{\mathrm{alloc}}(A,B)&\coloneqq q_A^\top (R_B-R_A)r_{kl}^B,
 \\
 d_{kl}^{\mathrm{road}}(A,B)&\coloneqq q_A^\top (\Delta_{\mathrm{road},B}-\Delta_{\mathrm{road},A})r_{kl}^B,
 \\
 d_{kl}^{\mathrm{term}}(A,B)&\coloneqq q_A^\top (\Delta_{\mathrm{term},B}-\Delta_{\mathrm{term},A})r_{kl}^B,
 \\
 d_{kl}^{\mathrm{glob}}(A,B)&\coloneqq q_A^\top (G_B-G_A)r_{kl}^B.

\end{aligned}
$$

 Equivalently, letting

<a id="eq:congest-block-def-app-v70"></a>

$$
d_{kl}^{\mathrm{cong}}(A,B)\coloneqq d_{kl}^{\mathrm{road}}(A,B)+d_{kl}^{\mathrm{term}}(A,B),
$$

 we obtain the coarse decomposition used in Section [3.6](#subsec:decomp_qual_channel_main):

<a id="eq:unified-transport-app-v36"></a>

$$
d_{kl}(A,B)=d_{kl}^{\mathrm{alloc}}(A,B)+d_{kl}^{\mathrm{cong}}(A,B)+d_{kl}^{\mathrm{glob}}(A,B).
$$

 In particular,

<a id="eq:mode-route-gap-defs-v36"></a>

$$
d_{kl}^{\mathrm{road}}=d_{kl}(\mathrm{NC},\mathrm{NT}),
 \qquad
 d_{kl}^{\mathrm{term}}=d_{kl}(\mathrm{NT},F),
 \qquad
 d_{kl}^{\mathrm{mode}}=d_{kl}(F,\mathrm{RO}),
 \qquad
 d_{kl}^{\mathrm{route}}=d_{kl}(F,\mathrm{FR}).
$$

 Hence

<a id="eq:exact-ladder-normalized-app-v36"></a>

$$
m_{kl}^F
 =
 m_{kl}^{\mathrm{NC}}-d_{kl}^{\mathrm{road}}-d_{kl}^{\mathrm{term}}
 =
 m_{kl}^{\mathrm{RO}}+d_{kl}^{\mathrm{mode}}
 =
 m_{kl}^{\mathrm{FR}}+d_{kl}^{\mathrm{route}}.
$$

 The Hulten comparison satisfies

<a id="eq:hulten-h-app-v36"></a>

$$
h_{kl}=\rho\bigl(m_{kl}^{H}-m_{kl}^{F}\bigr)=(1-\rho)+\rho(1-m_{kl}^F),
$$


*Proof.* The gap identity is

$$
m_{kl}^A-m_{kl}^B
 =
 \omega^\top\bigl(J_A^{-1}-J_B^{-1}\bigr)s_{kl}
 =
 q_A^\top (J_B-J_A)r_{kl}^B.
$$

 Substituting [Equation](#eq:jacobian-block-split-app-v70) yields [Equation](#eq:gap-by-blocks-app-v70); grouping the two congestion blocks gives [Equation](#eq:unified-transport-app-v36). The named wedges are the corresponding special cases in [Equation](#eq:mode-route-gap-defs-v36), and [Equation](#eq:hulten-h-app-v36) follows from the efficient-equilibrium benchmark $E_{kl,m}^{H}=\Xi_{kl,m}$, equivalently $m_{kl}^{H}=1/\rho$, together with Proposition [Proposition](#prop:normalized-object). ◻

Proposition [Proposition](#prop:jacobian-ladder) is the main organizing object for the rest of the appendix. The pure congestion wedges isolate single congestion blocks. The mode and route wedges compare the full model to restricted variants that alter the sparse reallocation block $R_c$, the induced congestion blocks, and the low-rank aggregate block. This is exactly the qualitative anatomy used in Section [3.6](#subsec:decomp_qual_channel_main).

<a id="app:additive-updates"></a>

#### Congestion wedges in closed form.

The road and terminal wedges are exact additive updates because moving from $\mathrm{NC}$ to $\mathrm{NT}$ restores only the road-scarcity block, while moving from $\mathrm{NT}$ to $F$ restores only the terminal-scarcity block. Recall that these congestion blocks admit the factorization

$$
\Delta_{\mathrm{road},c}=B_{t,c}K_{\mathrm{road},c}Q_{\mathrm{road},c},
\qquad
\Delta_{\mathrm{term},c}=B_{t,c}K_{\mathrm{term},c}Q_{\mathrm{term},c},
$$

where $B_{t,c}\coloneqq \partial G_c/\partial \ln t^c$ loads composite transport-cost changes into the transformed equilibrium equations, $Q_{\mathrm{road},c}\coloneqq \partial\ln \Xi^c/\partial \zeta^\top$ and $Q_{\mathrm{term},c}\coloneqq \partial\ln T^c/\partial \zeta^\top$ map equilibrium responses into road-congestion states $\Xi^c$ and terminal-congestion states $T^c$, and $K_{\mathrm{road},c}$ and $K_{\mathrm{term},c}$ map those congestion-state changes back into link-cost changes. In particular,

<a id="eq:congestion-variant-updates-v36"></a>

$$
J_{\mathrm{NT}}-J_{\mathrm{NC}}=\Delta_{\mathrm{road},\mathrm{NT}},
 \qquad
 J_F-J_{\mathrm{NT}}=\Delta_{\mathrm{term},F}.
$$


<a id="prop:congestion-wedges"></a> Define

<a id="eq:load-scarcity-objects-v36"></a>

$$
\begin{aligned}
 v_{\mathrm{road}}^{\mathrm{NC}:\mathrm{NT}\top}&\coloneqq q_{\mathrm{NC}}^\top B_{t,\mathrm{NT}}K_{\mathrm{road},\mathrm{NT}}, & \ell_{kl,\mathrm{road}}^{\mathrm{NT}}&\coloneqq Q_{\mathrm{road},\mathrm{NT}}r_{kl}^{\mathrm{NT}}, \nonumber\\
 v_{\mathrm{term}}^{\mathrm{NT}:F\top}&\coloneqq q_{\mathrm{NT}}^\top B_{t,F}K_{\mathrm{term},F}, & \ell_{kl,\mathrm{term}}^{F}&\coloneqq Q_{\mathrm{term},F}r_{kl}^{F}.

\end{aligned}
$$

 Then

<a id="eq:load-scarcity-rep-v36"></a>

$$
d_{kl}^{\mathrm{road}}
 =
 q_{\mathrm{NC}}^\top \Delta_{\mathrm{road},\mathrm{NT}}r_{kl}^{\mathrm{NT}}
 =
 v_{\mathrm{road}}^{\mathrm{NC}:\mathrm{NT}\top}\ell_{kl,\mathrm{road}}^{\mathrm{NT}},
 \qquad
 d_{kl}^{\mathrm{term}}
 =
 q_{\mathrm{NT}}^\top \Delta_{\mathrm{term},F}r_{kl}^{F}
 =
 v_{\mathrm{term}}^{\mathrm{NT}:F\top}\ell_{kl,\mathrm{term}}^{F}.
$$

 By construction,

<a id="eq:scar-split-app-v36"></a>

$$
d_{kl}^{\mathrm{scar}}=d_{kl}^{\mathrm{road}}+d_{kl}^{\mathrm{term}}.
$$


*Proof.* Specialize Proposition [Proposition](#prop:jacobian-ladder) to the two updates in [Equation](#eq:congestion-variant-updates-v36) and substitute the factorization in [Equation](#eq:Delta-factorization-compact-v38). ◻

Proposition [Proposition](#prop:congestion-wedges) shows that the pure congestion wedges are the interaction between two objects: the load that the mode-specific link improvement places on congested road or terminal states, and the welfare value of relaxing those states. This is the formal counterpart of the congestion-wedge interpretation in Section [3.6](#subsec:decomp_qual_channel_main).

<a id="app:mixed-updates"></a>

#### Reallocation wedges in closed form.

The mode and route wedges compare the full model to restricted variants that suppress either non-road modal diversion or endogenous rerouting. Relative to the full model, these comparisons change the sparse reallocation block $R_c$, the induced congestion blocks, and the low-rank aggregate block. Concretely, $R_A-R_F$ records which sparse local reallocation coefficients are missing in the restricted variant $A\in\{\mathrm{RO},\mathrm{FR}\}$, $(\Delta_{\mathrm{road},A}-\Delta_{\mathrm{road},F})+(\Delta_{\mathrm{term},A}-\Delta_{\mathrm{term},F})$ records the associated change in scarcity feedback, and $G_A-G_F$ records the corresponding change in the low-rank aggregate feedback block.

<a id="prop:reallocation-wedges"></a> For $A\in\{\mathrm{RO},\mathrm{FR}\}$, define

<a id="eq:alloc-piece-app-v70"></a>
<a id="eq:congest-piece-app-v70"></a>
<a id="eq:glob-piece-app-v70"></a>

$$
\begin{aligned}
 d_{kl}^{\mathrm{alloc}}(A)&\coloneqq d_{kl}^{\mathrm{alloc}}(F,A)=q_F^\top(R_A-R_F)r_{kl}^{A},
 \\
 d_{kl}^{\mathrm{cong}}(A)&\coloneqq d_{kl}^{\mathrm{cong}}(F,A)
 =q_F^\top\Bigl[(\Delta_{\mathrm{road},A}-\Delta_{\mathrm{road},F})+(\Delta_{\mathrm{term},A}-\Delta_{\mathrm{term},F})\Bigr]r_{kl}^{A},
 \\
 d_{kl}^{\mathrm{glob}}(A)&\coloneqq d_{kl}^{\mathrm{glob}}(F,A)=q_F^\top(G_A-G_F)r_{kl}^{A}.

\end{aligned}
$$

 Then

<a id="eq:realloc-threeway-app-v70"></a>

$$
d_{kl}(F,A)
 =
 d_{kl}^{\mathrm{alloc}}(A)
 +
 d_{kl}^{\mathrm{cong}}(A)
 +
 d_{kl}^{\mathrm{glob}}(A).
$$

 In particular,

<a id="eq:mode-route-piece-defs-app-v70"></a>

$$
d_{kl}^{\mathrm{mode}}=d_{kl}(F,\mathrm{RO}),
 \qquad
 d_{kl}^{\mathrm{route}}=d_{kl}(F,\mathrm{FR}).
$$

 If

<a id="eq:mode-route-piece-defs-app-v36"></a>

$$
\begin{aligned}
 d_{kl,\mathrm{alloc}}^{\mathrm{mode}}&\coloneqq d_{kl}^{\mathrm{alloc}}(\mathrm{RO}), &
 d_{kl,\mathrm{cong}}^{\mathrm{mode}}&\coloneqq d_{kl}^{\mathrm{cong}}(\mathrm{RO}), &
 d_{kl,\mathrm{glob}}^{\mathrm{mode}}&\coloneqq d_{kl}^{\mathrm{glob}}(\mathrm{RO}), \nonumber\\
 d_{kl,\mathrm{alloc}}^{\mathrm{route}}&\coloneqq d_{kl}^{\mathrm{alloc}}(\mathrm{FR}), &
 d_{kl,\mathrm{cong}}^{\mathrm{route}}&\coloneqq d_{kl}^{\mathrm{cong}}(\mathrm{FR}), &
 d_{kl,\mathrm{glob}}^{\mathrm{route}}&\coloneqq d_{kl}^{\mathrm{glob}}(\mathrm{FR}),

\end{aligned}
$$

 then

<a id="eq:mode-route-piece-split-app-v36"></a>

$$
d_{kl}^{\mathrm{mode}}
 =
 d_{kl,\mathrm{alloc}}^{\mathrm{mode}}+d_{kl,\mathrm{cong}}^{\mathrm{mode}}+d_{kl,\mathrm{glob}}^{\mathrm{mode}},
 \qquad
 d_{kl}^{\mathrm{route}}
 =
 d_{kl,\mathrm{alloc}}^{\mathrm{route}}+d_{kl,\mathrm{cong}}^{\mathrm{route}}+d_{kl,\mathrm{glob}}^{\mathrm{route}}.
$$


*Proof.* Equation [Equation](#eq:realloc-threeway-app-v70) is the specialization of [Equation](#eq:unified-transport-app-v36) to $(A,B)=(F,A)$. ◻

Proposition [Proposition](#prop:reallocation-wedges) matches the qualitative language in Section [3.6](#subsec:decomp_qual_channel_main). The term $d_{kl}^{\mathrm{alloc}}(A)$ is the exact welfare contribution of replacing the restricted model's sparse reallocation block by the full-model block. Economically, this is the value of giving the economy a richer locally relevant choice set around the improved link: additional route substitutions, additional mode substitutions, and additional feeder or sourcing continuations. If $d_{kl}^{\mathrm{alloc}}(A)>0$, those extra options are complements to the improved corridor, because restoring them makes the link more useful within the network. If $d_{kl}^{\mathrm{alloc}}(A)<0$, the extra options mainly act as substitutes or bypasses, because restoring them makes the improved link easier to avoid.

The term $d_{kl}^{\mathrm{cong}}(A)$ is the scarcity penalty on that extra flexibility. Once those additional local continuations are available, the network may exploit the improved link more aggressively, but the resulting traffic can spill onto congested roads and congested terminals. A positive induced-congestion term means that restoring the missing flexibility also restores the scarcity feedback that absorbs part of the gain. A negative induced-congestion term would mean that the extra flexibility helps the network steer traffic away from bottlenecks rather than into them.

The term $d_{kl}^{\mathrm{glob}}(A)$ records broader equilibrium feedback through the low-rank aggregate block. This is the system-wide rebalancing margin: once the local transport improvement changes access, activity and demand can move through a small number of common market-access channels. A positive aggregate term means that this broader rebalancing amplifies the local gain; a negative aggregate term means that it dilutes or offsets it.

A useful first-order reading is obtained by replacing $r_{kl}^{A}$ by $r_{kl}^{F}$. Then the comparison to a restricted variant can be read as taking the baseline full-model propagation of the link improvement and passing it through the Jacobian blocks that are shut down in that restricted model, weighted by the welfare shadow values in the full model. In this first-order sense, the ladder asks whether the marginal incidence of the improved link becomes more valuable when the economy is allowed to use more routes and modes, or whether those extra options mainly interact with congestion and broader equilibrium feedback to reduce the pass-through to welfare.

<a id="app:sign-bound"></a>

#### Qualitative sign results.

<a id="app:optional-signs"></a>

The exact formulas above do not require sign restrictions. The next result records the one-sided sign statements that support the economic interpretation in Section [3.6](#subsec:decomp_qual_channel_main): the pure congestion wedges are positive under one-sided propagation conditions, the induced-congestion piece is positive when reallocation relieves scarcity in the right places, the broader-feedback term is bounded but not sign-definite, and a positive full reallocation wedge requires local gains to dominate that broader feedback.

<a id="cor:sign-bounds"></a> Assume sign-aligned propagation on the active support: whenever the kernels below are entrywise nonnegative, the relevant adjoint and response vectors lie in the same closed orthant when paired with them.

1.  If $\Delta_{\mathrm{road},\mathrm{NT}}\ge 0$ and $\Delta_{\mathrm{term},F}\ge 0$ entrywise on the active support, then

<a id="eq:positive-congestion-wedges-v36"></a>

$$
d_{kl}^{\mathrm{road}}\ge 0,
     \qquad
     d_{kl}^{\mathrm{term}}\ge 0.
$$


2.  Fix $A\in\{\mathrm{RO},\mathrm{FR}\}$. If

<a id="eq:positive-induced-congestion-condition-v70"></a>

$$
(\Delta_{\mathrm{road},A}-\Delta_{\mathrm{road},F})+(\Delta_{\mathrm{term},A}-\Delta_{\mathrm{term},F})\ge 0
$$

 entrywise on the active support, then

<a id="eq:positive-induced-congestion-v36"></a>

$$
d_{kl}^{\mathrm{cong}}(A)\ge 0.
$$


3.  The broader-feedback term has no universal sign. More generally,

<a id="eq:global-bound-v70"></a>

$$
\bigl|d_{kl}^{\mathrm{glob}}(A)\bigr|
     \le
     \|q_F\|\,\|G_A-G_F\|\,\|r_{kl}^{A}\|.
$$

 Because $G_A-G_F$ has rank at most two, this term is low-dimensional even when its sign is ambiguous.

4.  If

<a id="eq:dominance-criterion-v36"></a>

$$
d_{kl}^{\mathrm{alloc}}(A)+d_{kl}^{\mathrm{cong}}(A)>\bigl|d_{kl}^{\mathrm{glob}}(A)\bigr|,
$$

 then

<a id="eq:dominance-conclusion-v36"></a>

$$
d_{kl}(F,A)>0.
$$


*Proof.* Items 1 and 2 follow directly from Proposition [Proposition](#prop:congestion-wedges) and Proposition [Proposition](#prop:reallocation-wedges) under sign-aligned propagation. Item 3 is the standard operator-norm bound applied to [Equation](#eq:glob-piece-app-v70). Item 4 is immediate from [Equation](#eq:realloc-threeway-app-v70). ◻

These sign results make precise the main-text interpretation. Congestion wedges are positive when allowing congestion across links and at terminals to respond blocks exactly the margins through which a mode-specific link improvement would otherwise raise traffic and welfare. For the reallocation wedges, the induced-congestion piece is positive when local reorganization relieves congestion on links or terminals that matter a lot for the network, while the broader-feedback term may either reinforce or dilute the local gain. A positive full reallocation wedge therefore requires local reallocation gains and congestion relief to dominate that broader equilibrium feedback.

<a id="app:model-transformed"></a>

#### Deriving the sparse Jacobian representation.

For completeness, this subsection derives the transformed equilibrium system and sparse Jacobian decomposition used in Propositions [Proposition](#prop:normalized-object)--[Proposition](#prop:reallocation-wedges). For any model variant that preserves the recursive spatial structure, equilibrium can be written as

<a id="eq:bal1-app-v36"></a>
<a id="eq:bal2-app-v36"></a>

$$
\begin{aligned}
 A_i^{1-\sigma}w_i^{\sigma}L_i
 &=
 W^{1-\sigma}u_i^{\sigma-1}w_i^{\sigma}L_i
 +
 \sum_{k\in N(i)}t_{ik}^{1-\sigma}A_k^{1-\sigma}w_k^{\sigma}L_k,

\\
 w_i^{1-\sigma}u_i^{1-\sigma}
 &=
 W^{1-\sigma}A_i^{\sigma-1}w_i^{1-\sigma}
 +
 \sum_{k\in N(i)}t_{ki}^{1-\sigma}w_k^{1-\sigma}u_k^{1-\sigma},

\end{aligned}
$$

where $N(i)$ denotes the set of locations directly connected to location $i$. We take aggregate population $\bar L\coloneqq \sum_i L_i$ as fixed. With

<a id="eq:externalities-app-v36"></a>

$$
A_i=L_i^{\alpha},
 \qquad
 u_i=L_i^{\beta},
 \qquad
 \rho\coloneqq 1+\alpha+\beta.
$$

 Define the transformed variables

<a id="eq:xy-def-app-v36"></a>

$$
\varphi\coloneqq 1+\beta(\sigma-1)+\alpha\sigma,
 \qquad
 x_i\coloneqq \bigl(W^{-1/\rho}L_i\bigr)^{1+\beta(\sigma-1)}w_i^{\sigma},
 \qquad
 y_i\coloneqq \bigl(W^{-1/\rho}L_i\bigr)^{\alpha(\sigma-1)}w_i^{1-\sigma}.
$$

 If $\varphi\neq 0$, this map is invertible with

<a id="eq:xy-inv-app-v36"></a>

$$
w_i=x_i^{\alpha/\varphi}y_i^{-\frac{1+\beta(\sigma-1)}{(\sigma-1)\varphi}},
 \qquad
 L_i=W^{1/\rho}x_i^{1/\varphi}y_i^{\sigma/((\sigma-1)\varphi)}.
$$

 Write

<a id="eq:abge-app-v36"></a>

$$
a\coloneqq \frac{1+\alpha}{\varphi},
 \qquad
 b\coloneqq \frac{\sigma(\alpha+\beta)}{\varphi},
 \qquad
 \gamma\coloneqq \frac{(\alpha+\beta)(\sigma-1)}{\varphi},
 \qquad
 \varepsilon\coloneqq 1-b,
$$


<a id="eq:Z-app-v36"></a>

$$
z_i\coloneqq x_i^{1/\varphi}y_i^{\sigma/((\sigma-1)\varphi)},
 \qquad
 \Omega\coloneqq \Bigl(\frac{1}{\bar L}\sum_{n} z_n\Bigr)^{\sigma-1},
$$


<a id="eq:Rxy-app-v36"></a>

$$
R_i^x\coloneqq \Omega x_i+\sum_{k\in N(i)}t_{ik}^{1-\sigma}x_k^a y_k^{-b},
 \qquad
 R_i^y\coloneqq \Omega y_i+\sum_{k\in N(i)}t_{ki}^{1-\sigma}x_k^{-\gamma}y_k^{\varepsilon}.
$$

 Then equilibrium is $G(\zeta)=0$, with

<a id="eq:G1-app-v36"></a>
<a id="eq:G2-app-v36"></a>
<a id="eq:G2N-app-v36"></a>

$$
\begin{aligned}
 G_{1i}&\coloneqq \ln R_i^x-a\ln x_i+b\ln y_i=0,
 && i=1,\dots,N, \\
 G_{2i}&\coloneqq \ln R_i^y+\gamma\ln x_i-\varepsilon\ln y_i=0,
 && i=1,\dots,N-1, \\
 G_{2N}&\coloneqq \frac{\alpha}{\varphi}\ln x_N-\frac{1+\beta(\sigma-1)}{(\sigma-1)\varphi}\ln y_N=0.

\end{aligned}
$$

 Let

$$
\zeta\coloneqq (\ln x_1,\dots,\ln x_N,\ln y_1,\dots,\ln y_N)^\top.
$$

 Define the transformed balance shares and recursive propagation shares

<a id="eq:sharesx-app-v36"></a>
<a id="eq:sharesy-app-v36"></a>

$$
\begin{aligned}
 s_i^x&\coloneqq \frac{\Omega x_i}{R_i^x}, &
 \mu_{ij}&\coloneqq \frac{t_{ij}^{1-\sigma}x_j^a y_j^{-b}}{R_i^x}, \\
 s_i^y&\coloneqq \frac{\Omega y_i}{R_i^y}, &
 \lambda_{ji}&\coloneqq \frac{t_{ji}^{1-\sigma}x_j^{-\gamma}y_j^{\varepsilon}}{R_i^y}.
\end{aligned}
$$

 If $M_c=(\mu_{ij}^c)$, $\Lambda_c=(\lambda_{ji}^c)$, $S_x^c=\operatorname{diag}(s_i^{x,c})$, $S_y^c=\operatorname{diag}(s_i^{y,c})$, and $\ell_c=(L_i^c/\bar L)_i$, then differentiation yields

<a id="eq:J-compact-v36"></a>

$$
J_c=B_c+u_cv_c^\top+\Delta_{\mathrm{road},c}+\Delta_{\mathrm{term},c},
$$

with

<a id="eq:Bc-uv-app-v37"></a>

$$
\begin{aligned}
 B_c&=
 \begin{bmatrix}
 S_x^c-aI+aM_c & bI-bM_c \\
 \gamma(I-\Lambda_c^\top)_{1:(N-1),:} & (S_y^c)^{(N-1)}-\varepsilon(I-\Lambda_c^\top)_{1:(N-1),:} \\
 \frac{\alpha}{\varphi}e_N^\top & -\frac{1+\beta(\sigma-1)}{(\sigma-1)\varphi}e_N^\top
 \end{bmatrix}, \nonumber\\
 u_c&=
 \begin{bmatrix}
 \frac{\sigma-1}{\varphi}s_x^c \\
 \frac{\sigma-1}{\varphi}s_{y,1:(N-1)}^c \\
 0
 \end{bmatrix}, \nonumber\\
 v_c^\top&=\begin{bmatrix}\ell_c^\top & \frac{\sigma}{\sigma-1}\ell_c^\top\end{bmatrix}.

\end{aligned}
$$

 Here $e_N$ is the $N$th standard basis vector, $s_x^c=(s_i^{x,c})_{i=1}^N$ and $s_{y,1:(N-1)}^c=(s_i^{y,c})_{i=1}^{N-1}$ collect the transformed balance shares, and $\ell_c=(L_i^c/\bar L)_{i=1}^N$ collects population shares. The local block $B_c$ governs sparse reallocation through neighboring links, $u_cv_c^\top$ is the common aggregate-propagation block, and the two $\Delta$ matrices are the additive congestion blocks. Thus the grouped sparse reallocation block used in the main line of the appendix is simply

<a id="eq:J-sparse-decomp-proof-v60"></a>

$$
R_c\coloneqq B_c,
\qquad
J_c=R_c+\Delta_{\mathrm{road},c}+\Delta_{\mathrm{term},c}+G_c,
\qquad
G_c\coloneqq u_cv_c^\top.
$$

 If a finer split is useful, $R_c$ can itself be written as

<a id="eq:Jshare-fine-decomp-proof-v60"></a>

$$
R_c=\bar J+D_c+P_c^{\mu}+P_c^{\lambda},
$$

where

<a id="eq:Jbar-app-v60"></a>
<a id="eq:Dc-app-v60"></a>
<a id="eq:Pmu-app-v60"></a>
<a id="eq:Plambda-app-v60"></a>

$$
\begin{aligned}
 \bar J&\coloneqq
 \begin{bmatrix}
 -aI_N & bI_N \\
 \gamma(I_N)_{1:(N-1),:} & -\varepsilon(I_N)_{1:(N-1),:} \\
 \frac{\alpha}{\varphi}e_N^\top & -\frac{1+\beta(\sigma-1)}{(\sigma-1)\varphi}e_N^\top
 \end{bmatrix},
 \\
 D_c&\coloneqq
 \begin{bmatrix}
 S_x^c & 0 \\
 0 & (S_y^c)^{(N-1)} \\
 0 & 0
 \end{bmatrix},
 \\
 P_c^{\mu}&\coloneqq
 \begin{bmatrix}
 aM_c & -bM_c \\
 0 & 0 \\
 0 & 0
 \end{bmatrix},
 \\
 P_c^{\lambda}&\coloneqq
 \begin{bmatrix}
 0 & 0 \\
 -\gamma(\Lambda_c^\top)_{1:(N-1),:} & \varepsilon(\Lambda_c^\top)_{1:(N-1),:} \\
 0 & 0
 \end{bmatrix}.

\end{aligned}
$$

 At the transport level, mode-specific congestion takes the AFW form

<a id="eq:mode-ces-app-v36"></a>

$$
t_{ik,m}^c=\bar t_{ik,m}(\Xi_{ik,m}^c)^{\lambda_m},
 \qquad
 t_{ik}^c=\Bigl(\sum_{m\in M(i,k)} (t_{ik,m}^c)^{-\nu}\Bigr)^{-1/\nu},
 \qquad
 \pi_{ik}^{m,c}=\frac{(t_{ik,m}^c)^{-\nu}}{\sum_{n\in M(i,k)} (t_{ik,n}^c)^{-\nu}}.
$$

 Here $\Xi^c$ collects the road-congestion states (mode-specific link flows) and $T^c$ collects the terminal-congestion states relevant for transshipment and switching margins under model variant $c$. Hence

<a id="eq:chi-loadings-app-v36"></a>

$$
d\ln t_{ik}^c
 =
 \sum_{m\in M(i,k)}\pi_{ik}^{m,c}\,d\ln t_{ik,m}^c
 =
 \sum_{r\in\mathcal S_{\mathrm{road}}}\chi_{ik;r}^{\mathrm{road},c}d\ln \Xi_r^c
 +
 \sum_{t\in\mathcal S_{\mathrm{term}}}\chi_{ik;t}^{\mathrm{term},c}d\ln T_t^c,
$$

where $\chi_{ik;r}^{\mathrm{road},c}$ measures how road-congestion state $r$ loads into the composite transport cost on link $(i,k)$, and $\chi_{ik;t}^{\mathrm{term},c}$ measures the analogous loading from terminal state $t$. Let

<a id="eq:congestion-operators-app-v38"></a>

$$
B_{t,c}\coloneqq \frac{\partial G_c}{\partial \ln t^c},
 \qquad
 Q_{\mathrm{road},c}\coloneqq \frac{\partial \ln \Xi^c}{\partial \zeta^\top},
 \qquad
 Q_{\mathrm{term},c}\coloneqq \frac{\partial \ln T^c}{\partial \zeta^\top},
$$

 In this notation, $B_{t,c}$ maps composite link-cost changes into the transformed equilibrium equations, while $Q_{\mathrm{road},c}$ and $Q_{\mathrm{term},c}$ map equilibrium responses into road- and terminal-congestion states. Define the loading operators $K_{\mathrm{road},c}$ and $K_{\mathrm{term},c}$ by

<a id="eq:K-operators-app-v38"></a>

$$
(K_{\mathrm{road},c}\,u)_{ik}\coloneqq \sum_{r\in\mathcal S_{\mathrm{road}}}\chi_{ik;r}^{\mathrm{road},c}u_r,
 \qquad
 (K_{\mathrm{term},c}\,v)_{ik}\coloneqq \sum_{t\in\mathcal S_{\mathrm{term}}}\chi_{ik;t}^{\mathrm{term},c}v_t.
$$

 Then the two additive congestion blocks in [Equation](#eq:J-compact-v36) are

<a id="eq:Delta-factorization-compact-v38"></a>

$$
\Delta_{\mathrm{road},c}\coloneqq B_{t,c}K_{\mathrm{road},c}Q_{\mathrm{road},c},
 \qquad
 \Delta_{\mathrm{term},c}\coloneqq B_{t,c}K_{\mathrm{term},c}Q_{\mathrm{term},c}.
$$

 These are the exact Jacobian terms generated by road and terminal congestion feedback: $\Delta_{\mathrm{road},c}$ records how equilibrium reacts when a mode-specific link improvement shifts traffic onto congested road states, while $\Delta_{\mathrm{term},c}$ records the analogous feedback through terminals and switching margins.

Finally, because $L_i=W^{1/\rho}z_i$ and $\sum_iL_i=\bar L$,

<a id="eq:dW-app-v36"></a>

$$
d\ln W
 =
 -\frac{\rho}{\varphi}\sum_i \frac{L_i}{\bar L}\Bigl(d\ln x_i+\frac{\sigma}{\sigma-1}d\ln y_i\Bigr),
$$

 so the welfare row is

<a id="eq:g-components-app-v36"></a>

$$
g^\top
 =
 \frac{\rho}{\varphi}
 \Bigl[
 \frac{L_1}{\bar L},\dots,\frac{L_N}{\bar L},
 \frac{\sigma}{\sigma-1}\frac{L_1}{\bar L},\dots,
 \frac{\sigma}{\sigma-1}\frac{L_N}{\bar L}
 \Bigr].
$$

 A composite-link perturbation on link $kl$ enters sparsely through

<a id="eq:composite-shock-app-v36"></a>

$$
b_{kl}=B_t\mathbf e_{kl}=(1-\sigma)
 \begin{bmatrix}
 \mu_{kl}\mathbf e_k^x \\
 \lambda_{kl}\mathbf e_l^y
 \end{bmatrix},
$$

with the second block omitted when required by the normalization row. Combining these ingredients with the implicit function theorem yields the grouped Jacobian decomposition [Equation](#eq:jacobian-block-split-app-v70), the finer reallocation-block split [Equation](#eq:Jshare-fine-decomp-proof-v60), and Propositions [Proposition](#prop:normalized-object)--[Proposition](#prop:reallocation-wedges).

<a id="app:implied_modal_wedge"></a>

### Derivations for Section [5](#sec:Calibration_Validation): Implied Modal Wedge

We use the estimated elasticity $\hat\eta$ together with observed modal shipment flows to impute a reduced-form measure of generalized frictions that prevent adoption of non-road modes. We focus on the origin-side object used in the main text; the destination-side analogue is defined symmetrically.

Let road be the reference mode, indexed by $0$, and let $m\in\{\text{rail},\text{water-dom},\text{water-for}\}$ denote an alternative mode. For each origin $o$, define total outgoing shipments by mode as

$$
X_{o\cdot m}\colonequals \sum_d X_{odm}.
$$

 Under the gravity structure in the text, the observed road-relative modal flow ratio implies a revealed generalized-cost ratio

$$
\rho_o(m\|0)
\;\colonequals\;
\left(\frac{X_{o\cdot m}}{X_{o\cdot 0}}\right)^{-1/\hat\eta},
$$

for all origins with $X_{o\cdot m}>0$ and $X_{o\cdot 0}>0$.

Next, let benchmark line-haul costs be linear in distance:

$$
\bar C_m(D)=T_m D,
\qquad
\bar C_0(D)=T_0 D,
$$

where $T_m$ is the calibrated freight rate in dollars per TEU-mile for mode $m$. We define the implied multiplicative adoption wedge as

$$
\Lambda_o(m\|0)
\;\colonequals\;
\rho_o(m\|0)\frac{T_0}{T_m}.
$$

 Equivalently,

$$
\frac{\Lambda_o(m\|0)\bar C_m(D)}{\bar C_0(D)}
=
\rho_o(m\|0).
$$

 Thus, $\Lambda_o(m\|0)>1$ means that mode $m$ must face an additional generalized friction, above its calibrated engineering cost, for the model to reproduce the observed road-relative modal split.

Our preferred local summary is constructed on the common-support set

$$
\mathcal S_m
\colonequals
\{o: X_{o\cdot m}>0 \text{ and } X_{o\cdot 0}>0\},
$$

 using reference-mode flow weights

$$
\omega_o
\colonequals
\frac{X_{o\cdot 0}}{\sum_{j\in\mathcal S_m} X_{j\cdot 0}}.
$$

 The average-local wedge is the weighted geometric mean of the origin-level wedges:

$$
\ln \Lambda_m^{\mathrm{avg}}
=
\sum_{o\in\mathcal S_m}\omega_o \ln \Lambda_o(m\|0),
\qquad
\Lambda_m^{\mathrm{avg}}
=
\exp\!\big(\ln \Lambda_m^{\mathrm{avg}}\big).
$$

 This is the common-support object reported in the main text.

We also report an exact national counterpart based on total modal flows:

$$
\Lambda_m^{\mathrm{nat}}
=
\left(
\frac{\sum_o X_{o\cdot m}}{\sum_o X_{o\cdot 0}}
\right)^{-1/\hat\eta}
\frac{T_0}{T_m}.
$$

 The difference between $\Lambda_m^{\mathrm{avg}}$ and $\Lambda_m^{\mathrm{nat}}$ reflects both heterogeneity across origins and the role of common support.

Finally, for interpretability we convert the dimensionless wedge into a dollar-equivalent amount at benchmark distance $D$:

$$
S_m(D)
=
\big(\Lambda_m-1\big)\,T_m D.
$$

 This dollar-equivalent quantity should be interpreted as the money-equivalent generalized friction required to rationalize the observed modal split. It is not, in general, a literal terminal fee or one-for-one switching charge. Under linear per-mile benchmark costs, the multiplicative wedge $\Lambda_m$ is invariant to the choice of $D$; only its dollar-equivalent representation $S_m(D)$ depends on the reporting distance.

<a id="appendix:counterfactual_eq"></a>

### Derivations for Section [5.1](#subsec:counterfactuals): Proof of the [Counterfactual Proposition](#proposition)

This section presents the proof of the [counterfactual proposition](#proposition). We proceed in two steps. First, we derive the change in the equilibrium conditions in terms of market-access terms; we then substitute the model-specific elements.

#### Preliminaries

We can write equilibrium trade flows as,

$$
X_{ij}=\tau_{ij}^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}
$$

where $\gamma_{i}$ and $\delta_{j}$ are cumulative flows out of and origin and into a destination, respectively, and $\Pi_{i}$ and $P_{j}$ are origin and destination market access terms. Given the recursive routing formulation, trade costs can be represented as:

$$
\tau_{ij}=\left(\sum_{k\in\mathcal{F}(i)}\left(t_{ik}\tau_{kj}\right)^{-\theta}\right)^{-\frac{1}{\theta}}
$$

And furthermore from the nested choice along the multi-layered graph, we have,


$$
t_{ik}^{-\theta}=\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\eta}\right)^{\frac{\theta}{\eta}|}
$$


In terms of market clearing and trade balance we have the following equilibrium conditions,


$$
\begin{aligned}\gamma_{i} & =\sum_{j}X_{ij}\\
\delta_{i} & =\sum_{j}X_{ji}
\end{aligned}
$$


#### Deriving the equilibrium equation

Starting with the first equilibrium condition we have:

$$
\begin{aligned}
\gamma_{i} & =\sum_{j}X_{ij} \\
\gamma_{i} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}} \\
\Pi_{i}^{-\theta_{i}} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\Pi_{i}^{\theta_{j}\frac{\theta_{j}}{\theta_{i}}-\theta_{i}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\sum_{j}\tau_{ij}^{-\theta_{j}}\times\Pi_{i}^{\Delta_{i,j}}\times\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\tau_{ij}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\left(\sum_{k\in\mathscr{B}\left(k\right)}t_{ik}^{-\theta_{j}}\tau_{kj}^{-\theta_{j}}\right)\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{j\neq i}\left(\sum_{k\in\mathscr{F}\left(i\right)}t_{ik}^{-\theta_{j}}\tau_{kj}^{-\theta_{j}}\right)\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
\Pi_{i}^{-\theta_{i}} & =\tau_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(-\tau_{ki}^{-\theta_{i}}\frac{\delta_{i}}{p_{i}^{-\theta_{i}}}+\sum_{j}t_{ik}^{\Delta\theta_{j}}\tau_{kj}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =\left(t_{ii}^{-\theta_{i}}+\sum_{k\in\mathscr{F}(i)}\left(t_{ik}\tau_{ki}\right)^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(-\tau_{ki}^{-\theta_{i}}\frac{\delta_{i}}{p_{i}^{-\theta_{i}}}+\sum_{j}t_{ik}^{\Delta\theta_{j}}\tau_{kj}^{-\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =\left(t_{ii}^{-\theta_{i}}\right)\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\left(\sum_{j}t_{ik}^{\Delta\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\tau_{kj}^{-\theta_{j}}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)\\
\Pi_{i}^{-\theta_{i}} & =t_{ii}^{-\theta_{i}}\frac{\delta_{i}}{P_{i}^{-\theta_{i}}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta_{i}}\tilde{\Pi}_{k}^{-\theta_{i}}
\end{aligned}
$$

where in the second line we defined, $\Pi_{i}^{\Delta_{i,j}}\equiv\Pi_{i}^{\theta_{j}\frac{\theta_{j}}{\theta_{i}}-\theta_{i}}$ and where $\tilde{\Pi}_{k}^{-\theta_{i}}=\left(\sum_{j}t_{ik}^{\Delta\theta_{j}}\Pi_{i}^{\Delta_{i,j}}\left(\gamma_{i}\right)^{\frac{\theta_{j}}{\theta_{i}}-1}\tau_{kj}^{-\theta_{j}}\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\right)^{\frac{\theta_{i}}{\theta_{j}}}$ is the approximate price index that controls for differences in elasticities of substitution between neighboring nodes. And where in the fourth line we have used the fact that at the penultimate node the set of predecessor nodes of k ($\mathcal{B}(k)$) coincides with set of successor nodes of i ($\mathcal{F}(i)$).

Continuing with the second equilibrium condition,


$$
\begin{aligned}\delta_{j} & =\sum_{i}X_{ij}\\
\delta_{j} & =\sum_{i}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\times\frac{\delta_{j}}{P_{j}^{-\theta_{j}}}\\
P_{j}^{-\theta_{j}} & =\sum_{i}\tau_{ij}^{-\theta_{j}}\times\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i\neq j}\tau_{ij}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i\neq j}\left(\sum_{k\in\mathscr{B}(j)}\tau_{ik}^{-\theta_{j}}t_{kj}^{-\theta_{j}}\right)\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\\
P_{j}^{-\theta_{j}} & =\tau_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(-\tau_{jk}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =\left(t_{jj}^{-\theta_{j}}+\sum_{k\in\mathscr{B}(j)}\left(t_{jk}\tau_{kj}\right)^{-\theta_{j}}\right)\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(-\tau_{jk}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =\left(t_{jj}^{-\theta_{j}}\right)\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}\left(\sum_{i}\tau_{ik}^{-\theta_{j}}\left(\frac{\gamma_{i}}{\Pi_{i}^{-\theta_{j}}}\right)^{\frac{\theta_{j}}{\theta_{i}}}\right)\\
P_{j}^{-\theta_{j}} & =t_{jj}^{-\theta_{j}}\frac{\gamma_{j}}{\Pi_{j}^{-\theta_{j}}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta_{j}}P_{k}^{-\theta_{j}}
\end{aligned}
$$

where in the last line we used the definition of the recursive transport cost ([Equation](#eq:recursive_routing)), $\tau_{ii}^{-\theta}=\left(t_{ii}^{-\theta}+\sum_{k\in\mathcal{F}(i)}\left(t_{ik}\tau_{kj}\right)^{-\theta}\right)$. In what follows, we derive the counterfactual equation for the special case with symmetric substitution elasticities, ($\theta_i=\theta \quad \forall i$), i.e.


$$
\Pi_{i}^{-\theta} =\left(t_{ii}^{-\theta}\right)\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathscr{F}(i)}t_{ik}^{-\theta}\Pi_{k}^{-\theta}
$$


$$
P_{j}^{-\theta}=t_{jj}^{-\theta}\frac{\gamma_{j}}{\Pi_{j}^{-\theta}}+\sum_{k\in\mathscr{B}(j)}t_{kj}^{-\theta}P_{k}^{-\theta}
$$


We can make the relationship between the mode-specific transportation cost and the spatial aggregate equilibrium more explicit by substitution the definition of the edge-specific transport cost in terms of the multi-layered mode specific transport cost, i.e.


$$
\begin{aligned}
P_{i}^{-\theta}&=t_{ii}^{-\theta}\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(j\right)}\left(\sum_{m\in\,\mathcal{M}\left(k,i\right)}\tilde{t}_{ki,m}^{-\eta}\right)^{\frac{\theta}{\eta}|}P_{k}^{-\theta}\\&=t_{ii}^{-\theta}\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(j\right)}\left(\sum_{m\in\,\mathcal{M}\left(k,i\right)}\tilde{t}_{ki,m}^{-\eta}P_{k}^{-\eta}\right)^{\frac{\theta}{\eta}|}
\end{aligned}
$$


$$
\begin{aligned}
\Pi_{i}^{-\theta} & =t_{ii}^{-\theta}\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\eta}\right)^{\frac{\theta}{\eta}|}\Pi_{k}^{-\theta}\\
 & =t_{ii}^{-\theta}\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\tilde{t}_{ik,m}^{-\eta}\Pi_{k}^{-\eta}\right)^{\frac{\theta}{\eta}|}
\end{aligned}
$$

where we notice that the equilibrium equations then inherit a the structure of nested choice models directly and where the modal substitution parameter than governs the impact of mode-specific changes on aggregate endogenous variables.

#### Deriving the equilibrium system in changes

Start with (recursive) equilibrium condition from the previous subsection,

$$
\Pi_i^{-\theta}=t_{i i}^{-\theta} \frac{\delta_i}{P_i^{-\theta}}+\sum_{k \in \mathcal{F}(i)} t_{i k}^{-\theta} \Pi_k^{-\theta}
$$


$$
P_i^{-\theta}=t_{i i}^{-\theta} \frac{\gamma_i}{\Pi_i^{-\theta}}+\sum_{k \in \mathcal{F}(j)} t_{k i}^{-\theta} P_k^{-\theta}
$$


Expressed in changes,


$$
\begin{aligned}\hat{\Pi}_{i}^{-\theta} & =\left(\frac{t_{ii}^{-\theta}\frac{\delta_{i}}{P_{i}^{-\theta}}}{t_{ii}^{-\theta}\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ik}^{-\theta}\Pi_{k}^{-\theta}}\right)\frac{\hat{\delta}_{i}}{\hat{P}_{i}^{-\theta}}\\
 & +\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{t_{ik}^{-\theta}\Pi_{k}^{-\theta}}{t_{ii}^{-\theta}\frac{\delta_{i}}{P_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ik}^{-\theta}\Pi_{k}^{-\theta}}\right)\hat{t}_{ik}^{-\theta}\hat{\Pi}_{k}^{-\theta}
\end{aligned}
$$

and,


$$
\begin{aligned}\hat{P}_{i}^{-\theta} & =\left(\frac{t_{ii}^{-\theta}\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}}{t_{ii}^{-\theta}\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(j\right)}t_{ki}^{-\theta}P_{k}^{-\theta}}\right)\frac{\hat{\gamma}_{i}}{\hat{\Pi}_{i}^{-\theta}}\\
 & +\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{t_{ki}^{-\theta}P_{k}^{-\theta}}{t_{ii}^{-\theta}\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ki}^{-\theta}P_{k}^{-\theta}}\right)\hat{t}_{ki}^{-\theta}\hat{P}_{k}^{-\theta}
\end{aligned}
$$


Multiplying both numerator and denominator by their appropriate market access terms, we obtain,


$$
\begin{aligned}\hat{\Pi}_{i}^{-\theta} & =\left(\frac{\delta_{i}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ik}^{-\theta}P_{k}^{-\theta}\Pi_{j}^{-\theta}}\right)\frac{\hat{\delta}_{i}}{\hat{P}_{i}^{-\theta}}\\
 & +\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{t_{ik}^{-\theta}\Pi_{j}^{-\theta}P_{i}^{-\theta}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ik}^{-\theta}P_{k}^{-\theta}\Pi_{j}^{-\theta}}\right)\hat{t}_{ik}^{-\theta}\hat{\Pi}_{k}^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}\hat{P}_{i}^{-\theta} & =\left(\frac{\gamma_{i}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ki}^{-\theta}P_{k}^{-\theta}\Pi_{i}^{-\theta}}\right)\frac{\hat{\gamma}_{i}}{\hat{\Pi}_{i}^{-\theta}}\\
 & +\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{t_{ki}^{-\theta}P_{k}^{-\theta}\Pi_{i}^{-\theta}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}t_{ki}^{-\theta}P_{k}^{-\theta}\Pi_{i}^{-\theta}}\right)\hat{t}_{ki}^{-\theta}\hat{P}_{k}^{-\theta}
\end{aligned}
$$

 Simplifying we obtain,

$$
\hat{\Pi}_{i}^{-\theta}=\left(\frac{\delta_{i}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\frac{\hat{\delta}_{i}}{\hat{P}_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{\Xi_{ik}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\hat{\Pi}_{k}^{-\theta}
$$


$$
\hat{P}_{i}^{-\theta}=\left(\frac{\gamma_{i}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\frac{\hat{\gamma}_{i}}{\hat{\Pi}_{i}^{-\theta}}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{\Xi_{ki}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\hat{P}_{k}^{-\theta}
$$


Next, we proceed by deriving the nested transport equilibrium at the edge-level. Recall, that given the nested choice above the changes in aggregate transport cost is given by,

$$
\hat{t}_{ik}^{-\theta}=\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\frac{\left(t'_{ik,m}\right)^{-\eta}}{t_{ik}^{-\eta}}\right)^{\frac{\theta}{\eta}}
$$

 Multiplying with the appropriate market access terms, we obtain,

$$
\hat{t}_{ik}^{-\theta}=\left(\sum_{m\in\,\mathcal{M}\left(i,k\right)}\frac{\Xi_{ik.m}}{\Xi_{ik}}\hat{t}_{ik,m}^{-\eta}\right)^{\frac{\theta}{\eta}}
$$

For the changes in transport cost we have,

$$
\hat{t}_{kl,1}=\hat{\bar{t}}_{kl,0}^{\frac{1}{1+\eta\lambda_{0}}}\times\hat{t}_{kl}^{\frac{\lambda_{0}\left(\eta-\theta\right)}{1+\eta\lambda_{0}}}\times\hat{P}_{k}^{\frac{-\theta\lambda_{0}}{1+\eta\lambda_{0}}}\times\hat{\Pi}_{l}^{\frac{-\theta\lambda_{0}}{1+\eta\lambda_{0}}}
$$

And second, we have for any non-primary transport mode,

$$
\hat{t}_{kl,m}=\hat{\bar{s}}_{kk,m}\hat{\tau}_{kl,m}\hat{\bar{s}}_{ll,m}\hat{P}_{k}^{-\theta\lambda_{m}}\hat{\Pi}_{k,m}^{-\theta\lambda_{m}}\hat{\Pi}_{l}^{-\theta\lambda_{m}}\hat{P}_{l,m}^{-\theta\lambda_{m}}
$$

For the trade model here we have,

$$
\begin{aligned}\delta_{i} & =E_{i}\\
\gamma_{i} & =Y_{i}
\end{aligned}
$$

And for the price indices in changes we have,

$$
\hat{P}_{i}=\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}
$$


$$
\hat{\Pi}_{i}=\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}
$$

and furthermore, we have the mode specific market access terms,

$$
\hat{P}_{l,m}^{-\theta}\equiv\sum_{k\in\mathcal{B}\left(l\right)}\frac{\Xi_{kl,m}}{\sum_{k\in\mathcal{B}\left(l\right)}\Xi_{kl,m}}\hat{t}_{kl,m}^{-\eta}\times\hat{t}_{kl}^{\eta-\theta}\times\hat{P}_{k}^{-\theta}
$$


$$
\hat{\Pi}_{k,m}^{-\theta}\equiv\sum_{l\in\mathcal{F}\left(k\right)}\frac{\Xi_{kl,m}}{\sum_{l\in\mathcal{F}\left(k\right)}\Xi_{kl,m}}\times\hat{t}_{kl,m}^{-\eta}\times\hat{t}_{kl}^{\eta-\theta}\times\hat{\Pi}_{l}^{-\theta}
$$


Given an initial guess for the market access terms, we can solve for the aggregate transport costs, $\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)$, by iteratively updating the following equation until convergence,


$$
\begin{aligned}
\hat{t}_{i k}^{-\theta} & =\left(\frac{\Xi_{i k .0}}{\Xi_{i k}} \hat{t}_{i k, 0}^{-\eta}+\sum_{m \neq 0} \frac{\Xi_{i k . m}}{\Xi_{i k}} \hat{t}_{i k, m}^\eta\right)^{\frac{\theta}{\eta}} \\
& =\left(\frac{\Xi_{i k .0}}{\Xi_{i k}}\left[\hat{\bar{t}}_{i k, 0}^{\frac{1}{+\eta \eta \lambda_0}} \times \hat{t}_{i k}^{\frac{\lambda_0(\eta-\theta)}{1+\eta \lambda_0}} \times \hat{P}_i^{\frac{-\theta \lambda_0}{1+\eta \lambda_0}} \times \hat{\Pi}_k^{\frac{-\theta \lambda_0}{1+\eta \lambda_0}}\right]^{-\eta}+\sum_{m \neq 0} \frac{\Xi_{i k . m}}{\Xi_{i k}}\left[\hat{\bar{s}}_{i i, m} \hat{\tau}_{i k, m} \hat{\bar{s}}_{k k, m} \hat{P}_i^{-\theta \lambda_m} \hat{\Pi}_{i, m}^{-\theta \lambda_m} \hat{\Pi}_k^{-\theta \lambda_m} \hat{P}_{k, m}^{-\theta \lambda_m}\right]^{-\eta}\right)^{\frac{\theta}{\eta}}
\end{aligned}
$$


Writing out and substituting for the transport cost terms,

$$
\hat{P}_{i}^{-\theta}\hat{\Pi}_{i}^{-\theta}=\left(\frac{\delta_{i}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{\delta}_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{\Xi_{ik}}{\delta_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{\bar{t}}_{ik,0},\hat{\bar{t}}_{ik,m}\right)\hat{P}_{i}^{-\theta}\hat{\Pi}_{k}^{-\theta}
$$


$$
\hat{P}_{i}^{-\theta}\hat{\Pi}_{i}^{-\theta}=\left(\frac{\gamma_{i}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{\gamma}_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\left(\frac{\Xi_{ki}}{\gamma_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{\bar{t}}_{ki,0},\hat{\bar{t}}_{ki,m}\right)\hat{P}_{k}^{-\theta}\hat{\Pi}_{i}^{-\theta}
$$


Substituting the price indices in changes, we get,


$$
\begin{aligned}
\left(\hat{l}_i^{\alpha+1} \hat{y}_i^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_i \hat{l}_i^{\beta-1} \hat{W}^{-1}\right)^{-\theta}= & \left(\frac{E_i}{E_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \hat{y}_i \\
& +\sum_{k \in \mathcal{F}(i)}\left(\frac{\Xi_{i k}}{E_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \hat{t}_{i k}^{-\theta}\left(\hat{\Pi}, \hat{P}, \hat{t}_{i k, 0}, \hat{t}_{i k, m}\right)\left(\hat{y}_i \hat{i}_i^{\beta-1} \hat{W}^{-1}\right)^{-\theta}\left(\hat{l}_k^{\alpha+1} \hat{y}_k^{-\frac{\theta+1}{\theta}}\right)^{-\theta} \\
\left(\hat{l}_i^{\alpha+1} \hat{y}_i^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_i \hat{l}_i^{\beta-1} \hat{W}^{-1}\right)^{-\theta}= & \left(\frac{Y_i}{Y_i+\sum_{k \in \mathcal{F}(i)} \Xi_{k i}}\right) \hat{y}_i \\
& +\sum_{k \in \mathcal{F}(i)}\left(\frac{\Xi_{k i}}{Y_i+\sum_{k \in \mathcal{F}(i)} \Xi_{k i}}\right) \hat{t}_{k i}^{-\theta}\left(\hat{\Pi}, \hat{P}, \hat{t}_{k i, 0}, \hat{t}_{k i, m}\right)\left(\hat{y}_k \hat{l}_k^{\beta-1} \hat{W}^{-1}\right)^{-\theta}\left(\hat{l}_i^{\alpha+1} \hat{y}_i^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


Simplifying and defining, $\hat{\chi}=\hat{W}^{-\theta}$, we have,


$$
\begin{aligned}
\hat{y}_i^{1+\theta} \hat{l}_i^{-\theta(1+\alpha)} & =\hat{\chi}\left(\frac{E_i}{E_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \hat{y}_i^{1+\theta} \hat{l}_i^{-\theta(1-\beta)}+\sum_{k \in \mathcal{F}(i)}\left(\frac{\Xi_{i k}}{E_i+\sum_{k \in \mathcal{F}(i)} \Xi_{i k}}\right) \hat{t}_{i k}^{-\theta} \hat{y}_k^{1+\theta} \hat{l}_k^{-\theta(1+\alpha)} \\
\hat{y}_i^{-\theta} \hat{l}_i^{\theta(1-\beta)} & =\hat{\chi}\left(\frac{Y_i}{Y_i+\sum_{k \in \mathcal{F}(i)} \Xi_{k i}}\right) \hat{y}_i^{-\theta} \hat{l}_i^{\theta(1+\alpha)}+\sum_{k \in \mathcal{F}(i)}\left(\frac{\Xi_{k i}}{Y_i+\sum_{k \in \mathcal{F}(i)} \Xi_{k i}}\right) \hat{t}_{k i}^{-\theta} \hat{y}_k^{-\theta} \hat{l}_k^{\theta(1-\beta)}
\end{aligned}
$$


<a id="appendix:flows_predict"></a>

### Derivations for Section [5.3](#sub:Predicted_traffic): Predicted vs Observed Transport Mode-level Trade Flows

For aggregate traffic we have,

$$
\boldsymbol{\Xi}=\mathbf{PA}\Pi
$$


Inverting,

$$
\begin{aligned} & \boldsymbol{\Xi}=\mathbf{PA}\Pi\Longleftrightarrow\\
 & \mathbf{A}=\mathbf{P}^{-1}\boldsymbol{\Xi}\Pi^{-1}
\end{aligned}
$$

For the traffic equations we have,

$$
\boldsymbol{\Xi}_{m}=\mathbf{PT_{m}}\Pi
$$


Inverting,

$$
\begin{aligned} & \boldsymbol{\Xi}_{m}=\mathbf{PT_{m}}\Pi\Longleftrightarrow\\
 & \mathbf{T}_{m}=\mathbf{P}^{-1}\boldsymbol{\Xi}_{m}\Pi^{-1}
\end{aligned}
$$


Bilateral mode specific shares are given by,

$$
\begin{aligned}\pi_{ij,k,m} & =\frac{\left(w_{i}/A_{i}\right)^{-\theta}\left(t_{ik}\tau_{ki}\right)^{-\theta}}{\sum_{i\in\mathcal{N}}\left(w_{i}/A_{i}\right)^{-\theta}\sum_{k^{\prime}\in\mathcal{F}(i)}\left(t_{ik^{\prime}}\tau_{k^{\prime}i}\right)^{-\theta}}\frac{\tilde{t}_{ik,m}^{-\eta}}{t_{ik}}\\
 & =\pi_{ij,k}\times\pi_{ij,k}^{m}
\end{aligned}
$$


$$
X_{ij}=\left(\tau_{ij}\right)^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}
$$


$$
\begin{aligned}
X_{ij} & =\left(\sum_{k\in\mathcal{N}}t_{ik}^{-\theta}\tau_{kj}^{-\theta}\right)\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}\\
 & =\sum_{k\in\mathcal{N}}\underbrace{t_{ik}^{-\theta}\times\tau_{kj}^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}}_{\equiv X_{ij,k}}
\end{aligned}
$$


$$
\begin{aligned}
X_{ij} & =\left(\sum_{k\in\mathcal{N}}\sum_{l\in\mathcal{N}\left(k\right)}\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}\right)\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}\\
 & =\sum_{k\in\mathcal{N}}\sum_{l\in\mathcal{N}\left(k\right)}\underbrace{\tau_{ik}^{-\theta}t_{kl}^{-\theta}\tau_{lj}^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}}_{\equiv X_{ij,kl}}
\end{aligned}
$$


The share of flows between $ij$, along link $kl$ and along mode $m$,

$$
X_{ij,kl}=\left(\tau_{ik}t_{kl}\tau_{lj}\right)^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}
$$


$$
X_{ij,kl,m}=\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\times\left(\tau_{ik}t_{kl}\tau_{lj}\right)^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}
$$


sum over $kl$ to obtain


$$
\begin{aligned}
X_{ij,m} & =\sum_{k\in\mathbf{N}}\sum_{l\in\mathcal{N}\left(k\right)}\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}\times\left(\tau_{ik}t_{kl}\tau_{lj}\right)^{-\theta}\times\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\times\frac{\delta_{j}}{P_{j}^{-\theta}}\\
X_{ij,m} & =\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\frac{\delta_{j}}{P_{j}^{-\theta}}\sum_{k\in\mathcal{\mathbf{N}}}\tau_{ik}^{-\theta}\sum_{l\in\mathcal{N}\left(k\right)}\tau_{lj}^{-\theta}\times\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{-\eta}}t_{kl}^{-\theta}\\
X_{ij,m} & =\frac{\gamma_{i}}{\Pi_{i}^{-\theta}}\frac{\delta_{j}}{P_{j}^{-\theta}}\sum_{k\in\mathcal{\mathbf{N}}}\tau_{ik}^{-\theta}\sum_{l\in\mathcal{N}\left(k\right)}\tau_{lj}^{-\theta}\times\frac{\tilde{t}_{kl,m}^{-\eta}}{t_{kl}^{\theta-\eta}}
\end{aligned}
$$


In matrix notation, we have,

$$
\mathbf{X}_{m}=\left(\frac{Y}{\Pi}\right)(\mathbf{I}-\mathbf{A})^{-1}\mathbf{T}_{m}(\mathbf{I}-\mathbf{A})^{-1}\left(\frac{E}{P}\right)
$$


Derivations,


$$
\begin{aligned}\mathbf{X}_{m} & =\left(\frac{Y}{\Pi}\right)(\mathbf{I}-\mathbf{A})^{-1}\mathbf{T}_{m}(\mathbf{I}-\mathbf{A})^{-1}\left(\frac{E}{\mathbf{P}}\right)\Longleftrightarrow\\
\mathbf{X}_{m} & =\left(\frac{Y}{\Pi}\right)\left(\mathbf{I}-\mathbf{A}\right)^{-1}\mathbf{P}^{-1}\boldsymbol{\Xi}_{m}\Pi^{-1}\left(\mathbf{I}-\mathbf{A}\right)^{-1}\left(\frac{E}{\mathbf{P}}\right)\Longleftrightarrow\\
\mathbf{X}_{m} & =\left(\frac{Y}{\Pi}\right)\left(\mathbf{I}-\mathbf{P}^{-1}\Xi\Pi^{-1}\right)^{-1}\mathbf{P}^{-1}\boldsymbol{\Xi}_{m}\Pi^{-1}\left(\mathbf{I}-\mathbf{P}^{-1}\Xi\Pi^{-1}\right)^{-1}\left(\frac{E}{\mathbf{P}}\right)\Longleftrightarrow\\
\mathbf{X}_{m}^{-1} & =\left(\frac{E}{\mathbf{P}}\right)^{-1}\left(\mathbf{I}-\mathbf{P}^{-1}\Xi\Pi^{-1}\right)\Pi\boldsymbol{\Xi}_{m}^{-1}\mathbf{P}\left(\mathbf{I}-\mathbf{P}^{-1}\Xi\Pi^{-1}\right)\left(\frac{Y}{\Pi}\right)^{-1}\Longleftrightarrow\\
\mathbf{X}_{m}^{-1} & =\left(\left(\frac{E}{\mathbf{P}}\right)^{-1}-\left(\frac{E}{\mathbf{P}}\right)^{-1}\mathbf{P}^{-1}\Xi\Pi^{-1}\right)\Pi\boldsymbol{\Xi}_{m}^{-1}\mathbf{P}\left(\left(\frac{Y}{\Pi}\right)^{-1}-\mathbf{P}^{-1}\Xi\Pi^{-1}\left(\frac{Y}{\Pi}\right)^{-1}\right)\Longleftrightarrow\\
\mathbf{X}_{m}^{-1} & =\left(\left(\frac{E}{\mathbf{P}}\right)^{-1}\Pi-\left(\frac{E}{\mathbf{P}}\right)^{-1}\mathbf{P}^{-1}\Xi\Pi^{-1}\Pi\right)\boldsymbol{\Xi}_{m}^{-1}\left(\mathbf{P}\left(\frac{Y}{\Pi}\right)^{-1}-\mathbf{P}\mathbf{P}^{-1}\Xi\Pi^{-1}\left(\frac{Y}{\Pi}\right)^{-1}\right)\Longleftrightarrow\\
\mathbf{X}_{m}^{-1} & =E^{-1}\left(\mathbf{P}\Pi-\Xi\right)\boldsymbol{\Xi}_{m}^{-1}\left(\mathbf{P}\Pi-\Xi\right)Y^{-1}\Longleftrightarrow\\
\mathbf{X}_{m} & =Y\left(\mathbf{P}\Pi-\Xi\right)^{-1}\boldsymbol{\Xi}_{m}\left(\mathbf{P}\Pi-\Xi\right)^{-1}E
\end{aligned}
$$


Finally, we need an expression for $\mathbf{P}\Pi$,

$$
\Pi P=Y+\Xi^{T}1
$$

and,

$$
\Pi P=E+\Xi1
$$


We have,

$$
\mathbf{X}_{m}  =(Y)\left(\operatorname{diag}\left(\frac{1}{2}(E+Y)+\frac{1}{2}\left(\Xi1+\Xi^{T}1\right)\right)-\Xi\right)^{-1}\boldsymbol{\Xi}_{m}\left(\operatorname{diag}\left(\frac{1}{2}(E+Y)+\frac{1}{2}\left(\Xi1+\Xi^{T}1\right)\right)-\Xi\right)^{-1}(E)
$$


We finally obtain,

<a id="eq:predicted_mode_flows"></a>

$$
X_{i j, m}=Y_i \times E_j \times \sum_{(k, l)}\left[\mathbf{D}^X-\Xi\right]_{i k}^{-1}\left[\boldsymbol{\Xi}_m\right]_{k l}\left[\mathbf{D}^X-\Xi\right]_{l j}^{-1},
$$

where $\mathbf{D}^X$ is the diagonal matrix with diagonal elements given by $\left(\frac{1}{2}(E+Y)+\frac{1}{2}\left(\Xi 1+\Xi^T 1\right)\right)_{ii}$

<a id="Online_Appendix:International_Trade"></a>

### Derivations for Section [5.1](#subsec:counterfactuals): International Trade

In this subsection, we extend the model to allow for both domestic locations $i,j\in\mathcal{D}$ and foreign locations $l\in\mathcal{F}$. Domestic locations consumer from both domestic and foreign locations, while foreign locations are modeled to only trade with domestic locations. Furthermore, we make a small open economy assumption such that changes in the domestic economy do not affect the labor allocations in the foreign economy. For the domestic economy we have the following conditions,


$$
\begin{aligned}\gamma_{i} & =\sum_{j\in\mathcal{D}}X_{ij}+\sum_{l\in\mathcal{F}}X_{il}\\
\delta_{i} & =\sum_{j\in\mathcal{D}}X_{ji}+\sum_{l\in\mathcal{F}}X_{li}
\end{aligned}
$$

 Welfare equalization domestically implies,

$$
\begin{aligned}P_{i} & =\frac{w_{i}u_{i}}{W}\Longleftrightarrow\\
P_{i} & =Y_{i}\bar{u}_{i}L_{i}^{\beta-1}W^{-1}\Longrightarrow\\
\hat{P}_{i} & =\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}
\end{aligned}
$$

and

$$
\begin{aligned} & \Pi_{i}=A_{i}L_{i}Y_{i}^{-\frac{\theta+1}{\theta}}\Longleftrightarrow\\
 & \Pi_{i}=A_{i}L_{i}^{\alpha+1}Y_{i}^{-\frac{\partial+1}{\theta}}\Longrightarrow\\
 & \hat{\Pi}_{i}=\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}
\end{aligned}
$$

For the foreign economy we have that market clearing implies,

$$
\begin{aligned}\gamma_{l} & =\sum_{j}X_{lj}\quad\forall l\in\mathcal{F}\\
\delta_{l} & =\sum_{j}X_{jl}\quad\forall l\in\mathcal{F}
\end{aligned}
$$

For the price indices for foreign locations we obtain,

$$
\begin{aligned}P_{l} & =\frac{w_{l}u_{l}}{W_{l}}\Longleftrightarrow\\
P_{l} & =Y_{l}\bar{u}_{l}L_{l}^{\beta-1}W_{l}^{-1}\Longrightarrow\\
\hat{P}_{l} & =\hat{y}_{l}\hat{W}_{l}^{-1}
\end{aligned}
$$

and

$$
\begin{aligned} & \Pi_{l}=A_{l}L_{l}Y_{l}^{-\frac{\theta+1}{\theta}}\Longleftrightarrow\\
 & \Pi_{l}=A_{l}L_{l}^{\alpha+1}Y_{l}^{-\frac{\theta+1}{\theta}}\Longrightarrow\\
 & \hat{\Pi}_{l}=\hat{y}_{l}^{-\frac{\theta+1}{\theta}}
\end{aligned}
$$


Considering now that the economy is situated on a graph with both foreign and domestic nodes, i.e. $\mathcal{G}\equiv(\mathcal{N},\mathcal{L})$, where $\mathcal{N}$ is the union of domestic, $\mathcal{N}_{D}$, and foreign nodes, $\mathcal{N}_{F}$, and equivalently we define domestic and foreign successor nodes, $k\in\mathcal{F}_{D}\left(i\right)$, and $l\in\mathcal{F}_{F}\left(i\right)$.

Re-writing the equilibrium system for both foreign and domestic locations, defining domestic and foreign neighboring notes

$$
\begin{aligned}
\hat{P}_{i}^{-\theta}\hat{\Pi}_{i}^{-\theta}= & \left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{\delta}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\hat{\Pi}_{k}^{-\theta}\hat{P}_{i}^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\hat{P}_{i}^{-\theta}\hat{\Pi}_{l}^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\hat{P}_{i}^{-\theta}\hat{\Pi}_{i}^{-\theta}= & \left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{\gamma}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\hat{P}_{k}^{-\theta}\hat{\Pi}_{i}^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\hat{P}_{l}^{-\theta}\hat{\Pi}_{i}^{-\theta}
\end{aligned}
$$

And similarly for foreign locations, we have,

$$
\begin{aligned}
\hat{\Pi}_{l}^{-\theta}\hat{P}_{l}^{-\theta} & =\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\hat{P}_{l}^{-\theta}\hat{\Pi}_{k}^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\hat{P}_{l}^{-\theta}\hat{\Pi}_{l}^{-\theta} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\hat{P}_{k}^{-\theta}\hat{\Pi}_{l}^{-\theta}
\end{aligned}
$$


Substituting,

$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}= & \left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{y}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}= & \left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{y}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{l}\hat{W}_{l}^{-1}\right)^{-\theta}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\hat{W}_{l}^{-1}\right)^{-\theta} & =\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\left(\hat{y}_{l}\hat{W}_{l}^{-1}\right)^{-\theta}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\hat{W}_{l}^{-1}\right)^{-\theta} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\hat{W}^{-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


Multiplying both sides by $\hat{W}^{-\theta}$, and applying the definition $\hat{\chi}=\hat{W}^{-\theta}$,


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\hat{\chi}^{-1}= & \left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{y}_{i}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\hat{\chi}^{-1}\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\hat{\chi}^{-1}= & \left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{y}_{i}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{l}\right)^{-\theta}\hat{\chi}_{l}^{-1}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\right)^{-\theta}\hat{\chi}_{l}^{-1} & =\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\left(\hat{y}_{l}\right)^{-\theta}\hat{\chi}_{l}^{-1}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\right)^{-\theta}\hat{\chi}_{l}^{-1} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


Simplifying,


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}= & \hat{\chi}\left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{y}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}= & \hat{\chi}\left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{y}_{i}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\frac{\hat{\chi}}{\hat{\chi}_{l}}\right)\left(\hat{y}_{l}\right)^{-\theta}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\right)^{-\theta} & =\hat{\chi}_{l}\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\left(\hat{y}_{l}\right)^{-\theta}\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\left(\hat{y}_{l}\right)^{-\theta}\hat{\chi}_{l}^{-1} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


Simplifying on the LHS and isolating the $i$ specific terms on the second summand on the RHS,


$$
\begin{aligned}
\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}= & \hat{\chi}\left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{y}_{i}\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{\theta}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{i}\hat{l}_{i}^{\beta-1}\right)^{-\theta}= & \hat{\chi}\left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{y}_{i}\left(\hat{l}_{i}^{\alpha+1}\hat{y}_{i}^{-\frac{\theta+1}{\theta}}\right)^{\theta}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\left(\frac{\hat{\chi}}{\hat{\chi}_{l}}\right)\left(\hat{y}_{l}\right)^{-\theta}
\end{aligned}
$$


Similarly for foreign locations,

$$
\begin{aligned}
\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{-\theta} & =\hat{\chi}_{l}\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}\left(\hat{y}_{l}\right)^{\theta}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\left(\hat{l}_{k}^{\alpha+1}\hat{y}_{k}^{-\frac{\theta+1}{\theta}}\right)^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\left(\hat{y}_{l}\hat{W}_{l}^{-1}\right)^{-\theta}\hat{\chi}_{l}^{-1} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}\left(\hat{y}_{l}^{-\frac{\theta+1}{\theta}}\right)^{\theta}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\left(\hat{y}_{k}\hat{l}_{k}^{\beta-1}\right)^{-\theta}
\end{aligned}
$$


This system of equation pins down the equilibrium with foreign locations:

$$
\begin{aligned}
\hat{y}_{i}^{1+\theta}\hat{l}_{i}^{-\theta(\alpha+1)}= & \hat{\chi}\left(\frac{E_{i}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{y}_{i}^{1+\theta}\hat{l}_{i}^{\theta(\beta-1)}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ik}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{ik}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\hat{y}_{k}^{1+\theta}\hat{l}_{k}^{-\theta(1+\alpha)}\\
 & +\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{il}}{E_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ik}}\right)\hat{t}_{il}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ik,1},\hat{t}_{ik,m}\right)\hat{y}_{l}^{1+\theta}
\end{aligned}
$$


$$
\begin{aligned}
\hat{y}_{i}^{-\theta}\hat{l}_{i}^{\theta(1-\beta)}= & \hat{\chi}\left(\frac{Y_{i}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{y}_{i}^{-\theta}\hat{l}_{i}^{\theta(\alpha+1)}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(i\right)}\left(\frac{\Xi_{ki}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{ki}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\hat{y}_{k}^{-\theta}\hat{l}_{k}^{\theta(1-\beta)}\\
 & +\hat{\chi}\sum_{l\in\mathcal{F}_{F}\left(i\right)}\left(\frac{\Xi_{li}}{Y_{i}+\sum_{k\in\mathcal{F}\left(i\right)}\Xi_{ki}}\right)\hat{t}_{li}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{ki,1},\hat{t}_{ki,m}\right)\hat{\chi}_{l}^{-1}\hat{y}_{l}^{-\theta}
\end{aligned}
$$


$$
\begin{aligned}
\hat{y}_{l}^{1+\theta} & =\left(\frac{E_{l}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{y}_{l}^{1+\theta}\hat{\chi}_{l}\\
 & +\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{lk}}{E_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{lk}}\right)\hat{t}_{lk}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{lk,1},\hat{t}_{lk,m}\right)\hat{y}_{k}^{1+\theta}\hat{l}_{k}^{-\theta(1+\alpha)}
\end{aligned}
$$


$$
\begin{aligned}
\hat{y}_{l}^{-\theta}\hat{\chi}_{l}^{-1} & =\left(\frac{Y_{l}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{y}_{l}^{-\theta}\\
 & +\hat{\chi}^{-1}\sum_{k\in\mathcal{F}_{D}\left(l\right)}\left(\frac{\Xi_{kl}}{Y_{l}+\sum_{k\in\mathcal{F}_{D}\left(l\right)}\Xi_{kl}}\right)\hat{t}_{kl}^{-\theta}\left(\hat{\Pi},\hat{P},\hat{t}_{kl,1},\hat{t}_{kl,m}\right)\hat{y}_{k}^{-\theta}\hat{l}_{k}^{\theta(1-\beta)}
\end{aligned}
$$


<a id="app:chi_welfare_fixed_routing"></a>

### Derivations for Section [6.2](#sec:decomposition): Counterfactuals with Fixed-Routing

This subsection gives a self-contained description of how a single counterfactual is solved under fixed routing and how the associated welfare change is recovered. The maintained assumptions are: (i) the baseline OD--segment incidence kernel is held fixed throughout the counterfactual; (ii) trade demand is CES with elasticity $\sigma>1$; and (iii) labor is perfectly mobile across locations, so equilibrium welfare is equalized.

#### Fixed routing.

Consider one counterfactual vector of exogenous segment-level free-flow shocks $\{\hat{\bar t}_{k\ell,m}\}$. Let $\rho_{ij}^{k\ell,m}\ge 0$ denote the baseline OD--segment incidence weights, normalized so that

$$
\sum_{(k,\ell),m}\rho_{ij}^{k\ell,m}=1
\qquad\text{for each }(i,j)\text{ with }X_{ij}^0>0.
$$

 Holding these weights fixed is the no-rerouting restriction. Under fixed routing, we define the delivered trade-cost index between origin $i$ and destination $j$ by

<a id="eq:app_chi_tau_level"></a>

$$
\tau_{ij}\;\colonequals\;\prod_{(k,\ell),m} t_{k\ell,m}^{\rho_{ij}^{k\ell,m}},
$$

 so that

<a id="eq:app_chi_tau_hat"></a>

$$
\ln \hat\tau_{ij}
=
\sum_{(k,\ell),m}\rho_{ij}^{k\ell,m}\ln \hat t_{k\ell,m}.
$$

 [Equation](#eq:app_chi_tau_level) is the maintained fixed-routing unit-cost index; with this definition, $\rho_{ij}^{k\ell,m}$ is exactly the marginal incidence elasticity of bilateral trade costs with respect to segment costs.

If congestion is absent, then $\hat t_{k\ell,m}=\hat{\bar t}_{k\ell,m}$ and $\hat\tau_{ij}$ is obtained directly from [Equation](#eq:app_chi_tau_hat). If congestion is present, current OD trade hats imply segment traffic

<a id="eq:app_chi_Xi_hat"></a>

$$
\Xi'_{k\ell,m}
=
\sum_{i=1}^N\sum_{j=1}^N \rho_{ij}^{k\ell,m} X_{ij}^0 \hat X_{ij},
\qquad
\hat\Xi_{k\ell,m}\colonequals \frac{\Xi'_{k\ell,m}}{\Xi_{k\ell,m}^0},
$$

and segment costs satisfy

<a id="eq:app_chi_t_hat"></a>

$$
\hat t_{k\ell,m}
=
\hat{\bar t}_{k\ell,m}\,(\hat\Xi_{k\ell,m})^{\lambda_m}.
$$

 Hence, under fixed routing, the transport block maps current OD trade hats into bilateral trade-cost hats through

$$
\hat X \;\longrightarrow\; \hat\Xi \;\longrightarrow\; \hat t \;\longrightarrow\; \hat\tau.
$$

 When the observed baseline traffic $\Xi_{k\ell,m}^0$ is not exactly reproduced by the baseline decomposition $\sum_{i,j}\rho_{ij}^{k\ell,m}X_{ij}^0$, the denominator in [Equation](#eq:app_chi_Xi_hat) should be replaced by the model-implied baseline traffic so that $\hat\Xi_{k\ell,m}=1$ when $\hat X_{ij}=1$ for all $(i,j)$.

#### Counterfactual equilibrium.

Let $\theta\colonequals \sigma-1>0$. In location $i$, the producer price is

$$
p_i=\frac{w_i}{A_i},
$$

where $w_i$ is the wage and $A_i$ is productivity. Consumers in location $j$ have indirect utility

$$
U_j=\frac{u_j w_j}{P_j},
$$

where $u_j$ is amenity and $P_j$ is the CES price index. Perfect mobility implies welfare equalization,

$$
U_j=W \qquad \forall j,
$$

for some common welfare level $W$.

Bilateral trade flows satisfy the CES demand system

<a id="eq:app_chi_X_level"></a>

$$
X_{ij}
=
\left(\frac{p_i\tau_{ij}}{P_j}\right)^{1-\sigma} E_j,
\qquad
E_j=w_jL_j.
$$

 Using $p_i=w_i/A_i$ and $P_j=u_jw_j/W$, equation [Equation](#eq:app_chi_X_level) becomes

<a id="eq:app_chi_X_level_sub"></a>

$$
X_{ij}
=
W^{1-\sigma}
\left(\frac{A_i u_j}{\tau_{ij}}\right)^{\sigma-1}
w_i^{1-\sigma} w_j^{\sigma} L_j.
$$

 Define

$$
\chi \colonequals W^{1-\sigma}=W^{-\theta}.
$$

 Then [Equation](#eq:app_chi_X_level_sub) can be written as

$$
X_{ij}
=
\chi
\left(\frac{A_i u_j}{\tau_{ij}}\right)^\theta
w_i^{-\theta}w_j^{\theta+1}L_j,
$$

and taking hats gives

<a id="eq:app_chi_X_hat"></a>

$$
\hat X_{ij}
=
\hat\chi
\left(\frac{\hat A_i \hat u_j}{\hat\tau_{ij}}\right)^\theta
\hat w_i^{-\theta}\hat w_j^{\theta+1}\hat L_j.
$$


Goods-market clearing requires local labor income to equal total sales:

$$
w_iL_i=\sum_{j=1}^N X_{ij}.
$$

 Dividing by the corresponding baseline identity $w_i^0L_i^0=\sum_j X_{ij}^0$ yields

<a id="eq:app_chi_sales"></a>

$$
\hat w_i\hat L_i
=
\sum_{j=1}^N s_{ij}^{X,0}\hat X_{ij},
\qquad
s_{ij}^{X,0}\colonequals \frac{X_{ij}^0}{w_i^0L_i^0}.
$$


The CES price index satisfies

$$
P_i^{-\theta}=\sum_{j=1}^N (p_j\tau_{ji})^{-\theta}.
$$

 Its exact hat form is therefore

<a id="eq:app_chi_P_hat"></a>

$$
\hat P_i^{-\theta}
=
\sum_{j=1}^N \pi_{ji}^0\,(\hat p_j\hat\tau_{ji})^{-\theta}
=
\sum_{j=1}^N \pi_{ji}^0
\left(\frac{\hat A_j}{\hat w_j\hat\tau_{ji}}\right)^\theta,
$$

where

$$
\pi_{ji}^0\colonequals \frac{X_{ji}^0}{E_i^0},
\qquad
E_i^0=w_i^0L_i^0,
\qquad
\hat p_j=\frac{\hat w_j}{\hat A_j}.
$$

 Because mobility implies $P_i=u_i w_i/W$, taking hats gives

$$
\hat P_i=\frac{\hat u_i\hat w_i}{\hat W}.
$$

 Rearranging yields

$$
\hat w_i^{-\theta}
=
\hat W^{-\theta}\hat u_i^\theta \hat P_i^{-\theta}.
$$

 Substituting [Equation](#eq:app_chi_P_hat) and using $\hat\chi=\hat W^{-\theta}$ gives the price-index/mobility equation

<a id="eq:app_chi_price_mobility"></a>

$$
\hat w_i^{-\theta}
=
\hat\chi\,\hat u_i^\theta
\sum_{j=1}^N \pi_{ji}^0
\left(\frac{\hat A_j}{\hat w_j\hat\tau_{ji}}\right)^\theta.
$$


To close the system, suppose productivity and amenities satisfy

$$
A_i=\bar A_i L_i^\alpha,
\qquad
u_i=\bar u_i L_i^\beta.
$$

 If the counterfactual changes only trade costs and leaves $(\bar A_i,\bar u_i)$ fixed, then

<a id="eq:app_chi_spillovers"></a>

$$
\hat A_i=\hat L_i^\alpha,
\qquad
\hat u_i=\hat L_i^\beta.
$$

 More generally, with exogenous shifts in fundamentals one would use $\hat A_i=\hat{\bar A}_i\hat L_i^\alpha$ and $\hat u_i=\hat{\bar u}_i\hat L_i^\beta$. Finally, impose the population normalization

<a id="eq:app_chi_pop"></a>

$$
\sum_{i=1}^N \lambda_i \hat L_i=1,
\qquad
\lambda_i\colonequals \frac{L_i^0}{\sum_k L_k^0}.
$$

 Equations [Equation](#eq:app_chi_X_hat), [Equation](#eq:app_chi_sales), [Equation](#eq:app_chi_price_mobility), [Equation](#eq:app_chi_spillovers), and [Equation](#eq:app_chi_pop), together with the fixed-routing transport block [Equation](#eq:app_chi_tau_hat)--[Equation](#eq:app_chi_t_hat), characterize the counterfactual equilibrium.

#### Solving for $\hat\chi$ and recovering welfare.

For the given counterfactual $\{\hat{\bar t}_{k\ell,m}\}$, the routing kernel $\rho_{ij}^{k\ell,m}$ is held fixed throughout. Given a trial value of $\hat\chi$, we solve the inner equilibrium for the implied objects $(\hat w,\hat L,\hat X,\hat\tau)$. When congestion is absent, $\hat\tau$ is computed once from [Equation](#eq:app_chi_tau_hat) and the inner problem reduces to solving [Equation](#eq:app_chi_X_hat), [Equation](#eq:app_chi_sales), [Equation](#eq:app_chi_price_mobility), and [Equation](#eq:app_chi_spillovers). When congestion is present, we iterate between the trade block [Equation](#eq:app_chi_X_hat), [Equation](#eq:app_chi_sales), [Equation](#eq:app_chi_price_mobility), [Equation](#eq:app_chi_spillovers) and the transport block [Equation](#eq:app_chi_Xi_hat)--[Equation](#eq:app_chi_t_hat) until $(\hat X,\hat\tau)$ converge.

This inner solve delivers $\hat L(\hat\chi)$ and therefore the scalar residual

$$
r(\hat\chi)\colonequals \sum_{i=1}^N \lambda_i \hat L_i(\hat\chi)-1.
$$

 The outer problem is one-dimensional: we update $\hat\chi$ with a scalar root finder until $r(\hat\chi)=0$. Once the root is found, the common welfare change follows immediately from the definition of $\chi$:

<a id="eq:app_chi_W_recovery"></a>

$$
\hat\chi=\hat W^{-\theta}
\qquad\Longleftrightarrow\qquad
\hat W=\hat\chi^{-1/\theta}.
$$

 Equivalently, welfare can be recovered from any location as

<a id="eq:app_chi_W_local"></a>

$$
\hat W_i=\frac{\hat u_i\hat w_i}{\hat P_i},
$$

and, at the solution, $\hat W_i$ is constant across $i$ and coincides with $\hat\chi^{-1/\theta}$ up to numerical error.

## Appendix: Data and Additional Results

### Data Appendix

Figure [15](#fig:modeshare_value_by_distance) captures the value share of goods that are transported within the United States by transport mode and distance.


<a id="fig:modeshare_value_by_distance"></a>

> **U.S. Transport Mode Value Shares by Distance**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure plots the observed value share of cargo transported by different modes across various distances in 2018. Multimodal indicates cargo movement that involves more than one mode, including truck, rail, and waterways. Source: Freight Analysis Framework, U.S. Department of Transportation, and authors’ calculations.


<a id="app_sec:rail"></a>

#### Rail Data

Our confidential carload waybills data comes from the Surface Transportation Board. This is a stratified sample of carload waybills for all U.S. rail traffic submitted by those rail carriers terminating 4,500 or more revenue carloads annually, covering 48 states (except Alaska and Hawaii). The waybills data report the origin rail station, destination rail station, and the interchange stations in between that these freight cargo are transported through. The rich geographical information in this confidential data set allows us to study the routing of these commodities through the railroad network. Additionally, this data set also contains commodity-specific information including number of car loads, weight, whether it is a domestic or international shipment, and its inter-modality---primarily indicating if the freight movement involved other transport modes, which is almost entirely containers. The intermodal container rail traffic is the fastest growing segment of rail traffic, having grown by more than 5 times between 1984 and 2019 (Figure [16](#fig:rail_intermodal)).


<a id="fig:rail_intermodal"></a>

> **Intermodal Container Rail Traffic, 1984-2019**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure plots the observed levels of intermodal rail cargo from 1984 to 2019. Source: Confidential Carload Waybill, Surface Transportation Board, and authors’ calculations.


<a id="app_sec:road"></a>

#### Road Data

We follow Allen and Arkolakis ([2022](#ref-AA_2022restud)) for the construction of road traffic flows data. We summarize their procedure in three steps: First, they create a sparse graph representation of the underlying road network by collapsing the high-dimensional geo-spatial information contained in the original shapefiles and only preserving nodes that are either endpoints or intersections. Furthermore, core-based statistical areas (CBSAs) are represented by a singular node along the network. Their resulting graph consists of 228 nodes and 704 edges. Second, they construct a weighted graph by including traffic data. To do so they obtain the average annual daily traffic from the 2012 Highway Performance Monitoring System (HPMS) dataset by the Federal Highway Administration and allocate it to individual links by constructing a length-weighted average of the annual daily traffic.

<a id="app_sec:ports"></a>

#### Ports

While we include the top container ports in the U.S. in our analysis, we merge some of these ports into the one polygon due to the U.S.ACE-provided polygons either overlapping or being very close to each other. Specifically, Tacoma + Seattle are merged into a single polygon due to their port alliance (NWSA). Additionally, Tacoma and Seattle share a port alliance. Tampa + Manatee were merged do to overlap issues between the rather large Tampa region and the manually applied Manatee port statistical area. Los Angeles and Long Beach are also merged due to proximity. Lastly, we include Chester in the Philadelphia PSA because the U.S.ACE-provided polygon area includes Chester. Between the 28 coastal and inland ports, we capture 98 percent of total U.S. container volumes.

<a id="app_sec:ais"></a>

#### Automatic Identification System (AIS) Vessel Traffic Data

We utilize automatic identification system (AIS) vessel traffic data from Marine Cadastre, a joint initiative between the Bureau of Ocean Energy Management and the National Oceanic and Atmospheric Administration. Here we highlight two examples to show how we capture these ships and the time they spend at a port. Panel (A) Figure [17](#fig:ship_port) shows the path of containership CMA CGM Christophe Colomb as it enters the Port of Los Angeles (LA) on May 2, 2022. It is a containership with a cargo capacity of 86,100 tons (13,800 twenty-foot equivalent unit containers (TEUs)) and is operated by container shipping company CMA CGM. Panel (B) Figure [17](#fig:ship_port) shows the path of containership Guthorm Maersk entering and leaving the Port of Newark. Guthorm Maersk is a containership with a cargo capacity of 57,000 tons (11,000 TEUs) and is operated by container shipping company Maersk. The ship path entering the port is highlighted in the figure and the redder color indicates slower speed. The darker region of both figures indicate the port polygon for both ports as defined by the U.S. Army Corps of Engineers.


<a id="fig:ship_port"></a>

> **(b) Port of Newark**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: Panel (a) shows the containership CMA CGM Christophe Colomb at the Port of Los Angeles while Panel (b) shows the containership Guthorm Maersk at the Port of Newark. The path of each ship to and from the port shows its exact travel path. The darker regions at each port shows the port polygons as defined by the U.S. Army Corps of Engineers.


<a id="sec:match_rail_msa"></a>

#### Matching Rail Traffic Data to Metropolitan Statistical Area (MSAs)

Using 1999 Metropolitan Statistical Area (MSA) polygons from the Census Bureau, we match the rail stations from the Waybill data to the 228 MSAs in Duranton and Turner ([2011](#ref-duranton2011fundamental)). By rail destination, we observe 224 MSAs and by origin we observe 223 MSAs. Since some of these unobserved MSAs overlap, we have 7 MSAs. We conduct our analysis on the remaining 221 MSAs, so that both the origin and destination results are comparable. The 7 MSAs that we do not have rail traffic for Daytona Beach FL, Fort Myers-Cape Coral FL, Fort Walton Beach FL, New Haven-Bridgeport-Stamford-Waterbury-Danbury CT, Providence-Warwick-Pawtucket RI, Punta Gorda FL, and Santa Fe NM.

To match the MSA-level truck vehicle-kilometers traveled (VKT) measure in Duranton and Turner ([2011](#ref-duranton2011fundamental)), we calculate the rail equivalent in two ways. First, we utilize the number of rail carloads, transported in and out of MSAs, multiplied by the weighted average of their distance traveled. We call this railcar-kilometers-traveled (rail VKT) and distinguish by destination for rail shipments transported into these MSAs, and by origin for shipments transported out of these MSAs. We also observe the weight of these rail shipments and can calculate rail weight VKT using the same method outlined previously.

<a id="ap_sec:rail_dwell"></a>

#### Rail Dwell Times Data

We obtain weekly rail station dwell times from the Surface Transportation Board (STB). Railroads provide the STB with the average time a railcar resides at a station, measured in hours, for their 10 largest stations in terms of railcars processed. This dwell time measure excludes cars on through trains---trains that travels without stops en route. Since this dataset only captures a subset of all rail stations (albeit the largest ones), we match the ports in the previous section to their local rail stations. We do this by expanding the port polygon areas in 50km intervals. The rail stations that are captured in the buffer areas of their closest port is be considered a rail station in the vicinity of this port and is likely to service traffic to and from the port. Due to their proximity, The ports of Los Angeles and Long Beach and combined into one port for this exercise. We use a buffer area of 150km which captures 7 ports and 12 rail stations. We test the robustness of this buffer area by increasing the interval in our analysis to 200km where we capture 8 ports and 14 rail stations. Further increases to this interval result in more muted responses of rail station dwell times to port traffic, as these rail stations are much further away.

Additionally, the rail dwell times dataset is reported at the weekly level. In order to match this to our daily port traffic measure for analysis, we aggregate our port traffic measure up to the weekly level. We start our week on a Monday since we observe in our data that most ships tend to enter a port on Mondays.

#### Summary Statistics

Figure [18](#fig:rail_dwell) plots the average of rail station dwell times from June 2015 to December 2021. The average dwell time over this period is around 25.5 hours per station with a standard deviation of 2.5 hours. However, there is also a large decrease in dwell times around the start of the pandemic followed up a steep increase afterwards.


<a id="fig:rail_dwell"></a>

> **Rail Station Dwell Times**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure plots the average time a railcar spends at a rail station from June 2015 to July 2022.


<a id="Online_Appendix:Regression_Design"></a>

### Regression design for Modal Substitution (Subsection [4.1](#subsec:modal_sub))

We are interested in deriving a regression that studies the impact of changes in the transport network on the modal mix in order to identify the elasticity of substitution between modes. In Subsection [4.1](#subsec:modal_sub) we examine the results of a regression that examines location (i.e. MSA) specific outcomes as a function of local changes in the primary network. Conceptually, the regression can be seen understood to be of the following form:


<a id="eq:deriv_regression_toy"></a>

$$
d\ln Y_{k}=\alpha+\beta\times d\ln\bar{t}_{k,1}+\epsilon_{kk,1}
$$

where $Y_{k}$ refers to a local outcome (primary network traffic, or the ratio between primary and non-primary traffic) in a MSA located at node $k$ and $d\ln\bar{t}_{k}$ refers to changes in transportation cost of the localized primary network.In what follows we motivate this regression by deriving a structural interpretation. In what follows, we will make an additional assumption that there exists some localized primary network fully contained within the MSA that any unimodal route originating or terminating in $k$ needs to transition through before accessing the national primary road network. Let this localized network be represented by the transportation cost $\bar{t}_{k}$. In order to derive the regression we start by examining modal traffic ([Equation](#eq:traffic_modal)), which we restate here for convenience,


$$
\Xi_{kl,m}=t_{kl,m}^{-\eta}\times t_{kl}^{\eta-\theta}\times P_{k}^{-\theta}\times\Pi_{l}^{-\theta}
$$

where we can characterize total outgoing traffic on the primary and non-primary network as,


$$
\Xi_{kk,1}=P_{k}^{-\theta}\times t_{k,1}^{-\eta}\times\sum_{l\in\mathscr{F}_{1}(k)}t_{kl,1}^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}
$$


$$
\Xi_{kk,m}=P_{k}^{-\theta}\times s_{kk,m}^{-\eta}\times\sum_{l\in\mathscr{F}_{m}(k)}\left(\tau_{kl,m}s_{ll,m}\right)^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}
$$


Totally differentiating with respect to the change in local transport cost on the primary network,


<a id="eq:deriv_regression_primary_mode"></a>

$$
d\ln\Xi_{kk,1}=-\theta d\ln P_{k}-\eta d\ln t_{k,1}+d\ln\left(\sum_{l\in\mathscr{F}_{1}(k)}t_{kl,1}^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}\right)
$$

where this capture the impact of highway changes on highway traffic, plus market access changes


$$
d\ln\Xi_{kk,m}=-\theta d\ln P_{k}+d\ln\left(\sum_{l\in\mathscr{F}_{m}(k)}\left(s_{kk,m}\tau_{kl,m}s_{ll,m}\right)^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}\right)
$$

 which expresses changes in modal traffic as a function of the local price index $(d\ln P_{k})$, changes in local transport cost, either for the primary mode $(d\ln t_{k,1})$, and a final summation term that captures changes in mode-specific market access. While we could in principle regress directly on primary mode traffic as in [Equation](#eq:deriv_regression_primary_mode), the obvious challenge would be the confounding impact of changes in the local price index which will be affected by the local network changes. Instead, we propose to form the ratio between primary and non-primary modal traffic to difference out the local price index. Forming this ratio and taking the total differential, we obtain,


<a id="eq:deriv_regression_ratio"></a>

$$
d\ln\frac{\Xi_{kk,1}}{\Xi_{kk,m}}=-\eta d\ln t_{k,1}+d\ln\left(\sum_{l\in\mathscr{F}_{1}(k)}\frac{t_{kl,1}^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}}{\sum_{l\in\mathscr{F}_{m}(k)}\left(s_{kk,m}\tau_{kl,m}s_{ll,m}\right)^{-\eta}\times t_{kl}^{\eta-\theta}\times\Pi_{l}^{-\theta}}\right)
$$

where instead now the only confounder is the final summation term that summarizes changes in the relative mode-specific market access. Lining this up with the initial motivating regression design ([Equation](#eq:deriv_regression_toy)), we can see that the coefficient identifies the modal elasticity of substitution $(\beta=\eta)$, while the identifying restriction is that the instrument needs to be orthogonal to changes in the relative mode-specific market access.

### Elasticity of Modal Substitution: Additional Results

Since we have a slightly smaller set of MSAs due to the matching process between MSAs and our rail traffic data (see Section [9.1.5](#sec:match_rail_msa) for more information), we first show that we are able to replicate the truck traffic use results from Duranton and Turner ([2011](#ref-duranton2011fundamental)) in [Table](#tab:DT_replicate) (first stage results are in [Table](#tab:DT_replicate_first)). [Table](#tab:iv_carload_dist by TOT) presents the rail traffic use results while [Table](#tab:iv_modalsub_weight by TOT) presents the alternative weight-based measure of the relative truck to rail traffic use. [Table](#tab:iv_modalsub_robust) presents additional robustness checks on our baseline results.

<a id="tab:DT_replicate"></a>

> **Elasticity of Truck Traffic Use with respect to Road Infrastructure Improvements**

------------------------------- --------- --------- --------- --------- ---------
                                    \(1\)     \(2\)     \(3\)     \(4\)     \(5\)
  Truck Traffic Use                  OLS       OLS       IV        IV        IV
  Interstate Highway Lane KM        1.606     1.616     1.746     2.083     2.099
                                   (0.328)   (0.338)   (0.427)   (0.483)   (0.530)
  Population                                  0.967    -0.278    -0.615    -0.484
                                             (0.550)   (0.303)   (0.376)   (0.393)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  MSA FE
  Year FE
  Observations                       663       663       663       663       663
  R-squared                         0.77      0.78      0.49      0.49      0.51
  KP F-stat                                             13.48     10.08     10.02
  ------------------------------- --------- --------- --------- --------- ---------

<a id="tab:DT_replicate_first"></a>

> **First Stage**

------------------------------- ---------- ---------- ----------
                                    \(1\)      \(2\)      \(3\)
  1898 Railroads                    0.0879     0.0939     0.119
                                   (0.0460)   (0.0499)   (0.0474)
  1947 Planned Interstates          0.156      0.127      0.114
                                   (0.0332)   (0.0322)   (0.0284)
  1835 Exploration Routes           0.0249     0.0268     0.0222
                                   (0.0117)   (0.0124)   (0.0122)
  Population                        0.516      0.599      0.545
                                   (0.0393)   (0.0481)   (0.0597)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  Year FE
  Observations                       663        663        663
  KP F-stat                         13.48      10.08      10.02
  ------------------------------- ---------- ---------- ----------

<a id="tab:iv_carload_dist by TOT"></a>

> **Elasticity of Rail Traffic Use with respect to Road Infrastructure Improvements**

------------------------------- --------- --------- --------- --------- ---------
                                    \(1\)     \(2\)     \(3\)     \(4\)     \(5\)
  Rail Traffic Use                   OLS       OLS       IV        IV        IV
  Interstate Highway Lane KM       -0.103    -0.0993    0.434     0.254     0.401
                                   (0.173)   (0.175)   (0.314)   (0.337)   (0.315)
  Population                                  0.346     0.695     0.878     0.757
                                             (0.299)   (0.245)   (0.286)   (0.273)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  MSA FE
  Year FE
  Observations                       663       663       663       663       663
  R-squared                         0.94      0.94      0.39      0.55      0.57
  KP F-stat                                             13.48     10.08     10.02
  ------------------------------- --------- --------- --------- --------- ---------

<a id="tab:iv_modalsub_weight by TOT"></a>

> **Elasticity of Modal Substitution using Weight-Based Measure: Ratio of Rail to Truck Traffic Use with respect to Road Infrastructure Improvements**

------------------------------- --------- --------- --------- --------- ---------
                                    \(1\)     \(2\)     \(3\)     \(4\)     \(5\)
                                     OLS       OLS       IV        IV        IV
  Interstate Highway Lane KM       -1.473    -1.472    -0.930    -1.373    -1.203
                                   (0.171)   (0.172)   (0.392)   (0.403)   (0.382)
  Population                                 -0.101     0.524     1.012     0.774
                                             (0.308)   (0.297)   (0.338)   (0.316)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  MSA FE
  Year FE
  Observations                       658       658       658       658       658
  R-squared                         0.89      0.89      -0.03     0.23      0.28
  KP F-stat                                             14.48     10.76     10.04
  ------------------------------- --------- --------- --------- --------- ---------

<a id="tab:iv_modalsub_robust"></a>

> **Elasticity of Modal Substitution: Robustness Checks**

------------------------------- --------- ---------- ---------- ---------- ---------- --------- ---------
                                    \(1\)     \(2\)      \(3\)      \(4\)      \(5\)      \(6\)     \(7\)
  Rail to Truck Traffic Use          IV         IV         IV         IV         IV        IV        IV
  Interstate Highway Lane KM       -1.099     -0.999     -1.220     -1.019     -1.283    -1.593    -1.703
                                   (0.364)   (0.405)    (0.444)    (0.430)    (0.462)    (0.528)   (0.543)
  Population                        0.891     1.145      1.000      0.973      0.789      1.267     1.155
                                   (0.306)   (0.336)    (0.367)    (0.352)    (0.376)    (0.434)   (0.443)
  Geography
  Census Divisions
  Socioeconomic Characteristics
  MSA FE
  Year FE
  Rail Measure                     Carload   Carload    Carload     Weight     Weight    Carload   Weight
  Without 1898 Rail IV
  Data                              Total    Incoming   Outgoing   Incoming   Outgoing    Total     Total
  Observations                       658       658        658        658        658        658       658
  R-squared                         0.27       0.24       0.31       0.21       0.34      0.20      0.20
  KP F-stat                         10.04     10.04      10.04      10.04      10.04      14.25     14.25
  ------------------------------- --------- ---------- ---------- ---------- ---------- --------- ---------

<a id="appendix:intermodal_estim"></a>

### Estimation of Intermodal Terminal Congestion: Additional Results

Figure [19](#fig:iv_balancetest) presents a scatter plot between our residualized port trade exposure instrument and a proxy for unobserved determinants of ship dwell times---the annual number of container cranes at ports. The noisy relationship supports the validity of our identification strategy, suggesting that our instrument is unlikely to be systematically related to endogenous, time-varying port investments aimed at particular ships.


<a id="fig:iv_balancetest"></a>

> **Residualized Plot of Container Cranes and Port Trade Exposure Instrument**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure plots the binned scatter plot and correlation between the residualized annual number of container cranes and port trade exposure instrument. The binned scatter plot is at the port-year level with 708 observations. Robust standard errors are clustered at the port-level.


[Table](#tab:dwelltimes_iv_robust) presents robustness checks on our baseline results in [Table](#tab:dwelltimes_iv).

<a id="tab:dwelltimes_iv_robust"></a>

> **Congestion Elasticity of Port Traffic with respect to Ship Dwell Times: Robustness Checks**

--------------------------------------- --------- --------- --------- --------- ---------
                                            \(1\)     \(2\)     \(3\)     \(4\)     \(5\)
                                             OLS       OLS       IV        IV        IV
  Port Traffic                              0.229               1.111     0.208     0.272
                                           (0.023)             (0.511)   (0.114)   (0.163)
  Port Traffic $\times$ Before Mar 2020               0.091
                                                     (0.011)
  Port Traffic $\times$ After Mar 2020                0.120
                                                     (0.012)
  Day-Month-Year FE
  Port-Year FE
  Ship-Port FE
  March 2020 Period                                                      Before     After
  West Coast Ports
  Observations                              22367     90516     22367     69917     20084
  First Stage KP-F                                              10.01    143.42    176.34
  --------------------------------------- --------- --------- --------- --------- ---------

[Table](#tab:ave_all) presents the OLS regression from [Equation](#eq:congestion) using shorter periods of moving averages for port traffic. With shorter periods of moving averages, the ship dwell times is still positively correlated with the average tonnage at the port but the magnitudes of the coefficients are smaller.

<a id="tab:ave_all"></a>

> **Ship Dwell Times and Port Traffic by Time Aggregations**

----------------------- ---------- ----------- ---------- -----------
                            \(1\)       \(2\)      \(3\)       \(4\)
  Port Traffic              0.0995     0.0800      0.0540     0.0246
                           (0.0104)   (0.00850)   (0.0151)   (0.00692)
  Day-Month-Year FE
  Port-Year FE
  Ship-PortFE
  Moving Average (Days)       28         21          14          7
  Observations              90516       90516      90515       90492
  $R^{2}$                    0.77       0.77        0.77       0.77
  F                         92.19       88.54      12.82       12.68
  ----------------------- ---------- ----------- ---------- -----------

<a id="subsec:rail_congestion"></a>

### Rail Intermodal Terminal Congestion and Port Traffic

In this subsection, we study how port congestion can impact the multimodal network. In particular, we focus on how port traffic affects the amount of time a rail car spends at the rail station that is local to that port. We estimate the following regression (Columns (3) and (4), [Table](#tab:rail_dwell)):


$$
\ln \text{Rail Dwell Time}_{rpwy}=\beta_2 \ln \text {Port Traffic}_{pwy} +\gamma_{wy}+\phi_{rp}+\epsilon_{rpwy}
$$

where $\text{Rail Dwell Time}_{rpwy}$ is the average number of hours a rail car spends at a rail station $r$ that is in the vicinity of port $p$ during week $w$ in year $y$, $\text{Port Traffic}_{pwy}$ is the average amount of port traffic at port $p$ for that same week $w$ in year $y$,[^46] Port traffic is measured in both net tons of ships as in our congestion elasticity approach, as well as the number of ships. $\gamma_{wy}$ is week-year fixed effects, and $\phi_{rp}$ is rail station-port fixed effects. The key parameter of interest, $\beta_2$, captures the link between rail dwell times and its nearest port traffic. Standard errors are clustered at the port level.

The week-year fixed effects control for aggregate events that affects all rail stations. The rail-port fixed effects control for fixed characteristics at the rail-port level. These include time-invariant comparative advantage differences across ports that result in larger capacity trains servicing the rail stations close to these ports which mechanically take longer time to unload. It also includes fixed rail station characteristics and fixed port characteristics that take into account their geography. In order to match the local rail stations in our rail dwell times dataset to ports, we extend the port areas in order to capture nearby rail stations. The buffer area we used in our baseline result is 150km which captures 6 ports and 11 rail stations. This small set of stations and ports is due to data restrictions from the rail dwell times dataset. The rail companies are only required to report the dwell times for the top 10 largest of their rail stations, and these rail stations sometimes overlap in geographic location.

We find that a one percent increase in port traffic, measured in average net tonnage, is correlated with a statistically significant increase in rail dwell times by 0.05 percent (Column (3), [Table](#tab:rail_dwell)). This elasticity is robust to specifications with rail station fixed effects and port fixed effects separately (Column (1), [Table](#tab:rail_dwell)). This elasticity is also robust to an alternative measures of port traffic by using the average number of ships (Columns (4) and (2), [Table](#tab:rail_dwell)).

As a robustness check, we extend the buffer area around the ports to 200km which captures 9 ports and 16 rail stations. We find that our estimate has the same sign and is within one standard error of our baseline estimate (Column (5), [Table](#tab:rail_dwell)). However, the magnitude of this estimate is smaller and noisy, due to the impact of port traffic being more muted on rail stations that are further away. Subsequent increases to the buffer area correspondingly result in even smaller estimates. Due to the small sample size, we are unable causally identify the multimodal impact of port traffic on rail dwell times, but we are able to show that there are statistically significant and positive correlations between the two.

<a id="tab:rail_dwell"></a>

> **Link between Rail Dwell Times and Nearest Port Traffic**

--------------------------------- ---------- ---------- ---------- ---------- ----------
                                      \(1\)      \(2\)      \(3\)      \(4\)      \(5\)
  Nearest Port Traffic (Net Tons)     0.0457                0.0457                0.0282
                                     (0.0152)              (0.0152)              (0.0196)
  Nearest Port Traffic (Ships)                   0.0372                0.0372
                                                (0.0143)              (0.0143)
  Port Buffer Area                    150km      150km      150km      150km      200km
  Week-Month-Year FE
  Rail Station-Port FE
  Rail Station FE
  Observations                         3327       3327       3327       3327       4316
  $R^{2}$                              0.80       0.80       0.80       0.80       0.79
  F                                    9.08       6.80       9.08       6.80       2.06
  --------------------------------- ---------- ---------- ---------- ---------- ----------

**Notes:** Robust standard errors in parentheses are two way clustered by port and rail station. All variables are in logs. Local rail stations are determined by a 150km or 200km buffer area around the ports as described in Appendix Section [9.1.6](#ap_sec:rail_dwell).

### Model Fit: Additional Results

This section presents further results that evaluate our model's ability in representing actual observed trade flows in the data across various transport modes. [Table](#tab:validation) reports the univariate regressions between residualized observed trade flows and residualized model-predicted trade flows at both the aggregate and mode-specific levels (Columns (1) and (2) respectively). Columns (3) and (4) in [Table](#tab:validation) demonstrates the gravity model implications our model by comparing the negative relationship between residualized observed trade and distance versus residualized model-predicted trade and distance.

<a id="tab:validation"></a>

> **Model Fit**

------------------------------------------ ----------------------------- ----------------------------- ----------------------------- ------------------------------
                                                         \(1\)                         \(2\)                         \(3\)                         \(4\)
                                              Residualized Observed Trade   Residualized Observed Trade   Residualized Observed Trade   Residualized Predicted Trade
  Residualized Predicted Trade                           1.22
                                                        (0.03)
  Residualized Predicted Trade for Truck                                               1.20
                                                                                      (0.03)
  Residualized Predicted Trade for Rail                                                1.34
                                                                                      (0.07)
  Residualized Predicted Trade for Barges                                              1.02
                                                                                      (0.26)
  Residualized Route Distance                                                                                        -1.15                         -0.61
                                                                                                                    (0.07)                         (0.02)
  Conditional on origin and destination FE
  Observations                                           14514                         14514                         14467                         14467
  $R^{2}$                                                0.62                          0.62                          0.60                           0.41
  F                                                     1524.65                       521.92                        314.11                         671.98
  ------------------------------------------ ----------------------------- ----------------------------- ----------------------------- ------------------------------

### Gains from Improving Intermodal Terminals Counterfactuals: Additional Results

[Table](#tab:ranking_long) presents the top 30 list of intermodal terminals with the highest welfare impacts from lowering the transshipment cost in each terminal by 1 percent. Figure [20](#fig:welfare_congestion_comp_all) is a scatter plot comparing the welfare impacts from a 1 percent transshipment cost decrease at each terminal with and without congestion effects.

<a id="tab:ranking_long"></a>

> **Top 30 Ranking: Welfare Benefits of Improving Intermodal Terminals**

---- ---------------------------------------------------- ------------------ ----------------- ------------------ ----------- --------------------- ------------------
                         \(1\) CBSA Name                     \(2\) Population   \(3\) Terminals   \(4\) Throughput   \(5\) ROI   \(6\) Benefit (\$m)   \(7\) Cost (\$m)
   1           Chicago-Joliet-Naperville, IL-IN-WI               9368268              88              10368684         3.730            3851                 814
   2           Los Angeles-Long Beach-Santa Ana, CA              9639715              38              6836640          3.039            2168                 537
   3              Houston-Sugar Land-Baytown, TX                 3133212              27               630300         24.782            1086                  42
   4           Riverside-San Bernardino-Ontario, CA              2173638              14               761760         10.999             942                  79
   5            Atlanta-Sandy Springs-Marietta, GA               1627623              28              1830840          4.643             811                 144
   6                       Lebanon, PA                            655561               1               793920         10.194             698                  62
   7                     Jacksonville, FL                         936317              18               797880         17.252             689                  38
   8                    Kansas City, MO-KS                       1767872              55              1088760          5.335             510                  81
   9           Portland-Vancouver-Hillsboro, OR-WA               1641801              30               424296         16.349             492                  28
   10               Detroit-Warren-Livonia, MI                   2732964              31               557760         11.799             463                  36
   11                   Memphis, TN-MS-AR                         997862              28              1416120          3.722             457                  97
   12          Charlotte-Gastonia-Rock Hill, NC-SC               1502267              20               352440         13.404             399                  28
   13              Denver-Aurora-Broomfield, CO                  2252276              19               248964         18.907             389                  20
   14   New York-Northern New Jersey-Long Island, NY-NJ-PA       14745610             29              1493556          2.160             371                 117
   15                      Savannah, GA                           250934               9               381840         10.908             357                  30
   16            Dallas-Fort Worth-Arlington, TX                 4513776              13              1692480          1.608             347                 133
   17            Cincinnati-Middletown, OH-KY-IN                 1744673              23               257160         15.447             332                  20
   18              Shreveport-Bossier City, LA                    282413               4               390120         11.469             325                  26
   19                 Birmingham-Hoover, AL                       702669              23               395880          9.277             319                  31
   20           Allentown-Bethlehem-Easton, PA-NJ                 891373               2               161760         21.166             282                  13
   21                    St. Louis, MO-IL                        1901086              38               592320          5.287             249                  40
   22      Charleston-North Charleston-Summerville, SC            480101               9               143400         26.965             233                  8
   23               Buffalo-Niagara Falls, NY                    1150833              17               126600         15.004             221                  14
   24           San Francisco-Oakland-Fremont, CA                3863536              14               312936          1.233             215                  96
   25              Cleveland-Elyria-Mentor, OH                   2175988              23               430440          5.305             213                  34
   26                  Baltimore-Towson, MD                       684543              16               145776         16.236             197                  11
   27                      Syracuse, NY                           664647               2               107040         29.231             196                  6
   28           Louisville/Jefferson County, KY-IN               1308587              20               185760         11.877             188                  15
   29                       Laredo, TX                            265111               3               130920         17.008             185                  10
   30                      Stockton, CA                           901910              11               864960          1.574             175                  68
  ---- ---------------------------------------------------- ------------------ ----------------- ------------------ ----------- --------------------- ------------------

**Notes:** The table shows the thirty terminals where a one percent reduction of the switching cost generates the highest benefit. Column (1) indicates the core based statistical areas (CBSA) name of the node, which includes both metropolitan and micropolitan areas. The terminal's population, number of terminals, and rail throughput in TEUs are reported in Columns (2), (3), and (4) respectively. Column (5) shows the imputed return on investment (ROI), Column (6) calculates how much 2012 U.S. GDP would need to increase in order to match the overall welfare gain, while Column (7) presents the required cost of making this one percent cost decrease.


<a id="fig:welfare_congestion_comp_all"></a>

> **Welfare Benefits with and without Congestion**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure presents a comparison of the welfare impacts from a 1 percent transshipment cost decrease at each terminal with and without congestion effects. See Figure 8 for the same comparison for the top 20 most impactful terminals.


### Channel Decomposition Using Highway System Improvements: Additional Results

Figure [21](#fig:welfare_comp_road_all) shows the welfare effects of a one percent reduction in transport costs on each U.S. highway link and decomposes the underlying mechanisms by comparing the full multimodal model to counterfactual specifications that sequentially shut down road and terminal congestion (yellow), modal substitution (purple), terminal congestion only (green), endogenous routing (brown), and externalities (blue).


<a id="fig:welfare_comp_road_all"></a>

> **Joint Decomposition of Main Channels: Welfare Effects of Highway Improvements**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure reports the welfare effects of a 1% reduction in transport costs on each link of the U.S. highway segment and decomposes the main mechanisms in the model. The red line represents the full multimodal model, which includes road and terminal congestion, productivity and amenity spillovers (Hulten effects), multiple transport modes, and endogenous routing. Each of the other 5 lines shuts down one channel at a time: road and terminal congestion (yellow), modal substitution (unimodal road-only network, purple), terminal congestion only (green), endogenous routing (fixed routing, brown), and externalities (blue). The legend in each panel reports the weighted average welfare effect for each specification, with weights given by the GDP of origin and destination nodes of each link). The percentage in parentheses indicates the difference relative to the full multimodal model. For example, abstracting from congestion increases the average estimated welfare gain by 85.1% relative to the full model.


<a id="fig:welfare_comp_road_termcongest"></a>

> **Decomposition of Main Channels: Welfare Effects of Highway Improvements with and without Terminal Congestion**
>
> Figure available in the [PDF](/research/Multimodal_FW_compressed-compressed.pdf).
>
> Notes: This figure reports the welfare effects of a 1% reduction in transport costs on each link of the U.S. highway segment and decomposes the main mechanisms in the model. The highway system consists of 704 links in total, each corresponding to a separate counterfactual. Each model specification evaluates the same set of 704 link‑level counterfactuals. The red line represents the full multimodal model, which includes road and terminal congestion, productivity and amenity spillovers (Hulten effects), multiple transport modes, and endogenous routing. The green line represents a specification that shuts down terminal congestion. The legend in each panel reports the weighted average welfare effect for each specification, with weights given by the GDP of origin and destination nodes of each link). The percentage in parentheses indicates the difference relative to the full multimodal model: abstracting from terminal congestion increases the average estimated welfare gain by 12% relative to the full model. Figure 21 presents all decomposition results jointly in a single figure.


## References

<a id="ref-akbar2023fast"></a>

Akbar, Prottoy A, Victor Couture, Gilles Duranton, and Adam Storeygard. 2023. *The Fast, the Slow, and the Congested: Urban Transportation in Rich and Poor Countries*. National Bureau of Economic Research.

<a id="ref-albouy2018metropolitan"></a>

Albouy, David, Gabriel Ehrlich, and Minchul Shin. 2018. "Metropolitan Land Values." *Review of Economics and Statistics* 100 (3): 454--66.

<a id="ref-aa_2014qje"></a>

Allen, Treb, and Costas Arkolakis. 2014. "Trade and the Topography of the Spatial Economy." *The Quarterly Journal of Economics* 129 (3): 1085--140. <https://ideas.repec.org/a/oup/qjecon/v129y2014i3p1085-1140.html>.

<a id="ref-AA_2022restud"></a>

Allen, Treb, and Costas Arkolakis. 2022. "The Welfare Effects of Transportation Infrastructure Improvements." *The Review of Economic Studies*, ahead of print, February. <https://doi.org/10.1093/restud/rdac001>.

<a id="ref-allen2025quantitative"></a>

Allen, Treb, and Costas Arkolakis. 2025. *Quantitative Regional Economics*. National Bureau of Economic Research Working Paper.

<a id="ref-allen2025evaluating"></a>

Allen, Treb, Simon Fuchs, and Woan Foong Wong. 2025. *Evaluating Transportation Improvements Quantitatively: A Primer*.

<a id="ref-almagro2024optimal"></a>

Almagro, Milena, Felipe Barbieri, Juan Camilo Castillo, Nathaniel G Hickok, and Tobias Salz. 2024. *Optimal Urban Transportation Policy: Evidence from Chicago*. National Bureau of Economic Research.

<a id="ref-10.1257/000282803321455214"></a>

Anderson, James E., and Eric van Wincoop. 2003. "Gravity with Gravitas: A Solution to the Border Puzzle." *American Economic Review* 93 (1): 170--92. <https://doi.org/10.1257/000282803321455214>.

<a id="ref-Antras2020-yp"></a>

Antràs, Pol, and Alonso Gortari. 2020. "On the Geography of Global Value Chains." *Econometrica* 88 (4): 1553--98.

<a id="ref-asturias2020endogenous"></a>

Asturias, Jose. 2020. "Endogenous Transportation Costs." *European Economic Review* 123: 103366.

<a id="ref-baum2007did"></a>

Baum-Snow, Nathaniel. 2007. "Did Highways Cause Suburbanization?" *The Quarterly Journal of Economics* 122 (2): 775--805.

<a id="ref-beuthe2014estimating"></a>

Beuthe, Michel, Bart Jourquin, and Natalie Urbain. 2014. "Estimating Freight Transport Price Elasticity in Multi-Mode Studies: A Review and Additional Results from a Multimodal Network Model." *Transport Reviews* 34 (5): 626--44.

<a id="ref-bonadio2021ports"></a>

Bonadio, Barthélémy. 2021. *Ports Vs. Roads: Infrastructure, Market Access and Regional Outcomes*. Working Paper.

<a id="ref-borusyak2025practical"></a>

Borusyak, Kirill, Peter Hull, and Xavier Jaravel. 2025. "A Practical Guide to Shift-Share Instruments." *Journal of Economic Perspectives* 39 (1): 181--204.

<a id="ref-blubook_vol1_v089"></a>

Boyles, Stephen D., Nicholas E. Lownes, and Avinash Unnikrishnan. 2021. *Transportation Network Analysis*. 0.89. Vol. 1.

<a id="ref-brancaccio2017geography"></a>

Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2020. "Geography, Transportation, and Endogenous Trade Costs." *Econometrica* 88 (2): 657--91.

<a id="ref-brancaccio2024investment"></a>

Brancaccio, Giulia, Myrto Kalouptsidi, and Theodore Papageorgiou. 2024. *Investment in Infrastructure and Trade: The Case of Ports*. National Bureau of Economic Research Working Paper.

<a id="ref-brooks2018local"></a>

Brooks, Leah, Nicolas Gendron-Carrier, and Gisela Rua. 2018. "The Local Impact of Containerization." *Finance and Economics Discussion Series* 45.

<a id="ref-carballo2021import"></a>

Carballo, Jeronimo, Alejandro Graziano, Georg Schaur, and Christian Volpe Martincus. 2021. *Import Processing and Trade Costs*. CESifo Working Paper no. 9170.

<a id="ref-CBO2022emissions"></a>

CBO. 2022. *Emissions of Carbon Dioxide in the Transportation Sector*. Congressional Budget Office Publication 58566.

<a id="ref-censustrade"></a>

Census Bureau. 2003-2021. *USA Trade Online*. Https://usatrade.census.gov.

<a id="ref-cosar2017shipping"></a>

Coşar, A Kerem, and Banu Demir. 2018. "Shipping Inside the Box: Containerization and Trade." *Journal of International Economics* 114: 331--45.

<a id="ref-couture2018speed"></a>

Couture, Victor, Gilles Duranton, and Matthew A Turner. 2018. "Speed." *Review of Economics and Statistics* 100 (4): 725--39.

<a id="ref-cristea2013trade"></a>

Cristea, Anca, David Hummels, Laura Puzzello, and Misak Avetisyan. 2013. "Trade and the Greenhouse Gas Emissions from International Freight Transport." *Journal of Environmental Economics and Management* 65 (1): 153--73.

<a id="ref-Daly2006-lp"></a>

Daly, Andrew, and Michel Bierlaire. 2006. "A General and Operational Representation of Generalised Extreme Value Models." *Trans. Res. Part B: Methodol.* 40 (4): 285--305.

<a id="ref-degiovanniyang"></a>

Degiovanni, Pedro, and Ron Yang. 2023. *Economies of Scale and Scope in Railroading*. Working Paper.

<a id="ref-RePEc:nbr:nberwo:13846"></a>

Dekle, Robert, Jonathan Eaton, and Samuel Kortum. 2008. *Global Rebalancing with Gravity: Measuring the Burden of Adjustment*. NBER Working Papers No. 13846. National Bureau of Economic Research, Inc. <https://ideas.repec.org/p/nbr/nberwo/13846.html>.

<a id="ref-bts_dot"></a>

Department of Transportation. 2017-2024. *Value, Tonnage, and Ton-Miles of Freight by Distance Band*. [Https://www.bts.gov/browse-statistical-products-and-data/freight-facts-and-figures/value-tonnage-and-ton-miles-freight](https://www.bts.gov/browse-statistical-products-and-data/freight-facts-and-figures/value-tonnage-and-ton-miles-freight){.uri}.

<a id="ref-djankov2010trading"></a>

Djankov, Simeon, Caroline Freund, and Cong S Pham. 2010. "Trading on Time." *The Review of Economics and Statistics* 92 (1): 166--73.

<a id="ref-DGWZ_2025transshipment"></a>

Do, Anh D, Sharat Ganapati, Woan Foong Wong, and Oren Ziv. 2025. *Transshipment Hubs, Trade, and Supply Chains*. National Bureau of Economic Research.

<a id="ref-blueprint_decarbon"></a>

DOE, DOT, EPA, and HUD. 2024. *US National Blueprint for Transportation Decarbonatization*. Www.energy.gov/sites/default/files/2023-01/the-us-national-blueprint-for-transportation-decarbonization.pdf.

<a id="ref-DonaldFukuiMiyauchi2026"></a>

Donald, Eric, Masao Fukui, and Yuhei Miyauchi. forthcoming. "Unpacking Aggregate Welfare in a Spatial Economy." *Review of Economic Studies*, Forthcoming forthcoming.

<a id="ref-donaldson2025transport"></a>

Donaldson, Dave. 2025. "Transport Infrastructure and Policy Evaluation." In *Handbook of Regional and Urban Economics*, vol. 6. Elsevier.

<a id="ref-donaldson2016railroads"></a>

Donaldson, Dave, and Richard Hornbeck. 2016. "Railroads and American Economic Growth: A 'Market Access' Approach." *The Quarterly Journal of Economics* 131 (2): 799--858.

<a id="ref-ducruet2020all"></a>

Ducruet, César, Réka Juhász, Dávid Krisztián Nagy, and Claudia Steinwender. 2024. "All Aboard: The Effects of Port Development." *Journal of International Economics* 151: 103963.

<a id="ref-dunn2023navigating"></a>

Dunn, Jason, and Fernando Leibovici. 2023. *Navigating the Waves of Global Shipping: Drivers and Aggregate Implications*. Federal Reserve Bank of St. Louis, Research Division.

<a id="ref-duranton2014roads"></a>

Duranton, Gilles, Peter M Morrow, and Matthew A Turner. 2014. "Roads and Trade: Evidence from the US." *Review of Economic Studies* 81 (2): 681--724.

<a id="ref-duranton2023urban"></a>

Duranton, Gilles, and Diego Puga. 2023. "Urban Growth and Its Aggregate Implications." *Econometrica* 91 (6): 2219--59.

<a id="ref-duranton2011fundamental"></a>

Duranton, Gilles, and Matthew A Turner. 2011. "The Fundamental Law of Road Congestion: Evidence from US Cities." *American Economic Review* 101 (6): 2616--52.

<a id="ref-duranton2012urban"></a>

Duranton, Gilles, and Matthew A Turner. 2012. "Urban Growth and Transportation." *Review of Economic Studies* 79 (4): 1407--40.

<a id="ref-10.2307/3082019"></a>

Eaton, Jonathan, and Samuel Kortum. 2002. "Technology, Geography, and Trade." *Econometrica* 70 (5): 1741--79. <http://www.jstor.org/stable/3082019>.

<a id="ref-economides2024unconventional"></a>

Economides, Philip. 2024. "Unconventional Protectionism in Containerized Shipping." *Available at SSRN 4930357*.

<a id="ref-epa2022"></a>

EPA. 2022a. *Inventory of US Greenhouse Gas Emissions and Sinks: 1990-2020*. EPA 430-R-22-0003. Https://www.epa.gov/ghgemissions/draft-inventory-us-greenhouse-gas-emissions-and-sinks-1990-2020.

<a id="ref-epa2022_socialcost"></a>

EPA. 2022b. *Report on the Social Cost of Greenhouse Gases: Estimates Incorporating Recent Scientific Advances*.

<a id="ref-epa_2024"></a>

EPA. 2024. *Inventory of u.s. Greenhouse Gas Emissions and Sinks: 1990-2022*. U.S. Environmental Protection Agency, EPA 430-R-24-004.

<a id="ref-eu_mobility"></a>

European Commission. 2021. *Sustainable and Smart Mobility Strategy*. Https://transport.ec.europa.eu/system/files/2021-04/2021-mobility-strategy-and-action-plan.pdf.

<a id="ref-fajgelbaum2023political"></a>

Fajgelbaum, Pablo D, Cecile Gaubert, Nicole Gorton, Eduardo Morales, and Edouard Schaal. 2023. *Political Preferences and the Spatial Distribution of Infrastructure: Evidence from California's High-Speed Rail*. National Bureau of Economic Research.

<a id="ref-fajgelbaum2020optimal"></a>

Fajgelbaum, Pablo D, and Edouard Schaal. 2020. "Optimal Transport Networks in Spatial Equilibrium." *Econometrica* 88 (4): 1411--52.

<a id="ref-fan2019valuing"></a>

Fan, Jingting, Yi Lu, and Wenlan Luo. 2019. "Valuing Domestic Transport Infrastructure: A View from the Route Choice of Exporters." *The Review of Economics and Statistics*, 1--46.

<a id="ref-fan2020tractable"></a>

Fan, Jingting, and Wenlan Luo. 2020. *A Tractable Model of Transshipment*. Working Paper.

<a id="ref-foellmi2024triangle"></a>

Foellmi, Reto, Christian Hepenstrick, and David Torun. 2024. "Triangle Inequalities in International Trade: The Neglected Dimension." *Journal of International Economics* 152: 104018.

<a id="ref-gwz_entrepot"></a>

Ganapati, Sharat, Woan Foong Wong, and Oren Ziv. 2021. *Entrepot: Hubs, Scale, and Trade Costs*. Working Paper No. 29015. National Bureau of Economic Research.

<a id="ref-Gibbons2024-ti"></a>

Gibbons, Stephen, Stephan Heblich, and Edward W Pinchbeck. 2024. "The Spatial Impacts of a Massive Rail Disinvestment Program: The Beeching Axe." *J. Urban Econ.* 143 (103691): 103691.

<a id="ref-harrigan2010airplanes"></a>

Harrigan, James. 2010. "Airplanes and Comparative Advantage." *Journal of International Economics* 82 (2): 181--94.

<a id="ref-head2014gravity"></a>

Head, Keith, and Thierry Mayer. 2014. "Gravity Equations: Workhorse, Toolkit, and Cookbook." In *Handbook of International Economics*, vol. 4. Elsevier.

<a id="ref-RePEc:cpr:ceprdp:14193"></a>

Heiland, Inga, Andreas Moxnes, Karen-Helene Ulltveit-Moe, and Yuan Zi. 2019. *Trade From Space: Shipping Networks and The Global Implications of Local Shocks*. CEPR Discussion Papers No. 14193. C.E.P.R. Discussion Papers. <https://ideas.repec.org/p/cpr/ceprdp/14193.html>.

<a id="ref-horn2012matrix"></a>

Horn, Roger A, and Charles R Johnson. 2012. *Matrix Analysis*. Cambridge university press.

<a id="ref-hulten1978growth"></a>

Hulten, Charles R. 1978. "Growth Accounting with Intermediate Inputs." *The Review of Economic Studies* 45 (3): 511--18.

<a id="ref-hummels2013time"></a>

Hummels, David L, and Georg Schaur. 2013. "Time as a Trade Barrier." *American Economic Review* 103 (7): 2935--59.

<a id="ref-jaworski2023highways"></a>

Jaworski, Taylor, Carl Kitchens, and Sergey Nigai. 2023. "Highways and Globalization." *International Economic Review* 64 (4): 1615--48.

<a id="ref-nyt_railstrike"></a>

Kanno-Youngs, Zolan, and Emily Cochrane. 2022. *Biden Signs Legislation to Avert Nationwide Rail Strike*. Https://www.nytimes.com/2022/12/02/us/politics/rail-strike-biden.html.

<a id="ref-Lind2023-ao"></a>

Lind, Nelson, and Natalia Ramondo. 2023. "Trade with Correlation." *American Econonomic Review* 113 (2): 317--53.

<a id="ref-ludwig2025can"></a>

Ludwig, Philipp. 2025. *Can Unilateral Policy Decarbonize Maritime Trade?* CESifo Working Paper.

<a id="ref-lugovskyy2022unintended"></a>

Lugovskyy, Volodymyr, Alexandre Skiba, and David Terner. 2025. "Unintended Consequences of Environmental Regulation of Maritime Shipping: Carbon Leakage to Air Shipping." *Journal of International Economics* 155: 104081.

<a id="ref-marad2011comparison"></a>

MARAD. 2011. *Comparison of US and Foreign-Flag Operating Costs*.

<a id="ref-mcfadden_winston_boersch-supan_1986"></a>

McFadden, Daniel, Clifford Winston, and Axel Boersch-Supan. 1986. "Joint Estimation of Freight Transportation Decisions Under Nonrandom Sampling." In *Analytical Studies in Transport Economics*, edited by Andrew F.Editor Daughety. Cambridge University Press. <https://doi.org/10.1017/CBO9780511895913.007>.

<a id="ref-Melo2012-jm"></a>

Melo, Emerson. 2012. "A Representative Consumer Theorem for Discrete Choice Models in Networked Markets." *Econ. Lett.* 117 (3): 862--65.

<a id="ref-michaels2008effect"></a>

Michaels, Guy. 2008. "The Effect of Trade on the Demand for Skill: Evidence from the Interstate Highway System." *The Review of Economics and Statistics* 90 (4): 683--701.

<a id="ref-mundaca2021carbon"></a>

Mundaca, Gabriela, Jon Strand, and Ian R Young. 2021. "Carbon Pricing of International Transport Fuels: Impacts on Carbon Emissions and Trade Activity." *Journal of Environmental Economics and Management* 110: 102517.

<a id="ref-WhiteHouseSupplyChainReview2024"></a>

National Economic Council. 2024. *2021--2024 Quadrennial Supply Chain Review*. National Economic Council; National Security Council, The White House. <https://bidenwhitehouse.archives.gov/wp-content/uploads/2024/12/20212024-Quadrennial-Supply-Chain-Review.pdf>.

<a id="ref-notteboom2018trade"></a>

Notteboom, Theo. 2018. "Trade and Transport Modes: The Search for Global Connectivity Through Transport Networks." In *Handbook of International Trade and Transportation*. Edward Elgar Publishing.

<a id="ref-RePEc:red:sed019:212"></a>

Office of the State Auditor. 2019. *Capitalization and Depreciation of Infrastructure*. 2019 Meeting Papers No. 212. Society for Economic Dynamics. <https://ideas.repec.org/p/red/sed019/212.html>.

<a id="ref-olney2020cabotage"></a>

Olney, William W. 2020. "Cabotage Sabotage? The Curious Case of the Jones Act." *Journal of International Economics* 127: 103378.

<a id="ref-oum1979cross"></a>

Oum, Tae Hoon. 1979. "A Cross Sectional Study of Freight Transport Demand and Rail-Truck Competition in Canada." *The Bell Journal of Economics*, 463--82.

<a id="ref-oum1989alternative"></a>

Oum, Tae Hoon. 1989. "Alternative Demand Models and Their Elasticity Estimates." *Journal of Transport Economics and Policy*, 163--87.

<a id="ref-Oyama2022-sj"></a>

Oyama, Yuki, Yusuke Hara, and Takashi Akamatsu. 2022. "Markovian Traffic Equilibrium Assignment Based on Network Generalized Extreme Value Model." *Trans. Res. Part B: Methodol.*, January, 135--59. <https://arxiv.org/abs/2009.02033>.

<a id="ref-Papola2013-fc"></a>

Papola, Andrea, and Vittorio Marzano. 2013. "A Network Generalized Extreme Value Model for Route Choice Allowing Implicit Route Enumeration." *Comput.-Aided Civ. Infrastruct. Eng.* 28 (8): 560--80.

<a id="ref-ranieri2018review"></a>

Ranieri, Luigi, Salvatore Digiesi, Bartolomeo Silvestri, and Michele Roccotelli. 2018. "A Review of Last Mile Logistics Innovations in an Externalities Cost Reduction Vision." *Sustainability* 10 (3): 782.

<a id="ref-REDDING2016148"></a>

Redding, Stephen J. 2016. "Goods Trade, Factor Mobility and Welfare." *Journal of International Economics* 101: 148--67. https://doi.org/10.1016/j.jinteco.2016.04.003.

<a id="ref-RePEc:eee:jotrge:v:19:y:2011:i:1:p:134-146"></a>

Rich, J., O. Kveiborg, and C. O. Hansen. 2011. "On structural inelasticity of modal substitution in freight transport." *Journal of Transport Geography* 19 (1): 134--46. <https://doi.org/10.1016/j.jtrangeo.2009.0>.

<a id="ref-rodrigue2020geography"></a>

Rodrigue, Jean-Paul. 2020. *The Geography of Transport Systems*. Routledge.

<a id="ref-panama_drought"></a>

Rojanasakul, Mira. 2024. "Panama Canal Drought Slows Cargo Traffic." New York Times. <https://www.nytimes.com/interactive/2024/01/26/climate/panama-canal-drought-shipping.html>.

<a id="ref-Santamaria2020-qo"></a>

Santamaria, Marta. 2020. "Reshaping Infrastructure: Evidence from the Division of Germany." *The Warwick Economics Research Paper Series (TWERPS)*.

<a id="ref-nyt_recordships"></a>

Schmidt, Gregory. 2021. *A Record Number of Cargo Ships Off the California Coast Shows a Crack in the Supply Chain*. Https://www.nytimes.com/2021/09/23/business/cargo-ships-supply-chain.html.

<a id="ref-shapiro2016_tradecosts"></a>

Shapiro, Joseph S. 2016. "Trade Costs, CO2, and the Environment." *American Economic Journal: Economic Policy* 8 (4): 220--54. <https://doi.org/10.1257/pol.20150168>.

<a id="ref-staiger1997econometrica"></a>

Staiger, Douglas, and James H. Stock. 1997. "Instrumental Variables Regression with Weak Instruments." *Econometrica* 65 (3): 557--86.

<a id="ref-stb2009"></a>

Surface Transportation Board. 2009. *A Study of Competition in the US Freight Railroad Industry and Analysis of Proposals That Might Enhance Competition*. Report prepared by Laurits R. Christensen Associates.

<a id="ref-tolva2025one"></a>

Tolva, Edoardo. 2025. *One Way or Another: Modes of Transport and International Trade*. Technical report.

<a id="ref-un_2021"></a>

United Nations. 2021. *Climate Change Fact Sheet*. United Nations Sustainable Transport Conference.

<a id="ref-usitc1991"></a>

USITC. 1991. "The Economic Effects of Significant US Import Restraints." *Investigation No.332-325, Publication 3201*.

<a id="ref-usitc1995"></a>

USITC. 1995. *The Economic Effects of Significant US Import Restraints*.

<a id="ref-10.2307/1912514"></a>

Winston, Clifford. 1981. "A Disaggregate Model of the Demand for Intercity Freight Transportation." *Econometrica* 49 (4): 981--1006. <http://www.jstor.org/stable/1912514>.

<a id="ref-world2023connecting"></a>

World Bank. 2023. *Connecting to Compete 2023: Trade Logistics in an Uncertain Global Economy*.

<a id="ref-zgonc2019impact"></a>

Zgonc, Borut, Metka Tekavčič, and Marko Jakšič. 2019. "The Impact of Distance on Mode Choice in Freight Transport." *European Transport Research Review* 11 (1): 1--18.

[^1]: Our paper is also complementary to the literature on optimal transport infrastructure policies ([Santamaria 2020](#ref-Santamaria2020-qo); [Almagro et al. 2024](#ref-almagro2024optimal); [Fajgelbaum and Schaal 2020](#ref-fajgelbaum2020optimal)), while we do not solve for optimal policy directly, we identify how bottlenecks emerge within multimodal networks which can help inform the targeting of infrastructure investments.

[^2]: Additionally, ([Fan and Luo 2020](#ref-fan2020tractable)) is a note which characterizes bilateral transport costs and their elasticities with respect to transshipment costs.

[^3]: Our estimate is complementary to work on modal substitution between ocean and air freight ([Harrigan 2010](#ref-harrigan2010airplanes); [Hummels and Schaur 2013](#ref-hummels2013time); [Lugovskyy et al. 2025](#ref-lugovskyy2022unintended); [Tolva 2025](#ref-tolva2025one)) and between bulk and container shipping within ocean freight ([Coşar and Demir 2018](#ref-cosar2017shipping)). Compared with ocean--air studies, our effects are smaller, likely because the high cost of air shipping implies a larger elasticity of substitution.

[^4]: Cristea et al. ([2013](#ref-cristea2013trade)) finds that trade liberalization between countries will increase trade from more distant partner countries, resulting in a proportional increase in air transport use and greenhouse gas emission. Lugovskyy et al. ([2025](#ref-lugovskyy2022unintended)) finds that environmental regulations capping $\mathrm{CO_2}$emissions from maritime shipping will substitute demand towards air transport, increasing total transport-related $\mathrm{CO_2}$emissions.

[^5]: Multimodal transport accounts for more than half by value for freight transported over 1,500 miles (Figure [15](#fig:modeshare_value_by_distance)).

[^6]: Class I railroads are the largest carriers operating on the U.S. railroad system, originally defined in 1992 to be carriers above \$250m dollars of revenue. Since adjusting for inflation, the cutoff in 2021 stood at approximately \$943m. The seven class I carriers currently in operation comprise the large majority of the domestic rail freight market.

[^7]: Our averages are lower than the estimates in ([Brancaccio et al. 2024](#ref-brancaccio2024investment)) in part due to their inclusion of wait time at anchorage and their focus on bulk ships.

[^8]: One alternative method to introduce mode choice is to simply allow for mode-specific subnetworks. This naturally gives rise to a setting where mode choice is then *implied* by route choice, which represents a direct extension of AA2022 to transport mode choice (see Appendix [8.5](#subsec:Isomorphism_AA) for details). A previous version of this paper presents such a model. The limitation of this modeling approach is that it assumes that the elasticity of modal substitution must be identical to the elasticity of route choice. However, as we demonstrate in the next section, our estimates indicate that this assumption does not hold.<a id="fn_same_elasticities"></a>

[^9]: In this paper, we assume perfect competition among freight transport companies. While this assumption simplifies our analysis, it also aligns with our focus on multimodal transport networks. Literature shows that multimodal container transport is generally more competitive than unimodal transport and that rail transport of containers is more competitive than non-containerized shipments. Zgonc et al. ([2019](#ref-zgonc2019impact)) finds that multimodal road-rail transport remains competitive over short distances compared to unimodal road transport. Similarly, Surface Transportation Board ([2009](#ref-stb2009)) reports lower markups for multimodal rail shipments and lower rail rates near alternative transport modes. Detailed analysis of market power in container freight transport would require comprehensive door-to-door shipment data, which is currently unavailable.

[^10]: The recursive Fréchet formulation can equivalently be written as a Network Generalized Extreme Value (Network-GEV) model, where the observed topology of the network generates the relevant nesting structure. Appendix [8.5](#subsec:Isomorphism_AA) provides the mapping and the connection to Daly and Bierlaire ([2006](#ref-Daly2006-lp)) and Lind and Ramondo ([2023](#ref-Lind2023-ao)).

[^11]: The same routing problem can equivalently be written backward as a sourcing decision over predecessor nodes. Under homogeneous $\theta_i=\theta$, the two representations coincide; see Appendix [8.5](#subsec:Isomorphism_AA).

[^12]: This isomorphism between one-shot decisions over the universe of paths and sequential decision-making relying on dynamic programming has been previously established, most notably by ([Antràs and Gortari 2020](#ref-Antras2020-yp)) who explore a one-shot sequential sourcing decision in their main text and introduce a dynamic programming formulation in their Appendix A.1.3. Our work extends this formulation in two distinct ways: by explicitly formulating the decision-making on a graph, and by embedding the solution into the equilibrium conditions for a computationally convenient representation of the spatial equilibrium. See Appendix [8.5](#subsec:Isomorphism_AA) for further details.

[^13]: The Frechet distribution's properties imply that the inclusive value is given by $p_{j}=\mathbb{E}_{\varepsilon}\left[\min_{(k,i)\in\mathcal{B}(j)\times N}\frac{t_{kj}\tau_{ik}w_{i}}{\varepsilon_{ij,k}(\nu)}\right]=\left(\sum_{(k,i)\in\mathcal{B}(j)\times N}\left(t_{kj}\tau_{ik}w_{i}\right)^{-\theta_{j}}\right)^{-\frac{1}{\theta_{j}}}=\left(\sum_{k\in\mathcal{B}(j)}t_{kj}^{-\theta_{j}}\sum_{i\in N}\left(\tau_{ik}w_{i}\right)^{-\theta_{j}}\right)^{-\frac{1}{\theta_{j}}}$. Note that in the last equation, we can re-arrange the sums to highlight that under a homogenous dispersion parameter ($\theta_j=\theta$), the formula takes on a recursive form and connects expected sourcing prices back to origin $i$ along the network topology, $p_{j}^{-\theta}=\sum_{k\in\mathcal{N}(j)}t_{kj}^{-\theta}p_{k}^{-\theta}$ since $p_k^{-\theta} = \sum_{i\in N}\left(\tau_{ik}w_{i}\right)^{-\theta}$ .

[^14]: Here $\tilde{\Pi}_{k}$ is an auxiliary producer-access object that adjusts for heterogeneity in $\theta_j$. It collapses to $\Pi_k$ under homogeneous $\theta_j=\theta$. See Appendix [8.3](#Online_Appendix:Equilibrium) for the exact expression and derivation.

[^15]: We can furthermore rewrite the equations in terms of rescaled variables, $\left\{y_i,l_i\right\}$, where we define shares of world income in location $i$, $y_{i}\equiv\frac{Y_{i}}{Y^{W}}$, and shares of total labor in location $i$, $l_{i}\equiv\frac{L_{i}}{L^{W}}$. To illustrate this, we did this explicitly for the counterfactual equilibrium system in the Appendix [8.10](#appendix:counterfactual_eq).

[^16]: While it is theoretically feasible to extend the framework to include congestion on the secondary network, we have opted to model congestion at terminals. This choice reflects the fact that bottlenecks then to occur at the intermodal transfer with a prime example being port congestion. Additionally, incorporating congestion at the route-level for secondary networks would come at the cost of added complexity and decreased traceability.

[^17]: While somewhat different to the more commonly used Bureau of Public Roads (BPR) function ([Boyles et al. 2021](#ref-blubook_vol1_v089)), it is both analytically convenient and can be micro-founded in a simple model where transport costs are log-linear in travel time and speed is a log-linear function of traffic congestion as shown in AA2022.

[^18]: Appendix [8.8](#Subsec:decomp_qual_channel) writes this multiplier as $m_{kl}^c=\omega^\top J_c^{-1}s_{kl,m}$, where $J_c$ is the Jacobian of the transformed equilibrium system under model variant $c$, $s_{kl,m}$ is the normalized shock created by lowering the primitive cost of mode $m$ on link $kl$, and $\omega$ maps the induced equilibrium responses into welfare. Under the reduced equilibrium representation, $s_{kl,m}=s_{kl}$, so the normalized multiplier depends on the link rather than on the mode.

[^19]: An interesting comparison point is ([Donald et al. forthcoming](#ref-DonaldFukuiMiyauchi2026)). They ask a broad welfare-accounting question: in a utilitarian spatial model with heterogeneous households, idiosyncratic location preferences, and transfers, what primitive wedges make welfare depart from the Fogel--Hulten benchmark? Their answer is a decomposition into technology, marginal-utility dispersion, fiscal externalities, technological externalities, and redistribution. Our focus is different. We specialize to the utility-equalization transport benchmark and use the recursive multimodal network structure to decompose the model-implied welfare elasticity itself. The benefit of our approach is that it turns the extended social-savings formula from a black box into a mechanism-level anatomy: we can say whether a link's welfare value is being attenuated by road or terminal scarcity, amplified or offset by modal diversion and rerouting, or propagated through broader network feedback. In that sense, ([Donald et al. forthcoming](#ref-DonaldFukuiMiyauchi2026)) classify deviations from Hulten by welfare primitive, whereas we classify them by transport mechanism. We consider the two perspectives as complementary.

[^20]: ([Allen et al. 2025](#ref-allen2025evaluating)) show that, when congestion and agglomeration/dispersion externalities are shut down so that the equilibrium is efficient, a Hulten-type envelope theorem applies and the welfare elasticity of a marginal link-mode improvement is proportional to the observed traffic share on that link-mode. In the notation of this paper, that efficient-equilibrium benchmark is $E_{kl,m}^{H}=\Xi_{kl,m}$, or equivalently $m_{kl}^{H}=1/\rho$.

[^21]: There are two congestion forces in our model: on the primary network and at intermodal terminals $(\lambda_1,\lambda_m)$. In this paper, we rely on prior literature for $\lambda_1$ and focus on estimating $\lambda_m$ in this paper.

[^22]: Using the same three instruments, Duranton and Turner ([2012](#ref-duranton2012urban)) finds that a 10% increase in interstate highways increases city employment by about 1.5% between 1983 and 2003. With the same instruments, Duranton et al. ([2014](#ref-duranton2014roads)) finds that more highways lead to cities specializing in exporting goods with higher weight-to-value ratios.

[^23]: After the matching process, we have 221 MSAs. This is 7 fewer than DT2011 (see Section [9.1.5](#sec:match_rail_msa) for more information). Despite the slight difference in observations, when we replicate the DT2011 results ([Table](#tab:DT_replicate)) our OLS and IV estimates have the same sign and are within one standard deviation of their results (Table 9, Columns (6) to (10) in DT2011).

[^24]: Instead of estimating an elasticity of modal substitution, Coşar and Demir ([2018](#ref-cosar2017shipping)) estimates the cost structures of container and breakbulk shipping to quantify the impact of containerization in trade volumes.

[^25]: Hummels and Schaur ([2013](#ref-hummels2013time)) estimates substitution elasticities of 2.7-6.5 for air versus ocean shipping, while Lugovskyy et al. ([2025](#ref-lugovskyy2022unintended)) reports an IV estimate of 10.3 for air versus containerized ocean shipping. Focusing on unit values, Harrigan ([2010](#ref-harrigan2010airplanes)) finds that a 1 percent increase in value per weight raises the probability of air shipment by 0.2 percentage points.

[^26]: Differences in empirical strategies and context complicate direct comparisons. Beuthe et al. ([2014](#ref-beuthe2014estimating)) finds a rail ton-mile elasticity of 0.59 with respect to road cost reductions. Using 1970 Canadian freight flow data and a translog demand system, Oum ([1979](#ref-oum1979cross)) estimates an rail-truck elasticity of 1.4-1.57 for eight selected commodities, and Oum ([1989](#ref-oum1989alternative)) estimates an elasticity of 1.19 for all goods.

[^27]: Across product and origin countries, the effective sample size is 87.8, with the largest weight at 5.6%.

[^28]: Carballo et al. ([2021](#ref-carballo2021import)) estimates that a 1 percent increase in median import processing time reduces import values by 0.24%, giving a processing cost elasticity of 0.06 with a demand elasticity of 4. With export processing data on 98 countries, Djankov et al. ([2010](#ref-djankov2010trading)) finds that a 1 percent increase in delivery time from factory to port reduces trade by 0.4%.

[^29]: We focus on U.S. estimates for comparison purposes. ([Couture et al. 2018](#ref-couture2018speed)) estimate a congestion elasticity of 0.11 associated with U.S. metro area population. Duranton and Puga ([2023](#ref-duranton2023urban)) estimates an elasticity of 0.04 using residualized city speed for 180 U.S. metropolitan areas. Using a global dataset on vehicle travel speeds, Akbar et al. ([2023](#ref-akbar2023fast)) estimate a congestion elasticity with respective to income of 0.032 and provides an in-depth discussion of on existing congestion elasticity estimates. AA2022 estimate a road congestion elasticity of 0.092.

[^30]: See Appendix Section [9.1.6](#ap_sec:rail_dwell) for further details on the rail station dwell times data.

[^31]: Notice the slight abuse of notation here. While $\Xi_{i j,1}$ refers to the link- or edge-specific traffic along the primary network, $\Xi_{ij,m}$ instead refers to modal flows between $i$ and $j$ along the secondary networks and is therefore not necessarily edge-specific. However, $\Xi_{ij,m}$ summarizes modal traffic in the sense that it refers to any flows between $i$ and $j$ no matter their origin or destination on the primary network. This is convenient---as we will argue below---since this is the data moment that is directly observed in the rail traffic data.

[^32]: We can *explicitly* characterize the change in the equilibrium traffic flows along the primary and secondary transport system. Given the equilibrium changes in market access terms $\left(\hat{P}_{i},\hat{\Pi}_{i},\right)$, as well as the equilibrium changes of mode and aggregate transport costs, $\left(\hat{t}_{ik},\hat{t}_{ik,m},\right)$, the resulting change in the traffic flows can be computed using the following formulae:

<a id="eq:traffic_change"></a>

$$
\begin{aligned}
    \hat{\Xi}_{ik} &=\hat{t}_{ik}^{-\theta}\times\hat{P}_{i}^{-\theta}\times\hat{\Pi}_{k}^{-\theta} \\
    \hat{\Xi}_{ik,m} &=t_{ik,m}^{-\eta}\times\hat{t}_{ik}^{\theta-\eta}\times\hat{P}_{i}^{-\theta}\times\hat{\Pi}_{k}^{-\theta}
    \end{aligned}
$$


    This allows us to account for the changes in observed traffic flows. This can be a convenient tool to analyze the implied traffic and environmental impacts of infrastructure investments.

[^33]: To limit the dimensionality of the simulation, we group the flows into five geographic regions: Africa, Asia, Australia and Oceania, Europe, North America and South/Central America.

[^34]: See Online Appendix [8.11](#appendix:flows_predict) for detailed derivations of the model predicted mode-specific trade flows.

[^35]: We explicitly embrace a computational approach in this section, employing the 'hat algebra' developed in Section [5.1](#subsec:counterfactuals). Alternatively, one could potentially derive sufficient statistics that characterize welfare elasticities in terms of traffic flows as in ([Office of the State Auditor 2019](#ref-RePEc:red:sed019:212)) and in principle the recursive formulation of the equilibrium condition ([Equation](#eq:recursive_eq_a)) might be a convenient aid in doing so as highlighted in our discussion in Subsection [Equation](#eq:traffic-subcomp-main). However, the presence of congestion elasticities on the primary mode and intermodal terminals makes this approach less desirable.

[^36]: This implies a (log) proportional relationship between number of terminals and switching costs, i.e. $\hat{s}_{kk,m}=\widehat{\mathrm{terminals}}_{kk,m}^{-\lambda_{m}}.$ where $\hat{s}_{kk,m}$ denotes the mode specific (log) change in the switching cost and $\hat{terminals}_{kk,m}$ denotes the necessary (log) change in terminal capacity.

[^37]: The aggregate growth from these improvements outweighs the partial equilibrium effect from mode-specific traffic changes and leads to a global increase in greenhouse gas emissions. In order to isolate the partial equilibrium effect, we keep overall (GHG weighted) traffic constant.

[^38]: Shutting down terminal congestion raises estimated welfare gains by an average of 12% (Figure [22](#fig:welfare_comp_road_termcongest)), highlighting links connected to major intermodal terminals. We quantify large effects for links like Los Angeles-Riverside and Chicago-Milwaukee, which see welfare increases of 40.1-46.3% and 16.8-39.5% respectively.

[^39]: See Appendix [8.13](#app:chi_welfare_fixed_routing) for detailed derivations.

[^40]: In a historical context, Donaldson and Hornbeck ([2016](#ref-donaldson2016railroads)) estimates that removing U.S. railroads would reduce agricultural land values in 1890 by 60.2%. Modal substitution through an expanded canal network and improved country roads would offset roughly 34% of these losses. Our modal substitution decomposition results are broadly consistent with these findings, although our focus is specifically on containerized freight.

[^41]: Foellmi et al. ([2024](#ref-foellmi2024triangle)) develops a trade cost estimation procedure across countries that allows for rerouting which satisfies the triangle inequality.

[^42]: Olney ([2020](#ref-olney2020cabotage)) studies the economic costs of the Jones Act and shows that U.S. container ships cost 5 times more to build than foreign ships. Using United Kingdom shipbuilding as an instrument, this paper finds that the Jones Act disproportionately restricts domestic U.S. water trade especially in coastal states.

[^43]: We collect data of destination specific imports from the Census Bureau ([2003-2021](#ref-censustrade)) and aggregate across five major regions: Central America, Africa, Asia, Australia and Oceania, Europe, North America (excl U.S.A), South/Central America.

[^44]: Producer price index is $\Pi_{i} \equiv\left(\sum_j \delta_i^{(\theta_i- \theta_j)}\left(\frac{\tau_{i j}}{P_j}\right)^{-\theta_j} \gamma_j\right)^{-\frac{1}{\theta_j}}$ while consumer price index is $P_{j}=\left[\sum_i \tau_{i j}^{-\theta_j}\left(\frac{\gamma_i}{\Pi_i}\right)^{\frac{\theta_j}{\theta_i}}\right]^{-\frac{1}{\theta_j}}$.<a id="fn:indices"></a>

[^45]: We can furthermore rewrite the equations in terms of rescaled variables, $\left\{y_i,l_i\right\}$, where we define shares of world income in location $i$, $y_{i}\equiv\frac{Y_{i}}{Y^{W}}$, and shares of total labor in location $i$, $l_{i}\equiv\frac{L_{i}}{L^{W}}$. To illustrate this, we did this explicitly for the counterfactual equilibrium system in the Online Appendix [8.10](#appendix:counterfactual_eq).

[^46]: This measure, as mentioned from the previous subsection, is at the daily level. In order to match the rail dwell time dataset, we aggregate it up to the weekly level. We start our week on a Monday since we observe in our data that most ships tend to enter a port on Mondays.
