import { Collector } from 'r-socs-core';

export default class FieldCollector extends Collector {
    static handleMap = {
        hfu: {
            hifu: {
                value: 'value',
                error: 'error',
                focusd: 'focused',
                enabled: 'enabled',
                activated: 'activated',
            },
            hefu: {
                change: 'change',
                reset: 'reset',
                validate: 'validate',
                focus: 'focus',
                blur: 'blur',
                enable: 'enable',
                disable: 'disable',
                activate: 'activate',
                deactivate: 'deactivate'
            },
        },
    };
}
