/*
	FieldCommon artefacts export test.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import FieldCommonModel, { FieldCommonComponent } from './';

import OriginalFieldCommonModel from './model';
import OriginalFieldCommonComponent from './component';

describe('FieldCommonModel', () => {
    it('is defined in ./model', () => {
        expect(FieldCommonModel).toBe(OriginalFieldCommonModel);
    });
});

describe('FieldCommonComponent', () => {
    it('is defined in ./component', () => {
        expect(FieldCommonComponent).toBe(OriginalFieldCommonComponent);
    });
});
