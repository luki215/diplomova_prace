// Increase readability in Cloud Logging
require('firebase-functions/lib/logger/compat');
import * as functions from 'firebase-functions';

const angularExpressApp = require('../dist/SSR/server/main').app();
exports.ssr = functions.https.onRequest(angularExpressApp);
