import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

export class Weather extends Component {
    

    render() {
        return (
            <div>
                <Alert variant="dark">
                    This is a alert with 
                </Alert>
                <Button variant="dark">Dark</Button>
            </div>

        );

    }
}