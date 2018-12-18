import * as React from 'react';
import * as Rx from 'rxjs';
interface IAction {
    type: string,
    payload?: any
}
const INITIAL_STATE = { value: 0 };
function counterReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return Object.assign({}, {
                value: state.value + 1
            });
        case 'DECREMENT_COUNTER':
            return Object.assign({}, {
                value: state.value - 1
            });
        default:
            return state;
    }
}
class Store {
    private observer = new Rx.BehaviorSubject(null);
    private state: null;
    constructor(private reducer: any) {
    }
    dispatch = (action: IAction) => {
        this.state = this.reducer(this.state, action);
        this.observer.next(this.state);
    }
    subscribe = (callback: any) => {
        this.observer.subscribe(value => {
            if (value) {
                callback(value);
            }
        })
    }

}

const counterStore = new Store(counterReducer);

counterStore.subscribe((value: any) => {
    console.log(value);
})
counterStore.dispatch({ type: 'INCREMENT_COUNTER' });
counterStore.dispatch({ type: 'INCREMENT_COUNTER' });
counterStore.dispatch({ type: 'INCREMENT_COUNTER' });
export default class BehaviorComponent extends React.Component<{}, any> {
    constructor(props: any) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <div>
                BehaviorComponent
            </div>
        )
    }
}



