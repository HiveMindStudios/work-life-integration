import dotenv
import os
from slack_sdk.web.async_client import AsyncWebClient
import asyncio

token = dotenv.get_key(".env", "SLACK_TOKEN")
client = AsyncWebClient(token)
async def main():
    convId = await client.conversations_list()
    conv = None
    convHistory = []
    channel_name = "webapp"
    for result in convId:
        if conv is not None:
            break
        for channel in result["channels"]:
            if channel["name"] == channel_name:
                conv = channel["id"]
    message = await client.conversations_history(channel=conv)
    convHistory = message["messages"]
    return
asyncio.run(main())