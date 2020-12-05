// Increase readability in Cloud Logging
require('firebase-functions/lib/logger/compat');

import * as functions from 'firebase-functions';

const expressApp = require('../dist/SSR/server/main').app();
exports.ssr = functions.https.onRequest(expressApp);
