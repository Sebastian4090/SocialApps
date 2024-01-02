import React from 'react';

const SearchBox = ({ searchChange }) =>{
    console.log('searchbox!')
    return (
        <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search sites'
            onChange= {searchChange}/>
        </div>
    );
}

export default SearchBox;