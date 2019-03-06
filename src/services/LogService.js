import Raven from "raven-js";

function init() {
    Raven.config('https://16825aad24134bd4b83580eec9f11e31@sentry.io/1318205', {
        release: '1-0-0',
        environment: 'development-test',
    }).install();
}

function log(error) {
    Raven.captureException(error);
}

export default {
    init,
    log
}