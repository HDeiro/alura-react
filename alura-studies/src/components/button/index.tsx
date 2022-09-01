import style from './button.module.scss';

interface ButtonProps {
    label: string;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

function Button({ 
    onClick, 
    label, 
    type = 'button' 
}: ButtonProps) {
    return (
        <button 
            onClick={onClick}
            type={type}
            className={style.submitButton}>
            {label}
        </button>
    )
};

export default Button;