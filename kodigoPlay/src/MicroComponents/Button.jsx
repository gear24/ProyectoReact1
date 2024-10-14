import "beercss";
import "material-dynamic-colors";

const Button = ({ label, onClick, className }) => {
    return (
        <button className={`button round large ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
