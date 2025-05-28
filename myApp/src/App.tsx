import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import ChooseLoginPage from "./pages/login/ChooseLoginPage";
import HomeMain from "./pages/home/HomeMain";
import SignUp from "./pages/signUp/SignUp";
import Hotel from "./pages/hotel/index";
import PrivateRoute from "../src/pages/routes/PrivateRoute";

// Ionic CSS
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";

setupIonicReact();

const MYPATH = [
  { path: "/homepage", Component: HomePage },
  { path: "/login", Component: Login },
  { path: "/chooseloginpage", Component: ChooseLoginPage },
  { path: "/signup", Component: SignUp },
  { path: "/homemain", Component: HomeMain },
  { path: "/hotel", Component: Hotel },
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {MYPATH.map(({ path, Component }) => {
          const isPrivate = path === "/homemain" || path.startsWith("/admin");

          return isPrivate ? (
            <PrivateRoute key={path} exact path={path} component={Component} />
          ) : (
            <Route key={path} exact path={path} component={Component} />
          );
        })}

        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;