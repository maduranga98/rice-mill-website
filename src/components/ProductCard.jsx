"use client";

import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-amber-50 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <h3 className="text-xl font-semibold text-green-900 mb-2">
        {product.name}
      </h3>

      <div className="mb-4 text-gray-600">{product.sizes.join(" · ")}</div>

      <Button variant="primary" className="w-full">
        Order Now
      </Button>
    </div>
  );
};

export default ProductCard;
