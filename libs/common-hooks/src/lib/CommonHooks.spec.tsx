import { render } from '@testing-library/react';

import CommonHooks from './CommonHooks';

describe('CommonHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonHooks />);
    expect(baseElement).toBeTruthy();
  });
});
