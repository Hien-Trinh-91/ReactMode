import * as React from 'react';
import { ToggleButton } from './ToggleButton/toggleButton.component';
class AssetsComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }
    onToggle = (...args: []) => {
        console.log('onToogle', ...args);
    }
    render() {
        return (
            <div className="p-5">
                This is AssetsComponent
                <ToggleButton onToggle={this.onToggle} initValue={false}></ToggleButton>
            </div>
        )
    }
}
export default AssetsComponent;