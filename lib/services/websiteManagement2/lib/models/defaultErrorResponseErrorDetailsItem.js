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
 * Detailed errors.
 *
 */
class DefaultErrorResponseErrorDetailsItem {
  /**
   * Create a DefaultErrorResponseErrorDetailsItem.
   * @member {string} [code] Standardized string to programmatically identify
   * the error.
   * @member {string} [message] Detailed error description and debugging
   * information.
   * @member {string} [target] Detailed error description and debugging
   * information.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DefaultErrorResponseErrorDetailsItem
   *
   * @returns {object} metadata of DefaultErrorResponseErrorDetailsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DefaultErrorResponse_error_detailsItem',
      type: {
        name: 'Composite',
        className: 'DefaultErrorResponseErrorDetailsItem',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            readOnly: true,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DefaultErrorResponseErrorDetailsItem;