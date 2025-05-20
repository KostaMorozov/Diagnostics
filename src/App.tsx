import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import DashboardPage from "./pages/DashboardPage";
import "./style/style.css";

function App() {
  const [selectedAction, setSelectedAction] = useState("Diagnostics");
  return (
    <div className="flex">
      <SideBar
        selectedAction={selectedAction}
        setSelectedAction={setSelectedAction}
      />
      <DashboardPage />
    </div>
  );
}

export default App;
