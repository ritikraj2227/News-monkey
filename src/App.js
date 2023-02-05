import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Addmore from "./Components/Addmore";
import Footer from "./Components/Footer";
import News from "./Components/News";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [pages, setPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const apikey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=1`, {
            headers: {
              Authorization: `Bearer ${apikey}`
            }
          }
        )
        .then((response) => setArticles(response.data.articles))
        .catch((error) => console.log(error));
    };

    fetchdata();
  }, []);

  const handlePreviousClick = () => {
    const fetchdata = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=${
            pages - 1
          }`
        )
        .then((response) => setArticles(response.data.articles))
        .catch((error) => console.log(error));
    };

    fetchdata();
    setPages(pages - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextClick = () => {
    const fetchdata = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=${
            pages + 1
          }`
        )
        .then((response) => setArticles(response.data.articles))
        .catch((error) => console.log(error));
    };
    fetchdata();
    setPages(pages + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value.toLowerCase());
    if (keyword === "") {
      const fetchdata = async () => {
        await axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=1`
          )
          .then((response) => setArticles(response.data.articles))
          .catch((error) => console.log(error));
      };

      fetchdata();
    } else {
      setArticles(
        articles.filter((article) => {
          return article.title.toLowerCase().includes(keyword);
        })
      );
    }
  };

 

  return (
    <>
      <Navbar
        keyword={keyword}
        handleChange={handleChange}
      />
      <News articles={articles} />
      <Addmore
        next={handleNextClick}
        prev={handlePreviousClick}
        page={pages}
        articles={articles}
      />
      <Footer />
    </>
  );
};

export default App;
