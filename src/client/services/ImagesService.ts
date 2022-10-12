/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_upload_image_images__post } from '../models/Body_upload_image_images__post';
import type { ImageRead } from '../models/ImageRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ImagesService {

    /**
     * Upload Image
     * @param formData
     * @returns ImageRead Successful Response
     * @throws ApiError
     */
    public static uploadImageImagesPost(
        formData: Body_upload_image_images__post,
    ): CancelablePromise<ImageRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/images/',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Image
     * @param id
     * @returns any Returns an image.
     * @throws ApiError
     */
    public static getImageImagesIdGet(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/images/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
