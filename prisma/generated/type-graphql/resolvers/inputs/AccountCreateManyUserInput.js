"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountCreateManyUserInput = class AccountCreateManyUserInput {
};
exports.AccountCreateManyUserInput = AccountCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "providerAccountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "refresh_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "access_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AccountCreateManyUserInput.prototype, "expires_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "token_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "id_token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyUserInput.prototype, "session_state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateManyUserInput.prototype, "updatedAt", void 0);
exports.AccountCreateManyUserInput = AccountCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateManyUserInput", {})
], AccountCreateManyUserInput);
