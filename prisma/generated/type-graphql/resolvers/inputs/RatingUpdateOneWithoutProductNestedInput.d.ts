import { RatingCreateOrConnectWithoutProductInput } from "../inputs/RatingCreateOrConnectWithoutProductInput";
import { RatingCreateWithoutProductInput } from "../inputs/RatingCreateWithoutProductInput";
import { RatingUpdateToOneWithWhereWithoutProductInput } from "../inputs/RatingUpdateToOneWithWhereWithoutProductInput";
import { RatingUpsertWithoutProductInput } from "../inputs/RatingUpsertWithoutProductInput";
import { RatingWhereInput } from "../inputs/RatingWhereInput";
import { RatingWhereUniqueInput } from "../inputs/RatingWhereUniqueInput";
export declare class RatingUpdateOneWithoutProductNestedInput {
    create?: RatingCreateWithoutProductInput | undefined;
    connectOrCreate?: RatingCreateOrConnectWithoutProductInput | undefined;
    upsert?: RatingUpsertWithoutProductInput | undefined;
    disconnect?: RatingWhereInput | undefined;
    delete?: RatingWhereInput | undefined;
    connect?: RatingWhereUniqueInput | undefined;
    update?: RatingUpdateToOneWithWhereWithoutProductInput | undefined;
}
