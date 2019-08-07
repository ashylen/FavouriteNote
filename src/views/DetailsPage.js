import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    const { activeItem } = this.props;

    if (activeItem) {
      const [item] = activeItem;
      this.setState({ activeItem: item });
    } else {
      const { match } = this.props;
      const { id } = match.params;
      axios.get(`http://localhost:9000/api/note/${id}`).then(({ data }) => {
        this.setState({ activeItem: data });
      });
      // .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        created={activeItem.created}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailsPage.defaultProps = {
  activeItem: [
    {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  ],
};

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }

  return {
    activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
  };
};

export default withContext(connect(mapStateToProps)(DetailsPage));
