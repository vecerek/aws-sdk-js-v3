import {
  AppMeshClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppMeshClient";
import {
  CreateVirtualServiceInput,
  CreateVirtualServiceOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1CreateVirtualServiceCommand,
  serializeAws_restJson1_1CreateVirtualServiceCommand
} from "../protocols/Aws_restJson1_1";
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

export type CreateVirtualServiceCommandInput = CreateVirtualServiceInput;
export type CreateVirtualServiceCommandOutput = CreateVirtualServiceOutput;

export class CreateVirtualServiceCommand extends $Command<
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateVirtualServiceCommandInput,
    CreateVirtualServiceCommandOutput
  > {
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
    input: CreateVirtualServiceCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1CreateVirtualServiceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateVirtualServiceCommandOutput> {
    return deserializeAws_restJson1_1CreateVirtualServiceCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
