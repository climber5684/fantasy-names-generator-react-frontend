import React from 'react';

import './SortButtons.css';

export class GeneratedHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  currentSorting() {
    if (this.props.method === "unsorted") {
      return <span>Unsorted <img className="sort_icon" alt="from first to last generated" src="002-sort-by-numeric-order.svg" width="18" height="18"/></span>;
    }
    else if (this.props.method === "unsorted-reversed") {
      return <span>Unsorted <img className="sort_icon" alt="from last to first generated" src="001-sort-by-order.svg" width="18" height="18"/></span>;
    }
    else if (this.props.method === "alphabetically") {
      return <span>Alphabetically <img className="sort_icon" alt="from A to Z" src="006-sort-by-alphabet.svg" width="18" height="18"/></span>;
    }
    else if (this.props.method === "alphabetically-reversed") {
      return <span>Alphabetically <img className="sort_icon" alt="from Z to A" src="003-sort-reverse-alphabetical-order.svg" width="18" height="18"/></span>;
    }
    else if (this.props.method === "length") {
      return <span>By name length <img className="sort_icon" alt="from shortest to longest" src="005-sort-by-attributes-interface-button-option.svg" width="18" height="18"/></span>;
    }
    else if (this.props.method === "length-reversed") {
      return <span>By name length <img className="sort_icon" alt="from longest to shortest" src="004-sort-by-attributes.svg" width="18" height="18"/></span>;
    }
  }

  render() {
    return (
      <h2 className="subsection-header">Current sorting: ({this.currentSorting()})</h2>
    );
  }
}
