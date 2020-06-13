import React from 'react';

import DirectoryMenu from './DirectoryMenu';
// styles
import '../styles/homepage.scss';

const Homepage = props => (
    <div className="homepage">
       <DirectoryMenu />
    </div>
);

export default Homepage;