import MainView from "../components/Dashboard";
import DashboardHeader from "../components/Dashboard/DashboardHeader";

function DashboardPage() {
  return (
    <div className="flex-1 relative">
      <DashboardHeader />
      <div className="padding-x-64 margin-y-24">
        <MainView />
      </div>
    </div>
  );
}

export default DashboardPage;
