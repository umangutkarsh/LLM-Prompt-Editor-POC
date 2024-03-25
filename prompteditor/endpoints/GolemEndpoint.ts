import { ApiEndpoint, IApiResponse } from '@rocket.chat/apps-engine/definition/api';
import { compressedGolemContent } from '../assets/compressedGolemContent';

export class GolemEndpoint extends ApiEndpoint {
    public path = "golem";

    public async get(): Promise<IApiResponse> {
        const content = compressedGolemContent;
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
