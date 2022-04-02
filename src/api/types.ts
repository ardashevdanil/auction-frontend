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
