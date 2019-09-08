import { Collector } from 'r-socs-core';

export default class FieldCommonCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                id: 'getId',
                name: 'getName',
                initial: 'getInitial',
                enabled: 'enabled',
                value: 'getValue',
                // Additional handles > Basic component:
                activated: 'activated',
                focused: 'focused',
                error: 'error',
            },
            hefu: {
                enable: 'enable',
                disable: 'disable',
                change: 'setValue',
                reset: 'resetValue',
                // Additional handles > Basic component:
                activate: 'activate',
                deactivate: 'deactivate',
                focus: 'focus',
                blur: 'blur',
                validate: 'validate',
            },
        },
    };
}
