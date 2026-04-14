import React from "react";
function SearchBar({ products, setFilteredProducts }) {
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();

        const filtered = products.filter((item) =>
            item.title.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
    };

    return (
        <input type="text"
            placeholder="Search products..."
            className="form-control my-3"
            onChange={handleSearch}
        />
    );
}

export default SearchBar;