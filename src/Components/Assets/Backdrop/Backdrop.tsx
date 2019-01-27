import * as React from 'react';
import './Backdrop.scss'
const Backdrop = (props: any) => (
    props.show ? <div className="Backdrop" onClick={props.click}></div> : null
)

export default Backdrop