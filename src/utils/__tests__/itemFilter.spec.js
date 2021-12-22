import itemfilter from '../itemFilter';

const item = [{
  id: 2412412,
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
},
{
  id: 41412,
  title: 'Sopranos',
  genres: ['drama', 'Criminal', 'comedy'],
  vote_average: 10,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
}];

describe('itemfilter', () => {
  test('itemfilter should filter array', async () => {
    const result = itemfilter(item, 'Criminal');
    expect(result).toEqual([item[1]]);
    expect(result).toMatchSnapshot();
  });

  test('itemfilter should not filter array if there are not pass genre', async () => {
    const result = itemfilter(item, '');
    expect(result).toEqual(item);
    expect(result).toMatchSnapshot();
  });
});
