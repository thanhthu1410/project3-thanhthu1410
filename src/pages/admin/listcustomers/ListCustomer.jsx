import React from 'react'
import "./ListCustomer.scss"

export default function ListCustomer() {
    return (

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" style={{textAlign: "left"}}>#</th>
                    <th scope="col" style={{textAlign: "left"}}>First</th>
                    <th scope="col" style={{textAlign: "left"}}>Last</th>
                    <th scope="col" style={{textAlign: "left"}}>Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style={{color: "black", textAlign: "left"}}>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row" style={{color: "black", textAlign: "left"}}>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row" style={{color: "black", textAlign: "left"}}>3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

    )
}
