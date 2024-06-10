"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
let FindUniqueCategoryArgs = class FindUniqueCategoryArgs {
};
exports.FindUniqueCategoryArgs = FindUniqueCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], FindUniqueCategoryArgs.prototype, "where", void 0);
exports.FindUniqueCategoryArgs = FindUniqueCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCategoryArgs);
