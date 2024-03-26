import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { ApiSecurity, ApiVisibility } from '@rocket.chat/apps-engine/definition/api';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import {GolemBundleJsEndpoint} from './endpoints/GolemBundleJsEndpoint';
import { GolemEndpoint } from './endpoints/GolemEndpoint';
import { PromptCommand } from './commands/PromptCommand';
import { NuxtEndpoint } from './endpoints/NuxtEndpoint';
import { NuxtBundleJsEndpoint } from './endpoints/NuxtBundleJsEndpoint';

export class PromptEditorApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async initialize(configurationExtend: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {

        await configurationExtend.api.provideApi({
            visibility: ApiVisibility.PUBLIC,
            security: ApiSecurity.UNSECURE,
            endpoints: [
                new GolemEndpoint(this),
                new GolemBundleJsEndpoint(this),
                new NuxtEndpoint(this),
                new NuxtBundleJsEndpoint(this),
            ],
        });

        await configurationExtend.slashCommands.provideSlashCommand(new PromptCommand(this));
    }
}
