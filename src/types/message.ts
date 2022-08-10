import { IdItem, Reference } from '.';
export declare type MessageBase = {
    title: string;
    text: string;
};
export declare type MessageIndex = Reference & MessageBase;
export declare function getMessageIndex(id: string, idea: Message): MessageIndex;

export declare type Message = IdItem & MessageBase & {
    text: string;
};
