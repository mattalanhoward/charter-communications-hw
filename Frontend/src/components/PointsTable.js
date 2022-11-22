import Table from 'react-bootstrap/Table';
import customerData from '../customerData';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PointsTable = () => {

  const [customerData, setCustomerData] = useState([])

  useEffect(() => {
    const fetchCustomerData = async () => {
      const { data }  = await axios.get('../customerData')
      console.log(data)

      setCustomerData(data)
    }
    fetchCustomerData()
  }, [])

  return (
    
    <div>
    <Table striped bordered hover>

      <thead>
        <tr>
          <th>User Id</th>
          <th>January</th>
          <th>February</th>
          <th>March</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {customerData.map((user) => (
          <tr>
          <td>
          {user.userId}
          </td>
          <td>
          {user.purchaseDate}
          </td>
          <td>
          {user.purchaseTotal}
          </td>
          </tr>
        )
          
        )}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default PointsTable;