/*
	FieldBasicComponent.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React, { Component } from 'react';
import { string, any, func } from 'prop-types';

export default class FieldBasicComponent extends Component {
    static propTypes = {
        id: string.isRequired,
        name: string.isRequired,
        initial: any,
        getValue: func.isRequired,
        setValue: func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
        };
    }

    getId = () => this.props.id;
    getName = () => this.props.name;
    getInitial = () => this.props.initial;

    enabled = () => this.state.enabled;
    enable = () => this.setState({ enabled: true });
    disable = () => this.setState({ enabled: false, focused: false });

    getValue = () => this.props.getValue();
    setValue = (nextValue) => {
        if (!this.enabled()) {
            console.warn(`change() is called while the field #${this.props.id}# is not enabled.`);
        } else {
            this.props.setValue(nextValue);
        }
    };
    resetValue = () => this.props.setValue(this.props.initial );

    render() { return null; }
}
