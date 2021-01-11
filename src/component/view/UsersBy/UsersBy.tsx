import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { User } from '../../../model';
import { UserView } from '../../../component';
import { IUserByProps } from '../../';

interface UsersByProps<T> extends IUserByProps {
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

  const fetchTickets = useCallback(
    async (term: T) => {
      setLoading(true);
      setUsers(await getUsersBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTickets(term);
  }, [term]);

  if (!users || users.length < 1) {
    return <UserView user={undefined} term={String(term)} />;
  }

  return (
    <>
      {users.map((user) => (
        <UserView user={user} term={String(term)} key={user.id} />
      ))}
    </>
  );
};

UsersBy.propTypes = {
  term: PropTypes.any,
};

export { UsersBy as default, UsersBy };
