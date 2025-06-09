import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken, isTokenExpired, removeToken } from '../../utils/auth';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const token = getToken();
  const isExpired = token ? isTokenExpired(token) : true;

  // xóa token nếu hết hạn
  if (token && isExpired) {
    removeToken();
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        token && !isExpired ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
