"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProductAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Category_1 = require("../outputs/Category");
let CreateManyProductAndReturnOutputType = class CreateManyProductAndReturnOutputType {
};
exports.CreateManyProductAndReturnOutputType = CreateManyProductAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProductAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProductAndReturnOutputType.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProductAndReturnOutputType.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyProductAndReturnOutputType.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProductAndReturnOutputType.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyProductAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyProductAndReturnOutputType.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyProductAndReturnOutputType.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Category_1.Category, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Category_1.Category !== "undefined" && Category_1.Category) === "function" ? _a : Object)
], CreateManyProductAndReturnOutputType.prototype, "category", void 0);
exports.CreateManyProductAndReturnOutputType = CreateManyProductAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyProductAndReturnOutputType", {})
], CreateManyProductAndReturnOutputType);
