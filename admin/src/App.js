import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./Page/loginPage";
import Navigation from "./Components/Navigation/navigation";
import DashboardPage from "./Page/dashboardPage";
import RoomPage from "./Page/roomPage";
import DevicePage from "./Page/devicePage";
import AccountPage from "./Page/accountPage";
import AddRoomPage from "./Page/addRoomPage";
import AddDevicePage from "./Page/addDevicePage";
import RoomDetailPage from "./Page/roomDetailPage";
import EditRoomPage from "./Page/editRoomPage";
import EditDevicePage from "./Page/editDevicePage";
import AddAccountPage from "./Page/addAccountPage";
import EditAccountPage from "./Page/editAccountPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Navigation/>} >
        <Route path="dashboard" element={<DashboardPage/>}/>

        <Route path="room" element={<RoomPage/>}/>
        <Route path="room/add-room" element={<AddRoomPage/>}/>
        <Route path="room/edit-room" element={<EditRoomPage/>}/>
        <Route path="room/detail-room" element={<RoomDetailPage/>}/>

        <Route path="device" element={<DevicePage/>}/>
        <Route path="device/add-device" element={<AddDevicePage/>}/>
        <Route path="device/edit-device" element={<EditDevicePage/>}/>

        <Route path="account" element={<AccountPage/>}/>
        <Route path="account/add-account" element={<AddAccountPage/>}/>
        <Route path="account/edit-account" element={<EditAccountPage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
