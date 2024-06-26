import { ButtonStyle } from '@rocket.chat/apps-engine/definition/uikit';
import { UtilityEnum } from '../enums/UtilityEnum';
import { getActionsBlock, getButton, getMarkdownBlock } from '../helpers/blockBuilder';
import { Block, SectionBlock } from '@rocket.chat/ui-kit';

export async function buildHeaderBlock(
    username: string,
    promptURL: string,
    nuxtURL: string,
    appId: string,
): Promise<Array<Block>> {
    const block: Block[] = [];
    const promptButton = getButton(
        "Prompt",
        UtilityEnum.PREVIEW_BLOCK_ID,
        UtilityEnum.PROMPT_BUTTON_ACTION_ID,
        appId,
        `Prompt ${promptURL}`,
        ButtonStyle.PRIMARY,
        promptURL,
    );

    const nuxtButton = getButton(
        "Nuxt App",
        UtilityEnum.PREVIEW_BLOCK_ID,
        UtilityEnum.NUXT_BUTTON_ACTION_ID,
        appId,
        `Nuxt ${nuxtURL}`,
        ButtonStyle.PRIMARY,
        nuxtURL,
    );

    let markdownBlock: SectionBlock;
        markdownBlock = getMarkdownBlock(`Prompt created by *\`@${username}\`*`);

    const actionBlock = getActionsBlock(UtilityEnum.PREVIEW_BLOCK_ID, [
        promptButton,
        nuxtButton,
    ]);
    block.push(markdownBlock);
    block.push(actionBlock);
    return block;
}
