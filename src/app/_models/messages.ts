export class MessageDTO{
    id:string;
    senderId:string;
    senderUsername:string;
    senderPhotoUrl:string;
    recipientId:string;
    recipientUsername:string;
    recipientPhotoUrl:string;
    content:string;
    dateRead:string;
    messageSent:string;
    type:MessageTypeEnum;

    constructor(userName: string, content: string, type: MessageTypeEnum) {
        this.senderUsername = userName;
        this.content = content;
        this.type = type;
    }
}

export enum MessageTypeEnum {
    CurrentUserMessage  = 1,
    OtherUser = 2,
    ChatActions = 3
}