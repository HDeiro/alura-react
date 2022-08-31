import React from "react";
import Button from "../button";
import style from './form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.form}>
                <div className={style.inputContainer}>
                    <label htmlFor="taskName">
                        Task Name
                    </label>
                    <input 
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
                        required
                        step="1"
                        min="00:00:01"
                        max="01:30:00"
                        type="time" 
                        name="taskTime" 
                        id="taskTime"/>
                </div>
                <Button />
            </form>
        );
    }
};

export default Form;