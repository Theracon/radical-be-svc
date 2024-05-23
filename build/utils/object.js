"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeObj = void 0;
const serializeObj = (obj) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    return str.join('&');
};
exports.serializeObj = serializeObj;
