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
const express_1 = __importDefault(require("express"));
const bookService_1 = __importDefault(require("../services/bookService"));
const router = express_1.default.Router();
router.get('/best-sellers/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {};
    if (req.query.offset)
        options.offset = Number(req.query.offset);
    if (req.query.query)
        options.query = String(req.query.query);
    const books = yield bookService_1.default.fetchBooksFromNytApi(options);
    res.json(books);
}));
router.get('/:userId', (_req, res) => {
    res.send('Fetch all favourites by user ID');
});
router.post('/:userId', (_req, res) => {
    res.send('Add a new favourite');
});
router.put('/:bookId', (_req, res) => {
    res.send('Update a favourite');
});
router.delete('/:bookId', (_req, res) => {
    res.send('Delete a favourite');
});
exports.default = router;
