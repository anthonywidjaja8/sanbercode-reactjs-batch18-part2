import React from "react"
import { FruitStoreProvider } from "./FruitStoreContext"
import FruitStoreList from "./FruitStoreList"
import FruitStoreForm from "./FruitStoreForm"

const FruitStoreUsingContext = () => {
    return (
        <FruitStoreProvider>
            <FruitStoreList />
            <FruitStoreForm />
        </FruitStoreProvider>
    )
}

export default FruitStoreUsingContext