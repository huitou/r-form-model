import React, { Component } from 'react';
import { symbol, any, element } from 'prop-types';

class FieldModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            form: props.form,
            initial: props.initial,
            value: props.initial
        };
    }

    static propTypes = {
        id: symbol.isRequired,
        form: element.isRequired,
        initial: any
    };

    static defaultProps = {
        initial: undefined
    };

    value = () => this.state.value;

    change = (nextValue) => {
        this.setState({ value: nextValue });
    };

    render() {
        return null;
    }
}

export default FieldModel;
