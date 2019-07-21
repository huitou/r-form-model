import React from 'react';
import { mount } from "enzyme";

import ConnectedHashModel from './connected';
import BasicView from '../views/basic-view';

// const id = Symbol();

const initialValues = {
    f1: 'abc',
    f2: 3,
    f3: {}
};

describe('ConnectedHashModel', () => {
    describe('when mounted,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(<ConnectedHashModel hprops={{ initialValues }}/>);
        })
        afterEach(() => {
            // jest.clearAllMocks();
        });

        it('has the HConnect', () => {
            expect(wrapper.find('hConnect(BasicView)').length).toBe(1);
        });

        it('has the HInjector', () => {
            expect(wrapper.find('hInject(BasicView)').length).toBe(1);
        });

        it('has the HCollector', () => {
            expect(wrapper.find('hCollect(HashModel)').length).toBe(1);
        });

        it('has the Logic Model', () => {
            expect(wrapper.find('HashModel').length).toBe(1);
            // console.log('HashModel props: ', wrapper.find('HashModel').props());
        });

        it('has 3 FieldModel instances', () => {
            expect(wrapper.find('FieldModel').length).toBe(3);
            // console.log('FieldModel f1 props: ', wrapper.find('FieldModel').at(0).props());
            // console.log('FieldModel f1 state: ', wrapper.find('FieldModel').at(0).state());
            // console.log('FieldModel f2 props: ', wrapper.find('FieldModel').at(1).props());
            // console.log('FieldModel f2 state: ', wrapper.find('FieldModel').at(1).state());
            // console.log('FieldModel f3 props: ', wrapper.find('FieldModel').at(2).props());
            // console.log('FieldModel f3 state: ', wrapper.find('FieldModel').at(2).state());
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            // console.log('Target Component props (before): ', wrapper.find(BasicView).props());
            await wrapper.find(BasicView).props().f1.hefu.change('xyz');
            wrapper.update();
            expect(wrapper.find(BasicView).props().f1.hifu.value).toBe('xyz');
            // console.log('Target Component props (after): ', wrapper.find(BasicView).props());
            // console.log('FieldModel f1 state: ', wrapper.find('FieldModel').at(0).state());
        });
    });
});
