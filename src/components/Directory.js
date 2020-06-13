import React, { useState } from 'react';
import MeniItem from "./MenuItem";
// styles
import '../styles/directory.scss';

const Directory = props => {
    // component state.
    const [section, setSection] = useState([]);
    
    return (
        <div className="directory-menu">
            <MeniItem title="HATS"/>
            <MeniItem title="JACKETS" />
            <MeniItem title="SNEAKERS" />
            <MeniItem title="WOMENS" />
            <MeniItem title="MENS" />
        </div>
    )
};

export default Directory;