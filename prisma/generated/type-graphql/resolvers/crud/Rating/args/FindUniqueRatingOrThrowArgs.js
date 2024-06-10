"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRatingOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let FindUniqueRatingOrThrowArgs = class FindUniqueRatingOrThrowArgs {
};
exports.FindUniqueRatingOrThrowArgs = FindUniqueRatingOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], FindUniqueRatingOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueRatingOrThrowArgs = FindUniqueRatingOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRatingOrThrowArgs);
