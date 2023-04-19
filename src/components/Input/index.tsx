import { InputContent } from "./styles";

interface InputProps {
    value: string;
    changeSearch: (value: string) => void;
}

export const Input = ({
    value,
    changeSearch
}: InputProps) => {
    return (
        <InputContent
            type="text"
            placeholder="Type a city"
            value={value}
            onChange={(state) => changeSearch(state.target.value)}
        />
    );
}
