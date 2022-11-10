/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PostCreate } from '../models/PostCreate';
import type { PostEdit } from '../models/PostEdit';
import type { PostRead } from '../models/PostRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostService {

    /**
     * Get Posts
     * @param offset
     * @param limit
     * @returns PostRead Successful Response
     * @throws ApiError
     */
    public static getPostsPostGet(
        offset?: number,
        limit: number = 20,
    ): CancelablePromise<Array<PostRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/',
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
     * Create Post
     * @param requestBody
     * @returns PostRead Successful Response
     * @throws ApiError
     */
    public static createPostPostPost(
        requestBody: PostCreate,
    ): CancelablePromise<PostRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Post
     * @param id
     * @returns PostRead Successful Response
     * @throws ApiError
     */
    public static getPostPostIdGet(
        id: number,
    ): CancelablePromise<PostRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/post/{id}/',
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
     * Delete Post
     * @param id
     * @returns PostRead Successful Response
     * @throws ApiError
     */
    public static deletePostPostIdDelete(
        id: number,
    ): CancelablePromise<PostRead> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/post/{id}/',
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
     * Edit Post
     * @param id
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editPostPostIdPatch(
        id: number,
        requestBody: PostEdit,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/post/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Like Post
     * @param id
     * @param remove
     * @returns number Successful Response
     * @throws ApiError
     */
    public static likePostPostIdLikePost(
        id: number,
        remove: boolean = false,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/post/{id}/like',
            path: {
                'id': id,
            },
            query: {
                'remove': remove,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
