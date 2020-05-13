const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

const add = props => {
    return {
        type: 'ADD',
        value: props
    }
}

const subtract = props => {
    return {
        type: 'SUBTRACT',
        value: props
    };
}

export {
    increment,
    decrement,
    add,
    subtract
}