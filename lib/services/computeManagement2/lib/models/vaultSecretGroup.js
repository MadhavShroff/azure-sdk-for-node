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
 * Describes a set of certificates which are all in the same Key Vault.
 *
 */
class VaultSecretGroup {
  /**
   * Create a VaultSecretGroup.
   * @property {object} [sourceVault] The relative URL of the Key Vault
   * containing all of the certificates in VaultCertificates.
   * @property {string} [sourceVault.id] Resource Id
   * @property {array} [vaultCertificates] The list of key vault references in
   * SourceVault which contain certificates.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VaultSecretGroup
   *
   * @returns {object} metadata of VaultSecretGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VaultSecretGroup',
      type: {
        name: 'Composite',
        className: 'VaultSecretGroup',
        modelProperties: {
          sourceVault: {
            required: false,
            serializedName: 'sourceVault',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          vaultCertificates: {
            required: false,
            serializedName: 'vaultCertificates',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VaultCertificateElementType',
                  type: {
                    name: 'Composite',
                    className: 'VaultCertificate'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VaultSecretGroup;
