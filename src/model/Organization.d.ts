export interface OrganizationDto {
  _id: number;
  url: string;
  external_id: string;
  name: string;
  domain_names: string[];
  created_at: string;
  details: string;
  shared_tickets: boolean;
  tags: string[];
}

export interface Organization {
  id: number;
  url: string;
  externalId: string;
  name: string;
  domainNames: string[];
  createdAt: string;
  details: string;
  sharedTickets: boolean;
  tags: string[];
}
