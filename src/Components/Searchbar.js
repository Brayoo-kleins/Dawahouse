import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Send search text to parent component
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <div
        className="input-group shadow"
        style={{
          maxWidth: "500px",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        {/* Search Icon */}
        <span
          className="input-group-text bg-primary text-white border-0"
        >
          
        </span>

        {/* Input */}
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search medicines, vitamins, syrups..."
          value={query}
          onChange={handleChange}
          style={{
            padding: "12px",
            fontSize: "16px",
          }}
        />

        {/* Clear Button */}
        {query && (
          <button
            className="btn btn-danger"
            onClick={() => {
              setQuery("");
              onSearch("");
            }}
          >
            
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;