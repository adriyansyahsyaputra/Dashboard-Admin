import React from "react";
import PropTypes from "prop-types";

export default function Label({ htmlFor, children, icon }) {

    return (
        <label htmlFor={htmlFor} className="text-slate-700 text-sm font-medium mb-2 flex items-center gap-2">{icon}{children}</label>
    )
}

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    icon: PropTypes.string
}