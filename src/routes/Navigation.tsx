import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import logo from '../logo.svg';
import { routes } from './routes';

const activeClassName = 'nav-active';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              { routes.map(({to, name}) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({isActive}) => isActive ? activeClassName : ''}>
                    {name}
                  </NavLink>
                </li>
              )) }
            </ul>
          </nav>
          {/* A <Routes> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Routes>
            {routes.map(({path, to, Component}) => (
              <Route key={to} path={path} element={ <Component /> } />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace/>} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}