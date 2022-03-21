import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AddIssuer from "../IssuerMgmt/AddIssuer/AddIssuer";
import ConfirmIssuer from "../IssuerMgmt/ConfirmIssuer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AddIssuer />} />
          <Route path="/confirm" element={<ConfirmIssuer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
