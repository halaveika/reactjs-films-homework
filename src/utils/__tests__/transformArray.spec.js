import transformArray from '../transformArray';

describe('transformArray', () => {
  test('transformArray should transform input array', async () => {
    const array2 = [{
      id: 13,
      name: 'Adventure',
    }, {
      id: 18,
      name: 'Drama',
    }, {
      id: 20,
      name: 'Family',
    }, {
      id: 21,
      name: 'Fantasy',
    }];
    const array1 = [18, 20];

    const result = transformArray(array1, array2);
    expect(result).toEqual(['Drama', 'Family']);
  });
});
