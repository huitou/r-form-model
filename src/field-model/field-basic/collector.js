/*
	FieldBasicCollector - It collects handles from FieldBasicComponent.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import { Collector } from 'r-socs-core';

export default class FieldBasicCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                id: 'getId',
                name: 'getName',
                initial: 'getInitial',
                enabled: 'enabled',
                value: 'getValue',
            },
            hefu: {
                enable: 'enable',
                disable: 'disable',
                change: 'setValue',
                reset: 'resetValue',
            },
        },
    };
}
