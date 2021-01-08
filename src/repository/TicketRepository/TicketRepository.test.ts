import { TicketRepository } from './TicketRepository';

describe('TicketRepository', () => {
  let repo: TicketRepository;

  beforeEach(() => {
    repo = new TicketRepository();
  });

  describe('Given an id', () => {
    it('should return a ticket', async () => {
      const id = '436bf9b0-1147-4c0a-8439-6f79833bff5b';

      const result = await repo.getById(id);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(id);
    });

    it('should return no tickets', async () => {
      const id = 'foo';

      expect(await repo.getById(id)).toHaveLength(0);
    });
  });

  describe('Given a description', () => {
    it('should return ticket with an empty description', async () => {
      const term = '';

      const result = await repo.getByDescription(term);

      expect(result).toHaveLength(1);
      expect(result[0].description).toBe('');
    });

    it('should return a ticket with a matching description', async () => {
      const term =
        'Velit Lorem laboris qui enim occaecat veniam. Qui quis voluptate qui incididunt commodo laborum dolor non anim consectetur incididunt id.';

      const result = await repo.getByDescription(term);

      expect(result).toHaveLength(1);
      expect(result[0].description).toBe(term);
    });
  });

  describe('Given a url', () => {
    it('should return ticket with a matching url', async () => {
      const term =
        'http://initech.zendesk.com/api/v2/tickets/9a21f37a-8ac5-4ef1-8b99-f1d4ca9cf170.json';

      const result = await repo.getByUrl(term);

      expect(result).toHaveLength(1);
      expect(result[0].url).toBe(term);
    });

    it('should return empty array', async () => {
      const term = 'http://foo';

      const result = await repo.getByUrl(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given an externalId', () => {
    it('should return ticket with a matching externalId', async () => {
      const term = 'dbf801cc-2d9e-403e-9210-4c870240d270';

      const result = await repo.getByExternalId(term);

      expect(result).toHaveLength(1);
      expect(result[0].externalId).toBe(term);
    });

    it('should return empty array', async () => {
      const term = '';

      const result = await repo.getByExternalId(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a createAt', () => {
    it('should return ticket with a matching createdAt', async () => {
      const term = '2016-07-06T11:16:50 -10:00';

      const result = await repo.getByCreatedAt(term);

      expect(result).toHaveLength(1);
      expect(result[0].createdAt).toBe(term);
    });

    it('should return empty array', async () => {
      const term = '2020-07-06';

      const result = await repo.getByCreatedAt(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a type', () => {
    it('should return tickets with a matching type', async () => {
      const term = 'incident';

      const result = await repo.getByType(term);

      expect(result).toHaveLength(35);
      expect(result[0].type).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 'foobar';

      const result = await repo.getByType(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a subject', () => {
    it('should return tickets with a matching subject', async () => {
      const term = 'A Catastrophe in Cook Islands';

      const result = await repo.getBySubject(term);

      expect(result).toHaveLength(1);
      expect(result[0].subject).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 'A Catastrophe in Beyond Preportions';

      const result = await repo.getBySubject(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a priority', () => {
    it('should return tickets with a matching priority', async () => {
      const term = 'high';

      const result = await repo.getByPriority(term);

      expect(result).toHaveLength(64);
      expect(result[0].priority).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = '';

      const result = await repo.getByPriority(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a status', () => {
    it('should return tickets with a matching status', async () => {
      const term = 'pending';

      const result = await repo.getByStatus(term);

      expect(result).toHaveLength(45);
      expect(result[0].status).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 'foo';

      const result = await repo.getByStatus(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a submitterId', () => {
    it('should return tickets with a matching submitterId', async () => {
      const term = 53;

      const result = await repo.getBySubmitterId(term);

      expect(result).toHaveLength(2);
      expect(result[0].submitterId).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 0;

      const result = await repo.getBySubmitterId(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given an assigneeId', () => {
    it('should return tickets with a matching assigneeId', async () => {
      const term = 53;

      const result = await repo.getByAssigneeId(term);

      expect(result).toHaveLength(2);
      expect(result[0].assigneeId).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 0;

      const result = await repo.getByAssigneeId(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a tag', () => {
    it('should return tickets with a matching tag', async () => {
      const term = 'California';

      const result = await repo.getByTag(term);

      expect(result).toHaveLength(14);
      expect(result[0].tags.indexOf(term) >= 0).toBeTruthy();
    });

    it('should return no tickets', async () => {
      const term = 'foo';

      const result = await repo.getByTag(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given hasIncidents', () => {
    it('should return tickets that does not have incidents', async () => {
      const term = false;

      const result = await repo.getByHasIncidents(term);

      expect(result).toHaveLength(101);
      expect(result[0].hasIncidents).toBe(term);
    });

    it('should return tickets that has incidents', async () => {
      const term = true;

      const result = await repo.getByHasIncidents(term);

      expect(result).toHaveLength(99);
    });
  });

  describe('Given dueAt', () => {
    it('should return tickets with a matching dueAt', async () => {
      const term = '2016-07-31T09:21:42 -10:00';

      const result = await repo.getByDueAt(term);

      expect(result).toHaveLength(1);
      expect(result[0].dueAt).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = '';

      const result = await repo.getByDueAt(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given via', () => {
    it('should return tickets with a via', async () => {
      const term = 'voice';

      const result = await repo.getByVia(term);

      expect(result).toHaveLength(67);
      expect(result[0].via).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = '';

      const result = await repo.getByVia(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given organizationId', () => {
    it('should return tickets with a organizationId', async () => {
      const term = 124;

      const result = await repo.getByOrganizationId(term);

      expect(result).toHaveLength(10);
      expect(result[0].organizationId).toBe(term);
    });

    it('should return no tickets', async () => {
      const term = 0;

      const result = await repo.getByOrganizationId(term);

      expect(result).toHaveLength(0);
    });
  });
});
