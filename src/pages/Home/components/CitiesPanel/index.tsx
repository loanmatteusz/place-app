import { prepareDataByLetter } from "../../../../utils/prepare-data-by-letter";
import { LocationProps } from "../../types";
import { CollapseList } from "../CollapseList";
import { CitiesPanelContent } from "./styles";

interface CitiesPanelProps {
    data: LocationProps[];
}

interface FormatedDataProps {
    letter: string;
    cities: string[]
}

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
