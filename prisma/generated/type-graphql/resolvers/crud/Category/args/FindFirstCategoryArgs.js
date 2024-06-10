"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByWithRelationInput_1 = require("../../../inputs/CategoryOrderByWithRelationInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
const CategoryScalarFieldEnum_1 = require("../../../../enums/CategoryScalarFieldEnum");
let FindFirstCategoryArgs = class FindFirstCategoryArgs {
};
exports.FindFirstCategoryArgs = FindFirstCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], FindFirstCategoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], FindFirstCategoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarFieldEnum_1.CategoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "distinct", void 0);
exports.FindFirstCategoryArgs = FindFirstCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCategoryArgs);
