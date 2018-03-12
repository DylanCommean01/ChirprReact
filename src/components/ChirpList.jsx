import React, { Component, Fragment } from 'react';
import ChirpCard from './ChirpCard';

class ChirpList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.chirp.map((chirp, index) => {
                    return (
                        <ChirpCard key={index} onDestroy={this.props.onDestroy} chirp={chirp} />
                    );
                })}
            </Fragment>
        );
    }
}

export default ChirpList;