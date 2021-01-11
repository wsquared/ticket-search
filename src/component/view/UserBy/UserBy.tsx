import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { User } from '../../../model';
import { UserView } from '../../../component';
import { ISearchByProps } from '../../';

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

  const fetchTicket = useCallback(
    async (term: T) => {
      setLoading(true);
      setUser(await getUserBy(term));
      setLoading(false);
    },
    [term]
  );

  useEffect(() => {
    fetchTicket(term);
  }, [term]);

  return (
    <>
      <UserView user={user} term={String(term)} key={uuid()} />
    </>
  );
};

UserBy.propTypes = {
  term: PropTypes.any,
};

export { UserBy as default, UserBy };
