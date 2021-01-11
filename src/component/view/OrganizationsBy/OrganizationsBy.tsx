import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'ink';
import { Organization } from '../../../model';
import { OrganizationView } from '../../../component';
import { ISearchByProps } from '../../';
import { NotFound } from '../NotFound/NotFound';

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
    return <NotFound item={'organization'} />;
  }

  return (
    <>
      {organizations.map((organization) => (
        <Box key={organization.id} flexDirection="column">
          <Box marginLeft={2}>
            <Text color="blue">
              ORGANIZATION found with search term: {term}
            </Text>
          </Box>
          <OrganizationView organization={organization} key={organization.id} />
        </Box>
      ))}
    </>
  );
};

OrganizationsBy.propTypes = {
  term: PropTypes.any,
};

export { OrganizationsBy as default, OrganizationsBy };
