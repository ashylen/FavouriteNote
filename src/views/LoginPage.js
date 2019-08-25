import React from 'react';

// Modules
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utilities
import { authenticate as authenticateAction } from 'actions';
import { routes } from 'routes';

// Components
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledError = styled.div`
  background-color: #fff;
  color: red;
  padding: 10px;
`;

const LoginPage = ({ userID, authenticate, isLoginFailed }) => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          // console.log(isLoginFailed);

          authenticate(username, password);
        }}
      >
        {({ handleChange, handleBlur, values }) => {
          if (userID) {
            return <Redirect to={routes.home} />;
          }

          return (
            <React.Fragment>
              <Heading>{userID}</Heading>
              <Heading>Sign in</Heading>
              <StyledForm>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <Button activecolor="notes" type="submit">
                  sign in
                </Button>
              </StyledForm>
              {isLoginFailed ? <StyledError>Invalid credentials</StyledError> : null}
              <StyledLink to={routes.register}>I want my account!</StyledLink>
            </React.Fragment>
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.defaultProps = {
  userID: '',
  isLoginFailed: false,
};

LoginPage.propTypes = {
  userID: PropTypes.string,
  authenticate: PropTypes.func.isRequired,
  isLoginFailed: PropTypes.bool,
};

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

const mapStateToProps = ({ userID = null, isLoginFailed = false }) => ({
  userID,
  isLoginFailed,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
