import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Organization } from '../../../model';
import { OrganizationView } from '../../../component';
import { ISearchByProps } from '../../';

interface OrganizationsByProp<T> extends ISearchByProps {
  term?: T;
  getOrganizationsBy: (term: T) => Promise<Organization[]>;
}

/// Search organizations by term
const OrganizationsBy = <T extends unknown>({
  term,
  setLoading,
  getOrganizationsBy,
}: OrganizationsByProp<T>) => {
  if (term === undefined) {
    return null;
  }

  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const fetchOrganizations = useCallback(
    async (term: T) => {
      setLoading(true);
      setOrganizations(await getOrganizationsBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    (async () => {
      fetchOrganizations(term);
    })();
  }, [fetchOrganizations, term]);

  if (!organizations || organizations.length < 1) {
    return <OrganizationView organization={undefined} term={String(term)} />;
  }

  return (
    <>
      {organizations.map((organization) => (
        <OrganizationView
          organization={organization}
          term={String(term)}
          key={organization.id}
        />
      ))}
    </>
  );
};

OrganizationsBy.propTypes = {
  term: PropTypes.any,
};

export { OrganizationsBy as default, OrganizationsBy };
