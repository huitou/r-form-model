/*
	FieldCoreCollector - It collects handles from FieldCoreComponent.

	Copyright (C) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import { Collector } from 'r-socs-core';

// The basic idea is to create a container with all possible states and event handles.
// But this core does not assume any specific behaviours and leaves them to its deorators.

// For example, in a common implementation blur event will trigger value validation action.
// But this behaviour is implemented in a proper decorator instead of in this core.

// The model implementations may have event emitters for proper events.
// They are described in the relevant prop-types definitions.

export default class FieldCoreCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                // UI related physical states:
                pristine: 'pristine',
                focused: 'focused',
                blurred: 'blurred',

                // logical states:
                initialValue: 'getInitialValue',
                inputtingValue: 'getInputtingValue',
                inputtingError: 'getInputtingError',
                acceptedValue: 'getAcceptedValue',

                // physical-logical states
                enabled: 'enabled',
            },
            hefu: {
                // UI related physical events:
                initialise: 'initialise',
                focus: 'focus',
                blur: 'blur',

                // logical events:
                input: 'input',    // param: inputtingValue
                error: 'error',    // param: inputtingError
                accept: 'accept',  // param: acceptedValue
                reset: 'reset',    // param: resetValue

                // physical-logical  events:
                enable: 'enable',
                disable: 'disable',
            },
        },
    };
}
