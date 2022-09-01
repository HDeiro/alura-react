import React from "react";
import { Task } from "../../types/task";
import Button from "../button";
import style from './form.module.scss';
import { v4 as uuidV4 } from 'uuid';

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
}

class Form extends React.Component<FormProps> {
    state = {
        name: '',
        time: '00:00'
    };

    cleanState() {
        this.setState({
            name: '',
            time: '00:00'
        })
    }

    addNewTask(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        this.props.setTasks((oldTasks: Task[]) => [
            ...oldTasks, 
            {
                ...this.state,
                id: uuidV4(),
                selected: false,
                completed: false,
            }
        ]);
        this.cleanState();
    }

    render() {
        return (
            <form 
                onSubmit={this.addNewTask.bind(this)}
                className={style.form}>
                <div className={style.inputContainer}>
                    <label htmlFor="taskName">
                        Task Name
                    </label>
                    <input 
                        value={this.state.name}
                        onChange={evt => this.setState({ ...this.state, name: evt.target.value })}
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
                        value={this.state.time}
                        onChange={evt => this.setState({ ...this.state, time: evt.target.value })}
                        required
                        step="1"
                        min="00:00:01"
                        max="01:30:00"
                        type="time" 
                        name="taskTime" 
                        id="taskTime"/>
                </div>
                <Button type="submit" label="Criar Tarefa"/>
            </form>
        );
    }
};

export default Form;