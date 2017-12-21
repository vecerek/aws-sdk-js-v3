import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {UpdatePullRequestTitle} from '../model/UpdatePullRequestTitle';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdatePullRequestTitleInput} from '../types/UpdatePullRequestTitleInput';
import {UpdatePullRequestTitleOutput} from '../types/UpdatePullRequestTitleOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdatePullRequestTitleCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdatePullRequestTitleInput,
    OutputTypesUnion,
    UpdatePullRequestTitleOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput, _stream.Readable>();

    constructor(readonly input: UpdatePullRequestTitleInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdatePullRequestTitle
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_node.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}