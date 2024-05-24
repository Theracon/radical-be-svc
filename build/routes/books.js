"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/best-sellers/all', auth_1.authorizeRequest, bookController_1.getBestSellers);
router.get('/:userId', auth_1.authorizeRequest, bookController_1.getFavourites);
router.post('/:userId', auth_1.authorizeRequest, bookController_1.addFavourite);
router.put('/:userId/:bookId', auth_1.authorizeRequest, bookController_1.updateFavourite);
router.delete('/:userId/:bookId', auth_1.authorizeRequest, bookController_1.deleteFavourite);
exports.default = router;
