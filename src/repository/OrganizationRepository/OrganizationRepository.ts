import { ORGANIZATIONS_PATH } from '../../config';
import Lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { OrganizationMapper } from '../../model/OrganizationMapper';

export class OrganizationRepository {
  private lowDb: Promise<Lowdb.LowdbAsync<any>>;

  private getBy = async () => {
    return (await (await this.lowDb).read()).map((organizationRaw) =>
      OrganizationMapper.toDomain(organizationRaw)
    );
  };

  constructor(path = ORGANIZATIONS_PATH) {
    this.lowDb = Lowdb(new FileAsync(path));
  }

  getById = async (id: number) => {
    return (await this.getBy())
      .find((organization) => organization.id === id)
      .value();
  };

  getByUrl = async (url: string) => {
    return (await this.getBy())
      .find(
        (organization) => organization.url.toLowerCase() === url.toLowerCase()
      )
      .value();
  };

  getByExternalId = async (id: string) => {
    return (await this.getBy())
      .find((organization) => organization.externalId === id)
      .value();
  };

  getByName = async (name: string) => {
    return (await this.getBy())
      .find(
        (organization) => organization.name.toLowerCase() === name.toLowerCase()
      )
      .value();
  };

  getByDomainName = async (domainName: string) => {
    return (await this.getBy())
      .filter(
        (organization) =>
          organization.domainNames
            .map((t) => t.toLowerCase())
            .indexOf(domainName.toLowerCase()) >= 0
      )
      .value();
  };

  getByCreatedAt = async (createdAt: string) => {
    return (await this.getBy())
      .filter((organization) => organization.createdAt === createdAt)
      .value();
  };

  getByDetails = async (details: string) => {
    return (await this.getBy())
      .filter(
        (organization) =>
          organization.details.toLowerCase() === details.toLowerCase()
      )
      .value();
  };

  getBySharedTickets = async (sharedTickets: boolean) => {
    return (await this.getBy())
      .filter((organization) => organization.sharedTickets === sharedTickets)
      .value();
  };

  getByTag = async (tag: string) => {
    return (await this.getBy())
      .filter(
        (organization) =>
          organization.tags
            .map((t) => t.toLowerCase())
            .indexOf(tag.toLowerCase()) >= 0
      )
      .value();
  };
}
