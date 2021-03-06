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
 * Client info for an event result
 *
 */
class EventsClientInfo {
  /**
   * Create a EventsClientInfo.
   * @member {string} [model] Model of the client
   * @member {string} [os] Operating system of the client
   * @member {string} [type] Type of the client
   * @member {string} [browser] Browser of the client
   * @member {string} [ip] IP address of the client
   * @member {string} [city] City of the client
   * @member {string} [stateOrProvince] State or province of the client
   * @member {string} [countryOrRegion] Country or region of the client
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventsClientInfo
   *
   * @returns {object} metadata of EventsClientInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'eventsClientInfo',
      type: {
        name: 'Composite',
        className: 'EventsClientInfo',
        modelProperties: {
          model: {
            required: false,
            serializedName: 'model',
            type: {
              name: 'String'
            }
          },
          os: {
            required: false,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          browser: {
            required: false,
            serializedName: 'browser',
            type: {
              name: 'String'
            }
          },
          ip: {
            required: false,
            serializedName: 'ip',
            type: {
              name: 'String'
            }
          },
          city: {
            required: false,
            serializedName: 'city',
            type: {
              name: 'String'
            }
          },
          stateOrProvince: {
            required: false,
            serializedName: 'stateOrProvince',
            type: {
              name: 'String'
            }
          },
          countryOrRegion: {
            required: false,
            serializedName: 'countryOrRegion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EventsClientInfo;
