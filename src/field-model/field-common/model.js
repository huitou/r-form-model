/*
	FieldCommonModel.

	Copyright (C) 2019 Riverside Software Engineering Ltd. All rights reserved.

	Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
import { withCollector } from 'r-socs-core';

import FieldCommonComponent from './component';
import FieldCommonCollector from './collector';

export default withCollector(FieldCommonCollector)(FieldCommonComponent);
