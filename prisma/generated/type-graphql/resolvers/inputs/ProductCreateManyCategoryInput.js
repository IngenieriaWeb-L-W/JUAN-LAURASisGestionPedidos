"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreateManyCategoryInput = class ProductCreateManyCategoryInput {
};
exports.ProductCreateManyCategoryInput = ProductCreateManyCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyCategoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyCategoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyCategoryInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyCategoryInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateManyCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateManyCategoryInput.prototype, "updatedAt", void 0);
exports.ProductCreateManyCategoryInput = ProductCreateManyCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyCategoryInput", {})
], ProductCreateManyCategoryInput);
