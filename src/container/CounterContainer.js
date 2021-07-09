import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux'; // useSelector는 상태를 조회할 때 사용
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {
    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
};

// connect라는 함수를 사용할 떈 두가지 함수를 선언해주어야 함
const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
});

const mapDispatchToProps = {
    increase,
    decrease,
    setDiff
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);