"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateManyMutationInput_1 = require("../../../inputs/CategoryUpdateManyMutationInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
let UpdateManyCategoryArgs = class UpdateManyCategoryArgs {
};
exports.UpdateManyCategoryArgs = UpdateManyCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyMutationInput_1.CategoryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateManyMutationInput_1.CategoryUpdateManyMutationInput)
], UpdateManyCategoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], UpdateManyCategoryArgs.prototype, "where", void 0);
exports.UpdateManyCategoryArgs = UpdateManyCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCategoryArgs);
