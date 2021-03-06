import React from 'react';
import {Subgroup} from './Subgroup';

import './Groupbox.css';

export class Groupbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.group.attributes.label,
            id: this.props.group.id,
        };
    }

    render() {
        const buildSubgroup = (subgroup) => {
            return (
                <Subgroup
                  key={subgroup.id}
                  namesets={this.props.namesets[subgroup.id]}
                  aftertToggleNamesetCheckbox={this.props.aftertToggleNamesetCheckbox}
                />
            );
        };

        const subgroups = this.props.subgroups.map(buildSubgroup);

        return (
            <section className="group-box">
              <div className="group-box__header">{this.state.label}</div>
              <div className="group-box__body">
                {subgroups}
              </div>
            </section>
        );
    }
}
