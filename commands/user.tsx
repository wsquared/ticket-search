import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Loading, UserBy, UsersBy } from '../src/component';
import { UserRepository } from '../src/repository';

interface organizationByProps {
  id?: number;
  url?: string;
  externalId?: string;
  email?: string;
  phone?: string;
  name?: string;
  alias?: string;
  createdAt?: string;
  active?: boolean;
  verified?: boolean;
  shared?: boolean;
  locale?: string;
  timezone?: string;
  lastLoginAt?: string;
  signature?: string;
  organizationId?: number;
  tag?: string;
  suspended?: boolean;
  role?: string;
}

/// Search users
const organization: React.FC<organizationByProps> = ({
  id,
  url,
  externalId,
  email,
  phone,
  name,
  alias,
  createdAt,
  active,
  verified,
  shared,
  locale,
  timezone,
  lastLoginAt,
  signature,
  organizationId,
  tag,
  suspended,
  role,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const userRepository = new UserRepository();

  return (
    <>
      <Loading isLoading={loading} />
      <UserBy
        term={id}
        setLoading={setLoading}
        getUserBy={userRepository.getById}
      />
      <UserBy
        term={url}
        setLoading={setLoading}
        getUserBy={userRepository.getByUrl}
      />
      <UserBy
        term={externalId}
        setLoading={setLoading}
        getUserBy={userRepository.getByExternalId}
      />
      <UserBy
        term={email}
        setLoading={setLoading}
        getUserBy={userRepository.getByEmail}
      />
      <UserBy
        term={phone}
        setLoading={setLoading}
        getUserBy={userRepository.getByPhone}
      />
      <UsersBy
        term={name}
        setLoading={setLoading}
        getUsersBy={userRepository.getByName}
      />
      <UsersBy
        term={alias}
        setLoading={setLoading}
        getUsersBy={userRepository.getByAlias}
      />
      <UsersBy
        term={createdAt}
        setLoading={setLoading}
        getUsersBy={userRepository.getByCreatedAt}
      />
      <UsersBy
        term={active}
        setLoading={setLoading}
        getUsersBy={userRepository.getByActive}
      />
      <UsersBy
        term={verified}
        setLoading={setLoading}
        getUsersBy={userRepository.getByVerified}
      />
      <UsersBy
        term={shared}
        setLoading={setLoading}
        getUsersBy={userRepository.getByShared}
      />
      <UsersBy
        term={locale}
        setLoading={setLoading}
        getUsersBy={userRepository.getByLocale}
      />
      <UsersBy
        term={timezone}
        setLoading={setLoading}
        getUsersBy={userRepository.getByTimezone}
      />
      <UsersBy
        term={lastLoginAt}
        setLoading={setLoading}
        getUsersBy={userRepository.getByLastLoginAt}
      />
      <UsersBy
        term={signature}
        setLoading={setLoading}
        getUsersBy={userRepository.getBySignature}
      />
      <UsersBy
        term={organizationId}
        setLoading={setLoading}
        getUsersBy={userRepository.getByOrganizationId}
      />
      <UsersBy
        term={tag}
        setLoading={setLoading}
        getUsersBy={userRepository.getByTag}
      />
      <UsersBy
        term={suspended}
        setLoading={setLoading}
        getUsersBy={userRepository.getBySuspended}
      />
      <UsersBy
        term={role}
        setLoading={setLoading}
        getUsersBy={userRepository.getByRole}
      />
    </>
  );
};

organization.propTypes = {
  /// Search users by id
  id: PropTypes.number,
  /// Search users by url
  url: PropTypes.string,
  /// Search users by external id
  externalId: PropTypes.string,
  /// Search users by email
  email: PropTypes.string,
  /// Search users by phone
  phone: PropTypes.string,
  /// Search users by signature
  signature: PropTypes.string,
  /// Search users by created at
  name: PropTypes.string,
  /// Search users by alias
  alias: PropTypes.string,
  /// Search users by createdAt
  createdAt: PropTypes.string,
  /// Search users by active
  active: PropTypes.bool,
  /// Search users by verified
  verified: PropTypes.bool,
  /// Search users by verified
  shared: PropTypes.bool,
  /// Search users by locale
  locale: PropTypes.string,
  /// Search users by timezone
  timezone: PropTypes.string,
  /// Search users by lastLoginAt
  lastLoginAt: PropTypes.string,
  /// Search users by organizationId
  organizationId: PropTypes.number,
  /// Search users by tag
  tag: PropTypes.string,
  /// Search users by suspended
  suspended: PropTypes.bool,
  /// Search users by role
  role: PropTypes.string,
};

export default organization;
