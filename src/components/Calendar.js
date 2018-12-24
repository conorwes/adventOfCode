import React from "react";
import dateFns from "date-fns";
import Solution01Part01 from "./challenges/2018/01/part1";
import Solution01Part02 from "./challenges/2018/01/part2";
import Solution02Part01 from "./challenges/2018/02/part1";
import Solution02Part02 from "./challenges/2018/02/part2";
import Solution03Part01 from "./challenges/2018/03/part1";
import Solution03Part02 from "./challenges/2018/03/part2";
import Solution04Part01 from "./challenges/2018/04/part1";
import Solution04Part02 from "./challenges/2018/04/part2";
import Solution05Part01 from "./challenges/2018/05/part1";
import Solution05Part02 from "./challenges/2018/05/part2";
import Solution06Part01 from "./challenges/2018/06/part1";
import Solution06Part02 from "./challenges/2018/06/part2";
import Solution07Part01 from "./challenges/2018/07/part1";
import Solution07Part02 from "./challenges/2018/07/part2";
import Solution08Part01 from "./challenges/2018/08/part1";
import Solution08Part02 from "./challenges/2018/08/part2";
import Solution09Part01 from "./challenges/2018/09/part1";
import Solution09Part02 from "./challenges/2018/09/part2";
import Solution10Part01 from "./challenges/2018/10/part1";
import Solution10Part02 from "./challenges/2018/10/part2";
import Solution11Part01 from "./challenges/2018/11/part1";
import Solution11Part02 from "./challenges/2018/11/part2";
import Solution12Part01 from "./challenges/2018/12/part1";
import Solution12Part02 from "./challenges/2018/12/part2";
import Solution13Part01 from "./challenges/2018/13/part1";
import Solution14Part01 from "./challenges/2018/14/part1";
import Solution14Part02 from "./challenges/2018/14/part2";
import Solution15Part01 from "./challenges/2018/15/part1";

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
                    : dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 18
                    ? "disabled"
                    : (dateFns.isSameDay(day, selectedDate) && (dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 6)) 
                    ? "christmas-selected"
                    : (dateFns.isSameDay(day, selectedDate) && (dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 7)) 
                    ? "christmas-eve-selected"
                    : dateFns.isSameDay(day, selectedDate) 
                    ? "selected" 
                    : dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 7 
                    ? "christmas-eve" 
                    : dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 6 
                    ? "christmas" 
                    : ""
                }`}
                key={day}
                onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
                <span className={`${ 
                    (dateFns.isSameDay(day, selectedDate) && (dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 6)) 
                    ? "number"
                    : (dateFns.isSameDay(day, selectedDate) && (dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 7)) 
                    ? "number"
                    : dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 7 
                    ? "christmas-text" 
                    : dateFns.getDayOfYear(day) === dateFns.getDaysInYear(2018) - 6 
                    ? "christmas-text" 
                    : "number"
                }`}
                    >{formattedDate}</span>
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
            case 4:
                document.write("Part 1: ", Solution04Part01(), " Part 2: ", Solution04Part02())
                break;
            case 5:
                document.write("Part 1: ", Solution05Part01(), " Part 2: ", Solution05Part02());
                break;
            case 6:
                document.write("Part 1: ", Solution06Part01(), " Part 2: ", Solution06Part02(10000));
                break;
            case 7:
                document.write("Part 1: ", Solution07Part01(26), " Part 2: ", Solution07Part02(26, 5, 60));
                break;
            case 8:
                document.write("Part 1: ", Solution08Part01(), " Part 2: ", Solution08Part02());
                break;
            case 9:
                document.write("Part 1: ", Solution09Part01(), " Part 2: ", Solution09Part02());
                break;
            case 10:
                document.write("Part 1: ", Solution10Part01(), " Part 2: ", Solution10Part02());
                break;
            case 11:
                document.write("Part 1: ", Solution11Part01(), " Part 2: ", Solution11Part02());
                break;
            case 12:
                document.write("Part 1: ", Solution12Part01(), " Part 2: ", Solution12Part02());
                break;
            case 13: // code is broken...will come back to this
                document.write("Part 1: ", Solution13Part01());
                break;
            case 14:
                document.write("Part 1: ", Solution14Part01(), " Part 2: ", Solution14Part02());
                break;
            case 15:
                document.write("Part 2: ", Solution15Part01());
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