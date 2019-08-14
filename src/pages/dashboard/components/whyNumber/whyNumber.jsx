import React, { useState } from 'react';
import TrackVisibilty from 'react-on-screen';

const TrackComponent = ({ isVisible }) => {
    const isAnimationDone = sessionStorage.getItem('isAnimationDone');
    const [investors, setInvestors] = useState(0);
    const [assets, setAssets] = useState(0);
    const [experience, setExperience] = useState(0);

    if (!isVisible || isAnimationDone) {
        return (
            <section className="whybajaj whynumbercontainer pt115">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h5>Your Trusted Financial Partner</h5>
                            <p>People choose Bajaj Capital because we simplify your life by providing a hassle-free financial services solution that is data-driven, expert-approved and performs better than your expectations.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pt40">
                        <div className="col-md-4 col-sm-4 whynumber pad-left">
                            <h5> <span className="count">39</span> Lakh</h5>
                            Investors </div>
                        <div className="col-md-4  col-sm-4 whynumber">
                            <h5>₹ <span className="count">26</span>,200 Cr</h5>
                            Assets under Advisory </div>
                        <div className="col-md-4  col-sm-4 whynumber">
                            <h5> <span className="count">54</span> Years</h5>
                            of Experience </div>
                    </div>
                </div>
            </section>
        )
    }

    const countUp = () => {
        if (investors < 39) {
            setTimeout(() => {
                setInvestors(investors + 1);
            }, 30)
        }
        if (assets < 26) {
            setTimeout(() => {
                setAssets(assets + 1);
            }, 50)
        }
        if (experience < 54) {
            setTimeout(() => {
                setExperience(experience + 1);
            }, 20)
        }
        if((investors === 39) && (assets === 26) && (experience === 54) && !isAnimationDone){
            sessionStorage.setItem('isAnimationDone', true);
        }
    }
    if (isVisible) {
        countUp();
    }
    return (
        <section className="whybajaj whynumbercontainer pt115">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h5>Your Trusted Financial Partner</h5>
                        <p>People choose Bajaj Capital because we simplify your life by providing a hassle-free financial services solution that is data-driven, expert-approved and performs better than your expectations.</p>
                    </div>
                </div>
                <div className="row justify-content-center pt40">
                    <div className="col-md-4 col-sm-4 whynumber pad-left">
                        <h5> <span className="count">{investors}</span> Lakh</h5>
                        Investors </div>
                    <div className="col-md-4 col-sm-4 whynumber">
                        <h5>₹ <span className="count">{assets}</span>,200 Cr</h5>
                        Assets under Advisory </div>
                    <div className="col-md-4  col-sm-4 whynumber">
                        <h5> <span className="count">{experience}</span> Years</h5>
                        of Experience </div>
                </div>
            </div>
        </section>
    )

}


export default () => {
    return (
        <TrackVisibilty>
            <TrackComponent />
        </TrackVisibilty>
    )
}
