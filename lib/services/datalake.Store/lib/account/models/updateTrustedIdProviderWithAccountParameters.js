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
 * The parameters used to update a trusted identity provider while updating a
 * Data Lake Store account.
 *
 */
class UpdateTrustedIdProviderWithAccountParameters {
  /**
   * Create a UpdateTrustedIdProviderWithAccountParameters.
   * @property {string} name The unique name of the trusted identity provider
   * to update.
   * @property {string} [idProvider] The URL of this trusted identity provider.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateTrustedIdProviderWithAccountParameters
   *
   * @returns {object} metadata of UpdateTrustedIdProviderWithAccountParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateTrustedIdProviderWithAccountParameters',
      type: {
        name: 'Composite',
        className: 'UpdateTrustedIdProviderWithAccountParameters',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          idProvider: {
            required: false,
            serializedName: 'properties.idProvider',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateTrustedIdProviderWithAccountParameters;
