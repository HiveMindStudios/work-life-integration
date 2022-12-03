import dotenv
import json

token = dotenv.get_key(".env","TELEGRAM_TOKEN").split(":")

from telethon import TelegramClient, events, sync

api_id = token[0]
api_hash = token[1]
client = TelegramClient(None, api_id, api_hash)
client.start()

print(client.get_me().stringify())


@client.on(events.NewMessage())
async def handler(event):
    await event.respond('Hey!')
    print(event.message)




client.log_out()