"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyVerificationTokenAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyVerificationTokenAndReturnOutputType = class CreateManyVerificationTokenAndReturnOutputType {
};
exports.CreateManyVerificationTokenAndReturnOutputType = CreateManyVerificationTokenAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyVerificationTokenAndReturnOutputType.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyVerificationTokenAndReturnOutputType.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyVerificationTokenAndReturnOutputType.prototype, "expires", void 0);
exports.CreateManyVerificationTokenAndReturnOutputType = CreateManyVerificationTokenAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyVerificationTokenAndReturnOutputType", {})
], CreateManyVerificationTokenAndReturnOutputType);
