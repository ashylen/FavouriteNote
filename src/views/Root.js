import React from 'react';

// Modules
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

// Utilities
import { routes } from 'routes';
import store from 'store';

// Components
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
            <Route exact path={routes.notes} component={Notes} />
            <Route path={routes.note} component={DetailsPage} />
            <Route exact path={routes.articles} component={Articles} />
            <Route path={routes.article} component={DetailsPage} />
            <Route exact path={routes.twitters} component={Twitters} />
            <Route path={routes.twitter} component={DetailsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
);

export default Root;
