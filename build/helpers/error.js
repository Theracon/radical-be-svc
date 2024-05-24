"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHelper = void 0;
const ErrorHelper = (error) => {
    return {
        stack: error instanceof Error ? error.stack : [],
        message: error instanceof Error ? error.message : String(error)
    };
};
exports.ErrorHelper = ErrorHelper;
