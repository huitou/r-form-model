import React from 'react';
import { mount } from "enzyme";

import ConnectedFieldModel from './connected';
import BasicView from '../views/basic-view';

// const id = Symbol();

describe('ConnectedFieldModel', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = mount(<ConnectedFieldModel />);
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
            expect(wrapper.find('hCollect(FieldModel)').length).toBe(1);
        });

        it('has the Logic Model', () => {
            expect(wrapper.find('FieldModel').length).toBe(1);
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            await wrapper.find(BasicView).props().hefu.change(1);
            wrapper.update();
            expect(wrapper.find(BasicView).props().hifu.value).toBe(1);
        });
    });
});
