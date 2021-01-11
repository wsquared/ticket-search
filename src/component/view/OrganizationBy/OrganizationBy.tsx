import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'ink';
import { Organization } from '../../../model';
import { OrganizationView } from '../../../component';
import { ISearchByProps } from '../../';
import { NotFound } from '../NotFound/NotFound';

interface OrganzationByProps<T> extends ISearchByProps {
  term?: T;
  getOrganizationBy: (term: T) => Promise<Organization>;
}

/// Search organizations by term
const OrganizationBy = <T extends unknown>({
  term,
  setLoading,
  getOrganizationBy,
}: OrganzationByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [organization, setOrganization] = useState<Organization>();

  const fetchOrganization = useCallback(
    async (term: T) => {
      setLoading(true);
      setOrganization(await getOrganizationBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchOrganization(term);
  }, [fetchOrganization, term]);

  if (!organization) {
    return <NotFound item={'organization'} />;
  }

  return (
    <>
      <Box marginLeft={2}>
        <Text color="blue">ORGANIZATION found with search term: {term}</Text>
      </Box>
      <OrganizationView organization={organization} />
    </>
  );
};

OrganizationBy.propTypes = {
  term: PropTypes.any,
};

export { OrganizationBy as default, OrganizationBy };
