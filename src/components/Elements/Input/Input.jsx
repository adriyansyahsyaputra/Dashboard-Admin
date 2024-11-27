import React from "react";
import PropTypes from "prop-types";

export default function Input({ type, id, placeholder, value, onChange, className }) {

    return (
        <input type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-lg block placeholder:text-slate-400 focus:outline-none ${className}`} />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}