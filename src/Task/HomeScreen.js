import React, { useEffect, useState } from "react";
import "./Screen.css";

function HomeScreen() {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("ascending");

    useEffect(() => {
        getList();
    }, []);

    function getList() {
        fetch("https://api.publicapis.org/entries")
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp.entries);
                });
            })
    }

    function handleSearchInputChange(e) {
        setSearchText(e.target.value);
    }

    function handleSortOrderChange(e) {
        setSortOrder(e.target.value);
    }

    function filterAndSortData() {
        let filteredData = data.filter((item) =>
            item.API.toLowerCase().includes(searchText.toLowerCase())
        );
        if (sortOrder === "ascending") {
            filteredData.sort((a, b) => a.API.localeCompare(b.API));
        } else {
            filteredData.sort((a, b) => b.API.localeCompare(a.API));
        }
        return filteredData;
    }

    return (
        <div>
            <div className="search-bar">
                <input type="text" placeholder="Search by API name..." value={searchText} onChange={handleSearchInputChange} />
                <select value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="ascending">A-Z</option>
                    <option value="descending">Z-A</option>
                </select>
            </div>
            <div className="container">
                {
                    filterAndSortData().map((item, i) => (
                        <div key={i} className="data-box">
                            <div>
                                <strong>API Name:</strong> {item.API}
                            </div>
                            <div>
                                <strong>Description:</strong> {item.Description}
                            </div>
                            <div>
                                <strong>HTTPS:</strong>{" "}
                                <a href={item.Link} target="blank" >
                                    {item.Link}
                                </a>
                            </div>
                            <div>
                                <strong>Category:</strong> {item.Category}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HomeScreen;
