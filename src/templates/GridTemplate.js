import React, { Component } from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

// Utilities
import withContext from 'hoc/withContext';

// Components
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px calc(150px + 70px);
  animation: ${fadeIn} 0.5s ease;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50px;
  background-size: 35%;
  z-index: 200;
`;

const StyledOverlay = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 199;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10px;
  text-indent: -9999em;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  animation: ${rotate} 1.4s infinite linear;

  :before {
    width: 50%;
    height: 50%;
    background: ${({ activeColor, theme }) => theme[activeColor]};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  :after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const StyledContentWrapper = styled.div`
  min-height: 380px;
  position: relative;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext, itemsCount, isLoading } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />
            <StyledHeading big as="h1">
              {pageContext}
            </StyledHeading>
            <StyledParagraph>
              {itemsCount} {pageContext}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledContentWrapper>
            {isLoading ? (
              <StyledLoader activeColor={pageContext} />
            ) : (
              <StyledGrid>{children}</StyledGrid>
            )}
          </StyledContentWrapper>
          <StyledButtonIcon
            onClick={this.toggleNewItemBar}
            icon={plusIcon}
            activeColor={pageContext}
          />
          {isNewItemBarVisible && <StyledOverlay onClick={this.toggleNewItemBar} />}
          <NewItemBar handleClose={this.toggleNewItemBar} isVisible={isNewItemBarVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.defaultProps = {
  pageContext: 'notes',
  isLoading: true,
};

GridTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsCount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  const itemsCount = state[ownProps.pageContext] ? state[ownProps.pageContext].length : 0;
  const { isLoading } = state;
  return { itemsCount, isLoading };
};

export default withContext(connect(mapStateToProps)(GridTemplate));
