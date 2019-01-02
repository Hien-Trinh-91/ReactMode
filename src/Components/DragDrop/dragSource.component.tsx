import * as React from 'react';
import constants from './constants';
import { DragSource } from 'react-dnd';
import { environment } from '../../Environments/env.dev';

const dragItemsSpec = {
    beginDrag(props: any) {
        return { ...props.info }
    },

    endDrag(props: any, monitor: any) {
        // const dragItem = monitor.getItem();
        // const dropResult = monitor.getDropResult();
    }
}

let collect = (connect: any, monitor: any) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class DragItem extends React.Component {
    render() {
        const { info, isDragging, connectDragSource }: any = this.props;
        const opacity = isDragging ? 0.4 : 1;
        const style = {
            opacity: opacity
        }
        return (
            connectDragSource(
                <div className='dragItem' style={style}>
                    <div>
                        <img src={`${environment.API_BASE}${info.avatar}`} alt="" />
                    </div>
                    <div className='info'>
                        {info.id}. {info.fullName}

                    </div>
                </div>
            )
        );
    }
}

export default DragSource(constants.ItemType, dragItemsSpec, collect)(DragItem);