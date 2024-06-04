"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoryOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
let FindUniqueCategoryOrThrowArgs = class FindUniqueCategoryOrThrowArgs {
};
exports.FindUniqueCategoryOrThrowArgs = FindUniqueCategoryOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], FindUniqueCategoryOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCategoryOrThrowArgs = FindUniqueCategoryOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCategoryOrThrowArgs);
