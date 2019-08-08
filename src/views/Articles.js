import React, { Component } from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utilities
import { fetchItems } from 'actions';

// Components
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Articles extends Component {
  componentDidMount = () => {
    const { fetchArticles } = this.props;
    fetchArticles();
  };

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate>
        {articles.map(({ title, content, twitterName, created, _id: id }) => (
          <Card
            id={id}
            cardType="articles"
            title={title}
            content={content}
            twitterName={twitterName}
            created={created}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.defaultProps = {
  articles: [],
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string,
    }),
  ),
  fetchArticles: PropTypes.func.isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles });
const mapDispatchToProps = dispatch => ({ fetchArticles: () => dispatch(fetchItems('articles')) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
