import React from 'react';
import MeniItem from "./MenuItem";

const DirectoryMenu = props => (
    <div className="directory-menu">
        <MeniItem title="HATS"/>
        <MeniItem title="JACKETS" />
        <MeniItem title="SNEAKERS" />
        <MeniItem title="WOMENS" />
        <MeniItem title="MENS" />
    </div>
);

export default DirectoryMenu;