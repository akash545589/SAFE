import Mainbar from "../../components/Mainbar/Mainbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Onboarding.css";
function Onboarding() {
  return (
    <div className="container">
      <div className="onboarding-page">
        <Sidebar />
        <Mainbar />
      </div>
    </div>
  );
}

export default Onboarding;
