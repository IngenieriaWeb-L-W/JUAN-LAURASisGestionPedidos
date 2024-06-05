"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductScalarFieldEnum;
(function (ProductScalarFieldEnum) {
    ProductScalarFieldEnum["id"] = "id";
    ProductScalarFieldEnum["title"] = "title";
    ProductScalarFieldEnum["description"] = "description";
    ProductScalarFieldEnum["price"] = "price";
    ProductScalarFieldEnum["image"] = "image";
    ProductScalarFieldEnum["categoryId"] = "categoryId";
    ProductScalarFieldEnum["createdAt"] = "createdAt";
    ProductScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductScalarFieldEnum || (exports.ProductScalarFieldEnum = ProductScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
    name: "ProductScalarFieldEnum",
    description: undefined,
});
