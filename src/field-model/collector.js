import { Collector } from 'r-socs-core';

export default class FieldCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: { value: 'value' },
            hefu: { change: 'change' },
        },
    };
}
