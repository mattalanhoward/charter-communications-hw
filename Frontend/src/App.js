import PurchaseDataTable from "./components/PurchaseDataTable";
import PointsTable from "./components/PointsTable";

function App() {
	return (
		<div className="App">
			<h1>Charter Communications Loyalty Points Program</h1>
			<PointsTable />
			<PurchaseDataTable />
		</div>
	);
}

export default App;
