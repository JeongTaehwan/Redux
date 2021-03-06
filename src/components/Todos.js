import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) { //
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
});

const Todolist = React.memo(function Todolist({ todos, onToggle }) { //todos는 여러개의 todo가 들어간 배열
    return (
        <ul>
            {
                todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
                ))}
        </ul>
    );
});

function Todos({ todos, onCreate, onToggle }) {
    const [text, setText] = useState(''); // 
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="할 일을 입력하세요..." />
                <button type="submit">등록</button>
            </form>
            <Todolist
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    );
}

export default React.memo(Todos);