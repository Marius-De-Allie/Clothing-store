import React, { useState } from 'react';
import MeniItem from "./MenuItem";
import { sections as sectionsData } from '../services/sections';
// styles
import '../styles/directory.scss';

const Directory = props => {
    // component state.
    const [sections, setSections] = useState(sectionsData);

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