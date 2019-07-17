import React, { Component, Fragment } from 'react';
import { withCollector } from 'r-socs-core';

import FieldModel from '../field-model';
import FieldCollector from '../field-model/collector';

const CollectedFieldModel = withCollector(FieldCollector)(FieldModel);

class HashModel extends Component {

    render() {
        return (
            <Fragment>
                <CollectedFieldModel hset={this.hset('f1')} />
                <CollectedFieldModel hset={this.hset('f2')} />
            </Fragment>
        );
    }
}

export default HashModel;