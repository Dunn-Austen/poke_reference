import React, { Component } from 'react';
import './NavBar.css';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const NavBar = props => {
  let inputValue;
  const { pokeData, pokeTypes } = props;

  return (
    <header>
      Placeholder Text
    </header>
  )
};

export default NavBar
// export default connect(mapStateToProps, null)(NavBar);

// NavBar.propTypes = {
//   pokeData: PropTypes.object
// }
