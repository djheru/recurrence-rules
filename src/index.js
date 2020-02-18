import moment from 'moment';
import {
  ords,
  defaultOptions,
  endDateString,
  endTypes,
  repeatByTypes,
  repeatTypes,
  weekDays,
  getSetPos,
  parseVariations
} from './utils';

const REPEAT_TYPES = repeatTypes;
export { REPEAT_TYPES };

const REPEAT_BY_TYPES = repeatByTypes;
export { REPEAT_BY_TYPES };

const WEEK_DAYS = weekDays;
export { WEEK_DAYS };

const END_TYPES = endTypes;
export { END_TYPES };

function dailyRRule(options) {
  const { interval, count } = options;
  const ruleArray = [];
  ruleArray.push('FREQ=DAILY');

  const int = (!!interval) ? `INTERVAL=${parseInt(interval, 10)}` : `INTERVAL=1`;
  ruleArray.push(int);
  if (!!count) {
    ruleArray.push(`COUNT=${parseInt(count, 10)}`);
  }
  return `RRULE:${ruleArray.join(';')};`;
}

export function parseDaily(inputOptions) {
  const period = 'day';
  const options = { ...defaultOptions, ...inputOptions };
  const { interval, startDate, endDate, count } = options;
  let stringArray = ['Every'];

  const intervalString = (!!interval && parseInt(interval, 10) > 1) ?
    `${interval} ${period}s` : period;
  stringArray.push(intervalString);

  const startString = moment(startDate).format('MM/DD/YYYY');
  stringArray.push(`starting ${startString}`);

  stringArray.push(endDateString(endDate, count));

  const toString = stringArray.join(' ');
  const rrule = dailyRRule(options);
  return {
    toString,
    rrule
  }
}

function weeklyRRule(options) {
  const { interval, count, dayArray, startDate } = options;
  const ruleArray = [];

  ruleArray.push('FREQ=WEEKLY');
  const int = (!!interval) ? `INTERVAL=${parseInt(interval, 10)}` : `INTERVAL=1`;
  ruleArray.push(int);

  if (!!count) {
    ruleArray.push(`COUNT=${parseInt(count, 10)}`);
  }

  const days = (dayArray.length > 0) ?
    dayArray.join(',') : moment(startDate).format('dd').toUpperCase();
  ruleArray.push(`BYDAY=${days}`);

  return `RRULE:${ruleArray.join(';')};`;
}

export function parseWeekly(inputOptions) {
  const period = 'week';
  const options = { ...defaultOptions, ...inputOptions };
  const { interval, startDate, endDate, count, dayArray } = options;
  let stringArray = ['Every'];

  const intervalString = (!!interval && parseInt(interval, 10) > 1) ?
    `${interval} ${period}s` : period;
  stringArray.push(intervalString);

  if (dayArray.length > 0) {
    stringArray.push('on');
    if (dayArray.length > 1) {
      const days = dayArray.map(day => weekDays[day]);
      days.splice(-1, 0, 'and');
      stringArray.push(days.join(' '));
    } else {
      const day = dayArray[0];
      stringArray.push(weekDays[day]);
    }
  }

  const startString = moment(startDate).format('MM/DD/YYYY');
  stringArray.push(`starting ${startString}`);

  stringArray.push(endDateString(endDate, count));

  const toString = stringArray.join(' ');
  const rrule = weeklyRRule(options);
  return {
    toString,
    rrule
  }
}

function monthlyRRule(options) {
  const { interval, count, dayArray, startDate } = options;
  const ruleArray = [];

  ruleArray.push('FREQ=MONTHLY');
  const int = (!!interval) ? `INTERVAL=${parseInt(interval, 10)}` : `INTERVAL=1`;
  ruleArray.push(int);

  if (!!count) {
    ruleArray.push(`COUNT=${parseInt(count, 10)}`);
  }

  if (dayArray.length > 0) {
    const setPos = getSetPos(startDate, dayArray);
    const byDay = dayArray.map(d => `${setPos}${d}`).join(',');
    ruleArray.push(`BYDAY=${byDay}`);
  } else {
    ruleArray.push(`BYMONTHDAY=${moment(startDate).format('DD')}`)
  }

  return `RRULE:${ruleArray.join(';')};`;
}

