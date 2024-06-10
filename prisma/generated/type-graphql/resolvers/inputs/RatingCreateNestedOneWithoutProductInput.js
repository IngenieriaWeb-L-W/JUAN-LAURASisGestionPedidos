"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateOrConnectWithoutProductInput_1 = require("../inputs/RatingCreateOrConnectWithoutProductInput");
const RatingCreateWithoutProductInput_1 = require("../inputs/RatingCreateWithoutProductInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingCreateNestedOneWithoutProductInput = class RatingCreateNestedOneWithoutProductInput {
};
exports.RatingCreateNestedOneWithoutProductInput = RatingCreateNestedOneWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput)
], RatingCreateNestedOneWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateOrConnectWithoutProductInput_1.RatingCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateOrConnectWithoutProductInput_1.RatingCreateOrConnectWithoutProductInput)
], RatingCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
exports.RatingCreateNestedOneWithoutProductInput = RatingCreateNestedOneWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateNestedOneWithoutProductInput", {})
], RatingCreateNestedOneWithoutProductInput);
