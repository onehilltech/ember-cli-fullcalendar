import DayGridCalendarComponent from "../-private/day-grid-calendar";

export default class FcMonthComponent extends DayGridCalendarComponent {
  doPrepareOptions (options) {
    options = super.doPrepareOptions (options);
    options.initialView = 'dayGridMonth';

    return options;
  }
}
