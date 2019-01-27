import * as React from 'react';

const asyncComponent = (importComponent: any) => {
    return class extends React.Component {
        
        state: any = {
            component: null
        }
        componentDidMount() {
            importComponent()
                .then((cmp: any) => {
                    this.setState({ component: cmp.default });
                });
        }

        render() {
            const C = this.state.component;
            console.log(C);
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;