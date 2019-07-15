import { withCollector } from 'r-socs-core';

import FieldModel from '../../field-model';
import FieldCollector from '../../field-model/collector';

const CollectedFieldModel = withCollector(FieldCollector)(FieldModel);

export default CollectedFieldModel;
