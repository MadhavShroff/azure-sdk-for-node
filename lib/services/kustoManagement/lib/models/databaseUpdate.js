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

const models = require('./index');

/**
 * Class representing an update to a Kusto database.
 *
 * @extends models['Resource']
 */
class DatabaseUpdate extends models['Resource'] {
  /**
   * Create a DatabaseUpdate.
   * @property {string} [location] Resource location.
   * @property {string} [provisioningState] The provisioned state of the
   * resource. Possible values include: 'Running', 'Creating', 'Deleting',
   * 'Succeeded', 'Failed'
   * @property {moment.duration} [softDeletePeriod] The time the data should be
   * kept before it stops being accessible to queries in TimeSpan.
   * @property {moment.duration} [hotCachePeriod] The time the data that should
   * be kept in cache for fast queries in TimeSpan.
   * @property {object} [statistics] The statistics of the database.
   * @property {number} [statistics.size] The database size - the total size of
   * compressed data and index in bytes.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DatabaseUpdate
   *
   * @returns {object} metadata of DatabaseUpdate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseUpdate',
      type: {
        name: 'Composite',
        className: 'DatabaseUpdate',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
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
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          softDeletePeriod: {
            required: false,
            serializedName: 'properties.softDeletePeriod',
            type: {
              name: 'TimeSpan'
            }
          },
          hotCachePeriod: {
            required: false,
            serializedName: 'properties.hotCachePeriod',
            type: {
              name: 'TimeSpan'
            }
          },
          statistics: {
            required: false,
            serializedName: 'properties.statistics',
            type: {
              name: 'Composite',
              className: 'DatabaseStatistics'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseUpdate;