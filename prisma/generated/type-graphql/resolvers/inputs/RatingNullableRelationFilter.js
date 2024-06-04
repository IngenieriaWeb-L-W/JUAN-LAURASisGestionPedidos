"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingWhereInput_1 = require("../inputs/RatingWhereInput");
let RatingNullableRelationFilter = class RatingNullableRelationFilter {
};
exports.RatingNullableRelationFilter = RatingNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], RatingNullableRelationFilter.prototype, "isNot", void 0);
exports.RatingNullableRelationFilter = RatingNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingNullableRelationFilter", {})
], RatingNullableRelationFilter);
