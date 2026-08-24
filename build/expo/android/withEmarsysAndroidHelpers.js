"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMetaData = setMetaData;
exports.addEmarsysMessagingService = addEmarsysMessagingService;
function setMetaData(app, name, { value, resource }) {
    if (!app['meta-data']) {
        app['meta-data'] = [];
    }
    // Find existing entry
    const existingIndex = app['meta-data'].findIndex((item) => item.$ && item.$['android:name'] === name);
    let metaDataEntry = undefined;
    if (value) {
        // Convert array values to comma-separated string
        const stringValue = Array.isArray(value) ? value.join(',') : value;
        metaDataEntry = {
            $: {
                'android:name': name,
                'android:value': stringValue,
            },
        };
    }
    else if (resource) {
        metaDataEntry = {
            $: {
                'android:name': name,
                'android:resource': resource,
            },
        };
    }
    if (metaDataEntry) {
        if (existingIndex !== -1) {
            // Update existing entry
            app['meta-data'][existingIndex] = metaDataEntry;
        }
        else {
            // Add new entry
            app['meta-data'].push(metaDataEntry);
        }
    }
}
function addEmarsysMessagingService(app) {
    const SERVICE_NAME = "com.emarsys.service.EmarsysFirebaseMessagingService";
    const MESSAGING_EVENT = "com.google.firebase.MESSAGING_EVENT";
    app.service = app.service || [];
    const hasEmarsysMessagingService = app.service.some((srv) => srv.$['android:name'] === SERVICE_NAME);
    const hasMessagingEventIntentFilter = app.service.some((srv) => srv['intent-filter'] &&
        srv['intent-filter'].some((filter) => filter.action &&
            filter.action.some((action) => action.$ && action.$['android:name'] === MESSAGING_EVENT)));
    if (!hasEmarsysMessagingService && !hasMessagingEventIntentFilter) {
        app.service.push({
            $: {
                'android:name': SERVICE_NAME,
                'android:exported': 'false',
            },
            'intent-filter': [
                {
                    action: [
                        {
                            $: {
                                'android:name': MESSAGING_EVENT,
                            },
                        },
                    ],
                },
            ],
        });
    }
}
