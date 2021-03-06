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
 * Describes an Azure resource with kind
 *
 */
class ExternalSecuritySolutionKind1 {
  /**
   * Create a ExternalSecuritySolutionKind1.
   * @member {string} [kind] The kind of the external solution. Possible values
   * include: 'CEF', 'ATA', 'AAD'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExternalSecuritySolutionKind1
   *
   * @returns {object} metadata of ExternalSecuritySolutionKind1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExternalSecuritySolutionKind',
      type: {
        name: 'Composite',
        className: 'ExternalSecuritySolutionKind1',
        modelProperties: {
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExternalSecuritySolutionKind1;
