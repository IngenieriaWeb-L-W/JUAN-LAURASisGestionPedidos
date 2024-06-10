"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateManyInput_1 = require("../../../inputs/CategoryCreateManyInput");
let CreateManyCategoryArgs = class CreateManyCategoryArgs {
};
exports.CreateManyCategoryArgs = CreateManyCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateManyInput_1.CategoryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCategoryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCategoryArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyCategoryArgs = CreateManyCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCategoryArgs);
