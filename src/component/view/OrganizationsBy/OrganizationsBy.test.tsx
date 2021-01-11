import React, { useState } from 'react';
import { Organization } from '../../../model';
import { OrganizationsBy } from './OrganizationsBy';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import { OrganizationRepository } from '../../../repository';

describe('OrganizationsBy', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render organizations', async () => {
    const term = 'Artisan';

    render(
      <OrganizationsBy
        term={term}
        setLoading={() => undefined}
        getOrganizationsBy={new OrganizationRepository().getByDetails}
      />
    );

    const result = await waitFor(() => screen.getAllByText(term));

    expect(result).toBeDefined();
  });

  it('should not render organizations', async () => {
    render(
      <OrganizationsBy
        term={' '}
        setLoading={() => undefined}
        getOrganizationsBy={jest.fn()}
      />
    );

    const result = await waitFor(() =>
      screen.getByText('No organization found.')
    );

    expect(result).toBeDefined();
  });

  it('should render null', () => {
    act(() => {
      render(
        <OrganizationsBy
          term={undefined}
          setLoading={() => undefined}
          getOrganizationsBy={jest.fn()}
        />
      );
    });

    expect(screen.queryByText('No organization found.')).toBeNull();
  });
});
