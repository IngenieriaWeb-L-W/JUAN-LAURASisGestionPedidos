"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
let ProductRatingArgs = class ProductRatingArgs {
};
exports.ProductRatingArgs = ProductRatingArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], ProductRatingArgs.prototype, "where", void 0);
exports.ProductRatingArgs = ProductRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductRatingArgs);
