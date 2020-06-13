import React, { useState } from 'react';
import { sections as sectionsData } from '../services/sections';
// styles
import '../styles/directory.scss';
import MenuItem from './MenuItem';

const Directory = props => {
    // component state.
    const [sections, setSections] = useState(sectionsData);

    return (
        <div className="directory-menu">
            {sections.map(section => <MenuItem key={section.id} {...section} />)}
        </div>
    )
};

export default Directory;