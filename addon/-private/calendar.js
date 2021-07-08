import Component from "@glimmer/component";
import { action } from '@ember/object';
import { Calendar } from '@fullcalendar/core';
import { isPresent } from '@ember/utils';

export default class CalendarComponent extends Component {
  _calendar;

  @action
  didInsert (element) {
    let options = this.doPrepareOptions ({plugins: []});
    this._calendar = new Calendar (element, options);
    this._calendar.render ();
  }

  /**
   * Prepare the options for creating the calendar.
   *
   * @param options
   */
  doPrepareOptions (options) {
    return Object.assign (options,  {
      validRange: this.validRange
    })
  }

  willDestroy () {
    super.willDestroy ();

    this._calendar.destroy ();
  }

  @action
  next (element, [next]) {
    if (next) {
      this._calendar.next ();
    }
  }

  @action
  prev (element, [prev]) {
    if (prev) {
      this._calendar.prev ();
    }
  }

  @action
  nextYear (element, nextYear) {
    if (nextYear) {
      this._calendar.nextYear ();
    }
  }

  @action
  prevYear (element, prevYear) {
    if (prevYear) {
      this._calendar.prevYear ();
    }
  }

  @action
  today (element, [today]) {
    if (today) {
      this._calendar.today ();
    }
  }

  @action
  gotoDate (element, [date]) {
    this._calendar.gotoDate (date);
  }

  @action
  incrementDate (element, [duration]) {
    this._calendar.incrementDate (duration);
  }

  get validRange () {
    const { startDate, endDate } = this.args;

    if (isPresent (startDate) || isPresent (endDate)) {
      return { start: startDate, end: endDate }
    }
    else {
      return undefined;
    }
  }
}
