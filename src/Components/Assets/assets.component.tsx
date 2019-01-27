import * as React from 'react';
import { ToggleButton } from './ToggleButton/toggleButton.component';
import Modal from './Modal/Modal';
import Backdrop from './Backdrop/Backdrop';
class AssetsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    onToggle = (...args: []) => {
        console.log('onToogle', ...args);
    }
    render() {
        return (
            <div className="p-5">
                This is AssetsComponent
                <ToggleButton onToggle={this.onToggle} initValue={false}></ToggleButton>
                <Backdrop show={this.state.showModal} click={() => {
                    this.setState({ showModal: false })
                }} />
                <Modal show={this.state.showModal} />
                <button onClick={() => {
                    this.setState({
                        showModal: true
                    })
                }}>Show</button>
            </div>
        )
    }
}
export default AssetsComponent;