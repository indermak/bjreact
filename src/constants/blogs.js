import React from 'react';

const blogs = [
    {
        "type": "node--article",
        category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "dejargonify-mutual-fund-terms",
        orderSequence: 27,
        readingTime: 10,
        "attributes": {
            "status": true,
            "title": "Dejargonifying Mutual Fund Terms",
            imgLink: '/mf-img-01.png',
            detailImgLink: '/mf-img-lg-01.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <p>In the popular Bollywood movie, 3 Idiots, in a humorous scene, a book was sarcastically
                      defined as instruments that record, analyse, summarise, organise, debate and explain
                      information; that are illustrated, non-illustrated, hardbound, paperback, jacketed,
                      non-jacketed; with foreword, introduction, table of contents, index; that are indented
                      for the enlightenment, understanding, enrichment, enhancement and education of the human
      brain through sensory route of vision - sometimes touch.</p>
                    <h2>Below is a list of mutual fund terms that we have chosen:</h2>
                    <ul id="articlenav" className="links">
                        <li><a href="#alpha">Alpha</a></li>
                        <li><a href="#amc">AMC</a></li>
                        <li><a href="#aum">AUM</a></li>
                        <li><a href="#beta">Beta </a></li>
                        <li><a href="#benchmark">Benchmark</a></li>
                        <li><a href="#capital_gain">Capital Gain</a></li>
                        <li><a href="#closed_ended_funds">Closed ended funds</a></li>
                        <li><a href="#compounding">Compounding </a></li>
                        <li><a href="#consolidated_account_statement">Consolidated Account Statement</a></li>
                        <li><a href="#elss">ELSS</a></li>
                        <li><a href="#entry_load">Entry Load</a></li>
                        <li><a href="#exit_load">Exit Load</a></li>
                        <li><a href="#expense_ratio">Expense Ratio</a></li>
                        <li><a href="#kyc">KYC</a></li>
                        <li><a href="#load">Load</a></li>
                        <li><a href="#nav">NAV</a></li>
                        <li><a href="#open_ended_funds">Open Ended Funds</a></li>
                        <li><a href="#sip">SIP</a></li>
                        <li><a href="#standard_deviation">Standard Deviation</a></li>
                        <li><a href="#units">Units</a></li>
                        <li><a href="#dividend">Dividend</a></li>
                        <li><a href="#nfo">NFO</a></li>
                        <li><a href="#flexi_sip">Flexi-SIP</a></li>
                        <li><a href="#ulip">ULIP</a></li>
                    </ul>
                </div>
                <span class="anchor" id="alpha"></span>
                <div className="pb-4 scrollarticle">
                    <h3 className="top"> Alpha</h3>
                    <p>In a class of 30 students, the average marks scored in mathematics is 60%. One student
                      scored 70%. Has this particular student fared better at mathematics than class average?
      The answer is a simple yes. The 10% gap in simple terms is alpha.</p>
                    <p>
                        Alpha is a tool to calculate investment progress in comparison to a benchmark like an
                        index. A positive alpha of 1.0 translates into the fund’s outperformance over its
      benchmark index by 1%. A negative alpha of 1.0 indicates underperformance of 1%. <br />
                        Alpha= R – Rf – beta (Rm-Rf)<br />
                        Alpha as per the above formula can explained as Portfolio Return minus the Risk free
                        rate of return minus Beta (measure of volatility of returns in a portfolio) multiplied
                        by Benchmark return minus Risk free rate of return.
                        For example, assuming that the actual return of the fund is 30, the risk-free rate is
      8%, beta is 1.1, and the benchmark index return is 20%, alpha is calculated as:<br />
                        Alpha = (0.30-0.08) – 1.1 (0.20-0.08) = 0. 088 or 8.8%<br />
                        The above reflects the investment’s outperformance over its benchmark index by 8.8%.
    </p>
                    <span> </span>
                </div>

                <span class="anchor" id="amc"></span>

                <div  className="pb-4 scrollarticle">
                    <h3>AMC</h3>
                    <p> AMC - 'Asset Management Company’. As the name suggest it is a company that is
      responsible for managing the assets purchased using one’s investment funds. </p>
                    <p>AMC is a company that decides to invest funds pooled by clients into different types of
                      securities as per stated objectives, thereby providing clients more diversification and
      investment options. AMCs earn income by charging service fees to clients. </p>
                </div>
                <div id="aum" className="pb-4">
                    <h3>AUM</h3>
                    <p>
                        AUM – ‘Assets Under Management’<br />
                        AUM is the total market value of investments managed by AMCs. <br />
                        Why is it relevant? AMC’s charge fund management fees on the assets managed by them.
                        Thus higher the AUM implies higher is the fees earned by the AMC.
    </p>
                </div>
                <span class="anchor" id="beta"></span>

                <div className="pb-4">
                    <h3>Beta</h3>
                    <p>
                        We all would clearly enjoy higher returns or alpha. However there is no free lunch.
                        Higher returns may also be accompanied with higher risk. Just like alpha measures the
                        return of one’s funds compared to an index, Beta measures the volatility of returns or
                        risk in a portfolio compared to the entire market. Stock with a higher beta has greater
      risk. It is translated as below: <br />
                        If Beta is 1, then the risk of portfolio is exactly as per the market. So, if Sensex or
                        Nifty go up by 5%, the portfolio value would go up by 5%. If Sensex or Nifty fall by 2%,
                        the portfolio value is expected to fall by 2%.
    </p>
                    <p>If Beta is higher than 1, then the portfolio is more volatile than the market. Example if
                      Beta is 2, if Sensex or Nifty go up by 5%, the portfolio value would go up by 10%, if
      Sensex or Nifty fall by 2%, the portfolio value is expected to fall by 4%.</p>
                    <p>If Beta is lesser than 1, then the portfolio is less volatile than the market. Example if
                      Beta is 0.5, if Sensex or Nifty go up by 5%, the portfolio value would go up by 2.5%, if
      Sensex or Nifty fall by 2%, the portfolio value is expected to fall by 1%.</p>
                    <p>
                        If Beta is zero, then the portfolio is uncorrelated to the market<br />
                        If Beta is less than zero, then the portfolio is negatively uncorrelated to the market
    </p>
                </div>

                <span class="anchor" id="benchmark"></span>
                <div className="pb-4">
                    <h3>Benchmark</h3>
                    <p>
                        Student A has scored 95% in mathematics. How does that compare to another student B who
                        has scored 90% in a literature subject. Difficult to compare right? But if the remaining
                        students have all scored 100% in mathematics then one knows that the student A has not
                        fared well in mathematics.
      A benchmark is a standard used against which mutual fund performance is measured. <br />
                        Hence a Pharma fund’s performance would need to be compared to a benchmark made of
                        pharma companies e.g. Nifty Pharma index.
    </p>
                </div>
                <span class="anchor" id="capital_gain"></span>

                <div className="pb-4">
                    <h3>Capital Gain</h3>
                    <p>One has being investing Rs 10,000/- in a balanced <a href="https://onebajaj.capital/mutual-fund/investment" title="Mutual Fund">mutual funds</a>
                        every month to save for a car. After 4 years one has invested Rs 4,80,000/-. Due to a
                        strong equity market the fund has given good returns and the value of total investment
                        is Rs 6,00,000/- today. One decides it is time to buy a car finally and liquidate one’s
                        investments. The difference between current fund value (Rs 6,00,000/-) and the amount
      invested (Rs 4,80,000/-) is capital gains earned.</p>
                    <p>It is the profit earned from disposing of an asset, or from holding it while its market
                      value increases. It essentially is increase in value of an asset (such as stock or real
      estate) between the time it is bought and the time it is sold.</p>
                    <div className="part">
                        <p>There are 2 kinds of capital gains, 1) Short Term Capital Gain and 2) Long Term
        Capital Gain. They are determined by type of fund and the tenor of holding. </p>
                        <ol>
                            <li>
                                Short Term Capital Gain:
          <ul className="mt-3">
                                    <li>For equity funds if the holding period is less than 1 year.</li>
                                    <li>For Debt funds if the holding period is less than 3 year.</li>
                                </ul>
                            </li>
                            <li>
                                Long Term Capital Gain:
          <ul className="mt-3">
                                    <li>For equity funds if the holding period is more than 1 year.</li>
                                    <li>For Debt funds if the holding period is more than 3 year.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
                <span class="anchor" id="closed_ended_funds"></span>

                <div  className="pb-4">
                    <h3>Closed ended funds</h3>
                    <p>Closed-ended funds are a type of funds that are not redeemable from the fund. Unlike
                      open-end funds, which one can redeem at any given point, investors in closed ended funds
      commit their funds for the duration of the fund. </p>
                    <p>At the time of New Fund offering, the AMC issues a specific number of shares based on the
      amount of money raised. No additions can be made thereafter.</p>
                    <p>The advantage of a closed ended fund is that the fund manager need not worry about
                      redemptions in the fund and hence can invest for the entire duration of the fund in
      securities that may provide higher returns but also carry higher risk in short term.</p>
                </div>
                <span class="anchor" id="compounding"></span>

                <div  className="pb-4">
                    <h3>Compounding</h3>
                    <p>
                        Let us assume there are two investors, A &amp; B. They start working at the age of 20.
                        Investor A starts investing Rs. 1000/- per month right from the start of his career for
                        the next 10 years. That’s a total investment of Rs. 1,20,000/-. He leaves the investment
                        in the market for next 30 years, until he is 60 years old. Investor B starts investing
                        after initial 10 years of his career. But to build a nest he starts investing Rs.1000/-
      per month for the next 30 years. That’s a total investment of Rs. 3,60,000/-. <br />
                        Assuming a market return of 8% p.a., who would have a larger retirement fund at the age
      of 60?<br />
                        Investor A has contributed a lot less than Investor B, but due to the power of
                        compounding, Investor A has a retirement nest of Rs. 20,13,000/- whereas Investor B has
                        managed to accumulate a wealth of Rs. 15,00,000/-.
    </p>
                    <p>This is the power of compounding and starting early towards long term goals even with
      relatively smaller amounts.</p>
                    <p>No doubt Albert Einstein called compound interest the eighth wonder of the world. </p>
                </div>
                <span class="anchor" id="consolidated_account_statement"></span>

                <div className="pb-4">
                    <h3>Consolidated Account Statement</h3>
                    <p>Consolidated Account Statement is akin to a bank account statement. Only difference is
                      that a Consolidated Account Statement gives an investor all the details regarding sales,
                      purchases and other transactions in a mutual fund in an orderly manner in a single place
      whereas a bank account statement would give details of banking transactions. </p>
                    <p>This is the power of compounding and starting early towards long term goals even with
      relatively smaller amounts.</p>
                    <p>No doubt Albert Einstein called compound interest the eighth wonder of the world. </p>
                    <p>Typical details included are:</p>
                    <ul>
                        <li>Investor name and contact details</li>
                        <li>All financial purchases and transactions like switching, redemption or merging of
        funds,</li>
                        <li>Dividend or bonus payments, reinvestment details</li>
                        <li>Way of investing – lumpsum or a Systematic Investment Plan </li>
                        <li>Closing and opening share unit portfolio balance.</li>
                    </ul>
                    <br />
                    <p>An account statement also gives a proper insight to the investors about how to track
      mutual fund performance.</p>
                </div>
                <span class="anchor" id="elss"></span>

                <div  className="pb-4">
                    <h3>ELSS</h3>
                    <p>
                        ELSS schemes are diversified equity schemes, primarily subscribed to, as they offer tax
                        benefits under the Section 80C of Income Tax Act 1961. Returns from an ELSS scheme are
                        tax free. One can claim upto Rs. 1 lakh of one’s ELSS investment as a deduction from
      one’s gross total income in a financial year. <br />
                        However they also carry a lock-in period of 3 years.
    </p>
                </div>
                <span class="anchor" id="entry_load"></span>

                <div className="pb-4">
                    <h3>Entry Load</h3>
                    <p>Mutual fund companies collect a fee from all investors when they enter or exit scheme.
                      This fee is called load. In simple terms, investors would purchase a mutual fund at the
                      net asset value (NAV) plus the entry load. This would increase the purchase price per
      unit for the investor thereby reducing the amount of units allotted to the investor.</p>
                </div>
                <span class="anchor" id="exit_load"></span>

                <div className="pb-4">
                    <h3>Exit Load</h3>
                    <p>Mutual funds collect a specific amount from all the investors when they enter or exit a
      scheme. This fee charged is called load. </p>
                    <p>Frequent withdrawals will force a mutual fund to keep aside more and more funds in cash
                      and thereby impact the overall returns of the funds. The objective of collecting it when
                      investors exit the scheme, is to dissuade them from exiting, thereby reducing the number
                      of investors withdrawing. Various mutual funds houses charge different fees as loads.
    </p>
                </div>
                <span class="anchor" id="expense_ratio"></span>

                <div className="pb-4">
                    <h3>Expense Ratio</h3>
                    <p>Expense ratio is basically the total expense amount charged to the fund divided by the
      total Asset Under Management. It is expressed in percentage terms. </p>
                    <p>So how does an expense ratio impact investor returns? Higher expense ratio implies lower
                      return for the investor as the expense ratio is deducted from the return generated by
      the funds from the market. </p>
                </div>
                <span class="anchor" id="kyc"></span>

                <div  className="pb-4">
                    <h3>KYC</h3>
                    <p>Complying with the Know Your Customer or KYC norms is mandatory for every mutual fund's
                      investor. It is important for an investor to submit their identity details to the mutual
      fund houses. </p>
                    <p>KYC is one time exercise while dealing in securities markets - once KYC is done through a
                      SEBI registered intermediary (broker, DP, Mutual Fund, etc), one need not undergo the
      same process again when you approach another intermediary.</p>
                    <p>An investor needs to submit identity documents along with the KYC form. Typically, the
                      identity document includes ID Proof, Address Proof along with passport size photograph.
    </p>
                </div>
                <span class="anchor" id="load"></span>

                <div  className="pb-4">
                    <h3>Load</h3>
                    <p>Load is a sales charge or commission paid to the mutual fund. The investor pays the load,
                      for compensation to sales intermediary for his time and expertise in selecting an
      appropriate fund for the investor.</p>
                </div>
                <span class="anchor" id="nav"></span>

                <div className="pb-4">
                    <h3>NAV</h3>
                    <p> NAV is the market value of the securities held by the scheme including cash, less
                      liabilities divided by the total number of units of the scheme on any particular date.
      As market value of stocks changes every day, NAV of a scheme also changes daily. </p>
                    <p>
                        For example, if the market value of all securities of a mutual fund scheme is Rs.
                        20,00,000 and the mutual fund has issued 1,00,000 units of INR 10 each to the investors,
      then the NAV per unit of the fund is Rs 20.00<br />
                        NAV of all open ended funds is required to be disclosed by the mutual fund on a daily
                        basis.
    </p>
                </div>
                <span class="anchor" id="open_ended_funds"></span>

                <div className="pb-4">
                    <h3>Open Ended Funds</h3>
                    <p>Open-End Fund is the type of mutual fund, that does not restrict the number of units
                      issued by the fund. Investors can issue and redeem units continuously, since there is no
      limit on the issuance of number of open-end fund units. </p>
                </div>
                <span class="anchor" id="open_ended_funds"></span>

                <div  className="pb-4">
                    <h3>Open Ended Funds</h3>
                    <p>Open-End Fund is the type of mutual fund, that does not restrict the number of units
                      issued by the fund. Investors can issue and redeem units continuously, since there is no
      limit on the issuance of number of open-end fund units. </p>
                </div>
                <span class="anchor" id="sip"></span>

                <div  className="pb-4">
                    <h3>SIP</h3>
                    <p><a href="https://onebajaj.capital/mutual-fund/investment" title="Systematic Investment Plan">Systematic Investment Plan</a> is an investment
                      strategy wherein an investor needs to invest a pre-determined amount of money in a
                      particular mutual fund at every stipulated time period (weekly, monthly, quarterly,
      etc.).</p>
                    <p>The investor is allocated certain number of units based on the ongoing market rate
                      (called NAV or net asset value) for the day. Every time one invests money, additional
      units of the scheme are purchased at the market rate and added to one’s account.</p>
                    <p>Further investors need not worry about investing at the wrong time. For a regular
                      investor, the same amount of money fetches more units when the prices are low and less
                      units when the price is high. This may help an investor achieve lower weighted average
      cost per unit.</p>
                </div>
                <span class="anchor" id="standard_deviation"></span>

                <div className="pb-4">
                    <h3>Standard Deviation</h3>
                    <p>Standard Deviation (SD) is a statistical measure that captures the difference between the
                      average of a data set and how far the individual points are spread out from the average
                      number. A low standard deviation indicates that numbers are close to average. A high
      standard deviation indicates that numbers are spread out.</p>
                    <p>In the finance world, Standard Deviation is used to determine volatility of returns.
                      Higher standard deviation implies higher volatility of returns which in turn implies
                      higher the risk of the portfolio. Accordingly lower standard deviation implies lower
      risk.</p>
                </div>
                <span class="anchor" id="units"></span>

                <div  className="pb-4">
                    <h3>Units</h3>
                    <p>Mutual funds issue units to the investors as per funds invested by them. Investors of
                      mutual funds are known as unitholders. Transaction of mutual funds is done in units. For
                      example, consider that one is investing Rs 500 per month through a SIP in a mutual fund.
                      If the NAV of the mutual fund is 25 on the day of the purchase, then 20 units would be
      bought for Rs 500. </p>
                </div>
                <span class="anchor" id="dividend"></span>

                <div  className="pb-4">
                    <h3>Dividend</h3>
                    <p>As a unit holder in a scheme one is expecting some return on one’s investment. So when
                      the scheme is doing well, one would expect to gain from one’s investments. In case the
                      mutual fund company decides to share the growth in NAV with its unit holders regularly,
                      they can do so by declaring dividend. In simple terms it implies sharing some of the
                      gains with the unit holders during the course of their holding rather than accumulating
      the gains until the unit holder can redeem the units.</p>
                    <p>
                        Some important points to remember regarding dividends:
    </p><ul>
                        <li>The amount and frequency of dividends is not guaranteed. </li>
                        <li>Dividends are declared only when the scheme makes a profit and it is at the
        discretion of the asset management company.</li>
                        <li>Dividend is paid from the units of NAV. Thus the NAV of the fund will drop
        atleast to the extent of the dividend declared.</li>
                    </ul>
                    <p />
                </div>
                <span class="anchor" id="nfo"></span>

                <div className="pb-4">
                    <h3>NFO</h3>
                    <p>A new fund offer (NFO) is a subscription offer for the first time for a new scheme
                      launched by the asset management companies (AMCs). A new fund offer is launched to raise
      public capital to buy stocks and bonds from the market.</p>
                </div>
                <span class="anchor" id="flexi_sip"></span>

                <div className="pb-4">
                    <h3>Flexi-SIP</h3>
                    <p> A Flexi SIP allows an investor to vary the amount of one’s investments every month. If
                      the investor does not want a fixed amount but wants more control over ones investments,
      the investor can set up a Flexi SIP. </p>
                    <p> With Flexi-SIP, an investor needs to <a href="10-reasons-to-invest-in-a-mutual-fund.html" title="Choose a Mutual Fund Scheme">choose a mutual fund scheme</a>, a minimum
                      investment amount, and an investment date like for any other SIP. However, investors can
      choose maximum investment amount. </p>
                    <p> After this, every month, the investor will have the flexibility to set the amount for
                      the next SIP instalment. This can be any amount between the minimum required for that
      scheme and the maximum set by the investor. </p>
                </div>
                <span class="anchor" id="ulip"></span>

                <div className="pb-4">
                    <h3>ULIP</h3>
                    <p>Unit Linked Insurance Plan is a financial product that combines investment as well as
                      insurance. In an ULIP the premium amount, after deduction of charges, is invested into
      funds of one’s choice. Funds could be equity or debt based. </p>
                    <p>Fund performance depends on the market. ULIPs are similar to mutual funds, except that
      ULIPs are like investment products with insurance benefits.</p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 1,
                "last_comment_timestamp": 1557391806,
                "last_comment_name": "",
                "last_comment_uid": 1,
                "comment_count": 1
            },
            "field_description": "Defining a simple word can be extremely confusing. Hence in this article, we have simplified the most commonly used terms in financial jargon."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/c9e18d06-3967-4168-8776-5cd968bd8427?resourceVersion=id%3A39"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "beginners-guide-to-mutual-funds",
        orderSequence: 12,
        readingTime: 6,
        "attributes": {
            "status": true,
            "title": "Beginner's Guide to Mutual Funds",
            imgLink: '/mf-img-02.png',
            detailImgLink: '/mf-img-lg-02.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-01.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-01.png",
            "created": "2019-05-09T10:14:03+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <h2 className="mt-0 pb-2">
                        This post covers various aspects such as:
                    </h2>
                    <ul id="articlenav" className="links">
                        <li> <a href="#what_are_mutualfunds" onClick="myFunction()"> What are mutual funds?</a>
                        </li>
                        <li> <a href="#why_invest_in_mutualfunds" onClick="myFunction()"> Why should one invest
          in mutual funds?</a></li>
                        <li><a href="#different_types_Mutualfunds" onClick="myFunction()"> Different types of
          mutual funds</a></li>
                        <li><a href="#SIP_or_lumpsum" onClick="myFunction()"> Lumpsum or SIP based investing</a>
                        </li>
                        <li><a href="#how_to_select_mutualfund" onClick="myFunction()"> How to select a mutual
          fund</a></li>
                        <li><a href="#how_to_begin_investing" onClick="myFunction()"> How to begin investing</a>
                        </li>
                        <li><a href="#sell_redeedm_mutualfunds" onClick="myFunction()"> When to sell/redeem</a>
                        </li>
                    </ul>
                </div>
                <div id="what_are_mutualfunds" className="pb-4 scrollarticle ">
                    <h2>Understanding mutual funds as a Beginner</h2>
                    <p>Mutual funds pools money from many investors and invest the money in securities such as
                     stocks, bonds, commodities, etc.
                     based on pre-agreed mandate. They offer diversification of assets as per individual’s
                     objective, professional management and liquidity,
                     at the same time allowing investors to avail benefits from the lower trading cost. A mutual
                     fund is professionally managed and always keep aside some part of the money as cash to
                     fulfil redemptions.
                     Every investor gets to participate by holding units or shares that are proportional to the
                     amount invested. The gains recorded by a mutual fund are distributed correspondingly among
                    investors after deducting certain expenses.</p>
                </div>
                <div id="why_invest_in_mutualfunds" className="pb-4 scrollarticle">
                    <h2><strong>Why Mutual Funds?</strong></h2>
                    <h3>To enjoy better returns</h3>
                    <p>The best performing <a href="https://onebajaj.capital/mutual-fund/investment" title="Mutual Fund">mutual funds</a> have offered returns of anywhere between
                      15% to 20% consistently over the last 2 decades. An individual who would have
                      invested Rs 10,000 every month would be able to create a corpus of Rs 27,86,573
                      assuming a CAGR of 15% But if we extrapolate this case to 20 years, the individual
      ends up with a corpus of almost Rs 1.5 crores. </p>
                    <p>Very few asset classes are able to match up to such returns. And what is the icing on the
      cake?</p>
                    <div className="part">
                        <h3>Liquidity!</h3>
                        <p>You can redeem your mutual fund units anytime you wish. The redemption time varies
                          between 1-2 working days for debt-oriented funds and 4-5 days for equity-oriented
        funds. </p>
                    </div>
                    <div className="part">
                        <h3>Accurate selling price</h3>
                        <p>
                            During the redemption, mutual fund units will be sold according to the NAV as on
                            that day.
                            Which means you get exactly what your investment is worth.
      </p>
                    </div>
                    <div className="part">
                        <h3>Inflation beating returns </h3>
                        <p>
                            What costs Rs 2 lakhs today, would cost Rs 4 lakhs after nine years considering an
                            inflation rate of 8%.
                            Most asset classes are not able to beat inflation effectively.
                            Mutual Funds offer inflation beating returns consistently over a period of time.
      </p>
                    </div>
                    <div className="part">
                        <h3>Goal based investing</h3>
                        <p>
                            People have several goals in life. They wish to buy latest gadgets, travel to exotic
                            destinations, purchase an automobile with all the bells and whistles, buy a house,
                            educate their children in the best universities and hopefully – retire early!
        <br />These goals can be primarily divided into short term, medium term and long term.
        <br />Choosing the right type of fund is critical to ensure that your financial goals
                                                                                                                                                                                                        are achieved.
      </p>
                        <p> <strong>Short Term Goal</strong> </p>
                        <p>
                            One can invest in debt-oriented funds to prepare for achieving short term goals.
                            These funds are less volatile and offer steady returns as they primarily are
                            invested in government securities, bonds
                            and other debt instruments. If one’s investment horizon is less than 2 years, debt
                            oriented mutual funds are recommended.
      </p>
                        <p> <strong>Medium Term Goal</strong> </p>
                        <p>
                            Medium term goals may require an investment duration of 3 to 6 years. Balanced
                            funds, which invest in a comfortable mix of equity and debt instruments,
                            are most suitable to help an investor achieve medium term goals.
      </p>
                        <p> <strong>Long Term Goal</strong> </p>
                        <p>
                            Long term goals may require an investment duration of more than 7 years. One can
                            consider equity-oriented funds as these invest heavily in equities.
                            The time frame is also such that the fund can take advantage of market volatility to
                            offer attractive returns.
      </p>
                    </div>
                </div>
                <div id="SIP_or_lumpsum" className="pb-4 scrollarticle">
                    <h2>Should I be investing a little every-month? Or should I invest
      at one go?</h2>
                    <p>SIP, which is an acronym for Systematic Investment Plan, is the most popular method of
                      investing regularly in mutual funds as it enables an investor to take advantage of the
                      market’s volatility. It is also easier on the pocket as an investor can begin investing
                      with an amount that is as low as Rs 500 every month. Enabling a systematic investment
                      plan will ensure that an investor is also able to adhere to a discipline of investing
      consistently during the ups and downs of stock market. </p>
                </div>
                <div id="how_to_select_mutualfund" className="pb-4">
                    <h2>Guide to choose a Mutual Fund</h2>
                    <p>SIP, which is an acronym for <a href="/" title="Systematic Investment Plan">Systematic
        Investment Plan</a>, is the most popular method of investing regularly in mutual
                                                                                                                                                                  funds as it enables an investor to take advantage of the market’s volatility. It is also
                                                                                                                                                                  easier on the pocket as an investor can begin investing with an amount that is as low as
                                                                                                                                                                  Rs 500 every month. Enabling a systematic investment plan will ensure that an investor
                                                                                                                                                                  is also able to adhere to a discipline of investing consistently during the ups and
      downs of stock market. </p>
                    <div className="part">
                        <h3>Consider the Portfolio Manager</h3>
                        <p>Now a days it is not very difficult to dig out information about your fund’s
                          portfolio manager. You should also look at the performance of other funds which he
                          is managing. If you find yourself holding a mutual fund with a manager that has
                          discouraging, little or no track record you should consider exiting the investment.
      </p>
                        <h3>Rankings</h3>
                        <p>
                            Certain investors carefully scrutinize the star ratings given by various research
                            agencies. These star ratings can be one of the factors to look at, but more than the
                            recent or long-term performance of any scheme its ranking among peers should be
                            looked at.
                            One should select the scheme which has remained in top quartile most of the time.
      </p>
                        <h3>Past performance</h3>
                        <p>Investors should avoid investing by evaluating only the latest performance of a
                          mutual fund. One should look for consistency in performance over longer tenures like
                          3, 5 and 10 years, if that is available, rather than the short-term returns. One
                          must choose schemes that have consistently beaten benchmark indices (index to which
                          a fund's returns are compared) and compare reasonably with their peer set over the
        above time frames. </p>
                    </div>
                </div>
                <div id="how_to_begin_investing" className="pb-4 scrollarticle">
                    <h2>Guide to begin</h2>
                    <p>Mutual fund schemes offer regular and direct plans. A regular plan involves investing
                      through a distributor/broker/agent. However, a direct investor must understand if the
                      scheme is appropriate, considering its track record, the investor’s goal and risk
      profile. </p>
                    <div className="part">
                        <h5>There are various online platforms for investing</h5>
                        <ul>
                            <li>Transaction portal on the mutual fund website.</li>
                            <li>Transaction portals belonging to registrar and transfer agents of mutual funds.
        </li>
                            <li>Transaction portals of the distributor or agent </li>
                        </ul>
                    </div>
                </div>
                <div id="sell_redeedm_mutualfunds" className="pb-4 scrollarticle">
                    <h2>When to sell / redeem</h2>
                    <div className="part">
                        <h3>When goals are achieved</h3>
                        <p>
                            It is ideal to sell one’s MF holdings on the eve of achieving one’s financial goals.
                            Or probably a couple of years before that. It is advisable to shift one’s invested
                            corpus from an equity fund to a low risk debt fund when one is a couple of years
                            away from reaching the goal. This is to ensure that a sudden phase of volatility in
                            the stock market does not upset one’s financial plan.
                            For example, you might have invested in an equity-oriented mutual fund whose returns
                            have fallen as the market has tumbled.
      </p>
                        <h3>If Mutual fund is not performing well</h3>
                        <p>
                            When we talk of underperformance we are referring to consistent underperformance.
                            Even the best of funds tends to have a few bad quarters. That is why it is always
                            better to focus on three to five year returns on mutual funds. But then there are
                            some genuine cases of underperformance. For example, your funds may be exposed to
                            the wrong sectors at the wrong time. Alternatively, your debt fund may have taken
                            too much risk on low quality debt without the associated benefit of outperforming
                            the benchmark. If your equity mutual fund is yielding lower than an index fund, then
                            you are actually earning negative yields on your market risk. That does not make
                            sense. There are occasions when the fund returns have been too volatile which again
                            defeats the purpose of MF investing.
                            These are cases you must look to exit and reinvest in alternate funds.
      </p>
                        <h3>Past performance</h3>
                        <p>Investors should avoid investing by evaluating only the latest performance of a
                          mutual fund. One should look for consistency in performance over longer tenures like
                          3, 5 and 10 years, if that is available, rather than the short-term returns. One
                          must choose schemes that have consistently beaten benchmark indices (index to which
                          a fund's returns are compared) and compare reasonably with their peer set over the
        above time frames. </p>
                        <h3>Documentation</h3>
                        <p>
                            Like any other financial transaction, mutual fund investment it is not devoid of
                            documentation.
                            The investor will need to complete the following activities.
      </p>
                        <ul>
                            <li>Application form: You may need to fill in an application form to open a mutual
                              fund account and another form if you are going for an electronic transfer from
          your bank account. </li>
                            <li>
                                KYC Compliance: PAN has to be verified under the Know Your Customer (KYC) norms
                                to be able to invest in mutual funds.
                                If one is already KYC-compliant, one needs to submit the KYC acknowledgement
                                letter or copy of the KYC-compliance page.
          <ol className="mt-3">
                                    <li>
                                        Proof of identity: Some of the following documents are acceptable as
                                        proof of identity
              <ul className="mt-3">
                                            <li> PAN with photograph </li>
                                            <li> Aadhaar</li>
                                            <li> Passport</li>
                                            <li> Voter’s ID card</li>
                                            <li> Driving licence</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Proof of address: Some of the following documents can be submitted as
                                        proof of identity
              <ul className="mt-3">
                                            <li> Aadhaar</li>
                                            <li> Driving licence</li>
                                            <li> Passport</li>
                                            <li> Voter’s ID card</li>
                                            <li> Ration card</li>
                                        </ul>
                                    </li>
                                    <li>Cheque for SIP or lump sum amount. However, if one opens a mutual fund account
              online, cheques would be required. </li>
                                </ol>
                            </li>
                        </ul>
                        <p>
                            These days almost all fund houses and many distributors offer online facilities to
                            invest in mutual funds. All you need to do is fill the relevant information and
                            submit it.
                            e-KYC enables completion of KYC process online for which one will need to enter your
                            Aadhar number and PAN.
      </p>
                    </div>
                </div>
                <div>
                    <h2>Conclusion</h2>
                    <p>
                        <strong>
                            It is to be borne in mind that Mutual fund investments are subject to market risks
                            and one should read scheme related documents carefully before investing. Also, past
                            performance is not indicative of future returns.
                            One should consider one’s specific investment requirements before choosing a fund or
                            designing a portfolio that suits one’s needs.
      </strong>
                    </p>
                    <p>
                        Mutual funds have democratized the opportunity to invest in various asset classes and
                        create wealth by banking on the expertise of a qualified professional. One should aspire
                        to invest at least 20% of one’s monthly income through a systematic investment plan in
                        mutual funds. One can also increase one’s SIP amount by 10% every year as one’s income
                        would also keep increasing. The journey of a thousand miles begins with a single step as
                        does the journey of achieving financial independence begin with a single SIP.
    </p>
                </div>
            </article>),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1557396872,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "Mutual funds have become popular asset classes for individuals to invest. However, new (and sometimes even existing investors) end up having several questions about mutual funds."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/2082b2cf-41ce-4376-a56c-135d0d88f5c1?resourceVersion=id%3A40"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "when-to-start-investing-in-mutual-funds",
        orderSequence: 19, readingTime: 6,
        "attributes": {
            "status": true,
            "title": "When Should One Start Investing in Mutual Funds",
            imgLink: '/mf-img-03.png',
            detailImgLink: '/mf-img-lg-03.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-03.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-03.png",
            "created": "2019-05-09T10:15:27+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    There is never a good reason to postpone starting your investments – other than, of course,
                    not having the money to invest. For beginners, and for many seasoned investors as well,
                    Mutual Funds is a better option than building an investment portfolio themselves. This is
                    because when investing in a mutual fund, you get the benefit of the expertise of a
                    professional funds manager and the scale without having to either do the leg work yourself
                    or investing a large corpus.
    <p>
                        <strong>
                            In a sense, investing in a mutual fund is like riding a train – you need not know
                            how the train runs, the route it needs to take or how to drive it.
                            All you have to do is buy the ticket to your destination and get off the train once
                            it reaches there.
      </strong>
                    </p>
                    <p>
                        The regulators have not mandated any minimum age to invest in a mutual fund. In fact,
                        even young kids can open an investment account and buy into mutual funds with the money
                        they receive as gifts on their birthday or festivals.
                        Obviously, there is no upper age either – whatever age you are, you can benefit from
                        investing in mutual funds.
    </p>
                    <p>Of course, not all investors have the same investment goals. Therefore, they cannot make
                      the same investments. Mutual Funds come in different flavours just for this reason. You
                      can choose to invest in funds that aim for safety with regular income or those that go
                      for taking on more risks for higher returns or those that provide highest liquidity,
      based on your investment goals and other investments that you have already made. </p>
                </div>
                <div className="pb-4">
                    <h2>Best mode of investment in mutual fund– SIP</h2>
                    <p>
                        Once you have decided that you would like to invest in mutual funds, you must decide how
                        to go about it. You would have heard it said that the best time to enter the market is
                        when it has hit rock bottom – buy low, sell high. This is called timing the market. But
                        for most beginners and casual investors it is impossible to monitor the market long
                        enough to achieve this. Further, you may not have a huge lumpsum amount at hand to
                        invest and take advantage of such an opportunity. Further, since you will be investing
                        in a funds, and not piecemeal stocks, all the stocks that make up the fund will never be
                        at the rock bottom together – and if they are, then the fund is not diversified enough
                        anyways,
                        and you may want to reconsider investing in it.
    </p>
                    <p>
                        An alternative that suits most investors is known as systematic investment plan or SIP.
                        SIP involves making fixed, periodic investment into the mutual fund of your choice.
                        Typically, the periodicity is once a month, but you can choose to invest once per
                        quarter, or even per fortnight or per week. Doing this ensures that your buying price is
                        averaged over a long period – and therefore, you do not have to worry about timing the
                        market or think about whether the market is bearish or bullish.
                        As the amount to be invested every period is fixed, SIP ensures that you purchase more
                        units when the market is down and NAV is lower than average, and lesser units when
                        market is bullish and NAV is higher than average. Over the long-term, this ensures that
                        the average cost per unit remains low.
    </p>
                    <p>
                        Further, the <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/SIP-or-systematic-investment-plan.html" title="Advantage of SIP">advantage of SIP </a> is that you do not have to make a
                        large investment at one go. You can keep the invest volume to something that you can
                        manage on a monthly basis. Even a small amount will add up to a large corpus with time,
                        if you stick to the discipline of investing every pre-decided period. If you choose to
                        reinvest any returns that you get from the funds in the form of dividends, etc.
                        The compounding effect over the years would add up to a significantly high value.
    </p>
                </div>
                <div id="different_types_Mutualfunds" className="pb-4">
                    <h2>Other Important aspects to consider when you decide to start investing in mutual funds</h2>
                    <p>
                        While it is true that the best time start investing is right now, there are a few
                        aspects you should consider before you start investing.
                        These will decide how much you should invest and what flavour of mutual fund would best
                        suit your requirement. These include
    </p>
                    <div className="part">
                        <h3>Stable source of income</h3>
                        <p>When you plan to make an investment, especially through a systematic investment plan
                          as suggested here, it is important that you have a stable source of income to fund
                          these investments. Remember that you need to meet your day to day expenses without
                          having to dip into the investment that you are making – and this is only possible if
                          you have a stable source of income. Note that you need only worry about your income
                          being stable – not high. No income is too low to invest. In fact, many a young
                          people make the mistake of not making investments early in their career believing
                          they will do so when they have a higher disposable income. This is a wrong approach!
                          You should invest at least 10% of your monthly income, regardless of how large your
                          income is and plan to meet all your other expenses with the rest of your income. Cut
                          down on your expenses today, rather than on your investments. The single biggest
                          predictor of success in life is not IQ, but the ability to postpone gratification –
                          avoid making purchases today to invest and you will be able to make much bigger
        purchases later in life. </p>
                    </div>
                    <div className="part">
                        <h3>Risk Appetite</h3>
                        <p>
                            Your choice of investment will depend directly on how much risk you can take. It is
                            generally considered that a youngster can take much more risk than someone close to
                            retirement, considering all else is equal – as the youngster has more time for the
                            risk to payoff compared to latter. Your risk appetite also depends on how what the
                            rest of your portfolio looks like. For example, if all your other investments are in
                            the F&amp;O space, you should look for low-risk mutual funds that are virtually loss
                            free and guarantee a safe return. On the other hand, if you are already invested in
                            instruments like PPF and fixed deposits, you can choose to invest in high-risk,
                            high0return funds that aim to maximize returns over a short period.
      </p>
                    </div>
                    <div className="part">
                        <h3>Goals</h3>
                        <p>Before you make your investments, you have to be clear on what your goals are. Unless
                          you know why you are making an investment, you will not be able to decide where the
                          investment should be, and when you should exit. For example, if you are aiming to
                          build a retirement fund with your retirement close to 20 years away, you can choose
                          mutual funds with a long-term horizon and with focus on FDs and other safe
                          instruments. On the other hand, if you are looking to save money for a car that you
                          will like to buy 5 years down the line – a shorter term horizon with focus on equity
        with strong fundamentals may be a better choice. </p>
                    </div>
                    <div className="part">
                        <h3>Stage in life (Single/Married etc)</h3>
                        <p>Stage in life that you are in has a direct impact on both your risk appetite and
                          goals. As pointed out earlier, someone who is still single and just starting out his
                          career can take higher risks than someone with a child and already approaching
                          mid-life. Life-stage could also decide the time horizon you can work with. For
                          example, if you have a child today – you have about 16 years to build a corpus for
                          his higher education. You may also want to save monies for your child’s wedding that
                          may take place about 25 years from now. The 9 to 10 year difference in these two
                          events means that you can choose to make different kinds of investment choices for
                          each of these. On the other hand, an emergency fund needs to be available as soon as
                          possible and you need to make sure that the investments that you make for such a
        fund remains liquid so as you can turn it into cash on very short notice. </p>
                    </div>
                    <div className="part">
                        <h3>Planning for tax savings </h3>
                        <p>
                            None of us want to pay more tax than strictly required. One of the ways to save on
                            income tax is through savings that qualify for a deduction under section 80C of the
                            Income Tax Act. While tax savings should not be the sole reason for your investment
                            decision, it does create a lower bound on the amount you want to invest in tax
                            saving schemes. Many funds are built with a specific focus on tax-efficiency, like
        the <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/mf-campaign/saveTaxELSS/lp-save-tax-elss.html" title="Equity Linked Saving Schemes">Equity Linked Saving Schemes</a> (ELSS).
                                                                                                                                With an eye on tax savings, you can choose to invest via a SIP in ELSS funds, or you
                                                                                                                                could also do so in a lumpsum at the start of the year. While doing so at the end of
                                                                                                                                the year would have the same impact on your tax liability, it is better to make your
                                                                                                                                investments as early as possible to avoid any last-minute rush resulting in poor
                                                                                                                                choice of investment.
      </p>
                    </div>
                </div>
                <div className="pb-4">
                    <h2>Conclusion</h2>
                    <p>Investing in mutual funds generally makes for a good return in the long run. If you have
                      not yet started investing in mutual funds, you should not delay it anymore. Once you
                      have considered the factors listed earlier, and decided on the flavour of mutual fund
                      you would like to invest in – the best way forward is to build a systematic investment
                      plan with a periodicity and quantum of investment that will let you achieve your goals.
                      Remember that you do not invest what is left over after you have covered other expenses,
                      but you spend what is left over after you have made your investments towards the goals
      you wish to achieve. </p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1557396960,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "There is never a good reason to postpone starting your investments – other than, of course, not having the money to invest."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/ba65fa6d-e3c9-473f-973d-c19ae503679d?resourceVersion=id%3A41"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "mutual-fund-to-achieve-your-goals",
        orderSequence: 16, readingTime: 8,
        "attributes": {
            "status": true,
            "title": "How Mutual Funds Will Help You Achieve Your Goals",
            imgLink: '/mf-img-04.png',
            detailImgLink: '/mf-img-lg-04.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-04.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-04.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <p>Goals offer us a purpose and drive our actions. In the words of Mark Pincus, American Internet entrepreneur, ‘Not having a clear goal leads to death by a thousand compromises.’</p>
                    <p>We all understand that we need to lay our goals in the pecking order, but we still get trapped into improvising our investments and being haphazard about it. We put in our energies into providing for one upcoming event and lose direction and thereby we end up with a directionless portfolio. These investments are unlikely to mirror any of our goals.</p>
                    <p>Warren Buffett once told his pilot that in order to reach his goals, he needed to do three things. The first was to list down his 25 top goals, and then circle the top 5 most important.</p>
                    <p>You must have come across somebody who would have claimed that he invested in a stock, which yielded him more than 40% return in a year. Should you be tempted to go for it? If you do, it would be speculating without thinking about your goals. </p>
                    <p>
                        We often get trapped into such intriguing situations and thereby sticking to a goal or even setting is forgotten.
                        Setting investing goals reveals the amount of investment needed for a specified tenure to yield the desired corpus. We achieve clarity on how much do we need for eventualities, for fulfilling monthly requisite SIPs and when to redeem from mutual funds as our goals near. And we thereby stop following the herd.
    </p>
                    <h4 className="mt-0 pb-2"> <strong>Let us look at the type of goals most of us have as a household:</strong></h4>
                    <ul id="articlenav" className="links">
                        <li><a href="#long_term_goals">Long term goals</a></li>
                        <li><a href="#medium_term_goals">Medium term goals</a></li>
                        <li><a href="#short_term_goals">Short term goals</a></li>
                        <li><a href="#goal_of_tax_saving">Goal of Tax saving </a></li>
                        <li><a href="#goal_of_regular_income">Goal of Regular Income</a></li>
                    </ul>
                    <p>Before elaborating each goal, let us understand the what and why about goals. </p>
                </div>
                <div id="long_term_goals" className="pb-5 scrollarticle">
                    <h4><strong> Long Term Goals LONG TERM GOALS</strong></h4>
                    <p>There are various types of long term goals. I have stated the most important ones below:</p>
                    <p><strong>Retirement planning –</strong></p>
                    <p>Let us assume there are two investor, A &amp; B. They start working at the age of 20. </p>
                    <p>Investor A starts investing Rs. 1000/- per month right from the start of his career for the next 10 years. That’s a total investment of Rs. 1,20,000/-. He leaves the investment in the market for next 30years, until he is 60 years old.</p>
                    <p>Investor B starts investing after initial 10 years of his career. But to build a nest he starts investing Rs.1000/- per month for the next 30 years. That’s a total investment of Rs. 3,60,000/-. </p>
                    <p>Assuming a market return of 8% p.a., who do you think would have a larger retirement fund at the age of 60.</p>
                    <p>Investor A has contributed a lot less than Investor B, but due to the power of compounding, Investor A has a retirement nest of Rs. 20,13,000/- whereas Investor B has managed to accumulate a wealth of Rs. 15,00,000/-.</p>
                    <p>This is the power of compounding and starting early towards long term goals even with relatively smaller amounts.</p>
                    <p><strong>Children’s Education – </strong></p>
                    <p>“Education is the key to unlocking the world, a passport to freedom” – Oprah Winfrey.</p>
                    <p>Every parent wants the best for their children and rightfully so. Education has always held a special significance in our lives and we always believed that good education is the key to success and don’t we all want our kids to be more successful that ourselves.</p>
                    <p>Thankfully to achieve our goal, today we have multiple options in the field of education that we can provide to our children. However, these options are expensive. </p>
                    <p>So, what can help us provide for our kids college enrolment?</p>
                    <p>
                        We need to plan through a multiple step process:
    </p>
                    <ol>
                        <li>Calculate the time horizon, the time remaining to enrol the child for graduate or post graduate course.</li>
                        <li>Estimate the cost of education – the future cost not the current cost. Many people forget to factor in the evils of inflation while estimating the future cost of education. If the current cost of a post graduate course is Rs, 5,00,000/- and your child will be eligible for that course in 10 years time, then assuming an inflation rate of 5%, the likely cost of the course in 10 years would be Rs 8,14,447/-. So, we would need to provide for Rs 8,14,000/-.</li>
                        <li>Once we know the cost of education, we need to determine how much we need to save monthly to achieve this goal. The earlier we start the lower the amount required to the saved per month. In the above example, investing Rs 3000 per month for 10 years would help one create a corpus of around Rs 8.4 lakhs at a CAGR of 15%.</li>
                    </ol><br />
                    <p> What kind of funds are suitable for retirement planning and children education goals?</p>
                    <p>To start with, both retirement and children’s education, need to planned much in advance. Since the time frame for these goals is minimum 8-10 years, you can invest in equity funds. One can start by investing aggressive small cap and large cap equity funds. These funds have higher exposure to equity and hence could have volatile returns. However over a longer period of time, these funds also provide higher returns. </p>
                    <p>
                    </p><ol>
                        <li>1. Large Cap Funds invest in large-cap companies. The stock prices of these companies are considerably stable compared to overall market. </li>
                        <li>2. Small-Cap Fund is extremely vulnerable to market ups and downs and carry higher risk. However, the reward for choosing higher risk is the attractive returns. </li>
                    </ol>
                    <p />
                    <p>As we get closer to the college enrolment date or retirement age, we should start allocating some funds out of these small cap and large cap equity funds into balanced funds to reduce volatility towards the end. A strategy that gradually grows more conservative over time requires that us regularly rebalance the portfolio and ease up on your stock weighting as you get closer to our goal.</p>
                    <span> </span>
                </div>
                <div id="medium_term_goals" className="pb-5 scrollarticle">
                    <hgroup>
                        <h4> <strong>Medium Term Goals</strong> </h4>
                    </hgroup>
                    <p>One could ask, why do one need mutual funds for buying a house? That’s what mortgage loans are for. Well the loan to value ratio for mortgages is max of 75% for any home loan above Rs 75,00,000/. So, one needs to provide a substantial amount for down payment. Plus we have stamp duties and registration charges to be covered. This may require a lump sum amount which may need to be planned 4-6years in advance.</p>
                    <p>Another medium-term goal could a self owned car which we may have set our eyes on when we started working at the age of 20 with a target of buying the same before we reach 25 years of age. Such goals need same financial planning and regular savings which need to be invested to generate returns.</p>
                    <p>To achieve such medium term goals, you can take calculated risks by making investments in a balanced fund. When one opts for a balanced fund, their money gets invested in debt and equity instruments together.  The debt portion works as a cushion and covers the impact if the equity portion is unable to reap great rewards. However, a combination of debt and equity largely increases the investor’s chances of reaping attractive returns with just a fair percentage of risk.</p>
                </div>
                <div id="short_term_goals" className="pb-5">
                    <hgroup>
                        <h4> <strong>Short Term Goals</strong> </h4>
                    </hgroup>
                    <p>While investing for longer term you are looking for capital appreciation and hence can take risk volatility of returns on your capital in near term but if the investment horizon is short term then the objective is more about safety over growth. You also need to ensure liquidity of your investment at the right time also matters when it comes to investing for short term goal or emergency fund.</p>
                    <p>While considering investment avenues for short term goals typically traditional instruments like fixed deposit pop up. Bank fixed deposit have been the first choice so long primarily because it does not fluctuate your capital. However taxation (TDS is deducted on deposit interest) and cost of liquidating them before maturity gives a bigger blow when short term investments are considered. </p>
                    <p>Mutual funds have various categories of schemes that cater to short term investments which can help you in meeting your short term goals like planning for holidays or wedding or buying electronic gadgets or house renovation to name a few. These are goals with typically 1-3 target date.</p>
                    <p>
                        Here too, the goal can impact the choice of short-term funds:
    </p>
                    <ol>
                        <li>For very short-term goals and for emergency fund you have to invest in liquid funds or ultra-short-term funds as emergency fund is a corpus which you may need immediately as and when emergency arises and hence liquidity and minimal exit load are critical drivers. These are funds that invest primarily into money market or short tenure liquid instruments but provide the flexibility to redeem the funds at short notice with minimal or no exit load.</li>
                        <li>
                            If your goal is 3 years away, you can invest in an income fund or dynamic bond fund. These funds typically invest in corporate paper and are able to generate higher returns than bank fixed deposits in most cases.<br />
                            Most importantly, unlike fixed deposits, no TDS is deducted on the interests earned in case of a Short-Term Debt Fund. Further Investors enjoy an indexation benefit when they invest in Debt Funds for a period exceeding 3 years. So even if the gross return is the same as Fixed deposits, these funds can provide higher post tax return depending upon the investors tax bracket.
      </li>
                    </ol>
                    <p />
                </div>
                <div id="goal_of_tax_saving" className="pb-5">
                    <hgroup>
                        <h4 className="mb-3"> <strong>Goal of Tax Saving</strong> </h4>
                    </hgroup>
                    <p>As mentioned earlier, we need to start investing to achieve short term, medium term and long term goals simultaneously. The obvious question would be how is it achievable? Hence we feel the pressure to prioritize and for most of us retirement saving is typically the most ignored goal in our scheme of things as it appears distant and one does not feel a pressing urge to address it. </p>
                    <p>However, our desire to save tax every year can be channelled to help us achieve two goals with one investment: tax saving and investing for retirement. </p>
                    <p>Equity Linked Savings Scheme (ELSS) has turned out to be a popular tax saving and wealth creating instrument. While being an equity diversified fund, ELSS is riskier than the fixed-income-products   available for tax-saving, ELSS has the shortest lock in and offers the potential of growth via equity. Thus, we can start to save for retirement by considering ELSS to achieve this as well as save tax under section 80C. </p>
                    <p>ELSS has a lock in of 3 years from the date of investment post which the scheme turns open ended. Rather than redeeming, it makes sense for the fund to be invested to meet a pre-decided goal.</p>
                </div>
                <div id="goal_of_regular_income" className="pb-5">
                    <hgroup>
                        <h4 className="mb-3"> <strong>Goal of Regular Income</strong> </h4>
                    </hgroup>
                    <p>We have discussed about starting early to build a retirement pool but have not discussed what does one do once we actually retire. Fluctuations in income from investments may not be desired post retirement as investment income could be the primary source of income. So regular income is of prime significance.</p>
                    <p><strong>Mutual funds can provide regular income through 2 modes:</strong></p>
                    <ol>
                        <li>
                            Monthly Income plans option for a regular income involves <a href="10-reasons-to-invest-in-a-mutual-fund.html" title="Investing in Mutual Funds">investing in mutual funds</a> with a monthly divided option. Most of these funds allocate only 10-20% of their corpus into equities and the rest 80-90% in safer bonds and other debt instruments.<br />
                            <br />
                            MIP presents relative safety as these funds offer investors good returns if stock markets do well, but they also protect the downside because of the limited exposure to equities.
        <br />
                            <br />
                            However, there is no assurance of monthly income. Since there is presence of equity, MIP returns can be volatile. The scheme could suffer losses, making dividend payouts irregular - both in quantum and frequency. At times, the scheme may not pay any dividend at all.
      </li>
                        <li className="mt-3">
                            Systematic Withdrawal plans.<br />
                            <br />
                            The Monthly Income Plan The returns are not spectacular as compared to equity funds because of lower risk, but are enough to beat inflation.
      </li>
                    </ol>
                </div>
                <div id="benefits_of_planning" className="pb-5">
                    <hgroup>
                        <h4 className="mb-3"> <strong>Benefits of Planning</strong> </h4>
                    </hgroup>
                    <p>We tend to spend several hours researching and planning when wanting to buy an electronic gadget or a party or a holiday. But for financial planning – which is most critical for leading an independent life, we do not find time.</p>
                    <p>Therefore, it’s time to write down our goals and plan how we are going to achieve them.</p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428492,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "Goals offer us a purpose and drive our actions. In the words of Mark Pincus, American Internet entrepreneur,"
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/79e5bda4-4dc5-4d25-9644-fd542a8c6028?resourceVersion=id%3A54"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "10-reasons-to-invest-in-mutual-fund",
        orderSequence: 24, readingTime: 8,
        "attributes": {
            "status": true,
            "title": "10 Reasons to Invest in a Mutual Fund",
            imgLink: '/mf-img-05.png',
            detailImgLink: '/mf-img-lg-05.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-05.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-05.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <h2 className="mt-0 pb-2">
                        <strong>Let us give you ten reasons why it is a good idea to begin your investing
        journey with mutual funds:</strong>
                    </h2>
                    <ul id="articlenav" className="links">
                        <li> <a href="#being_small">Being Small</a></li>
                        <li> <a href="#take_advantage_of_markets_volatility">Take advantage of market's
          volatility</a></li>
                        <li><a href="#helps_inculcate_financial_discipline">Helps inculcate financial
          discipline</a></li>
                        <li><a href="#helps_you_achieve_goals">Helps you achieve goals </a></li>
                        <li><a href="#can_be_liquidated_easily_at_market_rate">Can be liquidated easily at
          market rate</a></li>
                        <li><a href="#offers_inflation_beating_returns">Offers inflation beating returns</a>
                        </li>
                        <li><a href="#hassle_free_to_invest">Hassle free to invest</a></li>
                        <li>
                            <a href="#variety_of_mutual_funds_to_choose_from">
                                Variety of mutual funds to choose from according to investor profile and
                                objective
        </a>
                        </li>
                        <li><a href="#peace_of_mind_as_experts_invest_on_your_behalf">Peace of mind as experts
          invest on your behalf</a></li>
                        <li><a href="#tax_benefits">Tax benefits</a></li>
                    </ul>
                </div>
                <div id="being_small" className="pb-4 scrollarticle">
                    <h3> Being Small</h3>
                    <p>Many of us believe that we need to save up a sizeable amount in order to start investing.
                      But that is a misconception. Most mutual funds enable you to begin investing with as low
                      as Rs 500 per month. One can purchase three movie tickets or maybe a couple of pizzas
                      with this amount. Young adults in college end up saving this much after spending their
      pocket money.</p>
                    <p>One would be tempted to feel it is an insignificant amount to begin one’s investing
      journey. But what if as a 20-year-old, you started investing Rs 500 per month?</p>
                    <p>Assuming a modest CAGR of 12% over 25 years, you would have created a corpus of close to
                      Rs 9.5 lakhs when you are 40. If you share this insight with any 45-year-old today, they
                      would wish they had learnt about it two decades back as Rs 9.5 lakhs is still a
                      significant amount.Therefore, it is important to learn early as to Why should you invest
      in mutual funds?</p>
                </div>
                <div id="take_advantage_of_markets_volatility" className="pb-4 scrollarticle">
                    <h3>Take advantage of market's volatility</h3>
                    <p>Volatility is the stock market’s ultimate truth. Before understanding how Mutual Funds
                      take advantage of market volatility, let us understand the concept of market volatility.
                      Volatility is the quantum of change a security’s price goes through during a given
                      period of time. The change would be positive or negative depending on whether markets go
      up or down respectively.</p>
                    <p>When share prices fall, the mutual fund will purchase more units of shares. Individual
                      investors keep waiting for the bottom and sometimes miss out on purchasing shares at
                      mouth watering prices. However, through a regular SIP, investing regularly in mutual
                      funds helps investors take advantage of rupee cost averaging – which means cost of
                      purchasing units averages out over a longer period of time and reduces impact of
                      short-term volatility on one’s investment. In simpler words, volatility ensures that
                      there are opportunities for the mutual fund portfolio manager to buy units at cheaper
      prices which bumps up the return on investment over a longer period of time.</p>
                    <p>Warren Buffet often quotes that over the long term, there's only one direction the market
                      will go. BSE Sensex has given a compounded annual growth rate of 16% since 1979 till
                      December 2017. Not to forget the biggest crashes like Harshad Mehta scandal in 1992 and
                      the global financial crisis in 2008. The bottom-line is that even the worst crashes are
                      rather resilient to long-term returns. A correction or a crash may not necessarily be a
      negative thing for a long term investor. </p>
                    <p>Prudent investors would avoid herd mentality. A common reason why investors are unhappy
                      is when they see the stock market rising, they see many people booking profits. They
                      also get greedy and cash in. Similarly, when there is crash, the same investors believe
                      that it is a wise decision to sell and cut losses. Thus investors buy high and sell low,
                      which negates the primary goal of investing. Hence, the most important quality for a
                      long term investor is temperament and not intellect. This highlights another bottom-line
      - Don't panic, stay invested. </p>
                </div>
                <div id="helps_inculcate_financial_discipline" className="pb-4">
                    <h3>Why should you invest in mutual funds? It helps inculcate financial discipline.</h3>
                    <p>One of the most overlooked benefits of investing is inculcating a habit of regular
                      savings. Individuals typically believe this -&gt; Amount to invest = Income – Expenses.
                      Whereas it should actually be -&gt; Expenses = Income – Amount Invested. Systematic
                      Investment Plans help inculcate a ‘saving habit’ as we invest a fixed sum at regular
      intervals and would spend the amount that remains after that.</p>
                    <p>Most investors aren’t aware that a SIP can be set up daily, monthly, quarterly or
      bi-annually. </p>
                    <p>The earlier one begins the better as good habits take time to form!</p>
                </div>
                <div id="helps_you_achieve_goals" className="pb-4">
                    <h3>Why should you invest in mutual funds? It helps you achieve goals</h3>
                    <p> Often, individuals get enticed by ad-hoc investing. Especially in products which promise
                      amazing returns or claim to have incomparable features. These individuals find
                      themselves with unwanted investments which are a result of making uninformed investment
                      decisions. And when important milestones come up, the redeemed amount turns out to be
      woefully short. </p>
                    <p>Listing down goals and back calculating to figure out how much to invest regularly helps
                      an individual to be financially and mentally prepared to achieve these goals when the
                      time comes. This also reduces unnecessary stress which one may burden oneself with
      otherwise.</p>
                    <p>Goals can be primarily divided into short-term, medium term and long term.</p>
                    <p>Investments can be made in appropriate mutual funds to achieve all these different types
      of goals.</p>
                    <p>Setting proper goals shows us the exact investment amount needed for a duration in order
                      to reach a specific corpus. We get clarity on how much monthly investment to make and
      when to sell mutual funds as and when our goals near. </p>
                </div>
                <div id="can_be_liquidated_easily_at_market_rate" className="pb-4">
                    <h2>Why should you invest in mutual funds? It can be liquidated easily at market rate</h2>
                    <p>Mutual funds are liquid since investors can redeem their funds at any given point in
                      time. The mutual fund units are sold as per market rates on the date of selling. The
                      money gets credited in investors’ account within 1 – 2 working days in the case of
                      liquid or debt funds whereas amount redeemed from equity mutual funds gets credited
                      within 4 to 5 working days. However, it is applicable only to open ended schemes, which
      contribute to the major share of the mutual funds in India. </p>
                    <p>Close ended funds have lock-in period and the time horizon varies from funds to funds.
    </p>
                </div>
                <div id="offers_inflation_beating_returns" className="pb-4">
                    <h3>Why should you invest in mutual funds?It offers inflation beating returns</h3>
                    <p>Let us try to understand what inflation is. Inflation is a silent thief. When the
                      government publishes the rate of inflation @ 6%, this implies that the average cost of
                      living for us has gone up by 6%. If we had to spend Rs. 100/- a month until last year,
                      then we would spend Rs. 106/- a month this year. This implies keeping money stashed in
                      lockers also looses value due to inflation as it is worth less today compared to last
                      year when considered based on the goods or luxuries the same money can buy for us. This
                      is typically the reason why our retirement pool more often than not seems insufficient
      at a later stage as people underestimate the impact of inflation.</p>
                    <p>What we need is an investment that provides a return higher than inflation rate so that
                      our savings do not lose value over time. Example: If bank FDs give us 6% rate of
                      interest, then Rs. 100/- invested last year would be worth Rs. 106/- today. This will
                      allow us to buy the same set of goods that we could have purchased last year for Rs.
      100/-. </p>
                    <p>But this is assuming there is no tax deducted at source as it would reduce our net
                      return. Banks charge a TDS of 10% on the interest accrued if it is more than Rs 10,000
      in a year.</p>
                    <p>Equity mutual funds, however, do provide an opportunity to generate inflation beating
                      returns. While the returns do tend to be volatile in the short term, over a period of
                      time, equity mutual funds have given a return of 12% to 15% which beats inflation. Even
                      assuming a 10% long term capital gain tax on withdrawal of income, the net return would
      be adequate to beat inflation and put us in a comfortable position. </p>
                </div>
                <div id="hassle_free_to_invest" className="pb-4">
                    <h3>Why should you invest in mutual funds?It is hassle-free to invest.</h3>
                    <p><a href="beginners-guide-to-mutual-funds.html" title="Investing in Mutual Fund">Investing
        in Mutual Funds</a> has never been easier than it is today. Creating an account
                                                                                                      happens quickly if all documents such as application form, KYC, Proof of Identity and
                                                                                                      Proof of address are submitted properly. One can easily start a SIP, modify, top up or
                                                                                                      even cancel it. Thanks to online platforms, process of investing in a mutual fund can be
                                                                                                      completed quickly. One can monitor fund performance on a daily basis thanks to the
                                                                                                      exhaustive reports offered by these platforms. Most online platforms also have an APP
                                                                                                      which can be downloaded into a mobile device and accessed to perform any operation at
      the investor’s convenience.</p>
                    <p>Transfer of funds from bank account to the demat account offered by the platform also
      happens smoothly.</p>
                </div>
                <div id="variety_of_mutual_funds_to_choose_from" className="pb-4">
                    <h3>Variety of mutual funds to choose from according to investor profile and objective</h3>
                    <p>Have you just started working? Or wish to begin investing with your pocket money? Or are
      you at the prime of your career? Or does retirement beckon? </p>
                    <p>Do you wish to create a corpus to buy a house? Or do you want regular income? Or are you
      planning to save up for that solo trip?</p>
                    <p>Whatever an investor’s profile or objective might be, there will be a suitable mutual
      fund to consider. An investor</p>
                    <p>
                        <em>Mutual funds are broadly classified as Open-End Funds and Close-End Funds.</em>
                    </p>
                    <p>Open ended is the type of mutual fund, that does not restrict the number of units issued
                      by the fund. Investors can issue and redeem units continuously, since there is no limit
      on the issuance of number of open-end fund units.</p>
                    <p>Closed-ended funds are a type of funds that are not redeemable from the fund. Unlike
                      open-end funds, which one can redeem at any given point, investors in closed ended funds
                      commit their funds for the duration of the fund. At the time of New Fund offering, the
                      AMC issues a specific number of shares based on the amount of money raised. No additions
      can be made thereafter.</p>
                    <p><em>However, a goal based classification is into Growth funds and Income funds.</em> </p>
                    <br />
                    <h3>Growth Funds:</h3>
                    <p>
                        Growth funds usually put a huge portion in shares and growth sectors, suitable
                        for
                        investors who have a surplus of idle money to be distributed in riskier plans
                        with high
                        returns.
                        This will also require the investment horizon to be longer as volatile markets
                        may cause
                        adverse movement in value of these funds and hence there may not be immediate or
                        steady
                        returns.
                        Further investors looking for tax advantage may also consider investments in
                        debt mutual
                        funds so that they can use the indexation benefit as compared to fixed deposits.
    </p>
                    <br />
                    <h3>Income Funds:</h3>
                    <p>This belongs to the family regular income plans mutual funds that
                      distribute their money
                      in a mix of bonds, certificate of deposits and securities among others
                      with some
                      allocation to equity to generate incremental returns. Spearheaded by
                      skilled fund
                      managers who keep manage the portfolio’s volatility and sticking to the
                      portfolio’s
                      objective, these Funds have earned investors better returns than
                      deposits and are best
      suited for risk-averse individuals from a 1-3 years perspective.</p>
                    <p>
                        <em>
                            They can be classified further into Short term funds, Ultra
                            short-term funds, Liquid
                            funds.
                            Further, as per risk appetite Equity funds can be classified into
                            Large cap funds,
                            Mid cap funds, Small cap funds and Sector funds.
      </em>
                    </p>
                </div>
                <div id="peace_of_mind_as_experts_invest_on_your_behalf" className="pb-4">
                    <h3>Peace of mind as experts invest on your behalf</h3>
                    <p> Most of us do not have the resources, time and know-how to analyse stocks and
                      thereafter
                      buy and sell. When it comes to investing in Mutual Funds, we can hand over our
                      hard-earned money to the gumption of a professional management and meet our
                      goals
                      patiently. Fund managers do all the requisite research, buy and sell stocks as
                      per fund
                      objective. A portfolio manager is not only highly qualified but also has access
                      to
      information which a lay investor wouldn’t. </p>
                    <p>This helps the portfolio manager take appropriate decisions to purchase or sell
                      mutual
      fund units.</p>
                </div>
                <div id="tax_benefits" className="pb-4">
                    <h3>Tax benefits</h3>
                    <p>
                        Investing in Equity Linked Savings Schemes (ELSS) funds enables an investor to
                        claim
                        deduction of upto Rs 1,50,000 under Section 80C of Income Tax Act. There is a
                        lock-in
      period of 3 years when one invests in an <a href="/" title="ELSS Fund">ELSS
        fund</a>.
                                                                                                      Dividends paid out by Mutual Funds, up to Rs 10 lakhs in an year, are tax free
                                                                                                      in the
                                                                                                      hands of the investors.
    </p>
                </div>
                <div className="pb-4">
                    <h3>Conclusion</h3>
                    <p>Why should you invest in mutual funds? Mutual funds offer a dream package of all benefits in one investment. Therefore,
                      it is
                      high time to start one’s investing journey in the right direction and apire to
                      attain
      financial freedom.</p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428604,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "While almost everyone you know has started investing in mutual funds, are you wondering whether you should take the plunge?"
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/ba702abf-2cbd-4b50-b5d8-3cebf0344856?resourceVersion=id%3A55"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "sip-or-lumpsum",
        orderSequence: 26, readingTime: 6,
        "attributes": {
            "status": true,
            "title": "SIP or Lumpsum",
            imgLink: '/mf-img-06.png',
            detailImgLink: '/mf-img-lg-06.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-06.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-06.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <div className="part">
                        <h2>Introduction </h2>
                        <p> A common predicament which an investor faces with respect to investing in mutual
                          funds is whether to invest through SIP or whether to invest a lumpsum. This is
                          especially the case when one has a significantly large corpus to invest as one may
                          have either received an inheritance or landed up with a business windfall or secured
                          a large bonus or redeemed the provident fund after several years of service. Thanks
        to the popularity of ‘<a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/SIP-or-systematic-investment-plan.html" title="Systematic Investment Plan">Systematic Investment Plan</a> (SIP)’, there
                                                                                                                                are several investors who aren’t even aware that a lumpsum amount can be invested in
        mutual funds. </p>
                        <p>In this article we have tried to throw light on both these methods of investing.</p>
                    </div>
                    <div className="part">
                        <h2>Investing lumpsum</h2>
                        <p>Lumpsum investing comes with extremely important caveats such as - </p>
                        <ul>
                            <li type="a">Strong heart</li>
                            <li type="a">Ability to see our own hard-earned money in red </li>
                            <li type="a">Being there for a long haul</li>
                            <li type="a">Abundance of patience</li>
                        </ul>
                        <p>Lumpsum investing also makes us bite the bullet by offering some hard realities. We
        have listed them below: </p>
                        <ol>
                            <li>
                                <strong>If we enter the markets when they are high, we may lose out on rupee
            cost averaging</strong>
                                <p>Rupee cost averaging is a way of investing, in which a fixed amount of money
                                  is invested on a fixed date, regardless of the stock value. The investors
                                  thereby end up purchasing more stocks when prices are low and fewer stocks
                                  when prices rise. In other words, we minimize the downside risk. By
                                  investing through SIP, we bear the advantages of the market volatility by
                                  investing in a phased manner. There are 248 trading days in a year. We
                                  invest in pre-committed 12 days out of 248 days by entering at different
            levels. </p>
                            </li>
                            <li>
                                <strong>Lumpsum investing may diminish our wallet as we would invest at one
            go</strong>
                                <p>To earn Rs 50,00,000 in 10 year at a CAGR of 15%, one would have to invest a
                                  lumpsum of close to 16 lakhs. For most middle-class investors, Rs 16 lakhs
                                  is a significantly large amount. The opportunity cost of investing such a
                                  huge amount is also high and it may also put a lot of mental pressure on the
                                  investor. Investing lumpsum is tantamount to taking more risk and increasing
            the chances of going wrong. </p>
                            </li>
                            <li>
                                <strong>We attempt to time the market, which in reality is impossible</strong>
                                <p>When we decide to invest in Equity Mutual funds, we have to brace ourselves
                                  to market volatility. Delaying investments with an objective to enter at
                                  lower levels is a common approach. In such a scenario, we try to time the
                                  market. We are unlikely to succeed. For instance, if one had invested in
                                  equity mutual funds in January 2008, then till December 2011 your returns
            would have been in red. </p>
                                <p> Is it worth spending sleepless nights when such a scenario occurs? That is
                                  for an investor to answer. Regardless of good judgement, it is not always
                                  possible to consistently exit when markets are over bought and enter when
            markets are oversold. </p>
                            </li>
                            <li>
                                <strong>Sometimes we receive a big bonus or a windfall gain and we end up
            investing the whole amount at a go. </strong>
                                <p>What should we do when we sell land, or receive a big bonus? Should we leave
                                  the money idle in the bank account? Or should we wait for the best entry
            time? Or enter the very next morning? Answer is No for all. </p>
                                <p>We definitely do not want to risk our hard earned money. In the long run,
                                  markets will appreciate but we have a much better way for riding the cycle
            of the market.</p>
                                <p>We can park it in Ultra short term funds and sign up for a Systematic
                                  Transfer Plan. This works similar to an SIP, where a fixed amount gets
                                  transferred from the Short term fund into our desired equity mutual fund.
          </p>
                            </li>
                            <li>
                                <strong>Invest for the short term</strong>
                                <p>Before investing our lumpsums, we have to be extremely clear about our
                                  liquidity expectation. If we are going to need our money in two years for
                                  attaining a goal, we rather invest it in a short-term debt fund. Patience
            and calmness is the key to successful lump-sum investing. </p>
                            </li>
                            <li>
                                <strong>May not be not suitable for goal based investing</strong>
                                <p>Goal based investing involves achievement of a target corpus on a specific
                                  date. If we invest a large amount at one go and if markets correct, we end
                                  up jeopardising attaining the goal itself. We also do not benefit from rupee
            cost averaging phenomenon. </p>
                                <p>Investors who enter the tech sector and the funds linked to it in 2002, had
                                  to experience a 7-% fall in their NAVs. They had to wait for five year to
            see returns. </p>
                            </li>
                            <li>
                                <strong>Inexperienced investors are likely to panic if market suddenly
            plunges</strong>
                                <p>Imagine a newbie investor, who hasn’t experienced market cycles, invests a
                                  large lumpsum at one go. Market volatility could result in drastic negative
                                  return with a very short period of time. This could not only cause immense
                                  stress to the new investor but also have an impact on one’s attitude towards
            investing.</p>
                            </li>
                        </ol>
                    </div>
                    <div className="part">
                        <h2>Investing through SIP</h2>
                        <p>
                            SIPs offer a dream like experience in the investment journey. Some golden highlights
                            are:
      </p><ul>
                            <li type="a">Commitment into investing, thereby inculcating discipline</li>
                            <li type="a">Phenomenon of Rupee cost averaging</li>
                        </ul>
                        <p />
                    </div>
                    <div className="part">
                        <ol>
                            <li>
                                <strong>Helps you take advantage of market volatility</strong>
                                <p>In an SIP our funds are spread over time ensuring that only some portion of
                                  our investment would have entered at peak. This makes reduce our losses and
                                  enter at a low levels in the subsequent instalment. When the markets are
                                  low, the portfolio manager can buy more number of units as compared to when
                                  the market is at its peak. This automatically reduces our per-unit cost of
                                  buying the units. This is the great rupee cost averaging phenomenon.
            Ultimately, we end up with higher gains.</p>
                            </li>
                            <li>
                                <strong>Doesn't dent our wallet as we are investing a manageable amount
            regularly</strong>
                                <p>One can begin one’s investing journey with as less as Rs 500 per month. As
                                  one’s income increases, one can slowly start increasing one’s SIPs.
                                  Investing through SIPs doesn’t burn a hole in the investor’s wallet. The
                                  focus should be on staying invested through volatility rather than starting
            one’s investment journey with bigger SIPs. </p>
                            </li>
                            <li>
                                <strong>No need to time the market</strong>
                                <p>Market volatility is inevitable. We ought to ride the roller coaster of the
                                  market cycle. Under rupee-cost averaging, we end up buying more units when
                                  the markets are low. This not only contributes to a good discipline but also
                                  forces one to commit cash at market lows, when many other investors could be
            wary of entering. The <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/beginners-guide-to-mutual-funds.html" title="Mutual Fund">mutual fund</a> is taking care of our temptation to
            time the market, while we can relax and watch. </p>
                            </li>
                            <li>
                                <strong>Suitable for anyone who is earning regular income</strong>
                                <p>Salaried individuals earn a specific sum of money on a monthly basis.
                                  Unfortunately, it is human psychology to create needs once the account is
                                  flushed with funds. Then in a blink of an eye, a pre-committed amount gets
                                  debited towards an SIP. Our wonderful mind readjusts to the created needs to
            the new cash available in our bank account. </p>
                            </li>
                            <li>
                                <strong>Investing for long term</strong>
                                <p>Investing through SIPs are most appropriate to achieve long term goals. These
                                  could be goals related to creating a corpus for retirement or for building a
                                  fund to ensure higher education of children. Compounding ensures that the
                                  longer one is invested, the bigger the corpus becomes. Let us consider an
            example – </p>
                                <p>If one invests Rs 5000 per month for 15 years at a CAGR of 18%, the resulting
                                  corpus is Rs 46 lakhs. However, if the investor stays invested for just
                                  another 5 years – which means the number of years has now become 20, the
                                  resulting corpus becomes an eye popping Rs 1.2 crores! A gain of close to 74
            lakhs in just 5 more years! </p>
                            </li>
                            <li>
                                <strong>Helps achieve goals</strong>
                                <p>An expert once said ‘Goal without a plan is just a wish’. SIPs throw light on
                                  how each and every goal of ours can we met. Prior to that, we need to list
                                  down our goals and set a target corpus to each of them. We then assume a
                                  reasonable rate of return and work out a monthly amount to be set aside. We
                                  are then on an auto-pilot mode to achieve our financial freedom and we stop
            following the herd. </p>
                            </li>
                            <li>
                                <strong>Investor can train her psyche</strong>
                                <p>A famous on behavioural investing goes like this – ‘An investor’s worst enemy
                                  is not the stock market but his own emotions’. For several newbie investors,
                                  it is an altogether different experience to watch their portfolio in red,
                                  especially if one has been investing in volatile mutual funds such as small
                                  cap or microcap funds regularly over 24 to 36 months. However, if one
                                  invests through SIPs in mutual funds over a longer period of time, then one
                                  can witness how volatility is actually the friend of a long-term investor.
                                  This would be because rupee-cost averaging would reduce the cost of
                                  investment and as once the market starts rising then the value of the
                                  investor’s portfolio also rises. If an investor experiences multiple bull
                                  and bear cycles, then the psyche of the investor changes and becomes much
            more resilient than earlier. </p>
                            </li>
                        </ol>
                    </div>
                    <div className="part">
                        <h2>What is best SIP or Lumpsum?</h2>
                        <p>
                            Thus, various aspects of investing through SIP and investing a lumpsum amount have
                            been made clear to the investor. Depending on one’s financial circumstance and
                            objectives, an investor can take a suitable call.
      </p>
                    </div>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428692,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "A common predicament which an investor faces with respect to investing in mutual funds is whether to invest through SIP or whether to invest a lumpsum."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/c551b56d-64ae-4657-ada8-e6fb8895d236?resourceVersion=id%3A56"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "power-of-sip",
        orderSequence: 8, readingTime: 5,
        "attributes": {
            "status": true,
            "title": "Power of SIP",
            imgLink: '/mf-img-07.png',
            detailImgLink: '/mf-img-lg-07.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-07.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-07.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <div className="part">
                        <h2>Introduction about SIPs</h2>
                        <p>It is widely quoted that <strong>“Every drop in the ocean counts”</strong> </p>
                        <p>
                            This is especially true when it comes to investing in mutual funds.
                            Prospective investors often feel that it makes sense to invest once they have a
                            substantial corpus or are able to save a considerable sum every month.
      </p>
                        <p>
                            Most <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/beginners-guide-to-mutual-funds.html" title="Mutual Funds">mutual funds</a> enable investors to get started with a
                            small SIP of Rs 500 per month. One may feel that this is an insignificant amount.
                            But over a period of time it makes a huge difference. Let us learn how:
      </p>
                    </div>
                    <div className="part">
                        <h2>Hardly pinches your pocket</h2>
                        <p>
                            Most of us spend some money every day in buying and eating a snack worth around Rs
                            15 or 20. Just by saving that amount enables one to start investing in mutual funds
                            through SIP.
                            That's how small an amount is required to get started investing through SIP
      </p>
                        <p>While we all love and deserve to spend our hard-earned money, keeping a small amount
        aside each month can go a long way.</p>
                        <p>
                            How often do we spend Rs 500 just over a whim? We may decide to order through one of
                            the many food delivery applications or may meet up with a couple of friends at a
                            coffee shop.
                            Before we realize it, we end up spending around Rs 500.
      </p>
                        <p>Thanks to rising income and higher standard of living, it doesn’t pinch as much as it
        used to.</p>
                        <p>After all, Rs 500 is what a couple of movie tickets or a couple of pizzas cost.</p>
                        <p>Most mutual funds allow investors to start investing with Rs 500 per month.</p>
                        <p>
                            For an individual who has never invested earlier, starting off with Rs 500 per month
                            is also a promising beginning. Therefore, this becomes a great way for new investors
                            to begin as regularly investing Rs 500 per month over a longer period of time
                            wouldn’t impact the investor’s wallet even if there is irregular income due to job
                            loss or sabbaticals.
      </p>
                    </div>
                    <div className="part">
                        <h2>Magic of compounding</h2>
                        <p>Investors would agree that Compound interest is one of the most powerful forces in
                          the world! This is because of the impact it has on one’s investments. Investing over
        a longer period of time will create substantial wealth. </p>
                    </div>
                    <div className="part">
                        <h2>Investing just Rs 500 per month can result the following scenarios </h2>
                        <br />
                        <ul>
                            <li>Over 10 years, CAGR of 12% will offer Rs 1.2 lakhs</li>
                            <li>Over 10 years, CAGR of 15% will offer Rs 1.4 lakhs</li>
                            <li>Over 10 years, CAGR of 18% will offer Rs 1.7 lakhs</li>
                            <li>Over 20 years, CAGR of 12% will offer Rs 5 lakhs</li>
                            <li>Over 20 years, CAGR of 15% will offer Rs 7.6 lakhs</li>
                            <li>Over 20 years, CAGR of 18% will offer Rs 11.7 lakhs</li>
                            <li>Over 30 years, CAGR of 12% will offer Rs 17.6 lakhs</li>
                            <li>Over 30 years, CAGR of 15% will offer Rs 35 lakhs</li>
                            <li>Over 30 years, CAGR of 18% will offer Rs 71.6 lakhs</li>
                        </ul>
                        <p>
                            Let us look at the illustrations which offer a CAGR of 12% across 10, 20 and 30
                            years. Over 10 years,
                            the investment of Rs 500 per month turns out to be worth Rs 1.2 lakh.
                            Over 20 years, it balloons up to Rs 5 lakhs and over 30 years it swells up to Rs
                            17.6 lakhs!
      </p>
                    </div>
                    <div className="part">
                        <h2>We don't lose our sleep</h2>
                        <p>Over a shorter period of time markets tend to be volatile. Even after investing
                          consecutively for 36 months, one may see that one’s portfolio is in red. If the
                          invested amount is small, then a new investor is able to deal with this situation
                          and not feel stressed about it. If a new investor starts a SIP with a larger amount
                          in a small cap fund during a choppy market, the variance in portfolio can cause the
                          investor to chicken out and withdraw his holdings much before the magic of rupee
        cost averaging plays out </p>
                        <p>As the performance of a mutual fund in which investor has started a small SIP
        improves, she acquires confidence to invest higher amounts.</p>
                    </div>
                    <div className="part">
                        <h2>Suitable for investors who are risk averse</h2>
                        <p>There are individuals who only prefer saving in fixed income or debt instruments. Due
                          to certain reasons such investors prefer the security of lower returns rather than
                          the opportunity presented by equity funds to beat inflation. If they haven’t tasted
                          the growth that an equity-based instrument brings in, introducing them to the same
        through small SIPs is a great idea. </p>
                        <p>
                            Some investors may not stay through the course even though the monthly invested
                            amount is tiny. Whereas some may realize the benefits of investing in equity-based
        instruments as well and may seek to increase the <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/SIP-or-lumpsum.html" title="SIP">SIP</a> amount.
      </p>
                    </div>
                    <div className="part">
                        <h2> Continue to invest in case of unforeseen circumstances</h2>
                        <p>
                            As the size of an investor’s portfolio increase, her confidence in the wealth
                            creating ability of mutual funds increases. After experiencing market volatility and
                            continuing investments regularly, the investor begins to appreciate the process of
                            creating wealth by investing through small SIP when the mutual fund portfolio starts
                            growing.
                            This offers a huge boost of confidence to the investor which may result in the
                            investor bumping up her SIPs.
      </p>
                    </div>
                    <div className="part">
                        <h2>Acquire confidence to invest more over a period of time as our portfolio grows</h2>
                        <p>
                            We live in an uncertain world. Incomes have improved but job security, especially in
                            private firms, is a big question mark. There may also be health related situations
                            which may cause an individual to stop working for a while. We are also living in a
                            time when individuals wish to make the most out of their lives.
                            This includes taking a sabbatical to travel or quitting a well-paying job to start
                            up.
      </p>
                        <p>
                            During such scenarios, one may not receive a regular flow of income. Or the size of
                            income could reduce. Small SIPs can still be kept going as they may not cause a huge
                            dent in an investor’s pocket during such uncertain times.
      </p>
                    </div>
                    <div className="part">
                        <h2>Easier to develop habit of financial discipline</h2>
                        <p>
                            Financial discipline is rarely something we are born with. We have work on it. Let
                            us take the example of goal-based investing. A newbie investor may start a small SIP
                            to
                            invest a certain amount over 5 years to achieve a goal. However, after 18 months,
                            this individual may be tempted to buy a new laptop and would be falling short of
                            some amount. If this individual decides to redeem the corpus which has been created
                            so far, he may not only loss the opportunity of creating more wealth but would also
                            fall back on his efforts to achieve his goal. Therefore it is critical to adhere to
                            financial discipline when it comes to investing. Starting small makes it easier to
                            get used to this. It is worth creating a habit of putting aside a small amount. Over
                            a period of time, this would make it easier to deal with following a discipline of
                            investing larger amounts.
      </p>
                    </div>
                    <div className="part">
                        <h2>Claim tax benefits </h2>
                        <p>
                            Investors who are starting out their journey in the world of investment, can look at
                            ELSS to not only help achieve financial goals but also save tax. ELSS stands for
                            Equity Linked Savings Schemes. ELSS is riskier than the fixed income alternatives
                            available for tax-saving under section 80C but has the shortest lock in period among
                            all these options. It also offers potential of growth via equity.
      </p>
                    </div>
                    <div className="part">
                        <h2>Especially suitable for introducing young children and young adults into the world
        of investing. </h2>
                        <p>
                            According to a survey conducted by Pogo in 2016, Indian children received an average
                            pocket money of Rs 555/- per month. Imagine as a 11-year old, one starts investing
                            Rs 500 per month. By the time this person turns 31, she has a corpus of Rs 7.6 lakhs
                            at a conservative CAGR of 15%. Of course, till this young investor turns 18, she can
                            be represented by her natural or legal guardians. Anyone who disagrees can be told
                            that Warren Buffet bought his first stock at the age of 11!
                            Children and Young adults be introduced to investing through small amounts. We could
                            educate them on importance of investing and saving. They can start keeping aside a
                            small amount on a monthly or quarterly basis. If they do that for 10 years till they
                            graduate, they can use this money for partly funding their higher studies or start
                            ups or any other suitable opportunity.
      </p>
                    </div>
                    <div className="part">
                        <h2>Conclusion </h2>
                        <p>
                            Rome wasn’t built in a day. And neither is a huge corpus that can offer financial
                            freedom. One can begin investing modestly and then slowly keep increasing SIPs
                            without being influenced by noise. Once an investor signs up to ride several market
                            cycles then there is no looking back. This is because the investor begins to
                            understand the importance of continuously investing during good times as well as
                            bad. Small SIPs are bound to do wonders to our financial health.
      </p>
                    </div>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428791,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "SIP or Systematic Investment Plan is a plan through which a person can invest a small amount in a mutual fund at regular intervals (monthly/quarterly)."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/3b8e512e-ec6a-4199-865f-b2bb1ca2fdce?resourceVersion=id%3A57"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "mutual-fund-for-me",
        orderSequence: 11, readingTime: 6,
        "attributes": {
            "status": true,
            "title": "Which Mutual Fund Is Most Suitable for Me",
            imgLink: '/mf-img-08.png',
            detailImgLink: '/mf-img-lg-08.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-08.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-08.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <div className="part">
                        <h2>Introduction </h2>
                        <p> It is common knowledge that unless one invests regularly it is difficult to achieve
                          financial freedom. Thanks to mutual funds that yield best returns, one has a
                          credible alternative to begin
                          one’s investing journey. But figuring out which mutual fund is suitable for an
                          investor has never been easy. Before reclassification, at last count, there were
                          more than 2000 mutual fund schemes in India. After the reclassification mandate
                          passed by SEBI, mutual funds will be divided into 36 categories. This requires each
                          Asset Management Company (AMC) to divide its mutual fund offerings along these 36
                          categories. But for an investor, to get best returns on mutual funds, it still may
                          be difficult to make the correct
                          choice. In this article, we seek to assist the investor to decide which mutual fund
        is most suitable according to age, risk, goals, diversification and skew. </p>
                    </div>
                    <div className="part">
                        <h2>According to Age</h2>
                        <p>There is a Thumb Rule, which says that one should invest the percentage of 100 minus
                          our current age i.e. (100 - Age) % in aggressive funds (small cap and mid cap) and
        the remaining in balanced/large cap funds to get best returns. </p>
                        <p>Lumpsum investing also makes us bite the bullet by offering some hard realities. We
        have listed them below: </p>
                        <p>Proper asset allocation is imperative. There are three asset classes available i.e.
                          equity, debt and cash. We should decide a ratio in which we assign our capital to
        these asset classes.</p>
                        <p>When we are in our 30s or in a preceding age range, we should pick up the most
                          aggressive funds and watch them grow over 30 years. There is no one single size that
                          fits everyone, but by the time we are in our 30s, we start saving money. At that
                          time, we have 30 years for the goal like retirement. Hence we can hold on to the
        investment for a long period of time. </p>
                        <p>When we reach say 45 years, we can switch to equity-oriented balanced funds.</p>
                        <p>When we retire, we should opt for safety of capital, which gives us our monthly
        return. </p>
                        <p>However, the above can vary from person to person. But in today’s world with
                          inflation eating into our hard-earned money, we have to be more judicious about our
        investments.</p>
                    </div>
                    <div className="part">
                        <h2>According to Risk</h2>
                        <p>
                            An expert once said that one should only take as much risk so as still manage a
        sound sleep at night. Risk appetite however, has a nexus with <a href="https://s3.ap-south-1.amazonaws.com/iitpl-mf-designs/hari/MFBlog/how-mutual-funds-will-help-you-achieve-your-goals.html" titile="Investment Goals">investment goals</a>. Senior citizens investing for
                                                                                                                                regular monthly income will naturally have a low risk appetite compared to a person
                                                                                                                                who is investing with a 10 year horizon for kids’ education.
      </p>
                        <p>Balanced mutual funds and Large caps mutual funds are suitable for someone who is
        risk-averse.</p>
                        <p>Balanced mutual funds invest a mix of equity (at least 65%) and debt. These schemes
                          are less
                          volatile than pure equity funds because of the mixed portfolio. The debt investments
                          provide stability in times of volatility. These mutual funds are suitable for new
                          stock
        investors and conservative equity investors.</p>
                        <p>Large-cap funds invest mostly in big companies. Funds identify these companies by
                          their market capitalisation. These companies are considered safe to invest because
                          they are likely to be well-established players and leaders in their respective
                          filed and can proliferate best returns. This is the reason why large-cap funds are
                          considered suitable for
                          conservative equity investors. These funds are likely to offer modest returns as
        they carry relatively less risk.</p>
                        <p>If you can deal with risk, invest higher percentage in small and mid cap or sector
        funds.</p>
                        <p>Midcap funds invest mostly in medium-sized companies. These companies can be risky as
                          they may or may not realise their full potential. However, if they succeed, they
                          will become large companies and investors will be rewarded handsomely. Investors
        with high risk appetite should bet on these funds.</p>
                        <p>Smallcap funds invest in small companies. These companies can be extremely risky and
                          thus exhibit volatile performance over a shorter period of time, as there will be
                          very little information about them available in the public domain. However, they can
                          also offer phenomenal returns. They are suitable only for investors with a very high
        risk appetite.</p>
                        <p>Sector funds invest mostly in a particular sector or along the lines of a defined
                          theme. Since the investments are concentrated on a single sector or theme, sector
                          funds are considered extremely risky. It is very important to time the entry into
                          and exit from them as the fortunes of sectors changing in different cycles in the
                          economy. They are meant for investors with an intimate knowledge about a particular
        sector. Investors should take only a small exposure in them.</p>
                    </div>
                    <div className="part">
                        <h2>According to Goals</h2>
                        <h3>For short term goals</h3>
                        <p>
                            Planning for short term goals is different from long term goals. Objective of Short
                            term goals is safety over growth and liquidity. Mutual funds have various categories
                            of schemes that cater to short term investments which can help you in meeting your
                            short term goals like planning for holidays or wedding or buying electronic gadgets
                            or house renovation to name a few.
      </p>
                        <p>For very short term goals and for emergency fund you have to invest in liquid funds
                          or ultra short term funds as emergency fund is a corpus where you would need funds
                          immediately as and when emergency arises and hence liquidity and minimal exit load
                          are critical drivers. These are funds that invest primarily into money market or
                          short tenor liquid instruments but provide the flexibility to redeem the funds at
        short notice with minimal or no exit load.</p>
                        <p>If the goal is 3 years away, we can invest in an income fund or dynamic bond fund.
                          These funds typically invest in corporate paper and are able to generate higher
        returns than bank fixed deposits in most cases.</p>
                        <h3>For medium term goals</h3>
                        <p>Some top of mind Medium term goals are saving for a down payment to buy a house or
        spending on one’s wedding or purchasing a car. </p>
                        <p>In order to achieve medium term goals, we can invest in balanced fund. When one opts
                          for a balanced funds, where money is invested in debt and equity both. The debt
                          portion works as a cushion and covers the impact if the equity portion is unable to
                          reap great rewards. However, a combination of debt and equity largely increases the
                          investor’s chances of reaping attractive returns with just a fair percentage of
        risk.</p>
                        <h3>For long term goals</h3>
                        <p>There are two common and most important of long term goals: Retirement planning and
        Children’s Education. What kind of funds are suitable for these goals?</p>
                        <p>To start with, both retirement and children’s education, need to planned much in
                          advance. Since the time frame for these goals is minimum 8-10 years, you can invest
                          in equity funds. One can start by investing aggressive small cap and large cap
                          equity funds. These funds have higher exposure to equity and hence could have
                          volatile returns. While investing for long term we are looking for capital
                          appreciation and hence can take risk volatility of returns on our capital. However
        over a longer period of time, these funds also provide higher returns. </p>
                        <ol>
                            <li>Large Cap Funds invest in large-cap companies. The stock prices of these
          companies are considerably stable compared to overall market. </li>
                            <li>Small-Cap Fund is extremely vulnerable to market ups and downs and carry higher
                              risk. However, the reward for choosing higher risk is the attractive returns.
        </li>
                        </ol>
                        <p>As we near our goals, we should start allocating some funds out of these small cap
                          and large cap equity funds into balanced funds to reduce volatility towards the end.
                          A strategy that gradually grows more conservative over time requires that us
                          regularly rebalance the portfolio and ease up on your stock weighting as you get
        closer to our goal.</p>
                    </div>
                    <div className="part">
                        <h2>For Diversification </h2>
                        <h3>Gold funds</h3>
                        <p>
                            Gold shines, but investing in gold may not offer impressive returns. Should one
                            invest in Gold funds then? Yes, for diversifying assets. We diversify into various
                            types of mutual funds so that our assets remain secure. Similarly, we can contribute
                            some part of our portfolio in Gold, which will remain safe and grow gradually and
                            marginally.
      </p>
                        <h3>Foreign funds</h3>
                        <p>
                            Investing in international funds, also supports the same logic of diversification.
                            Returns depends on that country’s markets and forex movement. If we have extra
                            money, it can surely go into funds. This also increases our awareness of global
                            markets.
      </p>
                        <h3>For Regular income</h3>
                        <p>How do we sustain our standard of living after we actually retire? Regular income is
        of prime significance.</p>
                        <p>Mutual funds can provide regular income through 2 modes:</p>
                        <ol>
                            <li>
                                <strong>1.Monthly Income plans</strong><br />
                                MIPs offer regular income by investing in mutual funds with a monthly divided
                                option. Most of these funds allocate only 10-20% of their corpus into equities
                                and the rest 80-90% in safer bonds and other debt instruments. MIPs are safe as
                                they give investors good returns if stock markets do well, but they also protect
                                the downside because of the limited exposure to equities. Though these are
                                called monthly income plans, there is no guarantee of monthly income. Due to the
                                presence of equity, returns can be volatile.
        </li>
                            <li className="mt-3">
                                <strong>2.Systematic Withdrawal plans</strong><br />
                                SWP simplifies retirement life by letting investors to withdraw from their
                                mutual fund scheme every month on an already set date. This withdrawal can be
                                just the capital gains or a fixed or a variable amount. The same can be made
                                annually, semi-annually, quarterly or monthly.
        </li>
                        </ol>
                    </div>
                    <div className="part">
                        <h2>Skewed Portfolio </h2>
                        <p>
                            This goes back to our golden theory of Asset Allocation. It may sometimes happen
                            that our portfolio may get skewed towards a certain type of fund or fund house. It
                            is then time to re-evaluate our portfolio.
      </p>
                        <p>Doing this is extremely important as we run the risk of not being able to liquidate
                          enough cash when we are nearing a goal. Or we lose out on an advantage of investing
                          in an aggressive portfolio while age supports us. Re-balancing portfolios is one of
        keys to keep our financial health secure. </p>
                    </div>
                </div>
                <div className="part">
                    <h2>Conclusion </h2>
                    <p>
                        Every individual’s needs, amount of income, aspiration and mindset are different. One
                        should choose a mutual fund depending on these factors and not on the basis of what
                        one’s friends or family members are doing.
    </p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428863,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "It is common knowledge that unless one invests regularly it is difficult to achieve financial freedom. Thanks to mutual funds, one has a credible alternative to begin one’s investing journey."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/b02226b2-99e7-49a5-901e-ad096e0bb40a?resourceVersion=id%3A58"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "senior-citizen-tax-benefits",
        orderSequence: 2, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Tax Benefits for Senior Citizens",
            imgLink: '/mf-img-09.png',
            detailImgLink: '/mf-img-lg-09.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-09.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-09.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <h4 className="mt-0 pb-2">
                    </h4><h2>Budget to meet your tax saving goals</h2>
                    <p>As any financial year begins, we come across a lot of speculations around the budget
                      presented for that year. There are reforms across sectors that prove beneficial for the
                      public and certainly help them in a big way by saving tax. The budget of FY 2018-2019
                      too incorporated new areas that help you save tax, especially if you are a Senior
                      Citizen. Since we are nearing the time which requires our intervention on saving tax, it
      is apt for you to know about the newly introduced sections where you can save tax.</p>
                </div>
                <div id="being_small" className="pb-4 scrollarticle">
                    <h3>Tax-exempted medical premium increased from INR 30,000 to INR 50,000 u/s 80 D, Income
      Tax Act, 1961</h3>
                    <p>This is applicable for senior citizens of 60 years of age. Till last financial year, the
                      premium paid up to INR 30,000 towards health insurance for a senior citizen was
                      exempted from tax. However, for the current financial year the limit has been raised to
                      INR 50,000. So now anyone paying the medical premium up to INR 50,000 for a senior
                      citizen will be saving tax up to INR 15,600. Tax benefit is calculated for the highest
      tax slab of 30% and includes 4% health and education cess.</p>
                </div>
                <div id="take_advantage_of_markets_volatility" className="pb-4 scrollarticle">
                    <h3>NPS withdrawal made 100% tax-free</h3>
                    <p>The Union Cabinet has offered complete tax exemption on 60% of the NPS corpus withdrawn
                      on maturity making NPS even more tax friendly. National Pension System is an initiative
                      by Govt. of India which is a tax-saving investment tool that fosters retirement
                      planning. NPS investors can invest up to INR 1.5 lakh under Sec 80 C and additional INR
      50,000 under Sec 80 CCD (1B) of Income Tax Act, 1961.</p>
                    <p>NPS is a tax-efficient tool even during the Redemption Phase. At maturity, it is mandated
                      to utilize the 40% of the corpus to buy an annuity that continues to give a regular
                      income/ pension to the investors, while the remaining 60% of the corpus can be withdrawn
                      by the investor as a lump-sum amount. Earlier only 40% of this withdrawal amount was
                      tax-free while the remaining 20% was taxed. But now there will be a complete tax
      exemption on this 60% of the withdrawn corpus amount.</p>
                </div>
                <div id="helps_inculcate_financial_discipline" className="pb-4">
                    <h3>Sr. Citizens can claim a tax deduction of up to INR 50,000 u/s
      80TTB</h3>
                    <p>
                        A new section was introduced in the Budget 2018 that benefitted the Sr. citizens - 80TTB
                        under the Income Tax Act 1961. They can now claim a tax deduction of up to INR 50,000 on
                        interest earned from deposits held with a bank, a banking co-operative society or with a
                        post office. With this benefit, INR 50,000 will get deducted from the gross annual
                        total income before the tax is levied on it. However, not all interest income can be
                        claimed as a deduction u/s 80TTB. Following is the list of inclusions under the 80TTB of
                        Income Tax Act:
    </p><ul>
                        <li>Fixed deposits, recurring deposits or savings accounts withheld with a bank, a
        banking co-operative society or with a post office.</li>
                        <li>Senior Citizen Savings Scheme accounts</li>
                        <li>Post office time deposits</li>
                        <li>5-year recurring deposits</li>
                        <li>Post Office Monthly Income Schemes</li>
                        <p />
                    </ul></div>
                <div id="helps_you_achieve_goals" className="pb-4">
                    <h3>Senior citizens need not to pay TDS on interest income up to
      INR 50,000</h3>
                    <p>As per the clarification issued by The Central Board of Direct Taxes (CBDT) it has been
                      stated that banks cannot deduct any TDS from a senior citizen’s interest income in a
                      single financial year up to INR 50,000. Previously the limit of TDS deduction was INR
      10,000 per financial year irrespective of the age of&nbsp;the individual taxpayer.</p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428929,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "How Senior Citizens can get the most out of FY 2018-19 Budget to meet your tax saving goals  As any financial year begins, we come across a lot of speculations around the budget presented for that year."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/52cf1682-421a-46c9-87ee-a4b5ad84e7d7?resourceVersion=id%3A59"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "4-mutual-fund-myths-busted",
        orderSequence: 23, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "4 Myths of Mutual Funds Busted",
            imgLink: '/mf-img-10.png',
            detailImgLink: '/mf-img-lg-10.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-10.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-10.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    {/* <h4 class="mt-0 pb-2">
                      </h4>*/}
                    <p>Usually, Mutual Fund is considered to have risks involved in investing. It is taken as an
                      option related to Equity markets only. But, the truth is that there are a lot of
                      promises that Mutual Funds hold for an investor to be assured of a secured future. One
                      only needs to have clarity about the facts and factors around it. For instance, there
                      are mutual funds, known as debt funds that don't invest in equities, rather invests in
                      bonds issued by banks, government bodies, companies and money market instruments. These
                      funds have a lower risk. Then there are hybrid funds that invest in a mix of both
                      equities and bonds. Thus, there is immense scope for investors to explore the mutual
      fund investments and choose the right category as per their financial requirements. </p>
                    <p>Apart from that, there are many wonderful features of mutual funds that make them an
      ideal investment choice.&nbsp;</p>
                </div>
                <div id="being_small" className="pb-4 scrollarticle">
                    <p><strong>Diversification:</strong> Mutual Fund investments minimize risks through
      portfolio diversification.</p>
                    <p><strong>Easy to Start:</strong> You can start your investments even with an amount as
      small as INR 500/ 1000.</p>
                    <p><strong>Transparent:</strong> Mutual funds performance is a matter of public record,
      anyone can track the performances of the funds before and after investing.</p>
                    <p><strong>Liquidity:&nbsp;</strong>Open to quick exit and easy selling of units</p>
                    <p><strong>Tax Friendly:&nbsp;</strong>Mutual Fund investments are tax-effective</p>
                    <p><strong>Professional Management:&nbsp;</strong>&nbsp;Mutual fund portfolios are managed by
      professional money managers</p>
                    <p><strong>Reinvest:</strong>&nbsp;There is the flexibility of reinvesting dividends</p>
                    <span> </span>
                </div>
                <div id="helps_inculcate_financial_discipline">
                    <h2>Let us now help you with breaking the most common myths related to Mutual
      Funds:</h2>
                    <p>
                    </p><ol>
                        <li>
                            <p><strong>Mutual funds myths:&nbsp;</strong>The greatest Mutual funds myths perhaps
                              is that mutual funds block
          the money for many years.</p>
                            <p><strong>Reality:</strong>&nbsp;Mutual Fund investments have liquidity. If you
                              choose open-ended funds, then you can withdraw your money at any point in
          time.</p>
                        </li>
                        <li>
                            <p><strong>Mutual funds myths:&nbsp;</strong>In general, people think that it is
                              mandatory to have
          lump-sum money to invest in Mutual Funds.</p>
                            <p><strong>Reality:</strong>&nbsp;Through Systematic Investment Plan i.e. SIP, you
          can start investing in mutual funds with the amount as small as Rs 500.</p>
                        </li>
                        <li>
                            <p><strong>Mutual funds myths:&nbsp;</strong>Mutual Funds Investment requires timing
                              the
                              marketplace, and that is why it is not a good investment option for those
          who have no knowledge about the market.</p>
                            <p><strong>Reality:</strong>Investing in Mutual Funds through Systematic
                              Investment Plan (SIP) makes you free from the need for timing the market.&nbsp;
        </p>
                        </li>
                        <li>
                            <p><strong>Mutual funds myths:&nbsp;</strong>Many people think that Mutual Fund
                              investments are for
          the long-term only.</p>
                            <p><strong>Reality:</strong>Mutual Fund investments can even be held for short
                              to medium terms using debt schemes such as liquid funds, ultra-short term
          funds, short to medium-term debt funds.</p>
                        </li>
                    </ol>
                </div>
                <br />
                <div id="helps_you_achieve_goals" className="pb-4">
                    <h2>Disclaimer: </h2>
                    <p> Mutual Fund Investments are subject to market risks. Please read the documents carefully
      before investing. </p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558428994,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "Usually, Mutual Fund is considered to have risks involved in investing. It is taken as an option related to Equity markets only."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/db019665-a0bd-4e2d-8b9a-c9f5108ae5ce?resourceVersion=id%3A60"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "start-investing-through-stp-now",
        orderSequence: 25, readingTime: 3,
        "attributes": {
            "status": true,
            "title": "Start Investing Through STP Now!",
            imgLink: '/mf-img-11.png',
            detailImgLink: '/mf-img-lg-11.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-11.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-11.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    {/* <h4 class="mt-0 pb-2">
                      </h4>*/}
                    <p>We have some empirical evidences that if someone invests six months immediately before the Lok Sabha election date, he reaps the handsome gains over next 18 months post the elections. Please find below the historical data confirming the same-</p>
                    <div className="tableData02 pb-3 mt-2 overflowX">
                        <table width="100%" align="center" cellPadding={5} cellSpacing={5}>
                            <thead>
                                <tr>
                                    <th width="16%">6 Months Prior to Parliament Election</th>
                                    <th width="16%">Sensex Value </th>
                                    <th width="16%">12 Months After Parliament Election</th>
                                    <th width="16%">Sensex Value</th>
                                    <th width="16%">Time Period (Months)</th>
                                    <th width="16%">Absolute Return</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="16%">30/05/1989</td>
                                    <td width="16%">692.24</td>
                                    <td width="16%">30/11/1990</td>
                                    <td width="16%">1196.25</td>
                                    <td width="16%">18</td>
                                    <td width="16%">72.81%</td>
                                </tr>
                                <tr>
                                    <td width="16%">17/12/1990</td>
                                    <td width="16%">1188.54</td>
                                    <td width="16%">17/06/1992</td>
                                    <td width="16%">3140.80</td>
                                    <td width="16%">18</td>
                                    <td width="16%">164.26%</td>
                                </tr>
                                <tr>
                                    <td width="16%">02/12/1995</td>
                                    <td width="16%">3036.23</td>
                                    <td width="16%">02/06/1997</td>
                                    <td width="16%">3808.18</td>
                                    <td width="16%">18</td>
                                    <td width="16%">25.42%</td>
                                </tr>
                                <tr>
                                    <td width="16%">09/04/1999</td>
                                    <td width="16%">3441.19</td>
                                    <td width="16%">09/10/2000</td>
                                    <td width="16%">4056.07</td>
                                    <td width="16%">18</td>
                                    <td width="16%">17.87%</td>
                                </tr>
                                <tr>
                                    <td width="16%">12/11/2003</td>
                                    <td width="16%">5005.77</td>
                                    <td width="16%">12/05/2005</td>
                                    <td width="16%">6456.82</td>
                                    <td width="16%">18</td>
                                    <td width="16%">28.99%</td>
                                </tr>
                                <tr>
                                    <td width="16%">14/11/2008</td>
                                    <td width="16%">9385.42</td>
                                    <td width="16%">14/05/2010</td>
                                    <td width="16%">16944.60</td>
                                    <td width="16%">18</td>
                                    <td width="16%">80.54%</td>
                                </tr>
                                <tr>
                                    <td width="16%">13/11/2013</td>
                                    <td width="16%">20194.40</td>
                                    <td width="16%">13/05/2015</td>
                                    <td width="16%">27251.10</td>
                                    <td width="16%">18</td>
                                    <td width="16%">34.94%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p><strong>Our Strategy:-</strong><br />
                        There is a general psychology of the investors to wait for the Election to get over and investing thereafter. Looking at the above study of past trends of the Elections years, investors must start investing immediately to get the higher returns in next 18-24 months’ time horizon. Very significantly, instead of putting the lumpsum investment, one should opt for Systematic Transfer Plan (STP) preferably maximum in 3 to 6 installments to generate the better returns making best use of prevailing volatility in the Equity market.</p>
                </div>
                <div id="helps_inculcate_financial_discipline">
                    <hgroup>
                        <h3> <strong>Suggested Focused Equity schemes for STP:</strong> </h3>
                    </hgroup>
                    <p>
                    </p><ul>
                        <li> <p><strong>ICICI Pru Bluechip Fund:&nbsp;</strong>
                        </p><ul>
                                <li>A diversified Large-cap equity fund, managed in a Value / Contrarian style</li>
                                <li>Fund generally has a well-diversified portfolio  with a layer of volatility management using stock &amp; index derivatives
          </li>
                                <li>The fund manager follows a value style of investing and is open to investing in out of favor stocks or sectors that hold promise of visibility of earnings in the long term
          </li>
                                <li>One of the most consistent performers in the large cap funds category, the fund tends to vary the sector allocation to generate alpha. An all-weather, true to the label Large Cap Diversified Equity fund<br />
                                    <div className="tableData02 pb-3 mt-2 overflowX">
                                        <table width="100%" align="center" cellPadding={5} cellSpacing={5}>
                                            <thead>
                                                <tr>
                                                    <th width={38} className="text-left">CAGR(%)	</th>
                                                    <th width="10%">1Y </th>
                                                    <th width="10%">2Y</th>
                                                    <th width="10%">3Y</th>
                                                    <th width="10%">5Y</th>
                                                    <th width="22%">Since Inc</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td width="40%" className="text-left">ICICI Pru Blue chip Fund</td>
                                                    <td width="10%">-3.48%</td>
                                                    <td width="10%">8.21%</td>
                                                    <td width="10%">15.87%</td>
                                                    <td width="10%">14.58%</td>
                                                    <td width="22%">13.46%</td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Peer Set average </td>
                                                    <td width="10%">-1.68%</td>
                                                    <td width="10%">8.24%</td>
                                                    <td width="10%">14.44%</td>
                                                    <td width="10%">12.55%</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Scheme Quartile	</td>
                                                    <td width="10%">2</td>
                                                    <td width="10%">2</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">2</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <p /></li>
                    </ul>
                    <ul>
                        <li> <p><strong>Mirae Asset India Equity Fund:&nbsp;</strong>
                        </p><ul>
                                <li>One of the most consistent diversified Equity funds in industry, managed by one of the most experienced equity fund managers, since 2008, with an impressive track record of outperformance</li>
                                <li>It follows a flexible investment strategy across sectors, market caps, themes and style to deliver consistent performance
          </li>
                                <li>The fund has been able to outperform the index consistently due to superior choice of stocks and active management of stock weights within the index or sector
          </li>
                                <li>The fund's goal is to identify future growth trends at an early stage and focus on companies which have strong pricing power and are sector leaders</li>
                                <li>The investment philosophy of the fund is built on three core principles: quality businesses with stable earnings, strong management and attractive valuation
          </li>
                                <li>The fund manager’s focus on capital preservation has led to less volatility and lower drawdowns through the cycle
            <br />
                                    <div className="tableData02 pb-3 mt-2 overflowX">
                                        <table width="100%" align="center" cellPadding={5} cellSpacing={5}>
                                            <thead>
                                                <tr>
                                                    <th width={38} className="text-left">CAGR(%)	</th>
                                                    <th width="10%">1Y </th>
                                                    <th width="10%">2Y</th>
                                                    <th width="10%">3Y</th>
                                                    <th width="10%">5Y</th>
                                                    <th width="22%">Since Inc</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td width="40%" className="text-left">Mirae Asset India Equity Fund</td>
                                                    <td width="10%">1.74%</td>
                                                    <td width="10%">12.00%</td>
                                                    <td width="10%">19.73%</td>
                                                    <td width="10%">19.10%</td>
                                                    <td width="22%">15.50%</td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Peer Set average </td>
                                                    <td width="10%">-8.01%</td>
                                                    <td width="10%">5.29%</td>
                                                    <td width="10%">13.69%</td>
                                                    <td width="10%">15.79%</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Scheme Quartile	</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">1</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <p /></li>
                    </ul>
                    <ul>
                        <li> <p><strong>HDFC Small Cap Fund:&nbsp;</strong>
                        </p><ul>
                                <li>A  Small -Cap equity fund, managed by Chirag  Setalvad</li>
                                <li>Fund generally has a well-diversified portfolio of 70-75 stocks. Fund manager is actively picking stocks and does not mimic its benchmark. He combines both absolute and relative valuation parameters to pick up stocks at reasonable prices.
          </li>
                                <li>The fund manager invests where ever he finds value (in line with his investment strategy) he likes to go about for it
          </li>
                                <li>Target high quality small cap businesses which are undervalued and have a sustainable franchise
          </li>
                                <li>Fund manager buys businesses which have a – 1. minimum RoE of 15-20%, 2. earnings growth of 16-17%, 3. P/E in the range of 15-18 and 4. a sound corporate governance practice
          </li>
                                <li>Ability to identify tactical opportunities and active management of long term holdings have helped the fund generate significant alpha in the long term
            <br />
                                    <div className="tableData02 pb-3 mt-2 overflowX">
                                        <table width="100%" align="center" cellPadding={5} cellSpacing={5}>
                                            <thead>
                                                <tr>
                                                    <th width={38} className="text-left">CAGR(%)	</th>
                                                    <th width="10%">1Y </th>
                                                    <th width="10%">2Y</th>
                                                    <th width="10%">3Y</th>
                                                    <th width="10%">5Y</th>
                                                    <th width="22%">Since Inc</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td width="40%" className="text-left">HDFC Small Cap Fund</td>
                                                    <td width="10%">-12.12%</td>
                                                    <td width="10%">12.28%</td>
                                                    <td width="10%">19.78%</td>
                                                    <td width="10%">19.33%</td>
                                                    <td width="22%">13.52%</td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Peer Set average </td>
                                                    <td width="10%">-21.22%</td>
                                                    <td width="10%">-0.21%</td>
                                                    <td width="10%">10.82%</td>
                                                    <td width="10%">18.42%</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Scheme Quartile	</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">1</td>
                                                    <td width="10%">3</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <p /></li>
                    </ul>
                    <ul>
                        <li> <p><strong>Aditya Birla Focused Equity Fund:&nbsp;</strong>
                        </p><ul>
                                <li>A  Focused equity fund, managed by Mahesh Patil</li>
                                <li>Fund have a concentrated large cap portfolio. Fund manager is actively picks  stocks and does not mimic its benchmark
          </li>
                                <li>The fund manager follows a value style of investing and is open to investing in out of favor stocks or sectors that hold promise of visibility of earnings in the long term
          </li>
                                <li>Focused strategy allows the fund manager to allocate a higher proportion of the fund to high conviction stocks
          </li>
                                <li>Fund is highly concentrated to few selected sectors, with top five sectors together accounting for 62% of its assets
          </li>
                                <li>With a concentrated large-cap portfolio, fund could generate a greater alpha by focusing on fewer stock ideas with higher weights while building relative safety of large caps
          </li>
                                <li>Concentration risk is mitigated by consciously investing in companies with high quality management and stable cash flows
            <br />
                                    <div className="tableData02 pb-3 mt-2 overflowX">
                                        <table width="100%" align="center" cellPadding={5} cellSpacing={5}>
                                            <thead>
                                                <tr>
                                                    <th width={38} className="text-left">CAGR(%)	</th>
                                                    <th width="10%">1Y </th>
                                                    <th width="10%">2Y</th>
                                                    <th width="10%">3Y</th>
                                                    <th width="10%">5Y</th>
                                                    <th width="22%">Since Inc</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td width="40%" className="text-left">Aditya Birla SL Focused Equity Fund</td>
                                                    <td width="10%">-1.83%</td>
                                                    <td width="10%">5.24%</td>
                                                    <td width="10%">12.70%</td>
                                                    <td width="10%">14.66%</td>
                                                    <td width="22%">13.64%</td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Peer Set average </td>
                                                    <td width="10%">-4.23%</td>
                                                    <td width="10%">5.19%</td>
                                                    <td width="10%">12.13%</td>
                                                    <td width="10%">13.70%</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                                <tr>
                                                    <td width="40%" className="text-left">Scheme Quartile	</td>
                                                    <td width="10%">2</td>
                                                    <td width="10%">2</td>
                                                    <td width="10%">3</td>
                                                    <td width="10%">3</td>
                                                    <td width="22%"> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                            <p /></li>
                    </ul>
                </div>
                <div id="helps_you_achieve_goals" className="pb-5">
                    <hgroup>
                        <h3 className="mb-3"> <strong>Disclaimer: </strong> </h3>
                    </hgroup>
                    <p> Mutual Fund Investments are subject to market risks. Please read the documents carefully before investing. </p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558429162,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "Don’t Wait for the Election, Start Investing through STP Now and Encash the Opportunity!"
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/e2014d13-991e-4ff7-8e18-a34669ce741e?resourceVersion=id%3A61"
            }
        }
    },
    {
        "type": "node--article", category: 'Mutual-Fund', displayName: 'Mutual Fund',
        "id": "types-of-mutual-fund",
        orderSequence: 7, readingTime: 4,
        "attributes": {
            "status": true,
            "title": "Different Types of Mutual Funds",
            imgLink: '/mf-img-12.png',
            detailImgLink: '/mf-img-lg-12.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-12.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-12.png",
            "created": "2019-05-21T08:46:12+00:00",
            "body": (<article className="blog text-justify ">
                <div className="pb-4">
                    <h2>Introduction</h2>
                    <p>Choosing among the different types of mutual funds is probably the most tedious job you
                      have at hand after you’ve made up your mind to invest in mutual funds. To embark on a
                      journey to financial freedom, one must invest wisely in different types of mutual funds
                      to maintain a diversified portfolio for better returns. Now, there are different types
                      of mutual funds to invest in which can be classified on the basis of risk appetite and
      goals, whether short term or long term.</p>
                </div>
                <div className="pb-4">
                    <h2>How does one decide which type of mutual fund to invest in?</h2>
                    <p>One can choose a mutual fund scheme based on one’s investment duration, objective and
      risk appetite.</p>
                </div>
                <div className="pb-4">
                    <h3>Based on maturity or investment duration!</h3>
                    <p>Depending on its maturity period, a mutual fund scheme can be classified into open-ended
      scheme or close-ended scheme.</p>
                    <h3>Open-ended Fund/ Scheme</h3>
                    <p>As the name suggest, an open-ended fund or scheme is one that is available for
                      subscription and sale on a continuous basis. These schemes do not have a fixed maturity
                      period. Investors can conveniently buy and sell units at Net Asset Value (NAV) which are
      declared on a daily basis. The key feature of open-end schemes is liquidity.</p>
                    <h3>Close-ended Fund/ Scheme</h3>
                    <p>A close-ended fund or scheme has a maturity period that is clearly specified. When the
                      scheme is launched, the fund is open for subscription only during a prescribed period.
                      Thereafter investors can buy or sell the units of the scheme on the stock exchanges as
                      they would do in case of any other listed security. To enable investors to exit, some
                      close-ended funds offer an option of selling back the units to the mutual fund through
      periodic repurchase at NAV related prices.</p>
                </div>
                <div className="pb-4">
                    <h3>Based on objective Receiving Creating a corpus or Regular Income – Growth or Dividend
    </h3>
                    <p>One’s investment objective may also determine the type of fund which one would have to
      shortlist:</p>
                    <h3>Growth Funds</h3>
                    <p>Growth funds usually put a huge portion in shares and growth sectors, suitable for
                      investors who have a surplus of idle money to be distributed in riskier plans (albeit
      with possibly high returns) and can wait over a period of time.</p>
                    <p>This will also require the investment horizon to be longer as volatile markets may cause
                      adverse movement in value of these funds and hence there may not be immediate or steady
      returns.</p>
                    <h3>Dividend Funds</h3>
                    <p>For investors who seek to earn a regular income, dividend funds are best suited. However,
                      there is a difference in the dividends that are offered by stocks and by mutual funds.
                      In the case of stocks, dividends are earnings generated by a company (usually profits)
                      that are distributed amongst shareholders. This is besides the appreciation in share
                      price of a stock. Whereas in the case of a dividend mutual fund, a small chunk of the
                      units or shares of the mutual fund are sold at a price which is higher than the purchase
                      price to earn dividends. The dividend pay-outs can be monthly, quarterly or yearly.
      Depending on the fund, the dividend can also be re-invested.</p>
                </div>
                <div className="pb-4">
                    <h2>Based on Risk Appetite</h2>
                    <p>Risk appetite is also a function of investment goals. A retired citizen who is investing
                      for regular monthly income would have a different risk appetite from someone who is
      investing with horizon of a decade for buying a house.</p>
                    <h3>Index funds mirror an index.</h3>
                    <p>These funds will purchase stocks in the same proportion in which they comprise an index.
                      For instance, if a particular stock forms 2% of an index which is being followed by a
                      mutual fund, the mutual fund will invest 2% of its investible corpus in that particular
                      stock. The performance of an index fund will more or less mimic that of the index which
                      it follows except for a difference that would creep up, known as tracking error.
                      Expenses incurred by an index fund are lower as compared to other types of mutual funds.
    </p>
                    <p><b>Balanced funds are also known as hybrid funds. These are primarily of two types:
        Equity Oriented Funds and Debt Oriented Funds.</b></p>
                    <h3>Equity-oriented funds</h3>
                    <p>Equity-oriented funds invest a mix of equity (at least 65 per cent of the corpus) and
                      debt. These funds offer attractive returns over a longer period of time but returns can
                      be highly volatile in the short term. These funds are suitable for investors who can
      deal with the risk and have a longer investment horizon.</p>
                    <h3>Debt-oriented funds</h3>
                    <p>Debt-oriented funds are low risk funds that primarily invest in highly rated corporate
                      bonds and stable government bonds. They offer steady returns and are suitable for
      conservative investors.</p>
                    <h3>Equity Linked Savings Schemes</h3>
                    <p>Equity Linked Savings Schemes make it possible for investors to claim uptoRs 1.5 lakhs as
                      tax deduction under Section 80C of the Income Tax Act while creating a corpus! However,
                      an investor cannot withdraw money before 3 years as this scheme has a mandatory lock in
      period.</p>
                    <h3>Largecap Funds</h3>
                    <p>Largecap funds invest mostly in big companies. Funds identify these companies by their
                      market capitalisation. These companies are well established and have immense
                      credibility. They are most likely to be among the top names in their respective sector.
                      Although there is no fixed nomenclature, a company whose market cap is more than Rs
                      10,000 crores is considered to be a large cap company in India. Conservative and risk
                      averse investors can start investing in large cap funds. These funds carry less risk and
      offer modest returns.</p>
                    <h3>Midcap funds</h3>
                    <p>Midcap funds invest mostly in medium-sized companies. Their rise and fall, both could
                      occur at a scorching space. But these companies may successfully grow over a period of
                      time and provide handsome returns to investors. Investors with the ability to take
      considerable risks should bet on these funds.</p>
                    <h3>Smallcap funds</h3>
                    <p>Smallcap funds invest in small companies. Investing in these companies over short term
                      could be perilous unless backed by substantial research and credible experience.
                      However, they can also offer phenomenal return over a longer duration of time. They are
      appropriate only for investors with a significantly high-risk appetite.</p>
                    <h3>Sector funds</h3>
                    <p>Sector funds invest only in businesses which are operating in a particular sector. For
                      example, a Pharma themed fund will only invest in Pharmaceutical companies. As
                      investments are directed towards a specific sector or theme, sector funds are considered
                      extremely risky. Timing the entry into and exit from these sectoral funds is imperative
                      as some of these sectors are cyclical. They are meant for investors with deep knowledge
                      about a specific sector. It is advisable for investors to only take marginal positions
      in these funds.</p>
                </div>
                <div className="pb-4">
                    <h2>Conclusion</h2>
                    <p>As the idiosyncrasies of different individuals vary, everyone has a different set of
                      goals to meet. Thankfully, there are ample mutual fund types available to the people
      that cater to their different needs. </p>
                </div>
            </article>
            ),
            "comment": {
                "status": 2,
                "cid": 0,
                "last_comment_timestamp": 1558429258,
                "last_comment_name": null,
                "last_comment_uid": 1,
                "comment_count": 0
            },
            "field_description": "Mutual fund are of many types. But which one is the best for you? Head over where we describe all the mutual fund in detail so you choose the best."
        },
        "links": {
            "self": {
                "href": "http://192.168.93.60/drupal/jsonapi/node/article/5b2d73ec-74e6-49a2-90fe-1f054fa5b706?resourceVersion=id%3A62"
            }
        }
    },
    {
        category: 'Mutual-Fund',
        displayName: 'Mutual Fund',
        "id": "types-of-investment-risk",
        orderSequence: 1,
        readingTime: 4,
        "attributes": {
            "status": true,
            "title": "Types of Investment Risks Associated With Mutual Funds",
            imgLink: '/mf-img-13.png',
            detailImgLink: '/mf-img-lg-13.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-13.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-13.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (
                <article className="blog text-justify ">
                    <div className="pb-4">
                        <h2>Introduction</h2>
                        <p>“Mutual funds are subject to market risk. Please read the offer document carefully before
      investing.”</p>
                        <p>You must have heard the same in umpteenth disclaimers, but are you really aware of the
      different investment risks, posing a threat to your hard-earned money.</p>
                        <p>The statutory warning in the disclaimer is an attempt to wake you up from your slumber
                          that has been keeping you oblivious of the different investment risks you could confront
      while investing in mutual funds.</p>
                        <p>To keep it simple, mutual funds have been classified majorly into three categories i.e.
      equity funds, debt funds, and hybrid funds.</p>
                        <ul>
                            <li>Equity funds are the mutual funds that allocate 80% of their assets in equity while
        allocating 20% in debt &amp; cash. These funds invest in the shares of companies. </li>
                            <li>Debt funds are the mutual funds that allocate 80% of their assets in debt while
        allocating 20% in cash. These funds invest in securities such as bills and FDs.</li>
                            <li> Hybrid funds are the mutual funds that allocate 60% of their assets in equity while
                              allocating 40% in debt. These funds invest in both equity and debt. Hybrid funds are
        a mix of both equity and debt funds.</li>
                        </ul>
                        <p>Now, no matter which mutual fund you invest in, each poses a different investment risk
                          such as volatility risk, performance risk, interest rate sensitivity risk, liquidity
                          risk, and credit risk. Let us now dive deep to understand these risks better which will
      help you tackle different investment risks in an efficient manner.</p>
                    </div>
                    <div className="pb-4 scrollarticle">
                        <h2>Investment Risks Posed by Equity Funds</h2>
                        <p>The following are some investment risks posed by Equity funds:</p>
                        <h3>MANAGEMENT RISK</h3>
                        <p>The fund manager plays an extremely vital role in alleviating the risks entailed by
                          mutual fund investments. Sudden changes in the management team and their approach could
                          affect returns on investments a great deal. Hence, it is a prerequisite to ensure
                          transparency and corporate governance for leading a positive impact on a firm’s share
      price. </p>
                        <h3>VOLATILITY RISK</h3>
                        <p>An equity fund invests at most 80% of their assets in equity and equity related
                          instruments and hence, the performance of an equity fund is directly proportional to the
                          performance of companies. Changes in government, SEBI, and RBI policies can directly
                          impact the value of the stocks of a company either in a positive or negative way.
                          Generally, large-cap mutual funds are less susceptible to volatility in comparison with
                          small-cap and mid-cap mutual funds. A diversified equity fund is comparatively less
      liable to get affected by volatility or sudden changes.</p>
                        <h3>LIQUIDITY RISK</h3>
                        <p>It is a common knowledge that investing in mutual funds for a longer period of time
                          always has higher chances of yielding a profit on investments. But sometimes due to the
                          lock-in period and unavailability of buyers, the liquidity risk increases. Also, you
                          cannot do anything during the lock-in period. So, the best way to prevent liquidity risk
      is by keeping a diversified portfolio and selecting mutual funds wisely.</p>
                    </div>
                    <div className="pb-4">
                        <h2>Investment Risks Posed by Debt Funds</h2>
                        <p>The following are some investment risks posed by debt funds:</p>
                        <h3>INFLATION RISK</h3>
                        <p>Inflation risk is also known as the purchasing power risk. Tools like bonds and money
                          market have a fixed coupon rate. Inflation mitigates the coupon rate earnings that the
                          debt fund is bound to receive. Inflation has detrimental effects on the potential
                          returns of an investor. On the contrary, lower levels of inflation proliferate the value
      of debt fund investments.</p>
                        <h3>INTEREST RATE RISK</h3>
                        <p>The price of a debt fund tool is indirectly proportional to the rate of interest. Bonds
                          are less productive and their values hit rock-bottom when interest rates shoot up and
                          vice versa. The debt funds that have a shorter lock-in period are less susceptible to
      interest rate risk as compared to the debt funds that hit maturity late.</p>
                        <h3>CREDIT RISK</h3>
                        <p>Debt funds allocate funds mostly in government securities, corporate bonds, certificates
                          of deposit (CDs), commercial papers, etc. There are different credit rating agencies
                          such as CRISIL, ICRA, Fitch, and Brickworks, that are responsible for rating debt funds
                          on the basis of their credit value. A higher rated debt fund offers maximum credit
      value, whereas a lower rated debt fund offers the lowest credit value.</p>
                    </div>
                    <div className="pb-4">
                        <h2>Conclusion</h2>
                        <p> Investing in mutual funds can put your money to work and allow you to garner a large
                          amount of wealth in the long run. Hence, diversification and profound knowledge of
                          different investment risks are important and can help you play defense and plan better
      for the future innings of your life. </p>
                    </div>
                </article>

            ),
            "field_description": "Mutual funds have different investment risks associated with them. However, sound knowledge of these risks can help you make vital investing decisions."
        }
    },
    {
        category: 'Mutual-Fund',
        displayName: 'Mutual Fund',
        "id": "introduction-to-balanced-funds",
        orderSequence: 1,
        readingTime: 4,
        "attributes": {
            "status": true,
            "title": "Are balanced funds the right kind of investment for you?",
            imgLink: '/mf-img-14.png',
            detailImgLink: '/mf-img-lg-14.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-14.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-14.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (
                <article className="blog text-justify ">
                    <div className="pb-4">
                        <p>Often, investors find themselves contemplating whether they should opt for equity or debt
                          investments. This is seen particularly with first time investors or those new to the
                          financial markets and investments world. At other times, some investors are just looking
                          to diversify their portfolio for regular re-balancing. That’s where Balanced Funds come
      as an option.</p>
                    </div>
                    <div className="pb-4">
                        <h2>What are balanced funds?</h2>
                        <p>Balanced funds or as they are sometimes called hybrid funds are essentially a
                          combination
                          of debt and equity mutual funds. The allocations are with a proportion in equity and
                          debt instruments. The funds stick to their set ratio for generating income as well
                          as
      capital appreciation.<br />These funds are recommended by many for first time
                                                  investors as
                                                  they cater to those that
      have very little appetite for&nbsp;risk but are seeking capital appreciation.</p>
                    </div>
                    <div className="pb-4">
                        <h2>Why invest in Balanced Funds?</h2>
                        <p>The main gain of investing in these funds is diversification of your investment
                          portfolio. The fund manager re-balances the fund as per requirements and handles the
                          asset allocations. It suits well for investors looking for gains from the stock
                          markets but are not prepared for the volatility in the markets. Experts opine that
                          all kinds of investors should ideally allocate some portion of their investments
      into balanced funds.<br />
                            The appeal also lies in the fact that these funds are more or less insular to sudden
      changes in sentiment, panics, or rapid changing mood in markets.<br />
                            It does not obviously promise the kind of returns one would expect from, say,
                            diversified equity funds, however, for the more conservative and prudent investor,
                            balanced funds are a healthy long term growth prospect with usually a spike free
                            progression graph.
                            Balanced Funds, among other things, also offer the benefit of risk adjusted returns.
                            Hybrid funds are good for people who are looking to invest a small portion of their
                            income on a regular basis. Another major pro for such investors is that it allows
                            one to withdraw systematically meanwhile taking care of the right asset allocations.
    </p>
                    </div>
                    <div className="pb-4">
                        <h2>What are the risks while investing in balanced funds?</h2>
                        <p>As with all mutual funds, they are not completely safe from risk. It’s a common myth
                          among new investors that low volatility translates to risk free investment which is
                          far from realities of investments. These funds carry their own fair share risks .
                          One of the primary factors playing the role here is that the investors doesn’t call
                          the shots on the choice of funds. This decision power lies with the fund manager,
                          rightly so in most cases, as they are professionally trained and experienced to
                          manage such investments unlike many investors who have little to no knowledge about
      it.<br />
                            As an investor, when you hold only a particular class of funds, you can
                            move some of
                            the funds into others as part of a diversification for various purposes like taxes,
                            wealth management etc. On the other hand, you cannot do the same in case of balanced
                            funds as the same mutual fund is the owner of both asset classes—equity and debt.
    </p>
                    </div>
                    <div className="pb-4">
                        <h2>How do I choose the right balanced fund?</h2>
                        <p>It is paramount for an investor to choose a fund that caters to their long-term goals.
                          When
                          you consider choosing the fund among the options in front of you, history doesn’t hold
                          prime
                          position. While making the decision on a balanced fund, an investor must analyse
                          thoroughly
      both the asset classes.</p>
                        <p>Factors like fund house, manager, value of assets, portfolio constancy play a big role
                          while
                          looking at equity class. One should ideally also take into account the risks the fund
                          has
                          taken, the size of the assets, and returns historically along with the track record.
                          At the same time, when one is connecting the dots in the debts funds assessment, areas
                          of
                          focus should ideally be asset quality, profile of the fund manager, their qualifications
                          and
                          records, how sensitive it is to changing rates and how well it caters to your specific
      needs.</p>
                    </div>
                    <div className="pb-4">
                        <h2>Tax implications for balanced funds</h2>
                        <p>In case of balanced funds, those funds oriented more towards equity, typically over 65
                          percent,
                          are classified under equity asset class for taxation. As it stands, short term capital
                          gains
                          entail a tax of 15 per cent. Short terms gains are simply gains with a year of equity
                          oriented
                          balance. After the 12 month period, a long term capital gains (LTCG) tax 10 per cent is
      applicable in case the gains exceed the Re 1 lakh mark.</p>
                        <p>In case of debt oriented balanced funds, LTCG applies when you hold a fund for over three
                          years.
                          Meanwhile, short term gains draw a 20 per cent tax with benefits of indexation. Simply
                          put, in
                          terms out straight tax advantages, equity oriented balanced funds outweigh debt oriented
                          hybrid
      funds.</p>
                    </div>
                </article>

            ),
            "field_description": "Balanced funds also known as hybrid funds are essentially a combination of debt and equity mutual funds. These funds are recommended by many for first time investors."
        }
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "10-reasons-for-senior-citizens-to-buy-health-insurance",
        orderSequence: 22, readingTime: 4,
        "attributes": {
            "status": true,
            "title": "10 Reasons for Senior Citizens to Buy Health Insurance",
            imgLink: '/hi-img-01.png',
            detailImgLink: '/hi-img-lg-01.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>Post retirement life is considered to be full of relaxation, pursuit of hobbies and meeting old friends. However, it is critical that senior citizens not only pay close attention to their health but also the cost of health related expenses. However seniors do tend to exhibit reluctance about buying health insurance. They feel it is not a worthwhile investment and instead would be waste of money.</p>
                    <h2> Here are 10 reasons why it is important for senior citizens to buy health insurance</h2>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h3> Life expectancy is increasing </h3>
                    <p>The rise in life expectancy among Indians has been substantial. From 58 years in 1990 to 68.3 years in 2015, the increase has been remarkable. Over the next few years, this will only keep increasing. However, this trend also brings with it, the importance of having a relatively incident free old age. Over a period of time, one may discover that there is a post retirement life of close to 25 years that lies ahead. The simple fact of probability dictates that this would certainly be filled up few hospital visits on account of accidents or illnesses. Therefore it is imperative that senior citizens don’t view health insurance as an expense and rather look at it as a viable investment of protection.  </p>
                    <h3>Be Independent </h3>
                    <p>Earlier retired parents would feel that their children are completely responsible for their well-being during old age. Joint families were the norm and some or the other family member would be at the beck and call of senior citizens. However times have changed. Proliferation of nuclear families, immigration of children to other cities and countries for better opportunities and general change in culture is resulting in several retired parents living by themselves. And many of them welcome this change too as they prefer their independence. Therefore it makes perfect sense for them to continue being independent by investing in a bulletproof health insurance policy and not depend on anyone else for footing medical expenses.</p>
                    <h3>Don't break nest egg </h3>
                    <p>Senior citizens are most likely to have a nest egg to depend on during their post retirement years. This may be a combination of their savings, provident fund and gratuity. This nest egg enables senior citizens to live independently without worrying about securing their own needs. They can also use this nest egg to purchase gifts for their loved ones. Apart from one’s house, which would be most probably owned by retired seniors, the nest egg is a reflection of one’s dedicated and industrious career. However, a couple of instances of hospitalization can not only cause a huge dent to one’s nest egg but may also obliterate it. </p>
                    <h3>Peace of mind for family members</h3>
                    <p>Family members of seniors who get hospitalized not only worry about their well-being but also turn tensed about impending medical bills. Sometimes this also leads to temporary discords in family relationships. This may result in bickering about which family members has to pay how much to foot medical bills. Owning health insurance brings about substantial peace of mind to both seniors and their family members. </p>
                    <h3>Legacy/Inheritance for family members does not get impacted </h3>
                    <p>Seniors in India prefer their family members to inherit their wealth after passing on. Inheritance could include both real estate as well as financial holdings. In the absence of health insurance, these financial holdings could be wiped out in case of prolonged and multiple hospitalization. A senior may feel immensely let down and may carry the burden or unwanted stress and disappointment in not being able to do anything for the next generation’s aspirations.</p>
                    <h3>Some ailments could be chronic and therefore may need repeated hospitalization </h3>
                    <p>Ailments such as diabetes, lung diseases, hypertension etc are chronic and therefore would require repeated hospitalization. In fact 65% of seniors suffer from chronic ailments. Around 33% suffer from atleast 2 chronic ailments simultaneously.  Even a single visit to a hospital could invite significant expenses. Added to this would be the regular outflow of money towards medicines and regular check-ups which cost Rs 500 and Rs 600 respectively. </p>
                    <h3>Treatment for critical illnesses would be expensive </h3>
                    <p>Average cost of breast cancer treatment has grown from Rs 1.5 lakh in 2000 to Rs 6 lakh as of 2015. For all other types of cancer treatment, rise in treatment costs has inflated by 300% to 400% over 15 years. This also causes immense economic burden as many families are forced to borrow at prohibitive interest rates. In fact, six cycles of chemotherapy can cost as high as Rs 20 lakh. Disturbingly 10 lakh new cases of cancer are reported in India every year as per World Health Organization (WHO). These numbers are alarming</p>
                    <h3>No compromise on the quality of treatment </h3>
                    <p>Our government spends hardly 1.2% of the GDP on healthcare. This can be compared to the Draft National Health Policy 2015 released by the government which advocates spending of at least 2.5% on public healthcare. Low budgets and and lack of transparency lead to shortage of vital equipment, overworked staff and general mismanagement. This keeps most of us away from public hospitals. A leading consulting firm released a report which highlighted the difference in cost between branded and unbranded hospitals. The cost was difference was almost a lakh. Thanks to fine print almost every aspect of the service offered by a hospital, right from the space where one is wheeled to before x-ray to mattresses, is chargeable. In fact, one shouldn’t be surprised about spending at least Rs 40,000 for any procedure in a private hospital. Most families prefer private hospitals as the state of public hospitals in our country is not up to the mark. But this results in higher hospitalization expenses. </p>
                    <h3>Being included in family floater plan makes it expensive </h3>
                    <p>Seniors also end up finding themselves as a part of a family floater plan. Inclusion of senior citizens makes the family floater plan expensive. In fact, including an individual above the age of 45 in a family floater plan isn’t recommended. Chances of a senior suffering from a serious medical ailment is higher and the entire sum insured may get exhausted while offering coverage to just the senior’s medical expenses. The No Claim Bonus clause offered by a family floater plan may also get impacted if the senior requires frequent hospitalization. </p>
                    <h3>Higher Tax Benefit</h3>
                    <p>Who doesn’t love to save taxes? Especially senior citizens who may have to pay tax if they are receiving income through their deposits or pension or both. Some of them may also be employed and therefore would be required to pay tax. However, they can claim additional tax deduction on payment of health insurance premium thanks to a new announcement made in budget 2018. Earlier seniors could only claim up to Rs 30,000 for tax deduction under Section 80D of the Income Tax Act. Now, this amount has been increased to Rs 50,000. Therefore even if health insurance premium seem to be expensive, they offer attractive tax benefits.</p>
                    <p>By purchasing individual health insurance policies for themselves, senior citizens are not only safeguarding their own interests but also ensuring the well-being of their family members. At the outset it may seem expensive to purchase individual health insurance policies as seniors, but even a single bout of hospitalization would make one feel that investing in a comprehensive health insurance policy was certainly worth the while.</p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "Post retirement life is considered to be full of relaxation, pursuit of hobbies and meeting old friends."
        },
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "11-health-insurance-early-age",
        orderSequence: 5, readingTime: 4,
        "attributes": {
            "status": true,
            "title": "11 Important Reasons to Buy Health Insurance at an Early Age",
            imgLink: '/hi-img-02.png',
            detailImgLink: '/hi-img-lg-02.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>The best time to invest in an asset is when it is bound to grow with time, and not when it is shrinking in value. Therefore, the best time to purchase a health insurance for you was yesterday. You should invest in your health while you are still young and healthy. Remember the return on an investment in health insurance will be seen over your entire life and not just the first year you get the cover for. Here are 10 reasons to convince you to buy insurance right away:</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2> Premium is cheaper  </h2>
                    <p>The premium amount that an insurer charges to cover your health expenses depends on your current health status and age. Further, the younger you are, more are the number of premiums the insurer expects you to pay over the duration of your life – and therefore can ask for a lower premium per year compared to someone older. This means you would be paying smaller premiums not just at the start of the policy but throughout the duration of your policy with the insurer. </p>
                    <h3>Waiting period is shorter</h3>
                    <p>Many health insurance policies today have a waiting period at the start of the policy. Only accidents are covered during this period and the actual health cover only kicks in at the end of this waiting period. Further, if you have any pre-existing conditions – they are typically only covered after a waiting period. This waiting period varies from illness to illness and policy to policy. When you start early, the overall waiting period is generally shorter. On top of that, as a health individual you will not have to worry about waiting period for pre-existing conditions at all. You will get the full coverage as soon as the generic waiting period is completed.</p>
                    <h3>No age related upper limit to deal with</h3>
                    <p>Most of the health insurance products have an upper limit on the entry age. This means your options get limited as you grow older. Further, most health insurance schemes provide coverage without conducting a medical examination if the insured is under the age of 40 years – this changes from policy to policy, but to get the most comprehensive coverage at a reasonable price you should purchase health insurance at a young age. </p>
                    <h3>Greater Coverage</h3>
                    <p>As a young person, you will get a greater coverage at the same price when compared to an older person. The reason is simple: the older you are the higher is the chance that you will need to spend on healthcare. This includes expense on day care procedures, treatment for vector borne diseases, other OPD expenses and maternity benefits. </p>
                    <h3>Accumulating no claim bonus</h3>
                    <p>Most insurers provide a no claim bonus for every consecutive year you do not claim your insurance. This bonus varies from 5% to 100% of your sum assured. As a young person, there is little chance that you would file a claim, and therefore you will be able to accumulate a large no claim bonus for use when you truly need the assistance. On the other hand, if you decide to take out an insurance policy only later in life, you may not get the advantage of this bonus – and will have to pay a higher premium for similar coverage.</p>
                    <h3>Several options to choose from</h3>
                    <p>As a young one, you have many more options available when choosing an insurance provider. You can pick and choose the add-on covers that best match your health profile. This becomes more and more difficult as you age as some benefits have a low entry age and others will be refused by the insurer based on any medical history that you may already have. </p>
                    <h3>You are comparatively healthier</h3>
                    <p>As we have pointed out earlier, the best time to buy your health insurance is when you are comparatively healthy. This way you avoid any inconvenience arising from a waiting period, and have to pay a lower premium as you are at low risk when it comes to medical expenditure. With a good policy, you will also get free annual check-ups to proactively work towards keeping yourself healthy and managing your health better.</p>
                    <h3>Lower chances of rejection</h3>
                    <p>When you are younger, the chances of an insurance company rejecting your proposal are almost nil. The chance goes higher with your age and as your medical history builds up. Remember that insurers do not want to cover people who are bound to make a claim before they have paid up enough premiums to justify the claim from a financial standpoint for the insurer. </p>
                    <h3>Life-long renewal</h3>
                    <p>Most policies today offer coverage till the age of 65, there are a few that may go up to 70 years of age. But most senior citizens either have to opt for a specialized senior citizen policy or go without any health coverage. An easy way to avoid this eventuality is to invest in health insurance early – this will allow you to get lifelong renewal from most of the insurers. The extended coverage can prove a boon in the older age, allowing you to enjoy the best available medical facilities when you need them the most.</p>
                    <h3>Absence of pre existing conditions: </h3>
                    <p>As noted earlier, most health insurance policies impose a waiting period before they cover pre-existing conditions. In some cases, the insurer may exclude certain pre-existing conditions from coverage completely. Therefore, it makes sense to get a health cover before you develop any illnesses. This allows for a more comprehensive coverage, and access to better healthcare when needed.</p>
                    <h3>Bursting myths about health insurance</h3>
                    <p>There are many myths about health insurance that you should not fall for when buying health insurance. The most dangerous among them is that you do not need a health insurance if you are young and health. You may be healthy now, but illnesses do not come with a forewarning. You must be prepared for the worst at all times. Another myth is that the health coverage starts from the day you buy an insurance policy and therefore you can buy it when you are more likely to contact an illness. This is untrue as most policies have a built-in waiting period. It follows that the best time to buy insurance is when you are healthy and the waiting period has no impact on your medical expenses. A related myth is that if you have a medical cover, all your healthcare expenses will be paid for by the insurer. This is untrue as most policies have sub-limits on expenses that are covered under different heads. These limits are lower the later you purchase a policy. </p>
                    <p>Lastly, do not buy the cheapest policy. It may not provide you with a comprehensive coverage. Remember that the cost or premium that you will have to pay is just one factor among many that help you decide on the right policy. The most important thing is that your anticipated health expenses are covered and you or your family does not have to run from pillar to post putting together the finances when an emergency strikes.</p>
                    <p>Get a health insurance policy while you are young and enjoy a lifetime of benefits.</p>
                </div>

            </article>
            ),
            "field_description": "The best time to invest in an asset is when it is bound to grow with time, and not when it is shrinking in value. "
        },
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "11-things-to-know-before-buying-health-insurance",
        orderSequence: 10, readingTime: 6,
        "attributes": {
            "status": true,
            "title": "11 Things to Know Before Buying Health Insurance",
            imgLink: '/hi-img-03.png',
            detailImgLink: '/hi-img-lg-03.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>Buying health insurance is among the most important decisions that you will make in your adult life. But sometimes it may feel a bit daunting to pick the right insurance out of the many available in the market. Calculating the correct coverage that you need may feel like advanced calculus - but it need not be. Here are 11 things to keep in mind before buying health insurance that will make the decision simplified.</p>
                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Thumb rule for calculating insurance that you need</h2>
                    <p>Let us start by answering the most obvious question: how much health insurance do you need? Think of it like getting a vaccination: you should get the mandatory ones, and you should get the ones for diseases you may catch when travelling someplace before your trip – rest you can ignore. For example, you don’t that costly vaccine for that rare strain of influenza that is spreading fast in Africa. Similarly, your health insurance should provide sufficient cover for common causes for medical expenditure, but you will have to worry about that rare disease only if you actually catch it. This also means that you should look at your family’s medical history to find out what diseases you are susceptible to – diabetes in the family? Make sure your health insurance covers it.</p>
                    <p>This may feel too daunting. The thumb rule is to use your income as the base to calculate the amount of cover you should get – your health cover should be equal to at least half your annual income. If that seems too low. It should at least be sufficient to pay for a coronary artery bypass in a hospital of your choice.</p>
                    <p>Given the rising inflation, the group insurance cover you get from your employer may not cover all medical expenses to a sufficient degree - like post-hospitalization charges and room rent may have a cap. Therefore, you should consider getting add-on insurances to provide sufficient coverage for all manner of expenses. You should also consider buying a top-up insurance. This will cost you less than a regular insurance as it will have a large cut-off and will kick in only after you have exhausted your primary health insurance cover.</p>
                    <h3>Whether you should buy individual plan or family floater plan</h3>
                    <p>A family floater provides coverage towards the medical expenses of your entire family, so that you do not have to worry about getting individual covers for all members. Remember that not all your family members will need medical attention at the same time – so instead of getting a 5 lakh cover for each member separately, getting a 7 lakh cover for the whole family may suffice. Further, a family floater provides for a larger coverage at lower cost.</p>
                    <p>That said, if some of your family members have a high health risk – for example, if your spouse is a regular smoker – it is better to get an individual cover for them. So, a family floater is best suited for young couples with kids not yet in the workforce. It is best to get an individual insurance for family members with high health risk as they may end up using 100% of the sum-assured leaving other members practically without insurance. </p>

                    <h3>Check for pre-existing illnesses and make a list</h3>
                    <p>A few years back, a friend of mine had applied for a health insurance for her mother. Her mother had no illnesses or disorders at that time, so she left the column for preexisting illnesses empty and declared the absence of such conditions.</p>
                    <p>Unfortunately, her mother was in a road accident about a year later. But the claim filed by her was rejected by the insurer! The reason listed, as you may have guessed, was ‘non-declaration of pre-existing illness’. It turned out that her mother was taking medication for blood pressure when she had applied for the cover. Even though her pressure was normal at that time, any condition that she has previously had treated or diagnosed with or has been treated for is considered pre-existing. </p>
                    <p>
                        To avoid any miscommunication, and subsequent rejection of claim in the hour of need, you should list down your complete medical history and pre-existing illnesses. This list should include the following:
                    </p>
                    <ol>
                        <li>Medical history of illness: History of heart attack, gestational diabetes, etc.</li>
                        <li>Hospitalization history: Hospitalization in case of angioplasty, kidney stone, etc.</li>
                        <li>Signs: Increase in sugar level, obesity, etc.</li>
                        <li>Symptoms: Having brain fog, feeling sweaty, etc.</li>
                        <li>Medication for any disease or illness: Hypertension medication, diabetes medication, etc.</li>
                        <li>Skin disorder: Psoriasis, Vitiligo, etc.</li>
                        <li>Major accidental injury: Head injury, having prosthetic limb, etc.</li>
                        <li>Diagnosed illnesses: Diabetes, hypertension, etc. that you have or had before applying for a policy.</li>
                    </ol>
                    <p>It is unlikely that your application will be rejected due to your medical history. In the most likely scenario, some of your pre-existing conditions will get coverage after a waiting period. In some cases, the insurer may charge a higher premium to cover certain conditions. Nevertheless, it is better than having your claim denied and even being sued for insurance fraud. </p>
                    <h3>Waiting Period</h3>
                    <p>One of the persistent myths about health insurance is that the coverage starts as soon as one purchases a policy. Typically, the policy has a waiting period at the start of the first year of coverage during which only accidents are covered. Further, an additional waiting period may be stipulated for pre-existing conditions and specialized covers like maternity benefits and critical illness cover. </p>
                    <p>Always pay attention to the waiting periods and only buy insurance where you are comfortable with the duration of these. If you feel that the waiting period for some of the illnesses is too long, you can ask the insurer to shorten it but at a substantially higher premium.</p>
                    <h3>Pre/Post Hospitalization expenses should be covered</h3>
                    <p>When one gets ill, hospitalization expenses are just one aspect of the medical expenses incurred. There are also expenses incurred for various tests that may have to be conducted pre-hospitalization, medicine expenses, consultation charges both pre-and post-hospitalization, and other post-hospitalization expenses when you are still recuperating – all these add up to a significant amount. It is important that these expenses are also provided for by your insurer. In most cases, medicine costs can far outweigh the hospitalization charges – and therefore make sure that your policy does not exclude these from coverage.</p>
                    <h3>Maternity benefits</h3>
                    <p>Given the rising average age of women at first pregnancy and the rising caesarian to normal delivery, it is important to get a maternity cover when planning to have a child. Typically, maternity benefits are bought as an add-on to standard health cover. These come with a waiting period ranging from 9 months to 6 years, and therefore it is important to invest in one as soon as possible. While the coverage varies with the insurer and the policy opted for, at the minimum it should cover:</p>
                    <ol>
                        <li>
                            Hospitalization expenses, pre-hospitalization expenses for 30 days and post-hospitalization expenses for 60 days.
                        </li>
                        <li>Delivery expenses</li>
                        <li>Vaccination costs for the new born</li>
                        <li>Ambulance charges </li>
                        <li>Post-natal expenses depending on the type of delivery – caesarian delivery would typically involve higher expenses</li>
                        <li>Health insurance for the new born and</li>
                        <li>Cover for pregnancy related emergencies</li>
                    </ol>
                    <h3>Free medical check up</h3>
                    <p>Prevention is always better than cure, and towards this you should get an annual health checkup. Most insurers cover a preventive check-up during the policy period. Further, claiming this does not impact your no claim bonus. So, make sure your insurance policy has a provision for the same, and don’t forget to take advantage of the same.</p>
                    <h3>Life time renewal</h3>
                    <p>Most health insurance policies stop coverage after the insured reaches the age of 60-65 years. But if you get an insurance cover when young, you can get the added advantage of life time renewal, that is you can keep renewing the cover regardless of your age. This can prove to be a boon given the higher life expectancy and escalating medical expenses as one ages. Therefore, make sure your policy has the clause foe life time renewal; even if you have to pay a slightly higher premium for it – a small investment today will pay back rich dividends over your lifetime.</p>
                    <h3>Cumulative bonus</h3>
                    <p>Most health insurance plans provide a cumulative no claim bonus. This is like a reward for maintaining a good health. The quantum of the bonus varies from 5% to 100% of the sum assured, and typically 4-5 years of no claim result in doubling for the coverage. Make sure that your policy has a provision for the same, and be willing to make small out-of-pocket expenses to allow this bonus to build up over the years.</p>
                    <h3>Claim Process</h3>
                    <p>Before you buy an insurance policy, make sure you understand the claim process well – both for cashless and reimbursement claim. Check the claim settlement ratio of the insurer – that is the percentage of claims submitted that the insurer honors. The higher the CSR, better are the chances that your claim will not be rejected. This is important as the moment of truth for an insurance policy is when the claim is made.</p>
                    <h3>Check whether your preferred hospital is there in the TPA network</h3>
                    <p>Every insurer has a network of hospitals where they provide cashless treatment to the insured. This means that the insured need not spend a single paisa from her pocket as the insurer will directly pay the bills to the hospital. In the time of emergency, you do not want to be rushed across the city just because the network hospital is there. Make sure that sufficient number of hospitals in your locality are part of the network, and the hospital that you prefer getting treatment at is part of the network as well.</p>
                    <p>With these points in mind, you will be able to pick the right health insurance policy from the plethora of options available. Remember that some of the advantages that you get from a health insurance policy get restricted as you age, therefore get a cover as soon as you can. </p>


                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "Post retirement life is considered to be full of relaxation, pursuit of hobbies and meeting old friends."
        },
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "importance-of-critical-illness-plan",
        orderSequence: 20, readingTime: 3,
        "attributes": {
            "status": true,
            "title": "Importance of Critical Illness Plan",
            imgLink: '/hi-img-04.png',
            detailImgLink: '/hi-img-lg-04.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>We have often read or heard about adding a critical illness component in our health insurance plan. Most people wonder whether it makes sense to include this add on in one’s health insurance policy. In this article we will read about its importance and benefits so that one can take an informed decision.</p>
                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>What is a critical illness cover?</h2>
                    <p>Critical illness is a condition that threatens life. The cover which protects against it is known as a critical illness cover. It is also known as dread disease insurance. It is either offered as a rider or as an add-on to one’s health insurance policy or can be purchased as a standalone plan. Experts recommend on purchasing the latter as it would offer several benefits as compared to a rider and is quite comprehensive. Stroke, heart attack, paralysis, cancer, organ transplant, blindness, terminal illnesses are some of the conditions covered by it. However, the complete list of conditions that are covered can vary from insurer to insurer. The cover is paid immediately after diagnosis of a critical illness condition. The sum assured is tax free.</p>
                    <h3>The need for critical illness cover</h3>
                    <p>Let us look at publicly available data. Number of Indians dying due to cardiovascular diseases, lung diseases, cancer, liver diseases and kidney diseases are 24 lakhs, 11.6 lakhs, 5.56 lakhs, 2.16 lakhs and 2 lakhs respectively. The average cost of treatment for the same are Rs 3.5 lakhs, Rs 20 lakhs, Rs 10 lakhs, Rs 18 lakhs and Rs 4 lakhs respectively. Incidents in India due to heart diseases and diabetes are predicted to double and cancer cases are expected to increase by 25%. An open heart surgery in a respected hospital could cost anywhere between Rs 6 lakhs to Rs 8 lakhs.</p>
                    <p>These are massive numbers. An individual suffering from any of these conditions may not only feel tremendous mental stress but one’s family could be affected too. The financial hardships caused due to the spending on treatment could be tremendous.</p>
                    <h3>Benefits of a critical illness plan</h3>
                    <h2>Payment is offered as lumpsum </h2>
                    <p>– Once critical illness is diagnosed, the entire cover is offered as a lumpsum (after the survival period of the same is in force). This is a significant benefit for the holder of the critical illness insurance policy. It plays a vital role in ensuring that both the affected individual as well as his family can only focus on the treatment rather than running around to arrange for financial assistance.</p>
                    <h2>Premiums remain the same </h2>
                    <p>Premium paid for health insurance policies may change over the years depending on your age during the time of policy renewal. However, when it comes to critical illness, the premium remains the same.  This is a massive advantage offered by a critical illness rider.</p>
                    <h2>Peace of mind </h2>
                    <p>When it comes to diagnosis of critical illness, one cannot underestimate the presence of a lumpsum amount that can be immediately dispatched for spending on treatments and other particulars. Once there is peace of mind, the amount of stress and worry reduce considerably. </p>
                    <h2>Finances are not impacted </h2>
                    <p>Spending on treatment of critical illness is a leading cause of financial distress for middle class individuals and their families.  </p>
                    <h2>Don’t need to compromise on the treatment </h2>
                    <p>Due to lack of financial resources, one may be tempted to compromise on the quality of hospital or treatments offered to save money. This could have both short and long term consequences. </p>
                    <h2>Aspirations of family members need not take a backseat</h2>
                    <p>Due to the huge spending on treatment for critical illness, one’s savings could wiped out. One would have wanted to use these savings for fulfilling aspirations of one’s family members such as for higher education or for a holiday or for buying a new house or for marriage. </p>
                    <h3>Keep an eye out for</h3>
                    <p>However, one cannot take critical illness coverage for granted. One also needs to keep an eye for certain important aspects of purchasing a critical illness cover. These include:</p>
                    <h2>Survival period </h2>
                    <p>Some insurers may demand a survival period clause which could be between 30 and more than 30 days. According to this clause, the insured individual would have to survive for the pre-decided period post getting diagnosed with a critical illness. The lumpsum would be released post survival period.</p>
                    <h2>Scrutinize the fine print </h2>
                    <p>Go through the fine print carefully. If you aren’t good with details, make sure that a dependable family member or friend who is adept at spotting the little details, inspects your policy. Understand what the exclusions are. Check whether these exclusions along with your details are in line with what you had expected.</p>
                    <h2>Number of illnesses covered </h2>
                    <p>As written earlier in the article, different insurers may provide coverage for different number of critical illnesses. Therefore before buying, one should check the entire list of critical illnesses covered by an insurer.</p>
                    <h2>Credibility of insurer </h2>
                    <p>– It is also a good idea to ask around and understand what has been the claim settlement ratio offered by the insurer. One can also research about how smooth is the claim settlement process.	</p>
                    <h2>Pre-existing critical illnesses may not be covered </h2>
                    <p>Insurers may end up offering critical illness plans to individuals suffering from pre-existing diseases as long as they aren’t related to the critical illnesses covered by the policy.</p>
                    <h2>Disclose everything </h2>
                    <p>– Insurers have made medical examinations compulsory. Inspite of this, certain individuals may end up withholding medical facts. It is important that complete disclosure about one’s medical history, past ailments and hospitalization is done.</p>
                    <h3>Conclusion</h3>
                    <p>In our country – cases of diabetes, heart diseases and cancer are growing substantially. These diseases are no longer the prerogative of those who are senior in age. In fact, 40% of heart patients in India are between the age of 25 and 35. Therefore it is imperative that all members in a family end up purchasing a critical illness policy with adequate coverage and comprehensive benefits.</p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "We have often read or heard about adding a critical illness component in our health insurance plan. "
        },
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "term-insurance-for-seniors",
        orderSequence: 9, readingTime: 3,
        "attributes": {
            "status": true,
            "title": "Should Seniors Purchase Term Insurance",
            imgLink: '/hi-img-05.png',
            detailImgLink: '/hi-img-lg-05.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>The prevailing wisdom has always been that term insurance is a financial product suitable for those who are in the beginning or middle stages of their careers. As one grows older and closer to retirement, the need for a term insurance policy diminishes. Most insurers also focus on customers between the age of 30 and 50 when it comes to educating about and selling term insurance. </p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2> Offerings for seniors </h2>
                    <p>  However, insurers are recognizing the need to provide seniors with customized products. These term insurance products are for those between the age of 50 and 85. Insurers understand that although it is important to start engaging with young customers, products can also be tailed for an older audience which may even have a robust investible surplus to pay for premiums.</p>
                    <h3> Why would seniors purchase term insurance? </h3>
                    <h2>Liabilities or debt </h2>
                    <p> There could be pending debt or liabilities that an individual may need to pay off and wouldn’t want the burden to be on the shoulders of dependents in the event that the individual passes away. One’s dependents may also have some loans to be settled. In either of these cases, a term insurance policy would come in handy. This is because if the individual passes away during the term, the death benefit could help pay off all the loans. </p>
                    <h2>Still working </h2>
                    <p> One may be a senior citizen but still working. This could be either due to earn additional income to keep financial insecurity at bay or there could be dependents. In certain cases when the income of the individual makes up a significant contribution to his/her family’s income, then the unfortunate demise of such an individual could have a huge impact on the family’s financial well-being as well as future aspirations. </p>
                    <h2>Kids are Dependent </h2>
                    <p> One assumes that senior citizens would most probably have financially independent children. This may not always be the case. One scenario could be that the individual married late and therefore is a parent to a child who is still studying. Another scenario could be either due to personal or professional setbacks, the offspring of the individual is not earning any income and is therefore dependent on the parent for the near future. It is quite possible that the offspring has a child and therefore the individual has to also take care of the grandchild. Another situation could be that the senior is forced to work due to having a large family where in spite of other family members working, the income isn’t enough. Due to such circumstances, the parent would be forced to think about the well-being of his or her offspring.  </p>
                    <h2>Spouse is dependent </h2>
                    <p> Life could land one in a situation where the only other person that matters is the spouse. Either there are no children or relatives or they have moved on. Or the individual and the spouse don’t wish to depend on their children or relatives. In such a case, if the working spouse passes away the dependent spouse will have to depend on a child or relative for a steady source of income. Instead, the working spouse could purchase a term insurance policy and include the spouse as a nominee. </p>
                    <h2>Leave a legacy or inheritance </h2>
                    <p>As one grows older, the need to bequeath a legacy or a healthy inheritance to children or grandchildren beckons. Sometimes, there may not be enough to bequeath or the number of prospective inheritors may be more than accounted for. In such a case, a term insurance policy could also become an instrument that enables one to pass on a robust financial inheritance.   </p>
                    <h2>Setting taxes or legal fees </h2>
                    <p>If you have property to pass on to your dependents, the same might attract property taxes and legal fees if your dependents decide to sell it. These could be either short term or long term capital gain taxes. The death benefit which they would receive could help in paying off these taxes or even legal fees that might be incurred.  </p>
                    <h3> Things to look out for </h3>
                    <p> There are a few important aspects to consider for seniors when they are buying term insurance: </p>
                    <h2>Smoking and non-smoking </h2>
                    <p>Term Cover is available for smokers till they turn 75. The premium that an older person will have to pay for term insurance would be higher if he is a smoker as compared to if he isn’t. Therefore the temptation to hide this fact might be strong. This may have an adverse impact if your insurer finds out later, especially when the claim has been filed. Therefore it is advisable to disclose that one is a smoker.</p>
                    <h2>Make dependents aware about claim process </h2>
                    <p>If the dependent is not financially savvy or isn’t literate, then the process of claiming death benefit could be a tedious one. The financial dependent could be made aware of the same by explaining all the steps in an easy to understand manner. </p>
                    <h3>Conclusion</h3>
                    <p>Purchasing term insurance at an older age includes high premiums, increased number of exclusions, pre-existing illnesses etc. Yet, if it makes sense to purchase term insurance for the well-being of one’s dependents, then one should go ahead and buy a term policy. However, nothing beats the advantage of buying term insurance when one is still young as premiums are cheap and the protection term is high.</p>

                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "The prevailing wisdom has always been that term insurance is a financial product suitable for those who are in the beginning or middle stages of their careers."
        },
    },
    {
        "type": "node--article",
        category: 'Insurance', displayName: 'Insurance',
        "id": "9-reasons-to-buy-health-insurance",
        orderSequence: 15, readingTime: 6,
        "attributes": {
            "status": true,
            "title": "9 Reasons to Buy Health Insurance",
            imgLink: '/hi-img-06.png',
            detailImgLink: '/hi-img-lg-06.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age. Medical emergencies tend to come unannounced, and the chances of one happening have only risen in the last few decades. The medical advances mean that you are far more likely to survive an emergency, but that does not mean it will not leave you burdened with debt – if you are not prepared for it. The best way to prepare for a medical emergency is a health insurance.</p>
                    <p>Still not convinced? Here are 9 reasons for you to buy health insurance right now!</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Medical expenses are constantly increasing  </h2>
                    <p>A 2018 study by Mercer Marsh Benefits found that the medical trend rate – that is the rate at which per capita medical expenses rise – will be double the inflation rate in India. Most experts believe that this relationship will hold for at least a few years to come. It was further noted that the rise in out-patient expenses which much steeper than the hospitalization expenses. An increase in the incidence of non-communicable diseases like heart disease, stroke, cancers, chronic respiratory diseases, Alzheimer’s disease, mental illness, diabetes, and kidney diseases is resulting in a subsequent increase in the employer-sponsored healthcare costs.   </p>
                    <p>This means any savings you had made towards your emergency funds may no more be sufficient even if they have been increasing at the general inflation rate. Having a health insurance can take away the pain of worrying about the rising health costs, as premiums rise at a much lower rate – if you purchase health insurance when young.  </p>
                    <h3> No need to compromise on Medicare quality </h3>
                    <p> Rising medical costs have resulted in a financing gap for people who depend on their own savings to meet medical expenses. This means that they either have to borrow – from informal channels like family or formal channels like banks and money lenders – or have to compromise on Medicare quality. When households have no option but to use public health facilities, it has been observed that they are stuck in a waiting queue, have to deal with low quality care and even have to make under-the-table payments. A health insurance policy is a way to avoid all this and get the best quality healthcare. Further, insurance companies are large buyers of healthcare giving them an ability to negotiate on prices that individuals lack, especially because on an information asymmetry between caregivers and patients.  </p>
                    <h3> Reduces blow to one's finances </h3>
                    <p> According to the latest report from the Public Health Foundation of India, released on June 6, 2018, 55 million Indians were driven into poverty due to out of pocket expenses on healthcare in 2017. To put this in perspective, this is more than the population of countries like South Korea, Spain or Kenya. Out of these, 38 million i.e. 69% were impoverished because of paying on medicine alone. According to 2011-12 figures provided by National Sample Survey, over 80% of Indians make out of pocket payments for healthcare needs – buying a health insurance will ensure that you are not one of them and the likelihood of your other savings and finances being blown away in an emergency are reduced drastically. </p>
                    <h3> Family is protected and offered peace of mind </h3>
                    <p> Remember that when you get sick, it is not just you who is affected. If the medical emergency is such that you have to be hospitalized, you may also be losing income. You family depends on you to meet at least some of their needs. You may be building up some savings for your kid’s higher education, or you may have made investments for your daughter’s wedding – in case of emergency, the family will have to dip into these for funds when you do not have a health cover. A health insurance will ensure your family is protects, some income substitution is provided for and they can deal with the emotional stress without also having to worry about the finances.  </p>
                    <h3>  Tax benefit</h3>
                    <p> The government of India offers tax benefits on the purchase of health insurance to encourage individuals to invest in the same. Under Section 80D of the income tax act, amount that an individual or a Hindu United Family pays to keep an insurance policy in force, i.e. health insurance premium can be deducted from the taxable income. This deduction also includes any amount (up to a maximum of Rs. 5,000) spent on preventive health checkups for yourself, your spouse or children in case of individuals or any member of the HUF.  </p>
                    <p>The deduction allowed for any individual under the age of 60years is Rs. 25,000. For individuals over 60 years, the limit is increased to Rs. 50,000 considering the higher anticipated cost of healthcare. A further deduction is allowed for health insurance premiums paid for your parents’ insurance. The cap on this is Rs. 25,000 for parents under the age of 60 years and Rs. 50,000 for parents over the age of 60 years. </p>
                    <p>The total permitted deduction under section 80D is Rs. 1,00,000 for individuals and Rs. 50,000 for HUF.</p>
                    <h3>  Insurance offered by employer may be inadequate</h3>
                    <p> Many individuals avoid investing in a health insurance as their employer provides a group health cover as well. This may not be a good strategy as the insurance provided by the employer may not be adequate. As a rule of thumb, your health cover should be at least 9 times your monthly income. If the employer health insurance is less than this – you must invest in additional health insurance. Further, pay attention to deductible, co-payment and exclusion clauses in your employer provided insurance – if these feel excessive, opt for additional cover to make sure that you do not have to pay out of pocket. </p>
                    <h3> During a sabbatical from work or in between jobs insurance offered by employer would not be valid </h3>
                    <p>   If you are banking on the health insurance provided by your employer to help you in the time of need, remember that this insurance is only valid till the time you are in employment. This leaves you exposed to a financial risk when one is between jobs or on a sabbatical. You may not be planning to switch jobs, but no job comes with a 100% guarantee – the company may choose to downsize or may even be locked down because of circumstances out of your control. A health crisis at the same time may cripple your family’s finances. It is important to be prepared for all eventualities – and investing in a health insurance is a great way of doing so.</p>
                    <h3> Environment and Lifestyle constantly exposes us to risks </h3>
                    <p>   Increasingly sedentary lifestyle coupled with the deteriorating environment exposes each of us to increased health risks compared to even a few years back. A recent study conducted by the Institute for Health Metrics and Evaluation and the Public Health Foundation of India analyzed 79 health risk factors contributing to loss of health as well as death found that lifestyle diseases have become the top killer in India. High blood pressure, high blood sugar and the pollution in household air are responsible for 7.8%, 5.2% and 4.7% of total health loss in the country. Tobacco smoking of all kinds, alcohol usage, high blood cholesterol and outside air pollution are other major culprits in the deteriorating health profile across India. The latest report from CSE found that more than 61% of all deaths in India can be directly attributed to lifestyle or non-communicable diseases. </p>
                    <p>It has been observed that savings to combat health expenses have generally not kept pace with the higher probability of a health incident. Therefore, it is advisable to buy a health insurance to cover the rising risk.</p>
                    <h3> Rise of critical illness ailment </h3>
                    <p>  Today you are much more likely to get a critical illness then were your parents at your age. That said, the good news is that you are much more likely to survive your brush with such an illness, given the advances made by the medical science. But the fact remains that high cost of such treatment can push one to penury. Doctors around India have sad tales to share of patients who chose to abandon treatment rather than make their families toil in poverty.  </p>
                    <p>Take, for example, cancer that can be linked to over 7% of deaths in India. The cost of treatment can run into many lakhs as a single vial of Herceptin – arguably the most effective drug against breast cancer – costs Rs. 75,000 to Rs. 1,00,000. A patient may need anywhere between 6 to 17 vials during the course of the treatment. Drugs administered to cancer patients cost anywhere in the range of Rs. 25,000 to Rs. 50,000 a cycle and a patient may need 10 cycles per course. This is not all – along with the high treatment costs and hospitalization charges, the family also has to deal with the loss of income. Let us not forget that any loans the patient would have taken will continue to demand their EMIs regardless of the individual’s medical condition. </p>
                    <p>Therefore, it is essential that we are prepared for such eventualities. The best way forward is to invest in a health insurance policy that provides a critical illness cover. Before buying the insurance, make sure to check the list of illnesses covered and ensure that the illnesses you maybe more susceptible to are covered. </p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Personal-Loan', displayName: 'Personal Loan',
        "id": "credit-score-and-importance",
        orderSequence: 4, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "What is a Credit Score and Why is It Important",
            imgLink: '/pl-img-01.png',
            detailImgLink: '/pl-img-lg-01.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>What is a Credit Score?  </h2>
                    <p>A credit score is a three-digit numeric expression for your credit history. A credit score is primarily based on a credit report, information typically sourced from credit bureaus. In India there are 4 credit information companies licensed to operate namely CIBIL, Experian, Equifax, CRIF High Mark. The most popular of all is CIBIL credit score. This score ranges from 300 to 900, with 900 being the best score. Individuals with no credit history will have a score of -1. If the credit history is less than six months, the score will be 0.</p>
                    <h3>Why Credit score is important for Personal Loan?</h3>
                    <p>When applying for a personal loan, credit score is the first thing banks and financial institutions generally check for. Credit score generally depends on the repayments of personal loan, home loans, car loans, credit card bills. If all the repayments are done in a timely manner and no pending dues are left then automatically it will translate into a good Credit score, and would increase over time.</p>
                    <p>
                        Banks and financial institutions generally don’t provide loans to applicants having low credit score or even they do they charge a very high interest rate.
</p>
                    <p>It can also impact your ROI (rate of interest). If you have a good credit score, then you can always bargain with the Bank/Financial institution for the rate of interest on your loan. You could save thousands of rupees in repayments of loan if you have a good credit score.</p>
                    <p>You can also have access to better rewards credit cards with lower interest rates and you might even be offered checking accounts, investment accounts, and credit cards with signing bonuses. Having access to these financial deals may help you better manage your resources in the long run.</p>

                    <h3>What are the factors causing a low Credit Score?</h3>
                    <p>The following are the factors causing a low Credit score:</p>
                    <ul>
                        <li>Untimely re-payments of loans/ credit card bills.</li>
                        <li>High utilization of Credit limits.</li>
                        <li>Multiple rejected credit cards and loans.</li>
                        <li>No credit history at all.</li>
                        <li>Multiple loans at same time.</li>
                        <li>Settling unsecured loans with banks/financial institutions at the lower amount than the dues.</li>
                    </ul>
                    <p>In conclusion your creditworthiness is quite important to the lenders. If you have good credit score you are automatically benefited from it; but if your credit score is low, lenders may question your ability to pay what you owe. Improving your creditworthiness takes time, but it’s worth the effort.</p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Personal-Loan', displayName: 'Personal Loan',
        "id": "tips-to-get-personal-loan-approved",
        orderSequence: 18, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Tips to Get Your Personal Loan Approved.",
            imgLink: '/pl-img-02.png',
            detailImgLink: '/pl-img-lg-02.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>Personal loans are form of unsecured loans I.e. they are not secured against borrower’s assets. They do not require any collateral and are offered with minimal documentation. Interest rates on personal loans vary from financial institutions to financial institutions; but generally, these range between <b>9% to 25% </b>per - annum. This generally depends upon the amount of loan, tenure of the loan, credit score and income of the borrower. Below are the list of points compiles for you to easy approval of your personal loan.</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Meet the eligibility criteria  </h2>
                    <p>It is the first and foremost rule that goes without saying for applying for a personal loan. You should always check for the eligibility criteria of the financial institution you are applying loan from. Generally, borrowers apply for the loan amount they are not eligible for and hence let to rejection of their loan. Hence as a rule of hand before applying for a personal loan just check the eligibility criteria of that financial institution and apply only if you meet every eligibility criterion. Ensure you meet eligibility criteria in every aspect such as documents, income certificates, credit reports, tax returns, etc.</p>
                    <h3>Have a good credit score:</h3>
                    <p>Credit score plays a major role in financial institutions deciding the amount to be lent and interest rate to be charged for the money lent. Also, it also helps them decide whether to approve/reject your loan application. Credit score is generally calculated on various criteria like 35% payment history, 30% amount owed, 15% length of history, 10% new credit, 10% types of credit used. The range for the credit score lies between <b>350 - 900</b>. A good credit score is anything above 700 and there are high chances of rejection of your personal loan application if the score is below 550. Hence it is always suggested to not apply for the personal loan directly, if you have a low credit score, but take time to improve your credit score and and then apply for personal loan.</p>
                    <h3>Don’t apply for new loan while repaying a previous one.</h3>
                    <p>As a rule do not apply for another loan if you already have any loan in your name. Financial institutions generally reject your personal loan application if there is already a loan against your name. This is because financial institutions see this as another burden your financial condition and your inability to repay the second loan. They generally see how feasible it is for you to pay the loan to mitigate their own risk of defaulting the loan.</p>
                    <h3>Be reasonable when deciding your loan amount.</h3>
                    <p>Before providing you the loan financial companies tend to check your ability to repay the loan, they refer to your current income to ascertain your repayment ability. Hence one should not apply outrageously high loan amount as financial institutions would reject your loan application. You should always check with the institution if you would be able to pay the borrowed amount in the stipulated time with the interest rate applicable and then only apply for that amount.</p>
                    <h3>Don’t Send Out Multiple Loan Applications:</h3>
                    <p>Generally, applicants, tend to apply for a personal loan to multiple financial institutions as they think it would improve their chances of approval of the loan. But it is completely opposite, financial companies tend to think that the chances of this applicant taking loan from that institution is quite less. Hence do not apply for multiple financial institutions and just stick to one.</p>
                    <h3>Conclusion</h3>
                    <p>In conclusion to the above points your loan application should be self-explanatory and should have all the check boxes ticked as required by these financial institutions. Following these steps would increase your chances of personal loan approval manifold times. Apply to Financial Institutions patiently, and, look for a deal with a low-interest rate.</p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Personal-Loan', displayName: 'Personal Loan',
        "id": "7-rules-for-personal-loan",
        orderSequence: 1, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "7 Rules to Follow When Taking a Personal Loan",
            imgLink: '/pl-img-03.png',
            detailImgLink: '/pl-img-lg-03.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>Whether you are planning to renovate your house, or buy a new car, or paying for your education or dealing with any emergencies personal loan comes in very handy. There are many lenders that would lend you money, it has become quite easy and simple, thanks to the internet. But there are few rules which you should always consider before getting a money loan.</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Follow these 7 rules when taking a personal loan.  </h2>
                    <ol>
                        <li>
                            <strong>Figure the interest rate</strong>
                            <p>The first step in selecting a personal loan is to figure the interest rate. Different banks/financial institutions offer different interest rates as per your loan amount, credit score and duration. This is the key element while selecting a personal loan.</p>
                        </li>
                        <li>
                            <strong>Say no to advance EMI’s</strong>
                            <p>Never pay advance EMI’s even if some banks/financial institutions as you to pay for it as you may end up paying more interest rate in such cases. You may pay the loan amount earlier (pre-payment) than the stipulated time. Some banks charge pre-payment charges, but it is often informed earlier.</p>
                        </li>
                        <li>
                            <strong>Keep the tenure short</strong>
                            <p>Opting for more tenure for s short loan may sound quite tempting, as you must pay lower EMIS’s, but you end up paying more money in form of interests. On the other hand, opting for shorter tenure, you pay higher EMI’s for shorter period; but also lower the Interest rates. Hence always opt for shorter tenure. </p>
                        </li>
                        <li>
                            <strong>Repay on Time</strong>
                            <p>Always pay your loan amount/EMI’s on time as not paying the loan amount on time will levy penalties on your amount, also would affect your Credit score as well. This might hence lead problems while taking the next personal loan or credit card.</p>
                        </li>
                        <li>
                            <strong>Don’t approach to many lenders</strong>
                            <p>It might lead to negative impacts if you approach too many lenders to compare interest rates. When you apply with too many lenders you may come as a credit hungry person, because every time you apply with many lenders, they study your history/profile. Avoid such situations and apply with only 1-2 lenders.</p>
                        </li>
                        <li>
                            <strong>Check for any other charges</strong>
                            <p>Usually there are no other charges levied on your personal loan other than the processing fees but is always advisable to read the terms and conditions thoroughly before opting for the personal loan to prevent yourself from later disappointment.</p>
                        </li>
                        <li>
                            <strong>Don’t take money loan for investment</strong>
                            <p>Even though small loans come with lower interest rates, this money should not be used for investment purposes. Money is invested with the idea of making your money work and not to pay the interests. Hence it is highly advisable to not invest your loan amount.</p>
                            <p>So, once you have known all these 7 steps to apply for personal loan, you can save yourself from any more difficulties and stress while opting for a personal loan. Hoping to have a hassle-free service while applying for a personal loan.</p>
                        </li>
                    </ol>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Personal-Loan', displayName: 'Personal Loan',
        "id": "common-reasons-for-personal-loan-rejection",
        orderSequence: 14, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Some Common Reasons for Your Personal Loan Application Rejection",
            imgLink: '/pl-img-04.png',
            detailImgLink: '/pl-img-lg-04.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>The need of personal loan has increased in today’s world and it would not be wrong to say that a personal loan acts as a saviour in case of monetary exigencies. Now, it may come as a big shock and disappointment when the lender rejects your loan application for some reasons. This article focuses on some of the major reasons why your personal loan application gets rejected.</p>
                    <p>If we have a closer look at the reports, we notice that it is not always possible that you get your personal loan application approved all the time from the lender. The best defence against personal loan rejection is to know what it takes to be approved by a lender.</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <ol>
                        <li>
                            <strong>Credit Score</strong>
                            <p>Your credit score is one of the main factors for determining whether your loan will be approved or not. Despite being it, such an important factor applicant does not take credit score quite seriously. Not every lender requires excellent credit, but one should always maintain a good credit score in order to avoid any problems later. If you’re unsure about your credit score or credit history, you can always check it our credit score checker or you may directly ask the lender.</p>
                        </li>
                        <li>
                            <strong>Low Income</strong>
                            <p>Many lenders have a minimum income requirement while looking into a personal loan application. This may not be listed in the eligibility criteria or their website, but lenders generally investigate the income statement of the applicants. As your monthly income helps them in gauging your loan re-payment capability. If the loan re-payment EMI is monthly salary, then it is highly unlikely applicant will be able to re-pay the loan on time.</p>
                        </li>
                        <li>
                            <strong>Job Stability</strong>
                            <p>Lenders are quite meticulous about the stability of your job. Several lenders insist on having stable job or at least a regular source of income for approving a personal loan. Also, if the lender feels the company’s future is at stake or seems unstable then they may reject your personal loan application.</p>
                        </li>
                    </ol>
                    <h3>Bottom line</h3>
                    <p>There’s no way to completely guarantee that your personal loan application will be approved. Even if you meet all the eligibility criteria listed by a lender, the lender can still reject your application at its discretion.</p>
                    <p>However, you can avoid common mistakes that lead to personal loan application rejection and follow the tips we’ve discussed to improve your chances of approval. You can also compare your personal loan options to find more lenders you may be eligible for.</p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Personal-Loan', displayName: 'Personal Loan',
        "id": "personal-loan-vs-credit-card",
        orderSequence: 6, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Personal Loans vs Credit Cards: What’s the Difference",
            imgLink: '/pl-img-05.png',
            detailImgLink: '/pl-img-lg-05.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>We need money for various reasons - to buy a house, for child’s marriage, to buy durables, for medical emergencies. Money is all required for any kind of emergencies. There are multiple ways to borrow money and different rate of interests. Two of the major form of moneylenders are Personal Loans and Credit cards. Here we will explore between the two and discuss some of the advantages and disadvantages and help you chose the best option for you. Though the answer depends on what you’re buying and how you intend to pay it back.</p>

                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Pros and cons of a personal loan </h2>
                    <h3>Pros:</h3>
                    <ul>
                        <li>
                            Lower interest rates than credit cards.
                        </li>
                        <li>Repayment schedule means your debt comes with an end date.</li>
                        <li>Can be cheaper in the long term.</li>
                        <li>No temptation to overspend.</li>
                    </ul>
                    <h3>Cons:</h3>
                    <ul>
                        <li>
                            Minimum loan term means that you’ll carry the debt for more than a year
                        </li>
                        <li>Can be inflexible (may not offer early repayments)</li>
                        <li>Can take longer to apply for</li>
                    </ul>
                    <h2>Suitable for:</h2>
                    <ul>
                        <li>
                            Large one-off purchases like cars or home improvement
                        </li>
                        <li>Large debt consolidations</li>
                        <li>Borrowing over a long period of time</li>
                    </ul>

                    <h3>Pros and cons of a credit card </h3>
                    <h2>Pros:</h2>
                    <ul>
                        <li>
                            Immediate spending
                        </li>
                        <li>Can come with rewards</li>
                        <li>Convenient option if you need a constant cash flow</li>
                        <li>Balance transfer for debt consolidation</li>
                        <li>Interest-free grace period</li>
                    </ul>
                    <h2>Cons:</h2>
                    <ul><li>
                        Usually carry higher interest rates
                        </li>
                        <li>Only requires a minimum repayment each statement period, which means your debt can accrue interest indefinitely</li>
                    </ul>
                    <h3>Suitable for:</h3>
                    <ul>
                        <li>Smaller purchases</li>
                        <li>Small debt consolidations</li>
                        <li>Everyday shopping or retail purchases to earn reward points</li>
                        <li>Spending amounts that you can be paid back within the interest-free introductory period</li>
                    </ul>
                    <br />
                    <h3>Which one is right for you?</h3>
                    <ol>
                        <li>
                            <h2>What do you need funds for?</h2>
                            <p>If you’re looking for one-off payments for large expenses then opt for personal loan, but if you want a regular access to credit then go for a credit card.</p>
                        </li>
                        <li>
                            <h2>How do you manage your repayments?</h2>
                            <p>Since credit cards are ongoing form of credits and personal loan have limited credit and come with an end date. Since there is no problem with the type of credit then you should look for hoe structured and and disciplined are you with your repayments. Since there are more structured payments structure for personal loan, then maybe it is worth considering.</p>
                        </li>
                        <li>
                            <h2>Are you consolidating debt?</h2>
                            <p>It is always important to consider your options carefully. How much debt you have and how much you are willing to accumulate, and does it include loan and credit card accounts. You also have the option of consolidating your credit card to a personal loan, which can help you save.</p>
                        </li>
                        <li>
                            <h2>How much are you looking to borrow?</h2>
                            <p>Both credit and personal loans have different limits, depending upon your credit score. Generally personal loans have more limit than credit card.</p>
                        </li>
                    </ol>
                    <br />
                    <h3>Bottom line</h3>
                    <p>
                        Personal loans and credit cards are two forms of borrowing that both offer attractive benefits and some notable drawbacks. Which you choose is ultimately up to you, and many people have used both at different points for different purposes. Be sure to compare your options to make an informed decision.
                    </p>
                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "As the popular adage goes “Health is Wealth”. To protect this wealth, it is important to start investing in it at an early age."
        },
    },
    {
        "type": "node--article",
        category: 'Credit-Card', displayName: 'Credit Card',
        "id": "what-is-credit-card-and-how-it-works",
        orderSequence: 21, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Know, What Is Credit Card and How It Works",
            imgLink: '/cc-img-01.png',
            detailImgLink: '/cc-img-lg-01.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>An Introduction to credit card</h2>
                    <p>A credit card comes in the form of plastic card which lets you access your credit limit through an ATM machine. A credit limit is assigned to you by your bank as per your spending capacity. A credit limit is like a loan. However instead of giving you the whole loan in one go, banks allows you to use your limit as per your need.</p>
                    <h3>How Do Credit Cards Work</h3>
                    <p>There is a whole process behind a credit card transaction. When you make a purchase using your credit card, the merchant's credit card terminal makes a query to your credit card provider, if the card is valid and if it have the required spending limit remaining, answering the query your credit card provider response the merchant’s credit card terminal, if the transaction is approved or not. </p>
                    <p>At every spend you make by your credit card, your credit limit goes down by that particular amount. For example- if you have a credit limit of Rs. 50,000 and you have spent Rs.10,000 on a product, your credit limit will reduce to Rs. 40,000 and you’ll owe Rs. 10,000 to bank as an outstanding balance which you need to pay at the end of your billing cycle.</p>
                    <p>The basic difference between a credit card and a personal loan is that your credit limit will be available again onec you pay the outstanding balance due on your card. In the example mentioned above., if you paid back the Rs.10,000 that you owed, you'd have Rs. 50,000 of available credit again.</p>
                    <p>The Major difference between a credit card and a loan is that you can use the credit limit of the card in packets as per your requirement and also n times by paying off your outstanding balance, where as in loan, bank offers you a certain amount in one go, which you can use only once.</p>
                    <h3>What are late payment charges?</h3>
                    <p>There is a certain period of time before the interest charged on your credit card out standing balance. This time is called the grace period, this period varies as per the bank. Usually it is of 20 to 25 days. If you do not pay your credit card outstanding amount within the grace period, then a particular interest is charged on the amount due on your credit card.</p>
                    <p>The interest rate is the annual rate you pay for using your credit limit. Interest rates depends on few factors like market interest rates, your credit history, and the credit card you own. If you have a good history of paying back your credit card bills then you’ll be charged lower interest rate.</p>
                    <p>If you want to avoid interest you have to pay your credit card bill before the grace period get over, though the credit card providers do not want you pay the whole outstanding balance in one go, you can also pay the minimum amount against your credit card bill. Paying only the minimum is the slowest and most expensive way to pay off your credit card balance.</p>
                    <p>It is most important to pay at least minimum amount of your credit card bill in order to maintain a good credit score and to avoid late payment charges. </p>

                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "Many of us are known to credit cards even before using it. It is always fascinating to see someone using their credit card to buy a product and walking away without paying any cash. This technology behind credit card appears to be very impressive but its not a magic, you always need to pay for what to purchase, but a bit later with credit cards."
        },
    },
    {
        "type": "node--article",
        category: 'Credit-Card', displayName: 'Credit Card',
        "id": "credit-card-and-its-types",
        orderSequence: 17, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "Credit Card and Its Types",
            imgLink: '/cc-img-02.png',
            detailImgLink: '/cc-img-lg-02.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>A credit card comes in the form of plastic card which lets you access your credit limit through an ATM machine. A credit limit is assigned to you by your bank as per your spending capacity. A credit limit is like a loan. However instead of giving you the whole loan in one go, banks allows you to use your limit as per your need.</p>

                    <h2>Types of Credit Card </h2>
                    <p>There are enormous number of credit cards in the markets provided by number of credit card providers. The most essential thing before buying a credit card is analyzing your needs as there are many types of credit cards in the market ranging from basic everyday spends cards to premium cards which comes with lot of perks and rewards. Let’s discuss few credit card types.</p>
                    <h3>Rewards Credit Cards</h3>
                    <p>There cards are self introductory by their names. Rewards credit cards comes with number of rewards which are given to a customer on his each purchase. Rewards are also categorized further. Usually there are three types of rewards credit card:-</p>
                    <ul>
                        <li>Cashback rewards</li>
                        <li>Travel rewards</li>
                        <li>Points</li>
                    </ul>
                    <h3>Cashback Rewards Card</h3>
                    <p>Cashback Rewards credit card simply offers cashbacks on the purchases made by a customer using a cashback credit card. However, every card have some exclusions on which the cashback offers do not apply.</p>
                    <h3>Travel Rewards Card</h3>
                    <p>Travel rewards credit card usually offer rewards such as discounts, travel vouchers etc on doing travel bookings.</p>
                    <h3>Reward points credit cards</h3>
                    <p>Reward points are those credit cards which add some points in your accounts and offer rewards inreturn of particular amount of points. However every reward points credit card have certain exclusions.</p>
                    <h3>Fuel Credit cards</h3>
                    <p>Fuel credit cards are those one which offers rewards and discounts during fuel purchase. Cashback is one of the most common reward offered by fuel credit cards. Fuel credit cards also offer fuel surcharge waiver and accelerated reward points on fuel purchase which can be exchanged for both rewards and fuel purchases.</p>
                    <h3>Lifestyle Credit Card</h3>
                    <p>Lifestyle credit cards are one of the most popular credit cards in India. The name is self explanatory, these cards work to enhance the customer’s lifestyle choices of food, dining, shopping, and so on. Lifestyle usually provides number of offers that cater the lifestyle needs of the customer.</p>
                    <h3>Secured Credit Cards</h3>
                    <p>People who don’t have a credit history or people who have low credit score go for secured cards. Secured cards require a particular security amount need to be deposited. The credit limit on a secured credit card is typically equal to the amount of the deposit made on the card.</p>

                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "This blog takes you through various types of credit cards offered by credit card providers in the market."
        },
    },
    {
        "type": "node--article",
        category: 'Credit-Card', displayName: 'Credit Card',
        "id": "forgot-credit-card-bill-due-date",
        orderSequence: 3, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "What to Do When You Forget Your Credit Card Bill Due Date",
            imgLink: '/cc-img-03.png',
            detailImgLink: '/cc-img-lg-03.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>It happens with mostly all of us that we miss some important dates in day to day life. Similarly if you find out that your credit card bill due date was 1st of the month and it is already 3rd. Or you just checked that a late fee has been assessed in your credit card statement for a payment that you made late. This usually happen with many of us. So, if we act quickly then this damage can be controlled.</p>
                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Make the Payment Quickly</h2>
                    <p>If you missed a credit card payment due date you should make the payment as soon as possible. If you’ll pay the payment quickly after missing your due date then it will prevent the credit card provider to report your late payment to the credit bureaus,which can lower down your credit score. Credit card providers usually report a late payment after atleast 30 days. So you need to make sure that you payment before it becomes 30-40 days late.</p>
                    <h3>Request Credit Card Provider for Leniency</h3>
                    <p>Firstly you should check your account if a late fee has been applied,some card issuers impose a late fee immediately after the due date. Many providers are not very strict in keeping the late fee charges intact unless and until you are habitual of payment the credit card. Sometimes banks refuse to ignore the late payment charges. take it as a lesson learned, pay the fee, and send your payment on time for future payments.</p>
                    <h3>Can You Protect Your Interest Rate</h3>
                    <p>Credit Card Providers can’t impose a penalty rate increase unless you’re at least 60 days delinquent on your payment  and unless you have a promotional rate. The bad news, however, is that missing a payment (despite the reason or degree of lateness) could cause you to forfeit any promotional rate. A credit card provider who’s willing to waive a late fee might not be as lenient when it comes to your promotional rate.</p>
                    <h3>Remember When Your Bills Are Due</h3>
                    <p>If you have missed your the due date of your credit card bill once or twice then there is not much to worry, but if you are missing it every month then you should develop a system of reminders. For example marking all your important dates of the month on a calender or setting up a reminder on your phone.You can set up reminders in your email or calendaring system. Or if you are a frequent credit card user you can also set up an automatic payment through your bank’s online bill pay to avoid missed payments. </p>

                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "To maintain a good credit score it is very important to pay all your credit card bills on time. This blog will tell about what happens when you miss your due date and how to avoid late payment of credit card."
        },
    },
    {
        "type": "node--article",
        category: 'Credit-Card', displayName: 'Credit Card',
        "id": "credit-card-approval-likeliness",
        orderSequence: 13, readingTime: 2,
        "attributes": {
            "status": true,
            "title": "How Likely You’ll Get Your Credit Card Approved",
            imgLink: '/cc-img-04.png',
            detailImgLink: '/cc-img-lg-04.png',
            picture: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-img-02.png",
            banner: "https://onebajaj.capital/mutual-fund/resources/images/blog-img/mf-banner-02.png",
            "created": "2019-05-09T08:38:51+00:00",
            "body": (<article className="blog text-justify ">
                <div id="alpha" className="pb-4 scrollarticle">
                    <p>On the whole the approval rate of credit cards is less than 50%. Credit card approval depends on certain factors like your credit score which is the most Important factor, then your annual income and also the city in which you are living in.</p>
                    <p>As there are different type of credit card users, there are different types of credit cards as well in the market. There are travel cards, rewards cards, lifestyle cards and many more. Each card is curated as per different needs of the customers. Credit cards providers analyses credit history of the customer to determine the eligibility of a customer and the credit limit of the card. It is also used by other money lenders or utility companies to determine your financial capacity of paying bills or repayment of loans. Credit score or history also helps in determining the chances of the approval of your credit card.</p>
                    <span> </span>
                </div>
                <div id="alpha" className="pb-4 scrollarticle">
                    <h2>Few tips to consider when applying for a credit card. </h2>
                    <ol>
                        <li>Be Calm and do not make any decision in hurry</li>
                        <li>Analyse your previous credits in your credit report</li>
                        <li>Regulate and minimize your debt</li>
                        <li>Fetch your credit score</li>
                        <li>Declare all your income</li>
                        <li>Finalize a right card as per your needs</li>
                    </ol>
                    <h3>Be Calm and do not make any decision in hurry</h3>
                    <p>Buying a credit card is a process which needs a bit of research, you have to be calm and make sure that you don’t take any decision in hurry. First of all, analysing your needs is imperative, then choosing the right card is the second step.</p>
                    <h3>Analyse your previous credits in your credit report</h3>
                    <p>Before adding another credit source, it is important to analyse all your previously running credits such as credit card, any sort of loan etc. You can request a copy of your credit history from any of the credit reporting companies. Carefully analyse your credit history if you want to apply for a new credit card. Credit card companies, if you have other debt, will look at factors such as:
                        <ul>
                            <li>Late payments</li>
                            <li>Number of accounts you have</li>
                            <li>Any derogatory marks</li>
                            <li>The average age of your open accounts</li>
                            <li>If any hard credit inquiries</li>
                            <li>Previous Credit card utilization</li>
                        </ul>
                    </p>
                    <h3>Regulate and minimize your debt</h3>
                    <p>Minimum debts increase the chances of approval of the credit card. It is always important to pay your debts before applying a credit card so that credit history looks good. You can also minimize the short-term debts paying it before its due date.</p>
                    <h3>Fetch your credit score</h3>
                    <p>Credit score is one of the most important factors in determining your eligibility for applying a credit card. Every credit card provider in Indian market expects a good credit score from its customer before lending them any loan or credit card. Credit score more than 700 is appropriate for applying a credit card. You can check your credit score through various online platforms.</p>
                    <h3>Declare all your income</h3>
                    <p>Like credit score, annual income is also one of the most important factor while determining your eligibility for a credit card. All credit card providers ask your annual income to determine your financial capacity of repaying the credits. You can declare your all sources of income provided you have necessary documentation to prove it.</p>
                    <h3>Finalize a right card as per your needs</h3>
                    <p>It is always necessary to analyse your needs and your purpose of buying a credit card. For example, if you are a frequent traveller, you should opt for a travel credit card. You should determine your purpose and then select an appropriate card. After selecting the next step is checking your eligibility before applying for credit card.</p>
                    <p>If a credit card provider declines your application for a credit card, you should determine the reason of disapproval and work around it.</p>

                    <span> </span>
                </div>

            </article>
            ),
            "field_description": "In India, we have multiple type of credit card users, some are seasonal or some are frequent. Irrespective of your usage, it is imperative to analyse your needs and choose a card carefully. After choosing the card the next most important step is to determine that how likely you’ll get your chosen credit card approved."
        },
    },
];


export default blogs.sort((a, b) => (a.orderSequence - b.orderSequence));;