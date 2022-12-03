import dotenv
import json
import asyncio
token = dotenv.get_key(".env","TELEGRAM_TOKEN").split(":")

from telethon import TelegramClient, events, sync

api_id = int(token[0])
api_hash = token[1]
client = TelegramClient("bot", api_id, api_hash)

async def main():
    me = await client.get_me()
    print(me.stringify())


# @client.on(events.NewMessage())
# async def handler(event):
#     await event.respond('Hey!')
#     print(event.message)

with client:
    client.loop_until_complete(main())


#client.log_out()