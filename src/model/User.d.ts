export interface UserDto {
  _id: number;
  url: string;
  external_id: string;
  email?: string;
  name: string;
  alias?: string;
  created_at: string;
  active: boolean;
  verified?: boolean;
  shared: boolean;
  locale?: string;
  timezone?: string;
  last_login_at: string;
  phone: string;
  signature: string;
  organization_id?: number;
  tags: string[];
  suspended: boolean;
  role: string;
}

export interface User {
  id: number;
  url: string;
  externalId: string;
  name: string;
  alias: string;
  createdAt: string;
  active: boolean;
  verified: boolean;
  shared: boolean;
  locale: string;
  timezone: string;
  lastLoginAt: string;
  email: string;
  phone: string;
  signature: string;
  organizationId: number | string;
  tags: string[];
  suspended: boolean;
  role: string;
}
