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
const User_1 = __importDefault(require("../models/User"));
const auth_1 = require("../utils/auth");
const login = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request;
        const user = yield User_1.default.findOne({ where: { email } });
        if (user) {
            if ((0, auth_1.comparePasswords)(password, user.password)) {
                const token = (0, auth_1.getToken)(email);
                return { token, user };
            }
            else {
                throw new Error('Invalid credentials');
            }
        }
        else {
            throw new Error('Invalid credentials');
        }
    }
    catch (error) {
        throw error;
    }
});
const register = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request;
        const passwordHash = yield (0, auth_1.createPasswordHash)(password);
        const data = { email, password: passwordHash };
        const user = yield User_1.default.create(data);
        if (!user)
            return null;
        const token = (0, auth_1.getToken)(email);
        return { token, user };
    }
    catch (error) {
        throw error;
    }
});
const getProfile = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({
            where: { email }
        });
        return user;
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    getProfile,
    register,
    login
};
