import { useState } from "react";

const InputFieldWithIcon = ({ label, type = "text", icon, id, register }) => {
    const [inputType, setInputType] = useState(type);

    const toggleVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <div className="field label prefix border round fill large">
            <i className="toggle-visibility" onClick={toggleVisibility}>
                {icon}
            </i>
            <input type={inputType} id={id} {...register(id)} />
            <label>{label}</label>
        </div>
    );
};

export default InputFieldWithIcon;
