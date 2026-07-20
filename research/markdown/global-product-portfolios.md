---
title: "Global Product Portfolios: Balancing Consumer Tastes and Demand Volatility"
authors: "Konrad Adler and Simon Fuchs"
date: "September 2024"
pdf: "/research/Movies_Adler_Fuchs.pdf"
markdown_source: "/research/markdown/global-product-portfolios.md"
text_version_generated: "2026-07-20"
---

# Global Product Portfolios: Balancing Consumer Tastes and Demand Volatility

**Authors:** Konrad Adler and Simon Fuchs<br>
**Version:** September 2024<br>
**JEL:** F11, F14<br>
**Keywords:** Taste heterogeneity; volatility; gains from trade

[Download the paper as PDF](/research/Movies_Adler_Fuchs.pdf)

> This accessible text version was generated from the authors’ TeX source and checked against the PDF linked above. Figure images are omitted here; their captions and notes are retained.

## Abstract

We study the trade-off firms face when exporting to countries with different tastes and volatile demand. In our model, firms face a portfolio problem where they trade off supplying the largest consumer groups against higher exposure to group-specific risk. We develop an empirical strategy to estimate consumer taste from observed market shares, as well as the key parameters that pin down the firm’s portfolio choice problem. We apply our framework to estimate the impact of the rise of China on the global movie market and characterize the heterogeneous welfare effects across countries. A calibrated version of our model suggests a modest average consumer welfare loss as firms prioritize products that provide insurance value.

**Author note:** Acknowledgements and institutional disclaimers are preserved in the paper notes.[^1]

## Introduction

"For now, the China market remains at once too great an opportunity to disregard and too unpredictable to rely on."

Rance Pow, president of Artisan Gateway

