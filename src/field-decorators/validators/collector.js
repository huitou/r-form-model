/*
	FieldValidatorCollector - It collects handles from FieldFacilitatorComponent.

	Copyright (C) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import { Collector } from 'r-socs-core';

export default class FieldValidatorCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {},
            hefu: {
                isValueAcceptable: 'isValueAcceptable',  // (value, fieldState, context) => bool;
                acceptableValues: 'acceptableValues',    // (fieldState, context) => arrayOf(any);
            },
        },
    };
}
