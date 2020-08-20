import React, { Component } from 'react';

class ErrorAlert extends Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                Error while Adding
            </div>
        )
    }
}


export default ErrorAlert;