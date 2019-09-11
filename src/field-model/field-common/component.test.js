/*
	FieldCommonComponent test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import React from 'react';
import { shallow } from 'enzyme';

import FieldCommonComponent from './component';

const props = {
    id: 'testId',
    name: 'testName',
    initial: 'whatever',
    validate: jest.fn(),
};

const initialState = {
    enabled: true,
    value: undefined,
    activated: true,
    focused: false,
    error: undefined,
};

describe('FieldCommonComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FieldCommonComponent {...props} />);
    });

    it('when mounted, has initial state', () => {
        expect(wrapper.state()).toEqual({ ...initialState, value: props.initial });
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

    it('when mounted, can activate and deactivate', () => {
        expect(wrapper.instance().activated()).toBe(true);
        wrapper.instance().deactivate();
        expect(wrapper.instance().activated()).toBe(false);
        wrapper.instance().activate();
        expect(wrapper.instance().activated()).toBe(true);
    });

    it('when mounted, can focus and blur', () => {
        expect(wrapper.instance().focused()).toBe(false);
        wrapper.instance().focus();
        expect(wrapper.instance().focused()).toBe(true);
        wrapper.instance().blur();
        expect(wrapper.instance().focused()).toBe(false);
    });

    it('when mounted, can set and reset', () => {
        expect(wrapper.instance().getValue()).toBe(props.initial);
        wrapper.instance().setValue('new whatever');
        expect(wrapper.instance().getValue()).toBe('new whatever');

        wrapper.instance().resetValue();
        expect(wrapper.instance().getValue()).toBe(props.initial);
    });

    it('when mounted, can validate', () => {
        wrapper.instance().validate();
        expect(props.validate).toHaveBeenCalled();
    }); 
});
