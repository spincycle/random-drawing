import React, { PropTypes } from "react";
import * as edit from "react-edit";
import { find } from "lodash";

const FileEditor = ({club, stats, view, editorEvents}) => {

    const writeFile = () => {
        var json = JSON.stringify({
            club: club,
            stats: stats
        });
        var blob = new Blob([json], {type: "application/json"});
        return URL.createObjectURL(blob);
    }

    return (
        <div className="file-editor">
            <h5>Current JSON file version: {club.version}</h5>
            <button className="pure-button pure-button-primary version-button"
                    onClick={editorEvents.onChangeVersion}>
                Update version
            </button>
            <br />
            <a href={writeFile()}
               className="pure-button pure-button-primary"
               download={view.jsonFileName}>
                Save JSON
            </a>
        </div>
    )
};

const editable = (editorActions) => {
    return edit.edit({
        isEditing: ({columnIndex, rowData}) => columnIndex === rowData.editing,
        onActivate: ({columnIndex, rowData}) => {
            editorActions.edit(rowData.id, columnIndex);
        },
        onValue: ({value, rowData, property}) => {
            editorActions.save(rowData.id, property, value);
        }
    })
}

export default FileEditor;


