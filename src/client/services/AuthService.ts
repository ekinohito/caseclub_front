/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_auth_token_post } from '../models/Body_login_auth_token_post';
import type { Token } from '../models/Token';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginAuthTokenPost(
        formData: Body_login_auth_token_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
