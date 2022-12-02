
import os
import slack
token = "" # Drop token to env
client = slack.AsyncWebClient(token)
async def __main__():
    res = await client.api_test()

    assert res.get("ok", False)