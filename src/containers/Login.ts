import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Login from '../pages/Login';
import { GlobalState } from '../models/state';
import { updateAuthEmail, updateAuthPassword, login } from '../actions/auth';

const mapStateToProps = (state: GlobalState) => ({
  email: state.auth.email,
  password: state.auth.password,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onChangeEmail: (value: string) => dispatch(updateAuthEmail(value)),
  onChangePassword: (value: string) => dispatch(updateAuthPassword(value)),
  onSubmit: (email: string, password: string) =>
    dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login as any);
