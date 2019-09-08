import { withCollector } from 'r-socs-core';

import FieldCommonComponent from './component';
import FieldCommonCollector from './collector';

export default withCollector(FieldCommonCollector)(FieldCommonComponent);
