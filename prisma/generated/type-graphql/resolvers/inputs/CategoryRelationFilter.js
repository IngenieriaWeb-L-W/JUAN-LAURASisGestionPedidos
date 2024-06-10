"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryRelationFilter = class CategoryRelationFilter {
};
exports.CategoryRelationFilter = CategoryRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryRelationFilter.prototype, "isNot", void 0);
exports.CategoryRelationFilter = CategoryRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryRelationFilter", {})
], CategoryRelationFilter);
