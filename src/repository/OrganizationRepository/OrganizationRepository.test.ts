import { OrganizationRepository } from './OrganizationRepository';

describe('OrganizationRepository', () => {
  let repo: OrganizationRepository;

  beforeEach(() => {
    repo = new OrganizationRepository();
  });

  describe('Given an id', () => {
    it('should return an organization', async () => {
      const id = 103;

      const result = await repo.getById(id);

      expect(result.id).toBe(id);
    });

    it('should return no organizations', async () => {
      const id = 0;

      expect(await repo.getById(id)).toBeUndefined();
    });
  });

  describe('Given an url', () => {
    it('should return an organization with matching url', async () => {
      const url = 'http://initech.zendesk.com/api/v2/organizations/107.json';

      const result = await repo.getByUrl(url);

      expect(result.url).toBe(url);
    });

    it('should return no organizations', async () => {
      const url = '';

      expect(await repo.getByUrl(url)).toBeUndefined();
    });
  });

  describe('Given an externalId', () => {
    it('should return an organization with matching externalId', async () => {
      const externalId = '5f930931-37fd-41a2-9c68-1cd5b99e7a3e';

      const result = await repo.getByExternalId(externalId);

      expect(result.externalId).toBe(externalId);
    });

    it('should return no organizations', async () => {
      const externalId = '';

      expect(await repo.getByExternalId(externalId)).toBeUndefined();
    });
  });

  describe('Given a name', () => {
    it('should return an organization with matching name', async () => {
      const name = 'Möreganic';

      const result = await repo.getByName(name);

      expect(result.name).toBe(name);
    });

    it('should return no organizations', async () => {
      const name = '';

      expect(await repo.getByName(name)).toBeUndefined();
    });
  });

  describe('Given a domain name', () => {
    it('should return an organization with matching domain name', async () => {
      const domainName = 'artiq.com';

      const result = await repo.getByDomainName(domainName);

      expect(result.domainNames.includes(domainName)).toBeTruthy();
    });

    it('should return no organizations', async () => {
      const domainName = '';

      expect(await repo.getByDomainName(domainName)).toBeUndefined();
    });
  });

  describe('Given a createdAt', () => {
    it('should return an organization with matching createdAt', async () => {
      const createdAt = '2016-05-24T04:27:35 -10:00';

      const result = await repo.getByCreatedAt(createdAt);

      expect(result).toHaveLength(1);
      expect(result[0].createdAt).toBe(createdAt);
    });

    it('should return no organizations', async () => {
      const createdAt = '';

      expect(await repo.getByCreatedAt(createdAt)).toHaveLength(0);
    });
  });

  describe('Given a details', () => {
    it('should return an organization with matching details', async () => {
      const details = 'Artisan';

      const result = await repo.getByDetails(details);

      expect(result).toHaveLength(4);
      expect(result[0].details).toBe(details);
    });

    it('should return no organizations', async () => {
      const details = '';

      expect(await repo.getByDetails(details)).toHaveLength(0);
    });
  });

  describe('Given a sharedTickets', () => {
    it('should return organizations with no sharedTickets', async () => {
      const sharedTickets = false;

      const result = await repo.getBySharedTickets(sharedTickets);

      expect(result).toHaveLength(15);
    });

    it('should return organizations with sharedTickets', async () => {
      const sharedTickets = true;

      expect(await repo.getBySharedTickets(sharedTickets)).toHaveLength(10);
    });
  });

  describe('Given a tag', () => {
    it('should return organizations with matching tag', async () => {
      const tag = 'Wilkerson';

      const result = await repo.getByTag(tag);

      expect(result).toHaveLength(1);
      expect(result[0].tags.includes(tag)).toBeTruthy();
    });

    it('should return no organizations', async () => {
      const tag = '';

      expect(await repo.getByTag(tag)).toHaveLength(0);
    });
  });
});
