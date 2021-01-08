import { UserRepository } from './UserRepository';

describe('UserRepository', () => {
  let repo: UserRepository;

  beforeEach(() => {
    repo = new UserRepository();
  });

  describe('Given an id', () => {
    it('should return a user with matching id', async () => {
      const id = 10;

      const result = await repo.getById(id);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(id);
    });

    it('should return no users', async () => {
      const id = 0;

      expect(await repo.getById(id)).toHaveLength(0);
    });
  });

  describe('Given a url', () => {
    it('should return a user with matching url', async () => {
      const url = 'http://initech.zendesk.com/api/v2/users/2.json';

      const result = await repo.getByUrl(url);

      expect(result).toHaveLength(1);
      expect(result[0].url).toBe(url);
    });

    it('should return no users', async () => {
      const url = '';

      expect(await repo.getByUrl(url)).toHaveLength(0);
    });
  });

  describe('Given an externalId', () => {
    it('should return a user with matching externalId', async () => {
      const externalId = '29c18801-fb42-433d-8674-f37d63e637df';

      const result = await repo.getByExternalId(externalId);

      expect(result).toHaveLength(1);
      expect(result[0].externalId).toBe(externalId);
    });

    it('should return no users', async () => {
      const externalId = '';

      expect(await repo.getByExternalId(externalId)).toHaveLength(0);
    });
  });

  describe('Given a name', () => {
    it('should return a user with matching name', async () => {
      const name = 'Riggs Hebert';

      const result = await repo.getByName(name);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe(name);
    });

    it('should return no users', async () => {
      const name = '';

      expect(await repo.getByName(name)).toHaveLength(0);
    });
  });

  describe('Given an alias', () => {
    it('should return a user with matching alias', async () => {
      const alias = 'Miss Shannon';

      const result = await repo.getByAlias(alias);

      expect(result).toHaveLength(1);
      expect(result[0].alias).toBe(alias);
    });

    it('should return a user with empty alias', async () => {
      const alias = '';

      const result = await repo.getByAlias(alias);

      expect(result).toHaveLength(1);
      expect(result[0].alias).toBe(alias);
    });
  });

  describe('Given a createdAt', () => {
    it('should return an user with matching createdAt', async () => {
      const createdAt = '2016-05-17T04:06:23 -10:00';

      const result = await repo.getByCreatedAt(createdAt);

      expect(result).toHaveLength(1);
      expect(result[0].createdAt).toBe(createdAt);
    });

    it('should return no users', async () => {
      const createdAt = '';

      expect(await repo.getByCreatedAt(createdAt)).toHaveLength(0);
    });
  });

  describe('Given an active', () => {
    it('should return users that are active', async () => {
      const active = true;

      const result = await repo.getByActive(active);

      expect(result).toHaveLength(39);
      expect(result[0].active).toBe(active);
    });

    it('should return users that are non active', async () => {
      const active = false;

      const result = await repo.getByActive(active);

      expect(result).toHaveLength(36);
      expect(result[0].active).toBe(active);
    });
  });

  describe('Given a verified', () => {
    it('should return users that are verified', async () => {
      const verified = true;

      const result = await repo.getByVerified(verified);

      expect(result).toHaveLength(26);
      expect(result[0].verified).toBe(verified);
    });

    it('should return users that are non verified', async () => {
      const verified = false;

      const result = await repo.getByVerified(verified);

      expect(result).toHaveLength(47);
      expect(result[0].verified).toBe(verified);
    });
  });

  describe('Given a shared', () => {
    it('should return users that are shared', async () => {
      const shared = true;

      const result = await repo.getByShared(shared);

      expect(result).toHaveLength(28);
      expect(result[0].shared).toBe(shared);
    });

    it('should return users that are non shared', async () => {
      const shared = false;

      const result = await repo.getByShared(shared);

      expect(result).toHaveLength(47);
      expect(result[0].shared).toBe(shared);
    });
  });

  describe('Given a locale', () => {
    it('should return users with matching locale', async () => {
      const locale = 'en-AU';

      const result = await repo.getByLocale(locale);

      expect(result).toHaveLength(32);
      expect(result[0].locale).toBe(locale);
    });

    it('should return a user with empty locale', async () => {
      const locale = '';

      const result = await repo.getByLocale(locale);

      expect(result).toHaveLength(1);
      expect(result[0].locale).toBe(locale);
    });
  });

  describe('Given a timezone', () => {
    it('should return users with matching timezone', async () => {
      const timezone = 'Estonia';

      const result = await repo.getByTimezone(timezone);

      expect(result).toHaveLength(1);
      expect(result[0].timezone).toBe(timezone);
    });

    it('should return a user with empty timezone', async () => {
      const timezone = '';

      const result = await repo.getByTimezone(timezone);

      expect(result).toHaveLength(2);
      expect(result[0].timezone).toBe(timezone);
    });
  });

  describe('Given a lastLoginAt', () => {
    it('should return users with matching lastLoginAt', async () => {
      const lastLoginAt = '2014-12-30T03:36:50 -11:00';

      const result = await repo.getByLastLoginAt(lastLoginAt);

      expect(result).toHaveLength(1);
      expect(result[0].lastLoginAt).toBe(lastLoginAt);
    });

    it('should return no users', async () => {
      const lastLoginAt = '';

      const result = await repo.getByLastLoginAt(lastLoginAt);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given an email', () => {
    it('should return users with matching email', async () => {
      const email = 'jacobsdunlap@flotonic.com';

      const result = await repo.getByEmail(email);

      expect(result).toHaveLength(1);
      expect(result[0].email).toBe(email);
    });

    it('should returnno users', async () => {
      const email = '';

      const result = await repo.getByEmail(email);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a phone', () => {
    it('should return users with matching phone', async () => {
      const phone = '8955-022-065';

      const result = await repo.getByPhone(phone);

      expect(result).toHaveLength(1);
      expect(result[0].phone).toBe(phone);
    });

    it('should return no users', async () => {
      const phone = '';

      const result = await repo.getByPhone(phone);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a phone', () => {
    it('should return users with matching phone', async () => {
      const phone = '8955-022-065';

      const result = await repo.getByPhone(phone);

      expect(result).toHaveLength(1);
      expect(result[0].phone).toBe(phone);
    });

    it('should return no users', async () => {
      const phone = '';

      const result = await repo.getByPhone(phone);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a signature', () => {
    it('should return users with matching signature', async () => {
      const signature = "Don't Worry Be Happy!";

      const result = await repo.getBySignature(signature);

      expect(result).toHaveLength(75);
      expect(result[0].signature).toBe(signature);
    });

    it('should return no users', async () => {
      const signature = '';

      const result = await repo.getBySignature(signature);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given an organizationId', () => {
    it('should return users with matching organizationId', async () => {
      const organizationId = 114;

      const result = await repo.getByOrganizationId(organizationId);

      expect(result).toHaveLength(5);
      expect(result[0].organizationId).toBe(organizationId);
    });

    it('should return no users', async () => {
      const organizationId = 0;

      const result = await repo.getByOrganizationId(organizationId);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a tag', () => {
    it('should return users with a matching tag', async () => {
      const term = 'Fairhaven';

      const result = await repo.getByTag(term);

      expect(result).toHaveLength(1);
      expect(result[0].tags.indexOf(term) >= 0).toBeTruthy();
    });

    it('should return no users', async () => {
      const term = 'foo';

      const result = await repo.getByTag(term);

      expect(result).toHaveLength(0);
    });
  });

  describe('Given a suspended', () => {
    it('should return users that are suspended', async () => {
      const suspended = true;

      const result = await repo.getBySuspended(suspended);

      expect(result).toHaveLength(36);
      expect(result[0].suspended).toBe(suspended);
    });

    it('should return users that are non suspended', async () => {
      const suspended = false;

      const result = await repo.getBySuspended(suspended);

      expect(result).toHaveLength(39);
      expect(result[0].suspended).toBe(suspended);
    });
  });

  describe('Given a role', () => {
    it('should return users with matching role', async () => {
      const role = 'agent';

      const result = await repo.getByRole(role);

      expect(result).toHaveLength(25);
      expect(result[0].role).toBe(role);
    });

    it('should return no users', async () => {
      const role = '';

      const result = await repo.getByRole(role);

      expect(result).toHaveLength(0);
    });
  });
});
