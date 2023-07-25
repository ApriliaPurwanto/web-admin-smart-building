import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./Page/login";
import Dashboard from "./Page/dashboard";
import Room from "./Page/room";
import Navigation from "./Components/Navigation/navigation";
import DashboardPage from "./Page/dashboardPage";
import RoomPage from "./Page/roomPage";
import DevicePage from "./Page/devicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Navigation/>} >
        <Route path="dashboard" element={<DashboardPage/>}/>
        <Route path="room" element={<RoomPage/>}/>
        <Route path="device" element={<DevicePage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
