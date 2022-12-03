import dotenv
import os
from slack_sdk.web.async_client import AsyncWebClient
import asyncio
import requests

lastts = 0
token = dotenv.get_key(".env", "SLACK_TOKEN")
client = AsyncWebClient(token)

async def main():
    convId = await client.conversations_list()
    conv = None
    convHistory = []
    channel_name = "webapp"
    for channel in convId["channels"]:
        if channel["name"] == channel_name:
            conv = channel["id"]
    await client.conversations_join(channel=conv)
    message = await client.conversations_history(channel=conv)
    convHistory = message["messages"]
    for m in convHistory:
        if lastts >= float(m["ts"]):
            break
        user = m["user"]
        data = {
            "from": user,
            "content": m["text"],
            "timestamp": m["ts"],
            "platform": "Slack"
        }
        requests.post('http://localhost:9999/loadMessages', {"data":data}, timeout=5)
        asyncio.sleep(600)
loop = asyncio.new_event_loop()
loop.create_task(main())
loop.run_forever()
# client.apps_connections_open(dotenv.get_key(".env","SLACK_APP_TOKEN"))