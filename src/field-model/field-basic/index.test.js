/*
	FieldBasic artefacts export test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import FieldBasicModel, { FieldBasicComponent } from './';

import OriginalFieldBasicModel from './model';
import OriginalFieldBasicComponent from './component';

describe('FieldBasicModel', () => {
    it('is defined in ./model', () => {
        expect(FieldBasicModel).toBe(OriginalFieldBasicModel);
    });
});

describe('FieldBasicComponent', () => {
    it('is defined in ./component', () => {
        expect(FieldBasicComponent).toBe(OriginalFieldBasicComponent);
    });
});
