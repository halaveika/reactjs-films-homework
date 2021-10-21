import { moduleHotAccept } from '../moduleHotAccept';

test('should only call hot.accept() if hot is defined', () => {
  const accept = jest.fn();
  const mockModule = { hot: { accept } };
  moduleHotAccept(mockModule);
  expect(accept).toHaveBeenCalled();
});

test('should not throw if module is undefined', () => {
  expect(moduleHotAccept).not.toThrow();
});

test('should not throw if module.hot is undefined', () => {
  expect(
    () => moduleHotAccept({ notHot: -273 }),
  ).not.toThrow();
});
