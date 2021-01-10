import React, { useState } from 'react';
import { Organization } from '../../../model';
import { OrganizationBy } from './OrganizationBy';
import { render, screen, waitFor, act, cleanup } from '@testing-library/react';
import { OrganizationRepository } from '../../../repository';

describe('OrganizationBy', () => {
  it('should render organization', async () => {
    const term = 108;

    render(
      <OrganizationBy
        term={term}
        setLoading={() => undefined}
        getOrganizationBy={new OrganizationRepository().getById}
      />
    );

    await waitFor(() => {
      screen.getByText(term);
    });
  });

  it('should not render organization', () => {
    render(
      <OrganizationBy
        term={0}
        setLoading={() => undefined}
        getOrganizationBy={new OrganizationRepository().getById}
      />
    );

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeDefined();
    });
  });

  it('should render null', () => {
    render(
      <OrganizationBy
        term={undefined}
        setLoading={() => undefined}
        getOrganizationBy={new OrganizationRepository().getById}
      />
    );

    act(() => {
      expect(screen.queryByText('No tickets found.')).toBeNull();
    });
  });
});
