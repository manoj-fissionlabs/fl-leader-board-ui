import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import UI from './pages/UI/UI';
import Backend from './pages/Backend/Backend';
import QA from './pages/QA/QA';
import IT from './pages/IT/IT';
import HRs from './pages/HRs/HRs';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import { sections } from "./utils/constants";
import Sidemenu from "./components/Sidemenu/Sidemenu";

const App = () => {
  const navigate = useNavigate();
  const getLocation = useLocation();
  // const pathname = getLocation?.pathname.replace('/', '');
  const pathname = getLocation?.pathname;

  console.log("pathname --> ", pathname);

  const handleChangeRedirect = (_url) => {
    navigate(`${_url}`);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="row col-md-12 col-sm-12">
        <Sidemenu data={sections} handleChangeRedirect={handleChangeRedirect} />
        <div className="site-body mt-1 col-md-10 col-sm-10">
          <div className="m-auto">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/ui" element={<UI />}></Route>
              <Route path="/backend" element={<Backend />}></Route>
              <Route path="/qa" element={<QA />}></Route>
              <Route path="/it" element={<IT />}></Route>
              <Route path="/hrs" element={<HRs />}></Route>
              <Route path="/profile/:profileId" element={<Profile />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;