import React from "react";
import PropTypes from "prop-types";

export default function CardProduct({
  productName,
  type,
  rating,
  reviewer,
  price,
}) {
  return (
    <div className="bg-slate-50 rounded-md shadow-md border h-max">
      <div>
        <img
          src=""
          alt=""
          className="w-full h-32 bg-red-400 object-cover rounded-t-md"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold">{productName}</h3>
        <p className="text-xs font-thin lg:text-sm mb-1">{type}</p>
        <p className="text-sm font-medium">
          {rating} ({reviewer})
        </p>
        <p className="text-base mt-3 font-medium">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  productName: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  reviewer: PropTypes.number,
  price: PropTypes.number,
};
