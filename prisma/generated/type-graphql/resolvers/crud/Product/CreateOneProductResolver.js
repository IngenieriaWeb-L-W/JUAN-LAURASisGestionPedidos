"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneProductArgs_1 = require("./args/CreateOneProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let CreateOneProductResolver = class CreateOneProductResolver {
    async createOneProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneProductResolver = CreateOneProductResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProductArgs_1.CreateOneProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProductResolver.prototype, "createOneProduct", null);
exports.CreateOneProductResolver = CreateOneProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], CreateOneProductResolver);
