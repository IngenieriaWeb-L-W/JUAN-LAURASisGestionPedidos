"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
let FindUniqueProductOrThrowArgs = class FindUniqueProductOrThrowArgs {
};
exports.FindUniqueProductOrThrowArgs = FindUniqueProductOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], FindUniqueProductOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueProductOrThrowArgs = FindUniqueProductOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProductOrThrowArgs);
