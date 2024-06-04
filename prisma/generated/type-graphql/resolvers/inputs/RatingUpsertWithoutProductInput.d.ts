import { RatingCreateWithoutProductInput } from "../inputs/RatingCreateWithoutProductInput";
import { RatingUpdateWithoutProductInput } from "../inputs/RatingUpdateWithoutProductInput";
import { RatingWhereInput } from "../inputs/RatingWhereInput";
export declare class RatingUpsertWithoutProductInput {
    update: RatingUpdateWithoutProductInput;
    create: RatingCreateWithoutProductInput;
    where?: RatingWhereInput | undefined;
}
