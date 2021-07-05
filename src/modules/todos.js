const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1; // 투두리스트에 필요한 다음 아이디값

export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

const initialState = [
    /*
    {
        id: 1,
        text: '예시',
        done: false or true
    }
    */
];

export default function Todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
}