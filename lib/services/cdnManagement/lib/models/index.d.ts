/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRestAzure from 'ms-rest-azure';
exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource definition.
 *
 * @member {string} [id] Resource ID.
 * 
 * @member {string} [name] Resource name.
 * 
 * @member {string} [type] Resource type.
 * 
 * @member {string} location Resource location.
 * 
 * @member {object} [tags] Resource tags.
 * 
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Profile class.
 * @constructor
 * CDN profile represents the top level resource and the entry point into the
 * CDN API. This allows users to set up a logical grouping of endpoints in
 * addition to creating shared configuration settings and selecting pricing
 * tiers and providers.
 *
 * @member {object} sku The SKU (pricing tier) of the CDN profile.
 * 
 * @member {string} [sku.name] Name of the pricing tier. Possible values
 * include: 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon',
 * 'Standard_Akamai', 'Standard_ChinaCdn'
 * 
 * @member {string} [resourceState] Resource status of the profile. Possible
 * values include: 'Creating', 'Active', 'Deleting', 'Disabled'
 * 
 * @member {string} [provisioningState] Provisioning status of the profile.
 * 
 */
export interface Profile extends Resource {
  sku: Sku;
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU (pricing tier) of the CDN profile.
 *
 * @member {string} [name] Name of the pricing tier. Possible values include:
 * 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon',
 * 'Standard_Akamai', 'Standard_ChinaCdn'
 * 
 */
export interface Sku {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the ProfileUpdateParameters class.
 * @constructor
 * Profile properties required for profile update.
 *
 * @member {object} tags Profile tags
 * 
 */
export interface ProfileUpdateParameters extends BaseResource {
  tags: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SsoUri class.
 * @constructor
 * SSO URI required to login to third party web portal.
 *
 * @member {string} [ssoUriValue] The URI used to login to third party web
 * portal.
 * 
 */
export interface SsoUri {
  ssoUriValue?: string;
}

/**
 * @class
 * Initializes a new instance of the Endpoint class.
 * @constructor
 * CDN endpoint is the entity within a CDN profile containing configuration
 * information regarding caching behaviors and origins. The CDN endpoint is
 * exposed using the URL format <endpointname>.azureedge.net by default, but
 * custom domains can also be created.
 *
 * @member {string} [originHostHeader] The host header the CDN provider will
 * send along with content requests to origins. The default value is the host
 * name of the origin.
 * 
 * @member {string} [originPath] The path used for origin requests.
 * 
 * @member {array} [contentTypesToCompress] List of content types on which
 * compression will be applied. The value for the elements should be a valid
 * MIME type.
 * 
 * @member {boolean} [isCompressionEnabled] Indicates whether content
 * compression is enabled. The default value is false. If compression is
 * enabled, the content transferred from the CDN endpoint to the end user
 * will be compressed. The requested content must be larger than 1 byte and
 * smaller than 1 MB.
 * 
 * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is allowed
 * on the endpoint. Default value is true. At least one protocol (HTTP or
 * HTTPS) must be allowed.
 * 
 * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
 * allowed on the endpoint. Default value is true. At least one protocol
 * (HTTP or HTTPS) must be allowed.
 * 
 * @member {string} [queryStringCachingBehavior] Defines the query string
 * caching behavior. Possible values include: 'IgnoreQueryString',
 * 'BypassCaching', 'UseQueryString', 'NotSet'
 * 
 * @member {string} [optimizationType] Customer can specify what scenario they
 * want this CDN endpoint to optimize. (e.g. Download, Media services, and
 * etc.) With this information we can apply scenario driven optimization.
 * 
 * @member {array} [geoFilters] The list of geo filters for the CDN endpoint.
 * 
 * @member {string} [hostName] The host name of the endpoint
 * {endpointName}.{DNSZone}
 * 
 * @member {array} origins The set of origins for the CDN endpoint. When
 * multiple origins exist, the first origin will be used as primary and rest
 * will be used as failover options.
 * 
 * @member {string} [resourceState] Resource status of the endpoint. Possible
 * values include: 'Creating', 'Deleting', 'Running', 'Starting', 'Stopped',
 * 'Stopping'
 * 
 * @member {string} [provisioningState] Provisioning status of the endpoint.
 * 
 */
export interface Endpoint extends Resource {
  originHostHeader?: string;
  originPath?: string;
  contentTypesToCompress?: string[];
  isCompressionEnabled?: boolean;
  isHttpAllowed?: boolean;
  isHttpsAllowed?: boolean;
  queryStringCachingBehavior?: string;
  optimizationType?: string;
  geoFilters?: GeoFilter[];
  hostName?: string;
  origins: DeepCreatedOrigin[];
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the DeepCreatedOrigin class.
 * @constructor
 * Origins to be added when creating a CDN endpoint.
 *
 * @member {string} name Origin name
 * 
 * @member {string} hostName The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 * 
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535
 * 
 * @member {number} [httpsPort] The value of the HTTPS port. Must be between 1
 * and 65535
 * 
 */
export interface DeepCreatedOrigin extends BaseResource {
  name: string;
  hostName: string;
  httpPort?: number;
  httpsPort?: number;
}

/**
 * @class
 * Initializes a new instance of the EndpointUpdateParameters class.
 * @constructor
 * Endpoint properties required for new endpoint creation.
 *
 * @member {object} [tags] Endpoint tags.
 * 
 * @member {string} [originHostHeader] The host header the CDN provider will
 * send along with content requests to origins. The default value is the host
 * name of the origin.
 * 
 * @member {string} [originPath] The path used for origin requests.
 * 
 * @member {array} [contentTypesToCompress] List of content types on which
 * compression will be applied. The value for the elements should be a valid
 * MIME type.
 * 
 * @member {boolean} [isCompressionEnabled] Indicates whether content
 * compression is enabled. The default value is false. If compression is
 * enabled, the content transferred from the CDN endpoint to the end user
 * will be compressed. The requested content must be larger than 1 byte and
 * smaller than 1 MB.
 * 
 * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is allowed
 * on the endpoint. Default value is true. At least one protocol (HTTP or
 * HTTPS) must be allowed.
 * 
 * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
 * allowed on the endpoint. Default value is true. At least one protocol
 * (HTTP or HTTPS) must be allowed.
 * 
 * @member {string} [queryStringCachingBehavior] Defines the query string
 * caching behavior. Possible values include: 'IgnoreQueryString',
 * 'BypassCaching', 'UseQueryString', 'NotSet'
 * 
 * @member {string} [optimizationType] Customer can specify what scenario they
 * want this CDN endpoint to optimize. (e.g. Download, Media services, and
 * etc.) With this information we can apply scenario driven optimization.
 * 
 * @member {array} [geoFilters] The list of geo filters for the CDN endpoint.
 * 
 */
export interface EndpointUpdateParameters extends BaseResource {
  tags?: { [propertyName: string]: string };
  originHostHeader?: string;
  originPath?: string;
  contentTypesToCompress?: string[];
  isCompressionEnabled?: boolean;
  isHttpAllowed?: boolean;
  isHttpsAllowed?: boolean;
  queryStringCachingBehavior?: string;
  optimizationType?: string;
  geoFilters?: GeoFilter[];
}

/**
 * @class
 * Initializes a new instance of the GeoFilter class.
 * @constructor
 * Geo filter of a CDN endpoint.
 *
 * @member {string} relativePath Relative path applicable to geo filter. (e.g.
 * '/mypictures', '/mypicture/kitty.jpg', and etc.)
 * 
 * @member {string} action Action of the geo filter. Possible values include:
 * 'Block', 'Allow'
 * 
 * @member {array} countryCodes Two letter country codes of the geo filter.
 * (e.g. AU, MX, and etc.)
 * 
 */
export interface GeoFilter {
  relativePath: string;
  action: string;
  countryCodes: string[];
}

/**
 * @class
 * Initializes a new instance of the PurgeParameters class.
 * @constructor
 * Parameters required for endpoint purge.
 *
 * @member {array} contentPaths The path to the content to be purged. Can
 * describe a file path or a wild card directory.
 * 
 */
export interface PurgeParameters {
  contentPaths: string[];
}

/**
 * @class
 * Initializes a new instance of the LoadParameters class.
 * @constructor
 * Parameters required for endpoint load.
 *
 * @member {array} contentPaths The path to the content to be loaded. Should
 * describe a file path.
 * 
 */
export interface LoadParameters {
  contentPaths: string[];
}

/**
 * @class
 * Initializes a new instance of the Origin class.
 * @constructor
 * CDN origin is the source of the content being delivered via CDN. When the
 * edge nodes represented by an endpoint do not have the requested content
 * cached, they attempt to fetch it from one or more of the configured
 * origins.
 *
 * @member {string} hostName The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 * 
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 * 
 * @member {number} [httpsPort] The value of the https port. Must be between 1
 * and 65535.
 * 
 * @member {string} [resourceState] Resource status of the origin. Possible
 * values include: 'Creating', 'Active', 'Deleting'
 * 
 * @member {string} [provisioningState] Provisioning status of the origin.
 * 
 */
export interface Origin extends Resource {
  hostName: string;
  httpPort?: number;
  httpsPort?: number;
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the OriginUpdateParameters class.
 * @constructor
 * Origin properties needed for origin creation or update.
 *
 * @member {string} [hostName] The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 * 
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 * 
 * @member {number} [httpsPort] The value of the HTTPS port. Must be between 1
 * and 65535.
 * 
 */
export interface OriginUpdateParameters extends BaseResource {
  hostName?: string;
  httpPort?: number;
  httpsPort?: number;
}

/**
 * @class
 * Initializes a new instance of the CustomDomain class.
 * @constructor
 * CDN CustomDomain represents a mapping between a user-specified domain name
 * and a CDN endpoint. This is to use custom domain names to represent the
 * URLs for branding purposes.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 * 
 * @member {string} [resourceState] Resource status of the custom domain.
 * Possible values include: 'Creating', 'Active', 'Deleting'
 * 
 * @member {string} [validationData] Special validation or data may be
 * required when delivering CDN to some regions due to local compliance
 * reasons. (e.g. ICP license number of a custom domain is required to
 * deliver content in China.)
 * 
 * @member {string} [provisioningState] Provisioning status of the custom
 * domain.
 * 
 */
export interface CustomDomain extends Resource {
  hostName: string;
  resourceState?: string;
  validationData?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainParameters class.
 * @constructor
 * The customDomain JSON object required for custom domain creation or update.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 * 
 */
export interface CustomDomainParameters {
  hostName: string;
}

/**
 * @class
 * Initializes a new instance of the ValidateCustomDomainInput class.
 * @constructor
 * Input of the custom domain to be validated.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 * 
 */
export interface ValidateCustomDomainInput {
  hostName: string;
}

/**
 * @class
 * Initializes a new instance of the ValidateCustomDomainOutput class.
 * @constructor
 * Output of custom domain validation.
 *
 * @member {boolean} [customDomainValidated] Indicates whether the custom
 * domain is validated or not.
 * 
 * @member {string} [reason] The reason why the custom domain is not valid.
 * 
 * @member {string} [message] The message describing why the custom domain is
 * not valid.
 * 
 */
export interface ValidateCustomDomainOutput {
  customDomainValidated?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityInput class.
 * @constructor
 * Input of CheckNameAvailability API.
 *
 * @member {string} name The resource name to validate.
 * 
 */
export interface CheckNameAvailabilityInput {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityOutput class.
 * @constructor
 * Output of check name availability API.
 *
 * @member {boolean} [nameAvailable] Indicates whether the name is available.
 * 
 * @member {string} [reason] The reason why the name is not available.
 * 
 * @member {string} [message] The detailed error message describing why the
 * name is not available.
 * 
 */
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * CDN REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * 
 * @member {object} [display] The object that represents the operation.
 * 
 * @member {string} [display.provider] Service provider: Microsoft.Cdn
 * 
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Profile, endpoint, etc.
 * 
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 * 
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.Cdn
 * 
 * @member {string} [resource] Resource on which the operation is performed:
 * Profile, endpoint, etc.
 * 
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 * 
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates CDN service is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 * 
 * @member {string} [message] Error message indicating why the operation
 * failed.
 * 
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}


/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * Result of the request to list profiles. It contains a list of profile
 * objects and a URL link to get the the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of profile objects if
 * there are any.
 * 
 */
export interface ProfileListResult extends Array<Profile> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EndpointListResult class.
 * @constructor
 * Result of the request to list endpoints. It contains a list of endpoint
 * objects and a URL link to get the the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of endpoint objects if
 * there are any.
 * 
 */
export interface EndpointListResult extends Array<Endpoint> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OriginListResult class.
 * @constructor
 * Result of the request to list origins. It contains a list of origin objects
 * and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of origin objects if
 * there are any.
 * 
 */
export interface OriginListResult extends Array<Origin> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainListResult class.
 * @constructor
 * Result of the request to list custom domains. It contains a list of custom
 * domain objects and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain
 * objects if there are any.
 * 
 */
export interface CustomDomainListResult extends Array<CustomDomain> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list CDN operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 * 
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}
