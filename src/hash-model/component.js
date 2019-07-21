import React, { Component, Fragment } from 'react';
import { shape, string, number, object } from 'prop-types';
import { withCollector } from 'r-socs-core';

import FieldModel from '../field-model';
import FieldCollector from '../field-model/collector';

const CollectedFieldModel = withCollector(FieldCollector)(FieldModel);

class HashModel extends Component {
    static propTypes = {
        initialValues: shape({
            f1: string,
            f2: number,
            f3: object
        })
    };

    static defaultProps = {
        initialValues: {}
    };

    render() {
        const { initialValues, ...rest } = this.props;
        return (
            <Fragment>
                <CollectedFieldModel hset={this.hset('f1')} initial={initialValues.f1} />
                <CollectedFieldModel hset={this.hset('f2')} initial={initialValues.f2} />
                <CollectedFieldModel hset={this.hset('f3')} initial={initialValues.f3} />
            </Fragment>
        );
    }
}

export default HashModel;