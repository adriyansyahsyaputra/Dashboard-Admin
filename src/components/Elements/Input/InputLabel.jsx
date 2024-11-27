import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

export default function InputLabel({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
}

InputLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
