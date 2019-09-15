/*
	FieldBasicComponent test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React from 'react';
import { shallow } from 'enzyme';

import FieldBasicComponent from './component';

let value;

const props = {
    id: 'testId',
    name: 'testName',
    initial: 'whatever',
    getValue: () => value,
    setValue: (nextValue) => value = nextValue,
};

const initialState = {
    enabled: true,
};

describe('FieldBasicComponent', () => {
    let wrapper;
    beforeEach(() => {
        value = props.initial;
        wrapper = shallow(<FieldBasicComponent {...props} />);
    });

    it('when mounted, has initial state', () => {
        expect(wrapper.state()).toEqual({ ...initialState });
    });

    it('when mounted, can getId', () => {
        expect(wrapper.instance().getId()).toBe(props.id);
    });

    it('when mounted, can getName', () => {
        expect(wrapper.instance().getName()).toBe(props.name);
    });

    it('when mounted, can getInital', () => {
        expect(wrapper.instance().getInitial()).toBe(props.initial);
    });

    it('when mounted, can enable and disable', () => {
        expect(wrapper.instance().enabled()).toBe(true);
        wrapper.instance().disable();
        expect(wrapper.instance().enabled()).toBe(false);
        wrapper.instance().enable();
        expect(wrapper.instance().enabled()).toBe(true);
    });

    it('when mounted, can set and reset', () => {
        expect(wrapper.instance().getValue()).toBe(props.initial);
        wrapper.instance().setValue('new whatever');
        expect(wrapper.instance().getValue()).toBe('new whatever');

        wrapper.instance().resetValue();
        expect(wrapper.instance().getValue()).toBe(props.initial);
    }); 
});
