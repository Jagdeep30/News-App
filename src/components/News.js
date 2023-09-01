import { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState();
  
  
  useEffect(()=>{
    updateNews();
  },[]);

  const capitalize = (a) => {
    return a.slice(0, 1).toUpperCase() + a.slice(1);
  };

  const updateNews = () => {
    props.setProgress(10);
    console.log("load")
    let p = fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    );
    p.then((response) => {
      props.setProgress(40);
      return response.json();
    }).then((response) => {
      props.setProgress(70);
      setArticles(response.articles);
      setTotalResults(response.totalResults);
      props.setProgress(100);
    });
  };

  const fetchMoreData = () => {
    setPage(page+1);

    let p = fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    );
    p.then((response) => {
      return response.json();
    }).then((response) => {
      setArticles(articles.concat(response.articles));
      setTotalResults(response.totalResults);
    });
  };


  document.title = `${capitalize(props.category)} - NewsMonkey`;
    return (
      <div className="container" style={{marginTop:"110px"}}>
        <h2>NewsMonkey - {props.category.toUpperCase()}</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={
              articles.length !== totalResults
          }
          loader={<Loading/>}
        >
              <div className="container">
          <div className="row d-flex">
            {articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
