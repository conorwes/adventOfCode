import React from "react";
import dateFns from "date-fns";
import Solution01Part01 from "./challenges/2018/01/part1";
import Solution01Part02 from "./challenges/2018/01/part2";
import Solution02Part01 from "./challenges/2018/02/part1";
import Solution02Part02 from "./challenges/2018/02/part2";
import Solution03Part01 from "./challenges/2018/03/part1";
import Solution03Part02 from "./challenges/2018/03/part2";

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return(
            <div className="header row flex-middle">
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];
    
        let startDate = dateFns.startOfWeek(this.state.currentMonth);
    
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
          );
        }
    
        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const cloneDay = day;
            days.push(
            <div
                className={`col cell ${
                !dateFns.isSameMonth(day, monthStart)
                    ? "disabled"
                    : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
            </div>
            );
            day = dateFns.addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );
        days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        this.setState({
          selectedDate: day
        });

        switch (day.getDate())
        {
            case 1:
                document.write("Part 1: ", Solution01Part01(), " Part 2: ", Solution01Part02())
                break;
            case 2:
                document.write("Part 1: ", Solution02Part01(), " Part 2: ", Solution02Part02())
                break;
            case 3:
                document.write("Part 1: ", Solution03Part01(), " Part 2: ", Solution03Part02())
                break;
            default:
                // do nothing
                break;
        }
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;