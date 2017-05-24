import React, {Component} from "react";
import format from "date-fns/format";

function urlize(value) {
  return value.toLowerCase().replace(/\s/g, "-").replace(/-+/, "-");
}

export default class BlogPreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <div className="blog-detail page" style={{marginTop: -76}}>

      <div className="img-bg-hero full-width" style={{
        backgroundImage: data.image && `url('${getAsset(data.image).toString()}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeatf",
      }}>
        <div className="intro centered-text">
          <h1>{ data.title }</h1>
        </div>

        <ul className="tags">
          { data.tags && data.tags.map((tag) => <li className="tag">
            <a className="tag-link" href="#">{ tag }</a>
          </li>)}
        </ul>
        <div className="gradient-overlay"></div>
      </div>

      <p className="meta-info">
        <img className="author" height="40" width="40" src={data.author && `/img/blog/authors/thumbnails/${ urlize(data.author) }.jpg`}/>
        <span>
          <span className="text-link">{ data.author }</span> wrote this on { format(data.date, "MMMM D, YYYY") }
        </span>
      </p>

      <div className="container">
        <article>
          { widgetFor("body") }
        </article>
      </div>

      <div className="bottom-actions">
        <div className="promo-cards container">
          <h4 className="section-label">As recommended post:</h4>
          <div className="cards">
            <a className="card half" href="#">
              <div className="title  promo-card-element">
                <h3>{ data.title }</h3>
                <p className="btn-subtext">By { data.author }</p>
              </div>
              { data.image &&
                <div className="promo-thumbnail promo-card-element">
                  <div className="img-wrap">
                    <img src={getAsset(data.image).toString()} className="promo-thumbnail" />
                  </div>
                </div>
              }
            </a>
          </div>
        </div>
      </div>
    </div>;
  }
}
