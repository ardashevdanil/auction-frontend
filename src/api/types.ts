// Documentation https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters
export type StrapiQueryParams<F extends string> = {
  sort?: F | F[];
  filters?: Partial<Record<F, StrapiQueryFilters>>;
  populate?: F | F[];
  fields?: F[];
  pagination?: {
    page: number;
    pageSize?: number;
  };
  publicationState?: "live" | "preview";
  locale?: "string";
};

export type StrapiQueryFilters = {
  // Equal
  $eq?: string | number;
  // Not equal
  $ne?: string | number;
  // Less than
  $lt?: string | number;
  // Less than or equal to
  $lte?: string | number;
  // Greater than
  $gt?: string | number;
  // Greater than or equal to
  $gte?: string | number;
  // Included in an array
  $in?: string | number;
  // Not included in an array
  $notIn?: string | number;
  // Contains (case-sensitive)
  $contains?: string | number;
  // Does not contain (case-sensitive)
  $notContains?: string | number;
  // Contains
  $containsi?: string | number;
  // Does not contain
  $notContainsi?: string | number;
  // Is null
  $null?: boolean;
  // Is not null
  $notNull?: boolean;
  // Is between
  $between?: string | number;
  // Starts with
  $startsWith?: string | number;
  // Joins the filters in an "or" expression
  $or?: string | number;
  // Joins the filters in an "and" expression
  $and?: string | number;
};

export type CommonResData<D = any> = {
  data: D;
  meta?: ResMetaData;
};

export type ResMetaData = {
  pagination?: ResPaginationData;
};

export type ResPaginationData = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
