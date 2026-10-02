import type { PingMessage, PongResponse } from '../shared/types/messages';

console.log('[Marginalia Background] Service Worker initialized');

chrome.runtime.onInstalled.addListener(() => {
  console.log('[Marginalia Background] Extension installed');
});

// Суворо типізований listener
chrome.runtime.onMessage.addListener(
  (
    message: PingMessage,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response: PongResponse) => void
  ) => {
    if (message.type === 'PING') {
      sendResponse({ status: 'PONG', timestamp: Date.now() });
    }
    return true; // Залишає канал відкритим для асинхронної відповіді
  }
);