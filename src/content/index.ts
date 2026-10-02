import type { PingMessage, PongResponse } from '../shared/types/messages.ts';

console.log('[Marginalia Content] Injected into:', window.location.href);

const ping: PingMessage = { type: 'PING' };
chrome.runtime.sendMessage(ping, (response: PongResponse) => {
  console.log('[Marginalia Content] Background responded:', response);
});