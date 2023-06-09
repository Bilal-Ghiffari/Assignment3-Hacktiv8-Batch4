import React, { Component } from "react";

export default class ItemLink extends Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className}>
        {this.props.name}
      </a>
    );
  }
}
