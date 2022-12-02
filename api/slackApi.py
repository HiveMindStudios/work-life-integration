import dotenv
import os
from slack_sdk.web.async_client import AsyncWebClient
import asyncio

def entry():
    asyncio.get_event_loop().run_until_complete(main())

async def main():
    token = dotenv.get_key(".env", "SLACK_TOKEN")
    client = AsyncWebClient(token)
    res = await client.api_test()
    auth = await client.auth_test()
    await print(res)
    await print(auth)
    print("test")