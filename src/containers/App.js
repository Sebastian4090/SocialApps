import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            socials: [],
            searchfield: ''
        };
    }
    
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/Sebastian4090/SocialsDB/Socials')
        .then(response => response.json())
        .then(sites => {this.setState({ socials: sites })});
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const { socials, searchfield } = this.state;
        const filteredSocials = socials.filter(site =>{
            return site.domain.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !socials.length ? <h1 className='tc'>Loading</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>SocialApps</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList socials={filteredSocials}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
                );
            }
        
        }

export default App;