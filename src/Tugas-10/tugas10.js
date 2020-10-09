import React from 'react';

class TableFruitPriceHeader extends React.Component {
    render() {
      return <th style={{ background: "darkgrey" }}>{this.props.text}</th>
    }
  }
  
  class TableFruitPriceDetails extends React.Component {
    render() {
      return <td style={{ background: "#ff7d4d" }}>{this.props.data}</td>
    }
  }

class TableFruitPrice extends React.Component {
    render() {
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ]

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
                <table style={{ margin: "0px auto", width: "700px", 
                border: "1px solid black", 'margin-bottom': "1%" }}>
                    <tr>
                        <TableFruitPriceHeader text="Nama" />
                        <TableFruitPriceHeader text="Harga" />
                        <TableFruitPriceHeader text="Berat" />
                    </tr>
                    {dataHargaBuah.map((item) => {
                        return (
                            <tr>
                                <TableFruitPriceDetails data={item.nama} />
                                <TableFruitPriceDetails data={item.harga} />
                                <TableFruitPriceDetails data={item.berat / 1000 + " kg"} />
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default TableFruitPrice