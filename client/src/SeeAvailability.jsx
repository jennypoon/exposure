import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SeeAvailability extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
  }

  formatDate(Year, Month, Day) {
    return new Date(Year, Month, Day);
  }

  pushDateIntoProp(arrayOfDates) {
    arrayOfDates.map(function(date) {
      formatDate(date);
    });

  }

  render() {
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          initialMonth={new Date(2018, 11)}
          disabledDays={this.pushDateIntoProp(this.props.dbquery)}
        />
      </div>
    );
  }
}

export default SeeAvailability
