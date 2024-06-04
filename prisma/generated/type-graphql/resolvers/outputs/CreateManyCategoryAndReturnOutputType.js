"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCategoryAndReturnOutputType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyCategoryAndReturnOutputType = class CreateManyCategoryAndReturnOutputType {
};
exports.CreateManyCategoryAndReturnOutputType = CreateManyCategoryAndReturnOutputType;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCategoryAndReturnOutputType.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCategoryAndReturnOutputType.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyCategoryAndReturnOutputType.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyCategoryAndReturnOutputType.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyCategoryAndReturnOutputType.prototype, "updatedAt", void 0);
exports.CreateManyCategoryAndReturnOutputType = CreateManyCategoryAndReturnOutputType = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyCategoryAndReturnOutputType", {})
], CreateManyCategoryAndReturnOutputType);
