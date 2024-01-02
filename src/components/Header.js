import React from 'react';

const Header = React.memo((props) => {
    console.log('header')
    return <h1 className='f1'>SocialApps</h1>
})

export default Header;