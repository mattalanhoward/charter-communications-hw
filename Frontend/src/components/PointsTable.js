import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PointsTable = () => {
	const [customersData, setCustomersData] = useState([]);

	useEffect(() => {
		const fetchCustomersData = async () => {
			const { data } = await axios.get("/api/customersdata");
			setCustomersData(data);
		};
		fetchCustomersData();
	}, []);

	const calcPts = (purchase) => {
		let points = 0;

		if (purchase > 100) {
			points += (purchase - 100) * 2 + 50;
		}
		if (purchase > 50 && purchase < 100) {
			points += purchase - 50;
		}

		return points;
	};

	customersData.map((user) => {
		user.purchasePoints = calcPts(user.purchaseTotal);
	});

	const sumUserMonthPts = (userId, month) => {
		let points = 0;
		const userMonth = customersData.filter(
			(user) => user.userId == userId && user.purchaseDate.slice(0, 2) == month
		);
		userMonth.map((user) => (points += user.purchasePoints));
		return points;
	};

	const sumUserTotalPts = (userId) => {
		let points = 0;
		const userTotalPts = customersData.filter((user) => user.userId == userId);
		userTotalPts.map((user) => (points += user.purchasePoints));
		return points;
	};

	const createCustomerPtsData = () => {
		let customerPtsData = [];
		for (let i = 1; i <= 3; i++) {
			customerPtsData.push({
				userId: i,
				janPts: sumUserMonthPts(i, "01"),
				febPts: sumUserMonthPts(i, "02"),
				marchPts: sumUserMonthPts(i, "03"),
				totalPts: sumUserTotalPts(i),
			});
		}
		return customerPtsData;
	};

	const customerPtsData = createCustomerPtsData();

	return (
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
				{customerPtsData.map((user) => (
					<tr>
						<td>{user.userId}</td>
						<td>{user.janPts}</td>
						<td>{user.febPts}</td>
						<td>{user.marchPts}</td>
						<td>{user.totalPts}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default PointsTable;
