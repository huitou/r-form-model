import React from 'react';
import { shallow, mount } from "enzyme";

import FieldModel from './component';

describe('FieldModel', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = mount(<FieldModel
                id={'fid'}
                initial={1}
                validator={jest.fn()}
            />);
        })
        afterEach(() => {
            // jest.clearAllMocks();
        });

        it('has a value handle which returns its value', () => {
            // console.log('FieldModel: ', wrapper.props());
            expect(typeof wrapper.instance().value).toBe('function');
            expect(wrapper.instance().value()).toBe(1);
        });

        it('has a change handle which changes its value', () => {
            expect(typeof wrapper.instance().change).toBe('function');
            wrapper.instance().change(2);
            expect(wrapper.instance().value()).toBe(2);
        });

        it('has a reset handle which reset its value', () => {
            expect(typeof wrapper.instance().reset).toBe('function');
            wrapper.instance().change(2);
            expect(wrapper.instance().value()).toBe(2);
            wrapper.instance().reset();
            expect(wrapper.instance().value()).toBe(1);
        });

        it('has a validate handle which validates a value using its validator', () => {
            expect(typeof wrapper.instance().validate).toBe('function');
            wrapper.instance().validate(2);
            expect(wrapper.props().validator).toHaveBeenCalled();
        });


    });

});