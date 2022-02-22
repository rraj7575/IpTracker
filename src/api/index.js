import axios from 'axios';
const baseUrl = 'https://ipapi.co'

class V1 {
    constructor() {
        this.baseURL = baseUrl
        this._noAuth = null;
    }

    get noAuth() {
        this._noAuth = axios.create({
            baseURL: this.baseURL,
            headers: {'x-wiz-device-type': 'WEB'}
        });

        return this._noAuth;
    }
    static parse(axiosResponse) {
        try {
            const { data, status, statusText } = axiosResponse;
            switch (status) {
                case 201:
                case 200:
                case 204:
                    return {
                        data,
                        status,
                        error: null
                    };
                case 401:
                case 400:
                    return {
                        data: null,
                        status: status,
                        error: data
                    };
                case 404:
                    return {
                        data: null,
                        status: status,
                        error: statusText
                    };
                default:
                    return {
                        data: null,
                        status: status,
                        error: statusText
                    };
            }
        } catch (e) {
            return {
                data: null,
                status: null,
                error: 'Oops, something went wrong, please try again'
            };
        }
    }

    parseAndAutoHandleIssues (axiosResponse) {
        let {
            data, thunk, errorCode, error
        } = this.parse(axiosResponse)
        return data
    }
}

export const apiv1 = new V1();

