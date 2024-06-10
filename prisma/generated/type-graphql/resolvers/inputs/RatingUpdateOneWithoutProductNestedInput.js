"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUpdateOneWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateOrConnectWithoutProductInput_1 = require("../inputs/RatingCreateOrConnectWithoutProductInput");
const RatingCreateWithoutProductInput_1 = require("../inputs/RatingCreateWithoutProductInput");
const RatingUpdateToOneWithWhereWithoutProductInput_1 = require("../inputs/RatingUpdateToOneWithWhereWithoutProductInput");
const RatingUpsertWithoutProductInput_1 = require("../inputs/RatingUpsertWithoutProductInput");
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
const RatingWhereUniqueInput_1 = require("../inputs/RatingWhereUniqueInput");
let RatingUpdateOneWithoutProductNestedInput = class RatingUpdateOneWithoutProductNestedInput {
};
exports.RatingUpdateOneWithoutProductNestedInput = RatingUpdateOneWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateWithoutProductInput_1.RatingCreateWithoutProductInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateOrConnectWithoutProductInput_1.RatingCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateOrConnectWithoutProductInput_1.RatingCreateOrConnectWithoutProductInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpsertWithoutProductInput_1.RatingUpsertWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpsertWithoutProductInput_1.RatingUpsertWithoutProductInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateToOneWithWhereWithoutProductInput_1.RatingUpdateToOneWithWhereWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpdateToOneWithWhereWithoutProductInput_1.RatingUpdateToOneWithWhereWithoutProductInput)
], RatingUpdateOneWithoutProductNestedInput.prototype, "update", void 0);
exports.RatingUpdateOneWithoutProductNestedInput = RatingUpdateOneWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingUpdateOneWithoutProductNestedInput", {})
], RatingUpdateOneWithoutProductNestedInput);
