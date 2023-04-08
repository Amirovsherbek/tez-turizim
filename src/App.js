import { Route, Routes } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import Dashboard from "./dashboard/Dashboard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
