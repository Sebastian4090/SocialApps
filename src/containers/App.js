import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField, requestSocials } from '../actions';

import './App.css';
import MainPage from '../components/MainPage';


const App = ({ store }) => {

    const text = useSelector(state => state.searchApps.searchField)

    const socialApps = useSelector(state => state.requestApps.socials)

    const dispatch = useDispatch();

    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value))
        console.log('DISPATCH SEARCH', e.target.value)
    };

    useEffect(() => {
        dispatch(requestSocials());
    }, [dispatch])


    return (
        <MainPage socials={socialApps} 
                  text={text} 
                  onSearchChange={onSearchChange} 
                  />
    );
}
    
        

export default App;