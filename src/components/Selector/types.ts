export interface State {
    id: string;
    name: string;
}

export interface SelectorProps {
    states: State[];
    changeState: (value: string) => void;
}
