import React, {useState, useEffect} from "react"
import axios from "axios"

const FruitStoreAPI = () => {
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

export default FruitStoreAPI