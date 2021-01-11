import React from 'react';
import { OrganizationBy } from './OrganizationBy';
import { render, screen } from '@testing-library/react';

describe('OrganizationBy', () => {
  it('should render organization', () => {
    const term = 108;
    const fn = jest.fn();

    render(
      <OrganizationBy
        term={term}
        setLoading={() => undefined}
        getOrganizationBy={fn}
      />
    );

    expect(fn).toBeCalledWith(term);
  });

  it('should not render organization', () => {
    const term = 0;

    const fn = jest.fn();

    render(
      <OrganizationBy
        term={term}
        setLoading={() => undefined}
        getOrganizationBy={fn}
      />
    );

    expect(screen.queryByText('No tickets found.')).toBeDefined();
  });

  it('should render null', () => {
    const term = undefined;

    render(
      <OrganizationBy
        term={term}
        setLoading={() => undefined}
        getOrganizationBy={jest.fn()}
      />
    );

    expect(screen.queryByText('No tickets found.')).toBeNull();
  });
});
