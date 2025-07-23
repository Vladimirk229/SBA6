"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(error) {
    if (error instanceof Error) {
        console.error(`[Error]: ${error.message}`);
    }
    else {
        console.error('[Unknown Error]:', error);
    }
}
