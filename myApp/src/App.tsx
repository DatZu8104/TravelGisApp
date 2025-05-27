import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import ChooseLoginPage from './pages/login/ChooseLoginPage';
import HomeMain from './pages/home/HomeMain';
import SignUp from './pages/signUp/SignUp';

import PrivateRoute from '../src/pages/routes/PrivateRoute'; // 👈 import route bảo vệ

import '@ionic/react/css/core.css';
import './theme/variables.css';

setupIonicReact();

const MYPATH = [
  { path: '/homepage', Component: HomePage },
  { path: '/login', Component: Login },
  { path: '/chooseloginpage', Component: ChooseLoginPage },
  { path: '/signup', Component: SignUp },
  { path: '/homemain', Component: HomeMain },
  
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {MYPATH.map(({ path, Component }) => {
          const isPrivate = path === '/homemain' || path.startsWith('/admin');

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
