import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment,
      show,
      postId
    };
  }
  render() {
    return <div />;
  }
}

Comment.propTypes = {
  comments: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(Comments);
