import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class WeekController extends Controller {
  @action
  click () {
    console.log (...arguments);
  }
}
