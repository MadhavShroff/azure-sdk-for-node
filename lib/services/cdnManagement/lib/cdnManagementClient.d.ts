/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

declare class CdnManagementClient {
    /**
     * @class
     * Initializes a new instance of the CdnManagementClient class.
     * @constructor
     *
     * @param {credentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - Azure Subscription ID.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.apiVersion] - Version of the API to be used with the client request. Current version is 2016-10-02.
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    subscriptionId: string;

    apiVersion: string;

    acceptLanguage: string;

    longRunningOperationRetryTimeout: number;

    generateClientRequestId: boolean;

    // Operation groups
    profiles: operations.Profiles;
    endpoints: operations.Endpoints;
    origins: operations.Origins;
    customDomains: operations.CustomDomains;

            /**
         * Check the availability of a resource name without creating the resource.
         * This is needed for resources where name is globally unique, such as a CDN
         * endpoint.
         *
         * @param {string} name The resource name to validate.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        checkNameAvailability(name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.CheckNameAvailabilityOutput>): void;
        checkNameAvailability(name: string, callback: ServiceCallback<models.CheckNameAvailabilityOutput>): void;

        /**
         * Lists all of the available CDN REST API operations.
         *
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        listOperations(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
        listOperations(callback: ServiceCallback<models.OperationListResult>): void;

        /**
         * Lists all of the available CDN REST API operations.
         *
         * @param {string} nextPageLink The NextLink from the previous successful call
         * to List operation.
         * 
         * @param {object} [options] Optional Parameters.
         * 
         * @param {object} [options.customHeaders] Headers that will be added to the
         * request
         * 
         * @param {ServiceCallback} [callback] callback function; see ServiceCallback
         * doc in ms-rest index.d.ts for details
         */
        listOperationsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
        listOperationsNext(nextPageLink: string, callback: ServiceCallback<models.OperationListResult>): void;
}

export = CdnManagementClient;
