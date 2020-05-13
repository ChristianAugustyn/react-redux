import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment, decrement, add, subtract} from '../../actions'

const Counter = (props) => {
    const counter = useSelector(state => state.counter); //extracts the state from the store
    const dispatch = useDispatch();

    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label="Increment" clicked={() => dispatch(increment())} />
            <CounterControl label="Decrement" clicked={() => dispatch(decrement())}  />
            <CounterControl label="Add 5" clicked={() => dispatch(add(5))}  />
            <CounterControl label="Subtract 5" clicked={() => dispatch(subtract(5))}  />
        </div>
    );
}

export default Counter;