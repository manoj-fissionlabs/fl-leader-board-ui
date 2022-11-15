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
import FilterIcon from './assets/filter.png';

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
      <div className="filter-section p-3">
        <div className="col-md-10 m-auto filter-container">
          <img src={ FilterIcon } className="filter-icon" alt="filter Icon" />
          <select className="p-1" onChange={(e) => handleChangeRedirect(e.target.value)}>
            {sections.map(section => (<option key={section.id} value={section.url} selected={pathname === section.url ? true : false}>{section.title}</option>))}
          </select>
        </div>
      </div>
      <div className="site-body mt-1">
        <div className="m-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ui" element={<UI />}></Route>
            <Route path="/backend" element={<Backend />}></Route>
            <Route path="/qa" element={<QA />}></Route>
            <Route path="/it" element={<IT />}></Route>
            <Route path="/hrs" element={<HRs />}></Route>
            <Route path="/profile/:profileId" element={<Profile />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;