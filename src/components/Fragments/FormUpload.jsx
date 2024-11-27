import React, { useState, useRef } from "react";
import InputLabel from "../Elements/Input/InputLabel";
import { Upload, Camera, X, AlertCircle } from "lucide-react";

export default function FormUpload() {
  const [images, setImages] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    status: "active",
    quantity: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const imageInputRef = useRef(null);
  const validateForm = () => {
    const newErrors = {};
    if (!productData.name) newErrors.name = "Product name is required";
    if (!productData.price) newErrors.price = "Price is required";
    if (!productData.category) newErrors.category = "Category is required";
    if (!productData.quantity) newErrors.quantity = "Quantity is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (event) => {
    const newImages = Array.from(event.target.files)
      .slice(0, 5 - images.length)
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const categories = [
    "T-Shirts",
    "Shirts",
    "Jackets",
    "Pants",
    "Dresses",
    "Skirts",
    "Accessories",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Product submitted:", productData);
      // Implement actual submission logic here
    }
  };

  return (
    <>
      <form className="p-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <div>
            <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 text-center relative">
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                id="image-upload"
                ref={imageInputRef}
                onChange={handleImageUpload}
                disabled={images.length >= 5}
              />
              <label
                htmlFor="image-upload"
                className={`cursor-pointer flex flex-col items-center ${
                  images.length >= 5 ? "opacity-50" : ""
                }`}
              >
                <Camera className="text-blue-500 w-12 h-12 mb-4" />
                <p className="text-gray-600">
                  {images.length > 0
                    ? `${5 - images.length} more image(s) can be added`
                    : "Click to upload product images"}
                </p>
              </label>
            </div>

            {/* Image Preview */}
            <div className="flex flex-wrap gap-2 mt-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={img.preview}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-4">
            <div>
              <InputLabel
                htmlFor="name"
                label="Product Name"
                type="text"
                id="name"
                placeholder="product name"
                value={productData.name}
                onChange={(e) =>
                  setProductData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className={`${
                  errors.name
                    ? "border-red-500 focus:ring-2 focus:ring-red-300"
                    : "focus:ring-2 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle size={16} className="mr-2" /> {errors.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputLabel
                  htmlFor="price"
                  label="Price"
                  type="number"
                  id="price"
                  placeholder="price"
                  value={productData.price}
                  onChange={(e) =>
                    setProductData((prev) => ({
                      ...prev,
                      price: e.target.value,
                    }))
                  }
                  className={`${
                    errors.price
                      ? "border-red-500 focus:ring-2 focus:ring-red-300"
                      : "focus:ring-2 focus:ring-blue-500"
                  }`}
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" /> {errors.price}
                  </p>
                )}
              </div>

              <div>
                <InputLabel
                  htmlFor="quantity"
                  label="Quantity"
                  type="number"
                  id="quantity"
                  placeholder="quantity"
                  value={productData.quantity}
                  onChange={(e) =>
                    setProductData((prev) => ({
                      ...prev,
                      quantity: e.target.value,
                    }))
                  }
                  className={`${
                    errors.quantity
                      ? "border-red-500 focus:ring-2 focus:ring-red-300"
                      : "focus:ring-2 focus:ring-blue-500"
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" /> {errors.quantity}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={productData.category}
                  onChange={(e) =>
                    setProductData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none 
                      ${
                        errors.category
                          ? "border-red-500 focus:ring-2 focus:ring-red-300"
                          : "focus:ring-2 focus:ring-blue-500"
                      }`}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-2" /> {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={productData.status}
                  onChange={(e) =>
                    setProductData((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={productData.description}
                onChange={(e) =>
                  setProductData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Product description"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
            >
              <Upload className="mr-2" /> Upload Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
