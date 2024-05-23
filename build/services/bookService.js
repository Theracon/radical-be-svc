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
const axios_1 = __importDefault(require("axios"));
require('dotenv').config({ path: require('find-config')('.env') });
const object_1 = require("../utils/object");
const array_1 = require("../utils/array");
const fetchBooksFromNytApi = (params) => __awaiter(void 0, void 0, void 0, function* () {
    let result = {};
    const nytApiBaseUrl = process.env.NYT_API_BASE_URL;
    const nytApiKey = process.env.NYT_API_KEY;
    const endpoint = '/lists/best-sellers/history.json';
    const options = { method: 'GET', headers: { Accept: 'application/json' } };
    let stringParams = (0, object_1.serializeObj)(params);
    let url = `${nytApiBaseUrl}${endpoint}?${stringParams}&api-key=${nytApiKey}`;
    if (params.query) {
        const authorParams = { author: params.query, offset: params.offset || 0 };
        const stringAuthorParams = (0, object_1.serializeObj)(authorParams);
        const authorUrl = `${nytApiBaseUrl}${endpoint}?${stringAuthorParams}&api-key=${nytApiKey}`;
        const titleParams = { title: params.query, offset: params.offset || 0 };
        const stringTitleParams = (0, object_1.serializeObj)(titleParams);
        const titleUrl = `${nytApiBaseUrl}${endpoint}?${stringTitleParams}&api-key=${nytApiKey}`;
        try {
            const response = yield Promise.all([yield axios_1.default.get(authorUrl, options), yield axios_1.default.get(titleUrl, options)]);
            let list = [...(response[0].data || {}).results, ...(response[1].data || {}).results].map((row) => ({
                title: row === null || row === void 0 ? void 0 : row.title,
                author: row === null || row === void 0 ? void 0 : row.author,
                price: row === null || row === void 0 ? void 0 : row.price
            }));
            list = (0, array_1.shuffle)(list);
            list = list.slice(0, 20);
            result = { books: list, total: list.length };
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        try {
            const response = yield axios_1.default.get(url, options);
            if (response && String(response.status).startsWith('2')) {
                let data = response.data;
                const list = ((data === null || data === void 0 ? void 0 : data.results) || []).map((row) => ({
                    title: row === null || row === void 0 ? void 0 : row.title,
                    author: row === null || row === void 0 ? void 0 : row.author,
                    price: row === null || row === void 0 ? void 0 : row.price
                }));
                result = { books: list, total: list.length };
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return result;
});
const fetchFavouritesByUserId = () => {
    return [];
};
const addNewFavourite = () => {
    return true;
};
const updateFavourite = () => {
    return true;
};
const deleteFavourite = () => {
    return true;
};
exports.default = {
    fetchBooksFromNytApi,
    fetchFavouritesByUserId,
    addNewFavourite,
    updateFavourite,
    deleteFavourite
};
