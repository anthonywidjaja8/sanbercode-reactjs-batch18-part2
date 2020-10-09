import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="formTemplate">
                <h1>Form Pembelian Buah</h1>
                <table id="form" cellspacing="20px">
                    <tr>
                        <td><b>Nama Pelanggan</b></td>
                        <td><input></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox"/>Semangka</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox"/>Jeruk</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox"/>Nanas</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox"/>Salak</td>
                    </tr>
                    <tr>
                        <td><b>Daftar Item</b></td>
                        <td><input type="checkbox"/>Anggur</td>
                    </tr>
                    <input type="submit" value="Kirim" id="btnKirim"/>
                </table>
            </div>
        )
    }
}

export default Form