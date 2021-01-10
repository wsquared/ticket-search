import React from 'react';
import { Spinner } from './Spinner';
import { render, screen, waitFor } from '@testing-library/react';

describe('Spinner', () => {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  beforeEach(() => {
    render(<Spinner />);
  });

  it('should render a frame 0', async () => {
    await waitFor(() => screen.getByText(frames[0]));
  });

  it('should render a frame 1', async () => {
    await waitFor(() => screen.getByText(frames[1]));
  });

  it('should render a frame 2', async () => {
    await waitFor(() => screen.getByText(frames[2]));
  });

  it('should render a frame 3', async () => {
    await waitFor(() => screen.getByText(frames[3]));
  });

  it('should render a frame 4', async () => {
    await waitFor(() => screen.getByText(frames[4]));
  });

  it('should render a frame 5', async () => {
    await waitFor(() => screen.getByText(frames[5]));
  });

  it('should render a frame 6', async () => {
    await waitFor(() => screen.getByText(frames[6]));
  });

  it('should render a frame 7', async () => {
    await waitFor(() => screen.getByText(frames[7]));
  });

  it('should render a frame 8', async () => {
    await waitFor(() => screen.getByText(frames[8]));
  });
});
