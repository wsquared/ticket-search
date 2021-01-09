import { USERS_PATH } from '../../config';
import Lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { UserMapper } from '../../model/UserMapper';

export class UserRepository {
  private lowDb: Promise<Lowdb.LowdbAsync<any>>;

  private getBy = async () => {
    return (await (await this.lowDb).read()).map((userRaw) =>
      UserMapper.toDomain(userRaw)
    );
  };

  constructor(path = USERS_PATH) {
    this.lowDb = Lowdb(new FileAsync(path));
  }

  getById = async (id: number) => {
    return (await this.getBy()).find((user) => user.id === id).value();
  };

  getByUrl = async (url: string) => {
    return (await this.getBy())
      .find((user) => user.url.toLowerCase() === url.toLowerCase())
      .value();
  };

  getByExternalId = async (id: string) => {
    return (await this.getBy()).find((user) => user.externalId === id).value();
  };

  getByEmail = async (email: string) => {
    return (await this.getBy()).find((user) => user.email === email).value();
  };

  getByPhone = async (phone: string) => {
    return (await this.getBy()).find((user) => user.phone === phone).value();
  };

  getByName = async (name: string) => {
    return (await this.getBy())
      .filter((user) => user.name.toLowerCase() === name.toLowerCase())
      .value();
  };

  getByAlias = async (alias: string) => {
    return (await this.getBy())
      .filter((user) => user.alias.toLowerCase() === alias.toLowerCase())
      .value();
  };

  getByCreatedAt = async (createdAt: string) => {
    return (await this.getBy())
      .filter((user) => user.createdAt === createdAt)
      .value();
  };

  getByActive = async (active: boolean) => {
    return (await this.getBy())
      .filter((user) => user.active === active)
      .value();
  };

  getByVerified = async (verified: boolean) => {
    return (await this.getBy())
      .filter((user) => user.verified === verified)
      .value();
  };

  getByShared = async (shared: boolean) => {
    return (await this.getBy())
      .filter((user) => user.shared === shared)
      .value();
  };

  getByLocale = async (locale: string) => {
    return (await this.getBy())
      .filter((user) => user.locale.toLowerCase() === locale.toLowerCase())
      .value();
  };

  getByTimezone = async (timezone: string) => {
    return (await this.getBy())
      .filter((user) => user.timezone.toLowerCase() === timezone.toLowerCase())
      .value();
  };

  getByLastLoginAt = async (lastLoginAt: string) => {
    return (await this.getBy())
      .filter((user) => user.lastLoginAt === lastLoginAt)
      .value();
  };

  getBySignature = async (signature: string) => {
    return (await this.getBy())
      .filter(
        (user) => user.signature.toLowerCase() === signature.toLowerCase()
      )
      .value();
  };

  getByOrganizationId = async (organizationId: number) => {
    return (await this.getBy())
      .filter((user) => user.organizationId === organizationId)
      .value();
  };

  getByTag = async (tag: string) => {
    return (await this.getBy())
      .filter(
        (user) =>
          user.tags.map((t) => t.toLowerCase()).indexOf(tag.toLowerCase()) >= 0
      )
      .value();
  };

  getBySuspended = async (suspended: boolean) => {
    return (await this.getBy())
      .filter((user) => user.suspended === suspended)
      .value();
  };

  getByRole = async (role: string) => {
    return (await this.getBy())
      .filter((user) => user.role.toLowerCase() === role.toLowerCase())
      .value();
  };
}
