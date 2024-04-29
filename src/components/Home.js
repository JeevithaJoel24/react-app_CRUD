import array from "./array";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(){
    return <
        div>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {array.map((item) => {
                    return(
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
        </div>
}

export default Home