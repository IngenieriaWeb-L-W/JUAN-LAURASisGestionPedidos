"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SessionScalarWhereInput = class SessionScalarWhereInput {
};
exports.SessionScalarWhereInput = SessionScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SessionScalarWhereInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SessionScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SessionScalarWhereInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SessionScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SessionScalarWhereInput.prototype, "updatedAt", void 0);
exports.SessionScalarWhereInput = SessionScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionScalarWhereInput", {})
], SessionScalarWhereInput);
