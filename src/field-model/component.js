import React, { Component } from 'react';
import { any, func } from 'prop-types';

class FieldModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.hset.name,
            initial: props.initial,
            value: props.initial,
            error: undefined,
            focused: false,
            enabled: true,
            activated: true
        };
    }

    static propTypes = {
        initial: any,
        validator: func
    };

    static defaultProps = {
        initial: undefined,
        validator: () => {}
    };

    value = () => this.state.value;
    error = () => this.state.error;
    focused = () => this.state.focused;
    enabled = () => this.state.enabled;
    activated = () => this.state.activated;
    
    focus = () => {
        this.setState({ focused: true });
    };
    blur = () => {
        this.setState({ focused: false });
    };

    enable = () => {
        this.setState({ enabled: true });
    };
    disable = () => {
        this.setState({ enabled: false });
    };

    activate = () => {
        this.setState({ activated: true });
    };
    deactivate = () => {
        this.setState({ activated: false });
    };

    validate = (value, context) => {
        this.props.validator(value, context);
    };
    change = (nextValue) => {
        this.setState({ value: nextValue });
    };

    render() {
        return null;
    }
}

export default FieldModel;
