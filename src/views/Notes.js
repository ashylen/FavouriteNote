import React, { Component } from 'react';

// Modules
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Utilities
import { fetchItems } from 'actions';

// Components
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;
    return (
      <GridTemplate>
        {notes.map(({ title, content, twitterName, created, _id: id }) => (
          <Card
            id={id}
            cardType="notes"
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

Notes.defaultProps = {
  notes: [],
};

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = ({ notes }) => ({ notes });
const mapDispatchToProps = dispatch => ({ fetchNotes: () => dispatch(fetchItems('notes')) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
