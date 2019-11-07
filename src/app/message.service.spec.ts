import { MessageService } from './message.service';
describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    });

    it('should have no messages to start', () => {
        expect(service.messages.length).toBe(0);
    });

    it('should add a message when add is called', () => {
        service.add('First Message');

        expect(service.messages.length).toBe(1);
    });

    it('should clear a message when clear is called', () => {
        service.add('First Message');

        service.clear();

        expect(service.messages.length).toBe(0);
    });
});
