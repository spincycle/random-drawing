import React, {PropTypes} from "react";

const Attendance = ({club, stats, onWinnerClick}) => {
    let winners;
    if (stats.winners.length) {
        winners =
            <div className="winner">
                <h3>Winners for this Quarter: {stats.winners.toString()}</h3>
            </div>
    }
    // TODO - expose the random winner somehow but not on the site
    // else {
    //     winners =
    //         <div>
    //             <button onClick={() => onWinnerClick(stats.year, stats.quarter)}>Pick a Winner!</button>
    //             <span className="winner">==></span>
    //             {stats.winners.map((winner, i) =>
    //                 <span className="winner" key={i}>{winner}</span>
    //             )}
    //         </div>
    // }

    if (stats.playerList.length > 0) {
        return (
            <div className="attendance">
                <h4>Total Events Attended (not including organizers): {stats.totalAttendance}</h4>
                <hr />
                <div className="playerTable">
                    <table className="p">
                        <tbody>
                        <tr>
                            <th>Player</th>
                            <th>Events Attended</th>
                            </tr>
                        {
                            getSortedPlayerList(stats.playerList).map((player, i) =>
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td className="events">{player.events}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <br />
                {winners}
                <br />
            </div>
        )
    }
    else {
        return (
            <div className="attendance">
                <h4>No stats for this period</h4>
            </div>
        )
    }
};

const getSortedPlayerList = (playerList) => {
    return playerList.sort((p1, p2) => {
        let result = p2.events - p1.events;
        if (result == 0) {
            return p1.name.localeCompare(p2.name);
        }
        else {
            return result;
        }
    });
};

Attendance.propTypes = {
    club: PropTypes.shape({
        name: PropTypes.string.isRequired,
        selectedQuarter: PropTypes.number.isRequired,
        selectedYear: PropTypes.number.isRequired
    }).isRequired,
    stats: PropTypes.shape({
        year: PropTypes.number.isRequired,
        quarter: PropTypes.number.isRequired,
        totalAttendance: PropTypes.number.isRequired,
        winners: PropTypes.arrayOf(PropTypes.string).isRequired,
        playerList: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            events: PropTypes.number.isRequired
        }))
    }).isRequired,
    onWinnerClick: PropTypes.func.isRequired
}

export default Attendance;
