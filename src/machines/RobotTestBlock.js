import React from 'react'
import { useMachine } from 'react-robot';
import RobotMachine from './RobotMachine';
import { Frame } from './parts/Frame';
import { Red } from './parts/Red';
import { Yellow } from './parts/Yellow';
import { Green } from './parts/Green';
import { Gray } from './parts/Gray';

export default function RobotTestBlock() {

    const [current, send] = useMachine(RobotMachine);

    return (
        <Frame>
            <h3>RobotTest <small>component Block</small></h3>
            <button onClick={() => send('next')}>next</button>
            <h4>Current <small>{current.name}</small></h4>
            <Block test={current.name  === "red"} fail={<Gray/>}><Red/></Block>
            <Block test={current.name === "yellow"} fail={<Gray/>}><Yellow/></Block>
            <Block test={current.name === "green"} fail={<Gray/>}><Green/></Block>
        </Frame>
    )

}

function Block({test, children, fail = undefined}) {
    return test ? children : fail
}

