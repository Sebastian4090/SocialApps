import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {

    const [socials, setSocials] = useState([]);
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)
    
    useEffect(()=> {
        fetch('https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials')
        .then(response => response.json())
        .then(sites => {setSocials(sites)});
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredSocials = socials.filter(site =>{
        return site.domain.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !socials.length ? <h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>SocialApps</h1>
                <button onClick={()=>setCount(count+1)}></button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList socials={filteredSocials}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    
        

export default App;