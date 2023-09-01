const NewsItem = (props) => {
  let { title, description, urlToImage, url } = props;
  return (
    <div className="card my-3 mx-2">
      <img
        src={
          urlToImage
            ? urlToImage
            : `https://img.freepik.com/free-photo/toy-bricks-table-with-word-news_144627-47478.jpg?w=996&t=st=1689057500~exp=1689058100~hmac=38f9989d61e6a835598109eb4ddde8eefeca4475ff150e02699e3496ac0a3d12`
        }
        className="card-img-top"
        alt="..."
        height="150px"
      />
      <div className="card-body">
        <p className="card-text">
          <span className="badge rounded-pill bg-dark">
            Source: {props.source ? props.source : "Unknown"}
          </span>
        </p>
        <h5 className="card-title">{title ? title : "Headline"}</h5>
        {props.author && (
          <p className="card-text my-0">
            <small className="text-muted">Author:{props.author}</small>
          </p>
        )}
        {props.time && (
          <p className="card-text">
            <small className="text-muted">Date:{props.time.slice(0, 10)}</small>
          </p>
        )}
        <p className="card-text">
          {description ? description.slice(0, 125) : ""}...
        </p>
        <a
          rel="noreferrer"
          href={url}
          target="_blank"
          className="btn btn-sm btn-dark"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
