import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;

class Number extends Component {
  render() {
    return (
      <Container
        onClick={() => this.props.onClick(this.props.value)}
        style={this.props.style}
      >
        {this.props.value}
      </Container>
    );
  }
}

Number.propTypes = {
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default Number;
