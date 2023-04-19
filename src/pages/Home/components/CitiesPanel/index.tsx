import { prepareDataByLetter } from "../../../../utils/prepare-data-by-letter";
import { CollapseList } from "../CollapseList";
import { CitiesPanelContent } from "./styles";
import { CitiesPanelProps, FormatedDataProps } from "./types";

export const CitiesPanel = ({ data }: CitiesPanelProps) => {
    const formatedData = prepareDataByLetter(data) as FormatedDataProps[];
    return (
        <CitiesPanelContent>
            {
                formatedData?.map(data => <CollapseList key={data.letter} letter={data.letter} cities={data.cities} />)
            }
        </CitiesPanelContent>
    );
}
