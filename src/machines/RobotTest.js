import React from 'react'
import { useMachine } from 'react-robot';
import RobotMachine from './RobotMachine';
import styled from 'styled-components'

export default function RobotTest() {

    const [current, send] = useMachine(RobotMachine);

    return (
        <div>
            <h3>RobotTest</h3>
            <button onClick={() => send('next')}>next</button>
            <h4>State <small>{current.name}</small></h4>
            <Red/>
        </div>
    )

}

function Block({current, when, children, dflt = undefined}) {
    return current && current.name === when ? children : dflt
}

const Red = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 10px;
`