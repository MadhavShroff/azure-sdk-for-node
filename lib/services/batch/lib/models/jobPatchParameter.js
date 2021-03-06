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
 * @summary The set of changes to be made to a Job.
  *
 */
class JobPatchParameter {
  /**
   * Create a JobPatchParameter.
   * @property {number} [priority] The priority of the Job. Priority values can
   * range from -1000 to 1000, with -1000 being the lowest priority and 1000
   * being the highest priority. If omitted, the priority of the Job is left
   * unchanged.
   * @property {string} [onAllTasksComplete] The action the Batch service
   * should take when all Tasks in the Job are in the completed state. If
   * omitted, the completion behavior is left unchanged. You may not change the
   * value from terminatejob to noaction - that is, once you have engaged
   * automatic Job termination, you cannot turn it off again. If you try to do
   * this, the request fails with an 'invalid property value' error response;
   * if you are calling the REST API directly, the HTTP status code is 400 (Bad
   * Request). Possible values include: 'noAction', 'terminateJob'
   * @property {object} [constraints] The execution constraints for the Job. If
   * omitted, the existing execution constraints are left unchanged.
   * @property {moment.duration} [constraints.maxWallClockTime] If the Job does
   * not complete within the time limit, the Batch service terminates it and
   * any Tasks that are still running. In this case, the termination reason
   * will be MaxWallClockTimeExpiry. If this property is not specified, there
   * is no time limit on how long the Job may run.
   * @property {number} [constraints.maxTaskRetryCount] Note that this value
   * specifically controls the number of retries. The Batch service will try
   * each Task once, and may then retry up to this limit. For example, if the
   * maximum retry count is 3, Batch tries a Task up to 4 times (one initial
   * try and 3 retries). If the maximum retry count is 0, the Batch service
   * does not retry Tasks. If the maximum retry count is -1, the Batch service
   * retries Tasks without limit. The default value is 0 (no retries).
   * @property {object} [poolInfo] The Pool on which the Batch service runs the
   * Job's Tasks. You may change the Pool for a Job only when the Job is
   * disabled. The Patch Job call will fail if you include the poolInfo element
   * and the Job is not disabled. If you specify an autoPoolSpecification in
   * the poolInfo, only the keepAlive property of the autoPoolSpecification can
   * be updated, and then only if the autoPoolSpecification has a
   * poolLifetimeOption of Job (other job properties can be updated as normal).
   * If omitted, the Job continues to run on its current Pool.
   * @property {string} [poolInfo.poolId] You must ensure that the Pool
   * referenced by this property exists. If the Pool does not exist at the time
   * the Batch service tries to schedule a Job, no Tasks for the Job will run
   * until you create a Pool with that id. Note that the Batch service will not
   * reject the Job request; it will simply not run Tasks until the Pool
   * exists. You must specify either the Pool ID or the auto Pool
   * specification, but not both.
   * @property {object} [poolInfo.autoPoolSpecification] If auto Pool creation
   * fails, the Batch service moves the Job to a completed state, and the Pool
   * creation error is set in the Job's scheduling error property. The Batch
   * service manages the lifetime (both creation and, unless keepAlive is
   * specified, deletion) of the auto Pool. Any user actions that affect the
   * lifetime of the auto Pool while the Job is active will result in
   * unexpected behavior. You must specify either the Pool ID or the auto Pool
   * specification, but not both.
   * @property {string} [poolInfo.autoPoolSpecification.autoPoolIdPrefix] The
   * Batch service assigns each auto Pool a unique identifier on creation. To
   * distinguish between Pools created for different purposes, you can specify
   * this element to add a prefix to the ID that is assigned. The prefix can be
   * up to 20 characters long.
   * @property {string} [poolInfo.autoPoolSpecification.poolLifetimeOption]
   * Possible values include: 'jobSchedule', 'job'
   * @property {boolean} [poolInfo.autoPoolSpecification.keepAlive] If false,
   * the Batch service deletes the Pool once its lifetime (as determined by the
   * poolLifetimeOption setting) expires; that is, when the Job or Job Schedule
   * completes. If true, the Batch service does not delete the Pool
   * automatically. It is up to the user to delete auto Pools created with this
   * option.
   * @property {object} [poolInfo.autoPoolSpecification.pool]
   * @property {string} [poolInfo.autoPoolSpecification.pool.displayName] The
   * display name need not be unique and can contain any Unicode characters up
   * to a maximum length of 1024.
   * @property {string} [poolInfo.autoPoolSpecification.pool.vmSize] For
   * information about available sizes of virtual machines in Pools, see Choose
   * a VM size for Compute Nodes in an Azure Batch Pool
   * (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration] This
   * property must be specified if the Pool needs to be created with Azure PaaS
   * VMs. This property and virtualMachineConfiguration are mutually exclusive
   * and one of the properties must be specified. If neither is specified then
   * the Batch service returns an error; if you are calling the REST API
   * directly, the HTTP status code is 400 (Bad Request). This property cannot
   * be specified if the Batch Account was created with its poolAllocationMode
   * property set to 'UserSubscription'.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osFamily]
   * Possible values are:
   * 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1.
   * 3 - OS Family 3, equivalent to Windows Server 2012.
   * 4 - OS Family 4, equivalent to Windows Server 2012 R2.
   * 5 - OS Family 5, equivalent to Windows Server 2016.
   * 6 - OS Family 6, equivalent to Windows Server 2019. For more information,
   * see Azure Guest OS Releases
   * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.cloudServiceConfiguration.osVersion]
   * The default value is * which specifies the latest operating system version
   * for the specified OS family.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration] This
   * property must be specified if the Pool needs to be created with Azure IaaS
   * VMs. This property and cloudServiceConfiguration are mutually exclusive
   * and one of the properties must be specified. If neither is specified then
   * the Batch service returns an error; if you are calling the REST API
   * directly, the HTTP status code is 400 (Bad Request).
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
   * For example, Canonical or MicrosoftWindowsServer.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
   * For example, UbuntuServer or WindowsServer.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
   * For example, 18.04-LTS or 2019-Datacenter.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
   * A value of 'latest' can be specified to select the latest version of an
   * Image. If omitted, the default is 'latest'.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.virtualMachineImageId]
   * This property is mutually exclusive with other ImageReference properties.
   * For Virtual Machine Image it must be in the same region and subscription
   * as the Azure Batch account. For SIG image it must have replicas in the
   * same region as the Azure Batch account. For information about the firewall
   * settings for the Batch Compute Node agent to communicate with the Batch
   * service see
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
   * The Batch Compute Node agent is a program that runs on each Compute Node
   * in the Pool, and provides the command-and-control interface between the
   * Compute Node and the Batch service. There are different implementations of
   * the Compute Node agent, known as SKUs, for different operating systems.
   * You must specify a Compute Node agent SKU which matches the selected Image
   * reference. To get the list of supported Compute Node agent SKUs along with
   * their list of verified Image references, see the 'List supported Compute
   * Node agent SKUs' operation.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
   * This property must not be specified if the imageReference property
   * specifies a Linux OS Image.
   * @property {boolean}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
   * If omitted, the default value is true.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.dataDisks]
   * This property must be specified if the Compute Nodes in the Pool need to
   * have empty data disks attached to them. This cannot be updated. Each
   * Compute Node gets its own disk (the disk is not a file share). Existing
   * disks cannot be attached, each attached disk is empty. When the Compute
   * Node is removed from the Pool, the disk and all data associated with it is
   * also deleted. The disk is not formatted after being attached, it must be
   * formatted before use - for more information see
   * https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux
   * and
   * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.licenseType]
   * This only applies to Images that contain the Windows operating system, and
   * should only be used when you hold valid on-premises licenses for the
   * Compute Nodes which will be deployed. If omitted, no on-premises licensing
   * discount is applied. Values are:
   *
   * Windows_Server - The on-premises license is for Windows Server.
   * Windows_Client - The on-premises license is for Windows Client.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.containerConfiguration]
   * If specified, setup is performed on each Compute Node in the Pool to allow
   * Tasks to run in containers. All regular Tasks and Job manager Tasks run on
   * this Pool must specify the containerSettings property, and all other Tasks
   * may specify it.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.containerConfiguration.containerImageNames]
   * This is the full Image reference, as would be specified to "docker pull".
   * An Image will be sourced from the default Docker registry unless the Image
   * is fully qualified with an alternative registry.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.virtualMachineConfiguration.containerConfiguration.containerRegistries]
   * If any Images must be downloaded from a private registry which requires
   * credentials, then those credentials must be provided here.
   * @property {number} [poolInfo.autoPoolSpecification.pool.maxTasksPerNode]
   * The default value is 1. The maximum value is the smaller of 4 times the
   * number of cores of the vmSize of the Pool or 256.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy] If not
   * specified, the default is spread.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType] If
   * not specified, the default is spread. Possible values include: 'spread',
   * 'pack'
   * @property {moment.duration}
   * [poolInfo.autoPoolSpecification.pool.resizeTimeout] This timeout applies
   * only to manual scaling; it has no effect when enableAutoScale is set to
   * true. The default value is 15 minutes. The minimum value is 5 minutes. If
   * you specify a value less than 5 minutes, the Batch service rejects the
   * request with an error; if you are calling the REST API directly, the HTTP
   * status code is 400 (Bad Request).
   * @property {number}
   * [poolInfo.autoPoolSpecification.pool.targetDedicatedNodes] This property
   * must not be specified if enableAutoScale is set to true. If
   * enableAutoScale is set to false, then you must set either
   * targetDedicatedNodes, targetLowPriorityNodes, or both.
   * @property {number}
   * [poolInfo.autoPoolSpecification.pool.targetLowPriorityNodes] This property
   * must not be specified if enableAutoScale is set to true. If
   * enableAutoScale is set to false, then you must set either
   * targetDedicatedNodes, targetLowPriorityNodes, or both.
   * @property {boolean} [poolInfo.autoPoolSpecification.pool.enableAutoScale]
   * If false, at least one of targetDedicateNodes and targetLowPriorityNodes
   * must be specified. If true, the autoScaleFormula element is required. The
   * Pool automatically resizes according to the formula. The default value is
   * false.
   * @property {string} [poolInfo.autoPoolSpecification.pool.autoScaleFormula]
   * This property must not be specified if enableAutoScale is set to false. It
   * is required if enableAutoScale is set to true. The formula is checked for
   * validity before the Pool is created. If the formula is not valid, the
   * Batch service rejects the request with detailed error information.
   * @property {moment.duration}
   * [poolInfo.autoPoolSpecification.pool.autoScaleEvaluationInterval] The
   * default value is 15 minutes. The minimum and maximum value are 5 minutes
   * and 168 hours respectively. If you specify a value less than 5 minutes or
   * greater than 168 hours, the Batch service rejects the request with an
   * invalid property value error; if you are calling the REST API directly,
   * the HTTP status code is 400 (Bad Request).
   * @property {boolean}
   * [poolInfo.autoPoolSpecification.pool.enableInterNodeCommunication]
   * Enabling inter-node communication limits the maximum size of the Pool due
   * to deployment restrictions on the Compute Nodes of the Pool. This may
   * result in the Pool not reaching its desired size. The default value is
   * false.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration]
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration.subnetId] The
   * virtual network must be in the same region and subscription as the Azure
   * Batch Account. The specified subnet should have enough free IP addresses
   * to accommodate the number of Compute Nodes in the Pool. If the subnet
   * doesn't have enough free IP addresses, the Pool will partially allocate
   * Nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service
   * principal must have the 'Classic Virtual Machine Contributor' Role-Based
   * Access Control (RBAC) role for the specified VNet. The specified subnet
   * must allow communication from the Azure Batch service to be able to
   * schedule Tasks on the Nodes. This can be verified by checking if the
   * specified VNet has any associated Network Security Groups (NSG). If
   * communication to the Nodes in the specified subnet is denied by an NSG,
   * then the Batch service will set the state of the Compute Nodes to
   * unusable. For Pools created with virtualMachineConfiguration only ARM
   * virtual networks ('Microsoft.Network/virtualNetworks') are supported, but
   * for Pools created with cloudServiceConfiguration both ARM and classic
   * virtual networks are supported. If the specified VNet has any associated
   * Network Security Groups (NSG), then a few reserved system ports must be
   * enabled for inbound communication. For Pools created with a virtual
   * machine configuration, enable ports 29876 and 29877, as well as port 22
   * for Linux and port 3389 for Windows. For Pools created with a cloud
   * service configuration, enable ports 10100, 20100, and 30100. Also enable
   * outbound connections to Azure Storage on port 443. For more details see:
   * https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration.dynamicVNetAssignmentScope]
   * Possible values include: 'none', 'job'
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration]
   * Pool endpoint configuration is only supported on Pools with the
   * virtualMachineConfiguration property.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration.endpointConfiguration.inboundNATPools]
   * The maximum number of inbound NAT Pools per Batch Pool is 5. If the
   * maximum number of inbound NAT Pools is exceeded the request fails with
   * HTTP status code 400.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.networkConfiguration.publicIPs] The
   * number of IPs specified here limits the maximum size of the Pool - 50
   * dedicated nodes or 20 low-priority nodes can be allocated for each public
   * IP. For example, a pool needing 150 dedicated VMs would need at least 3
   * public IPs specified. Each element of this collection is of the form:
   * /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}.
   * @property {object} [poolInfo.autoPoolSpecification.pool.startTask]
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.commandLine] The command
   * line does not run under a shell, and therefore cannot take advantage of
   * shell features such as environment variable expansion. If you want to take
   * advantage of such features, you should invoke the shell in the command
   * line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c
   * MyCommand" in Linux. If the command line refers to file paths, it should
   * use a relative path (relative to the Task working directory), or use the
   * Batch provided environment variable
   * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings] When
   * this is specified, all directories recursively below the
   * AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node)
   * are mapped into the container, all Task environment variables are mapped
   * into the container, and the Task command line is executed in the
   * container. Files produced in the container outside of
   * AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning
   * that Batch file APIs will not be able to access those files.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.containerRunOptions]
   * These additional options are supplied as arguments to the "docker create"
   * command, in addition to those controlled by the Batch Service.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.imageName]
   * This is the full Image reference, as would be specified to "docker pull".
   * If no tag is provided as part of the Image name, the tag ":latest" is used
   * as a default.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.registry]
   * This setting can be omitted if was already provided at Pool creation.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.registry.registryServer]
   * If omitted, the default is "docker.io".
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.registry.userName]
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.registry.password]
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.containerSettings.workingDirectory]
   * The default is 'taskWorkingDirectory'. Possible values include:
   * 'taskWorkingDirectory', 'containerImageDefault'
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.startTask.resourceFiles] Files listed
   * under this element are located in the Task's working directory.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.startTask.environmentSettings]
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity] If omitted,
   * the Task runs as a non-administrative user unique to the Task.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.userName] The
   * userName and autoUser properties are mutually exclusive; you must specify
   * one but not both.
   * @property {object}
   * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser] The
   * userName and autoUser properties are mutually exclusive; you must specify
   * one but not both.
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.scope]
   * The default value is pool. If the pool is running Windows a value of Task
   * should be specified if stricter isolation between tasks is required. For
   * example, if the task mutates the registry in a way which could impact
   * other tasks, or if certificates have been specified on the pool which
   * should not be accessible by normal tasks but should be accessible by
   * StartTasks. Possible values include: 'task', 'pool'
   * @property {string}
   * [poolInfo.autoPoolSpecification.pool.startTask.userIdentity.autoUser.elevationLevel]
   * The default value is nonAdmin. Possible values include: 'nonAdmin',
   * 'admin'
   * @property {number}
   * [poolInfo.autoPoolSpecification.pool.startTask.maxTaskRetryCount] The
   * Batch service retries a Task if its exit code is nonzero. Note that this
   * value specifically controls the number of retries. The Batch service will
   * try the Task once, and may then retry up to this limit. For example, if
   * the maximum retry count is 3, Batch tries the Task up to 4 times (one
   * initial try and 3 retries). If the maximum retry count is 0, the Batch
   * service does not retry the Task. If the maximum retry count is -1, the
   * Batch service retries the Task without limit.
   * @property {boolean}
   * [poolInfo.autoPoolSpecification.pool.startTask.waitForSuccess] If true and
   * the StartTask fails on a Node, the Batch service retries the StartTask up
   * to its maximum retry count (maxTaskRetryCount). If the Task has still not
   * completed successfully after all retries, then the Batch service marks the
   * Node unusable, and will not schedule Tasks to it. This condition can be
   * detected via the Compute Node state and failure info details. If false,
   * the Batch service will not wait for the StartTask to complete. In this
   * case, other Tasks can start executing on the Compute Node while the
   * StartTask is still running; and even if the StartTask fails, new Tasks
   * will continue to be scheduled on the Compute Node. The default is true.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.certificateReferences] For Windows
   * Nodes, the Batch service installs the Certificates to the specified
   * Certificate store and location. For Linux Compute Nodes, the Certificates
   * are stored in a directory inside the Task working directory and an
   * environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to
   * query for this location. For Certificates with visibility of 'remoteUser',
   * a 'certs' directory is created in the user's home directory (e.g.,
   * /home/{user-name}/certs) and Certificates are placed in that directory.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.applicationPackageReferences] Changes
   * to Package references affect all new Nodes joining the Pool, but do not
   * affect Compute Nodes that are already in the Pool until they are rebooted
   * or reimaged. There is a maximum of 10 Package references on any given
   * Pool.
   * @property {array}
   * [poolInfo.autoPoolSpecification.pool.applicationLicenses] The list of
   * application licenses must be a subset of available Batch service
   * application licenses. If a license is requested which is not supported,
   * Pool creation will fail. The permitted licenses available on the Pool are
   * 'maya', 'vray', '3dsmax', 'arnold'. An additional charge applies for each
   * application license added to the Pool.
   * @property {array} [poolInfo.autoPoolSpecification.pool.userAccounts]
   * @property {array} [poolInfo.autoPoolSpecification.pool.metadata] The Batch
   * service does not assign any meaning to metadata; it is solely for the use
   * of user code.
   * @property {array} [poolInfo.autoPoolSpecification.pool.mountConfiguration]
   * This supports Azure Files, NFS, CIFS/SMB, and Blobfuse.
   * @property {array} [metadata] A list of name-value pairs associated with
   * the Job as metadata. If omitted, the existing Job metadata is left
   * unchanged.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobPatchParameter
   *
   * @returns {object} metadata of JobPatchParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobPatchParameter',
      type: {
        name: 'Composite',
        className: 'JobPatchParameter',
        modelProperties: {
          priority: {
            required: false,
            serializedName: 'priority',
            type: {
              name: 'Number'
            }
          },
          onAllTasksComplete: {
            required: false,
            serializedName: 'onAllTasksComplete',
            type: {
              name: 'Enum',
              allowedValues: [ 'noAction', 'terminateJob' ]
            }
          },
          constraints: {
            required: false,
            serializedName: 'constraints',
            type: {
              name: 'Composite',
              className: 'JobConstraints'
            }
          },
          poolInfo: {
            required: false,
            serializedName: 'poolInfo',
            type: {
              name: 'Composite',
              className: 'PoolInformation'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetadataItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetadataItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobPatchParameter;
