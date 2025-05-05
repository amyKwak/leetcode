import React, { useState, useEffect, useRef, useCallback } from "react";

const Feed = () => {
  // State to store fetched items
  const [items, setItems] = useState([]);

  // State to track if items are being loaded
  const [loading, setLoading] = useState(false);

  // State to determine if there are more items to load
  const [hasMore, setHasMore] = useState(true);

  // Ref to keep track of the current page number
  const page = useRef(1);

  // Ref for the sentinel (loader) element
  const loaderRef = useRef(null);

  // Function to fetch more items
  const fetchItems = useCallback(async () => {
    if (loading) return; // Avoid fetching if already loading

    setLoading(true);
    try {
      const response = await fetch(
        `https://example.com/api/feed?page=${page.current}`
      );
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data.items]); // Append new items
      setHasMore(data.hasMore); // Update flag based on response
      page.current += 1; // Increment page number
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  }, [loading]);

  // Effect to set up IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchItems(); // Fetch more items when the loader is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the loader is visible
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader); // Start observing the loader element
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader); // Clean up observer
      }
    };
  }, [fetchItems, hasMore]); // Dependencies for useEffect

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div ref={loaderRef} style={{ height: "1px" }}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Feed;
