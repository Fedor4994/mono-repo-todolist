"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 4200;
const app = (0, express_1.default)();
const router = new routes_1.default(app);
(0, database_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
router.init();
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
app.use(((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
}));
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
exports.default = server;
//# sourceMappingURL=server.js.map