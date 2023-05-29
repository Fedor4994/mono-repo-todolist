"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExistMiddleware = void 0;
const typeorm_1 = require("typeorm");
const RequestError_1 = require("../helpers/RequestError");
const isExistMiddleware = (entityName) => async (req, res, next) => {
    const { id } = req.params;
    const { email } = req.body;
    const repository = (0, typeorm_1.getRepository)(entityName);
    if (id && !(await repository.findOneBy({ id }))) {
        throw (0, RequestError_1.RequestError)(404, `Not found ${entityName} with this id`);
    }
    if (email) {
        const entity = await repository.findOneBy({ email });
        if (!entity) {
            throw (0, RequestError_1.RequestError)(404, `Not found ${entityName} with this email`);
        }
        req.user = entity;
    }
    next();
};
exports.isExistMiddleware = isExistMiddleware;
//# sourceMappingURL=isExist.middleware.js.map