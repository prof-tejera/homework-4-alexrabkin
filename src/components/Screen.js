import { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  border: 1px solid black;
  width: 410px;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;
  margin-left: 14px;
  padding: 5px;
`;

class Screen extends Component {
  render() {
    return (
      <Container>
        <div>{this.props.value.first}</div>
        <div>{this.props.value.operator}</div>
        <div>{this.props.value.second}</div>
      </Container>
    );
  }
}

Screen.propTypes = {
  value: PropTypes.object,
};

export default Screen;
