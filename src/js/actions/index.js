import request from "superagent";
import uuid from "uuid";

export const pickWinner = (year, quarter) => ({
    type: 'PICK_WINNER',
    year,
    quarter
});

export const changeQuarter = (quarter) => ({
    type: 'CHANGE_QUARTER',
    quarter
});

export const changeYear = (year) => ({
    type: 'CHANGE_YEAR',
    year
});

export const receiveAttendanceStats = (attendance) => ({
    type: 'RECEIVE_ATTENDANCE_STATS',
    attendance
});

export const requestAttendanceStats = () => (

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    function (dispatch) {
        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
        // In this case, we return a promise to wait for.
        return request.get('/api/attendance.json')
            .accept('json')
            .then(
                (response) => {
                    // This should work but when deployed onto Pair, body is always undefined
                    // dispatch(receiveAttendanceStats(response.body))
                    dispatch(receiveAttendanceStats(JSON.parse(response.text)))
                },
                (reason) => {
                    console.log("Attendance Stats rejected for reason: " + reason)
                }
            )
    }
);

// date: moment().format('YYYY-MM-DD'),
export const createEvent = () => ({
    type: 'CREATE_EVENT',
    event: {
        id: uuid.v4(),
        name: "",
        location: "",
        date: "",
        attendees: []
    }
});

export const editEvent = (id, columnIndex) => ({
    type: 'EDIT_EVENT',
    id,
    columnIndex
});

export const saveEvent = (id, property, value) => ({
    type: 'SAVE_EVENT',
    id,
    property,
    value
});

export const deleteEvent = (id) => ({
    type: 'DELETE_EVENT',
    id
});

export const createLocation = () => ({
    type: 'CREATE_LOCATION',
    location: {
        id: uuid.v4(),
        name: "",
        street1: "",
        street2: "",
        city: "Pittsburgh",
        state: "PA",
        zip: "",
        phone1: "",
        phone2: ""
    }
});

export const editLocation = (id, columnIndex) => ({
    type: 'EDIT_LOCATION',
    id,
    columnIndex
});

export const saveLocation = (id, property, value) => ({
    type: 'SAVE_LOCATION',
    id,
    property,
    value
});

export const deleteLocation = (id) => ({
    type: 'DELETE_LOCATION',
    id
});

export const changeAdminTab = (id) => ({
    type: 'CHANGE_ADMIN_TAB',
    id
});

export const createPlayer = () => ({
    type: 'CREATE_PLAYER',
    player: {
        id: uuid.v4(),
        first: "",
        last: "",
        email: "",
        phone: ""
    }
});

export const editPlayer = (id, columnIndex) => ({
    type: 'EDIT_PLAYER',
    id,
    columnIndex
});

export const savePlayer = (id, property, value) => ({
    type: 'SAVE_PLAYER',
    id,
    property,
    value
});

export const deletePlayer = (id) => ({
    type: 'DELETE_PLAYER',
    id
});

export const changeActiveEvent = (id) => ({
    type: 'CHANGE_ACTIVE_EVENT',
    id
});

export const addPlayerAttendance = (eventId, playerId) => ({
    type: 'ADD_PLAYER_ATTENDANCE',
    eventId,
    playerId
});

export const removePlayerAttendance = (eventId, playerId) => ({
    type: 'REMOVE_PLAYER_ATTENDANCE',
    eventId,
    playerId
});

export const editJsonFilePath = (path) => ({
    type: 'EDIT_JSON_FILE_PATH',
    path
});

export const editJsonFileName = (name) => ({
    type: 'EDIT_JSON_FILE_PATH',
    path
});

export const saveJsonFile = () => ({
    type: 'SAVE_JSON_FILE'
});

export const updateMetadataVersion = () => ({
    type: 'UPDATE_METADATA_VERSION',
    version: uuid.v4()
})

export const changeSort = (editor, column) => ({
    type: 'CHANGE_SORT',
    editor,
    column
})

