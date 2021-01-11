import type { UserDto, User } from './User';

export class UserMapper {
  static toDomain(raw: UserDto): User {
    return {
      id: raw._id,
      url: raw.url,
      externalId: raw.external_id,
      name: raw.name,
      alias: raw.alias || '',
      createdAt: raw.created_at,
      active: raw.active,
      verified: raw.verified || false, // Assume false for undefined
      shared: raw.shared,
      locale: raw.locale || '',
      timezone: raw.timezone || '',
      lastLoginAt: raw.last_login_at,
      email: raw.email || '',
      phone: raw.phone,
      signature: raw.signature,
      organizationId: raw.organization_id || '',
      tags: raw.tags,
      suspended: raw.suspended,
      role: raw.role,
    };
  }
}
