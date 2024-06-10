"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateToOneWithWhereWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingUpdateWithoutProductInput_1 = require("../inputs/RatingUpdateWithoutProductInput");
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
let RatingUpdateToOneWithWhereWithoutProductInput = class RatingUpdateToOneWithWhereWithoutProductInput {
};
exports.RatingUpdateToOneWithWhereWithoutProductInput = RatingUpdateToOneWithWhereWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingUpdateToOneWithWhereWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateWithoutProductInput_1.RatingUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingUpdateWithoutProductInput_1.RatingUpdateWithoutProductInput)
], RatingUpdateToOneWithWhereWithoutProductInput.prototype, "data", void 0);
exports.RatingUpdateToOneWithWhereWithoutProductInput = RatingUpdateToOneWithWhereWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateToOneWithWhereWithoutProductInput", {})
], RatingUpdateToOneWithWhereWithoutProductInput);
