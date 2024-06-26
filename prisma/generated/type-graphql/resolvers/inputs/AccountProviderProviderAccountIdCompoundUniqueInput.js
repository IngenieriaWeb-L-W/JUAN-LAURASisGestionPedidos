"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountProviderProviderAccountIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountProviderProviderAccountIdCompoundUniqueInput = class AccountProviderProviderAccountIdCompoundUniqueInput {
};
exports.AccountProviderProviderAccountIdCompoundUniqueInput = AccountProviderProviderAccountIdCompoundUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountProviderProviderAccountIdCompoundUniqueInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountProviderProviderAccountIdCompoundUniqueInput.prototype, "providerAccountId", void 0);
exports.AccountProviderProviderAccountIdCompoundUniqueInput = AccountProviderProviderAccountIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountProviderProviderAccountIdCompoundUniqueInput", {})
], AccountProviderProviderAccountIdCompoundUniqueInput);
