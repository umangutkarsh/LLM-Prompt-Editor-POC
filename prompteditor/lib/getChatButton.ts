import { SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { PromptEditorApp } from '../PromptEditorApp';
import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { randomId } from './randomId';
import { IUser } from '@rocket.chat/apps-engine/definition/users';
import { sendMessage } from './sendMessage';
import { buildHeaderBlock } from '../blocks/UtilityBlock';

export async function getChatButton(
    app: PromptEditorApp,
    context: SlashCommandContext,
    read: IRead,
    modify: IModify,
    http: IHttp,
    persistence: IPersistence,
) {
    const endpoints = app.getAccessors().providedApiEndpoints;
    console.log('Endpoints: ', endpoints);
    console.log('Endpoints1: ', endpoints[0]);
    console.log('Endpoints2: ', endpoints[2]);


    const PromptEndpoint = endpoints[0];
    const NuxtEndpoint = endpoints[2];
    const appId = app.getID();

    const randomMessageId = randomId();
    const promptURL = `${PromptEndpoint.computedPath}?id=${randomMessageId}`;
    const nuxtURL = `${NuxtEndpoint.computedPath}?id=${randomMessageId}`;
    const appUser = (await read.getUserReader().getAppUser()) as IUser;
    const sender = context.getSender();
    const room = context.getRoom();
    const params = context.getArguments();
    const headerBlock = await buildHeaderBlock(
        sender.username,
        promptURL,
        nuxtURL,
        appId,
    );
    const messageId = await sendMessage(
            modify,
            room,
            appUser,
            `Message Button created by @${sender.username}`,
            headerBlock,
        );

    // let messageStorage = new MessagePersistence(persistence, read.getPersistenceReader());
    // const messageAdded = await messageStorage.persist(room, messageId);
    // if (messageAdded) {
    //     console.log('Message Saved to Persistence storage');
    // }

    // let data = await messageStorage.findAll();
    // if (data) {
    //     console.log('Data from storage: ', data);
    //     app.getLogger().info('Data from storage: ', data);
    // }

    console.log('MesssageId: ', messageId);

}
