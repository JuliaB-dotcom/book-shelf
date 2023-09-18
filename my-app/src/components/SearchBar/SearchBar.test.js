import { render, fireEvent, getByLabelText } from '@testing-library/react';
import SearchBar from './SearchBar';

test('Select input', async () => {
  render(<SearchBar />);
  const check = getByLabelText();
  console.warn(await response.api());
  expect('hello').toEqual('hello');
  
});
