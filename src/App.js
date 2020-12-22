import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "./App.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
];

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="mx-auto">
          {routes.map((route) => (
            <NavLink to={route.path} activeClassName="active" exact>
              {route.name}
            </NavLink>
          ))}
        </nav>

        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
