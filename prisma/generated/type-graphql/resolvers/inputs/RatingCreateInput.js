"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutRatingInput_1 = require("../inputs/ProductCreateNestedOneWithoutRatingInput");
let RatingCreateInput = class RatingCreateInput {
};
exports.RatingCreateInput = RatingCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutRatingInput_1.ProductCreateNestedOneWithoutRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutRatingInput_1.ProductCreateNestedOneWithoutRatingInput)
], RatingCreateInput.prototype, "product", void 0);
exports.RatingCreateInput = RatingCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateInput", {})
], RatingCreateInput);
