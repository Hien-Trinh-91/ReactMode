import * as React from 'react';
import { DropTarget } from 'react-dnd';
import constants from './constants';

const dropAreaSpec = {
    drop(props: any, monitor: any, component: any) {
        // console.log(props);
        props.update(monitor.getItem(), props.player);
        return {
            name: props.player
        }
    }
}

let collect = (connect: any, monitor: any) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class DropArea extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    removeCharater = (event: any) => {
        const removedId = event.target.id;
        this.props.removeCharater(removedId, this.props.player);
    }
    render() {
        const { canDrop, isOver,
            connectDropTarget, player,
            charaterList
        }: any = this.props;
        const isActive = canDrop && isOver;
        let backgroundColor = '#FFFFFF';
        if (isActive) {
            backgroundColor = '#F7F7BD';
        } else if (canDrop) {
            backgroundColor = '#F7F7F7';
        }

        const style = {
            backgroundColor: backgroundColor
        };

        return connectDropTarget(
            <div className="col-6">
                <div className='player' style={style}>
                    {isActive ?
                        'Falling down' :
                        `${player} select your charater`
                    }
                    <div>
                        {charaterList.map((charater: any, index: any) => {
                            return (
                                <div key={index} className="charater">
                                    <div onClick={this.removeCharater} id={charater.id}>
                                        {charater.fullName}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        );
    }
}

export default DropTarget(constants.ItemType, dropAreaSpec, collect)(DropArea);