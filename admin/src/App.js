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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Navigation/>} />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
}

export default App;
