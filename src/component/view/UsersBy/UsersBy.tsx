import React, { useEffect, useCallback, useState } from 'react';
import { Box, Text } from 'ink';
import PropTypes from 'prop-types';
import { User, Organization } from '../../../model';
import { UserView, OrganizationView } from '../../../component';
import { ISearchByProps } from '../../';
import { NotFound } from '../NotFound/NotFound';
import { OrganizationRepository } from '../../../repository';

interface UsersByProps<T> extends ISearchByProps {
  term?: T;
  getUsersBy: (term: T) => Promise<User[]>;
}

/// Search users by term
const UsersBy = <T extends unknown>({
  term,
  setLoading,
  getUsersBy,
}: UsersByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [organizationsMap, setOrganizationsMap] = useState<
    Map<number, Organization>
  >(new Map());

  const fetchTickets = useCallback(
    async (term: T) => {
      setLoading(true);
      const tempUsers = await getUsersBy(term);

      if (tempUsers && tempUsers.length > 0) {
        const organizationRepository = new OrganizationRepository();

        await Promise.all(
          tempUsers.map(async (user) => {
            organizationsMap.set(
              user.id,
              await organizationRepository.getById(
                user.organizationId as number
              )
            );
          })
        );

        setOrganizationsMap(organizationsMap);
      }

      setUsers(tempUsers);
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTickets(term);
  }, [term]);

  if (!users || users.length < 1) {
    return <NotFound item={'user'} />;
  }

  return (
    <>
      {users.map((user) => (
        <Box key={user.id} flexDirection="column">
          <Box marginLeft={2}>
            <Text color="blue">USER found with search term: {term}</Text>
          </Box>
          <UserView user={user} key={user.id} />
          {organizationsMap.get(user.id) ? (
            <>
              <Box marginLeft={2}>
                <Text color="yellow">Organization</Text>
              </Box>
              <OrganizationView
                organization={organizationsMap.get(user.id) as Organization}
              />
            </>
          ) : null}
        </Box>
      ))}
    </>
  );
};

UsersBy.propTypes = {
  term: PropTypes.any,
};

export { UsersBy as default, UsersBy };
