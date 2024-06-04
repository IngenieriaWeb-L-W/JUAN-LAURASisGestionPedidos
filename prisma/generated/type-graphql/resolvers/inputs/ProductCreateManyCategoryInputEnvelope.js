"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyCategoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCategoryInput_1 = require("../inputs/ProductCreateManyCategoryInput");
let ProductCreateManyCategoryInputEnvelope = class ProductCreateManyCategoryInputEnvelope {
};
exports.ProductCreateManyCategoryInputEnvelope = ProductCreateManyCategoryInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyCategoryInput_1.ProductCreateManyCategoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyCategoryInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductCreateManyCategoryInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ProductCreateManyCategoryInputEnvelope = ProductCreateManyCategoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyCategoryInputEnvelope", {})
], ProductCreateManyCategoryInputEnvelope);
