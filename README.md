# Recurrence Rules

```
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
```

# Results

```
Daily Recurrence
[
  {
    toString: 'Every day starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=DAILY;INTERVAL=1;'
  },
  {
    toString: 'Every 3 days starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=DAILY;INTERVAL=3;'
  }
]
Weekly Recurrence
[
  {
    toString: 'Every week starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;'
  },
  {
    toString: 'Every 3 weeks starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=WEEKLY;INTERVAL=3;BYDAY=TH;'
  },
  {
    toString: 'Every 2 weeks on Sunday Monday and Thursday starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=SU,MO,TH;'
  }
]
Monthly Recurrence
[
  {
    toString: 'Every month on the 19th day of the month starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=19;'
  },
  {
    toString: 'Every 3 months on the 10th day of the month starting 10/10/2017 ',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=10;'
  },
  {
    toString: 'Every month on the 3rd Sunday Monday and Thursday of the month starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=3SU,3MO,3TH;'
  },
  {
    toString: 'Every 2 months on the last Sunday Monday and Thursday of the month starting 10/29/2017 ',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=2;BYDAY=-1SU,-1MO,-1TH;'
  },
  {
    toString: 'Every month on the 19th day of the month starting 10/19/2018 and ending after 10 occurrences.',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;COUNT=10;BYMONTHDAY=19;'
  },
  {
    toString: 'Every month on the 3rd Sunday Monday and Thursday of the month starting 10/19/2017 and ending on 09/10/2018',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=3SU,3MO,3TH;'
  },
  {
    toString: 'Every month on the last Friday of the month starting 10/30/2017 and ending on 09/10/2018',
    rrule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYDAY=-1FR;'
  }
]
Yearly Recurrence
[
  {
    toString: 'Every year on the 19th day of Oct starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=YEARLY;INTERVAL=1;'
  },
  {
    toString: 'Every 2 years on the 19th day of Oct starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=YEARLY;INTERVAL=2;'
  },
  {
    toString: 'Every 2 years on the 3rd Sunday Monday and Thursday of Oct starting 10/19/2017 ',
    rrule: 'RRULE:FREQ=YEARLY;INTERVAL=2;BYDAY=3SU,3MO,3TH;'
  },
  {
    toString: 'Every 2 years on the last Sunday Monday and Thursday of Oct starting 10/29/2017 ',
    rrule: 'RRULE:FREQ=YEARLY;INTERVAL=2;BYDAY=-1SU,-1MO,-1TH;'
  }
]
```
