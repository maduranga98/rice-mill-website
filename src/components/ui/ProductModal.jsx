"use client";

import React from "react";
import Image from "next/image";
import { X, Star, Package, CheckCircle } from "lucide-react";
import Button from "./Button";

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full max-h-[85vh] flex flex-col shadow-2xl">
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white rounded-t-lg">
          <h2 className="text-lg font-bold text-gray-900">
            {product.name} - {product.size}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.nameMultilingual}
                fill
                style={{ objectFit: "contain" }}
                className="p-4"
              />
              {/* Weight Badge */}
              <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                {product.size}
              </div>
            </div>

            {/* Product Names in Multiple Languages */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">
                Product Name:
              </h3>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {product.nameMultilingual}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">
                About This Product:
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">
                Key Features:
              </h3>
              <div className="space-y-2">
                {product.labels.map((label, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Specifications */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">
                Product Details:
              </h3>
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Package Size:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {product.size}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Rice Type:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {product.type === "samba" ? "Samba Kakulu" : "Sudu Kakulu"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Origin:</span>
                  <span className="text-sm font-medium text-gray-900">
                    Sri Lanka
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Quality:</span>
                  <span className="text-sm font-medium text-gray-900">
                    Premium Grade
                  </span>
                </div>
              </div>
            </div>

            {/* Quality Badge */}
            {product.tagline && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    Why Choose This:
                  </span>
                </div>
                <p className="text-sm text-green-700 italic">
                  "{product.tagline}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-4 border-t bg-white rounded-b-lg">
          <div className="space-y-3">
            <Button variant="primary" className="w-full">
              <Package className="w-4 h-4 mr-2" />
              Order {product.name} - {product.size}
            </Button>
            <button
              onClick={onClose}
              className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
