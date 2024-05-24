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
exports.comparePasswords = exports.decodeToken = exports.createPasswordHash = exports.getToken = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config({ path: require('find-config')('.env') });
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const getToken = (email) => {
    return jsonwebtoken_1.default.sign({ email }, SECRET_KEY, { expiresIn: '7d' });
};
exports.getToken = getToken;
const createPasswordHash = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const SALT_ROUNDS = 8;
    const passwordHash = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
    return String(passwordHash);
});
exports.createPasswordHash = createPasswordHash;
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
};
exports.decodeToken = decodeToken;
const comparePasswords = (password, storedHash) => {
    return bcrypt_1.default.compareSync(password, storedHash);
};
exports.comparePasswords = comparePasswords;
