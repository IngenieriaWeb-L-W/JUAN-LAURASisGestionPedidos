"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateInput_1 = require("../../../inputs/CategoryUpdateInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
let UpdateOneCategoryArgs = class UpdateOneCategoryArgs {
};
exports.UpdateOneCategoryArgs = UpdateOneCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateInput_1.CategoryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateInput_1.CategoryUpdateInput)
], UpdateOneCategoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], UpdateOneCategoryArgs.prototype, "where", void 0);
exports.UpdateOneCategoryArgs = UpdateOneCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCategoryArgs);
