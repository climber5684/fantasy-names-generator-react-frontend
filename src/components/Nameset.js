import React from 'react';
import {CustomNamesArea} from './CustomNamesArea';
import {Namelist} from './Namelist';

import './Nameset.css';

export class Nameset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameset: this.props.nameset,
      custom: this.props.custom,
      isChecked: false,
      isDisable: true,
      isNamelistOpen: false
      // names: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.openNamelist = this.openNamelist.bind(this);
    this.closeNamelist = this.closeNamelist.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    // console.log("STATE NAMES: ", this.state.names);
  }

  openNamelist() {
    this.setState({ isNamelistOpen: true });
  }

  closeNamelist() {
    this.setState({ isNamelistOpen: false });
  }

  handleChange() {
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    this.props.handleCheckboxChange(this.props.nameset.id);
  }

  render() {
    const namesetId = "nameset-" + this.state.nameset.id

    const namesCount = () => {
      if (this.props.nameset.attributes["names-count"]) {
        return this.props.nameset.attributes["names-count"].toString();
      }
      else {
        return "0";

      }
    }

    return (
      <div>
        <div className="group-box__item">
          <input className="group-box__checkbox" id={namesetId} type="checkbox"
            onChange={this.handleChange} checked={this.state.isChecked}
          />
          <label className="group-box__label" htmlFor={namesetId}>{this.props.nameset.attributes.label}
            <span
              className="group-box__names_number"
              onClick={this.openNamelist}
            >
              {" (" + namesCount() + ")"}
            </span>
            <Namelist isOpen={this.state.isNamelistOpen}
              onClose={this.closeNamelist}
              nameset={this.props.nameset}
            />
          </label>
        </div>
        <CustomNamesArea
          // customNames={this.state.names}
          namesetId={this.state.nameset.id}
          custom={this.props.custom}
          separator={this.state.nameset.attributes.variant_separator}
          registerNameset={this.props.registerNameset}
        />
      </div>
    )

  }

}
