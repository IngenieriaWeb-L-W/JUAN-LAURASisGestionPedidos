"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RatingSumAggregate = class RatingSumAggregate {
};
exports.RatingSumAggregate = RatingSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingSumAggregate.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RatingSumAggregate.prototype, "count", void 0);
exports.RatingSumAggregate = RatingSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RatingSumAggregate", {})
], RatingSumAggregate);
