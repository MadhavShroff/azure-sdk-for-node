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
 * @class
 * Initializes a new instance of the WorkflowRunActionFilter class.
 * @constructor
 * The workflow run action filter.
 *
 * @member {string} [status] The status of workflow run action. Possible values
 * include: 'NotSpecified', 'Paused', 'Running', 'Waiting', 'Succeeded',
 * 'Skipped', 'Suspended', 'Cancelled', 'Failed', 'Faulted', 'TimedOut',
 * 'Aborted', 'Ignored'
 *
 */
class WorkflowRunActionFilter {
  constructor() {
  }

  /**
   * Defines the metadata of WorkflowRunActionFilter
   *
   * @returns {object} metadata of WorkflowRunActionFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRunActionFilter',
      type: {
        name: 'Composite',
        className: 'WorkflowRunActionFilter',
        modelProperties: {
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'Paused', 'Running', 'Waiting', 'Succeeded', 'Skipped', 'Suspended', 'Cancelled', 'Failed', 'Faulted', 'TimedOut', 'Aborted', 'Ignored' ]
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowRunActionFilter;