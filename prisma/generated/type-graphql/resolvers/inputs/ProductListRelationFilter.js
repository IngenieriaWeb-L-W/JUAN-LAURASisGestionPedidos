"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductListRelationFilter = class ProductListRelationFilter {
};
exports.ProductListRelationFilter = ProductListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductListRelationFilter.prototype, "none", void 0);
exports.ProductListRelationFilter = ProductListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductListRelationFilter", {})
], ProductListRelationFilter);
