import dotenv
import os
from slack_sdk.web.async_client import AsyncWebClient
import asyncio

token = dotenv.get_key(".env", "SLACK_TOKEN")
client = AsyncWebClient(token)
res = await client.api_test()
auth = await client.auth_test()
print(res)
print(auth)
print("test")