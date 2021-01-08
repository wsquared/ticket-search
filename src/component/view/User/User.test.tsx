import React from 'react';
import { UserView } from './User';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

describe('UserView', () => {
  const id = faker.random.number();
  const url = faker.internet.url();
  const externalId = faker.random.uuid();
  const createdAt = faker.date.recent().toISOString();
  const name = faker.name.findName();
  const alias = faker.name.findName();
  const active = true;
  const verified = true;
  const shared = true;
  const locale = faker.random.locale();
  const timezone = faker.date.recent().toISOString();
  const tags = faker.lorem.words().split(' ');
  const lastLoginAt = faker.date.recent().toISOString();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();
  const signature = faker.random.words();
  const organizationId = faker.random.number();
  const suspended = true;
  const role = faker.name.jobDescriptor();

  beforeEach(() => {
    render(
      <UserView
        user={{
          id,
          url,
          externalId,
          createdAt,
          name,
          alias,
          active,
          verified,
          shared,
          locale,
          timezone,
          tags,
          lastLoginAt,
          email,
          phone,
          signature,
          organizationId,
          suspended,
          role,
        }}
      />
    );
  });

  it('should render id', () => {
    screen.getByText('Id');
    screen.getByText(id);
  });

  it('should render url', () => {
    screen.getByText('Url');
    screen.getByText(url);
  });

  it('should render externalId', () => {
    screen.getByText('ExternalId');
    screen.getByText(externalId);
  });

  it('should render createdAt', () => {
    screen.getByText('CreatedAt');
    screen.getByText(createdAt);
  });

  it('should render name', () => {
    screen.getByText('Name');
    screen.getByText(name);
  });

  it('should render alias', () => {
    screen.getByText('Alias');
    screen.getByText(alias);
  });

  it('should render active', () => {
    screen.getByText('Active');
  });

  it('should render verified', () => {
    screen.getByText('Verified');
  });

  it('should render shared', () => {
    screen.getByText('Shared');
  });

  it('should render locale', () => {
    screen.getByText('Locale');
    screen.getByText(locale);
  });

  it('should render timezone', () => {
    screen.getByText('Timezone');
    screen.getByText(timezone);
  });

  it('should render organizationId', () => {
    screen.getByText('OrganizationId');
    screen.getByText(organizationId);
  });

  it('should render tags', () => {
    screen.getByText('Tags');
    screen.getByText(tags.join(' '));
  });

  it('should render lastLoginAt', () => {
    screen.getByText('LastLoginAt');
    screen.getByText(lastLoginAt);
  });

  it('should render email', () => {
    screen.getByText('Email');
    screen.getByText(email);
  });

  it('should render phone', () => {
    screen.getByText('Phone');
    screen.getByText(phone);
  });

  it('should render signature', () => {
    screen.getByText('Signature');
    screen.getByText(signature);
  });

  it('should render suspended', () => {
    screen.getByText('Suspended');
  });

  it('should render role', () => {
    screen.getByText('Role');
    screen.getByText(role);
  });
});
