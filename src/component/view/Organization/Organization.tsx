import { Text, Box } from 'ink';
import React from 'react';
import { v4 as uuid } from 'uuid';
import type { Organization } from '../../../model';

export const OrganizationView: React.FC<{
  organization?: Organization;
  term?: string;
}> = ({ organization, term }) => {
  const width = 15;

  if (!organization) {
    return (
      <Box>
        <Text color="yellowBright">No organization found.</Text>
      </Box>
    );
  }

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
        <Box marginBottom={2}>
          <Text color="greenBright">
            ORGANIZATION found with the search term: {term}
          </Text>
        </Box>
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
