import type { OrganizationDto, Organization } from '../../model/Organization';

export class OrganizationMapper {
  static toDomain(raw: OrganizationDto): Organization {
    return {
      id: raw._id,
      url: raw.url,
      externalId: raw.external_id,
      name: raw.name,
      domainNames: raw.domain_names,
      createdAt: raw.created_at,
      details: raw.details,
      sharedTickets: raw.shared_tickets,
      tags: raw.tags
    }
  }
}
