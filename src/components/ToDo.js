import React, { useState } from 'react';
import ReactLogo from '../assets/react.png';
import JestLogo from '../assets/jest.png';
import ToDoItem from './ToDoItem';

const ToDo = () => {
    const [list, setList] = useState([
        { id: 1, text: 'clean the house' },
        { id: 2, text: 'buy milk' },
    ]);
    const [toDo, setToDo] = useState('');

    const createNewToDoItem = () => {
        //validate todo
        if (!toDo) {
            alert('Please enter a todo!');
            return;
        }
        const newId = Math.max(...list.map((t) => t.id)) + 1;
        const newToDo = { id: newId, text: toDo };
        setList([...list, newToDo]);
        setToDo('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            createNewToDoItem();
        }
    };

    const handleInput = (e) => {
        setToDo(e.target.value);
    };

    const deleteItem = (todo) => {
        setList(list.filter((item) => item !== todo));
    };

    return (
        <div className='ToDo'>
            <img className='Logo' src={ReactLogo} alt='logo' />
            <img className='Logo' src={JestLogo} alt='logo' />
            <h1 className='ToDo-Header'>React To Do</h1>
            <h3 className='ToDo-Subheader'>tested with Jest + Enzyme</h3>
            <div className='ToDo-Container'>
                <div className='ToDo-Content'>
                    {list.map((item) => {
                        return (
                            <ToDoItem
                                key={item.id}
                                item={item}
                                deleteItem={deleteItem}
                            />
                        );
                    })}
                </div>

                <div data-testid='ToDoInput' className='ToDoInput'>
                    <input
                        type='text'
                        value={toDo}
                        onChange={handleInput}
                        onKeyPress={handleKeyPress}
                    />
                    <button className='ToDo-Add' onClick={createNewToDoItem}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
