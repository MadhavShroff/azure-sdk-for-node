/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Properties of an Azure SQL Database sync group log.
 *
 */
class SyncGroupLogProperties {
  /**
   * Create a SyncGroupLogProperties.
   * @member {date} [timestamp] Timestamp of the sync group log.
   * @member {string} [type] Type of the sync group log. Possible values
   * include: 'All', 'Error', 'Warning', 'Success'
   * @member {string} [source] Source of the sync group log.
   * @member {string} [details] Details of the sync group log.
   * @member {uuid} [tracingId] TracingId of the sync group log.
   * @member {string} [operationStatus] OperationStatus of the sync group log.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SyncGroupLogProperties
   *
   * @returns {object} metadata of SyncGroupLogProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SyncGroupLogProperties',
      type: {
        name: 'Composite',
        className: 'SyncGroupLogProperties',
        modelProperties: {
          timestamp: {
            required: false,
            readOnly: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          source: {
            required: false,
            readOnly: true,
            serializedName: 'source',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            readOnly: true,
            serializedName: 'details',
            type: {
              name: 'String'
            }
          },
          tracingId: {
            required: false,
            readOnly: true,
            serializedName: 'tracingId',
            type: {
              name: 'String'
            }
          },
          operationStatus: {
            required: false,
            readOnly: true,
            serializedName: 'operationStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SyncGroupLogProperties;