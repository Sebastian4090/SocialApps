import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

import './style/MainPage.css';


const MainPage = ({ socials, text , onSearchChange}) => {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        let filteredSocials = socials.filter(social => {
            return(
                social.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredSocials);
    }, [text, socials])

    const newSocial = searchResults;

    return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        {
                            text === "" ? <CardList socials={socials}/> : <CardList socials={newSocial}/>
                        }
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    
        

export default MainPage;