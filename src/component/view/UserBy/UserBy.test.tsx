import React from 'react';
import { UserBy } from './UserBy';
import { render, screen, waitFor } from '@testing-library/react';
import { UserRepository } from '../../../repository';

describe('UserBy', () => {
  it('should render user', async () => {
    const term = 10;

    render(
      <UserBy
        term={term}
        setLoading={() => undefined}
        getUserBy={new UserRepository().getById}
      />
    );

    const result = await waitFor(() => screen.getByText(term));

    expect(result).toBeDefined();
  });

  it('should not render user', () => {
    const term = ' ';

    render(
      <UserBy term={term} setLoading={() => undefined} getUserBy={jest.fn()} />
    );

    expect(screen.queryByText('No user found.')).toBeDefined();
  });

  it('should render null', () => {
    const term = undefined;

    render(
      <UserBy term={term} setLoading={() => undefined} getUserBy={jest.fn()} />
    );

    expect(screen.queryByText('No user found.')).toBeNull();
  });
});
