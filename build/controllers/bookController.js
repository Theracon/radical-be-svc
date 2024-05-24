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
exports.deleteFavourite = exports.updateFavourite = exports.addFavourite = exports.getFavourites = exports.getBestSellers = void 0;
const error_1 = require("../helpers/error");
const bookService_1 = __importDefault(require("../services/bookService"));
const getBestSellers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {};
        if (req.query.offset) {
            options.offset = Number(req.query.offset);
        }
        if (req.query.query) {
            options.query = String(req.query.query);
        }
        const books = yield bookService_1.default.fetchBooksFromNytApi(options);
        return res.status(200).json(books);
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.getBestSellers = getBestSellers;
const getFavourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const favourites = yield bookService_1.default.fetchFavouritesByUserId(req.params.userId);
        return res.status(200).json(favourites);
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.getFavourites = getFavourites;
const addFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, price, rating } = req.body;
        const { userId } = req.params;
        const data = {
            title: String(title),
            author: String(author),
            price: String(Number(price).toFixed(1)),
            rating: Number(rating),
            userId: String(userId)
        };
        const favourites = yield bookService_1.default.addNewFavourite(data);
        return res.status(200).json(favourites);
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.addFavourite = addFavourite;
const updateFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rating, price } = req.body;
        const userId = String(req.params.userId);
        const bookId = Number(req.params.bookId);
        const data = {
            rating: Number(rating),
            price: String(Number(price).toFixed(1))
        };
        const favourites = yield bookService_1.default.updateFavourite(userId, bookId, data);
        return res.status(200).json(favourites);
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.updateFavourite = updateFavourite;
const deleteFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = String(req.params.userId);
        const bookId = Number(req.params.bookId);
        const favourites = yield bookService_1.default.deleteFavourite(userId, bookId);
        return res.status(200).json(favourites);
    }
    catch (error) {
        return res.status(500).send((0, error_1.ErrorHelper)(error));
    }
});
exports.deleteFavourite = deleteFavourite;
