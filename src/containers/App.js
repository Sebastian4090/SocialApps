import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


function App(props) {

    const [socials, setSocials] = useState([]);
    // const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        let sitesArray = [];
        const urls = ['https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials',
                      'https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials2'];
        
        Promise.all(urls.map(link => {
            return fetch(link).then(response => response.json());
        })).then(sites => {
            for (let i=0;i<sites[0].length;i++) {
                sitesArray.push(sites[0][i])
            }
            for (let i=0;i<sites[1].length;i++) {
                sitesArray.push(sites[1][i])
            }

            setSocials(sitesArray);
        })

    }, []);

    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value)
    // }

    const { searchField, onSearchChange } = props; 

    const filteredSocials = socials.filter(site =>{
        return site.domain.toLowerCase().includes(searchField.toLowerCase());
    })
    return !socials.length ? <h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>SocialApps</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList socials={filteredSocials}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    
        

export default connect(mapStateToProps, mapDispatchToProps)(App);