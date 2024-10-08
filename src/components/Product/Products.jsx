import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page) => {
    try {
      // Gọi API với Axios
      const res = await axios.get(
        `http://localhost:5000/api/v1/product?page=${page}`
      );

      // Truy xuất dữ liệu trả về từ API (res.data.response)
      const data = res.data.response;

      // Kiểm tra nếu data.data là mảng
      if (Array.isArray(data.data)) {
        setProducts(data.data); // Cập nhật danh sách sản phẩm
        setTotalPages(data.totalPages); // Cập nhật tổng số trang
      } else {
        throw new Error("Expected an array of products");
      }
    } catch (error) {
      console.error("Error fetching products:", error); // Bắt và log lỗi
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <div className="ContentProducts">
        <div className="ProductMain">
          <h2>Danh sách sản phẩm</h2>
          <div className="Product-all">
            {products.map((product) => (
              <div className="product-item" key={product.id_pr}>
                <div className="img-pro">
                  <Link to={`/product/${product.id_pr}`}>
                    <img
                      src={product.imageProduct}
                      alt={product.productName}
                      className="image-pro"
                      width="200"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <h3>{product.productName}</h3>
                  <div className="price-box">
                    <span> Giá: {product.priceProduct} VND</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phantrang */}
        <div className="page-nation">
          <Pagination
            color="primary"
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            siblingCount={10} // Số lượng trang hiển thị bên cạnh trang hiện tại
            boundaryCount={5} // Số lượng trang hiển thị ở đầu và cuối
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
