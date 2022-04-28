import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageDTO, MessageTypeEnum } from '../_models/messages';
import { Pagination } from '../_models/pagination';
import { MessageService } from '../_services/message.service';
import { SignalrService } from '../_services/signalr/signalr.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

//   public messageTypeEnumRef: typeof MessageTypeEnum;
//   public chatMessages: MessageDTO[];
//   //public sendMessageIcon: IconDefinition;
//   //public leaveChatIcon: IconDefinition;
//   public liveChatOn: boolean;

//   @ViewChild('messagesContainer')
//   private _messagesContainer: ElementRef;
//   private _liveChatService: LiveChatService;
//   private _router: Router;
//   private _activatedRoute: ActivatedRoute;
//   messages: Message[]=[];
// pagination: Pagination;
// container= 'Unread';
// pageNumber=1;
// pageSize=5;
// loading=false;


//   constructor(private messageService:MessageService,private signalrService: SignalrService) {
//     this.chatMessages = [];
//   this.messageTypeEnumRef = MessageTypeEnum;
//   this._activatedRoute = route;
//   this._liveChatService = liveChatService;
//   this._router = router;
//   this.liveChatOn = false;
//   this.sendMessageIcon = faArrowAltCircleRight;
//   this.leaveChatIcon = faSignOutAlt;
// }

// public ngAfterViewChecked(): void {
//   if (this._messagesContainer && this.chatMessages.length > 0){
//       this.scrollPageToBottom()
//   }
// }

public ngOnInit(): void {
  // this._activatedRoute.queryParams.subscribe((params: Params) => {
  //     const userName = params['userName'];
  //     this._liveChatService.initializeNewUserConnectionAsync(userName)
  //         .then(() => {
  //             this.liveChatOn = true;
  //         });
  // });

  // this._liveChatService.newMessageReceivedEvent.subscribe((newMessage: MessageDTO) => {
  //     this.chatMessages.push(newMessage);
  // });
}

// public sendNewMessage(messageInput: HTMLInputElement): void {
//   const messageContent = messageInput.value;
//   const currentUserName = this._liveChatService.CurrentUserName;
//   const newMessage = new MessageDTO(currentUserName, messageContent, MessageTypeEnum.CurrentUserMessage);
//   this.chatMessages.push(newMessage);
//   this._liveChatService.sendNewMessage(messageContent);
//   messageInput.value = '';
// }

// public leaveChatAsync(): void {
//   this._liveChatService.leaveChatAsync()
//   .then(() => {
//       this.liveChatOn = false;
//       this._router.navigate(['']);
//   });
// }

// private scrollPageToBottom(): void {
//   this._messagesContainer.nativeElement.scrollTop =
//   this._messagesContainer.nativeElement.scrollHeight;
// }
}
