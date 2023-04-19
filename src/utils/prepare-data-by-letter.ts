import { LocationProps } from "../pages/Home/types";

export const prepareDataByLetter = (data: LocationProps[]) => {
    const getInitials = data.map(location => location.name[0].normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    const onlyOnePorLetter = Array.from(new Set(getInitials));
    const newData = onlyOnePorLetter.map(letter => {
        const formatData = data.filter(location => location.name[0] === letter).map(location => location.name);
        return {
            letter,
            cities: formatData,
        }
    });
    return newData;
}
