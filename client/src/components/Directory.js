import React, { useState } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
// styles
import '../styles/directory.scss';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(section => <MenuItem key={section.id} {...section} />)}
    </div>
);

const mapStateToProps = ({ directory }) => ({
    sections: directory.sections
});

export default connect(mapStateToProps)(Directory);