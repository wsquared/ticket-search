import React from 'react';
import { UsersBy } from './UsersBy';
import { render, screen, waitFor } from '@testing-library/react';
import { UserRepository } from '../../../repository';

describe('UsersBy', () => {
  it('should render users', async () => {
    const term = 'admin';

    render(
      <UsersBy
        term={term}
        setLoading={() => undefined}
        getUsersBy={new UserRepository().getByRole}
      />
    );

    await waitFor(() => screen.getAllByText(term));
  });

  it('should not render users', async () => {
    const term = ' ';

    render(
      <UsersBy
        term={term}
        setLoading={() => undefined}
        getUsersBy={jest.fn()}
      />
    );

    const result = await waitFor(() => screen.getByText('No user found.'));

    expect(result).toBeDefined();
  });

  it('should render null', () => {
    render(
      <UsersBy
        term={undefined}
        setLoading={() => undefined}
        getUsersBy={jest.fn()}
      />
    );

    const result = screen.queryByText('No user found.');

    expect(result).toBeNull();
  });
});
