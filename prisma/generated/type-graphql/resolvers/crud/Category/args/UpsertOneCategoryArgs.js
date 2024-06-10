"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateInput_1 = require("../../../inputs/CategoryCreateInput");
const CategoryUpdateInput_1 = require("../../../inputs/CategoryUpdateInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
let UpsertOneCategoryArgs = class UpsertOneCategoryArgs {
};
exports.UpsertOneCategoryArgs = UpsertOneCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], UpsertOneCategoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateInput_1.CategoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateInput_1.CategoryCreateInput)
], UpsertOneCategoryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateInput_1.CategoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateInput_1.CategoryUpdateInput)
], UpsertOneCategoryArgs.prototype, "update", void 0);
exports.UpsertOneCategoryArgs = UpsertOneCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCategoryArgs);
