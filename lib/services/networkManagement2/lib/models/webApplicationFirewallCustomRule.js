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
 * Defines contents of a web application rule
 *
 */
class WebApplicationFirewallCustomRule {
  /**
   * Create a WebApplicationFirewallCustomRule.
   * @property {string} [name] Gets name of the resource that is unique within
   * a policy. This name can be used to access the resource.
   * @property {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   * @property {number} priority Describes priority of the rule. Rules with a
   * lower value will be evaluated before rules with a higher value
   * @property {string} ruleType Describes type of rule. Possible values
   * include: 'MatchRule', 'Invalid'
   * @property {array} matchConditions List of match conditions
   * @property {string} action Type of Actions. Possible values include:
   * 'Allow', 'Block', 'Log'
   */
  constructor() {
  }

  /**
   * Defines the metadata of WebApplicationFirewallCustomRule
   *
   * @returns {object} metadata of WebApplicationFirewallCustomRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebApplicationFirewallCustomRule',
      type: {
        name: 'Composite',
        className: 'WebApplicationFirewallCustomRule',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          priority: {
            required: true,
            serializedName: 'priority',
            type: {
              name: 'Number'
            }
          },
          ruleType: {
            required: true,
            serializedName: 'ruleType',
            type: {
              name: 'String'
            }
          },
          matchConditions: {
            required: true,
            serializedName: 'matchConditions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MatchConditionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MatchCondition'
                  }
              }
            }
          },
          action: {
            required: true,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebApplicationFirewallCustomRule;