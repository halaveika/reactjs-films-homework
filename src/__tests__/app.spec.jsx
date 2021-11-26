import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ShallowRenderer from 'react-test-renderer/shallow'
import App from '../app';
import { store,persistor} from '../modules/store';


window.matchMedia = window.matchMedia || function mMedia() {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('test App component', () => {
  // it('should render App component', () => {
  //   const component = create(
  //     <Provider store={store}>
  //       <PersistGate loading={null} persistor={persistor}>
  //         <BrowserRouter>
  //           <App />
  //         </BrowserRouter>
  //       </PersistGate>
  //     </Provider>,
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });


  it('Matches snapshot ShallowRenderer', () => {
    const renderer = new ShallowRenderer()
    const result = renderer.render(
            <App />
    )
    expect(result).toMatchSnapshot()
  })
  
});



