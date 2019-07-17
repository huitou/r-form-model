import React from 'react';
import { mount } from "enzyme";

import ConnectedHashModel from './connected';
import BasicView from '../views/basic-view';

// const id = Symbol();

describe('ConnectedHashModel', () => {
    describe('when mounted,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(<ConnectedHashModel />);
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
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            console.log('Target Component props (before): ', wrapper.find(BasicView).props());
            await wrapper.find(BasicView).props().f1.hefu.change(1);
            wrapper.update();
            expect(wrapper.find(BasicView).props().f1.hifu.value).toBe(1);
            console.log('Target Component props (after): ', wrapper.find(BasicView).props());
        });
    });
});
