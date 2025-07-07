export const searchBooks = async (query) => {
  const apiKey = "AIzaSyD5fWCKJxYS5AZyC9yBEsXyAoDBQ90JiL8";

  // Check if API key is configured
  if (!apiKey || apiKey === "your_api_key_here") {
    console.error(
      "Google Books API key is not configured. Please add VITE_GOOGLE_BOOKS_API_KEY to your .env file"
    );
    return [];
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&key=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
