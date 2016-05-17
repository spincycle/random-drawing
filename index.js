import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import drawingApp from "./reducers";
import App from "./components/App";

const attendance = {
    club: {
        name: "Steel City Backgammon",
        selectedYear: 2016,
        selectedQuarter: 1
    },
    stats: [
        {
            year: 2016,
            quarter: 1,
            totalAttendance: 80,
            winners: [],
            playerList: [
                {
                    name: "Janeen Bost",
                    events: 2
                },
                {
                    name: "John Brozda",
                    events: 4
                },
                {
                    name: "Adam Brozda",
                    events: 3
                },
                {
                    name: "Neal Brunette",
                    events: 5
                },
                {
                    name: "Coralie Campobasso",
                    events: 3
                },
                {
                    name: "Rich Catalano",
                    events: 4
                },
                {
                    name: "Andy Cornelius",
                    events: 2
                },
                {
                    name: "Jean Cronyn",
                    events: 2
                },
                {
                    name: "Dean DeGregorio",
                    events: 1
                },
                {
                    name: "Aleesha DeMatt",
                    events: 2
                },
                {
                    name: "Bryan DeMatt",
                    events: 4
                },
                {
                    name: "Andy Field",
                    events: 1
                },
                {
                    name: "Stevie Grund",
                    events: 3
                },
                {
                    name: "Ryan Hast",
                    events: 2
                },
                {
                    name: "Steve Hast",
                    events: 5
                },
                {
                    name: "Sharlene Hupka",
                    events: 2
                },
                {
                    name: "Marilyn Kubiak",
                    events: 2
                },
                {
                    name: "Ed Luksik",
                    events: 2
                },
                {
                    name: "Chris Quillen",
                    events: 1
                },
                {
                    name: "Alex Rodia",
                    events: 3
                },
                {
                    name: "Charlie Stewart",
                    events: 2
                },
                {
                    name: "Kristy Stroh",
                    events: 4
                },
                {
                    name: "Suzie Thompson",
                    events: 1
                },
                {
                    name: "Frank Tillman",
                    events: 1
                },
                {
                    name: "Scott Turner",
                    events: 4
                },
                {
                    name: "Bill Versaw",
                    events: 3
                },
                {
                    name: "Jeff Woods",
                    events: 4
                },
                {
                    name: "Joe Z",
                    events: 3
                },
                {
                    name: "Ann",
                    events: 1
                },
                {
                    name: "Bahareh",
                    events: 1
                },
                {
                    name: "Bulent",
                    events: 1
                },
                {
                    name: "Jeff",
                    events: 1
                },
                {
                    name: "Marianne",
                    events: 1
                }
            ]
        }
    ]
};

const store = createStore(drawingApp, window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

