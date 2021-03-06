import React from 'react';

import './Namelist.css';

export class Namelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameList: [],
        };
        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.namesLoading === false) {
            this.setState(
                {
                    nameList: nextProps.names.map(name => {
                        return (
                            <li key={name.id}>
                              {name.attributes.variants}
                            </li>
                        );
                    }),
                }
            );
        }
        else {
            console.log("LOAADING");
            this.setState(
                {
                    nameList: [
                        <p key="1">
                          {"Loading..."}
                        </p>
                    ],
                }
            );
        }
    }

    render() {
        if (this.props.isOpen === false) {
            return null;
        }
        return (
            <div>
              <div className="modal_window">
                <h1 className="modal_window__header">
                  {this.props.nameset.attributes.label}
                </h1>
                <div className="modal_window__body">
                  <ol className="modal_window__list">
                    {this.state.nameList}
                  </ol>
                </div>
                <p className="modal_window__close_button">
                  <button onClick={this.close}>Close</button>
                </p>
              </div>
              <div className="modal_shroud"
                   onClick={this.close}
              />
            </div>
        );
    }

    close(e) {
        e.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}
