import { MessageService } from "./message.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

describe('MessageService', () => {
let service: MessageService;

beforeEach(() => {
  service = new MessageService();
});

it('should have no messages to start', () => {
expect(service.messages.length).toBe(0);
});
it('should have add a message when add is called', () => {
  service.add('Test Mesaage');
  expect(service.messages.length).toBe(1);
  });

  it('should have clear a message when clear is called', () => {
    service.clear();
    expect(service.messages.length).toBe(0);
    });
});
