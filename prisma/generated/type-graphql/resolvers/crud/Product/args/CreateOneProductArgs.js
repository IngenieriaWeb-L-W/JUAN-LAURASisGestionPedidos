"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateInput_1 = require("../../../inputs/ProductCreateInput");
let CreateOneProductArgs = class CreateOneProductArgs {
};
exports.CreateOneProductArgs = CreateOneProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateInput_1.ProductCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateInput_1.ProductCreateInput)
], CreateOneProductArgs.prototype, "data", void 0);
exports.CreateOneProductArgs = CreateOneProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProductArgs);
