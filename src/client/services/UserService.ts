/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreate } from '../models/UserCreate';
import type { UserRead } from '../models/UserRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Get Users
     * @param offset
     * @param limit
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static getUsersUserGet(
        offset?: number,
        limit: number = 20,
    ): CancelablePromise<Array<UserRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create User
     * @param requestBody
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static createUserUserPost(
        requestBody: UserCreate,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `User exists`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Current
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static currentUserCurrentGet(): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/current',
        });
    }

    /**
     * Get Users
     * @param id
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static getUsersUserIdGet(
        id: number,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete User
     * @param id
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static deleteUserUserIdDelete(
        id: number,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
