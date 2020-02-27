
import { createMachine, state, transition } from 'robot3';

const RobotMachine = createMachine({
    red: state(
        transition('next', 'yellow')
    ),
    yellow: state(
        transition('next', 'green')
    ),
    green: state(
        transition('next', 'red')
    ),
});

export default RobotMachine