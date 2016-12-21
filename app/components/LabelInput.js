import React from 'react';
import Radium from 'radium';
import Datepicker from './Datepicker';

var styles = {
    label: {
        display: 'block'
    },
    textarea: {
        width: '100%'
    }
};

class LabelInput extends React.Component {
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
        var {id, type} = this.props;
        var element = type === "date" ? (
            <Datepicker
                id = "Date"
                update = {this.props.update}
            />
        ) : type === "description" ? (
            <textarea
                rows = "5"
                id = "Description"
                value = {this.state.value}
                onChange = {this.handleChange}
                onBlur = {this.handleBlur}
                style = {styles.textarea}>
            </textarea>
        ) : (
            <input
                type = {type}
                id = {id}
                value = {this.state.value}
                onChange = {this.handleChange}
                onBlur = {this.handleBlur}>
            </input>
        )

        return (
            <div>
                <label
                    htmlFor = {id}
                    id = {id}
                    style = {styles.label}>{id}</label>
                {element}
            </div>
        );
    }
}

export default Radium(LabelInput);
