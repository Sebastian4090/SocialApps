import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestSocials } from '../actions';
import Header from '../components/Header';

// const mapStateToProps = state => {
//     return {
//         searchField: state.searchApps.searchField,
//         socials: state.requestApps.socials,
//         isPending: state.requestApps.isPending,
//         error: state.requestApps.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//         onRequestSocials: () => dispatch(RequestSocials())
//     }
// }


const App = ({ store }) => {
    const [searchResults, setSearchResults] = useState([])

    const text = useSelector(state => state.searchApps.searchField)

    const socialApps = useSelector(state => state.requestApps.socials)

    const dispatch = useDispatch();

    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value))
    };

    useEffect(() => {
        dispatch(requestSocials());
    }, [dispatch])

    useEffect(() => {
        let filteredSocials = socialApps.filter(socials => {
            return(
                socials.name.toLowerCase().includes(text.toLowerCase())
            );
        });
        setSearchResults(filteredSocials);
    }, [text, socialApps])

    const newSocial = searchResults;

    return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        {
                            text === "" ? <CardList socials={socialApps}/> : <CardList socials={newSocial}/>
                        }
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
        }
    
        

export default App;