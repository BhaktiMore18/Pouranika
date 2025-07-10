/**
 * @function searchBooks
 * @param {*} query the search query for books
 * @param {*} startIndex the index to start the search from
 * @param {*} maxResults the maximum number of results to return
 * @returns {Promise<{ items: Array, totalItems: number }>} the search results
 * @description This function searches for books using the Google Books API.
 * It takes a query, start index, and maximum results as parameters,
 * and returns a promise that resolves to an object containing the items
 */

export const searchBooks = async (
  query,
  startIndex = 0,
  maxResults = 10
) => {
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  if (!apiKey || apiKey === "your_api_key_here") {
    console.error(
      "Google Books API key is not configured. Please add VITE_GOOGLE_BOOKS_API_KEY to your .env file"
    );
    return { items: [], totalItems: 0 };
  }

  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Google Books API Error:", errorData);
      throw new Error(
        `HTTP error! status: ${res.status}. ${errorData.error ? errorData.error.message : ""
        }`
      );
    }

    const data = await res.json();

    return {
      items: data.items || [],
      totalItems: data.totalItems || 0,
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { items: [], totalItems: 0 };
  }
};