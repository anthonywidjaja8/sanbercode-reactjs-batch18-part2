import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

export const FruitStoreContext = createContext()

export const FruitStoreProvider = props => {
    const [dataBuah, setDataBuah] = useState(null)
    const [inputDataBuah, setInputDataBuah] = useState({ id: null, name: "", price: "", weight: 0 })

    useEffect( () => {
        if(dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah(res.data.map( item => {
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        weight: item.weight
                    }
                }))
            })
        }
    }, [dataBuah])

    return (
        <FruitStoreContext.Provider value={[ dataBuah, setDataBuah, inputDataBuah, setInputDataBuah]}>
            {props.children}
        </FruitStoreContext.Provider>
    )
}