import { Layout } from "../../components/Layout";
import { HomeContent, FlexGroup } from "./styles";
import { Input } from "../../components/Input";
import { Selector } from "../../components/Selector";
import { CitiesPanel } from "./components/CitiesPanel";

import { getAllStates, getStateCities } from "easy-location-br";
import { LocationProps } from "./types";
import { useEffect, useState } from "react";


export const Home = () => {
    const states = getAllStates();
    const [state, setState] = useState<string>("PB");
    const allCitiesOfState = getStateCities(state) as LocationProps[];
    const [citiesByState, setCitiesByState] = useState<any>(allCitiesOfState || []);

    useEffect(() => {
        const allCitiesOfState = getStateCities(state) as LocationProps[];
        setCitiesByState(allCitiesOfState);
    }, [state]);

    return (
        <Layout>
            <HomeContent>
                <FlexGroup>
                    <Input />
                    <Selector states={states} changeState={(value) => setState(value)} />
                </FlexGroup>
                <CitiesPanel data={citiesByState} />
            </HomeContent>
        </Layout>
    );
}
