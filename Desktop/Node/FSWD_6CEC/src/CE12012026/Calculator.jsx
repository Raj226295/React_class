import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      operand1: "",
      operand2: "",
      operator: "",
      result: ""
    };
  }

  handleNumberClick = (num) => {
    const { operator, operand1, operand2 } = this.state;

    if (operator === "") {
      this.setState({ operand1: operand1 + num });
    } else {
      this.setState({ operand2: operand2 + num });
    }
  };

  handleOperatorClick = (op) => {
    this.setState({ operator: op });
  };

  calculateResult = () => {
    let { operand1, operand2, operator } = this.state;

    let a = parseFloat(operand1);
    let b = parseFloat(operand2);
    let res = 0;

    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Error";
        break;
      case "%":
        res = a % b;
        break;
      case "**":
        res = a ** b;
        break;
      default:
        res = "";
    }

    this.setState({
      result: res,
      operand1: res.toString(),
      operand2: "",
      operator: ""
    });
  };

  clearAll = () => {
    this.setState({
      operand1: "",
      operand2: "",
      operator: "",
      result: ""
    });
  };

  render() {
    const { operand1, operand2, operator } = this.state;

    return (
      <div style={styles.container}>
        <h2>React Calculator (Class Component)</h2>

        <input
          type="text"
          value={operand1 + operator + operand2}
          readOnly
          style={styles.display}
        />

        <div style={styles.grid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => this.handleNumberClick(num)} style={styles.btn}>
              {num}
            </button>
          ))}

          <button onClick={() => this.handleOperatorClick("+")} style={styles.btn}>+</button>
          <button onClick={() => this.handleOperatorClick("-")} style={styles.btn}>-</button>
          <button onClick={() => this.handleOperatorClick("*")} style={styles.btn}>*</button>
          <button onClick={() => this.handleOperatorClick("/")} style={styles.btn}>/</button>
          <button onClick={() => this.handleOperatorClick("%")} style={styles.btn}>%</button>
          <button onClick={() => this.handleOperatorClick("**")} style={styles.btn}>**</button>

          <button onClick={this.calculateResult} style={styles.equalBtn}>=</button>
          <button onClick={this.clearAll} style={styles.clearBtn}>C</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    border: "2px solid #000",
    borderRadius: "10px"
  },
  display: {
    width: "100%",
    height: "40px",
    fontSize: "18px",
    marginBottom: "10px",
    textAlign: "right"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px"
  },
  btn: {
    padding: "10px",
    fontSize: "16px"
  },
  equalBtn: {
    gridColumn: "span 2",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "#fff"
  },
  clearBtn: {
    gridColumn: "span 2",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#f44336",
    color: "#fff"
  }
};

export default Calculator;
