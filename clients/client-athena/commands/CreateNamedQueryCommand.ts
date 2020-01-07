import {
  AthenaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AthenaClient";
import { CreateNamedQueryInput, CreateNamedQueryOutput } from "../models/index";
import {
  deserializeAws_json1_1CreateNamedQueryCommand,
  serializeAws_json1_1CreateNamedQueryCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreateNamedQueryCommandInput = CreateNamedQueryInput;
export type CreateNamedQueryCommandOutput = CreateNamedQueryOutput;

export class CreateNamedQueryCommand extends $Command<
  CreateNamedQueryCommandInput,
  CreateNamedQueryCommandOutput,
  AthenaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNamedQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateNamedQueryCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNamedQueryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateNamedQueryCommandOutput> {
    return deserializeAws_json1_1CreateNamedQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}