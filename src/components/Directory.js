import React from 'react';
import MeniItem from "./MenuItem";
// styles
import '../styles/directory.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="directory-menu">
                <MeniItem title="HATS"/>
                <MeniItem title="JACKETS" />
                <MeniItem title="SNEAKERS" />
                <MeniItem title="WOMENS" />
                <MeniItem title="MENS" />
            </div>
        );
    }
};

export default Directory;