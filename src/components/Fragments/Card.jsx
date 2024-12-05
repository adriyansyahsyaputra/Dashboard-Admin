import React from "react";
import PropTypes from "prop-types";

export default function Card({ color, title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <div className={`w-12 h-12 ${color} rounded-lg mb-4`}></div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};
