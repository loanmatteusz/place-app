import { City, CollapseListContent, Content, Label } from "./styles";

interface CollapseListProps {
    letter: string;
    cities: string[];
}

export const CollapseList = ({ letter, cities }: CollapseListProps) => {
    return (
        <CollapseListContent key={letter}>
            <Label>{letter}</Label>
            <Content>
                {
                    cities?.map(city => <City key={city}>{city}</City>)
                }
            </Content>
        </CollapseListContent>
    );
}
