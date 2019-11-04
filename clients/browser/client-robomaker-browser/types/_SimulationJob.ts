import {
  _OutputLocation,
  _UnmarshalledOutputLocation
} from "./_OutputLocation";
import {
  _RobotApplicationConfig,
  _UnmarshalledRobotApplicationConfig
} from "./_RobotApplicationConfig";
import {
  _SimulationApplicationConfig,
  _UnmarshalledSimulationApplicationConfig
} from "./_SimulationApplicationConfig";
import {
  _VPCConfigResponse,
  _UnmarshalledVPCConfigResponse
} from "./_VPCConfigResponse";

/**
 * <p>Information about a simulation job.</p>
 */
export interface _SimulationJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>Status of the simulation job.</p>
   */
  status?:
    | "Pending"
    | "Preparing"
    | "Running"
    | "Restarting"
    | "Completed"
    | "Failed"
    | "RunningFailed"
    | "Terminating"
    | "Terminated"
    | "Canceled"
    | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date | string | number;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Restart the simulation job in the same host instance.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>
   */
  failureBehavior?: "Fail" | "Continue" | string;

  /**
   * <p>The failure code of the simulation job if it failed.</p>
   */
  failureCode?:
    | "InternalServiceError"
    | "RobotApplicationCrash"
    | "SimulationApplicationCrash"
    | "BadPermissionsRobotApplication"
    | "BadPermissionsSimulationApplication"
    | "BadPermissionsS3Output"
    | "BadPermissionsCloudwatchLogs"
    | "SubnetIpLimitExceeded"
    | "ENILimitExceeded"
    | "BadPermissionsUserCredentials"
    | "InvalidBundleRobotApplication"
    | "InvalidBundleSimulationApplication"
    | "RobotApplicationVersionMismatchedEtag"
    | "SimulationApplicationVersionMismatchedEtag"
    | "WrongRegionS3Output"
    | "WrongRegionRobotApplication"
    | "WrongRegionSimulationApplication"
    | string;

  /**
   * <p>The reason why the simulation job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: _OutputLocation;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. </p>
   */
  iamRole?: string;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?:
    | Array<_RobotApplicationConfig>
    | Iterable<_RobotApplicationConfig>;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?:
    | Array<_SimulationApplicationConfig>
    | Iterable<_SimulationApplicationConfig>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: _VPCConfigResponse;
}

export interface _UnmarshalledSimulationJob extends _SimulationJob {
  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: _UnmarshalledOutputLocation;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: Array<_UnmarshalledRobotApplicationConfig>;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: Array<_UnmarshalledSimulationApplicationConfig>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: _UnmarshalledVPCConfigResponse;
}