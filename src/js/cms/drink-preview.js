import React, {Component} from "react";
import format from "date-fns/format";

function urlize(value) {
  return value.toLowerCase().replace(/\s/g, "-").replace(/-+/, "-");
}

export default class DrinkPreview extends Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const data = entry.get("data") ? entry.get("data").toJS() : {};

    return <section className="content" style={{padding: 16}}>
      <h1>Drinks</h1>
      <h2><em>{ data.type }</em></h2>
      <hr/>
      <ul>
        <li>
          <p><strong>{ data.title }:</strong> { data.description }</p>
          <p>{ data.price }</p>
        </li>
      </ul>
    </section>;
  }
}
