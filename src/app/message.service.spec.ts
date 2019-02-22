import { MessageService } from "./message.service";

describe('MessageService',()=>{

    let messageService:MessageService;

    beforeEach(()=>{
        messageService = new MessageService();

    })

    it('should be empty at the start',()=>{

        expect(messageService.messages.length).toBe(0);

    })

});