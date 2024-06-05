"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingAvgAggregate_1 = require("../outputs/RatingAvgAggregate");
const RatingCountAggregate_1 = require("../outputs/RatingCountAggregate");
const RatingMaxAggregate_1 = require("../outputs/RatingMaxAggregate");
const RatingMinAggregate_1 = require("../outputs/RatingMinAggregate");
const RatingSumAggregate_1 = require("../outputs/RatingSumAggregate");
let RatingGroupBy = class RatingGroupBy {
};
exports.RatingGroupBy = RatingGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RatingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingGroupBy.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RatingGroupBy.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RatingGroupBy.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RatingGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RatingGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCountAggregate_1.RatingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCountAggregate_1.RatingCountAggregate)
], RatingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingAvgAggregate_1.RatingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingAvgAggregate_1.RatingAvgAggregate)
], RatingGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingSumAggregate_1.RatingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingSumAggregate_1.RatingSumAggregate)
], RatingGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMinAggregate_1.RatingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMinAggregate_1.RatingMinAggregate)
], RatingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingMaxAggregate_1.RatingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingMaxAggregate_1.RatingMaxAggregate)
], RatingGroupBy.prototype, "_max", void 0);
exports.RatingGroupBy = RatingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingGroupBy", {})
], RatingGroupBy);
