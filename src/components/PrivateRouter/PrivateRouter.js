import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
        const [user,setUser] = useContext(userContext);
        return (
          <Route
            {...rest}
            render={({ location }) =>
              user.userExist ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
};

export default PrivateRouter;