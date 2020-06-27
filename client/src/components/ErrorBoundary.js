import React from 'react';

class ErrorBoundary extends React.Component {
    // component state.
    state = {
        hasErrored: false
    }

    static getDerivedStateFromError(error) {
        // set component hasErrored state to true
        return {hasErrored: true};
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        const { hasErrored } = this.props;
        return hasErrored ? <div>Something went wrong</div> : 
            this.props.children
    }
};

export default ErrorBoundary;