import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bulletin extends Component {
    render() {
        return (
            <div className="bulletin">
                {this.props.bulletin.isPosted ?
                    <div className="bulletin-form">
                        <img src="Images/mail-bubble.svg" alt="Mail bubble" />
                        <form>
                            <label>Remind</label>
                            <input value={this.props.bulletin.smsPhone} />
                            <label>In</label>
                            <select>
                                <option>{this.props.bulletin.remindOnDate}</option>
                            </select>
                            <label>To Do</label>
                            <input value={this.props.bulletin.message} />
                        </form>
                    </div> :
                    <p className="bulletin-message">All caught up! Nice work!</p>}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    bulletin: state.app.board.bulletins[props.index]
});

export default connect(mapStateToProps)(Bulletin)