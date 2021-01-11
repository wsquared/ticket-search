import { Text, Box } from 'ink';
import React from 'react';
import type { User } from '../../../model/User';

export const UserView: React.FC<{ user?: User; term?: string }> = ({
  user,
  term,
}) => {
  const width = 15;

  if (!user) {
    return (
      <Box>
        <Text color="yellowBright">No user found.</Text>
      </Box>
    );
  }

  const userProperties = [
    ['Id', user.id],
    ['Url', user.url],
    ['ExternalId', user.externalId],
    ['CreatedAt', user.createdAt],
    ['Name', user.name],
    ['Alias', user.alias],
    ['Active', user.active.toString()],
    ['Verified', user.verified.toString()],
    ['Shared', user.shared.toString()],
    ['Locale', user.locale],
    ['Timezone', user.timezone],
    ['LastLoginAt', user.lastLoginAt],
    ['Email', user.email],
    ['Phone', user.phone],
    ['Signature', user.signature],
    ['OrganizationId', user.organizationId],
    ['Tags', user.tags.join(' ')],
    ['Suspended', user.suspended.toString()],
    ['Role', user.role],
  ];

  return (
    <>
      <Box margin={2} flexDirection="column" justifyContent="flex-start">
        <Box marginBottom={2}>
          <Text color="greenBright">USER found with search term: {term}</Text>
        </Box>
        {userProperties.map((user, index) => (
          <Box flexDirection="row" key={index}>
            <Box width={width}>
              <Text color="green">{user[0]}</Text>
            </Box>
            <Text color="white">{user[1]}</Text>
          </Box>
        ))}
      </Box>
    </>
  );
};
