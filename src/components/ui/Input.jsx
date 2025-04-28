"use client";

import React from "react";

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  className = "",
  required = false,
  as = "input",
  rows = 4,
}) => {
  const baseStyles =
    "w-full px-4 py-3 border border-amber-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-transparent text-gray-800";

  const classes = `${baseStyles} ${className}`;

  if (as === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={classes}
        required={required}
        rows={rows}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={classes}
      required={required}
    />
  );
};

export default Input;
