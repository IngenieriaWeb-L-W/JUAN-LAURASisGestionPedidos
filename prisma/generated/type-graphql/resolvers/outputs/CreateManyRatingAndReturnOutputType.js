"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRatingAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_1 = require("../outputs/Product");
let CreateManyRatingAndReturnOutputType = class CreateManyRatingAndReturnOutputType {
};
exports.CreateManyRatingAndReturnOutputType = CreateManyRatingAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyRatingAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyRatingAndReturnOutputType.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyRatingAndReturnOutputType.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyRatingAndReturnOutputType.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyRatingAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyRatingAndReturnOutputType.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Product_1.Product !== "undefined" && Product_1.Product) === "function" ? _a : Object)
], CreateManyRatingAndReturnOutputType.prototype, "product", void 0);
exports.CreateManyRatingAndReturnOutputType = CreateManyRatingAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyRatingAndReturnOutputType", {})
], CreateManyRatingAndReturnOutputType);
