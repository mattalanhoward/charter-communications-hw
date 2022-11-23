import PurchaseDataTable from "./components/PurchaseDataTable";
import PointsTable from "./components/PointsTable";

function App() {
	return (
		<div className="App">
			<h1>Charter Communications Loyalty Points Program</h1>
			<h2>Customer Points Data By Month</h2>
			<PointsTable />
			<h2>Customer Purchase Data</h2>
			<PurchaseDataTable />
		</div>
	);
}

export default App;
