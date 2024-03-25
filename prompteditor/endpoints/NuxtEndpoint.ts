import { ApiEndpoint, IApiResponse } from '@rocket.chat/apps-engine/definition/api';
import { compressedNuxtContent } from '../assets/compressedNuxtContent';

export class NuxtEndpoint extends ApiEndpoint {
    public path = "nuxt";

    public async get(): Promise<IApiResponse> {
        const content = compressedNuxtContent;
        return {
            status: 200,
            headers: {
                "Content-Type": "text/html",
                "Content-Security-Policy":
                    "default-src 'self' http: https: data: blob: 'unsafe-inline' 'unsafe-eval'",
            },
            content,
        };
    }
}
