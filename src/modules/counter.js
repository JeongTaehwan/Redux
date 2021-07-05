// 액션 타입
const SET_DIFF = 'counter/SET_DIFF'; // 카운터에서 몇 식 더할지 정하는 액션 | 앞에 "counter/"를 붙이는 이유는 다른 모듈과 겹치지 않기 위해서이다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초깃값
const initialState = {
    number: 0,
    diff: 1,
};

// 리듀서(카운터 모듈)
export default function counter(state = initialState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff, // 현재의 값에 몇 식 더하는 지 정하는 액션인 SET_DIFF를 더해줌
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            };
        default:
            return state;
    }
}