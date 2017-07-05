import * as React from 'react';
import { DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

interface StateProps extends RouteComponentProps<any> {
  email: string;
  password: string;
  isAuthenticated: boolean;
}

interface DispatchProps extends DispatchProp<{}> {
  onChangeEmail: Function;
  onChangePassword: Function;
  onSubmit: Function;
}

const Login: React.StatelessComponent<StateProps & DispatchProps> = ({
  email,
  password,
  isAuthenticated,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) =>
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <a>Need an account?</a>
          </p>
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => onChangeEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => onChangePassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                onClick={() => onSubmit(email, password)}
              >
                Sign in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>;

export default Login;
