"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyInput_1 = require("../../../inputs/ProductCreateManyInput");
let CreateManyProductArgs = class CreateManyProductArgs {
};
exports.CreateManyProductArgs = CreateManyProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyInput_1.ProductCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProductArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProductArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyProductArgs = CreateManyProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProductArgs);
