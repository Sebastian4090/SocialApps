import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(){
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({ hasError: true })
    }

    render(){
        if (this.state.hasError){
            return <h1>An Error Has Occurred</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;