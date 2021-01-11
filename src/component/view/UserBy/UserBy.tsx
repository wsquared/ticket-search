import React, { useEffect, useCallback, useState } from 'react';
import { Box, Text } from 'ink';
import PropTypes from 'prop-types';
import { Organization, User } from '../../../model';
import { UserView, OrganizationView } from '../../../component';
import { ISearchByProps } from '../../';
import { NotFound } from '../NotFound/NotFound';
import { OrganizationRepository } from '../../../repository';

interface UserByProps<T> extends ISearchByProps {
  term?: T;
  getUserBy: (term: T) => Promise<User>;
}

/// Search tickets by term
const UserBy = <T extends unknown>({
  term,
  setLoading,
  getUserBy,
}: UserByProps<T>) => {
  if (term === undefined) {
    return null;
  }

  const [user, setUser] = useState<User>();
  const [organization, setOrganization] = useState<Organization>();

  const fetchTicket = useCallback(
    async (term: T) => {
      setLoading(true);
      const tempUser = await getUserBy(term);

      if (tempUser && tempUser.organizationId) {
        setOrganization(
          await new OrganizationRepository().getById(
            tempUser.organizationId as number
          )
        );
      }

      setUser(tempUser);
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTicket(term);
  }, [term]);

  if (!user) {
    return <NotFound item={'user'} />;
  }

  return (
    <>
      <Box marginLeft={2}>
        <Text color="blue">USER found with search term: {term}</Text>
      </Box>
      <UserView user={user} />
      {organization ? (
        <>
          <Box marginLeft={2}>
            <Text color="yellow">Organization</Text>
          </Box>
          <OrganizationView organization={organization} />
        </>
      ) : null}
    </>
  );
};

UserBy.propTypes = {
  term: PropTypes.any,
};

export { UserBy as default, UserBy };
