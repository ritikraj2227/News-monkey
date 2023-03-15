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
		fetchdata();
	}, []);

	const fetchdata = async () => {
		await axios
			.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=${pages}`)
			.then((response) => setArticles(response.data.articles))
			.catch((error) => console.log(error));
	};

	const handlePreviousClick = () => {
		const fetchdata = async () => {
			await axios
				.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=${pages - 1}`)
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
				.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apikey=${apikey}&page=${pages + 1}`)
				.then((response) => setArticles(response.data.articles))
				.catch((error) => console.log(error));
		};
		fetchdata();
		setPages(pages + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleChange = (searchValue) => {
		setKeyword(searchValue.toLowerCase());

		if (searchValue === "") {
			fetchdata();
		} else {
			const filteredData = articles.filter((article) => {
				return article.title.toLowerCase().includes(keyword);
			});
			setArticles(filteredData);
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
