import React, {ReactNode} from 'react'
import {Provider} from "react-redux";
import {store} from "/src/app/providers/ProviderOfStore/config/store";

type Props = {
    children: ReactNode
}

export function ProviderOfStore(props: Props) {
    const {children} = props;

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch