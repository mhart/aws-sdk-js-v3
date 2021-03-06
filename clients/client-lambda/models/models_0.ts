import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Limits that are related to concurrency and storage. All file and storage sizes are in bytes.</p>
 */
export interface AccountLimit {
  /**
   * <p>The maximum size of a deployment package when it's uploaded directly to AWS Lambda. Use Amazon S3 for larger
   *       files.</p>
   */
  CodeSizeZipped?: number;

  /**
   * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual
   *       functions with <a>PutFunctionConcurrency</a>.</p>
   */
  UnreservedConcurrentExecutions?: number;

  /**
   * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
   */
  CodeSizeUnzipped?: number;

  /**
   * <p>The maximum number of simultaneous function executions.</p>
   */
  ConcurrentExecutions?: number;
}

export namespace AccountLimit {
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj,
  });
}

/**
 * <p>The number of functions and amount of storage in use.</p>
 */
export interface AccountUsage {
  /**
   * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The number of Lambda functions.</p>
   */
  FunctionCount?: number;
}

export namespace AccountUsage {
  export const filterSensitiveLog = (obj: AccountUsage): any => ({
    ...obj,
  });
}

export interface AddLayerVersionPermissionRequest {
  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>An account ID, or <code>*</code> to grant permission to all AWS accounts.</p>
   */
  Principal: string | undefined;

  /**
   * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified
   *       organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
   */
  Action: string | undefined;
}

export namespace AddLayerVersionPermissionRequest {
  export const filterSensitiveLog = (obj: AddLayerVersionPermissionRequest): any => ({
    ...obj,
  });
}

export interface AddLayerVersionPermissionResponse {
  /**
   * <p>The permission statement.</p>
   */
  Statement?: string;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;
}

export namespace AddLayerVersionPermissionResponse {
  export const filterSensitiveLog = (obj: AddLayerVersionPermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>The exception message.</p>
   */
  message?: string;

  /**
   * <p>The exception type.</p>
   */
  Type?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface PolicyLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "PolicyLengthExceededException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace PolicyLengthExceededException {
  export const filterSensitiveLog = (obj: PolicyLengthExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the
 *         <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your
 *       resource.</p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace PreconditionFailedException {
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists, or another operation is in progress.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * <p>The exception message.</p>
   */
  message?: string;

  /**
   * <p>The exception type.</p>
   */
  Type?: string;
}

export namespace ResourceConflictException {
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Lambda service encountered an internal error.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace ServiceException {
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

export enum ThrottleReason {
  CallerRateLimitExceeded = "CallerRateLimitExceeded",
  ConcurrentInvocationLimitExceeded = "ConcurrentInvocationLimitExceeded",
  FunctionInvocationRateLimitExceeded = "FunctionInvocationRateLimitExceeded",
  ReservedFunctionConcurrentInvocationLimitExceeded = "ReservedFunctionConcurrentInvocationLimitExceeded",
  ReservedFunctionInvocationRateLimitExceeded = "ReservedFunctionInvocationRateLimitExceeded",
}

/**
 * <p>The request throughput limit was exceeded.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  retryAfterSeconds?: string;

  Type?: string;
  Reason?: ThrottleReason | string;
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

export interface AddPermissionRequest {
  /**
   * <p>For Alexa Smart Home functions, a token that must be supplied by the invoker.</p>
   */
  EventSourceToken?: string;

  /**
   * <p>Specify a version or alias to add permissions to a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or
   *         <code>lambda:GetFunction</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or
   *       Amazon SNS topic.</p>
   */
  SourceArn?: string;

  /**
   * <p>For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to
   *       ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted
   *       by its owner and recreated by another account.</p>
   */
  SourceAccount?: string;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or
   *         <code>SourceAccount</code> to limit who can invoke the function through that service.</p>
   */
  Principal: string | undefined;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace AddPermissionRequest {
  export const filterSensitiveLog = (obj: AddPermissionRequest): any => ({
    ...obj,
  });
}

export interface AddPermissionResponse {
  /**
   * <p>The permission statement that's added to the function policy.</p>
   */
  Statement?: string;
}

export namespace AddPermissionResponse {
  export const filterSensitiveLog = (obj: AddPermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.</p>
 */
export interface AliasRoutingConfiguration {
  /**
   * <p>The second version, and the percentage of traffic that's routed to it.</p>
   */
  AdditionalVersionWeights?: { [key: string]: number };
}

export namespace AliasRoutingConfiguration {
  export const filterSensitiveLog = (obj: AliasRoutingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 */
export interface AliasConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   */
  AliasArn?: string;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier that changes when you update the alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;

  /**
   * <p>The name of the alias.</p>
   */
  Name?: string;
}

export namespace AliasConfiguration {
  export const filterSensitiveLog = (obj: AliasConfiguration): any => ({
    ...obj,
  });
}

export interface CreateAliasRequest {
  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion: string | undefined;
}

export namespace CreateAliasRequest {
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A destination for events that failed processing.</p>
 */
export interface OnFailure {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
   */
  Destination?: string;
}

export namespace OnFailure {
  export const filterSensitiveLog = (obj: OnFailure): any => ({
    ...obj,
  });
}

/**
 * <p>A destination for events that were processed successfully.</p>
 */
export interface OnSuccess {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
   */
  Destination?: string;
}

export namespace OnSuccess {
  export const filterSensitiveLog = (obj: OnSuccess): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration object that specifies the destination of an event after Lambda processes it.</p>
 */
export interface DestinationConfig {
  /**
   * <p>The destination configuration for failed invocations.</p>
   */
  OnFailure?: OnFailure;

  /**
   * <p>The destination configuration for successful invocations.</p>
   */
  OnSuccess?: OnSuccess;
}

export namespace DestinationConfig {
  export const filterSensitiveLog = (obj: DestinationConfig): any => ({
    ...obj,
  });
}

export enum EventSourcePosition {
  AT_TIMESTAMP = "AT_TIMESTAMP",
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

export interface CreateEventSourceMappingRequest {
  /**
   * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>
   *       (MSK) The name of the Kafka topic.
   *     </p>
   */
  Topics?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
   *             </li>
   *          </ul>
   */
  EventSourceArn: string | undefined;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *          </ul>
   */
  BatchSize?: number;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>(Streams) The number of batches to process from each shard concurrently.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams
   *       sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams.</p>
   */
  StartingPosition?: EventSourcePosition | string;

  /**
   * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>(Streams) The maximum amount of time to gather records before invoking the function, in seconds.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
   *       reading.</p>
   */
  StartingPositionTimestamp?: Date;

  /**
   * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1).</p>
   */
  MaximumRecordAgeInSeconds?: number;
}

export namespace CreateEventSourceMappingRequest {
  export const filterSensitiveLog = (obj: CreateEventSourceMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a>
 *       for details.</p>
 */
export interface EventSourceMappingConfiguration {
  /**
   * <p>
   *       (MSK) The name of the Kafka topic.
   *     </p>
   */
  Topics?: string[];

  /**
   * <p>The ARN of the Lambda function.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>(Streams) The number of batches to process from each shard concurrently.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The date that the event source mapping was last updated, or its state changed.</p>
   */
  LastModified?: Date;

  /**
   * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>,
   *       <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>,
   *       <code>Updating</code>, or <code>Deleting</code>.</p>
   */
  State?: string;

  /**
   * <p>(Streams) The maximum age of a record that Lambda sends to a function for processing.</p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams) The maximum amount of time to gather records before invoking the function, in seconds.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID?: string;

  /**
   * <p>The result of the last AWS Lambda invocation of your Lambda function.</p>
   */
  LastProcessingResult?: string;

  /**
   * <p>(Streams) The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>Indicates whether the last change to the event source mapping was made by a user, or by the Lambda
   *       service.</p>
   */
  StateTransitionReason?: string;
}

export namespace EventSourceMappingConfiguration {
  export const filterSensitiveLog = (obj: EventSourceMappingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface CodeStorageExceededException extends __SmithyException, $MetadataBearer {
  name: "CodeStorageExceededException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  message?: string;
}

export namespace CodeStorageExceededException {
  export const filterSensitiveLog = (obj: CodeStorageExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, or upload a deployment
 *       package directly.</p>
 */
export interface FunctionCode {
  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for
   *   you.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;
}

export namespace FunctionCode {
  export const filterSensitiveLog = (obj: FunctionCode): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for
 *       failed asynchronous invocations.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
   */
  TargetArn?: string;
}

export namespace DeadLetterConfig {
  export const filterSensitiveLog = (obj: DeadLetterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A function's environment variable settings.</p>
 */
export interface Environment {
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };
}

export namespace Environment {
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
  });
}

/**
 * <p>Details about the connection between a Lambda function and an Amazon EFS file system.</p>
 */
export interface FileSystemConfig {
  /**
   * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
   */
  LocalMountPath: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.</p>
   */
  Arn: string | undefined;
}

export namespace FileSystemConfig {
  export const filterSensitiveLog = (obj: FileSystemConfig): any => ({
    ...obj,
  });
}

export enum Runtime {
  dotnetcore10 = "dotnetcore1.0",
  dotnetcore20 = "dotnetcore2.0",
  dotnetcore21 = "dotnetcore2.1",
  dotnetcore31 = "dotnetcore3.1",
  go1x = "go1.x",
  java11 = "java11",
  java8 = "java8",
  java8al2 = "java8.al2",
  nodejs = "nodejs",
  nodejs10x = "nodejs10.x",
  nodejs12x = "nodejs12.x",
  nodejs43 = "nodejs4.3",
  nodejs43edge = "nodejs4.3-edge",
  nodejs610 = "nodejs6.10",
  nodejs810 = "nodejs8.10",
  provided = "provided",
  providedal2 = "provided.al2",
  python27 = "python2.7",
  python36 = "python3.6",
  python37 = "python3.7",
  python38 = "python3.8",
  ruby25 = "ruby2.5",
  ruby27 = "ruby2.7",
}

export enum TracingMode {
  Active = "Active",
  PassThrough = "PassThrough",
}

/**
 * <p>The function's AWS X-Ray tracing configuration. To sample and record incoming requests, set <code>Mode</code>
 *       to <code>Active</code>.</p>
 */
export interface TracingConfig {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: TracingMode | string;
}

export namespace TracingConfig {
  export const filterSensitiveLog = (obj: TracingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 */
export interface VpcConfig {
  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];
}

export namespace VpcConfig {
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

export interface CreateFunctionRequest {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the
   *       function.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   */
  Role: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
   */
  Runtime: Runtime | string | undefined;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   */
  Environment?: Environment;

  /**
   * <p>Set to true to publish the first version of the function during creation.</p>
   */
  Publish?: boolean;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment
   *       variables. If it's not provided, AWS Lambda uses a default service key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
   *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   */
  Layers?: string[];

  /**
   * <p>A description of the function.</p>
   */
  Description?: string;

  /**
   * <p>For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
   *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
   *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with AWS
   *       X-Ray.</p>
   */
  TracingConfig?: TracingConfig;

  /**
   * <p>The amount of memory that your function has access to. Increasing the function's memory also increases its CPU
   *       allocation. The default value is 128 MB. The value must be a multiple of 64 MB.</p>
   */
  MemorySize?: number;

  /**
   * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
   *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
   *       maximum allowed value is 900 seconds.</p>
   */
  Timeout?: number;

  /**
   * <p>The code for the function.</p>
   */
  Code: FunctionCode | undefined;

  /**
   * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
   *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
   *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
   */
  Handler: string | undefined;
}

export namespace CreateFunctionRequest {
  export const filterSensitiveLog = (obj: CreateFunctionRequest): any => ({
    ...obj,
    ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
    ...(obj.Code && { Code: FunctionCode.filterSensitiveLog(obj.Code) }),
  });
}

/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface EnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace EnvironmentError {
  export const filterSensitiveLog = (obj: EnvironmentError): any => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The results of an operation to update or read environment variables. If the operation is successful, the
 *       response contains the environment variables. If it failed, the response contains details about the error.</p>
 */
export interface EnvironmentResponse {
  /**
   * <p>Error messages for environment variables that couldn't be applied.</p>
   */
  Error?: EnvironmentError;

  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };
}

export namespace EnvironmentResponse {
  export const filterSensitiveLog = (obj: EnvironmentResponse): any => ({
    ...obj,
    ...(obj.Error && { Error: EnvironmentError.filterSensitiveLog(obj.Error) }),
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
  });
}

export enum LastUpdateStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Successful = "Successful",
}

export enum LastUpdateStatusReasonCode {
  EniLimitExceeded = "EniLimitExceeded",
  InsufficientRolePermissions = "InsufficientRolePermissions",
  InternalError = "InternalError",
  InvalidConfiguration = "InvalidConfiguration",
  InvalidSecurityGroup = "InvalidSecurityGroup",
  InvalidSubnet = "InvalidSubnet",
  SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses",
}

/**
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface Layer {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export namespace Layer {
  export const filterSensitiveLog = (obj: Layer): any => ({
    ...obj,
  });
}

export enum State {
  Active = "Active",
  Failed = "Failed",
  Inactive = "Inactive",
  Pending = "Pending",
}

export enum StateReasonCode {
  Creating = "Creating",
  EniLimitExceeded = "EniLimitExceeded",
  Idle = "Idle",
  InsufficientRolePermissions = "InsufficientRolePermissions",
  InternalError = "InternalError",
  InvalidConfiguration = "InvalidConfiguration",
  InvalidSecurityGroup = "InvalidSecurityGroup",
  InvalidSubnet = "InvalidSubnet",
  Restoring = "Restoring",
  SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses",
}

/**
 * <p>The function's AWS X-Ray tracing configuration.</p>
 */
export interface TracingConfigResponse {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: TracingMode | string;
}

export namespace TracingConfigResponse {
  export const filterSensitiveLog = (obj: TracingConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface VpcConfigResponse {
  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace VpcConfigResponse {
  export const filterSensitiveLog = (obj: VpcConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface FunctionConfiguration {
  /**
   * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by
   *       invoking it.</p>
   */
  State?: State | string;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: EnvironmentResponse;

  /**
   * <p>The reason for the last update that was performed on the function.</p>
   */
  LastUpdateStatusReason?: string;

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *       layers</a>.</p>
   */
  Layers?: Layer[];

  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've
   *       configured a customer managed CMK.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: VpcConfigResponse;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The size of the function's deployment package, in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code>
   *       after function creation completes.</p>
   */
  LastUpdateStatus?: LastUpdateStatus | string;

  /**
   * <p>The reason code for the last update that was performed on the function.</p>
   */
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | string;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: TracingConfigResponse;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: Runtime | string;

  /**
   * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or
   *       modify the function.</p>
   */
  StateReasonCode?: StateReasonCode | string;

  /**
   * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The function's description.</p>
   */
  Description?: string;

  /**
   * <p>The memory that's allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The reason for the function's current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  FunctionArn?: string;

  /**
   * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModified?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;
}

export namespace FunctionConfiguration {
  export const filterSensitiveLog = (obj: FunctionConfiguration): any => ({
    ...obj,
    ...(obj.Environment && { Environment: EnvironmentResponse.filterSensitiveLog(obj.Environment) }),
  });
}

export interface DeleteAliasRequest {
  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteAliasRequest {
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;
}

export namespace DeleteEventSourceMappingRequest {
  export const filterSensitiveLog = (obj: DeleteEventSourceMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSource
 *       Mapping in CREATING, or tried to delete a EventSource mapping currently in the UPDATING state.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
  Type?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteFunctionRequest {
  /**
   * <p>The name of the Lambda function or version.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version to delete. You can't delete a version that's referenced by an alias.</p>
   */
  Qualifier?: string;
}

export namespace DeleteFunctionRequest {
  export const filterSensitiveLog = (obj: DeleteFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionConcurrencyRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteFunctionConcurrencyRequest {
  export const filterSensitiveLog = (obj: DeleteFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace DeleteFunctionEventInvokeConfigRequest {
  export const filterSensitiveLog = (obj: DeleteFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteLayerVersionRequest {
  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace DeleteLayerVersionRequest {
  export const filterSensitiveLog = (obj: DeleteLayerVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;
}

export namespace DeleteProvisionedConcurrencyConfigRequest {
  export const filterSensitiveLog = (obj: DeleteProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsRequest {}

export namespace GetAccountSettingsRequest {
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsResponse {
  /**
   * <p>The number of functions and amount of storage in use.</p>
   */
  AccountUsage?: AccountUsage;

  /**
   * <p>Limits that are related to concurrency and code storage.</p>
   */
  AccountLimit?: AccountLimit;
}

export namespace GetAccountSettingsResponse {
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAliasRequest {
  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetAliasRequest {
  export const filterSensitiveLog = (obj: GetAliasRequest): any => ({
    ...obj,
  });
}

export interface GetEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;
}

export namespace GetEventSourceMappingRequest {
  export const filterSensitiveLog = (obj: GetEventSourceMappingRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionRequest {
  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionRequest {
  export const filterSensitiveLog = (obj: GetFunctionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's deployment package.</p>
 */
export interface FunctionCodeLocation {
  /**
   * <p>The service that's hosting the file.</p>
   */
  RepositoryType?: string;

  /**
   * <p>A presigned URL that you can use to download the deployment package.</p>
   */
  Location?: string;
}

export namespace FunctionCodeLocation {
  export const filterSensitiveLog = (obj: FunctionCodeLocation): any => ({
    ...obj,
  });
}

export interface Concurrency {
  /**
   * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  ReservedConcurrentExecutions?: number;
}

export namespace Concurrency {
  export const filterSensitiveLog = (obj: Concurrency): any => ({
    ...obj,
  });
}

export interface GetFunctionResponse {
  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved
   *         concurrency</a>.</p>
   */
  Concurrency?: Concurrency;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The configuration of the function or version.</p>
   */
  Configuration?: FunctionConfiguration;

  /**
   * <p>The deployment package of the function or version.</p>
   */
  Code?: FunctionCodeLocation;
}

export namespace GetFunctionResponse {
  export const filterSensitiveLog = (obj: GetFunctionResponse): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: FunctionConfiguration.filterSensitiveLog(obj.Configuration) }),
  });
}

export interface GetFunctionConcurrencyRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionConcurrencyRequest {
  export const filterSensitiveLog = (obj: GetFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionConcurrencyResponse {
  /**
   * <p>The number of simultaneous executions that are reserved for the function.</p>
   */
  ReservedConcurrentExecutions?: number;
}

export namespace GetFunctionConcurrencyResponse {
  export const filterSensitiveLog = (obj: GetFunctionConcurrencyResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionConfigurationRequest {
  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionConfigurationRequest {
  export const filterSensitiveLog = (obj: GetFunctionConfigurationRequest): any => ({
    ...obj,
  });
}

export interface FunctionEventInvokeConfig {
  /**
   * <p>The date and time that the configuration was last updated.</p>
   */
  LastModified?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;
}

export namespace FunctionEventInvokeConfig {
  export const filterSensitiveLog = (obj: FunctionEventInvokeConfig): any => ({
    ...obj,
  });
}

export interface GetFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace GetFunctionEventInvokeConfigRequest {
  export const filterSensitiveLog = (obj: GetFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionRequest {
  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace GetLayerVersionRequest {
  export const filterSensitiveLog = (obj: GetLayerVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionContentOutput {
  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
   */
  Location?: string;

  /**
   * <p>The SHA-256 hash of the layer archive.</p>
   */
  CodeSha256?: string;
}

export namespace LayerVersionContentOutput {
  export const filterSensitiveLog = (obj: LayerVersionContentOutput): any => ({
    ...obj,
  });
}

export interface GetLayerVersionResponse {
  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The ARN of the layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The layer's software license.</p>
   */
  LicenseInfo?: string;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>Details about the layer version.</p>
   */
  Content?: LayerVersionContentOutput;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  CreatedDate?: string;
}

export namespace GetLayerVersionResponse {
  export const filterSensitiveLog = (obj: GetLayerVersionResponse): any => ({
    ...obj,
  });
}

export interface GetLayerVersionByArnRequest {
  /**
   * <p>The ARN of the layer version.</p>
   */
  Arn: string | undefined;
}

export namespace GetLayerVersionByArnRequest {
  export const filterSensitiveLog = (obj: GetLayerVersionByArnRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionPolicyRequest {
  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace GetLayerVersionPolicyRequest {
  export const filterSensitiveLog = (obj: GetLayerVersionPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionPolicyResponse {
  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;

  /**
   * <p>The policy document.</p>
   */
  Policy?: string;
}

export namespace GetLayerVersionPolicyResponse {
  export const filterSensitiveLog = (obj: GetLayerVersionPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>Specify a version or alias to get the policy for that resource.</p>
   */
  Qualifier?: string;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetPolicyResponse {
  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;

  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: string;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;
}

export namespace GetProvisionedConcurrencyConfigRequest {
  export const filterSensitiveLog = (obj: GetProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export enum ProvisionedConcurrencyStatusEnum {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
}

export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;
}

export namespace GetProvisionedConcurrencyConfigResponse {
  export const filterSensitiveLog = (obj: GetProvisionedConcurrencyConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration does not exist.</p>
 */
export interface ProvisionedConcurrencyConfigNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ProvisionedConcurrencyConfigNotFoundException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace ProvisionedConcurrencyConfigNotFoundException {
  export const filterSensitiveLog = (obj: ProvisionedConcurrencyConfigNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Need additional permissions to configure VPC settings.</p>
 */
export interface EC2AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "EC2AccessDeniedException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace EC2AccessDeniedException {
  export const filterSensitiveLog = (obj: EC2AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided
 *       for the Lambda function.</p>
 */
export interface EC2ThrottledException extends __SmithyException, $MetadataBearer {
  name: "EC2ThrottledException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace EC2ThrottledException {
  export const filterSensitiveLog = (obj: EC2ThrottledException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda received an unexpected EC2 client exception while setting up for the Lambda function.</p>
 */
export interface EC2UnexpectedException extends __SmithyException, $MetadataBearer {
  name: "EC2UnexpectedException";
  $fault: "server";
  Message?: string;
  Type?: string;
  EC2ErrorCode?: string;
}

export namespace EC2UnexpectedException {
  export const filterSensitiveLog = (obj: EC2UnexpectedException): any => ({
    ...obj,
  });
}

/**
 * <p>An error occured when reading from or writing to a connected file system.</p>
 */
export interface EFSIOException extends __SmithyException, $MetadataBearer {
  name: "EFSIOException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSIOException {
  export const filterSensitiveLog = (obj: EFSIOException): any => ({
    ...obj,
  });
}

/**
 * <p>The function couldn't make a network connection to the configured file system.</p>
 */
export interface EFSMountConnectivityException extends __SmithyException, $MetadataBearer {
  name: "EFSMountConnectivityException";
  $fault: "client";
  Message?: string;
  Type?: string;
}

export namespace EFSMountConnectivityException {
  export const filterSensitiveLog = (obj: EFSMountConnectivityException): any => ({
    ...obj,
  });
}

/**
 * <p>The function couldn't mount the configured file system due to a permission or configuration issue.</p>
 */
export interface EFSMountFailureException extends __SmithyException, $MetadataBearer {
  name: "EFSMountFailureException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSMountFailureException {
  export const filterSensitiveLog = (obj: EFSMountFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The function was able to make a network connection to the configured file system, but the mount operation
 *       timed out.</p>
 */
export interface EFSMountTimeoutException extends __SmithyException, $MetadataBearer {
  name: "EFSMountTimeoutException";
  $fault: "client";
  Message?: string;
  Type?: string;
}

export namespace EFSMountTimeoutException {
  export const filterSensitiveLog = (obj: EFSMountTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda was not able to create an elastic network interface in the VPC, specified as part of Lambda
 *       function configuration, because the limit for network interfaces has been reached.</p>
 */
export interface ENILimitReachedException extends __SmithyException, $MetadataBearer {
  name: "ENILimitReachedException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace ENILimitReachedException {
  export const filterSensitiveLog = (obj: ENILimitReachedException): any => ({
    ...obj,
  });
}

/**
 * <p>The request body could not be parsed as JSON.</p>
 */
export interface InvalidRequestContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestContentException";
  $fault: "client";
  /**
   * <p>The exception message.</p>
   */
  message?: string;

  /**
   * <p>The exception type.</p>
   */
  Type?: string;
}

export namespace InvalidRequestContentException {
  export const filterSensitiveLog = (obj: InvalidRequestContentException): any => ({
    ...obj,
  });
}

/**
 * <p>The runtime or runtime version specified is not supported.</p>
 */
export interface InvalidRuntimeException extends __SmithyException, $MetadataBearer {
  name: "InvalidRuntimeException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace InvalidRuntimeException {
  export const filterSensitiveLog = (obj: InvalidRuntimeException): any => ({
    ...obj,
  });
}

/**
 * <p>The Security Group ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSecurityGroupIDException extends __SmithyException, $MetadataBearer {
  name: "InvalidSecurityGroupIDException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace InvalidSecurityGroupIDException {
  export const filterSensitiveLog = (obj: InvalidSecurityGroupIDException): any => ({
    ...obj,
  });
}

/**
 * <p>The Subnet ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSubnetIDException extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnetIDException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace InvalidSubnetIDException {
  export const filterSensitiveLog = (obj: InvalidSubnetIDException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda could not unzip the deployment package.</p>
 */
export interface InvalidZipFileException extends __SmithyException, $MetadataBearer {
  name: "InvalidZipFileException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace InvalidZipFileException {
  export const filterSensitiveLog = (obj: InvalidZipFileException): any => ({
    ...obj,
  });
}

export enum InvocationType {
  DryRun = "DryRun",
  Event = "Event",
  RequestResponse = "RequestResponse",
}

export enum LogType {
  None = "None",
  Tail = "Tail",
}

export interface InvocationRequest {
  /**
   * <p>Specify a version or alias to invoke a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>Set to <code>Tail</code> to include the execution log in the response.</p>
   */
  LogType?: LogType | string;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p>
   */
  Payload?: Uint8Array;

  /**
   * <p>Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function in the context
   *       object.</p>
   */
  ClientContext?: string;

  /**
   * <p>Choose from the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RequestResponse</code> (default) - Invoke the function synchronously. Keep the connection open until
   *           the function returns a response or times out. The API response includes the function response and additional
   *           data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Event</code> - Invoke the function asynchronously. Send events that fail multiple times to the
   *           function's dead-letter queue (if it's configured). The API response only includes a status code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DryRun</code> - Validate parameter values and verify that the user or role has permission to invoke
   *           the function.</p>
   *             </li>
   *          </ul>
   */
  InvocationType?: InvocationType | string;
}

export namespace InvocationRequest {
  export const filterSensitiveLog = (obj: InvocationRequest): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
  });
}

export interface InvocationResponse {
  /**
   * <p>The last 4 KB of the execution log, which is base64 encoded.</p>
   */
  LogResult?: string;

  /**
   * <p>If present, indicates that an error occurred during function execution. Details about the error are included
   *       in the response payload.</p>
   */
  FunctionError?: string;

  /**
   * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which
   *       version the alias resolved to.</p>
   */
  ExecutedVersion?: string;

  /**
   * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code>
   *       invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For
   *       the <code>DryRun</code> invocation type, the status code is 204.</p>
   */
  StatusCode?: number;

  /**
   * <p>The response from the function, or an error object.</p>
   */
  Payload?: Uint8Array;
}

export namespace InvocationResponse {
  export const filterSensitiveLog = (obj: InvocationResponse): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda
 *       function's KMS permissions.</p>
 */
export interface KMSAccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "KMSAccessDeniedException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace KMSAccessDeniedException {
  export const filterSensitiveLog = (obj: KMSAccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda
 *       function's KMS key settings.</p>
 */
export interface KMSDisabledException extends __SmithyException, $MetadataBearer {
  name: "KMSDisabledException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace KMSDisabledException {
  export const filterSensitiveLog = (obj: KMSDisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for
 *       Decrypt. Check the function's KMS key settings.</p>
 */
export interface KMSInvalidStateException extends __SmithyException, $MetadataBearer {
  name: "KMSInvalidStateException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace KMSInvalidStateException {
  export const filterSensitiveLog = (obj: KMSInvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's
 *       KMS key settings. </p>
 */
export interface KMSNotFoundException extends __SmithyException, $MetadataBearer {
  name: "KMSNotFoundException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace KMSNotFoundException {
  export const filterSensitiveLog = (obj: KMSNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see
 *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
 */
export interface RequestTooLargeException extends __SmithyException, $MetadataBearer {
  name: "RequestTooLargeException";
  $fault: "client";
  message?: string;
  Type?: string;
}

export namespace RequestTooLargeException {
  export const filterSensitiveLog = (obj: RequestTooLargeException): any => ({
    ...obj,
  });
}

/**
 * <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 */
export interface ResourceNotReadyException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotReadyException";
  $fault: "server";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace ResourceNotReadyException {
  export const filterSensitiveLog = (obj: ResourceNotReadyException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets
 *       has no available IP addresses.</p>
 */
export interface SubnetIPAddressLimitReachedException extends __SmithyException, $MetadataBearer {
  name: "SubnetIPAddressLimitReachedException";
  $fault: "server";
  Message?: string;
  Type?: string;
}

export namespace SubnetIPAddressLimitReachedException {
  export const filterSensitiveLog = (obj: SubnetIPAddressLimitReachedException): any => ({
    ...obj,
  });
}

/**
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 */
export interface UnsupportedMediaTypeException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedMediaTypeException";
  $fault: "client";
  message?: string;
  Type?: string;
}

export namespace UnsupportedMediaTypeException {
  export const filterSensitiveLog = (obj: UnsupportedMediaTypeException): any => ({
    ...obj,
  });
}

export interface InvokeAsyncRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p>
   */
  InvokeArgs: Readable | ReadableStream | Blob | undefined;
}

export namespace InvokeAsyncRequest {
  export const filterSensitiveLog = (obj: InvokeAsyncRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. </p>
 */
export interface InvokeAsyncResponse {
  /**
   * <p>The status code.</p>
   */
  Status?: number;
}

export namespace InvokeAsyncResponse {
  export const filterSensitiveLog = (obj: InvokeAsyncResponse): any => ({
    ...obj,
  });
}

export interface ListAliasesRequest {
  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Specify a function version to only list aliases that invoke that version.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>Limit the number of aliases returned.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace ListAliasesRequest {
  export const filterSensitiveLog = (obj: ListAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListAliasesResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of aliases.</p>
   */
  Aliases?: AliasConfiguration[];
}

export namespace ListAliasesResponse {
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListEventSourceMappingsRequest {
  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of event source mappings to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
   *             </li>
   *          </ul>
   */
  EventSourceArn?: string;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName?: string;
}

export namespace ListEventSourceMappingsRequest {
  export const filterSensitiveLog = (obj: ListEventSourceMappingsRequest): any => ({
    ...obj,
  });
}

export interface ListEventSourceMappingsResponse {
  /**
   * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of event source mappings.</p>
   */
  EventSourceMappings?: EventSourceMappingConfiguration[];
}

export namespace ListEventSourceMappingsResponse {
  export const filterSensitiveLog = (obj: ListEventSourceMappingsResponse): any => ({
    ...obj,
  });
}

export interface ListFunctionEventInvokeConfigsRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of configurations to return.</p>
   */
  MaxItems?: number;
}

export namespace ListFunctionEventInvokeConfigsRequest {
  export const filterSensitiveLog = (obj: ListFunctionEventInvokeConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionEventInvokeConfigsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of configurations.</p>
   */
  FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[];
}

export namespace ListFunctionEventInvokeConfigsResponse {
  export const filterSensitiveLog = (obj: ListFunctionEventInvokeConfigsResponse): any => ({
    ...obj,
  });
}

export enum FunctionVersion {
  ALL = "ALL",
}

export interface ListFunctionsRequest {
  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
   */
  FunctionVersion?: FunctionVersion | string;

  /**
   * <p>For Lambda@Edge functions, the AWS Region of the master function. For example, <code>us-east-1</code> filters
   *       the list of functions to only include Lambda@Edge functions replicated from a master function in US East (N.
   *       Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.</p>
   */
  MasterRegion?: string;

  /**
   * <p>The maximum number of functions to return.</p>
   */
  MaxItems?: number;
}

export namespace ListFunctionsRequest {
  export const filterSensitiveLog = (obj: ListFunctionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Lambda functions.</p>
 */
export interface ListFunctionsResponse {
  /**
   * <p>A list of Lambda functions.</p>
   */
  Functions?: FunctionConfiguration[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;
}

export namespace ListFunctionsResponse {
  export const filterSensitiveLog = (obj: ListFunctionsResponse): any => ({
    ...obj,
    ...(obj.Functions && { Functions: obj.Functions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
  });
}

export interface ListLayersRequest {
  /**
   * <p>The maximum number of layers to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
   */
  CompatibleRuntime?: Runtime | string;
}

export namespace ListLayersRequest {
  export const filterSensitiveLog = (obj: ListLayersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionsListItem {
  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The layer's open-source license.</p>
   */
  LicenseInfo?: string;
}

export namespace LayerVersionsListItem {
  export const filterSensitiveLog = (obj: LayerVersionsListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>.</p>
 */
export interface LayersListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The newest version of the layer.</p>
   */
  LatestMatchingVersion?: LayerVersionsListItem;

  /**
   * <p>The name of the layer.</p>
   */
  LayerName?: string;
}

export namespace LayersListItem {
  export const filterSensitiveLog = (obj: LayersListItem): any => ({
    ...obj,
  });
}

export interface ListLayersResponse {
  /**
   * <p>A pagination token returned when the response doesn't contain all layers.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of function layers.</p>
   */
  Layers?: LayersListItem[];
}

export namespace ListLayersResponse {
  export const filterSensitiveLog = (obj: ListLayersResponse): any => ({
    ...obj,
  });
}

export interface ListLayerVersionsRequest {
  /**
   * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
   */
  CompatibleRuntime?: Runtime | string;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of versions to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace ListLayerVersionsRequest {
  export const filterSensitiveLog = (obj: ListLayerVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListLayerVersionsResponse {
  /**
   * <p>A list of versions.</p>
   */
  LayerVersions?: LayerVersionsListItem[];

  /**
   * <p>A pagination token returned when the response doesn't contain all versions.</p>
   */
  NextMarker?: string;
}

export namespace ListLayerVersionsResponse {
  export const filterSensitiveLog = (obj: ListLayerVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListProvisionedConcurrencyConfigsRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a number to limit the number of configurations returned.</p>
   */
  MaxItems?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;
}

export namespace ListProvisionedConcurrencyConfigsRequest {
  export const filterSensitiveLog = (obj: ListProvisionedConcurrencyConfigsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the provisioned concurrency configuration for a function alias or version.</p>
 */
export interface ProvisionedConcurrencyConfigListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
   */
  FunctionArn?: string;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;

  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;
}

export namespace ProvisionedConcurrencyConfigListItem {
  export const filterSensitiveLog = (obj: ProvisionedConcurrencyConfigListItem): any => ({
    ...obj,
  });
}

export interface ListProvisionedConcurrencyConfigsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of provisioned concurrency configurations.</p>
   */
  ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
}

export namespace ListProvisionedConcurrencyConfigsResponse {
  export const filterSensitiveLog = (obj: ListProvisionedConcurrencyConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>The function's tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface ListVersionsByFunctionRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The maximum number of versions to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;
}

export namespace ListVersionsByFunctionRequest {
  export const filterSensitiveLog = (obj: ListVersionsByFunctionRequest): any => ({
    ...obj,
  });
}

export interface ListVersionsByFunctionResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of Lambda function versions.</p>
   */
  Versions?: FunctionConfiguration[];
}

export namespace ListVersionsByFunctionResponse {
  export const filterSensitiveLog = (obj: ListVersionsByFunctionResponse): any => ({
    ...obj,
    ...(obj.Versions && { Versions: obj.Versions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. You can specify either an Amazon S3 location,
 *       or upload a layer archive directly.</p>
 */
export interface LayerVersionContentInput {
  /**
   * <p>The Amazon S3 key of the layer archive.</p>
   */
  S3Key?: string;

  /**
   * <p>The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for
   *       you.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>The Amazon S3 bucket of the layer archive.</p>
   */
  S3Bucket?: string;

  /**
   * <p>For versioned objects, the version of the layer archive object to use.</p>
   */
  S3ObjectVersion?: string;
}

export namespace LayerVersionContentInput {
  export const filterSensitiveLog = (obj: LayerVersionContentInput): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

export interface PublishLayerVersionRequest {
  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The layer's software license. It can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example,
   *           <code>MIT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The URL of a license hosted on the internet. For example,
   *           <code>https://opensource.org/licenses/MIT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The full text of the license.</p>
   *             </li>
   *          </ul>
   */
  LicenseInfo?: string;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function
   *         runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The function layer archive.</p>
   */
  Content: LayerVersionContentInput | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace PublishLayerVersionRequest {
  export const filterSensitiveLog = (obj: PublishLayerVersionRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: LayerVersionContentInput.filterSensitiveLog(obj.Content) }),
  });
}

export interface PublishLayerVersionResponse {
  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The layer's software license.</p>
   */
  LicenseInfo?: string;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>Details about the layer version.</p>
   */
  Content?: LayerVersionContentOutput;

  /**
   * <p>The ARN of the layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  CreatedDate?: string;
}

export namespace PublishLayerVersionResponse {
  export const filterSensitiveLog = (obj: PublishLayerVersionResponse): any => ({
    ...obj,
  });
}

export interface PublishVersionRequest {
  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid
   *       publishing a version if the function configuration has changed since you last updated it.</p>
   */
  RevisionId?: string;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Only publish a version if the hash value matches the value that's specified. Use this option to avoid
   *       publishing a version if the function code has changed since you last updated it. You can get the hash for the
   *       version that you uploaded from the output of <a>UpdateFunctionCode</a>.</p>
   */
  CodeSha256?: string;

  /**
   * <p>A description for the version to override the description in the function configuration.</p>
   */
  Description?: string;
}

export namespace PublishVersionRequest {
  export const filterSensitiveLog = (obj: PublishVersionRequest): any => ({
    ...obj,
  });
}

export interface PutFunctionConcurrencyRequest {
  /**
   * <p>The number of simultaneous executions to reserve for the function.</p>
   */
  ReservedConcurrentExecutions: number | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace PutFunctionConcurrencyRequest {
  export const filterSensitiveLog = (obj: PutFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface PutFunctionEventInvokeConfigRequest {
  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace PutFunctionEventInvokeConfigRequest {
  export const filterSensitiveLog = (obj: PutFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * <p>The amount of provisioned concurrency to allocate for the version or alias.</p>
   */
  ProvisionedConcurrentExecutions: number | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace PutProvisionedConcurrencyConfigRequest {
  export const filterSensitiveLog = (obj: PutProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;
}

export namespace PutProvisionedConcurrencyConfigResponse {
  export const filterSensitiveLog = (obj: PutProvisionedConcurrencyConfigResponse): any => ({
    ...obj,
  });
}

export interface RemoveLayerVersionPermissionRequest {
  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>The identifier that was specified when the statement was added.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;
}

export namespace RemoveLayerVersionPermissionRequest {
  export const filterSensitiveLog = (obj: RemoveLayerVersionPermissionRequest): any => ({
    ...obj,
  });
}

export interface RemovePermissionRequest {
  /**
   * <p>Specify a version or alias to remove permissions from a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Statement ID of the permission to remove.</p>
   */
  StatementId: string | undefined;
}

export namespace RemovePermissionRequest {
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>A list of tags to apply to the function.</p>
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>A list of tag keys to remove from the function.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAliasRequest {
  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;

  /**
   * <p>Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying
   *       an alias that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;
}

export namespace UpdateAliasRequest {
  export const filterSensitiveLog = (obj: UpdateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventSourceMappingRequest {
  /**
   * <p>(Streams) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>(Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>(Streams) Discard records older than the specified age. The default value is infinite (-1).</p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - Default 10. Max 10.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *          </ul>
   */
  BatchSize?: number;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName?: string;

  /**
   * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Streams) The number of batches to process from each shard concurrently.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>(Streams) The maximum amount of time to gather records before invoking the function, in seconds.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;

  /**
   * <p>(Streams) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
   */
  MaximumRetryAttempts?: number;
}

export namespace UpdateEventSourceMappingRequest {
  export const filterSensitiveLog = (obj: UpdateEventSourceMappingRequest): any => ({
    ...obj,
  });
}

export interface UpdateFunctionCodeRequest {
  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       function that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as
   *       calling <a>PublishVersion</a> separately.</p>
   */
  Publish?: boolean;

  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>Set to true to validate the request parameters and access permissions without modifying the function
   *       code.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for
   *       you.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace UpdateFunctionCodeRequest {
  export const filterSensitiveLog = (obj: UpdateFunctionCodeRequest): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

export interface UpdateFunctionConfigurationRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
   *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
   *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A description of the function.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
   */
  Runtime?: Runtime | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment
   *       variables. If it's not provided, AWS Lambda uses a default service key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   */
  Environment?: Environment;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with AWS
   *       X-Ray.</p>
   */
  TracingConfig?: TracingConfig;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
   *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   */
  Layers?: string[];

  /**
   * <p>The amount of memory that your function has access to. Increasing the function's memory also increases its CPU
   *       allocation. The default value is 128 MB. The value must be a multiple of 64 MB.</p>
   */
  MemorySize?: number;

  /**
   * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
   *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
   *       maximum allowed value is 900 seconds.</p>
   */
  Timeout?: number;

  /**
   * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
   *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
   *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
   */
  Handler?: string;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       function that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace UpdateFunctionConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateFunctionConfigurationRequest): any => ({
    ...obj,
    ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
  });
}

export interface UpdateFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace UpdateFunctionEventInvokeConfigRequest {
  export const filterSensitiveLog = (obj: UpdateFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}
