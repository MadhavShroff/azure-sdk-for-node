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
 * Result of the List Domain Models operation.
 *
 */
class ListModelsResult {
  /**
   * Create a ListModelsResult.
   * @property {array} [modelsProperty] An array of supported models.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListModelsResult
   *
   * @returns {object} metadata of ListModelsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListModelsResult',
      type: {
        name: 'Composite',
        className: 'ListModelsResult',
        modelProperties: {
          modelsProperty: {
            required: false,
            nullable: true,
            readOnly: true,
            serializedName: 'models',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ModelDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ModelDescription'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListModelsResult;
