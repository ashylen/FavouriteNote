import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <React.Fragment>
    <Sidebar pageType={pageType} />
    {children}
  </React.Fragment>
);

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

UserPageTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
