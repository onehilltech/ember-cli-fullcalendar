import Component from "@glimmer/component";
import { action } from '@ember/object';
import { Calendar } from '@fullcalendar/core';

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
    return options;
  }

  willDestroy () {
    super.willDestroy ();

    this._calendar.destroy ();
  }
}
