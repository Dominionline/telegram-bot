const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// ID della chat dove inviare i messaggi
const chatId = process.env.TELEGRAM_CHAT_ID;

// Comandi e messaggi di risposta
const responses = {
    '/ca': 'Ecco il contratto del token: [Inserisci il link del contratto qui]',
    '/presale': 'La presale è spiegata in dettaglio qui: [Inserisci la spiegazione della presale qui]',
    '/info': 'Ecco i link utili:\n- Website: [Inserisci il link del sito qui]\n- Social: [Inserisci i link dei social qui]'
};

// Gestisci il comando /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Ciao! Di cosa hai bisogno?\n\nComandi disponibili:\n/ca - Contratto del token\n/presale - Informazioni sulla presale\n/info - Link utili e social");
});

// Gestisci il comando /ca
bot.onText(/\/ca/, (msg) => {
    bot.sendMessage(msg.chat.id, responses['/ca']);
});

// Gestisci il comando /presale
bot.onText(/\/presale/, (msg) => {
    bot.sendMessage(msg.chat.id, responses['/presale']);
});

// Gestisci il comando /info
bot.onText(/\/info/, (msg) => {
    bot.sendMessage(msg.chat.id, responses['/info']);
});

// Aggiungi un listener per errori
bot.on("polling_error", console.error);
