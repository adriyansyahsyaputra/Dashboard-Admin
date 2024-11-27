import React from "react";
import PropTypes from "prop-types";

export default function Label({ htmlFor, children }) {

    return (
        <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-medium mb-2">{children}</label>
    )
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}