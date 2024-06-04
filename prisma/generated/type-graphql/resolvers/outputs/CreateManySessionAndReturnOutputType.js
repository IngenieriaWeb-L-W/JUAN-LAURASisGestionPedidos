"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySessionAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../outputs/User");
let CreateManySessionAndReturnOutputType = class CreateManySessionAndReturnOutputType {
};
exports.CreateManySessionAndReturnOutputType = CreateManySessionAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManySessionAndReturnOutputType.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManySessionAndReturnOutputType.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManySessionAndReturnOutputType.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManySessionAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManySessionAndReturnOutputType.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], CreateManySessionAndReturnOutputType.prototype, "user", void 0);
exports.CreateManySessionAndReturnOutputType = CreateManySessionAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManySessionAndReturnOutputType", {})
], CreateManySessionAndReturnOutputType);
