import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryListComponent extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

// export default connect(mapStateToProps)(LibraryList);
const LibraryList = connect(mapStateToProps)(LibraryListComponent);

export { LibraryList };
