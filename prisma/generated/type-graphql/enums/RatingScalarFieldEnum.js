"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RatingScalarFieldEnum;
(function (RatingScalarFieldEnum) {
    RatingScalarFieldEnum["id"] = "id";
    RatingScalarFieldEnum["rate"] = "rate";
    RatingScalarFieldEnum["count"] = "count";
    RatingScalarFieldEnum["productId"] = "productId";
    RatingScalarFieldEnum["createdAt"] = "createdAt";
    RatingScalarFieldEnum["updatedAt"] = "updatedAt";
})(RatingScalarFieldEnum || (exports.RatingScalarFieldEnum = RatingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RatingScalarFieldEnum, {
    name: "RatingScalarFieldEnum",
    description: undefined,
});
