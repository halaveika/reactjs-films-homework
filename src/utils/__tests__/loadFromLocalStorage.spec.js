import loadFromLocalStorage from '../loadFromLocalStorage';

const mockState = {
  test: 'TestState'
}

describe('loadFromLocalStorage', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });
  

  it('should load from localstorage and return object', () => {
    const serializedState = JSON.stringify(mockState);
    localStorage.setItem('teststate', serializedState);
    jest.spyOn(localStorage.__proto__,'getItem').mockImplementation(()=>serializedState)
    const result = loadFromLocalStorage();
    localStorage.removeItem('teststate');
    expect(result).toEqual(mockState);
    expect(result).toMatchSnapshot();
  });

  it('if localstorage is empty should return undefined', () => {
    const result = loadFromLocalStorage();
    expect(result).toBeUndefined();
  });
  
});
