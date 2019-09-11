/*
	FieldCommonCollector test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React from 'react';
import { shallow } from 'enzyme';

import FieldCommonCollector from './collector';
import FieldCommonComponent from './component';

const handleMap = {
    hfu: {
        hifu: {
            id: 'getId',
            name: 'getName',
            initial: 'getInitial',
            enabled: 'enabled',
            activated: "activated",
            focused: "focused",
            value: 'getValue',
            error: "error",
        },
        hefu: {
            enable: 'enable',
            disable: 'disable',
            activate: "activate",
            deactivate: "deactivate",
            focus: "focus",
            blur: "blur",
            change: 'setValue',
            reset: 'resetValue',
            validate: "validate",
        },
    },
};

const id = 'testId';
const name = 'testName';

describe('FieldCommonCollector', () => {
    it('has a proper handle map', () => {
        expect(FieldCommonCollector.handleMap).toEqual(handleMap);
    });
});

describe('FieldCommonCollector', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FieldCommonComponent id={id} name={name} />);
    });

    it('matches all hifu instance methods of FieldCommonComponent', () => {
        Object.values(FieldCommonCollector.handleMap.hfu.hifu).forEach(
            method => expect(wrapper.instance()[method]).toBeDefined()
        );
    });

    it('matches all hefu instance methods of FieldCommonComponent', () => {
        Object.values(FieldCommonCollector.handleMap.hfu.hefu).forEach(
            method => expect(wrapper.instance()[method]).toBeDefined()
        );
    });
});
