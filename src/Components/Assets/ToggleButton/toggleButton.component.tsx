import * as React from 'react';
import './toggleButton.component.scss'
export class ToggleButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            on: this.props.initValue
        }
        console.log(this.state);
    }
    toggleButton = (e: any) => {
        this.setState({ on: !this.state.on }, () => {
            this.props.onToggle(this.state.on);
        })
    }
    render() {
        return (
            <div className="toggleWrapper" onClick={this.toggleButton}>
                <div className={`toggleSlip ${this.state.on ? 'on' : ''}`}>

                </div>
            </div>
        )
    }
}