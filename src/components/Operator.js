import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;

class Operator extends Component {
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

Operator.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Operator;
