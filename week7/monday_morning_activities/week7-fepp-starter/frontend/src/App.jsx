import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/HomePage";
import AddJobPage from "./pages/AddJobPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage"
import JobPage from "./pages/JobPage"
import EditJobPage from "./pages/EditJobPage"; 

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/jobs/:id" element={<JobPage />} />
          <Route path="/edit-job/:id" element={<EditJobPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
)
  
  export default App;
