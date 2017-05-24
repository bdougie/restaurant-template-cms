import React, {Component} from "react";
import format from "date-fns/format";

function urlize(value) {
  return value.toLowerCase().replace(/\s/g, "-").replace(/-+/, "-");
}

export default class GalleryPreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <div className="img-wrapper" style={{padding: 16}}>
      <h2>Your preview for { data.title }</h2>
      { data.image &&
        <img src={getAsset(data.image).toString()} />
      }
    </div>;
  }
}
