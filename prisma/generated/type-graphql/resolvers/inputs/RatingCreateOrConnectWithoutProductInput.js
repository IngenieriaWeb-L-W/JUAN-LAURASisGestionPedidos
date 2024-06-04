"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateWithoutProductInput_1 = require("../inputs/RatingCreateWithoutProductInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingCreateOrConnectWithoutProductInput = class RatingCreateOrConnectWithoutProductInput {
};
exports.RatingCreateOrConnectWithoutProductInput = RatingCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput)
], RatingCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.RatingCreateOrConnectWithoutProductInput = RatingCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingCreateOrConnectWithoutProductInput", {})
], RatingCreateOrConnectWithoutProductInput);
