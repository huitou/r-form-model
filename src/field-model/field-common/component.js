/*
	FieldCommonComponent.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React from 'react';
import { string, any, func } from 'prop-types';

import { FieldBasicComponent } from '../field-basic';

export default class FieldCommonComponent extends FieldBasicComponent {
    static propTypes = {
        id: string,
        name: string,
        initial: any,
        // Additional props > Basic component:
        validate: func,
    };

    static defaultProps = {
        validate: () => {}
    };

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            value: props.initial,
            // Additional state attributes > Basic component:
            activated: true,
            focused: false,
            error: undefined,
        };
    }

    // Additional instance methods > Basic component:
    activated = () => this.state.activated;
    activate = () => this.setState({ activated: true });
    deactivate = () => this.setState({ activated: false });

    focused = () => this.state.focused;
    focus = () => {
        if (!this.enabled()) {
            console.warn(`focus() is called while the field #${this.state.id}# is not enabled.`);
            return;
        }
        if (this.focused()) {
            console.warn(`focus() is called while the field #${this.state.id}# is already focused.`);
            return;
        }
        this.setState({ focused: true });
    };
    blur = (value, context) => {
        if (!this.focused()) {
            console.warn(`blur() is called while the field #${this.state.id}# is not focused.`);
            return;
        }
        this.setState({ focused: false });
        this.validate(value, context);
        this.setValue(value);
    };

    error = () => this.state.error;
    validate = (value, context) => {
        this.setState({ error: this.props.validate(value, context) });
    };
}
