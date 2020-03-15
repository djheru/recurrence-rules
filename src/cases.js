import rrule from './index';
import { endTypes, repeatByTypes, repeatTypes } from './utils';

const cases = {
  parseDaily: [
    {
      //
      repeatType: repeatTypes.DAILY,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2017-10-19',
      endDate: '2018-09-10',
    },
    {
      //
      repeatType: repeatTypes.DAILY,
      interval: 3,
      dayArray: [],
      count: 20,
      startDate: '2017-10-19',
      endDate: '',
    },
  ],
  parseWeekly: [
    {
      //
      repeatType: repeatTypes.WEEKLY,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2017-10-19',
      endDate: '2018-09-10',
    },
    {
      //
      repeatType: repeatTypes.WEEKLY,
      interval: 3,
      dayArray: [],
      count: 20,
      startDate: '2017-10-19',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.WEEKLY,
      interval: 2,
      dayArray: ['SU', 'MO', 'TH'],
      count: 0,
      startDate: '2017-10-19',
      endDate: '',
    },
  ],
  parseMonthly: [
    {
      //
      repeatType: repeatTypes.MONTHLY,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2017-10-19',
      endDate: '2018-09-10',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      interval: 3,
      dayArray: [],
      count: 20,
      startDate: '2017-10-10',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      interval: 1,
      dayArray: ['SU', 'MO', 'TH'],
      count: 0,
      startDate: '2017-10-19',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      interval: 2,
      dayArray: ['SU', 'MO', 'TH'],
      count: 0,
      startDate: '2017-10-29',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      repeatByType: repeatByTypes.DOM,
      endType: endTypes.COUNT,
      interval: 1,
      dayArray: ['SU', 'MO', 'TH'],
      count: 10,
      startDate: '2018-10-19',
      endDate: '2019-09-10',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      repeatByType: repeatByTypes.DOW,
      endType: endTypes.DATE,
      interval: 1,
      dayArray: ['SU', 'MO', 'TH'],
      count: 10,
      startDate: '2017-10-19',
      endDate: '2018-09-10',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      repeatByType: repeatByTypes.DOW,
      endType: endTypes.DATE,
      interval: 1,
      dayArray: ['FR'],
      count: 10,
      startDate: '2017-10-30',
      endDate: '2018-09-10',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      repeatByType: repeatByTypes.DOM,
      endType: endTypes.DATE,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2018-10-30',
      endDate: '2022-09-10',
    },
    {
      //
      repeatType: repeatTypes.MONTHLY,
      repeatByType: repeatByTypes.DOM,
      endType: endTypes.DATE,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2018-10-31',
      endDate: '2022-11-10',
    },
  ],
  parseYearly: [
    {
      //
      repeatType: repeatTypes.YEARLY,
      interval: 1,
      dayArray: [],
      count: 0,
      startDate: '2017-10-19',
      endDate: '2027-10-19',
    },
    {
      //
      repeatType: repeatTypes.YEARLY,
      interval: 2,
      dayArray: [],
      count: 20,
      startDate: '2017-10-19',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.YEARLY,
      interval: 2,
      dayArray: ['SU', 'MO', 'TH'],
      count: 0,
      startDate: '2017-10-19',
      endDate: '',
    },
    {
      //
      repeatType: repeatTypes.YEARLY,
      interval: 2,
      dayArray: ['SU', 'MO', 'TH'],
      count: 0,
      startDate: '2017-10-29',
      endDate: '',
    },
  ],
};

const main = () => {
  console.log('Daily Recurrence');
  console.log(cases.parseDaily.map(rrule));

  console.log('Weekly Recurrence');
  console.log(cases.parseWeekly.map(rrule));

  console.log('Monthly Recurrence');
  console.log(cases.parseMonthly.map(rrule));

  console.log('Yearly Recurrence');
  console.log(cases.parseYearly.map(rrule));
};

main();
