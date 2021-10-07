import { Component } from "react";
import styled from "styled-components";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";

const Container = styled.div`
  width: 450px;
  height: 600px;
  border: 1px solid black;
`;

const PadContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 60px 60px 60px 60px;
  grid-template-rows: 60px 60px 60px 60px 60px 60px;
  grid-template-areas:
    ". . . clear"
    "n7 n8 n9 divide"
    "n4 n5 n6 multiply"
    "n1 n2 n3 subtract"
    "neg n0 dec plus"
    ". . . equals";
  padding: 20px 30px 20px 10px;
  grid-column-gap: 25px;
  grid-row-gap: 4px;
  border: 1px solid black;
  width: 380px;
  margin-left: 14px;
`;

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    // Handle first number
    if (!this.state.operator) {
      // handle negation
      if (number === "+/-") {
        this.setState({ first: -this.state.first });
      }
      // handle decimal
      else if (number === ".") {
        if (!this.state.first) {
          this.setState({ first: "0." });
        } else {
          if (this.state.first.toString().indexOf(".") === -1) {
            this.setState({ first: this.state.first + "." });
          }
        }
      }
      // handle regular digit (48 char max)
      else if (this.isValidLength(this.state.first)) {
        this.setState({ first: `${this.state.first || ""}${number}` });
      }
    }
    // Handle second number
    else {
      // handle negation
      if (number === "+/-") {
        this.setState({ second: -this.state.second });
      }
      // handle decimal
      else if (number === ".") {
        if (!this.state.second) {
          this.setState({ second: "0." });
        } else {
          if (this.state.second.toString().indexOf(".") === -1) {
            this.setState({ second: this.state.second + "." });
          }
        }
      }
      // handle regular number
      else if (this.isValidLength(this.state.second)) {
        this.setState({ second: `${this.state.second || ""}${number}` });
      }
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "C") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state;

  isValidLength = (digit) => !digit || digit.toString().length < 48;

  render() {
    return (
      <Container>
        <header>Calculator</header>
        <Screen value={this.getScreenValue()} />
        <PadContainer>
          <Number
            style={{ gridArea: "n0" }}
            value={0}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n1" }}
            value={1}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n2" }}
            value={2}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n3" }}
            value={3}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n4" }}
            value={4}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n5" }}
            value={5}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n6" }}
            value={6}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n7" }}
            value={7}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n8" }}
            value={8}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "n9" }}
            value={9}
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "neg" }}
            value="+/-"
            onClick={this.handleNumberClick}
          />
          <Number
            style={{ gridArea: "dec" }}
            value="."
            onClick={this.handleNumberClick}
          />

          <Operator
            style={{ gridArea: "clear" }}
            value="C"
            onClick={this.handleOperatorClick}
          />
          <Operator
            style={{ gridArea: "divide" }}
            value="/"
            onClick={this.handleOperatorClick}
          />
          <Operator
            style={{ gridArea: "multiply" }}
            value="x"
            onClick={this.handleOperatorClick}
          />
          <Operator
            style={{ gridArea: "subtract" }}
            value="-"
            onClick={this.handleOperatorClick}
          />
          <Operator
            style={{ gridArea: "plus" }}
            value="+"
            onClick={this.handleOperatorClick}
          />
          <Operator
            style={{ gridArea: "equals" }}
            value="="
            onClick={this.handleOperatorClick}
          />
        </PadContainer>
      </Container>
    );
  }
}

export default Calculator;
