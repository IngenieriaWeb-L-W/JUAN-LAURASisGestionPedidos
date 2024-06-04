"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RatingAvgAggregate = class RatingAvgAggregate {
};
exports.RatingAvgAggregate = RatingAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingAvgAggregate.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingAvgAggregate.prototype, "count", void 0);
exports.RatingAvgAggregate = RatingAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingAvgAggregate", {})
], RatingAvgAggregate);
