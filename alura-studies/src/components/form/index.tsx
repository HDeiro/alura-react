import React from "react";
import Button from "../button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
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

                <div>
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
                <Button></Button>
            </form>
        );
    }
};

export default Form;