export function parseMonthly(inputOptions) {
  const period = 'month';
  const options = { ...defaultOptions, ...inputOptions };
  const { interval, startDate, endDate, count, dayArray } = options;
  let stringArray = ['Every'];

  const intervalString = (!!interval && parseInt(interval, 10) > 1) ?
    `${interval} ${period}s` : period;
  stringArray.push(intervalString);

  stringArray.push('on the');
  let onThe;
  if (dayArray.length === 0) {
    const monthDay = moment(startDate).format('D');
    onThe = `${monthDay}${ords(parseInt(monthDay, 10))} day of the month`;
  } else {
    const setPos = getSetPos(startDate, dayArray);
    const ord = (setPos === -1) ?
      'last' : `${setPos}${ords(parseInt(setPos, 10))}`;
    const days = dayArray
      .map(day => weekDays[day]);
    if (dayArray.length > 1) {
      days.splice(-1, 0, 'and');
    }
    onThe = `${ord} ${days.join(' ')} of the month`;
  }
  stringArray.push(onThe);

  const startString = moment(startDate).format('MM/DD/YYYY');
  stringArray.push(`starting ${startString}`);


  stringArray.push(endDateString(endDate, count));

  const toString = stringArray.join(' ');
  const rrule = monthlyRRule(options);

  return {
    toString,
    rrule
  }
}

function yearlyRRule(options) {
  const { interval, count, dayArray, startDate } = options;
  const ruleArray = [];

  ruleArray.push('FREQ=YEARLY');
  const int = (!!interval) ? `INTERVAL=${parseInt(interval, 10)}` : `INTERVAL=1`;
  ruleArray.push(int);

  if (!!count) {
    ruleArray.push(`COUNT=${parseInt(count, 10)}`);
  }

  if (dayArray.length > 0) {
    const setPos = getSetPos(startDate, dayArray);
    const byDay = dayArray.map(d => `${setPos}${d}`).join(',');
    ruleArray.push(`BYDAY=${byDay}`);
  } else {
    ruleArray.push(``);
  }

  return `RRULE:${ruleArray.join(';')};`;
}

export function parseYearly(inputOptions) {
  const period = 'year';
  const options = { ...defaultOptions, ...inputOptions };
  const { interval, startDate, endDate, count, dayArray } = options;
  let stringArray = ['Every'];

  const intervalString = (!!interval && parseInt(interval, 10) > 1) ?
    `${interval} ${period}s` : period;
  stringArray.push(intervalString);

  stringArray.push('on the');
  let onThe;
  const theMonth = moment(startDate).format('MMM');
  if (dayArray.length === 0) {
    const monthDay = moment(startDate).format('D');
    onThe = `${monthDay}${ords(parseInt(monthDay, 10))} day of ${theMonth}`;
  } else {
    const setPos = getSetPos(startDate, dayArray);
    const ord = (setPos === -1) ?
      'last' : `${setPos}${ords(parseInt(setPos, 10))}`;
    const days = dayArray
      .map(day => weekDays[day]);
    days.splice(-1, 0, 'and');
    onThe = `${ord} ${days.join(' ')} of ${theMonth}`;
  }
  stringArray.push(onThe);

  const startString = moment(startDate).format('MM/DD/YYYY');
  stringArray.push(`starting ${startString}`);

  stringArray.push(endDateString(endDate, count));

  const toString = stringArray.join(' ');
  const rrule = yearlyRRule(options);
  return {
    toString,
    rrule
  }
}

export default function rrule(rruleOptions) {
  const options = parseVariations({ ...defaultOptions, ...rruleOptions });
  const repeatTypesArray = Object.keys(repeatTypes);
  const parseMap = {};

  if (!repeatTypesArray.includes(options.repeatType)) {
    throw new Error('Invalid repeat type');
  }

  parseMap.DAILY = parseDaily;
  parseMap.WEEKLY = parseWeekly;
  parseMap.MONTHLY = parseMonthly;
  parseMap.YEARLY = parseYearly;

  const parseMethod = parseMap[options.repeatType];
  return parseMethod(options);
}
