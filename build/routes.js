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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
var AddTransactionController_1 = require("./controllers/transactions/AddTransactionController");
var DeleteTransactionController_1 = require("./controllers/transactions/DeleteTransactionController");
var UpdateTransactionController_1 = require("./controllers/transactions/UpdateTransactionController");
var RetrieveTransactionsController_1 = require("./controllers/transactions/RetrieveTransactionsController");
var CreateUserController_1 = require("./controllers/users/CreateUserController");
var UpdateUserController_1 = require("./controllers/users/UpdateUserController");
var DeleteUserController_1 = require("./controllers/users/DeleteUserController");
var RetrieveUserController_1 = require("./controllers/users/RetrieveUserController");
var addTransactionController = new AddTransactionController_1.AddTransactionController();
var deleteTransactionController = new DeleteTransactionController_1.DeleteTransactionController();
var updateTransactionController = new UpdateTransactionController_1.UpdateTransactionController();
var retrieveTransactionsController = new RetrieveTransactionsController_1.RetrieveTransactionsController();
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserController = new UpdateUserController_1.UpdateUserController();
var deleteUserController = new DeleteUserController_1.DeleteUserController();
var retrieveUserController = new RetrieveUserController_1.RetrieveUserController();
function handle404Redirect(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, res.status(404).json({ status: 404, msg: 'Feature not found' })];
        });
    });
}
// ############ Transaction Routes ############
router.get('/users/transactions', retrieveTransactionsController.handle);
router.post('/users/transactions', addTransactionController.handle);
router.put('/users/transactions/:slug', updateTransactionController.handle);
router.delete('/users/transactions/:slug', deleteTransactionController.handle);
// router.get('/users/:id/transactions/:slug/update', handle404Redirect)
// ############ Unhandled requests ############
router.put('/users/transactions', handle404Redirect);
router.delete('/users/transactions', handle404Redirect);
router.get('/users/transactions/:slug', handle404Redirect);
router.post('/users/transactions/:slug', handle404Redirect);
// ############ User Routes ############
router.get('/users', retrieveUserController.handle);
router.post('/users', createUserController.handle);
router.delete('/users', deleteUserController.handle);
router.put('/users', updateUserController.handle);
