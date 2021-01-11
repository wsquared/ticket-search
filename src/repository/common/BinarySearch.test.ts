import { binarySearchUser } from './BinarySearch';
import faker from 'faker';

describe('BinarySearch', () => {
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

  const array = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
  ];

  it('should return user 1', () => {
    const result = binarySearchUser(array, 1);

    expect(result).toBe(0);
  });

  it('should return user 2', () => {
    const result = binarySearchUser(array, 2);

    expect(result).toBe(1);
  });

  it('should return user 3', () => {
    const result = binarySearchUser(array, 3);

    expect(result).toBe(2);
  });

  it('should return no user', () => {
    const result = binarySearchUser(array, 4);

    expect(result).toBe(-1);
  });
});
