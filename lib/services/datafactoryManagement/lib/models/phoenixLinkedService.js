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
 * Phoenix server linked service.
 *
 * @extends models['LinkedService']
 */
class PhoenixLinkedService extends models['LinkedService'] {
  /**
   * Create a PhoenixLinkedService.
   * @member {object} host The IP address or host name of the Phoenix server.
   * (i.e. 192.168.222.160)
   * @member {object} [port] The TCP port that the Phoenix server uses to
   * listen for client connections. The default value is 8765.
   * @member {object} [httpPath] The partial URL corresponding to the Phoenix
   * server. (i.e. /gateway/sandbox/phoenix/version). The default value is
   * hbasephoenix if using WindowsAzureHDInsightService.
   * @member {string} authenticationType The authentication mechanism used to
   * connect to the Phoenix server. Possible values include: 'Anonymous',
   * 'UsernameAndPassword', 'WindowsAzureHDInsightService'
   * @member {object} [username] The user name used to connect to the Phoenix
   * server.
   * @member {object} [password] The password corresponding to the user name.
   * @member {string} [password.type] Polymorphic Discriminator
   * @member {object} [enableSsl] Specifies whether the connections to the
   * server are encrypted using SSL. The default value is false.
   * @member {object} [trustedCertPath] The full path of the .pem file
   * containing trusted CA certificates for verifying the server when
   * connecting over SSL. This property can only be set when using SSL on
   * self-hosted IR. The default value is the cacerts.pem file installed with
   * the IR.
   * @member {object} [useSystemTrustStore] Specifies whether to use a CA
   * certificate from the system trust store or from a specified PEM file. The
   * default value is false.
   * @member {object} [allowHostNameCNMismatch] Specifies whether to require a
   * CA-issued SSL certificate name to match the host name of the server when
   * connecting over SSL. The default value is false.
   * @member {object} [allowSelfSignedServerCert] Specifies whether to allow
   * self-signed certificates from the server. The default value is false.
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PhoenixLinkedService
   *
   * @returns {object} metadata of PhoenixLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Phoenix',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'PhoenixLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          host: {
            required: true,
            serializedName: 'typeProperties.host',
            type: {
              name: 'Object'
            }
          },
          port: {
            required: false,
            serializedName: 'typeProperties.port',
            type: {
              name: 'Object'
            }
          },
          httpPath: {
            required: false,
            serializedName: 'typeProperties.httpPath',
            type: {
              name: 'Object'
            }
          },
          authenticationType: {
            required: true,
            serializedName: 'typeProperties.authenticationType',
            type: {
              name: 'String'
            }
          },
          username: {
            required: false,
            serializedName: 'typeProperties.username',
            type: {
              name: 'Object'
            }
          },
          password: {
            required: false,
            serializedName: 'typeProperties.password',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          },
          enableSsl: {
            required: false,
            serializedName: 'typeProperties.enableSsl',
            type: {
              name: 'Object'
            }
          },
          trustedCertPath: {
            required: false,
            serializedName: 'typeProperties.trustedCertPath',
            type: {
              name: 'Object'
            }
          },
          useSystemTrustStore: {
            required: false,
            serializedName: 'typeProperties.useSystemTrustStore',
            type: {
              name: 'Object'
            }
          },
          allowHostNameCNMismatch: {
            required: false,
            serializedName: 'typeProperties.allowHostNameCNMismatch',
            type: {
              name: 'Object'
            }
          },
          allowSelfSignedServerCert: {
            required: false,
            serializedName: 'typeProperties.allowSelfSignedServerCert',
            type: {
              name: 'Object'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = PhoenixLinkedService;
