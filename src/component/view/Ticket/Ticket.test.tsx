import React from 'react';
import { TicketView } from './Ticket';
import { render, screen } from '@testing-library/react';
import faker from 'faker';

describe('TicketView', () => {
  const id = faker.random.uuid();
  const url = faker.internet.url();
  const externalId = faker.random.uuid();
  const createdAt = faker.date.recent().toISOString();
  const type = faker.random.word();
  const subject = faker.lorem.slug();
  const description = faker.lorem.paragraph();
  const priority = faker.lorem.word();
  const status = faker.lorem.word();
  const submitterId = faker.random.number();
  const assigneeId = faker.random.number();
  const tags = faker.lorem.words().split(' ');
  const hasIncidents = false;
  const dueAt = faker.date.future().toISOString();
  const via = faker.lorem.word();
  const organizationId = faker.random.number();

  beforeEach(() => {
    render(
      <TicketView
        ticket={{
          id,
          url,
          externalId,
          createdAt,
          type,
          subject,
          description,
          priority,
          status,
          submitterId,
          assigneeId,
          tags,
          hasIncidents,
          dueAt,
          via,
          organizationId,
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

  it('should render type', () => {
    screen.getByText('Type');
    screen.getByText(type);
  });

  it('should render subject', () => {
    screen.getByText('Subject');
    screen.getByText(subject);
  });

  it('should render description', () => {
    screen.getByText('Description');
    screen.getByText(description);
  });

  it('should render priority', () => {
    screen.getByText('Priority');
    screen.getByText(priority);
  });

  it('should render status', () => {
    screen.getByText('Status');
    screen.getByText(status);
  });

  it('should render submitterId', () => {
    screen.getByText('SubmitterId');
    screen.getByText(submitterId);
  });

  it('should render assigneeId', () => {
    screen.getByText('AssigneeId');
    screen.getByText(assigneeId);
  });

  it('should render organizationId', () => {
    screen.getByText('OrganizationId');
    screen.getByText(organizationId);
  });

  it('should render tags', () => {
    screen.getByText('Tags');
    screen.getByText(tags.join(' '));
  });

  it('should render hasIncidents', () => {
    screen.getByText('HasIncidents');
    screen.getByText(hasIncidents.toString());
  });

  it('should render dueAt', () => {
    screen.getByText('DueAt');
    screen.getByText(dueAt);
  });

  it('should render via', () => {
    screen.getByText('Via');
    screen.getByText(via);
  });
});
