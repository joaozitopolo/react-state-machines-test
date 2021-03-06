import React from 'react'
import { useMachine } from 'react-robot';
import RobotMachine from './RobotMachine';
import { Frame } from './parts/Frame';
import { Red } from './parts/Red';
import { Yellow } from './parts/Yellow';
import { Green } from './parts/Green';
import { Gray } from './parts/Gray';

export default function RobotTest() {

    const [current, send] = useMachine(RobotMachine);

    return (
        <Frame>
            <h3>RobotTest <small>component State</small></h3>
            <button onClick={() => send('next')}>next</button>
            <h4>Current <small>{current.name}</small></h4>
            <State current={current} when="red" fail={<Gray/>}><Red/></State>
            <State current={current} when="yellow" fail={<Gray/>}><Yellow/></State>
            <State current={current} when="green" fail={<Gray/>}><Green/></State>
        </Frame>
    )

}

function State({current, when, children, fail = undefined}) {
    return current && current.name === when ? children : fail
}

