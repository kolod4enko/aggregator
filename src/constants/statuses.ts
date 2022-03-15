import { HttpStatus } from '@nestjs/common';

import { ErrorResponse } from '@helpers/main';

export const STATUS = {
  200: { status: HttpStatus.OK, description: 'Request successfully processed' },
  201: {
    status: HttpStatus.CREATED,
    description:
      'The request was successfully executed and as a result, a resource was created/updated',
  },
  400: {
    status: HttpStatus.BAD_REQUEST,
    description:
      'This response means that the server does not understand the request due to incorrect syntax',
    type: ErrorResponse,
  },
  401: {
    status: HttpStatus.FORBIDDEN,
    description: 'Authentication is required to receive the requested response',
    type: ErrorResponse,
  },
  403: {
    status: HttpStatus.FORBIDDEN,
    description:
      'The client does not have access rights to the content, so the server refuses to give a proper response',
    type: ErrorResponse,
  },
  500: {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'The server is faced with a situation that it does not know how to handle',
    type: ErrorResponse,
  },
};
