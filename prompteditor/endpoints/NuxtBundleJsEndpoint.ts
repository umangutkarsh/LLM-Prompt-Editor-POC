import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ApiEndpoint, IApiEndpointInfo, IApiRequest, IApiResponse } from '@rocket.chat/apps-engine/definition/api';
import { compressedNuxtString } from '../assets/compressedNuxt';

export class NuxtBundleJsEndpoint extends ApiEndpoint {
   public path = "bundle.js";

   public async get(
      request: IApiRequest,
        endpoint: IApiEndpointInfo,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence,
   ): Promise<IApiResponse> {
      const content = Buffer.from(compressedNuxtString, "base64");
      return {
        status: 200,
        headers: {
            "Content-Type": "text/javascript",
            "Content-Encoding": "br",
        },
        content,
      }
   }
}
