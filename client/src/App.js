import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register, Landing, Error } from "./pages";
import {
  AddJob,
  AllJobs,
  Stats,
  Profile,
  SharedLayout,
} from "./pages/dashboard";

import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-job" element={<AddJob />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
