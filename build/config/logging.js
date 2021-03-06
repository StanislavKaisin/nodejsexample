"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTimeStamp = function () {
    return new Date().toISOString();
};
var info = function (namespace, message, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + message, object);
    }
    console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + message);
};
var warn = function (namespace, message, object) {
    if (object) {
        console.warn("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message, object);
    }
    console.warn("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + message);
};
var error = function (namespace, message, object) {
    if (object) {
        console.error("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message, object);
    }
    console.error("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + message);
};
var debug = function (namespace, message, object) {
    if (object) {
        console.debug("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message, object);
    }
    console.debug("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + message);
};
exports.default = {
    info: info,
    warn: warn,
    error: error,
    debug: debug,
};