International trade allows firms to reach a large customer base across multiple countries. However, for many products customers across countries have different tastes over product attributes and design ([Auer 2017](#ref-AUER20171); [A. Kerem Coşar et al. 2018b](#ref-COSAR2018135)). Exporting also involves significant risk due to large volatility in demand ([Eaton et al. 2011](#ref-Eaton2011-bp); [Munch and Nguyen 2014](#ref-Munch2014-hy); [Giovanni et al. 2014](#ref-https://doi.org/10.3982/ECTA11041); [Esposito 2022](#ref-ESPOSITO2022103562)). The combination of risk and heterogeneous tastes poses a challenge to firms selling products that are difficult or impossible to customize. These firms can either cater to the largest group of consumers with their product design, risking idiosyncratic swings in that group's demand, or adopt a design that caters to a more diversified customer base, at the cost of potentially reduced revenue in key markets. While practitioners have recognized this trade-off, the implications of volatile demand intersecting with taste heterogeneity across markets remain unexplored in the trade literature.[^2]

This paper investigates how firms optimally choose their product mix in international markets characterized by diverse consumer tastes and varying demand risks. We show theoretically and empirically that the equilibrium product mix is determined by the interplay between two opposing channels: the *preference externality* channel, which drives suppliers to position their products closer to the largest markets to capitalize on higher demand, and the *diversification* channel, which encourages firms to spread their products more evenly across different markets to mitigate risks associated with market-specific demand shocks. While the predictions of each channel individually are straightforward, their interplay leads to more nuanced predictions about the equilibrium product mix and its impact on welfare.

We start by deriving a sharp characterization of the two channels at work in a simple two-locations model. One location offers certain returns (home), while the other is subject to idiosyncratic demand shocks (foreign). The firm then faces a portfolio choice problem ([Campbell 2017](#ref-Campbell2017-om)), determining the relative investment shares across products targeting the two different markets. We show that, in equilibrium, the product mix reflects the balance between the preference externality channel, which aligns products with the tastes of the largest market, and the diversification channel, which reduces exposure to idiosyncratic risk from the foreign market. Specifically, the relative strength of each channel depends on how the relative market size determines overall expected revenue, while the supplier's degree of risk aversion determines sensitivity to risk in the foreign market. Comparative statics indicate that the consequences of an increase in the size of the foreign market depend on consumers' elasticity of substitution, the foreign country's riskiness, and the supplier's degree of risk aversion. With low risk aversion, an increase in foreign market size is more likely to result in a product mix closer to the foreign taste location, whereas high risk aversion attenuates this effect.

In the next part of the paper, we use hand-collected data on the global box office to examine whether and how Hollywood studios adjust the types of movies produced following a shift in global market composition. The movie industry is ideal for this analysis because movies are highly differentiated products that are difficult to customize for specific markets and inherently risky. Our data on movie performance from 2004 to 2019 covers a large share of the US market and about half of global movie revenue. The industry has seen significant changes over the last two decades, particularly with China's rise as a key market (see Figure [1](#fig:boxofficeOverTime)). To isolate exogenous variation, we exploit the 2012 increase in China's movie import quota ([Hermosilla et al. 2018](#ref-Hermosilla2018)).

We find a divergence in the correlation of movie market shares between Western and Asian markets after the 2012 increase in demand from China. As shown in Table [Table](#graphIntro), before the policy change, the US and Hong Kong---used as a proxy for unrestricted Chinese taste---shared four out of five top-performing movies. However, after the policy change, only one movie remains in common. This divergence persists in a difference-in-difference analysis of market shares between the US and Hong Kong, and the US and Western Europe. While market shares were similar before 2012, differences widened between the US and Hong Kong and narrowed between the US and Western Europe after the liberalization. The shift is more pronounced for movies likely to pass Chinese censors, such as unrated and action movies, but not for comedies or movies involving nudity. These results suggest that Hollywood studios began catering more to Asian tastes post-2012. However, considering the substantial risk in the Chinese market, and our theoretical analysis of product positioning in the presence of horizontally differentiated consumers and volatile demand, the reduced-form results likely are a combination of both preference externality and diversification channel. We thus turn towards a quantitative structural analysis to distinguish between the two and to analyze the welfare implications.


<a id="fig:boxofficeOverTime"></a>

> **Evolution of the International Movies Market**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Total annual boxoffice by group of country. Other countries include African, Middle Eastern, and South American countries and Japan, Australia and New Zealand.


<a id="graphIntro"></a>

> **Top Five Movies by Market Share**

+:-----+:-----+:-------------------------------------------+:--------------------------------+
| **2008-2012**                                                                              |
+------+------+--------------------------------------------+---------------------------------+
| Rank | Year | US                                         | Hong Kong                       |
+------+------+--------------------------------------------+---------------------------------+
| 1    | 2009 | Avatar                                     | Avatar                          |
+------+------+--------------------------------------------+---------------------------------+
| 2    | 2012 | The Avengers                               | Toy Story 3                     |
+------+------+--------------------------------------------+---------------------------------+
| 3    | 2008 | The Dark Knight                            | Transformers: Dark of the Moon  |
+------+------+--------------------------------------------+---------------------------------+
| 4    | 2012 | The Dark Knight Rises                      | The Avengers                    |
+------+------+--------------------------------------------+---------------------------------+
| 5    | 2010 | Toy Story 3                                | The Dark Knight                 |
+------+------+--------------------------------------------+---------------------------------+
| **2013-2017**                                                                              |
+------+------+--------------------------------------------+---------------------------------+
| Rank | Year | US                                         | Hong Kong                       |
+------+------+--------------------------------------------+---------------------------------+
| 1    | 2015 | Star Wars: Episode VII - The Force Awakens | Iron Man 3                      |
+------+------+--------------------------------------------+---------------------------------+
| 2    | 2017 | Star Wars: Episode VIII - The Last Jedi    | Captain America: Civil War      |
+------+------+--------------------------------------------+---------------------------------+
| 3    | 2015 | Jurassic World                             | Avengers: Age of Ultron         |
+------+------+--------------------------------------------+---------------------------------+
| 4    | 2016 | Rogue One: A Star Wars Story               | Transformers: Age of Extinction |
+------+------+--------------------------------------------+---------------------------------+
| 5    | 2017 | Beauty and the Beast                       | Jurassic World                  |
+------+------+--------------------------------------------+---------------------------------+

To distinguish between the preference externality and diversification channels, we develop a quantitative model and apply it to the global movie market. The model extends to multiple locations across a discretized but unrestricted taste space, allowing for differentiated consumer groups and products. We provide a novel procedure to estimate the demand side that maps both horizontally differentiated consumer groups and differentiated products into a two-dimensional 'taste space' where the idiosyncratic appeal of a product to a specific consumer group is decreasing in their bilateral distance. We do so in three steps. First, we separate vertical differentiation (global appeal) from horizontal differentiation (country-specific appeal) by decomposing market shares into global and local components using a contraction mapping method following Berry ([1994](#ref-10.2307/2555829)). Second, we map the country-specific taste components into a two-dimensional taste space, treating the estimation as a sequential trilateration problem---a convex optimization with strong convergence properties. Third, we estimate the risk aversion parameter that governs the diversification channel, based on the trade-off between expected returns and volatility at the product level, as in Allen and Atkin ([2016](#ref-allen2016volatility)). Our estimation yields a risk aversion parameter of 4.6, similar to the average value for US executives found by Brenner ([2015](#ref-brenner2015risk)), reflecting their tendency to hedge risks within firms rather than act as risk-neutral agents ([Smith and Stulz 1985](#ref-smith1985determinants); [Ravid and Basuroy 2004](#ref-ravid2004managerial)).

To validate our approach, we correlate the estimated taste locations of countries and movies with observable characteristics. The estimated locations align well with intuition: most movies are positioned between the taste locations of the largest markets---the US, Western Europe, and Asia. Movies closer to the US taste location are more likely to be comedies or romantic films, which supports the idea that these genres are harder to adapt for international audiences. In contrast, movies positioned further from the US and closer to Asia are more likely to be action films, often co-produced with Chinese partners to navigate quotas and better align with local preferences.

In the final part of the paper, we estimate the welfare effects of China's rise and disentangle the relative importance of the preference externality and diversification channels. To do this, we simulate the equilibrium product mix before and after 2012 using actual market sizes, as simulations provide more reliable welfare estimates than those based on granular data. When we eliminate the diversification channel by assuming studios are risk-neutral, they shift their movie production to target the Asian market. In this counterfactual scenario, welfare decreases significantly in all markets except Asia, where it increases. However, when both the preference externality and diversification channels are active, welfare declines across all countries, including Asia. This suggests that when risk-averse studios aim for a product mix that offers insurance, increased trade can make all consumers worse off.

Our results have the following implications: for firms, they highlight the potential costs of a strong focus on risk management strategies in an environment with rapidly changing demand composition. For policymakers, the results show the possibility of unintended consequences of trade policies. The results also align with classical results in the trade literature that risk aversion can lead to losses from further trade integration ([Newbery and Stiglitz 1984](#ref-Newbery1984-ru)). Finally, we provide a quantitative argument in the debate about China's influence on US industries, particularly the movie industry ([Tager 2020](#ref-pen_america_2020); [Li 2021](#ref-li_2021)).

**Contribution and Literature.** This paper contributes to three distinct literatures: First, this paper contributes to the literature on international trade by integrating the effects of horizontal taste differentiation and demand volatility on the equilibrium product mix. Earlier studies have examined how taste heterogeneity affects international trade flows, beginning with Linder ([1961--](#ref-Linder_61)) and extending to the impact of home market and market size effects on product mix and market composition ([Mayer et al. 2014](#ref-Mayer2014-yb); [A. Kerem Coşar et al. 2018a](#ref-Cosar2018-bs)), and the role of non-homothetic preferences and income heterogeneity across countries ([Foellmi et al. 2017](#ref-RePEc:usg:econwp:2017:03); [Fieler 2011](#ref-fieler2011); [Fajgelbaum et al. 2011](#ref-RePEc:ucp:jpolec:doi:10.1086/662628)). While Auer ([2017](#ref-AUER20171)) develops a trade model showing that endogenous supply responses can compensate for taste differences, and Allen and Atkin ([2022](#ref-Allen2022-gr)) and Esposito ([2022](#ref-ESPOSITO2022103562)) introduce the role of volatile demand in international trade, the interplay between these two channels has not been explored. Our theoretical framework captures this interplay by introducing two channels---the preference externality channel and the diversification channel---to demonstrate how taste heterogeneity and demand volatility together influence firms' product choices and their implications for consumer welfare.

Second, the paper also contributes to empirical studies in international trade by using the global movie market to examine how firms adjust their product strategies in response to shifts in global demand. Cultural goods such as movies are highly differentiated and inherently risky, making them an ideal case for studying the effects of taste heterogeneity and demand volatility. Prior research on cultural markets, such as Waldfogel ([2003](#ref-waldfogel2003)), George and Waldfogel ([2003](#ref-George2003)), and Ferreira et al. ([2012](#ref-ferreira2012trade)), has examined how product mix responds to preference externalities. Closest to our study, Ferreira et al. ([2012](#ref-ferreira2012trade)) show that half of the gains from trade in movies come from increased variety and half from higher quality enabled by larger markets. Similarly, Hanson and Xiang ([2011](#ref-Hanson2011-oc)) analyze product heterogeneity within a trade model featuring heterogeneous firms, illustrating how market composition affects product diversity and trade patterns. Our paper expands on these studies by providing both novel reduced-form and structural evidence that changes in market composition, particularly China's rise as a key market, lead to adjustments in product composition. Our difference-in-difference analysis shows a significant divergence in movie market shares between Western and Asian markets after China increased its movie import quota in 2012, highlighting the dual role of preference externalities and risk considerations in shaping firms' strategies.

Lastly, the paper contributes to the literature by developing a quantitative structural model that incorporates both taste heterogeneity and demand volatility to assess their combined impact on welfare. Existing models in international trade typically focus on either market integration or risk considerations in isolation ([Allen and Atkin 2022](#ref-Allen2022-gr); [Esposito 2022](#ref-ESPOSITO2022103562)), or on firm-level diversification strategies under uncertainty ([Kramarz et al. 2020](#ref-kramarz2020volatility); [Fillat and Garetto 2015](#ref-Fillat2015-pj); [Ramondo et al. 2010](#ref-Ramondo2010-ji)). Our approach differs by providing a framework where risk-averse firms face both horizontally differentiated demand and volatile market conditions. The model's estimation of risk aversion and consumer tastes allows for counterfactual analysis, revealing that risk-averse firms' strategies can lead to welfare losses for all countries, even in an expanding market like Asia. This result aligns with classical findings on the potential downsides of trade integration under risk aversion ([Newbery and Stiglitz 1984](#ref-Newbery1984-ru)) and offers new insights into the welfare effects of trade policies on global markets.

The structure of the paper is as follows. Section [3](#sec:simple_model) introduces a simple two-location model with horizontally differentiated consumers and risk-averse producers. Section [2](#sec:data) provides background on the international box office, presents the data, and provides reduced-form evidence for the preference externality and volatility channel. Section [4](#sec:model) introduces a quantitative extension of the model and describes how to estimate the taste space from market share data. In Section [5](#sec:The impact of China's rise in the movies market), we quantify the effect of China's rise in the international movie market on welfare across different countries and conduct a counterfactual welfare analysis. Section [6](#sec:conc) concludes.

<a id="sec:data"></a>

## Hollywood and China: Stylized Facts

To provide evidence of the relationship between market structure and equilibrium product mix, we study the impact of China's rise on the product mix of Hollywood studios. Section [2.1](#subsec:Background: Hollywood and China) gives background on the international box office and the Chinese market in particular, outlining the quota system that we will exploit in our empirical design. In Section [2.2](#subsec:Data), we introduce our hand-collected dataset detailing the evolution of the international box office from 2004 to 2019. We then explore whether the 2012 policy change that increased the number of movies admitted to the Chinese market altered the type of movies produced by Hollywood studios in Section [2.3](#subsec:demand externality). Finally, in Section [2.4](#subsec:region-specific risk) we document the movie return risk, focusing on the variability of returns across different markets.

<a id="subsec:Background: Hollywood and China"></a>

### Background: Hollywood and China

We begin by providing some background on the global box office. Aggregate global box office revenue from movies shown in theaters almost doubled from \$25bn in 2004 to \$42bn in 2019. In 2004, the US and Canada accounted for about 50% of this revenue, or roughly \$9 billion. By 2019, their share had fallen to around 25%, or \$11 billion ([Motion Picture Association of America 2019](#ref-MPAA2019)). Although our data focuses solely on Hollywood productions, this shift is evident in Figure [1](#fig:boxofficeOverTime), which highlights the growing importance of China as a key player in the global movie market.

**Chinese Quota System.** China has historically restricted the entry of foreign films through a strict quota system. Until 1994, foreign movies were not allowed to be shown in Chinese theaters. Between 1994 and 2001, regulators permitted only ten foreign films per year, carefully selected by the authorities, to be screened in China. Following China's entry into the World Trade Organization in 2001, the quota was increased to 20 films annually. In 2012, this quota was further raised to 34 foreign films per year, along with an increase in the share of box office revenue that foreign studios could retain, from 13% to 25%. Notably, the additional 14 spots were specifically reserved for 3-D or IMAX films, reflecting China's focus on premium cinema experiences. These regulatory changes marked a significant, discontinuous increase in demand for Hollywood studios, driven by both the higher number of slots and the more favorable revenue-sharing terms.[^3]

<a id="subsec:Data"></a>

### Data

We hand-collect data from three sources. Our main data come from [BoxOfficeMojo](https://www.boxofficemojo.com/),[^4] which provides information on box office revenues by country, country-specific release dates, and various movie characteristics. To address missing box office data for some films released in China, we supplement our data with information from [EntData](http://english.entgroup.cn).[^5] Additionally, we use data from the [International Movie Database (IMDB)](https://www.imdb.com/) , which includes details on whether a movie is a sequel, remake, or spin-off, as well as information on the cast and production locations. Both IMDB and BoxOfficeMojo have a common identifier for movies, allowing us to accurately merge the two datasets.

**Sample.** Our sample begins in 2004, when international box office revenue data becomes more reliable.[^6] We end the sample in 2019 to avoid complications arising from the pandemic. We exclude movies with missing production budget data or without box office revenue information outside the US. The final dataset includes 1,946 movies, with box office revenue data from up to 53 countries. On average, the movies in our sample account for 80% of total US box office revenue and about 50% of global box office revenue over the sample period (Appendix Figure [7](#figure:howRepBoxofficeMojoVsMPA)). Panel A of [Table](#tab:summarystats) presents summary statistics for our main variables. On average, movies in the sample generate nearly half of their box office revenue abroad and are highly profitable; the median return is close to 100%.[^7] Over 95% of the movies in our sample are US productions, and more than 70% are produced by a major or mini-major studio. Some movies are co-produced with studios from other countries. Overall, our sample mainly consists of Hollywood productions that depend heavily on foreign audiences for revenue.

**Evolution of the International Movie Market.** Our dataset allows us to track the changing importance of different audiences for Hollywood box office revenues. We categorize countries into regions and plot their total annual box office revenues over time in Figure [1](#fig:boxofficeOverTime), with the countries in each region listed in Appendix [Table](#tab:countries_by_region). Although the relative importance of most regions remains fairly stable over time, the sharp rise of the Chinese market after 2012 is particularly notable.

<a id="subsec:demand externality"></a>

### Stylized Fact 1: Demand Externality

The 2012 policy change increased demand for foreign movies in China, but did this liberalization also affect the types of movies produced by Hollywood studios? Anecdotal evidence from Tager ([2020](#ref-pen_america_2020)) and Li ([2021](#ref-li_2021)) suggests that Hollywood adapted by avoiding topics sensitive to Chinese censors. While it is difficult to separate changes aimed at appeasing censors from those targeting Chinese audience preferences, we expect that Hollywood studios adjusted their productions to better suit Chinese *audiences*, not just censors.

To test whether the appeal of Hollywood movies to Western and Eastern audiences changed after 2012, we compare how these movies performed with local audiences in both regions before and after the policy shift. Following Ferreira et al. ([2016](#ref-ferreira2016)), we use Hong Kong as a proxy for Chinese audience preferences. Hong Kong's population is predominantly Chinese, but unlike mainland China, it did not restrict the number of foreign films, making it a more suitable comparison to Western markets.

We use country-level box office data, introduced in the previous section, to calculate location-specific market shares for Hong Kong and the US. To account for changes in Hollywood's export strategy unrelated to China, we include Western Europe as a control group. The sample is restricted to movies released between 2008 and 2016 to focus on a period close to the 2012 policy change. To test for shifts in audience preferences, we regress the difference in market share between the US and the same movie's market share in Hong Kong and Western Europe. The difference-in-differences regression uses the 2012 regulatory change as the key event:

$$
\begin{aligned}
| S_{m,US} - S_{mc}| &=\alpha_{c} + \gamma_t + \beta_{1} \cdot HK \cdot POST + \beta_{2}\cdot X_{m} + \epsilon_{mc}
\end{aligned}
$$

where $POST$ indicates years after 2012, and $HK$ represents observations for Hong Kong.

**Market Polarization between East and West.** The difference-in-difference estimates in [Table](#table:reg1) are statistically significant and positive, indicating a widening gap in market share differences between the US and Hong Kong, and the US and Western Europe after the Chinese liberalization of the movie import quota in 2012. Column 1 of [Table](#table:reg1) presents the estimates without control variables or weighting. Columns 3 and 5 show weighted regressions by movie budget, with Column 5 also including movie characteristics as control variables. Figure [2](#figure:hk_vs_westerneurope_covariance) provides a graphical representation of these results, with separate coefficients for each year comparing the market share differences between the US and Hong Kong and the US and Western Europe. Before 2012, the differences are close to zero, but after 2012, they are statistically significant for all but two years.

**Robustness.** In our baseline regression, we restrict our sample to movies released in China but results in Columns 2, 4, and 6 of [Table](#table:reg1) are similar when extending the sample to all movies released in Hong Kong and Western Europe. In Online Appendix [2](#sec:appendix:Additional Reduced Form Results), we explore the source of the bi-furcation in more detail: we find that the result does not hold for R-rated movies but for movies with a less restrictive rating, such as G, PG, or PG-13. This result supports our interpretation of the baseline results because Chinese censors rarely approve R-rated movies for release in China. Hollywood studios are likely to have changed product characteristics of movies that can potentially be approved by Chinese censors but unlikely to have changed R-rated movies. We also find no change for comedy movies, crime movies, and movies showing nudity. These movies are more difficult to translate (comedy movies) or less likely to pass censors (crime, nudity).


<a id="figure:hk_vs_westerneurope_covariance"></a>

> **Market Share Difference-in-Differences**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Difference in difference coefficients of a regression of the absolute difference in market shares between the US and Hong Kong and the US and Western Europe. The sample is limited to movies released in China and starts in 2008 and ends in 2016. The year 2012 is the reference year.


**Alternative Explanations.** Between 2008 and 2016, Hollywood faced a sharp decline in DVD sales and growing competition from streaming services. While these challenges likely influenced the types of movies produced, the shifts in DVD sales and the rise of streaming did not create a clear discontinuity like the Chinese import liberalization in 2012.

Another potential explanation is a change in the type of movies produced in China around 2012, which could have affected the correlation between US and Hong Kong market shares, as Hong Kong also screens Chinese movies. However, if changes in Chinese movie production were the only factor, we would not expect to see a shift in the correlation between the US and Western Europe, where movie production types remained relatively stable around 2012.

<a id="subsec:region-specific risk"></a>

### Stylized Fact 2: Region-Specific Risk

The comparative statics of our simple model in Section [3.3](#subsec:supply_and_equilibrium) suggest the net effect of a change in the composition of consumers also depends on the relative riskiness of the different markets. In this section, we examine the riskiness of box office revenue across different regions in our data. In the absence of ex-ante risk measures, we propose to quantify the realized uncertainty across products. We compute returns for movie $m$ in region $c$ as $R_{mc} =\frac{\text{Revenue}_{mc} + 1}{\text{Production Budget}_m}$. We add one because the regional revenue is sometimes zero when a movie is not shown at all in a certain region. We then measure region-specific risk by the interquartile range (IQR) of log movie returns: $\text{Risk}_c = IQR \left( log\left(R_{mc} \right) \right)$.

Figure [3](#figure:mVM_logret) shows region-specific movie return risk for different regions both before and after China's policy change in 2012. The interquartile range of region-specific movie returns is slightly above one for most regions both before and after 2012, except Asia, which, with an IQR of 1.5 stands out as the riskiest region before 2012 and becomes even riskier after 2012, with the IQR increasing to almost 1.8. Why are movie returns in Asia more uncertain than in other regions? In Appendix Table [Table](#meanVarianceMeasures_iqr_intvsext) we split region-specific return risk into the extensive and intensive margin and find that most of the risk in Asia comes from the extensive margin. This could be due to, for example, uncertainty about how Chinese censors react to certain movies. While studios know that certain movies never pass censors, there is a large gray zone for movies that could potentially be green-lighted by Chinese censors.

<a id="subsec:taking stock"></a>

### Taking Stock

The shift in the co-movement of market shares, as discussed in Section [2.3](#subsec:demand externality), indicates a significant change in Hollywood studios' production strategies, suggesting an adjustment in the equilibrium product mix in response to changes in market composition. Based on the comparative statics from Section [3.3](#subsec:supply_and_equilibrium), this finding suggests that the expansion of the Chinese market led to a product mix more closely aligned with Chinese consumer (or censor) preferences, consistent with the preference externality channel. However, in Section [2.4](#subsec:region-specific risk), we show that movie return risk has been higher in Asia than in other regions, particularly since 2012, supporting the diversification channel. To examine the relative strength of these channels, we develop a quantitative structural model of product design that incorporates a risk-averse supply side and horizontally differentiated consumer groups. We then estimate the model and assess the welfare implications through model-based counterfactual analysis.


<a id="figure:mVM_logret"></a>

> **Movie Return Risk**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: This figure shows region-specific return risk for movies before and after 2012. Risk is measured as the interquartile range of movies’ region-specific log returns.


<a id="sec:simple_model"></a>

## Simple Model: Equilibrium Product Mix in Risky, Differentiated Markets

In this section, we introduce a theoretical framework that encompasses both horizontally differentiated consumers positioned within a generic "taste space\" and a risk-averse monopolist making investment decisions across the same taste space. We first characterize the equilibrium in a two-location scenario. In the quantitative extension below, we will expand the model to accommodate an arbitrary number of consumer groups and product locations.

We begin by characterizing the demand structure, building on Auer ([2017](#ref-AUER20171)), who extended the baseline trade model of Krugman ([1980](#ref-RePEc:aea:aecrev:v:70:y:1980:i:5:p:950-59)) to incorporate heterogeneous consumers through two-sided heterogeneity in product attributes and consumer valuations. We reinterpret this model using an abstract spatial framework, following address-based consumption models as in Anderson et al. ([1992](#ref-anderson1992discrete)). In our approach, distinct consumer groups have preferences represented by 'bliss points'---or each consumer's 'address'---within an arbitrary taste space. Product designs are similarly represented by locations within this space, with a product's appeal depending on its distance from the consumer's location.[^8]

On the supply side, firms enter the market by paying a fixed cost to supply products at different points in the taste space. The proximity to various bliss points within this space determines a firm's total revenue and, consequently, the number of firms supplying across the taste space. Additionally, volatile demand forces firms to balance targeting specific consumer groups against exposure to idiosyncratic risk. This aspect of the model is novel. With volatile demand, heterogeneous tastes create endogenous risk for different products. This risk, in turn, influences the product composition in the market and the welfare distribution across markets.[^9]

We begin by presenting the demand side in general terms before focusing on a two-consumer group scenario. We then solve for the equilibrium, which allows us to perform comparative statics to analyze how the equilibrium product mix responds to changes in the relative size of each group.

### Setup

Consider a global market with a mass of $L$ consumers, divided into distinct groups $i \in \mathcal{I}$. Each consumer has preferences over a homogeneous outside good and a set of differentiated varieties. Each distinct consumer group is characterized by a bliss point $v_i\in \mathcal{S}$, where $\mathcal{S}$ is a closed bounded set of a finite dimensional Euclidean space, which we call the *taste space*. Firms are also positioned in this taste space at $a_j \in \mathcal{S}$, which defines their product characteristics. The utility a consumer derives from a product decreases with the distance $\mathcal{D}(v_i, a_j)$ between the group's bliss point and the product's position, reflecting how well the product matches the group's preferences.

### Demand and Welfare

To model demand, we use a random utility framework where each consumer makes a discrete choice of which product to consume, influenced by a stochastic perception error or amenity shock. Each consumer has a unit income, and the fraction of the population in each consumer group is denoted by $\omega_{i} \in [0,1]$. Regardless of their bliss point, each consumer also experiences a product-specific preference shock, $\varepsilon_{ij}$. The utility of a consumer in group $i$, with a fixed bliss point $v_i$, is given by:


<a id="eq:utility_function"></a>

$$
U_{i}=\left(o_{i}\right)^{1-\alpha}\left(\sum_{j\in J}q_{i,j}\cdot\delta_{j}\cdot G\left(\mathcal{D}\left(v_{i},a_{j}\right)\right)\cdot\varepsilon_{ij}\right)^{\alpha}
$$


Here, $\delta_j$ represents a mean quality shifter that may be exogenous or determined by the firm's investment decisions, while $\alpha$ denotes the expenditure share allocated to differentiated varieties. The term $q_{ij}$ is the quantity of product $j$ consumed by consumer $i$, subject to the budget constraint: $o_{i}p_{O} + \sum q_{ij}p_{j} \leq \theta_{i}$, where $o_{i}$ is the quantity of the outside good, $p_{O}$ is its price, $p_{j}$ is the price of product $j$, and $\theta_{i}$ is the consumer's income.

The terms in [Equation](#eq:utility_function) are interpreted as follows: First, products can be *vertically differentiated* if firms choose a higher $\delta_j$, making them universally better for all consumers. Second, there is *horizontal differentiation*, where products are positioned closer to the bliss point of one consumer group over another. This is captured by the distance term, $\mathcal{D}(v_{i},a_{j})$, with $G(\cdot)$ transforming this distance into a multiplicative demand shifter.

Finally, the multiplicative preference shock, $\varepsilon_{ij}$, is specific to each consumer-product pair and is independent of both horizontal and vertical differentiation. This idiosyncratic taste shock reflects the unobserved heterogeneity of consumers within each group ([Anderson et al. 1992](#ref-anderson1992discrete)).[^10] We assume the preference shock follows a Frechet distribution:

$$
H_{x}\left(\varepsilon_{ij}\right)=\exp\left[-\varepsilon_{ij}^{-\sigma}\right]
$$

where $\sigma$ is the dispersion parameter of the distribution. We now solve for the firm's demand and characterize consumer welfare. Consumer $i$ consumes both an outside good and a composite of differentiated varieties, given by $\sum_{j \in J} q_{ij} \cdot \delta_{j} \cdot G(\mathcal{D}(v_{i}, a_{j})) \cdot \varepsilon_{ij}$. The upper utility function between the composite and the outside good is Cobb-Douglas, implying fixed expenditure shares:

$$
M_{i}=(1-\alpha)/p_{M,i}\text{ and }O_{i}=\alpha/p_{O}
$$

where $p_{M,i}$ is the price of the composite for consumer $i$, and $p_O$ is the price of the outside good. Since varieties are perfect substitutes, each consumer chooses the variety that provides the highest indirect utility, considering the preference shock. The resulting demand is given by the following proposition,

<a id="Prop1"></a>

**Proposition 1** (Demand). *The demand faced by a firm located at taste position $a_j$ with price $p_j$, across all consumers, is given by:*

*

<a id="eq:exp_share"></a>

$$
\pi\left(a_{j},v_{i},\delta_j\right)=L(1-\alpha)\theta_{i}p_{j}^{-(1+\sigma)}\sum_{i}\pi_{i}\frac{\delta_{j}^{\sigma}\cdot G\left(\mathcal{D}\left(v_{i},a_{j}\right)\right)^{-\sigma}}{P(v_{i})^{-\sigma}}
$$

*

*where $P(v)$ is the price index for consumers with bliss point $v$, defined as:

$$
P(v)\equiv\left(\sum_{n\in J}\delta_{n}^{\sigma}p_{n}^{-\sigma}G\left(\mathcal{D}\left(v,a_{j}\right)\right)^{-\sigma}\right)^{-1/\sigma}
$$

*

The proof of the proposition builds on the derivation by Auer ([2017](#ref-AUER20171)), extending it to incorporate Frechet-distributed preference shocks and vertical product differentiation. The full proof is provided in Appendix [7.1](#Appendix_Derivation_Demand). As in Auer ([2017](#ref-AUER20171)), the proof leverages existing results showing that random utility models with extreme value distributed preference shocks can lead to love for variety and monopolistic competition ([Anderson et al. 1992](#ref-anderson1992discrete); [Gabaix et al. 2010](#ref-gabaixevt)).

While preferences are comparable to the canonical models of monopolistic competition ([Dixit and Stiglitz 1977](#ref-dixitstiglitz); [Krugman 1980](#ref-RePEc:aea:aecrev:v:70:y:1980:i:5:p:950-59)), the current framework exhibits distinct distributional effects, where the position of supply in the taste space determines relative welfare effects across consumer groups. These welfare effects can be characterized by the expected utility as given by the following corollary. Detailed derivations are in Appendix [7.1](#Appendix_Derivation_Demand).

<a id="Prop2"></a>

**Corollary 1** (Consumer Welfare). *Denote welfare as the expected (ex-ante) utility derived from the above optimization problem, which can be written for consumer $i$ at bliss point $v_i$ featuring income $\theta_i$ as follows expected welfare of consumer $i$

$$
E\left(U_{i}\left(v,\theta_{i}\right)\right)=(1-\alpha)^{1-\alpha}\alpha^{\alpha}\Gamma\left(1-\frac{\sigma}{\alpha}\right)(P(v))^{-\alpha}\theta_{i}
$$

where $P(v)$ is the ideal price index of the consumer as defined above.*

Given the locations and qualities of consumers and varieties, Corollary [1](#Prop2) enables us to assess the welfare each consumer group gains from participating in the global market. It also allows us to evaluate consumer welfare under different market conditions, such as changes in demand or supply parameters.


> **Portfolio Choice**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: The figure illustrates the portfolio choice problem. The intersection between the marginal contribution to expected revenue (which is illustrated for the symmetric case where it is represented as a line) and the marginal contribution to the overall variance pins down the optimal portfolio mix.


<a id="subsec:supply_and_equilibrium"></a>

### Supply and Equilibrium

In this section, we characterize the supply choice of a risk-averse monopolist facing volatile demand in international markets in a stylized setting. Consider a scenario with a home market, $H$, and a foreign market, $F$. The home market offers predictable and certain returns, while the foreign market is subject to stochastic revenue or market size shocks, which are assumed to be normally distributed, i.e.

$$
x \sim N\left(\mu, \sigma^2_{x}\right)
$$

where $\mu$ is the expected level of the revenue shock and $\sigma^2_{x}$ its variance. We consider a monopolist that is investing in a product either in the location of the home market, $a_H$, or in the location of the uncertain foreign market, $a_F$. Given the demand structure above, a movie in location $a_j \in [a_H,a_F]$ generates revenue given by,

$$
\Pi\left(a_j, \tilde{x}\right)=L \cdot\left(\left(1-\omega_F\right) \cdot \pi\left(a_j, v_H\right)+\omega_F \cdot \pi\left(a_j, v_F\right) \cdot \exp (x)\right)
$$

where $\omega_F$ and $1-\omega_F$ are the population shares of the foreign and home market, respectively, while $\pi(a_j,v_i)$ defines the market shares of a product in location $a_j$ and in destination market $v_i$. The firm makes a choice to allocate investment between home and foreign market, with $\theta_F$ being the investment share in the foreign market. The overall revenue of that portfolio is given by:

$$
W(\theta_F)=\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right) \cdot \exp (x)
$$

where $\Pi_0\left(a_F, a_H, \theta_F\right) \equiv L\left(\left(1-\theta_F\right)\left(1-\omega_F\right) \cdot \pi\left(a_H, v_H\right)+\theta_F\left(1-\omega_F\right) \cdot \pi\left(a_F, v_H\right)\right)$ is the deterministic part of the revenue, and the coefficient $\beta\left(\theta_F\right)=\left[\pi\left(a_H, v_F\right)+\theta_F \Delta \pi\left(a_F, v_F\right)\right] L \cdot \omega_F$ scales the uncertain demand. Finally, $\Delta \pi\left(a_F, v_F\right) \equiv \pi\left(a_F, v_F\right)-\pi\left(a_H, v_F\right)$ defines the relative market shares between foreign and home market for a production in location $F$. The problem is set up such that both products access both the home and the foreign market, however, with a different propensity given their different locations.

We assume that the firm has a Constant Relative Risk Aversion (CRRA) utility function given by:


<a id="eq:monopolist_utility"></a>

$$
V(\theta_F)\equiv \mathbb{E}\left[\frac{W\left(\theta_F\right)^{1-\gamma}}{1-\gamma}\right]
$$


Here, $\gamma > 0$ represents the degree of relative risk aversion. This utility specification, combined with lognormal revenue shocks, parallels classic portfolio problems in the finance literature ([Campbell 2017](#ref-Campbell2017-om)). We use standard methods from this literature to characterize the firm's portfolio choice. Since revenue in the foreign market is subject to lognormally distributed shocks, the overall portfolio revenue also follows a lognormal distribution. This allows us to apply the moment generating function for lognormal variables, substituting the log of the expectation with the expectation of the log plus half the variance of the log of the stochastic revenue. Therefore, the firm's maximization problem is:

$$
\max_{\theta_F} \log V(\theta_F)=\max_{\theta_F} E_t\left[\log W\left(\theta_F\right)\right]+\frac{1}{2}(1-\gamma) \operatorname{Var}\left(\log W\left(\theta_F\right)^{1-\gamma}\right)
$$

where the firm chooses the investment share in the foreign market to optimize a mean-variance trade-off, which depends on the degree of risk aversion, $\gamma$. By applying a second-order Taylor approximation to the expectation of the log of portfolio revenue, we derive a closed-form expression for the firm's optimal choice. The detailed derivation is provided in Appendix [7.2](#Appendix_Derivation_Portfolio). The firm solves the following problem:


$$
\max _{\theta_F}\left\{\log \left(\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right)\right)+\beta\left(\theta_F\right) \mu+\frac{1}{2} \beta\left(\theta_F\right) \sigma^2_{x}-\frac{\gamma}{2}\left(\beta\left(\theta_F\right)\right)^2 \sigma^2_{x}\right\}
$$


The firm earns a certain return from the home market and an uncertain return from the foreign market, creating a trade-off between higher revenue and additional risk. This setup resembles a classic portfolio choice problem, balancing a risky asset (foreign market) against a safe asset (home market). In this simplified context, we can derive a closed-form expression for the optimal investment share. The following proposition presents the optimal allocation, with detailed derivations provided in Appendix [7.2](#Appendix_Derivation_Portfolio).

<a id="Prop3"></a>

**Proposition 2** (Portfolio Choice). *Consider a setting where firms produce a good that targets the certain home market or the volatile foreign market. Denote by $\theta_F$ the share of investment in the foreign market which is given by,

<a id="eq:supply"></a>

$$
\theta_{F}=\frac{\frac{\partial\log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)}{\partial\theta_{F}}+\beta'\left(\theta_{F}\right)\left(\mu+\frac{1}{2}\sigma^{2}_{x}-\gamma\pi\left(a_{H},v_{F}\right)\sigma^{2}_{x}\right)}{\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}_{x}}
$$

where $\Pi_0\left(a_F, a_H, \theta_F\right)$, $\Delta\pi\left(a_{F},v_{F}\right)$, $\beta\left(\theta_{F}\right)$, represent the deterministic revenue, the difference in market shares between home and foreign market, and the uncertain revenue coefficient as defined above.*

Proposition [2](#Prop3) characterizes the equilibrium distribution of product characteristics across the taste space, revealing the two competing forces in the model. On one hand, firms aim to attract a broad range of consumers in the global market by tailoring their products to the preferences of the largest consumer segment. Firms determine their supply choices---and thus the equilibrium product mix---by comparing expected revenues across different product designs. This mechanism, known as a *preference externality* ([Waldfogel 2003](#ref-waldfogel2003)), is counterbalanced by a *diversification channel*. While targeting the largest market can maximize revenue, it also exposes firms to greater idiosyncratic risk. Depending on a firm's risk aversion, captured by $\gamma$, it optimally balances the trade-off between expected revenue and revenue variance across markets---or, in this simplified setting, between home and foreign markets. Thus, the share of investment in the foreign market, $\theta_F$, increases with its relative size but decreases with its volatility, $\sigma_{x}^2$.

<a id="subsec:Comparative Statics"></a>

### Comparative Statics

We then examine how changes in market composition---such as an increase in the size or volatility of a foreign market---impact firms' supply decisions, expenditure shares, and consumer welfare. Through comparative statics, we derive predictions on how firms adjust their product portfolios in response to these shifts. These theoretical predictions form the foundation of our empirical analysis, connecting the model's insights to observed data on international box office revenues. The detailed derivations are provided in Appendix [7.3](#appendix_comparative_statics).

<a id="Prop4"></a>

**Proposition 3** (Comparative Statics). *Consider a small change to the consumer share in the foreign location $F$, i.e. $d\ln\omega_F \neq 0$. Taking a first order approximation, we characterize the changes in the equilibrium portfolio choice, i.e.*

*

$$
d\ln\theta=\psi\cdot\left(\varepsilon_1-\varepsilon_2\right)\cdot d\ln\omega_{F}
$$

*

*where the elasticities are defined as follows,*

*

$$
\epsilon_{1}\equiv\frac{\omega_{F}}{\theta_{F}}\left(\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}_{x}\right)}{\partial\omega_{F}}\right)
$$

*

*

$$
\epsilon_{2}\equiv\frac{\omega_{F}}{\theta_{F}}\left(\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}_{x}\right)}{\partial\omega_{F}}\right)
$$

where $\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}_{x}\right)$ represents the nominator in [Equation](#eq:supply) and where the Online Appendix [7.3](#appendix_comparative_statics) provides the characterization of the magnification term $\psi$.*

**Forces at Play.** Proposition [3](#Prop4) implies that the net effect of an increase in the size of the foreign market depends on the relative strength of the two elasticities, $\epsilon_{1}$ and $\epsilon_{2}$, and the magnification term $\psi$. The elasticities capture the competing mechanisms that determine the equilibrium product mix.

The first elasticity, $\epsilon_{1}$, determines how changes in the market composition $(d\ln\omega_F)$ affect the marginal expected profit which in turn has an impact on the equilibrium product mix. We call this *preference externality channel*. The second elasticity, $\epsilon_{2}$, determines how changes in the market composition affect the marginal variance that the firm is facing, making more concentrated portfolio that are more exposed to the expanding market less attractive. The strength of this mechanism depends on the degree of the supplier's risk-aversion, $\gamma$. We call this mechanism the *diversification channel*. The net effect is ambiguous and depends on the market composition, the degree of risk-aversion, the underlying distribution of demand risk across countries as well as the dispersion parameter which pins down the elasticity of substitution ($\sigma$).

Finally, the equilibrium structure gives rise to a attenuation factor, $\psi$, which captures the fact that as the firm chooses to supply more products towards the expanding market, competition in that market increases, which in turn makes the market less attractive to expand into. The strength of that effect crucially depends on the elasticity of substitution.

**Summary.** Proposition [3](#Prop4) provides a framework for interpreting the empirically estimated treatment effect of a change in market size on the equilibrium product mix. The effect is ambiguous and depends on the relative strength of the preference externality and diversification channels. When risk aversion is low, the preference externality channel likely dominates, and the product mix aligns with the preferences of the largest consumer group. In contrast, with high risk aversion, the influence of the preference externality is weakened by increased exposure to idiosyncratic risk.

While the simplified model considers only two locations, real-world scenarios involve multiple consumer groups with heterogeneous (and potentially correlated) idiosyncratic risks. In such cases, the risk-minimizing product location is influenced by the relative positioning of different countries. We extend the model to accommodate an arbitrary number of countries and consumer groups in Section [4](#sec:model). With these theoretical insights in mind, we now turn to our empirical case study, which examines the evolution of the international box office market and the impact of China's rise on observed product composition.

<a id="sec:model"></a>

## Quantification

We now describe and estimate the quantitative extension of our stylized model from Section [3](#sec:simple_model) , which we use to analyze the impact of China's rise on the global box office. In [Section](#subsec:Quantitative Model), we extend the model to accommodate any finite number of consumer groups and allow a monopolist to make investment choices across a grid of discrete locations spanning the entire taste space. In [Section](#subsec:Estimation_structural_parameters), we detail how we use international box office data to estimate the demand and supply parameters. We also demonstrate that the estimated country and movie locations align meaningfully with observable movie characteristics.

<a id="subsec:Quantitative Model"></a>

### Quantitative Model

We model a risk-averse monopolist who allocates a fixed budget across different points in the taste space, $a_j \in \mathcal{S}$. Each point represents varying proximity to different consumer groups, each subject to idiosyncratic demand shocks. In this framework, selecting points in the taste space is akin to constructing portfolios with different weights on consumer groups. Following the finance literature ([Campbell 2017](#ref-Campbell2017-om)), we treat the choice between locations as a choice between different portfolios with different risk-return characteristics, allowing us to derive closed-form expressions for expected revenue that incorporate the mean-variance trade-off. The monopolist's supply decisions across the taste space are then modeled as a discrete choice subject to extreme value preference shocks. Thus, the supply is determined by the spatial structure of demand and how it influences the monopolist's mean-variance trade-off. We begin by characterizing the expected revenue across the taste space, where producing a product at a given location $a_j$ yields a stochastic return given by:


<a id="eq:profit_ex_ante"></a>

$$
\Pi\left(a_{j},x\right)=\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\cdot\exp\left(x_{i}\left(s\right)\right)
$$


Here, $\beta_i(a_j, v_i) \equiv \omega_i \cdot L \cdot \pi(a_j, v_i)$ represents the revenue coefficient for each consumer group, where $\omega_i$ is the population share, and $\pi(a_{j}, v_{i}, \delta_j)$ denotes the expenditure share of consumers in location $i$ on a product positioned at $a_j$. The term $\tilde{x}_{i}$ is a stochastic demand shock that captures the residual uncertainty about the demand from consumer group $i$ from the monopolist's perspective. We assume this demand shock is log-normally distributed with a group-specific variance.[^11]


<a id="eq:profit_stochastic"></a>

$$
\tilde{x}_{i}\sim N\left(\mu_i,\sigma_{i}^{2}\right)
$$

where $\sigma_{i}^{2}$ is the market-specific variance, and where we have assumed that the shocks are mean zero distributed. Since the sum of log-normally distributed variables is itself log-normally distributed, which we summarize in the following proposition:

<a id="Prop5"></a>

**Proposition 4** (Profit Distribution). *Assume that per product profits are given by [Equation](#eq:profit_ex_ante) and that furthermore, profits are subject to log-normal shocks as in [Equation](#eq:profit_stochastic). Then, profits are themselves log-normally distributed with, i.e.*

*

$$
\ln\Pi\left(a_{j},\delta_{j},s\right)\sim N\left(\mu_{j,\Pi},\sigma_{j,\Pi}^{2}\right)
$$

where $\mu_{j}^{\Pi}$ and $\sigma_{j}^{\Pi}$ are defined in equations [Equation](#eq:exp_revenue) and [Equation](#eq:var_revenue) in Appendix [7.4](#Appendix_Derivation_profit_distribution).*

We furthermore assume that the firm has risk-averse (CRRA) preferences in product-specific profits, i.e.


$$
V\left(a_{j},v_{i},\delta_j,\{\tilde{x}_i\}\right)=\left[\Pi\left(a_{j},\delta_{j},\{\tilde{x}_i\}\right)^{1-\gamma}\right]
$$


Here, $\Pi(a_{j}, v_{i}, \delta_j, {\tilde{x}_i})$ represents the revenue for a product at location $a_j$, and the parameter $A$ determines the degree of absolute risk aversion, which governs the firm's trade-off between expected returns and volatility. For tractability, we assume firms choose which product to produce subject to a multiplicative preference shock. This additional stochastic element on the supply side allows us to derive a closed-form expression for the investment share across the discretized taste space. The shock can be interpreted as capturing unobserved heterogeneity in proportional production costs across the taste space. The firm's objective is to choose the location that maximizes expected profits, accounting for the profit shock:


$$
\max_{j}\left(\left[\log E_{t}\left[V\left(a_{j},v_{i},\delta_j,\{\tilde{x}_i\}\right)\right]\right]\cdot\epsilon_{j}\right)
$$

where $\epsilon_i$ is a Frechet distributed with a common shape parameter $\nu$, and where we exploit the properties of the canonical CARA-normal framework (compare e.g. ([Campbell 2017](#ref-Campbell2017-om))) to obtain a closed-form expressions for the expected revenue - inclusive of the mean-variance trade-off - across the taste space. The proposition below summarizes the resulting supply choice and equilibrium.

**Proposition 5** (Supply and Equilibrium). *Consider a setting where firms choose to produce across a finite number of locations in the taste space. Denote by $\theta_i$ the share of firms that choose to produce in location $i$. The share of firms that choose to produce in that location is given by,

<a id="eq:quant_supply"></a>

$$
\theta_{j}=\frac{\left(B_{j}\left(a_{j},\theta_{1},\ldots,\theta_{n}\right)\right)^{\nu}}{\sum_{h\in\mathcal{G}}\left(B_{j}\left(a_{j},\theta_{1},\ldots,\theta_{n}\right)\right)^{\nu}}
$$

where

$$
B_{j}\left(\theta_1, \ldots, \theta_n\right)\equiv\mu_{j, \Pi}-\frac{\gamma^2}{2} \sigma_{j, \Pi}^2
$$

where the equilibrium is represented by the set of investment shares $\left[\theta_{1},\ldots,\theta_{N}\right]$ that solves the fixed point that is generated by the optimal supply choice in [Equation](#eq:quant_supply).*

Detailed derivations in Appendix [7.4](#Appendix_Derivation_profit_distribution). The framework captures the same forces discussed in Section [3](#sec:simple_model), where the equilibrium product mix is shaped by the competing forces of the *preference externality* and *diversification* channels. We next estimate this model to analyze how the product mix in the international box office evolves in response to shifts in market composition. We also demonstrate how our unique dataset can be used to estimate country and product locations within a normalized taste space.

<a id="subsec:Estimation_structural_parameters"></a>

### Estimation of Structural Parameters

We now focus on estimating the demand and supply sides of our quantitative model. Accurate estimation of the model's structural parameters is essential for understanding the strategic behavior of firms in the global movie market, especially given the heterogeneity of consumer tastes and market-specific risks. In this section, we outline the steps to estimate the key parameters that govern demand and supply dynamics, with a focus on the taste space for demand-side heterogeneity and the risk aversion parameter for supply-side decisions.

<a id="subsec:demand parameters"></a>

#### Demand Parameters: Estimating the Taste Space

To estimate the demand parameters, we assume that movies primarily compete with others released in the same quarter, ensuring they are part of the same consumer choice set and minimizing temporal biases in competitive dynamics.[^12] For tractability, we focus on a subset of movies with the most complete data on foreign market shares, allowing for more robust cross-market comparisons. As shown in Panel B of [Table](#tab:summarystats), this estimation sample consists of movies with larger production budgets and higher success rates, which, by design, generate a greater share of their box office revenue abroad compared to the broader sample. While this selection captures the dynamics of high-profile releases, it may limit the generalizability of our findings to smaller, less internationally oriented films.

####### Estimation.

The estimation process involves three key steps to isolate and quantify the demand parameters. First, we exploit the multiplicative separability between horizontal taste heterogeneity (consumer-specific preferences) and vertical differentiation (overall movie quality) to estimate quality shifters for each film. We use a contraction mapping approach, following Berry et al. ([1995](#ref-Berry1995-rq)), which iteratively adjusts the quality parameters until the predicted market shares match the observed shares. Second, we calculate the residual horizontal market share shifters that reflect how well each movie aligns with local tastes in different markets, after accounting for vertical quality effects. Finally, we construct a two-dimensional taste space by fitting these horizontal shifters, positioning both consumer groups (countries) and products (movies) to capture the underlying structure of taste heterogeneity across markets. A detailed explanation of each estimation step is provided in Appendix [7.5](#Appendix_Demand_Side_Estimation).

What determines the locations of countries and products in the taste space? Generally, these locations are driven by the covariance of their (demeaned) market shares. Specifically, country locations are determined by the covariance of product-specific market shares. Intuitively, if two countries have consistently high or low market shares for the same set of movies, it indicates that those products either appeal to or do not appeal to both countries simultaneously. The model captures this by placing the two countries close together in the taste space. Similarly, if two products exhibit similar market share patterns across different countries---appealing to or being rejected by similar sets of countries---the estimation procedure positions them closer together in the taste space.

Estimating the taste space is inherently a high-dimensional problem due to the need to accurately locate both consumer groups and products. However, as discussed in Appendix [7.5](#Appendix_Demand_Side_Estimation), this challenge can be addressed using trilateration---a method commonly used in geometric problems to determine positions based on distance measurements. Trilateration is a well-behaved convex optimization technique ([Dattorro 2005](#ref-dattorro2005convex)) that allows us to infer positions in the taste space by minimizing the distance between predicted and actual market shares, ensuring stable and convergent solutions even in complex estimation settings.

To normalize the taste space and simplify the distance metric, we follow Bar-Isaac et al. ([2023](#ref-Bar-Isaac2023-ht)) by positioning consumer groups along a ring and placing products within the ring. In this framework, the distance from a product to the center of the ring reflects its degree of horizontal differentiation, while movement along the ring indicates how well a product aligns with specific consumer groups. This structure captures both the diversity of product offerings and their alignment with regional tastes. For simplicity and interpretability, we limit the taste space to two dimensions, balancing model complexity with clarity.


> **Figure**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Panel (a) shows the taste locations of eight different regions in our sample in blue and movie taste locations in light gray. Panel (b) shows a quality-weighted contour plot of the movies. The light blue circles at the region taste locations indicate the market size of each region, which, importantly, is not used in the estimation.


####### Importance of Horizontal Differentiation. {#subsec:Interpreting the Estimated Taste Space}

To highlight the importance of horizontal differentiation, we assess the relative contributions of country-specific taste shocks ($\epsilon_{ij}$) and global taste shifters ($\delta_j$) in explaining the variation in market shares. Figure [6](#var_covar) decomposes this variance, revealing considerable overall variation in market shares over time. While global taste shifters---representing broad, universal appeal---account for most of this variation, horizontal differentiation, which reflects country-specific taste preferences, consistently explains about a quarter of the total variation and dominates the remaining unexplained heterogeneity. This finding underscores the significant influence of regional tastes on market outcomes, suggesting that firms must consider these distinct preferences when planning their global product offerings. Meanwhile, much of the variation in vertical quality shifters is driven by differences in production budgets, particularly among high-budget blockbusters. Overall, the quantitative importance of horizontal differentiation highlights its crucial role in firms' strategies to optimize market positioning and appeal to diverse consumer bases.

####### Country and Movie Locations.

Figure presents the estimated positions of countries and movies within the taste space, revealing notable differences in regional tastes. The algorithm places the Middle East and Other Developed Countries (Australia and New Zealand) near the United States, which is normalized to lie in the western part of the circle. Western Europe is positioned about 10 degrees north of the US, while South America, Africa, and Eastern Europe are about 20 degrees further north. In contrast, Asia is located at the top of the circle, indicating a significant distance from the other regions. The distribution of movies within this space is diverse, with films spread across all areas, though around 30% are positioned along the circle's boundary. When movies are weighted by their global quality shifter, as shown in Figure, a smoothed distribution highlights a clustering near Africa, Eastern Europe, and South America. This suggests that Hollywood studios strategically position films between major markets to balance proximity to key regions with exposure to idiosyncratic risks. Importantly, our estimation method does not rely on market size to determine the locations of movies or countries, emphasizing the role of taste preferences in shaping these positions.

####### Relevance of Estimated Movie Locations.

The estimated positions of movies in the taste space align intuitively with their observable characteristics. Table [Table](#distance_markets) lists the top five movies closest to the US, Asia, Western Europe, and the central taste location, illustrating these strategic alignments. For example, movies like \"Meet the Fockers\" and \"It\" are positioned closest to the US, reflecting their strong appeal to American audiences. In contrast, the movies closest to Asia include three science fiction films, which resonate with regional preferences for visually dynamic and plot-driven genres. Movies located near the center of the taste space are designed for broad appeal, targeting a diverse global audience rather than any specific market.

####### Relationship Between Taste Space and Movie Characteristics.

To understand the positioning of movies within the taste space, we analyze the relationship between estimated locations and observable movie characteristics using regression analysis. This approach identifies which attributes---such as genre, production budget, and production location---are most strongly associated with a movie's placement, providing insights into how Hollywood studios strategically cater to regional tastes. Table [Table](#movieCharChangeInTasteSpace) presents the results. Column 1 focuses on vertical differentiation, showing that movies closer to the center of the taste space---indicating broader appeal---tend to have larger production budgets and are more likely to be dramas or horror films. This suggests that creating movies with wide appeal requires substantial investment, while genres like comedy, which are often culturally specific, may not translate easily across markets. Horizontal differentiation, examined in Column 2, is measured by the angular distance from the US location, reflecting alignment with US tastes. Movies closer to the US generally have lower production budgets and are more likely to be animated, comedies, or romantic films---genres that are less likely to appeal to international audiences or face challenges under restrictive censorship, especially in China.

In contrast, movies positioned further from the US and closer to Asia are often action or drama films and frequently co-produced with Chinese studios. This aligns with evidence that co-productions help studios navigate quotas on foreign films and better target local tastes. Column 2 also shows that a higher global quality shifter ($\delta_j$) is associated with larger budgets, sequels, and US-based productions. Columns 4 and 5 display similar correlations with the estimated taste location coordinates, reinforcing these patterns. Overall, the estimated locations of countries and movies correspond well with observable characteristics, offering a clear understanding of market-specific strategies. Before moving to the welfare analysis based on these estimated locations, we detail the estimation of the model's supply-side parameters.

<a id="subsec:Supply parameters: Portfolio choice"></a>

#### Supply Parameters: Risk Aversion & Productivity Dispersion

To estimate studios' risk aversion, a key input for our counterfactual analysis, we follow an approach that leverages the theoretical framework and empirical data on movie returns. Hollywood studios are large corporations with diversified investor bases, making it difficult to directly estimate their risk aversion in a reduced-form manner. Diversified investors typically prefer risk-neutral behavior to maximize returns, but studios may still exhibit risk aversion due to managerial preferences or other considerations, such as career concerns or reputational risks. Drawing on the approach by Allen and Atkin ([2016](#ref-allen2016volatility)), we use the first-order conditions of the studios' investment problem, as formulated in [Equation](#eq:quant_supply), to infer the risk aversion parameter. For each movie $j$, we derive estimates of $\mu_{j,\Pi}$ and $\sigma_{j,\Pi}$, which are detailed in Appendix [7.4](#Appendix_Derivation_profit_distribution). Conceptually, $\mu_{j,\Pi}$ represents the expected return of a movie adjusted for location-specific risk, while $\sigma_{j,\Pi}$ captures the pure volatility component. We then perform an OLS regression to estimate the relationship between expected returns and risk:

$$
\mu_{j, \Pi} =  \alpha_0 + \beta \cdot \sigma_{j, \Pi}^2 + \epsilon_j
$$

 From the regression coefficient $\hat{\beta}$, we compute the implied risk aversion parameter as $\hat{\gamma} = (1 - 2 \cdot \hat{\beta})$. As shown in [Table](#table:riskAversionEstimate), all estimated coefficients are negative, indicating a positive risk aversion parameter. The top panel of [Table](#table:riskAversionEstimate) presents estimates assuming zero covariance of returns across regions, while the bottom panel accounts for the covariance of movie returns across countries. Notably, the estimated risk aversion coefficient is nearly three times larger when incorporating covariance terms, suggesting that releasing a movie across multiple countries can increase risk exposure rather than provide a hedge. This finding contrasts with the expectation that a diversified portfolio across markets would mitigate risk, highlighting the complexity of international box office dynamics.

The estimates in the bottom panel range from 9.5 to 4.6, decreasing as more fixed effects and control variables are included. For our main analysis, we use a risk aversion parameter of 4.6, derived from the most stringent specification in [Table](#table:riskAversionEstimate) (bottom row, Column 5). This value reflects a conservative estimate that accounts for cross-country correlations in returns, aligning with the observed risk profile of major Hollywood releases.

To estimate the productivity dispersion parameter, $\nu$, we perform a grid search over possible values, simulating [Equation](#eq:quant_supply) based on our estimated $\gamma$ and comparing the simulated density with the observed quality-weighted contour. The parameter value that minimizes this difference is 7.17, determining the supply elasticity to differences in expected revenue.

<a id="sec:The impact of China's rise in the movies market"></a>

## The Impact of China's Rise in the Movies Market

We now study the consequences of the 2012 policy change in China, introduced in Section [2.1](#subsec:Background: Hollywood and China), through the lens of our quantitative model. Section [5.1](#subsec:Change in the Estimated Taste Space) shows how the policy change affected the movies produced by Hollywood in our model. In Section [5.2](#subsec:Impact on Welfare), we use our model to decompose the relative importance of the preference externality and the diversification channels and to evaluate the policy's welfare consequences.

<a id="subsec:Change in the Estimated Taste Space"></a>

### Change in the Estimated Taste Space

We begin by comparing the quality-weighted movie taste locations before and after the 2012 policy change, as shown in Figures Figure and Figure. Both figures display contour plots representing the sum of quality shifters, $\delta$s, for each location. Before 2012, the taste space is characterized by a prominent cluster of movies positioned between Western Europe, the US, and Africa. In contrast, after 2012, the distribution shifts, and the peak between Asia and Western markets becomes flatter and more elongated, indicating a broader spread of movies catering to both regions.

The direction of the change becomes clearer when plotting the *difference* in quality-weighted movies at each location, as shown in Figure. Areas with light gray contours between Asia and Western markets see a reduction in movie density, while regions closer to Asia or Western markets gain more movies. There is also a noticeable decline in movies catering to taste locations south of the US. This shift reflects the preference externality channel in action: Hollywood studios have adjusted their strategies by forming distinct movie clusters in the taste space, with some high-$\delta$ movies moving closer to Asia, consistent with the reduced-form findings in Section [2.3](#subsec:demand externality). Appendix Figure [5](#fig:bimodalTasteDistance) further supports the presence of the preference externality channel by illustrating how the distribution of movie-region distances shifted after 2012. Movie locations in the taste space moved closer to Asia while increasing their distance from the US. In the next section, we will decompose the relative contributions of the preference externality and diversification channels to understand their respective impacts more clearly.

**Robustness.** It is crucial for our results that the relationship between the taste space and observable movie characteristics remains stable around the 2012 policy change. To test this, Panel A of Table [Table](#movieCharChangeInTasteSpace2) regresses estimated movie characteristics on a dummy variable for the post-2012 period, revealing no significant changes in average estimated characteristics. This stability aligns with the observed shifts in the taste space; for example, the null result for the angular distance to the US in Column 2 suggests that while some movies moved closer and others further from the US after 2012, there was no average change. Similarly, Column 1 shows only a minor average change in distance to the center. In Panel B, we interact all available movie characteristics with a post-2012 dummy variable. Compared to the baseline regression in Table [Table](#movieCharChangeInTasteSpace), relatively few interaction terms are statistically significant, indicating that the taste space is relatively stable over time.

The regressions show no change in average estimated characteristics but cannot detect changes in other moments. As a last check before turning to the welfare analysis, we decompose the variance in country-specific movie market shares, $s_{ij}$, into a share coming from variation in the global taste shifter, $\delta_j$, and the local taste component $\epsilon$. Figure [6](#var_covar) shows that overall variance fluctuates over the entire sample, with most of the variation coming from the global taste shifter. Variation in the taste shock consistently accounts for about a quarter of the overall variation, highlighting the quantitative importance of horizontal differentiation. Importantly, there is no clear break visible around 2012.


> **Estimated Taste Space: Before vs. After 2012**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Panel (a) shows a quality-weighted contour plot of estimated movie locations before the Chinese import quota liberalization in 2012. Panel (b) shows the same plot for the period after the liberalization. Panel (c) shows the difference before vs. after.


<a id="subsec:Impact on Welfare"></a>

### Impact on Welfare and Decomposition

<a id="tab:welfare_before_after"></a>

> **Welfare Ranking**

+:----------------+---------:+----------:+-----------:+----------:+----------:+-----------:+
|                 | Risk-averse                       | Risk neutral ($\gamma=0$)          |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Country         | Pre 2012 | Post 2012 | Change (%) | Pre 2012  | Post 2012 | Change (%) |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| US              | 1.80     | 1.87      | 0.07       | 1.67      | 1.24      | -0.42      |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Other Developed | 1.47     | 1.55      | 0.08       | 1.32      | 0.86      | -0.45      |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Middle East     | 1.15     | 1.22      | 0.07       | 0.97      | 0.52      | -0.44      |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Africa          | 1.08     | 0.90      | -0.17      | 1.09      | 1.32      | 0.22       |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Western Europe  | 0.68     | 0.67      | -0.00      | 0.47      | 0.22      | -0.25      |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Eastern Europe  | 0.28     | 0.11      | -0.17      | 0.23      | 0.42      | 0.19       |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| South America   | -0.05    | -0.18     | -0.13      | -0.18     | -0.11     | 0.07       |
+-----------------+----------+-----------+------------+-----------+-----------+------------+
| Asia            | -6.41    | -7.50     | -1.16      | -5.56     | -3.52     | 2.16       |
+-----------------+----------+-----------+------------+-----------+-----------+------------+

**Notes:** This table provides the welfare ranking relative to the mean welfare in the baseline period (Pre 2012). Columns 1 to 3 show the results of the full model where both the preference externality and the diversification channel are operating. Columns 4 to 6 show results when studios are risk-neutral and only the preference externality channel is at work.


<a id="fig:simulated_taste_space"></a>

> **Simulated Taste Space: Before vs. After 2012 Difference**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Both panels show the difference between the before vs. after 2012 quality-weighted estimated movie locations. In Panel (a), studios are risk-neutral, i.e., only the preference externality channel is active. Panel (b) is based on the full model, where preference externality and diversification channels are active.


We now use our model to explore and decompose the welfare implications of the rise of China in the global movie market. The goal is to understand how shifts in market composition, driven by China's growth, affect the equilibrium product mix and, consequently, the welfare of different countries. While calculating welfare changes based on observed shifts in the product mix is feasible, the granularity of the movie market---characterized by a high degree of product differentiation and regional taste heterogeneity---necessitates a more nuanced approach. Instead, we rely on model simulations given changes in the market composition to construct and decompose welfare changes.

**Constructing Welfare.** We construct welfare by simulating the industry equilibrium under different market conditions to recover the product densities $\{\theta_j\}$ across a discretized grid covering the entire taste space. We then calculate the price index, using the product densities and the estimated country-specific locations $\{v_i\}$. This method follows the theoretical foundation laid out in Corollary [1](#Prop2), where we assume $\sigma=5$ ([Simonovska and Waugh 2014](#ref-Simonovska2014-gh)).

To disentangle the effects of the preference externality and diversification channels, we perform the simulations in two distinct ways. First, we set the risk-aversion parameter to zero, effectively disabling the diversification channel and allowing us to isolate the impact of the preference externality channel. In this scenario, the equilibrium product mix is entirely driven by firms' incentives to cater to the largest and most profitable markets.

**Counterfactual without Diversification Channel.**

The results of the counterfactual scenario without the diversification channel are presented in the last three columns of [Table](#tab:welfare_before_after) and Panel (a) in Figure [4](#fig:simulated_taste_space). In this setting, the equilibrium product mix shifts significantly towards the Asian market, reflecting the growing demand from China. The preference externality channel leads firms to shift their product offerings in line with the tastes of the market segment that has increased the most, which in this case is Asia. As a result, Asia experiences welfare gains, while most other countries, including the US and Western Europe, suffer welfare losses due to a reduced variety of products tailored to their specific tastes. Interestingly, Africa shows a slight welfare improvement, which can be attributed to its relative proximity to the Asian taste space and the partial overlap in consumer preferences.

This outcome highlights the dominant effect of the preference externality channel when risk considerations are absent. Firms gravitate towards the most profitable market, which, in turn, reshapes the global product landscape and alters welfare distributions across regions. However, this focus on a single market comes at the cost of decreased diversity in product offerings, leading to potential welfare reductions in markets with smaller consumer bases or distinct preferences.

**Diversification Channel and Preference Externality Channel.** When we incorporate both the diversification and preference externality channels in the full model, as shown in the first three columns of [Table](#tab:welfare_before_after) and Panel (b) in Figure [4](#fig:simulated_taste_space), the results change qualitatively. Here, the risk-aversion parameter plays a crucial role by encouraging firms to spread their product offerings across different markets to hedge against idiosyncratic demand shocks. This diversification strategy prevents strong concentration in any single market, mitigating the risks associated with market-specific volatility.

Under this full model, all countries experience welfare losses relative to the pre-2012 baseline. Notably, the Asian market, which gained under the preference externality-only scenario, suffers the most significant relative loss. This seemingly paradoxical result occurs because the equilibrium product mix now prioritizes risk-averse strategies, resulting in products that provide more \"insurance\" against market volatility but less alignment with the most dominant consumer preferences. This finding underscores a critical insight: while diversification can reduce risk exposure for firms, it can simultaneously lead to a suboptimal product mix from the perspective of consumer welfare, particularly in markets where demand is growing rapidly but is also highly uncertain.

**Interaction Between the Channels and Policy Implications.** The interplay between the preference externality and diversification channels offers several important insights for both firms and policymakers. For firms, the results suggest that balancing between catering to the largest market and diversifying across different consumer bases is essential to optimizing welfare outcomes. The high welfare losses in the fully diversified scenario indicate that risk management strategies should be carefully calibrated, especially in markets with rapidly shifting demand dynamics.

For policymakers, the results suggest that trade policies or cultural regulations that affect market access could have unintended consequences on welfare distribution. For example, increasing import quotas in a highly volatile market like China might encourage global producers to shift their focus towards risk-averse product offerings, potentially reducing overall consumer welfare. Policymakers should consider mechanisms that help stabilize market demand or encourage more tailored products to maximize welfare gains from increased trade openness.

**Taking stock.** Overall, the results from our extended welfare analysis provide a nuanced understanding of how shifts in global market composition, driven by China's rise, can have complex welfare implications across different countries. The interaction between the preference externality and diversification channels presents a double-edged sword: while firms can reduce risk exposure by diversifying, this strategy may lead to globally suboptimal outcomes where consumers in all regions, including the expanding market, experience welfare losses.

<a id="sec:conc"></a>

## Conclusion

In global markets characterized by heterogeneous consumer tastes and substantial customization costs, firms face a critical decision: target the largest market or diversify to reach a broader customer base? We propose both novel theory and empirics to analyze the choices of risk averse suppliers in volatile, horizontally differentiated markets.

We show theoretically that the equilibrium product mix depends on the relative strength of two channels: First, the well-known preference externality channel, and second, the diversification channel. Studying both channels in combination is novel to the literature. Depending on the firm's risk aversion, either channel could dominate and determine the response of the equilibrium product mix to underlying changes in the market composition. In our setting, trade liberalization can lead to heterogeneous welfare gains. Additionally, risk aversion can also imply that all countries lose when firms choose products that provide insurance value. As a result, our results allow for a more nuanced discussion of 'gains from trade'.

As an application, we analyze the rise of China in the international box office market. We show that the rise of China shifted the market composition and the equilibrium product mix significantly. We analyze the welfare implications of this phenomenon using our calibrated model. Importantly, our results highlight the critical role of the diversification channel: without it, firms would choose products benefiting China at the expense of other markets; with it, firms opt for products providing insurance value, potentially leading to suboptimal outcomes for all countries.

Our paper suggests two distinct rationales for trade policy interventions. First, distributional consequences may motivate countries to use subsidies to influence the product mix in their favor, albeit potentially harming trading partners. Second, in risky markets, firm risk aversion may lead to the supply of products that provide insurance rather than optimal consumer value. This suggests that government-sponsored insurance or other risk-hedging mechanisms could mitigate the insurance motive and possibly lead to better outcomes.


## Tables and Figures

<a id="tab:summarystats"></a>

> **Summary Statistics**

+:------------------------+:-------:+:-------:+:-------:+:-------:+:-------:+
| *Panel A:*              | **Baseline Sample**                             |
+-------------------------+---------+---------+---------+---------+---------+
|                         | Mean    | P25     | Median  | P75     | N       |
+-------------------------+---------+---------+---------+---------+---------+
| Production budget       | 53      | 16      | 35      | 70      | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Total boxoffice         | 161     | 32      | 80      | 191     | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Runtime (mins.)         | 110     | 96      | 107     | 120     | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Foreign boxoffice/total | 0.46    |         |         |         | 1932    |
+-------------------------+---------+---------+---------+---------+---------+
| US production           | 0.95    |         |         |         | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Sequel                  | 0.19    |         |         |         | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Remake                  | 0.09    |         |         |         | 1946    |
+-------------------------+---------+---------+---------+---------+---------+
| Rated R                 | 0.40    |         |         |         | 1898    |
+-------------------------+---------+---------+---------+---------+---------+
|                         |                                                 |
+-------------------------+-------------------------------------------------+
| *Panel B:*              | **Estimation Sample**                           |
+-------------------------+---------+---------+---------+---------+---------+
|                         | Mean    | P25     | Median  | P75     | N       |
+-------------------------+---------+---------+---------+---------+---------+
| Production Budget       | 87      | 37      | 72      | 130     | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Total boxoffice         | 311     | 127     | 215     | 386     | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Runtime (mins.)         | 114     | 98      | 112     | 126     | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Foreign boxoffice/total | 0.57    |         |         |         | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| US production           | 0.97    |         |         |         | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Sequel                  | 0.31    |         |         |         | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Remake                  | 0.09    |         |         |         | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Rated R                 | 0.26    |         |         |         | 818     |
+-------------------------+---------+---------+---------+---------+---------+
|                         |                                                 |
+-------------------------+-------------------------------------------------+
| *Panel C:*              | **Estimated Model Quantities**                  |
+-------------------------+---------+---------+---------+---------+---------+
|                         | Mean    | P25     | Median  | P75     | N       |
+-------------------------+---------+---------+---------+---------+---------+
| Distance to center      | 28.05   | 17.89   | 31.03   | 40.00   | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| Angle relative to US    | 81.32   | 44.28   | 73.94   | 118.11  | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| $log(\delta_j)$         | -0.07   | -0.30   | -0.07   | 0.20    | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| $m_{j,1}$               | 0.45    | 0.31    | 0.44    | 0.59    | 818     |
+-------------------------+---------+---------+---------+---------+---------+
| $m_{j,2}$               | 0.52    | 0.33    | 0.53    | 0.71    | 818     |
+-------------------------+---------+---------+---------+---------+---------+

<a id="table:reg1"></a>

> **Market Share Difference-in-Differences**

*The table layout is available in the PDF.*

**Notes:** Difference-in-difference regressions with the absolute difference between US market share and Hong Kong and US market share and Western European market share as dependent variable. *POST* indicates years after China increased the import quota for foreign movies from 20 to 34 movies in 2012. Control variables include the log production budget, the log runtime, indicator variables for the genre, indicators for whether the movie is a sequel, a remake, a spinoff, or whether it is R-rated by the MPAA, and indicators for production countries. In Columns (2), (4), and (6), the sample includes all movies released in Western Europe and in Hong Kong. In Columns (1), (3), and (5), the sample is restricted to movies released in China. The sample runs from 2008 until 2016. Standard errors clustered at the movie level in parentheses.

<a id="distance_markets"></a>

> **List of Five Movies Closest to Country Taste Locations**

--- -------------------------------------------- --------------------------------------
      Closest to US                                Closest to Asia
  1   Meet the Fockers                             Skyscraper
  2   The King's Speech                            Alita: Battle Angel
  3   The Dark Knight                              Ready Player One
  4   Jumanji: The Next Level                      Mission: Impossible - Ghost Protocol
  5   It                                           Poseidon
      Closest to Western Europe                    Closest to Center
  1   Beauty and the Beast                         The Incredible Hulk
  2   Deadpool                                     Maze Runner: The Scorch Trials
  3   Star Wars: Episode VII - The Force Awakens   Hercules
  4   Suicide Squad                                Blade: Trinity
  5   Fifty Shades of Grey                         Salt
  --- -------------------------------------------- --------------------------------------

**Notes:** List of top 5 movies closest to estimated US, Asian, and Western European taste locations. The bottom right movies are closest to the central location (0.5,0.5) in the taste space.

<a id="movieCharChangeInTasteSpace"></a>

> **Estimated Movie Characteristics and Observables**

*The table layout is available in the PDF.*

**Notes:** Regressions relating the distance to the circle center in Column (1), the angle to the US taste location in Column (2), the global quality shifter in Column (3), and the taste space coordinates $m_{j,1}$ and $m_{j,2}$ in Columns (4) and (5) to observable movie characteristics. The coefficients are standardized to allow comparisons across columns. Significance levels are based on robust standard errors.

<a id="obsStructuralChange2012_deltaj"></a>

> **Estimated Movie Characteristics and Quality Shifter $\delta$**

*The table layout is available in the PDF.*

**Notes:** Regressions relating the distance to the circle center in Column (1), the angle to the US taste location in Column (2), and the taste space coordinates $m_{j,1}$ and $m_{j,2}$ in Columns (3) and (4) to the global quality shifter. Significance levels are based on robust standard errors.

<a id="table:riskAversionEstimate"></a>

> **Risk Aversion Estimation**

*The table layout is available in the PDF.*

**Notes:** The table shows regression coefficients of $\mu_{j,\Pi}$ and $\sigma_{j,\Pi}$, defined in Appendix [7.4](#Appendix_Derivation_profit_distribution). The risk aversion coefficient $A$ is based on the estimates, i.e., $\hat{A} = 1 - 2\cdot \hat{\beta}$. In the top panel, $\sigma_{j,\Pi}$ does not take into account the covariance in movie returns across regions. Fixed effects include the US release year, indicators for movie genre, and indicators for sequels, remakes, spin-offs, and whether the movie is rated R. Continuous control variables are log production budget and run-time. Robust standard errors in parentheses.

<a id="movieCharChangeInTasteSpace2"></a>

> **Estimated Movie Characteristics and Observables: Pre. vs. Post 2012**

*The table layout is available in the PDF.*

**Notes:** Regressions relating the distance to the circle center in Column (1), the angle to the US taste location in Column (2), the global quality shifter in Column (3), and the taste space coordinates $m_{j,1}$ and $m_{j,2}$ in Columns (4) and (5) to observable movie characteristics allowing for different slopes before and after 2012. To save space, only the *Post* interactions are reported. The coefficients are standardized to allow comparisons across columns. Significance levels are based on robust standard errors.


<a id="fig:bimodalTasteDistance"></a>

> **Change in Distance: Before vs. After 2012**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Densities of the distance between a movie taste location and Asia in the left hand side panel and to the US taste location in the right hand side panel. The dashed line includes only movies released before 2012, whereas the solid line are movies released after 2012.


<a id="var_covar"></a>

> **Variance Decomposition**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: The figure depicts the variance contribution of the quality shifter (δj), the bilateral taste shifter (ϵij, as well as the overall variance of market shares across the sample.


> **Simulated Taste Space: Before vs. After 2012**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Panel (a) shows a quality-weighted contour plot of simulated movie locations before the Chinese import quota liberalization in 2012. Panel (b) shows the same plot for the period after the liberalization. Panel (c) shows the difference before vs. after.


## Appendix: Derivations

This section of the Appendix presents derivations for the results in Section 2 and Section 5.

<a id="Appendix_Derivation_Demand"></a>

### Section 2.2: Proposition [1](#Prop1) and Corollary [1](#Prop2) (Demand and Welfare)

Sales are given by,


$$
\begin{aligned} & D_{j}\left(a_{j},p_{j},v_{i}=\tilde{v}\right)\\
= & \frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}g_{x}\left(x_{i,j}\right)\operatorname{Pr}\left(\frac{\delta_{j}\times\mathcal{D}\left(a_{j},\tilde{v}\right)\times x_{ij}}{p_{j}}=\max_{n\in J}\frac{\delta_{n}\times\mathcal{D}\left(a_{n},\tilde{v}\right)\times x_{in}}{p_{n}}\right)dx_{ij}\\
= & \operatorname{Pr}\left(\ln\left(x_{i,n}\right)<\ln\left(p_{n}\right)-\ln\left(p_{j}\right)+\ln\delta_{j}-\ln\delta_{n}+\ln\mathcal{D}\left(a_{j},\tilde{v}\right)-\ln\mathcal{D}\left(a_{n},\tilde{v}\right)+\ln\left(x_{i,j}\right)\right)dx_{i,j}
\end{aligned}
$$


If x are distributed Frechet with scale parameter 0 and shape parameter $1/\sigma$, the following holds,


$$
G_{x}\left(x\right)=\exp\left[-x^{-\sigma}\right]=e^{-x^{-\sigma}}
$$


$$
g_{x}\left(x\right)=\sigma x^{-\sigma-1}\exp\left[x^{-\sigma}\right]
$$

and thus,

$$
\begin{aligned}
P_{ij} & =\operatorname{Pr}\left(\ln\left(x_{i,n}\right)<\ln\left(p_{n}\right)-\ln\left(p_{j}\right)+\ln\delta_{j}-\ln\delta_{n}+\ln\mathcal{D}\left(a_{j},\tilde{v}\right)-\ln\mathcal{D}\left(a_{n},\tilde{v}\right)+\ln\left(x_{i,j}\right)\right)\\
 & =\operatorname{Pr}\left(x_{i,n}<x_{ij}\times p_{n}/p_{j}\times\delta_{j}/\delta_{n}\times\mathcal{D}\left(a_{j},\tilde{v}\right)/\mathcal{D}\left(a_{n},\tilde{v}\right)\right)\\
 & =\exp\left[-\left[\frac{x_{ij}p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]
\end{aligned}
$$


so that,

$$
\begin{aligned}
P_{ni}\mid\varepsilon_{ni} & =\prod_{n\neq j}\operatorname{Pr}\left(\ln\left(x_{i,n}\right)<\ln\left(p_{n}\right)-\ln\left(p_{j}\right)+\ln\delta_{j}-\ln\delta_{n}+\ln\mathcal{D}\left(a_{j},\tilde{v}\right)-\ln\mathcal{D}\left(a_{n},\tilde{v}\right)+\ln\left(x_{i,j}\right)\right)\\
 & =\prod_{n\neq j}\exp\left[-\left[\frac{x_{ij}p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\\
 & =\exp\left[-\sum_{n\neq j}\left[\frac{x_{ij}p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\\
 & =\exp\left[-\left(p_{j}\right)^{\sigma}\left(\delta_{j}\right)^{-\sigma}\mathcal{D}\left(a_{j},\tilde{v}\right)^{-\sigma}x_{ij}\sum_{n\neq j}\left[\frac{p_{n}}{\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]
\end{aligned}
$$

 Plugging back in,

$$
\begin{aligned}D_{j}\left(a_{j},p_{j},v_{i}=\tilde{v}\right) & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}g_{x}\left(x_{i,j}\right)\operatorname{Pr}\left(\frac{\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)x_{ij}}{p_{j}}=\max_{n\in J}\frac{\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)x_{in}}{p_{n}}\right)dx_{ij}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\prod_{n\neq j}\exp\left[-\left[\frac{x_{ij}p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)g_{x}\left(x_{i,j}\right)dx_{ij}
\end{aligned}
$$


substituting for the density of the frechet function,


$$
\begin{aligned}D_{j}\left(a_{j},p_{j},v_{i}=\tilde{v}\right) & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\prod_{n\neq j}\exp\left[-\left[\frac{x_{ij}p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)\sigma x_{ij}^{-\sigma-1}e^{x_{ij}^{-\sigma}}dx_{ij}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\prod_{n\neq j}\exp\left[-x_{ij}^{-\sigma}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)\sigma x_{ij}^{-\sigma-1}e^{x_{ij}^{-\sigma}}dx_{ij}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\prod_{n}\exp\left[-x_{ij}^{-\sigma}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)\sigma x_{ij}^{-\sigma-1}dx_{ij}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\exp\left[-x_{ij}^{-\sigma}\sum_{n}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)\sigma x_{ij}^{-\sigma-1}dx_{ij}
\end{aligned}
$$

 Define $t=x^{-\sigma}$ such that $-\sigma x^{-\sigma-1}dx=dt,$ we obtain,

$$
\begin{aligned}D_{j}\left(a_{j},p_{j},v_{i}=\tilde{v}\right) & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\int_{x_{i,j}\in X}\left(\exp\left[-t\sum_{n}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right]\right)\left(-dt\right)\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\left.\frac{\exp\left(-t\sum_{n}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}\right)}{-\sum_{n}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}}\right|_{0}^{\infty}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\frac{1}{\sum_{n}\left[\frac{p_{n}\delta_{j}\mathcal{D}\left(a_{j},\tilde{v}\right)}{p_{j}\delta_{n}\mathcal{D}\left(a_{n},\tilde{v}\right)}\right]^{-\sigma}}\\
 & =\frac{(1-\alpha)\theta_{i}}{p_{j}}\frac{\delta_{j}^{\sigma}p_{j}^{-\sigma}\mathcal{D}\left(a_{j},\tilde{v}\right)^{\sigma}}{\sum_{j}\delta_{j}^{\sigma}p_{j}^{-\sigma}\mathcal{D}\left(a_{j},\tilde{v}\right)^{\sigma}}
\end{aligned}
$$


<a id="Appendix_Derivation_Portfolio"></a>

### Section 2.3: Proposition [2](#Prop3) (Portfolio Choice)

In Section 2.3, we consider a simplified two location case with a certain home market, $H$ and an uncertain foreign market, $F$. Let a firm with fixed capital endowment $\Theta$ make investment allocations $\theta_{i}$ across a finite number of locations, where the total number of products in the market is given by $N=\frac{\Theta}{f}$ and the share of products in each location is given by $n_{i}=\theta_{i}$. Consider a stylized setting where there is a home market, $H$ , and a foreign market, $F$. Population shares are given by $\omega_{F}$ and $\left(1-\omega_{F}\right)$. The home market offers predictable returns, while the foreign market is subject to stochastic revenue shocks which are normally distributed, i.e

$$
x\sim N\left(\mu,\sigma^{2}\right)
$$

 Demand is given by,

$$
\pi\left(a_{j},v_{i}\right)=\frac{\delta_{j}^{\sigma}\mathcal{D}\left(a_{j},v_{i}\right)^{\sigma}}{\sum_{j}\delta_{j}^{\sigma}\mathcal{D}\left(a_{j},v_{i}\right)^{\sigma}}
$$


which we can write more succinctly as,


$$
\pi\left(a_{j},v_{i}\right)=\frac{\tilde{\mathcal{D}}\left(a_{j},v_{i}\right)^{\sigma}}{P\left(v_{i}\right)^{-\sigma}}
$$

where,


$$
P\left(v_{H}\right)=\left[N\left(\left(1-n_{F}\right)\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+n_{F}\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}\right)\right]^{-1/\sigma}
$$


$$
P\left(v_{F}\right)=\left[N\left(\left(1-n_{F}\right)\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+n_{F}\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}\right)\right]^{-1/\sigma}
$$


$$
\tilde{\mathcal{D}}\left(a_{j},v_{i}\right)^{\sigma}\equiv\delta_{j}^{\sigma}\mathcal{D}\left(a_{j},v_{i}\right)^{\sigma}
$$


Revenue of a firm in location $a_j$ is given by,


$$
\Pi\left(a_{j},\tilde{x}\right)=L\times\left(\left(1-\omega_{F}\right)\times\pi\left(a_{j},v_{H}\right)+\omega_{F}\times\pi\left(a_{j},v_{F}\right)\times \exp(x)\right)
$$


Firm makes a choice to invest across home and foreign market, and overall revenue of that portfolio is defined by:

$$
\begin{aligned}
W\left(\theta_F\right) & =\left(1-\theta_F\right) \Pi\left(a_H\right)+\theta_F \Pi\left(a_F\right) \\
 & =\left(1-\theta_F\right)\left(L \times\left(\left(1-\omega_F\right) \times \pi\left(a_H, v_H\right)+\omega_F \times \pi\left(a_H, v_F\right) \times \exp(x)\right)\right)+\theta_F\left(L \times\left(\left(1-\omega_F\right) \times \pi\left(a_F, v_H\right)+\omega_F \times \pi\left(a_F, v_F\right) \times \exp(x)\right)\right) \\
 & =\Pi_0\left(a_F, a_H, \theta_F\right)+\left[\left(1-\theta_F\right) \pi\left(a_H, v_F\right)+\theta_F \pi\left(a_F, v_F\right)\right] L \times \omega_F \times \exp(x) \\
 & =\Pi_0\left(a_F, a_H, \theta_F\right)+\left[\pi\left(a_H, v_F\right)+\theta_F \Delta \pi\left(a_F, v_F\right)\right] L \times \omega_F \times \exp(x) \\
 & =\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right) \times \exp(x)
\end{aligned}
$$

where,

$$
\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)\equiv L\left(\left(1-\theta_{F}\right)\left(1-\omega_{F}\right)\times\pi\left(a_{H},v_{H}\right)+\theta_{F}\left(1-\omega_{F}\right)\times\pi\left(a_{F},v_{H}\right)\right)
$$


is the deterministic part of the revenue, and,


$$
\Delta\pi\left(a_{F},v_{F}\right)\equiv\pi\left(a_{F},v_{F}\right)-\pi\left(a_{H},v_{F}\right)
$$


defines the relative market shares between foreign and home market of a film in location $F$, and finally,


$$
\beta\left(\theta_{F}\right)=\left[\pi\left(a_{H},v_{F}\right)+\theta_{F}\Delta\pi\left(a_{F},v_{F}\right)\right]L\times\omega_{F}
$$


is the revenue coefficient of the uncertain foreign market. We assume that the firm has risk-averse CRRA utility function, given by,


$$
\max\mathbb{E}\left[\frac{W\left(\theta_{F}\right)^{1-\gamma}}{1-\gamma}\right]\text{ where }W\left(\theta_{F}\right)\sim\text{ lognormal }
$$


Multiplying the objective by $(1-\gamma)$ and taking logs of the objective function, we get,


$$
\log\mathbb{E}_{t}\left[W\left(\theta_{F}\right)^{1-\gamma}\right]
$$


If $x$ is lognormal distributed, then $log(x)$ is normal, which implies,


$$
E\exp(\log(x))=\exp\left(E\log(x)+\frac{1}{2}Var(\log(x))\right)
$$


which implies that,


$$
\log Ex=E\log(x)+\frac{1}{2}Var(\log(x))
$$


substituting into the objective and canceling $(1-\gamma)$, we obtain,


$$
\max\log E_{t}\left[W_{t+1}^{1-\gamma}\right]=\max E_{t}\left[\log W_{t+1}\right]+\frac{1}{2}(1-\gamma)Var\left(\log W_{t+1}\right)
$$


Recall that the profit function is given by,


$$
W\left(\theta_{F},x\right)=\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\times exp\left(x\right)
$$


Let us take a Taylor approximation of $\log W\left(\theta_{F}\right)$, around $x=0$, we have,


$$
f\left(x\right)\equiv\log W\left(\theta_{F},x\right)\approx f\left(0\right)+f'\left(x\right)_{x=0}x+\frac{1}{2}f''\left(x\right)_{x=0}x^{2}+o\left(x^{2}\right)
$$


which implies,


$$
\begin{aligned}
\max \log E\left[W\left(\theta_F, x\right)^{1-\gamma}\right] & =E\left[\log \left(\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right)\right)+\beta\left(\theta_F\right) x-\frac{1}{2}\left(\beta\left(\theta_F\right)\right)^2 x^2+\frac{1}{2} \beta\left(\theta_F\right) x^2\right]+\frac{1}{2}(1-\gamma)\left(\tilde{\omega}_F\right)^2 \sigma^2 \\
 & =\log \left(\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right)\right)+\beta\left(\theta_F\right) \mu-\frac{1}{2}\left(\beta\left(\theta_F\right)\right)^2 \sigma^2+\frac{1}{2} \beta\left(\theta_F\right) \sigma^2+\frac{1}{2}(1-\gamma)\left(\beta\left(\theta_F\right)\right)^2 \sigma^2 \\
 & =\log \left(\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right)\right)+\beta\left(\theta_F\right) \mu+\frac{1}{2} \beta\left(\theta_F\right) \sigma^2-\frac{\gamma}{2}\left(\beta\left(\theta_F\right)\right)^2 \sigma^2 \\
 & =\log \left(\Pi_0\left(a_F, a_H, \theta_F\right)+\beta\left(\theta_F\right)\right)+\beta\left(\theta_F\right)\left(\mu+\frac{1}{2} \sigma^2\right)-\frac{\gamma}{2}\left(\beta\left(\theta_F\right)\right)^2 \sigma^2
\end{aligned}
$$

where in the first line we have substituted the second-order taylor approximation as well as the expression for the variance of the revenue expression, in the second line, we have applied the expectation, and in the third and fourth line we have simplified the expression.

We therefore have the following portfolio optimization problem


$$
\max_{\theta_{F}}\left\{ \log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)+\beta\left(\theta_{F}\right)\mu+\frac{1}{2}\beta\left(\theta_{F}\right)\sigma^{2}-\frac{\gamma}{2}\left(\beta\left(\theta_{F}\right)\right)^{2}\sigma^{2}\right\}
$$

where the first order conditions imply,


$$
\frac{\partial\log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)}{\partial\theta_{F}}+\beta'\left(\theta_{F}\right)\left(\mu+\frac{1}{2}\sigma^{2}\right)=\gamma\beta'\left(\theta_{F}\right)\beta\left(\theta_{F}\right)\sigma^{2}
$$

where on the left hand side, we are given the change in the expected revenue (as given by the second-order taylor approximation) and on the right hand side, we have the change in the variance of the portfolio. Substituting for $\beta\left(\theta_{F}\right)$, we obtain,


$$
\frac{\partial\log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)}{\partial\theta_{F}}+\beta'\left(\theta_{F}\right)\left(\mu+\frac{1}{2}\sigma^{2}\right)=\gamma\beta'\left(\theta_{F}\right)\left[\left[\pi\left(a_{H},v_{F}\right)+\theta_{F}\Delta\pi\left(a_{F},v_{F}\right)\right]L\omega_{F}\right]\sigma^{2}
$$


which can be re-arranged to obtain,


$$
\theta_{F}=\frac{\frac{\partial\log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)}{\partial\theta_{F}}+\beta'\left(\theta_{F}\right)\left(\mu+\frac{1}{2}\sigma^{2}-\gamma\pi\left(a_{H},v_{F}\right)\sigma^{2}\right)}{\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}}
$$


If furthermore, $\gamma=0$, then we have,


$$
\theta_{F}=\frac{\frac{\partial\log\left(\Pi_{0}\left(a_{F},a_{H},\theta_{F}\right)+\beta\left(\theta_{F}\right)\right)}{\partial\theta_{F}}+\beta'\left(\theta_{F}\right)\left(\frac{1}{2}\sigma^{2}-\gamma\pi\left(a_{H},v_{F}\right)\sigma^{2}\right)}{\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}}
$$


<a id="appendix_comparative_statics"></a>

### Section 2.3: Proposition [3](#Prop4) (Comparative Statics)

Let us begin by totally differentiating the optimal portfolio choice, $\theta_{F}$, we have,

$$
\theta_{F}=\frac{\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}}
$$

where,

$$
\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)\equiv\frac{\Pi_{0}'\left(a_{F},a_{H},\theta_{F}\right)}{L\omega_{F}}-\alpha\left(\Delta\pi\left(a_{F},v_{F}\right)\right)\pi\left(a_{H},v_{F}\right)\sigma^{2}
$$


Taking total differential with regard to changes in $\omega_{F}$, we obtain,

$$
\begin{aligned}
d\theta_{F} & =\underbrace{\left(\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\omega_{F}}d\omega_{F}+\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\theta_{F}}d\theta_{F}\right)}_{\text{Preference Externality Channel}}\\
 & -\underbrace{\left(\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\omega_{F}}d\omega_{F}+\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\theta_{F}}d\theta_{F}\right)}_{\text{Diversification Channel}}
\end{aligned}
$$


Dividing by $\theta_{F}$, we have,

$$
\begin{aligned}
\frac{d\theta_{F}}{\theta_{F}} & =\underbrace{\left(\frac{1}{\theta_{F}}\left(\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\omega_{F}}\right)d\omega_{F}+\left(\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\theta_{F}}\right)\frac{d\theta_{F}}{\theta_{F}}\right)}_{\text{Preference Externality Channel}}\\
 & -\underbrace{\left(\frac{1}{\theta_{F}}\left(\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\omega_{F}}\right)d\omega_{F}+\left(\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\theta_{F}}\right)\frac{d\theta_{F}}{\theta_{F}}\right)}_{\text{Diversification Channel}}
\end{aligned}
$$


Solving for $\frac{d\theta_{F}}{\theta_{F}}$, we have,

$$
d\ln\theta_{F}=\psi\left[\epsilon_{1}-\epsilon_{2}\right]d\ln\omega_{F}
$$

where,


$$
\psi\equiv\left(1-\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\theta_{F}}+\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\theta_{F}}\right)^{-1}
$$


$$
\epsilon_{1}\equiv\frac{\omega_{F}}{\theta_{F}}\left(\frac{\partial\alpha\left(a_{F},a_{H},\theta_{F},\gamma,\sigma^{2}\right)}{\partial\omega_{F}}\right)
$$


$$
\epsilon_{2}\equiv\frac{\omega_{F}}{\theta_{F}}\left(\frac{\partial\left(\gamma\Delta\pi\left(a_{F},v_{F}\right)\sigma^{2}\right)}{\partial\omega_{F}}\right)
$$


<a id="Appendix_Derivation_profit_distribution"></a>

### [Section](#subsec:Quantitative Model): Proposition [4](#Prop5) (Profit Distribution)

Let us begin by defining the stochastic structure of the economy. Assume that the joint distribution of demand fluctuations across consumer groups are normally and independently distributed across products. In particular, define $x\left(s\right)$as the $\mathcal{I}\times1$ vector of $x_{i}\left(s\right).$ Then $x\sim N\left(\mu^{x},\Sigma^{x}\right)$, where $\mu^{x}\equiv\left[\mu_{i}^{x}\right]$ is a $\mathcal{I}\times1$ vector and $\Sigma^{x}\equiv\left\lfloor \Sigma_{ii'}^{i}\right]$ is a $\mathcal{I}\times\mathcal{I}$ matrix.

Introduce volatility into revenue:

$$
W\left(a_{j},x\right)=\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\times\exp\left(x_{i}\left(s\right)\right)
$$

where $\beta_{i}\left(a_{j},v_{i}\right)\equiv\omega_{i}\times L\times\pi\left(a_{j},v_{i}\right)$

Let us take a Taylor approximation of $\log W\left(\theta_{F}\right)$, around $x=0$

$$
\begin{aligned}
f\left(x\right) & \approx\log\left(\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\right)+\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\left(\ln x_{i}(s)-\mu_{i}\right)-\frac{1}{2}\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}+\frac{1}{2}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}
\end{aligned}
$$


Implies,

$$
\log\Pi\left(a_{j},\delta_{j},s\right)\sim N\left(\mu_{j}^{\Pi},\sigma_{j}^{\Pi}\right)
$$


<a id="eq:exp_revenue"></a>

$$
\mu_{j}^{W}=\log\left(\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\right)-\frac{1}{2}\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}+\frac{1}{2}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}
$$


<a id="eq:var_revenue"></a>

$$
\sigma_{j}^{\Pi}=\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)\Sigma_{gh}^{A,i}
$$


CRRA utility,

$$
\begin{aligned}
\log E_{t}\left[W^{1-\gamma}\right] & =E_{t}\left[\log\left(\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\right)+\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\left(\ln x_{i}(s)-\mu_{i}\right)-\frac{1}{2}\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)x_{i}x_{j}+\frac{1}{2}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}\right]\\
 & +\frac{1}{2}(1-\gamma)\left(\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}\right)\\
 & =\log\left(\sum_{i\in\mathcal{I}}\beta_{i}\left(a_{j},v_{i}\right)\right)+\frac{1}{2}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}+\frac{\gamma}{2}\left(\sum_{h\in\mathcal{G}}\sum_{g\in\mathcal{G}}\beta_{i}\left(a_{j},v_{i}\right)\beta_{i}\left(a_{j},v_{i}\right)\sigma_{ij}^{2}\right)
\end{aligned}
$$


We further stipulate that the firm chooses the profit maximizing product location subject to some stochastic multiplicative perception error,

$$
\max_{j}\left(\left[\log E_{t}\left[W^{1-\gamma}\right]\right]\times\epsilon_{j}\right)
$$

where $\epsilon_{j}$ is Frechet distributed with dispersion parameter $\gamma.$

In equilibrium this implies the following choice probability across space,

$$
\theta_{j}=\frac{\left(B_{j}\left(a_{j},\left\{ \theta_{j}\right\} \right)\right)^{\gamma}}{\sum_{j\in\mathcal{J}}\left(B_{j}\left(a_{j},\left\{ \theta_{j}\right\} \right)\right)^{\gamma}}
$$

where,

$$
B_{j}=\mu_{j}^{W}-\frac{\gamma}{2}\sigma_{j}^{\Pi}
$$


<a id="Appendix_Demand_Side_Estimation"></a>

### [Section](#subsec:Estimation_structural_parameters): Taste Space Estimation

**Separating global from local product appeal.** Assuming the same ticket price for all movies, the market share of a movie $j$ across all locations $v$, i.e., countries, is given by demand in Proposition [1](#Prop1). Taking logs, and following ([Berry 1994](#ref-10.2307/2555829)), we apply a contraction mapping procedure, where for an initial guess for $\{\delta_j^0\}$ we can construct the mean market shares across all markets, $\sigma(\cdot)$, and update $\delta_j$ accordingly, i.e.

$$
\theta \ln \left(\delta_{t}^{h+1}\right)-\theta \ln \left(\delta_{t}^{h}\right)=\ln \left(s_{t}\right)-\ln \left(\tilde{\sigma}_{j}\left(\delta_{h t}\right)\right)
$$

 we iterate this system of equations until convergence and thereby obtain the full set of quality shifters that rationalize the mean market shares of products across all markets.

**Obtaining the horizontal market share shifters.** In a second step, given $\left\{\delta_{j}\right\}$ we use a contraction mapping to back out the residual *horizontal* market share shifters that rationalize - given the vertical shifters - the product-market specific market shares, i.e. $\left\{\epsilon_{ij}\right\}$. Given an initial guess $\left\{\mathcal{D}\left(a_{j},v_{i}\right)^{(0)}\right\}$, we solve iterative until convergence for the updated guess,


$$
\epsilon_{ij}^{(1)}=s_{i j} \cdot \frac{\sum_{k} \tilde{\delta}_{k} \cdot \epsilon_{ij}^{(0)}}{\tilde{\delta}_{j}} \qquad \forall j
$$

where we have used the set of (vertical) quality shifters from the previous paragraph, i.e. $\{\tilde{\delta}_j\}$

$\left\{\mathcal{D}\left(a_{j},v_{i}\right)\right\}$. Given an initial guess $\left\{\mathcal{D}\left(a_{j},v_{i}\right)^{(0)}\right\}$, we solve iterative until convergence for the updated guess,


$$
\tilde{\mathcal{D}}\left(a_{j},v_{i}\right)^{(1)}=s_{i j} \cdot \frac{\sum_{k} \tilde{\delta}_{k} \cdot \tilde{\mathcal{D}}\left(a_{j},v_{i}\right)^{(0)}}{\tilde{\delta}_{j}} \forall j
$$


**Estimating the taste space.** From the previous step we obtain the full set of $\delta_j$ and $\mathcal{D}\left(a_{j},v_{i}\right)$. As a next step, we estimate movie taste locations $a_{j}$ and country taste locations $v_{i}$. We solve the following non-linear optimization problem,

$$
\min _{\left\{v_{i}, a_{j}\right\}} \eta^{\prime} \eta \qquad \eta_{i j}=\mathcal{D}\left(a_j,v_i\right)-\hat{\mathcal{D}}\left(a_j,v_i\right)
$$

where the simulated distance, $\hat{\mathcal{D}}\left(a_j, v_i\right)$, is parameterized as a function of the Euclidean distance between the consumer's location and the product's location, in combination with two parameters $(\gamma_{1,i},\gamma_{2,i})$ that serve to normalize the extent of the taste space, i.e.


$$
\mathcal{D}\left(a_j,v_i\right)=\gamma_{1,i}-d\cdot\gamma_{2,i}\cdot\left(\sum_{l}\left(v_{i,l}-a_{j,l}\right)^{2}\right)^{\frac{1}{2}}
$$

where $\gamma_{1,i}$ and $\gamma_{i,2}$ normalize the range or maximum value $\mathcal{D}\left(a_j,v_i\right)$ can assume.

**Values of $\gamma_{1,i}$ and $\gamma_{i,2}$.**

To determine the values of $\gamma_{1,i}$ and $\gamma_{i,2}$, we first determine the maximum value of $\mathcal{D}\left(a_j,v_i\right)$ at a fixed percentile of the distribution. We do so, to normalize our space to fit the maximum extent of the backed-out values $\mathcal{D}\left(a_{j},v_{i}\right)$, but we constrain ourselves to match the distribution at a specific percentile so that we are not normalizing the space based on outliers.[^13] Similarly, we impose that $\gamma_{2,i}=\frac{\gamma_{1,i}-1}{r}$ where $r$ is the desired radius of the circle that defines the taste space and where finally $d$ is the circle's associated diameter. This second set of parameters constrains the distances to fall within a circle.

####### Identification

For any given distance norm, let $D$ be the number of spatial dimensions, $N$ the number of products and $J$ be the number of distinct consumer groups. The estimation then offers a maximum number[^14] of $N\times J$ moments to estimate the $N\times D$ parameters that pin down the location of all the products and $N\times J$ parameters that pin down the location of all countries. A necessary condition for identification is that $N\times J>N\times \left(D+J\right)$, but since this is a non-linear problem this is barely sufficient and the large number of parameters might raise the question whether identification is at all feasible. However, while the overall optimization problem seems daunting, it shares similarities with a trilateration problem which itself is a well-behaved convex optimization problem. Conditional on normalizing the rotation and scale of the taste space - by fixing the location of any number of two countries, the problem can be tackled as a sequential trilateration problem, where conditional on the location of two countries and the observed 'distances' to any one movie pins down two feasible locations that rationalize the observed data. Choosing one, normalizes the rotation of the space. Additional distances allow us to iteratively determine the location of all other movies and countries sequentially. Estimating the problem jointly is akin to minimizing the joint measurement error across all observed distances. Acknowledging the potential for multiple local minima that arise due to the joint estimation process, in practice we employ a multi-start routine.

## Online Appendix

<a id="sec:appendix:Additional Tables and Figures"></a>

## Additional Tables and Figures


<a id="figure:howRepBoxofficeMojoVsMPA"></a>

> **Data Coverage**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Coverage of total boxoffice data from Boxofficemojo.com for US/Canada and the Global market. Aggregate data are from Motion Picture Association reports, retrieved from im+m business partners.


<a id="tab:countries_by_region"></a>

> **Countries by Region**

-------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  **Region**           **Countries**
  Western Europe       Austria, Belgium, Denmark, Finland, France, Germany, Greece, Iceland, Israel, Italy, Netherlands, Norway, Portugal, Spain, Sweden, United Kingdom
  Eastern Europe       Bulgaria, Croatia, Czech Republic, Hungary, Poland, Russia/CIS, Serbia and Montenegro, Slovakia, Slovenia, Ukraine
  South America        Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Mexico, Peru, Uruguay, Venezuela
  Africa               Egypt, Nigeria, South Africa
  Middle East          Lebanon, Turkey, United Arab Emirates
  Other Developed      Australia, New Zealand
  Asia without China   Hong Kong, Malaysia, Philippines, Singapore, Thailand, South Korea, Japan
  -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

<a id="sec:appendix:Additional Reduced Form Results"></a>

## Additional Reduced Form Results

We also split our sample into different categories. In Figure [8](#figure:corrcoefSizeContinent_byrating) we find that the correlation does not change for R-ratd movies, but only for movies with a less restrictive rating (G, PG, PG-13). This supports our interpretation because Chinese censors almost never approve R-rated movies to be shown in China. Hollywood studios therefore are likely to have adapted movies without an R rating, but left R-rated movies unchanged after China's policy change. Figures [9](#figure:corrcoefSizeContinent_bygenre_Comedy) to [12](#figure:corrcoefSizeContinent_bygenre_Nudity) show similar results for movies of different genres. There is no change for comedy movies, which are more difficult translate into a different cultural context, but the change is evident for action movies. Similarly, there is no change for crime movies and movies involving nudity.

How does this divergence show up at the movie level? Figures [14](#figure:hk_vs_westerneurope_rank2013) and [13](#figure:hk_vs_westerneurope_rank_2010) show the difference in the rank of movies' market shares in 2010 and 2013. A positive difference indicates that a movie was more successful in Hong Kong or Western Europe relative to the US, and vice versa. While the bars tend to point into the same direction in Appendix Figure [13](#figure:hk_vs_westerneurope_rank_2010) there are visible differences in Figure [14](#figure:hk_vs_westerneurope_rank2013) after the policy change.

Most notably is the large difference for the movie "Pacific Rim", a PG-13 rated Action/Sci-Fi movie released in 2013. The movie was a commercial flop in the US and Western Europe, but successful in China.


<a id="figure:corrcoefSizeContinent_byrating"></a>

> **Market Share Difference-in-Differences by Ratings**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Diff-in-diff coefficients as in Figure 2 for subsamples of movies without R-rating (LHS Panel) and movies with R-Rating (RHS Panel).


<a id="figure:corrcoefSizeContinent_bygenre_Comedy"></a>

> **Market Share Difference-in-Differences by Comedy**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Diff-in-diff coefficients as in Figure 2 for subsamples of comedy movies and all other genres.


<a id="figure:corrcoefSizeContinent_bygenre_Action"></a>

> **Market Share Difference-in-Differences by Action**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Diff-in-diff coefficients as in Figure 2 for subsamples of action movies and all other genres.


<a id="figure:corrcoefSizeContinent_bygenre_Crime"></a>

> **Market Share Difference-in-Differences by Crime**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Diff-in-diff coefficients as in Figure 2 for subsamples of crime movies and all other movies.


<a id="figure:corrcoefSizeContinent_bygenre_Nudity"></a>

> **Market Share Difference-in-Differences by Nudity**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Diff-in-diff coefficients as in Figure 2 for subsamples of movies with nudity and all other movies.


<a id="figure:hk_vs_westerneurope_rank_2010"></a>

> **2010 Box Office Rank Differences**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Difference in the rank of annual box-office market shares between the US and Western Europe (gray) and the US and Hong Kong (black). A positive rank difference indicates a movie that was more successful in the US than the respective foreign market and vice-versa. The sample is restricted to movies that have also been released in China.


<a id="figure:hk_vs_westerneurope_rank2013"></a>

> **2014 Box Office Rank Differences**
>
> Figure available in the [PDF](/research/Movies_Adler_Fuchs.pdf).
>
> Notes: Difference in the rank of annual box-office market shares between the US and Western Europe (gray) and the US and Hong Kong (black). A positive rank difference indicates a movie that was more successful in the US than the respective foreign market and vice-versa. The sample is restricted to movies that have also been released in China.


<a id="meanVarianceMeasures_iqr_intvsext"></a>

> **Movie Return Risk: Intensive vs. Extensive Margin**

*The table layout is available in the PDF.*

## Additional Derivations

This appendix presents additional derivations.

### Equilibrium without volatility

Consider the simplified case, where, $v_{i}\in\left\{ \tilde{v}_{H},\tilde{v}_{F}\right\}$, and the location of supply is similarly restricted, $a_{j}\in\left\{ v_{H},v_{F}\right\}$. Demand is given as in Proposition 1, and pricing is marginal cost pricing such that,

$$
p_{j}=\frac{1+\sigma}{\sigma}c_{j}=\frac{1+\sigma}{\sigma}a_{j}^{\gamma}
$$


Revenue is given by,

$$
\Pi\left(a_{j}\right)=\omega_{H}L\frac{\tilde{\mathcal{D}}\left(a_{j},v_{H}\right)^{\sigma}}{P\left(v_{H}\right)^{-\sigma}}+\left(1-\omega_{H}\right)L\frac{\tilde{\mathcal{D}}\left(a_{j},v_{F}\right)^{\sigma}}{P\left(v_{F}\right)^{-\sigma}}
$$


Price index is given by,

$$
\begin{aligned}P\left(v_{H}\right) & =\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}\right)\right]^{-1/\sigma}\text{ and }\\
P\left(v_{F}\right) & =\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}\right)\right]^{-1/\sigma}
\end{aligned}
$$


Free entry implies revenue must be equal everywhere,

$$
\Pi\left(a_{H}\right)=\Pi\left(a_{L}\right)
$$

 which implies,

$$
\omega_{H}L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}}{P\left(v_{H}\right)^{-\sigma}}+\left(1-\omega_{H}\right)L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}}{P\left(v_{F}\right)^{-\sigma}}=\omega_{H}L\frac{\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{P\left(v_{H}\right)^{-\sigma}}+\left(1-\omega_{H}\right)L\frac{\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{P\left(v_{F}\right)^{-\sigma}}
$$


$$
\omega_{H}L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{P\left(v_{H}\right)^{-\sigma}}+\left(1-\omega_{H}\right)L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{P\left(v_{F}\right)^{-\sigma}}=0
$$


$$
\omega_{H}L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}\right)\right]}+\left(1-\omega_{H}\right)L\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}\right)\right]}=0
$$

 since, $f\sigma=\frac{L}{N^{A}}$

$$
\omega_{H}Nf\sigma\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}\right)\right]}+\left(1-\omega_{H}\right)Nf\sigma\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{\left[N\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}\right)\right]}=0
$$


$$
\omega_{H}\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{\left[n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}\right]}+\left(1-\omega_{H}\right)\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{\left[\left(n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}\right)\right]}=0
$$


$$
\frac{\omega_{H}}{1-\omega_{H}}\frac{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}=\frac{\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}
$$


$$
\frac{1-\omega_{H}}{\omega_{H}}\frac{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}=\frac{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}}
$$


$$
\left(1-\omega_{H}\right)\left(\frac{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{F},v_{H}\right)^{-\sigma}}\right)=\left(\omega_{H}\right)\left(\frac{n_{H}\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}+\left(1-n_{H}\right)\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{F},v_{F}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{H},v_{F}\right)^{-\sigma}}\right)
$$


re-arranging and simplifying, we obtain,

$$
n_{H}=\left(\omega_{H}\frac{\tilde{\mathcal{D}}\left(a_{L},v_{L}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{L},v_{L}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{H},v_{L}\right)^{-\sigma}}-\left(1-\omega_{H}\right)\frac{\tilde{\mathcal{D}}\left(a_{L},v_{H}\right)^{-\sigma}}{\tilde{\mathcal{D}}\left(a_{H},v_{H}\right)^{-\sigma}-\tilde{\mathcal{D}}\left(a_{L},v_{H}\right)^{-\sigma}}\right)
$$

 which defines the equilibrium supply of products at the $H$ and $F$ location.


## References

<a id="ref-allen2016volatility"></a>

Allen, Treb, and David Atkin. 2016. *Volatility and the Gains from Trade*. National Bureau of Economic Research.

<a id="ref-Allen2022-gr"></a>

Allen, Treb, and David Atkin. 2022. "Volatility and the Gains from Trade." *Econometrica* 90 (5): 2053--92.

<a id="ref-anderson1992discrete"></a>

Anderson, S. P., A. De Palma, J. F. Thisse, and J. F. Thisse. 1992. *Discrete Choice Theory of Product Differentiation*. The MIT Press. MIT Press. <https://books.google.com/books?id=xiXGtz47p5oC>.

<a id="ref-AUER20171"></a>

Auer, Raphael A. 2017. "Product Heterogeneity, Cross-Country Taste Differences, and the Growth of World Trade." *European Economic Review* 100: 1--27. https://doi.org/10.1016/j.euroecorev.2017.05.010.

<a id="ref-Bar-Isaac2023-ht"></a>

Bar-Isaac, Heski, Guillermo Caruana, and Vicente Cuñat. 2023. "Targeted Product Design." *American Economic Journal: Microeconomics* 15 (2): 157--86.

<a id="ref-10.2307/2555829"></a>

Berry, Steven T. 1994. "Estimating Discrete-Choice Models of Product Differentiation." *The RAND Journal of Economics* 25 (2): 242--62. <http://www.jstor.org/stable/2555829>.

<a id="ref-Berry1995-rq"></a>

Berry, Steven, James Levinsohn, and Ariel Pakes. 1995. "Automobile Prices in Market Equilibrium." *Econometrica* 63 (4): 841--90.

<a id="ref-brenner2015risk"></a>

Brenner, Steffen. 2015. "The Risk Preferences of US Executives." *Management Science* 61 (6): 1344--61.

<a id="ref-Campbell2017-om"></a>

Campbell, J Y. 2017. *Financial Decisions and Markets: A Course in Asset Pricing*. Princeton University Press.

<a id="ref-Cosar2018-bs"></a>

Coşar, A Kerem, Paul L E Grieco, Shengyu Li, and Felix Tintelnot. 2018a. "What Drives Home Market Advantage?" *J. Int. Econ.* 110 (January): 135--50.

<a id="ref-COSAR2018135"></a>

Coşar, A. Kerem, Paul L. E. Grieco, Shengyu Li, and Felix Tintelnot. 2018b. "What Drives Home Market Advantage?" *Journal of International Economics* 110: 135--50. https://doi.org/10.1016/j.jinteco.2017.11.001.

<a id="ref-dattorro2005convex"></a>

Dattorro, J. 2005. *Convex Optimization & Euclidean Distance Geometry*. Meboo Publishing. <https://books.google.com/books?id=VxuRF4NhjqkC>.

<a id="ref-De_Vany2006-eq"></a>

De Vany, Arthur. 2006. "Chapter 19 the Movies." In *Handbook of the Economics of Art and Culture*, edited by Victor A Ginsburg and David Throsby, vol. 1. Elsevier.

<a id="ref-dixitstiglitz"></a>

Dixit, Avinash K., and Joseph E. Stiglitz. 1977. "Monopolistic Competition and Optimum Product Diversity." *The American Economic Review* 67 (3): 297--308. <http://www.jstor.org/stable/1831401>.

<a id="ref-Eaton2011-bp"></a>

Eaton, Jonathan, Samuel Kortum, and Francis Kramarz. 2011. "An Anatomy of International Trade: Evidence from French Firms." *Econometrica* 79 (5): 1453--98.

<a id="ref-ESPOSITO2022103562"></a>

Esposito, Federico. 2022. "Demand Risk and Diversification Through International Trade." *Journal of International Economics* 135: 103562. https://doi.org/10.1016/j.jinteco.2021.103562.

<a id="ref-RePEc:ucp:jpolec:doi:10.1086/662628"></a>

Fajgelbaum, Pablo, Gene M. Grossman, and Elhanan Helpman. 2011. "Income Distribution, Product Quality, and International Trade." *Journal of Political Economy* 119 (4): 721--65. <https://doi.org/10.1086/662628>.

<a id="ref-ferreira2012trade"></a>

Ferreira, Fernando, Amil Petrin, and Joel Waldfogel. 2012. "Trade, Endogenous Quality, and Welfare in Motion Pictures." *Working Paper*.

<a id="ref-ferreira2016"></a>

Ferreira, Fernando, Amil Petrin, and Joel Waldfogel. 2016. "Preference Externalities and the Rise of China: Measuring Their Impact on Consumers and Producers in Global Film Markets." *Working Paper*.

<a id="ref-fieler2011"></a>

Fieler, Ana. 2011. "Nonhomotheticity and Bilateral Trade: Evidence and a Quantitative Explanation." *Econometrica* 79 (July): 1069--101. <https://doi.org/10.2307/41237856>.

<a id="ref-Fillat2015-pj"></a>

Fillat, José L, and Stefania Garetto. 2015. "Risk, Returns, and Multinational Production." *The Quarterly Journal of Economics* 130 (4): 2027--73.

<a id="ref-RePEc:usg:econwp:2017:03"></a>

Foellmi, Reto, Christian Hepenstrick, and Josef Zweimüller. 2017. *International arbitrage and the extensive margin of trade between rich and poor countries*. Economics Working Paper Series No. 1703. University of St. Gallen, School of Economics; Political Science. <https://ideas.repec.org/p/usg/econwp/201703.html>.

<a id="ref-gabaixevt"></a>

Gabaix, Xavier, David Laibson, Deyuan Li, Hongyi Li, Sidney Resnick, and Casper Vries. 2010. *Extreme Value Theory and Equilibrium Prices*. January.

<a id="ref-George2003"></a>

George, Lisa, and Joel Waldfogel. 2003. "Who Affects Whom in Daily Newspaper Markets?" *Journal of Political Economy* 111 (4): 765--84. <http://www.jstor.org/stable/10.1086/375380>.

<a id="ref-https://doi.org/10.3982/ECTA11041"></a>

Giovanni, Julian di, Andrei A. Levchenko, and Isabelle Mejean. 2014. "Firms, Destinations, and Aggregate Fluctuations." *Econometrica* 82 (4): 1303--40. https://doi.org/10.3982/ECTA11041.

<a id="ref-Hanson2011-oc"></a>

Hanson, Gordon H, and Chong Xiang. 2011. "Trade Barriers and Trade Flows with Product Heterogeneity: An Application to US Motion Picture Exports." *Journal of International Economics* 83 (1): 14--26.

<a id="ref-Hermosilla2018"></a>

Hermosilla, Manuel, Fernanda Gutierrez-Navratil, and Juan Prieto-Rodriguez. 2018. "Can Emerging Markets Tilt Global Product Design? Impacts of Chinese Colorism on Hollywood Castings." *Marketing Science* 37 (3): 356--81.

<a id="ref-kramarz2020volatility"></a>

Kramarz, Francis, Julien Martin, and Isabelle Mejean. 2020. "Volatility in the Small and in the Large: The Lack of Diversification in International Trade." *Journal of International Economics* 122: 103276.

<a id="ref-RePEc:aea:aecrev:v:70:y:1980:i:5:p:950-59"></a>

Krugman, Paul. 1980. "Scale Economies, Product Differentiation, and the Pattern of Trade." *American Economic Review* 70 (5): 950--59. <https://ideas.repec.org/a/aea/aecrev/v70y1980i5p950-59.html>.

<a id="ref-li_2021"></a>

Li, Shirley. 2021. "How Hollywood Sold Out to China." In *The Atlantic*. Atlantic Media Company. <https://www.theatlantic.com/culture/archive/2021/09/how-hollywood-sold-out-to-china/620021/>.

<a id="ref-Linder_61"></a>

Linder, Staffan Burenstam. 1961--. *An Essay on Trade and Transformation.* Wiley.

<a id="ref-Mayer2014-yb"></a>

Mayer, Thierry, Marc J Melitz, and Gianmarco I P Ottaviano. 2014. "Market Size, Competition, and the Product Mix of Exporters." *Am. Econ. Rev.* 104 (2): 495--536.

<a id="ref-MPAA2019"></a>

Motion Picture Association of America. 2019. *2019 Theme Report*. Annual Report. Motion Picture Association of America. <https://www.motionpictures.org/wp-content/uploads/2020/03/MPA-THEME-2019.pdf>.

<a id="ref-Munch2014-hy"></a>

Munch, Jakob, and Daniel Nguyen. 2014. "Decomposing Firm-Level Sales Variation." *J. Econ. Behav. Organ.* 106 (C): 317--34.

<a id="ref-Newbery1984-ru"></a>

Newbery, David, and Joseph E Stiglitz. 1984. "Pareto Inferior Trade." *Rev. Econ. Stud.* 51 (1): 1--12.

<a id="ref-Ramondo2010-ji"></a>

Ramondo, Natalia, Kim Ruhl, and Veronica Rappoport. 2010. "The Proximity-Concentration Tradeoff Under Uncertainty." *SSRN Electron. J.*

<a id="ref-ravid2004managerial"></a>

Ravid, S Abraham, and Suman Basuroy. 2004. "Managerial Objectives, the r-Rating Puzzle, and the Production of Violent Films." *The Journal of Business* 77 (S2): S155--92.

<a id="ref-Simonovska2014-gh"></a>

Simonovska, Ina, and Michael E Waugh. 2014. "The Elasticity of Trade: Estimates and Evidence." *J. Int. Econ.* 92 (1): 34--50.

<a id="ref-smith1985determinants"></a>

Smith, Clifford W, and Rene M Stulz. 1985. "The Determinants of Firms' Hedging Policies." *Journal of Financial and Quantitative Analysis* 20 (4): 391--405.

<a id="ref-pen_america_2020"></a>

Tager, James. 2020. "Made in Hollywood, Censored by Beijing." In *PEN America*. <https://pen.org/report/made-in-hollywood-censored-by-beijing/>.

<a id="ref-waldfogel2003"></a>

Waldfogel, Joel. 2003. "Preference Externalities: An Empirical Study of Who Benefits Whom in Differentiated-Product Markets." *The RAND Journal of Economics* 34 (3): 557--68. <http://www.jstor.org/stable/1593746>.

[^1]: For their comments, we are grateful to Treb Allen, Thomas Chaney, Andreas Hefti, Stephan Heblich, Christian Hellwig, Thierry Mayer and Juan Rubio-Ramirez. This Project has received funding from the European Research Council (ERC) under the European Union's Horizon2020, research and innovation program GA number 788547 (APMPAL-HET). Konrad Adler acknowledges funding by the ERC ADG 2016 - GA 740272 lending. This draft was formerly circulated as 'Globalization and Taste Heterogeneity: Evidence from Hollywood'. All remaining errors are our own. The views expressed herein are those of the authors and not necessarily those of the Federal Reserve Bank of Atlanta or the Federal Reserve System.

[^2]: As we will discuss below, recent papers have either explored taste heterogeneity ([Auer 2017](#ref-AUER20171); [A. Kerem Coşar et al. 2018b](#ref-COSAR2018135)) or the relationship between trade and volatile demand ([Allen and Atkin 2022](#ref-Allen2022-gr); [Esposito 2022](#ref-ESPOSITO2022103562)), but the interplay between both channels remains unexplored.

[^3]: This regulatory change has been used as a source of arguably exogenous variation in other studies. For example, Hermosilla et al. ([2018](#ref-Hermosilla2018)) examine whether Hollywood studios catered more to Chinese audience preferences after 2012, particularly by employing actors with fair skin.

[^4]: Retrieved in April 2020.

[^5]: Boxofficemojo reports no box office revenue generated in China for Harry Potter and the half-blood Prince, for example. Press reports and EntData indicate that the movie was released in China and generated around \$20 million in revenue there.

[^6]: Before 2004, BoxOfficeMojo's coverage of international box office data is sparse.

[^7]: Production costs may be underestimated, and our data filters likely select more profitable movies.

[^8]: We remain general in the theoretical framework, only assuming a Euclidean distance norm for the taste space without specifying its dimensionality. A one-dimensional space aligns with the Hotelling model, while a two-dimensional ring corresponds to the Salop model. For our empirical implementation, we adopt a two-dimensional space, assuming consumers are located on a ring and product locations are within the ring. This setup, inspired by Bar-Isaac et al. ([2023](#ref-Bar-Isaac2023-ht)), allows us to capture horizontal differentiation and target specific consumer groups along the ring.

[^9]: While demand risk and its impact on trade has been recently explored by ([Esposito 2022](#ref-ESPOSITO2022103562)), our model demonstrates how heterogeneous taste endogenously generates risk for different products in the taste space, creating a unique trade-off on the supply side and a channel that determines product composition and welfare distribution across markets.

[^10]: Anderson et al. ([1992](#ref-anderson1992discrete)) show that the random utility/address-based model presented here is isomorphic to a representative agent model with a constant elasticity of substitution between products.

[^11]: While some studies have shown that movie revenues exhibit extreme tails inconsistent with a normal distribution ([De Vany 2006](#ref-De_Vany2006-eq)), we model residual uncertainty across markets, conditional on a movie's average performance and its relative position toward each market.

[^12]: We use the local release date to compute market shares because approximately 50% of movies outside the US are released at least one quarter later than in the US.

[^13]: Specifically, conditional on choosing a percentile $c$, and having obtained the c'th percentile of the data vector, i.e. $\mathcal{D}^c$, we impose the following normalization,

$$
\gamma_{1,i} = \left( \frac{1}{1 - \frac{c}{100}} \right) \left( \mathcal{D}^c_{i} - \frac{c}{100} \right)
$$

where $\gamma_i$ and $\mathcal{D}^c$ are calculated as location specific coefficients. In our baseline, we assume that $c$ is 20 such that the space is normalized using the value at the 80th percentile.

[^14]: That is if the products are being released and observed in all markets. In practice, release is often selective and zeros will be prevalent in our datasets.
