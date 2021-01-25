import CalendarComponent from "./calendar";

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { getWithDefault } from '@ember/object';

function noOp () {}

export default class DayGridCalendarComponent extends CalendarComponent {
  // Toolbar
  get headerToolbar () {
    return getWithDefault (this.args, 'headerToolbar', {
      start: 'title',
      center: '',
      end: 'today prev,next'
    });
  }

  get footerToolbar () {
    return getWithDefault (this.args, 'footerToolbar', false);
  }

  get titleFormat () {
    return getWithDefault (this.args, 'titleFormat', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  get titleRangeSeparator () {
    return getWithDefault (this.args, 'titleRangeSeparator', ' \u2013 ');
  }

  get buttonText () {
    return getWithDefault (this.args, 'buttonText', {
      today: 'today',
      month: 'month',
      week: 'week',
      day: 'day',
      list: 'list'
    });
  }

  get buttonIcons () {
    return getWithDefault (this.args, 'buttonIcons', {
      prev: 'left-single-arrow',
      next: 'right-single-arrow',
      prevYear: 'left-double-arrow',
      nextYear: 'right-double-arrow'
    });
  }

  // Date & Time Display

  get weekends () {
    return getWithDefault (this.args, 'weekends', true);
  }

  get hiddenDays () {
    return getWithDefault (this.args, 'hiddenDays', []);
  }

  get dayHeaders () {
    return getWithDefault (this.args, 'dayHeaders', true);
  }

  get dayHeaderFormat () {
    return this.args.dayHeaderFormat;
  }

  get dayMinWidth () {
    return this.args.dayMinWidth;
  }

  // Sizing

  get height () {
    return this.args.height;
  }

  get aspectRatio () {
    return getWithDefault (this.args, 'aspectRatio', 1.35);
  }

  get expandRows () {
    return getWithDefault (this.args, 'expandRows', false);
  }

  get handleWindowResize () {
    return getWithDefault (this.args, 'handleWindowResize', true);
  }

  get windowResizeDelay () {
    return getWithDefault (this.args, 'windowResizeDelay', 100);
  }

  get stickyHeaderDates () {
    return getWithDefault (this.args, 'stickyHeaderDates', 'auto');
  }

  get stickyFooterScrollbar () {
    return getWithDefault (this.args, 'stickyFooterScrollbar', 'auto');
  }

  // Week Numbers

  get weekNumbers () {
    return getWithDefault (this.args, 'weekends', false);
  }

  get weekNumberCalculation () {
    return getWithDefault (this.args, 'weekNumberCalculation', 'local');
  }

  get weekText () {
    return getWithDefault (this.args, 'weekText', 'W');
  }

  get weekNumberFormat () {
    return getWithDefault (this.args, 'weekNumberFormat',  { week: 'narrow' });
  }

  doPrepareOptions (options) {
    options = super.doPrepareOptions (options);
    options.plugins.push (dayGridPlugin, interactionPlugin);

    Object.assign (options, {
      headerToolbar: this.headerToolbar,
      footerToolbar: this.footerToolbar,
      titleFormat: this.titleFormat,
      titleRangeSeparator: this.titleRangeSeparator,
      buttonText: this.buttonText,
      buttonIcons: this.buttonIcons,

      height: this.height,
      aspectRatio: this.aspectRatio,
      expandRows: this.expandRows,
      handleWindowResize: this.handleWindowResize,
      windowResizeDelay: this.windowResizeDelay,
      stickyHeaderDates: this.stickyHeaderDates,
      stickyFooterScrollbar: this.stickyFooterScrollbar,

      weekends: this.weekends,
      hiddenDays: this.hiddenDays,
      dayHeaders: this.dayHeaders,
      dayHeaderFormat: this.dayHeaderFormat,
      dayMinWidth: this.dayMinWidth,

      weekNumbers: this.weekNumbers,
      weekNumberCalculation: this.weekNumberCalculation,
      weekText: this.weekNumbers,
      weekNumberFormat: this.weekNumberFormat,

      dateClick: this.click.bind (this)
    })

    return options;
  }

  click (ev) {
    (this.args.click || noOp) (ev);
  }

  select (ev) {
    (this.args.select || noOp) (ev);
  }

  unselect () {
    (this.args.unselect || noOp) (...arguments);
  }
}