import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseDataTable = () => {

  const [customersData, setCustomersData] = useState([])

  useEffect(() => {
    const fetchCustomersData = async () => {
      const { data }  = await axios.get('/api/customersdata')
      console.log(`backend data`, data)

      setCustomersData(data)
    }
    fetchCustomersData()
  }, [])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Purchase Date</th>
          <th>Purchase Total</th>
        </tr>
      </thead>
      <tbody>
        {customersData.map((user) => (
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
      </tbody>
    </Table>
  );
}

export default PurchaseDataTable;