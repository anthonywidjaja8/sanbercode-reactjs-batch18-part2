import React, { useContext } from "react"
import { FruitStoreContext } from "./FruitStoreContext"
import axios from "axios"

const FruitStoreList = () => {
    const [dataBuah, setDataBuah, , setInputDataBuah] = useContext(FruitStoreContext)

    const handleEdit = (event) => {
        let idDataBuah = parseInt(event.target.value)
        let detailBuah = dataBuah.find(item => item.id === idDataBuah)
        setInputDataBuah({ 
            id: detailBuah.id,
            name: detailBuah.name, 
            price: detailBuah.price,
            weight: detailBuah.weight
        })
    }

    const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)
        let newDataBuah = dataBuah.filter(item => item.id !== idDataBuah)

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => {
            console.log(res)
        })

        setDataBuah([...newDataBuah])
    }

    return (
        <div style={{margin: "0 auto", width: "50%"}}>
            <h1 style={{textAlign: 'center'}}>Daftar Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataBuah !== null && dataBuah.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.weight / 1000} kg</td>
                                    <td>
                                        <button onClick={handleEdit} value={item.id}>Edit</button>
                                        <button style={{marginLeft: "1em"}} onClick={handleDelete} value={item.id}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FruitStoreList