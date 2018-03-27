import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { default as ReactJsPopup} from "reactjs-popup";

class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ReactJsPopup trigger={<button className="btn btn-success">{this.props.triggerName}</button>} modal closeOnDocumentClick closeOnEscape position="right center">
                {this.props.children}
            </ReactJsPopup>
        )
    }
}

Popup.propTypes = {
    triggerName: PropTypes.string
};

Popup.defaultProps = {
    triggerName: "New"
};

export default Popup;