import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DetectProtectiveEquipmentRequest, DetectProtectiveEquipmentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DetectProtectiveEquipmentCommand,
  serializeAws_json1_1DetectProtectiveEquipmentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DetectProtectiveEquipmentCommandInput = DetectProtectiveEquipmentRequest;
export type DetectProtectiveEquipmentCommandOutput = DetectProtectiveEquipmentResponse & __MetadataBearer;

export class DetectProtectiveEquipmentCommand extends $Command<
  DetectProtectiveEquipmentCommandInput,
  DetectProtectiveEquipmentCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectProtectiveEquipmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectProtectiveEquipmentCommandInput, DetectProtectiveEquipmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectProtectiveEquipmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectProtectiveEquipmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectProtectiveEquipmentResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectProtectiveEquipmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectProtectiveEquipmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetectProtectiveEquipmentCommandOutput> {
    return deserializeAws_json1_1DetectProtectiveEquipmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
