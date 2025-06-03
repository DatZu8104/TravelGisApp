import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import HomeMain from "./pages/home/HomeMain";
import SignUp from "./pages/signUp/SignUp";
import Hotel from "./pages/hotel/hotel";
import PrivateRoute from "../src/pages/routes/PrivateRoute";
import HotelList from "../src/pages/hotelList/HotelList";
import Intro from "../src/pages/intro/intro";
import IntroMain from "../src/pages/intro/intromain";
import ContactForm from "./pages/contact/contactForm";
import ContactFormMain from "./pages/contact/contactFormMain";
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
import "./theme/variables.css";

setupIonicReact();

const MYPATH = [
  { path: "/home", Component: Home },
  { path: "/homemain", Component: HomeMain },
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp },
  { path: "/hotel", Component: Hotel },
  { path: "/hotellist", Component: HotelList },
  { path: "/intro", Component: Intro },
  { path: "/intromain", Component: IntroMain },
  { path: "/contact", Component: ContactForm },
  { path: "/contactmain", Component: ContactFormMain },
  
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {MYPATH.map(({ path, Component }) => {
          const protectedPaths = [
            "/homemain",
            "/hotel",
            "/hotellist",
            "/contactmain",
          ];

          const isPrivate = protectedPaths.includes(path); // chỉ so sánh tuyệt đối

          return isPrivate ? (
            <PrivateRoute key={path} exact path={path} component={Component} />
          ) : (
            <Route key={path} exact path={path} component={Component} />
          );
        })}

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>

    </IonReactRouter>
  </IonApp>
);

export default App;