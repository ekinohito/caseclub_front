/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventRead } from '../models/EventRead';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * Get Events
     * @param since
     * @param until
     * @returns EventRead Successful Response
     * @throws ApiError
     */
    public static getEventsEventGet(
        since: string,
        until: string,
    ): CancelablePromise<Array<EventRead>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/',
            query: {
                'since': since,
                'until': until,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Event
     * @param id
     * @returns EventRead Successful Response
     * @throws ApiError
     */
    public static getEventEventIdGet(
        id: number,
    ): CancelablePromise<EventRead> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/event/{id}/',
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
     * Attend Event
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static attendEventEventIdAttendPost(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/{id}/attend',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Attend Event
     * @param id
     * @returns any Successful Response
     * @throws ApiError
     */
    public static attendEventEventIdStopAttendPost(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/event/{id}/stop_attend',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
