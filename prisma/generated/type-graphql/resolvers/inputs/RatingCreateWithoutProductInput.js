"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RatingCreateWithoutProductInput = class RatingCreateWithoutProductInput {
};
exports.RatingCreateWithoutProductInput = RatingCreateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingCreateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateWithoutProductInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingCreateWithoutProductInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RatingCreateWithoutProductInput.prototype, "updatedAt", void 0);
exports.RatingCreateWithoutProductInput = RatingCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateWithoutProductInput", {})
], RatingCreateWithoutProductInput);
