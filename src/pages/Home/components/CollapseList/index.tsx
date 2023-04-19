import { City, CollapseListContent, Content, Label } from "./styles";
import { CollapseListProps } from "./types";

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
