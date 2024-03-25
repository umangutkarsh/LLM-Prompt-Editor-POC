import { ButtonStyle } from '@rocket.chat/apps-engine/definition/uikit';
import { ActionsBlock, ButtonElement, SectionBlock, StaticSelectElement } from '@rocket.chat/ui-kit';

export function getButton(
    labelText: string,
    blockId: string,
    actionId: string,
    appId: string,
    value?: string,
    style?: ButtonStyle.PRIMARY | ButtonStyle.DANGER,
    url?: string,
) {
    const button: ButtonElement = {
        type: "button",
        text: {
            type: "plain_text",
            text: labelText,
            emoji: true,
        },
        appId,
        blockId,
        actionId,
        url,
        value,
        style,
        secondary: false,
    };
    return button;
}

export function getMarkdownBlock(
    labelText: string,
) {
    const block: SectionBlock = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: labelText,
        },
    };
    return block;
}

export function getActionsBlock(
    blockId: string,
    elements: Array<ButtonElement> | Array<StaticSelectElement>,
) {
    const block: ActionsBlock = {
        type: "actions",
        blockId,
        elements,
    };
    return block;
}
