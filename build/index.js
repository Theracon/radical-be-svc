"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
const books_1 = __importDefault(require("./routes/books"));
require('dotenv').config({ path: require('find-config')('.env') });
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const allowedOrigins = ['http://localhost:5173'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.get(['/', '/api', '/api/v1'], (_req, res) => {
    res.send('Radical API v1.0');
});
app.use('/api/v1/auth', auth_1.default);
app.use('/api/v1/users', users_1.default);
app.use('/api/v1/books', books_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
