import React from 'react';
import LabelInput from './LabelInput';

class LabelInputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <LabelInput
                id = {this.props.id}
                type = {this.props.type}
                update = {this.props.update}
                value = {this.state.value}
                handleChange = {this.handleChange}
                handleBlur = {this.props.update.bind(null, this.props.id, this.state.value)}
            />
        );
    }
}

export default LabelInputContainer;
