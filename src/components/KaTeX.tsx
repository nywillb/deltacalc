import * as React from "react";
import * as katex from "katex";

export interface KaTeXProps {
    tex: string
}

export default class KaTeX extends React.Component<KaTeXProps, {}> {
    private ref: React.RefObject<HTMLElement>;

    constructor(props: KaTeXProps) {
        super(props);
        this.ref = React.createRef()
    }

    componentDidMount(): void {
        katex.render(this.props.tex, this.ref.current as HTMLElement, {
            throwOnError: false
        })
    }

    componentDidUpdate(prevProps: Readonly<KaTeXProps>, prevState: Readonly<{}>, snapshot?: any): void {
        katex.render(this.props.tex, this.ref.current as HTMLElement, {
            throwOnError: false
        })
    }

    render(): React.ReactElement {
        return <span ref={this.ref}>{this.props.tex}</span>
    }
}