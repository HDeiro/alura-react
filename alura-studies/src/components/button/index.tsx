import React from 'react';
import style from './button.module.scss';

interface ButtonProps {
    label: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                type={this.props.type || 'button'}
                className={style.submitButton}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;