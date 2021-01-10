import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, OrganizationBy } from '../src/component';
import { Organization } from '../src/model';
import { OrganizationRepository } from '../src/repository';

interface organizationByProps {
  id?: number;
  url?: string;
  externalId?: string;
  name?: string;
  domainName?: string;
  createdAt?: string;
  details?: string;
  sharedTickets?: boolean;
  tag?: string;
}

/// Search organization
const organization: React.FC<organizationByProps> = ({
  id,
  url,
  externalId,
  name,
  domainName,
  createdAt,
  details,
  sharedTickets,
  tag,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const organizationRepository = new OrganizationRepository();

  return (
    <>
      <Loading isLoading={loading} />
      <OrganizationBy
        term={id}
        setLoading={setLoading}
        getOrganizationBy={organizationRepository.getById}
      />
      <OrganizationBy
        term={url}
        setLoading={setLoading}
        getOrganizationBy={organizationRepository.getByUrl}
      />
      <OrganizationBy
        term={externalId}
        setLoading={setLoading}
        getOrganizationBy={organizationRepository.getByExternalId}
      />
      <OrganizationBy
        term={name}
        setLoading={setLoading}
        getOrganizationBy={organizationRepository.getByName}
      />
      <OrganizationBy
        term={domainName}
        setLoading={setLoading}
        getOrganizationBy={organizationRepository.getByDomainName}
      />
    </>
  );
};

organization.propTypes = {
  /// Search organizations by id
  id: PropTypes.number,
  /// Search organizations by url
  url: PropTypes.string,
  /// Search organizations by external id
  externalId: PropTypes.string,
  /// Search organizations by created at
  name: PropTypes.string,
  /// Search organizations by domainName
  domainName: PropTypes.string,
  /// Search organizations by createdAt
  createdAt: PropTypes.string,
  /// Search organizations by details
  details: PropTypes.string,
  /// Search organizations by sharedTickets
  sharedTickets: PropTypes.bool,
  /// Search organizations by tag
  tag: PropTypes.string,
};

export default organization;
