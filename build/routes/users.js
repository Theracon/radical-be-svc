"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/login', userController_1.login);
router.post('/register', userController_1.register);
router.get('/profile', auth_1.authorizeRequest, userController_1.getProfile);
exports.default = router;
