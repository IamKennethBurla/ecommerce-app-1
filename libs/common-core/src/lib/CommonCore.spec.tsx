import { render } from '@testing-library/react';

import CommonCore from './CommonCore';

describe('CommonCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonCore />);
    expect(baseElement).toBeTruthy();
  });
});
