import React from "react";

import FeaturesList from "../FeaturesList";

function FeatureCard(props)
{
    return (
        <div className="Feature-Card">
            <img className="Feature-Card-Image" src={props.source} alt={props.alt}></img>
            <p className="Feature-Card-Details">{props.featureDetail}</p>
        </div>
    );
}

function Features(){
    return(
        <div  className='Features-Main'>
            <h1 className="heading-Features">Features</h1>
            <div className="Feature-Card-Box">
                <FeatureCard
                source={FeaturesList[0].src}
                alt={FeaturesList[0].alt}
                featureDetail={FeaturesList[0].featureDetail}
                />
                <FeatureCard
                source={FeaturesList[1].src}
                alt={FeaturesList[1].alt}
                featureDetail={FeaturesList[1].featureDetail}
                />
                <FeatureCard
                source={FeaturesList[2].src}
                alt={FeaturesList[2].alt}
                featureDetail={FeaturesList[2].featureDetail}
                />
            </div>

        </div>
    );
}

export default Features;