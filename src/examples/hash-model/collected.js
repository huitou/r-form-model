import { withCollector } from 'r-socs-core';

import HashModel from '../../hash-model';
import HashCollector from '../../hash-model/collector';

const CollectedHashModel = withCollector(HashCollector)(HashModel);

export default CollectedHashModel;
