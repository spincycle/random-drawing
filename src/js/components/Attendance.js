import React, { PropTypes } from "react";
import { template } from "lodash";

const Attendance = ({club, stats, onWinnerClick}) => {
    let winners, pickWinners;
    // TODO reinstate this
    // if (stats.pickWinners) {
    //     pickWinners =
    //         <div>
    //             <button onClick={() => onWinnerClick(stats.year, stats.quarter)}>Pick a Winner!</button>
    //         </div>
    // }
    if (stats.winners && stats.winners.length) {
        winners =
            <div className="winner col-xs-8 col-xs-offset-2">
                <h3>Winners for this Quarter: {stats.winners.toString()}</h3>
            </div>
    }

    if (stats.playerList && stats.playerList.length > 0) {
        let playerName = template('<%= first %> <%= last %>')
        return (
            <div className="attendance row">
                <h4 className="col-xs-12">Total Events Attended (not including organizers): {stats.totalAttendance}</h4>
                <hr className="col-xs-8 col-xs-offset-2"/>
                <div className="playerTable col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <table className="p">
                        <tbody>
                        <tr>
                            <th>Player</th>
                            <th>Events Attended</th>
                            </tr>
                        {
                            getSortedPlayerList(stats.playerList).map((player, i) =>
                                <tr key={i}>
                                    <td>{playerName(player)}</td>
                                    <td className="events">{player.attended}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <br />
                {pickWinners}
                {winners}
                <br />
            </div>
        )
    }
    else {
        return (
            <div className="attendance">
                <h4>No attendance stats for this period</h4>
            </div>
        )
    }
};

const getSortedPlayerList = (playerList) => {
    return playerList.sort((p1, p2) => {
        let result = p2.attended - p1.attended;
        if (result == 0) {
            return p1.first.localeCompare(p2.first);
        }
        else {
            return result;
        }
    });
};

Attendance.propTypes = {
    club: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,
    view: PropTypes.shape({
        selectedQuarter: PropTypes.number.isRequired,
        selectedYear: PropTypes.number.isRequired
    }).isRequired,
    stats: PropTypes.shape({
        year: PropTypes.number.isRequired,
        quarter: PropTypes.number.isRequired,
        totalAttendance: PropTypes.number.isRequired,
        winners: PropTypes.arrayOf(PropTypes.string).isRequired,
        playerList: PropTypes.arrayOf(PropTypes.shape({
            first: PropTypes.string.isRequired,
            attended: PropTypes.number.isRequired
        }))
    }).isRequired,
    onWinnerClick: PropTypes.func.isRequired
}

export default Attendance;

