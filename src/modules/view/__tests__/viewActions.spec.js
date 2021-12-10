import { setGenre, setListFlexDirection } from '../viewActions';
import { store } from '../../store';

describe('view actions', () => {
  test('setGenre actioin change store', async () => {
    await store.dispatch(setGenre('Drama'));
    expect(store.getState()).toMatchSnapshot();
  });

  test('setListFlexDirection actioin change store', async () => {
    await store.dispatch(setListFlexDirection(false));
    expect(store.getState()).toMatchSnapshot();
  });
});
