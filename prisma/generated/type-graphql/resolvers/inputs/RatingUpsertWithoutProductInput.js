"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateWithoutProductInput_1 = require("../inputs/RatingCreateWithoutProductInput");
const RatingUpdateWithoutProductInput_1 = require("../inputs/RatingUpdateWithoutProductInput");
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
let RatingUpsertWithoutProductInput = class RatingUpsertWithoutProductInput {
};
exports.RatingUpsertWithoutProductInput = RatingUpsertWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateWithoutProductInput_1.RatingUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateWithoutProductInput_1.RatingUpdateWithoutProductInput)
], RatingUpsertWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput)
], RatingUpsertWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingUpsertWithoutProductInput.prototype, "where", void 0);
exports.RatingUpsertWithoutProductInput = RatingUpsertWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpsertWithoutProductInput", {})
], RatingUpsertWithoutProductInput);
