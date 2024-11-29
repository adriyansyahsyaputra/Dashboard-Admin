import React, { useState, useRef } from "react";
import InputLabel from "../Elements/Input/InputLabel";
import { Upload, Camera, X, AlertCircle } from "lucide-react";
import PropTypes from "prop-types";

export default function FormUpload({ handleAddProduct, setIsUploadModalOpen }) {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [status, setStatus] = useState("Ready")
  const [quantity, setQuantity] = useState(0)
  const imageInputRef = useRef(null)
   const [counter, setCounter] = useState(51);

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
  ];

  const generateCustomID = (prefix) => {
    const id = `${prefix}${counter.toString().padStart(3, "0")}`;
    setCounter((prev) => prev + 1); // Increment counter setelah digunakan
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat objek produk baru
    const newProduct = {
      id: generateCustomID("PRD"),
      name,
      price: parseFloat(price),
      type,
      status,
      quantity: parseInt(quantity),
      images: images.map((img) => img.file), // Mengambil file gambar
    };

    // Kirim data produk ke komponen induk
    handleAddProduct(newProduct);

    // Reset form
    setName("");
    setPrice("");
    setQuantity("");
    setType("");
    setStatus("Ready");
    setImages([]);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-4xl mx-4 rounded-xl shadow-2xl">
          <div className="relative">
            <button onClick={() => setIsUploadModalOpen(false)}
            >
              <X size={16} className="absolute right-4 top-4" />
            </button>
          </div>
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
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-gray-700 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-gray-700 mb-2"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      placeholder="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select
                      name="category"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Ready">Ready</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
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
        </div>
      </div>
    </>
  );
}

FormUpload.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
  setIsUploadModalOpen: PropTypes.func.isRequired,
};