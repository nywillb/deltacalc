import * as React from "react";
// @ts-ignore
import nerdamer = require("nerdamer");
import KaTeX from "./KaTeX";

export interface TexInputProps {
    onChange: (equation: string) => void,
    value: string
}

export interface TexInputState {
    tex: string
}

export default class TexInput extends React.Component<TexInputProps, TexInputState> {
    constructor(props: TexInputProps) {
        super(props)
    }

    handleChange(event: React.FormEvent) {
        // @ts-ignore
        this.props.onChange(event.target.value)
    }

    render() {
        try {
            return <div>
                <input name={"equation"} value={this.props.value} onChange={this.handleChange.bind(this)}/>
                <hr/>
                <KaTeX tex={nerdamer(this.props.value).toTeX()}/>
            </div>
        } catch (e) {
            return <div>
                <input name={"equation"} value={this.props.value} onChange={this.handleChange.bind(this)}/>
                <hr/>
                Invalid Equation
            </div>
        }
    }
}