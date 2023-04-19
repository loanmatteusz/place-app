import { SelectorContent, Option } from "./styles";

import { SelectorProps } from "./types";

export const Selector = ({
    states,
    changeState
}: SelectorProps) => {
    return (
        <SelectorContent onChange={(state) => changeState(state.target.value)}>
            {
                states?.map(state => <Option key={state.id}>{state.id}</Option> || "PB")
            }
        </SelectorContent>
    );
}
