import React from 'react';
import { OrganizationView } from './Organization';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

describe('OrganizationView', () => {
  const id = faker.random.number();
  const url = faker.internet.url();
  const externalId = faker.random.uuid();
  const createdAt = faker.date.recent().toISOString();
  const name = faker.lorem.word();
  const tags = faker.lorem.words().split(' ');
  const details = faker.random.word();
  const domainNames = [
    faker.internet.domainName(),
    faker.internet.domainName(),
  ];
  const sharedTickets = false;

  beforeEach(() => {
    render(
      <OrganizationView
        organization={{
          id,
          url,
          externalId,
          createdAt,
          name,
          tags,
          details,
          domainNames,
          sharedTickets,
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

  it('should render tags', () => {
    screen.getByText('Tags');
    screen.getByText(tags.join(' '));
  });

  it('should render details', () => {
    screen.getByText('Details');
    screen.getByText(details);
  });

  it('should render domainNames', () => {
    screen.getByText('DomainNames');
    screen.getByText(domainNames.join(' '));
  });

  it('should render sharedTickets', () => {
    screen.getByText('SharedTickets');
    screen.getByText(sharedTickets.toString());
  });
});
