"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByWithRelationInput_1 = require("../../../inputs/CategoryOrderByWithRelationInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
const CategoryScalarFieldEnum_1 = require("../../../../enums/CategoryScalarFieldEnum");
let FindManyCategoryArgs = class FindManyCategoryArgs {
};
exports.FindManyCategoryArgs = FindManyCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], FindManyCategoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], FindManyCategoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCategoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarFieldEnum_1.CategoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCategoryArgs.prototype, "distinct", void 0);
exports.FindManyCategoryArgs = FindManyCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCategoryArgs);
