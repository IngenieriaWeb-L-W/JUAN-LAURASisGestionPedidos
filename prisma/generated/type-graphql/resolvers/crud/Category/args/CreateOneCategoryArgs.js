"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateInput_1 = require("../../../inputs/CategoryCreateInput");
let CreateOneCategoryArgs = class CreateOneCategoryArgs {
};
exports.CreateOneCategoryArgs = CreateOneCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateInput_1.CategoryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateInput_1.CategoryCreateInput)
], CreateOneCategoryArgs.prototype, "data", void 0);
exports.CreateOneCategoryArgs = CreateOneCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCategoryArgs);
