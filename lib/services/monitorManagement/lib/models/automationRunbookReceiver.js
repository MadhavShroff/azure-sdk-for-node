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
 * The Azure Automation Runbook notification receiver.
 *
 */
class AutomationRunbookReceiver {
  /**
   * Create a AutomationRunbookReceiver.
   * @property {string} automationAccountId The Azure automation account Id
   * which holds this runbook and authenticate to Azure resource.
   * @property {string} runbookName The name for this runbook.
   * @property {string} webhookResourceId The resource id for webhook linked to
   * this runbook.
   * @property {boolean} isGlobalRunbook Indicates whether this instance is
   * global runbook.
   * @property {string} [name] Indicates name of the webhook.
   * @property {string} [serviceUri] The URI where webhooks should be sent.
   * @property {boolean} useCommonAlertSchema Indicates whether to use common
   * alert schema.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutomationRunbookReceiver
   *
   * @returns {object} metadata of AutomationRunbookReceiver
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutomationRunbookReceiver',
      type: {
        name: 'Composite',
        className: 'AutomationRunbookReceiver',
        modelProperties: {
          automationAccountId: {
            required: true,
            serializedName: 'automationAccountId',
            type: {
              name: 'String'
            }
          },
          runbookName: {
            required: true,
            serializedName: 'runbookName',
            type: {
              name: 'String'
            }
          },
          webhookResourceId: {
            required: true,
            serializedName: 'webhookResourceId',
            type: {
              name: 'String'
            }
          },
          isGlobalRunbook: {
            required: true,
            serializedName: 'isGlobalRunbook',
            type: {
              name: 'Boolean'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          serviceUri: {
            required: false,
            serializedName: 'serviceUri',
            type: {
              name: 'String'
            }
          },
          useCommonAlertSchema: {
            required: true,
            serializedName: 'useCommonAlertSchema',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AutomationRunbookReceiver;
