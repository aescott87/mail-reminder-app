const DefaultState = {
    board: {
        bulletins: [
            {
                "isPosted": false,
                "smsPhone": "",
                "remindOnDate": "",
                "message": "" 
            }
        ]
    }
}

const ScenarioNewPostedMailState = {
    isDev: true,
    board: {
        bulletins: [
            {
                "isPosted": true,
                "smsPhone": "",
                "remindOnDate": "",
                "message": "" 
            }
        ]
    }
}

const ScenarioPendingMailState = {
    isDev: true,
    board: {
        bulletins: [
            {
                "isPosted": true,
                "smsPhone": "555-555-5555",
                "remindOnDate": "2024-10-31T05:00:00.000Z",
                "message": "Pay bills" 
            }
        ]
    }
}

const ScenarioDueMailState = {
    isDev: true,
    board: {
        bulletins: [
            {
                "isPosted": true,
                "smsPhone": "555-555-5555",
                "remindOnDate": "2020-10-15T05:00:00.000Z",
                "message": "Pay bills" 
            }
        ]
    }
}

const AppReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'SIMULATE_NEW_POSTED_MAIL':
            return ScenarioNewPostedMailState;
        case 'SIMULATE_PENDING_POSTED_MAIL':
            return ScenarioPendingMailState;
        case 'SIMULATE_DUE_POSTED_MAIL':
             return ScenarioDueMailState;
        default:
            return state;
    }
}

export default AppReducer;