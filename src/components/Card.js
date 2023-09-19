import React from 'react';

const Card = ({name, domain, link}) => {
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='social' src={`https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_${name}_svg-256.png`}/>
            <div>
                <h2>{domain}</h2>
                <p>{link}</p>
            </div>
        </div>
    );
}

export default Card;
//-light-green