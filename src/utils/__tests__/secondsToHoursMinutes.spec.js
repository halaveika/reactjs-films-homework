import secondsToHoursMinutes from '../secondsToHoursMinutes';

describe('secondsToHoursMinutes', () => {
  test('secondsToHoursMinutes should transform number mim into string hours and min', async () => {
    expect(secondsToHoursMinutes(100)).toBe('1h 40m');
    expect(secondsToHoursMinutes(60)).toBe('60m');
  });
});
