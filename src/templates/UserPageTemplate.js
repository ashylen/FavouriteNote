import React from 'react';

// Modules
import PropTypes from 'prop-types';

// Components
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <React.Fragment>
    <Sidebar />
    {children}
  </React.Fragment>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
