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
 * Collection of providers.
 */
class RecoveryServicesProviderCollection extends Array {
  /**
   * Create a RecoveryServicesProviderCollection.
   * @member {string} [nextLink] The value of next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecoveryServicesProviderCollection
   *
   * @returns {object} metadata of RecoveryServicesProviderCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryServicesProviderCollection',
      type: {
        name: 'Composite',
        className: 'RecoveryServicesProviderCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecoveryServicesProviderElementType',
                  type: {
                    name: 'Composite',
                    className: 'RecoveryServicesProvider'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryServicesProviderCollection;