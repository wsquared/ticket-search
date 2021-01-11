import { Text, Box } from 'ink';
import React from 'react';
import type { Organization } from '../../../model';

export const OrganizationView: React.FC<{
  organization: Organization;
}> = ({ organization }) => {
  const width = 15;

  const organizationProperties = [
    ['Id', organization.id],
    ['Url', organization.url],
    ['ExternalId', organization.externalId],
    ['Name', organization.name],
    ['DomainNames', organization.domainNames.join(' ')],
    ['CreatedAt', organization.createdAt],
    ['Details', organization.details],
    ['SharedTickets', String(organization.sharedTickets)],
    ['Tags', organization.tags.join(' ')],
  ];

  return (
    <>
      <Box margin={2} flexDirection="column" justifyContent="flex-start">
        {organizationProperties.map((ticket, index) => (
          <Box flexDirection="row" key={index}>
            <Box width={width}>
              <Text color="green">{ticket[0]}</Text>
            </Box>
            <Text color="white">{ticket[1]}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};
