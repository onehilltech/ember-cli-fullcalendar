import DayGridCalendarComponent from "../-private/day-grid-calendar";

export default class FcWeekComponent extends DayGridCalendarComponent {
  doPrepareOptions (options) {
    options = super.doPrepareOptions (options);
    options.initialView = 'dayGridWeek';

    return options;
  }
}
