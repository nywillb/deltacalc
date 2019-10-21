import * as React from "react";
// @ts-ignore
import nerdamer = require("nerdamer");
import "nerdamer/Algebra"
import "nerdamer/Calculus"
import "nerdamer/Solve"
import "nerdamer/Extra"
import KaTeX from "./KaTeX";
import TexInput from "./TexInput";

export interface AppState {
    equation: string
}

export default class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            equation: "x = (-b + sqrt(b^2 - 4*a*c))/(2a)"
        }
    }

    updateEquation(equation: string) {
        this.setState({
                equation: equation
            }
        )
    }

    render() {
        try {
            const eq = nerdamer(this.state.equation);
            const vars = eq.variables();
            // @ts-ignore
            const sols = vars.map((v, i) => <li key={i}><KaTeX tex={`${v} = ${nerdamer.solve(eq, v).toTeX()}`}/></li>);
            return <div>
                <TexInput onChange={this.updateEquation.bind(this)} value={this.state.equation}/>
                <hr/>
                <ul>{sols}</ul>
            </div>;
        } catch (e) {
            return <div>
                <TexInput onChange={this.updateEquation.bind(this)} value={this.state.equation}/>
            </div>
        }
    }
}