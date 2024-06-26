"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingOrderByWithRelationInput_1 = require("../../../inputs/RatingOrderByWithRelationInput");
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
const RatingScalarFieldEnum_1 = require("../../../../enums/RatingScalarFieldEnum");
let FindManyRatingArgs = class FindManyRatingArgs {
};
exports.FindManyRatingArgs = FindManyRatingArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], FindManyRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingOrderByWithRelationInput_1.RatingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], FindManyRatingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRatingArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarFieldEnum_1.RatingScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRatingArgs.prototype, "distinct", void 0);
exports.FindManyRatingArgs = FindManyRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyRatingArgs);
