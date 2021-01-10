import React from 'react';
import { Loading } from './Loading';
import { render, screen, waitFor } from '@testing-library/react';

describe('Loading', () => {
  it('should render loading...', async () => {
    render(<Loading isLoading={true} />);

    expect(screen.queryByText(/loading/gi)).toBeDefined();
  });

  it('should not render loading...', async () => {
    render(<Loading isLoading={false} />);

    expect(screen.queryByText(/loading/gi)).toBeNull();
  });
});
