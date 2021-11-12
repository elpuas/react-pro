import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy-page-1">Lazy Page 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy-page-2">Lazy Page 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy-page-3">Lazy Page 3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy-page-1" element={<LazyPage1 />} />
          <Route path="/lazy-page-2" element={<LazyPage2 />} />
          <Route path="/lazy-page-3" element={<LazyPage3 />} />
        </Routes>
      </div>
    </Router>
  );
}