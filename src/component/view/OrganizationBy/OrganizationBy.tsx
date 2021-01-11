import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Organization } from '../../../model';
import { OrganizationView } from '../../../component';
import { IOrganizationByProps } from '../../';

interface OrganzationByProps<T> extends IOrganizationByProps {
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

  return (
    <>
      <OrganizationView organization={organization} term={String(term)} />
    </>
  );
};

OrganizationBy.propTypes = {
  term: PropTypes.any,
};

export { OrganizationBy as default, OrganizationBy };
