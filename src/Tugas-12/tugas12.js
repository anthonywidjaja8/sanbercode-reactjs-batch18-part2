import React from "react"

class FruitStore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputNamaBuah: "",
            inputHargaBuah: "",
            inputBeratBuah: "",
            inputDataBuah: { nama: "", harga: "", berat: ""},
            index: -1
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event.target.id === "namaBuah") {
            this.setState({ inputNamaBuah: event.target.value })
          } else if (event.target.id === "hargaBuah") {
            this.setState({ inputHargaBuah: event.target.value })
          } else if (event.target.id === "beratBuah") {
            this.setState({ inputBeratBuah: event.target.value })
          }
    }

    handleEdit(event) {
        let index = event.target.value
        this.setState({ inputNamaBuah: this.state.dataHargaBuah[index].nama, inputHargaBuah: this.state.dataHargaBuah[index].harga, inputBeratBuah: this.state.dataHargaBuah[index].berat, index })
    }

    handleDelete(event) {
        let index = event.target.value
        this.state.dataHargaBuah.splice(index, 1)
        this.setState({ dataHargaBuah: this.state.dataHargaBuah })
    }

    handleSubmit(event) {
        event.preventDefault()
        let index = this.state.index
        let inputDataBuah = {
            nama: this.state.inputNamaBuah,
            harga: this.state.inputHargaBuah,
            berat: this.state.inputBeratBuah
        }
        let dataHargaBuah = this.state.dataHargaBuah
        if (index === -1) {
            this.setState({ inputDataBuah }, () => {
                this.setState({
                    dataHargaBuah: [...this.state.dataHargaBuah, this.state.inputDataBuah],
                    inputNamaBuah: "",
                    inputHargaBuah: "",
                    inputBeratBuah: ""
                })
            })
        } else {
            dataHargaBuah[index] = inputDataBuah
            this.setState({ dataHargaBuah, inputNamaBuah: "", inputHargaBuah: "", inputBeratBuah: "", index: -1 })
        }
    }

    render() {
        return (
            <div style={{margin: "0 auto", width: "50%"}}>
                <h1 style={{textAlign: 'center'}}>Tabel Harga Buah</h1>
                <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.dataHargaBuah.map((item, index)=>{
                        return(                    
                            <tr key={index}>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>{item.berat/1000 + ' kg'}</td>
                                <td>
                                    <button value={index} onClick={this.handleEdit}>Edit</button>
                                    <button style={{marginLeft: "1em"}} value={index} onClick={this.handleDelete}>Delete</button>
                                </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
                </table>
                <br/>
                <form style={{textAlign: "center"}} onSubmit={this.handleSubmit}>
                    <h1 style={{textAlign: 'center'}}>Form Data Buah</h1>
                    <table>
                        <tr>
                            <td>Masukkan nama buah:</td>
                            <td><input type="text" id="namaBuah" value={this.state.inputNamaBuah} onChange={this.handleChange} /></td>
                        </tr>   
                        <tr>
                            <td>Masukkan harga buah:</td>
                            <td><input type="text" id="hargaBuah" value={this.state.inputHargaBuah} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Masukkan berat buah (gram):</td>
                            <td><input type="text" id="beratBuah" value={this.state.inputBeratBuah} onChange={this.handleChange} /></td>
                        </tr>
                    </table>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FruitStore