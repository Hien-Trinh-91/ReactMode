import * as React from 'react';
import DragItem from './dragSource.component';
import DropArea from './dropTarget.component';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './dragDrop.component.scss'
import { UserService } from '../../Service';
import { IUserService } from '../../Interface/IService';
import { TeamsComponent } from './Teams';
class DragDropComponent extends React.Component<any, any> {
  private _userService: IUserService;
  constructor(props: any) {
    super(props)
    this.state = {
      staffs: [],
      Player1SelectedStaffs: [],
      Player2SelectedStaffs: []
    }
    this._userService = UserService.Instance();
  }
  componentDidMount() {
    this._userService.findUsers({}).then((users: any) => {
      console.log(users);
      this.setState({
        ...this.props, staffs: [...users]
      })
    })
  }
  updateList = (info: any, player: any) => {
    const updatedList = this.state.staffs.filter((staff: any) => {
      return staff.id !== info.id
    });
    if (player === 'Player1') {
      this.setState(
        {
          ...this.state,
          staffs: [...updatedList],
          Player1SelectedStaffs: [...this.state.Player1SelectedStaffs, info]
        }
      )
    } else {
      this.setState(
        {
          ...this.state,
          staffs: [...updatedList],
          Player2SelectedStaffs: [...this.state.Player2SelectedStaffs, info]
        }
      )
    }
  }

  removeCharater = (info: any, player: any) => {
    let removedPlayer = {};
    // let removedIndex;
    if (player === 'Player1') {
      removedPlayer = this.state.Player1SelectedStaffs.filter((staff: any, index: any) => {
        return staff.id === Number(info);
      })[0]
      const Player1SelectedStaffs = this.state.Player1SelectedStaffs.filter((staff: any) => {
        return staff.id !== Number(info);
      })
      this.setState({
        ...this.state,
        staffs: [...this.state.staffs, removedPlayer],
        Player1SelectedStaffs: [...Player1SelectedStaffs]
      },
        () => {
          console.log(this.state);
        })
    } else {
      removedPlayer = this.state.Player2SelectedStaffs.filter((staff: any, index: any) => {
        return staff.id === Number(info);
      })[0]
      const Player2SelectedStaffs = this.state.Player2SelectedStaffs.filter((staff: any) => {
        return staff.id !== Number(info);
      })
      this.setState({
        ...this.state,
        staffs: [...this.state.staffs, removedPlayer],
        Player2SelectedStaffs: [...Player2SelectedStaffs]
      },
        () => {
          console.log(this.state);
        })
    }
    // Tai thang nay bat dong bo, chua gi da set state lai
    // this.setState({ ...this.state, staffs: [...this.state.staffs, removedPlayer] });

  }
  render() {
    return (
      <div className="dragDrop">
        <div className="row">
          {this.state.staffs.map((staff: any) => {
            return (
              <div className="col-3" key={staff.id}>
                <DragItem info={staff} />
              </div>
            )
          })}
        </div>
        <div className="row">
          <DropArea player="Player1" update={this.updateList}
            charaterList={this.state.Player1SelectedStaffs}
            removeCharater={this.removeCharater} />
          <DropArea player="Player2" update={this.updateList}
            charaterList={this.state.Player2SelectedStaffs}
            removeCharater={this.removeCharater} />
        </div>
        <div className="row">
          <TeamsComponent/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropComponent);