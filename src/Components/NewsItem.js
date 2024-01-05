import React from "react";

const NewsItem=(props)=>{

    let { title, decscription, imageUrl, newsUrl, Author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger">
                {source.name}
              </span>
              </div>
          <img
            src={
              !imageUrl
                ? "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/29/09f3ac584f531cbbbcfd0ad1129f984a1672292881138272_original.jpeg?impolicy=abp_cdn&imwidth=1200&imheight=628"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}

            </h5>

            <p className="card-text">{decscription}</p>
            <p className="card-text">
              <small className="text-muted">
                By {Author ? Author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
