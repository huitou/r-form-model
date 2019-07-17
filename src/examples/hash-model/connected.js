import React from 'react';
import { connect } from 'r-socs-core';

import CollectedHashModel from './collected';
import BasicView from '../views/basic-view';

const ConnectedHashModel = connect(CollectedHashModel, 'Hash')(BasicView);

export default ConnectedHashModel;
