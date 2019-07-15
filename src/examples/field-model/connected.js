import React from 'react';
import { connect } from 'r-socs-core';

import CollectedFieldModel from './collected';
import BasicView from '../views/basic-view';

const ConnectedFieldModel = connect(CollectedFieldModel, 'Field')(BasicView);

export default ConnectedFieldModel;
