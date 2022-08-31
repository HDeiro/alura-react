import React from 'react';
import style from './button.module.scss';

interface ButtonProps {
    label: string
}

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button className={style.submitButton}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;