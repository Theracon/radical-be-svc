"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.register = exports.login = void 0;
const error_1 = require("../helpers/error");
const userService_1 = __importDefault(require("../services/userService"));
const response_1 = require("../helpers/response");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield userService_1.default.login(req.body);
        return res.status(200).json((0, response_1.ResponseHelper)(response));
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield userService_1.default.register(req.body);
        return res.status(201).json((0, response_1.ResponseHelper)(response));
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.register = register;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield userService_1.default.getProfile(req.body);
        return res.status(200).json((0, response_1.ResponseHelper)(response));
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.getProfile = getProfile;
