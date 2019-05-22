import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <section className="whybajaj bgyellow pt80 pb80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 sec-heading text-center">
                        <h2> Why People Choose Bajaj Capital</h2>
                        Besides providing lipsum in exotic charsets and languages, we provide Japanese lipsum with an adequate
                        ratio of kanji, kana, hiragana, and rōmaji. Japanese .
          </div>
                    <div className="col-lg-4">
                        <Link to="/branch-locator">
                            <h4>Dedicated Wealth
                Counsellor</h4>
                            Certified and experienced personal wealth managers, Lipsum is a lorem ipsum text generation library. Use this if you need some filler text for your application. The text is generated using a simple Markov chain,
            </Link>
                    </div>
                    <div className="col-lg-4">
                        <a href="/">
                            <h4>Check Credit Score
                &amp; Analytics</h4>
                            Get your FREE credit score and track all your loans and credit cards  Lipsum is a lorem ipsum text generation library. Use this if you need some filler text for your application. The text is generated using a simple Markov chain,
            </a>
                    </div>
                    <div className="col-lg-4">
                        <a href="/">
                            <h4>Goal Based Portfolio
                Suggestion</h4>
                            Track all you past investments for FREE : Good or bad with hold, balance or sell calls.
                            Lipsum is a lorem ipsum text generation library. Use this if you need some filler text for your application. The text is generated .
            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}