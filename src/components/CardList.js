import React from 'react';
import Card from './Card';



const CardList = ({ socials }) =>{
    console.log('cardlist!')

    return (
        <div>
            {socials.map((site, i) => {
            return (
            <Card 
            key={socials[i].id} 
            name={socials[i].name} 
            domain={socials[i].domain} 
            link={socials[i].link}
            />
            );
        })
        }      
        </div>
    );
}

export default CardList;