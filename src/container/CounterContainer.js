import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux'; // useSelector는 상태를 조회할 때 사용
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }));

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
};

export default CounterContainer;