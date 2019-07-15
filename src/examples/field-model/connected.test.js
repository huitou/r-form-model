import React from 'react';
import { mount, shallow } from "enzyme";

import ConnectedFieldModel from './connected';
import CollectedFieldModel from './collected';
import FieldModel from '../../field-model';
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

        // it('has ...', () => {
        //     expect(wrapper.find(FieldModel).length).toBe(1);
        // });

        it('has ...', () => {
            expect(wrapper.find(CollectedFieldModel).length).toBe(1);
            console.log('CollectedFieldModel props: ', wrapper.find(CollectedFieldModel).props());
        });

        it('has ...', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            console.log('BasicView props: ', wrapper.find(BasicView).props());
            await wrapper.find(BasicView).props().hefu.change(1);
            wrapper.update();
            expect(wrapper.find(BasicView).props().hifu.value).toBe(1);
            console.log('BasicView props: ', wrapper.find(BasicView).props());
        });
    });

});