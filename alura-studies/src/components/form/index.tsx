import React, { useState } from "react";
import { Task } from "../../types/task";
import Button from "../button";
import style from './form.module.scss';
import { v4 as uuidV4 } from 'uuid';

const DEFAULT_TIME = '00:00:00';

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function Form({ setTasks }: FormProps) {
    const [ name, setName ] = useState('');
    const [ time, setTime ] = useState(DEFAULT_TIME);

    function cleanState() {
        setName('');
        setTime(DEFAULT_TIME);
    }

    function addNewTask(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        setTasks((oldTasks: Task[]) => [
            ...oldTasks, 
            {
                name,
                time,
                id: uuidV4(),
                selected: false,
                completed: false,
            }
        ]);
        cleanState();
    }

    return (
        <form 
            onSubmit={addNewTask}
            className={style.form}>
            <div className={style.inputContainer}>
                <label htmlFor="taskName">
                    Task Name
                </label>
                <input 
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                    required
                    placeholder="What you want to study?"
                    type="text" 
                    name="taskName" 
                    id="taskName"/>
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="taskTime">
                    Task Time
                </label>
                <input
                    value={time}
                    onChange={evt => setTime(evt.target.value)}
                    required
                    step="1"
                    min="00:00:01"
                    max="01:30:00"
                    type="time" 
                    name="taskTime" 
                    id="taskTime"/>
            </div>

            <Button 
                type="submit" 
                label="Create Task"/>
        </form>
    );
}

export default Form;