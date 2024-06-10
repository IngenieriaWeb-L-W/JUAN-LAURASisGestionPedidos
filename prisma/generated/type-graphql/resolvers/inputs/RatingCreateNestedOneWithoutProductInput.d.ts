import { RatingCreateOrConnectWithoutProductInput } from "../inputs/RatingCreateOrConnectWithoutProductInput";
import { RatingCreateWithoutProductInput } from "../inputs/RatingCreateWithoutProductInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";
export declare class RatingCreateNestedOneWithoutProductInput {
    create?: RatingCreateWithoutProductInput | undefined;
    connectOrCreate?: RatingCreateOrConnectWithoutProductInput | undefined;
    connect?: RatingWhereUniqueInput | undefined;
}
