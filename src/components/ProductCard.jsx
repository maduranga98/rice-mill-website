"use client";

import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

const ProductCard = ({ product, onLearnMore }) => {
  const getWeightColor = (weight) => {
    if (weight === "5") return "bg-blue-500";
    if (weight === "10") return "bg-green-500";
    if (weight === "25") return "bg-purple-500";
    return "bg-amber-500";
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-[4/5] bg-gray-50 p-4">
        <Image
          src={product.image}
          alt={`${product.name} ${product.size}`}
          fill
          style={{ objectFit: "contain" }}
          className="hover:scale-105 transition-transform duration-300"
        />

        {/* Weight Badge */}
        <div
          className={`absolute top-3 right-3 ${getWeightColor(
            product.weight
          )} text-white px-3 py-1 rounded-full text-sm font-bold`}
        >
          {product.size}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button variant="primary" className="w-full">
            Order Now
          </Button>
          <button
            onClick={() => onLearnMore(product)}
            className="w-full text-sm text-green-600 hover:text-green-700 font-medium"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
