import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
