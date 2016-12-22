import React from 'react';
import LabelInput from './LabelInput';

class LabelInputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleBlur() {
        this.props.update(this.props.id, this.state.value);
    }

    render() {
        return (
            <LabelInput
                id = {this.props.id}
                type = {this.props.type}
                update = {this.props.update}
                handleChange = {this.handleChange}
                handleBlur = {this.handleBlur}
            />
        );
    }
}

export default LabelInputContainer;
