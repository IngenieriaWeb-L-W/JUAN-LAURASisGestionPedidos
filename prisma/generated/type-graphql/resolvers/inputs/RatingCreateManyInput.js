"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RatingCreateManyInput = class RatingCreateManyInput {
};
exports.RatingCreateManyInput = RatingCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateManyInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateManyInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateManyInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateManyInput.prototype, "updatedAt", void 0);
exports.RatingCreateManyInput = RatingCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateManyInput", {})
], RatingCreateManyInput);
