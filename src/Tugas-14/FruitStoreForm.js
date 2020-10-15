import React, { useContext } from "react"
import { FruitStoreContext } from "./FruitStoreContext"
import axios from "axios"

const FruitStoreForm = () => {
    const [dataBuah, setDataBuah, inputDataBuah, setInputDataBuah] = useContext(FruitStoreContext)

    const handleChange = (event) => {
        let typeOfInput = event.target.id

        if(typeOfInput === "namaBuah") {
            setInputDataBuah({ 
                ...inputDataBuah, 
                name: event.target.value 
            })
        } else if(typeOfInput === "hargaBuah") {
            setInputDataBuah({ 
                ...inputDataBuah, 
                price: event.target.value 
            })
        } else if(typeOfInput === "beratBuah") {
            setInputDataBuah({ 
                ...inputDataBuah, 
                weight: event.target.value 
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = inputDataBuah.name
        let price = inputDataBuah.price
        let weight = inputDataBuah.weight

        if (inputDataBuah.id === null){        
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name, price, weight })
            .then(res => {
                setDataBuah([
                  ...dataBuah, { id: res.data.id, name, price, weight }])
            })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${inputDataBuah.id}`, { name, price, weight })
            .then(() => {
                let detailBuah = dataBuah.find(item => item.id === inputDataBuah.id)
                detailBuah.name = name
                detailBuah.price = price
                detailBuah.weight = weight
                setDataBuah([...dataBuah])
            })
          }
      
          setInputDataBuah({ id: null, name: "", price: "", weight: 0 })
    }

    return (
        <div style={{margin: "0 auto", width: "50%"}}>
            <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
                <h1 style={{textAlign: 'center'}}>Form Data Buah</h1>
                <table>
                    <tr>
                        <td>Masukkan nama buah:</td>
                        <td><input type="text" id="namaBuah" required value={inputDataBuah.name} onChange={handleChange} /></td>
                    </tr>   
                    <tr>
                        <td>Masukkan harga buah:</td>
                        <td><input type="text" id="hargaBuah" required value={inputDataBuah.price} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Masukkan berat buah (gram):</td>
                        <td><input type="text" id="beratBuah" required value={inputDataBuah.weight} onChange={handleChange} /></td>
                    </tr>
                </table>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FruitStoreForm