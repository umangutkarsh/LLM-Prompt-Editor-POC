import { ISlashCommand, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { PromptEditorApp } from '../PromptEditorApp';
import { IRead, IModify, IHttp, IPersistence } from '@rocket.chat/apps-engine/definition/accessors';
import { IUser } from '@rocket.chat/apps-engine/definition/users';
import { sendNotification } from '../lib/sendNotification';
import { sendMessage } from '../lib/sendMessage';
import { getChatButton } from '../lib/getChatButton';

export class PromptCommand implements ISlashCommand {
    public command = "prompt";
    public i18nParamsExample = "";
    public i18nDescription = "This is prompt command description";
    public providesPreview = false;
    constructor(private readonly app: PromptEditorApp) {}

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const [subCommands] = context.getArguments();
        const room = context.getRoom();
        const sender = context.getSender();
        const appUser = (await read.getUserReader().getAppUser()) as IUser;


        this.app.getLogger().info(`Slash command ${this.command} initiated. Trigger id: ${context.getTriggerId()}, with arguments ${context.getArguments()}`)
        // this.app.getLogger().info(`Modify: `, modify);
        this.app.getLogger().info(`Room: `, room);
        this.app.getLogger().info(`Sender: `, sender);

        if (!subCommands) {
            var message = `No subcommands!\n`
            await sendNotification(modify, room, sender, message);
        } else {
            switch (subCommands) {
                case "new":
                    await getChatButton(this.app, context, read, modify, http, persis);
                    break;

                default:
                    message = `Invalid sub-command! \n`
                    await sendNotification(modify, room, sender, message);
                    break;
            }
        }
    }
}
