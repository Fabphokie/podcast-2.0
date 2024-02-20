import React, { useState, useEffect } from "react";

export default function Preview({ selectedShow }) {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : selectedShow ? (
                <div>
                    <h2>{selectedShow.title}</h2>
                    <p>{selectedShow.description}</p>
                    {/* Display other details like seasons, episodes, genres, etc. */}
                </div>
            ) : null}
        </div>
    );
}
