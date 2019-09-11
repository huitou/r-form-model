/*
	FieldBasicCollector test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React from 'react';
import { shallow } from 'enzyme';

import FieldBasicCollector from './collector';
import FieldBasicComponent from './component';

const handleMap = {
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

const id = 'testId';
const name = 'testName';

describe('FieldBasicCollector', () => {
    it('has a proper handle map', () => {
        expect(FieldBasicCollector.handleMap).toEqual(handleMap);
    });
});

describe('FieldBasicCollector', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FieldBasicComponent id={id} name={name} />);
    });

    it('matches all hifu instance methods of FieldBasicComponent', () => {
        Object.values(FieldBasicCollector.handleMap.hfu.hifu).forEach(
            method => expect(wrapper.instance()[method]).toBeDefined()
        );
    });

    it('matches all hefu instance methods of FieldBasicComponent', () => {
        Object.values(FieldBasicCollector.handleMap.hfu.hefu).forEach(
            method => expect(wrapper.instance()[method]).toBeDefined()
        );
    });
});
