"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/register', (_req, res) => {
    res.send('Register');
});
router.post('/login', (_req, res) => {
    res.send('Login');
});
exports.default = router;
