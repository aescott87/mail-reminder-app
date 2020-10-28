import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bulletin extends Component {

    state = {
        saved: {
            "smsPhone": "",
            "remindOnDate": "",
            "message": ""
        },
        unsaved: {
            "smsPhone": "",
            "remindOnDate": "",
            "message": ""
        }
    }

    handleUpdate = (propName, event) => {
        console.log('Creating mail reminder');
        this.setState({
            ...this.state,
            unsaved: {
                ...this.state.unsaved,
                [propName]: event.target.value
            }
        })
    }

    hasChanges = () => {
        console.log('Saved is', this.state.saved);
        console.log('Unsaved is', this.state.unsaved);
        const smsPhoneChanged = this.state.saved.smsPhone !== this.state.unsaved.smsPhone;
        const remindOnDateChanged = this.state.saved.remindOnDate !== this.state.unsaved.remindOnDate;
        const messageChanged = this.state.saved.message !== this.state.unsaved.message;
        return smsPhoneChanged || remindOnDateChanged || messageChanged
    }

    render() {
        return (
            <div className="bulletin">
                {this.props.bulletin.isPosted ?
                    <div className="bulletin-form">
                        <img src="Images/mail-bubble.svg" alt="Mail bubble" />
                        <form>
                            <label className="label-item">Remind</label>
                            <input
                                value={this.state.unsaved.smsPhone}
                                onChange={(event) => this.handleUpdate('smsPhone', event)} />
                            <label className="label-item">In</label>
                            <select
                                onChange={(event) => this.handleUpdate('remindOnDate', event)}
                                value={this.state.unsaved.remindOnDate}>
                                <option value={this.state.saved.remindOnDate}>{this.state.saved.remindOnDate}</option>
                            </select>
                            <label className="label-item">To Do</label>
                            <input
                                value={this.state.unsaved.message}
                                onChange={(event) => this.handleUpdate('message', event)} />
                            {this.hasChanges() ?
                                <>
                                    <button className="save-button">Save</button>
                                    <button className="cancel-button">Cancel</button>
                                </> :
                                <>
                                    <button disabled={true} className="disabled-save-button">Save</button>
                                    <button disabled={true} className="disabled-cancel-button">Cancel</button>
                                </>
                            }
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