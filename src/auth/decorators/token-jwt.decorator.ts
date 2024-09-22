import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';

export const TokenJWT = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {

        const request = ctx.switchToHttp().getRequest();

        if (!request.token) {
            throw new InternalServerErrorException('Token not found :: TokenJWT decorator');
        }

        return request.token;
    },
);