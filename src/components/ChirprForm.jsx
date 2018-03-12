import React, { Component } from 'react';

class ChirprForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    };

    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }

    handleClickSubmit(event) {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className='chirpr-Input-Bar'>
                <textarea className="form-control m-1" rows="2" onChange={(event) => { this.handleInputChange(event); }} placeholder="Enter your Chirp!"></textarea>
                <button type="submit" className="btn btn-primary m-1" onClick={(event) => { this.handleClickSubmit(event); }}>Submit Chirp</button>
            </div>
        );
    }
}

export default ChirprForm;