import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount = () => {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  };

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate>
        {twitters.map(({ title, content, twitterName, _id: id }) => (
          <Card
            id={id}
            cardType="twitters"
            title={title}
            content={content}
            twitterName={twitterName}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.defaultProps = {
  twitters: [],
};

Twitters.propTypes = {
  fetchTwitters: PropTypes.func.isRequired,
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string,
    }),
  ),
};

const mapStateToProps = ({ twitters }) => ({ twitters });
const mapDispatchToProps = dispatch => ({ fetchTwitters: () => dispatch(fetchItems('twitters')) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Twitters);
