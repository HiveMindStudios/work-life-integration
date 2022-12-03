import api.slackApi as slackApi
import api.discordApi as discordApi
from flask import Flask, json
import gnupg
import asyncio
users=[]
messages = []
companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
gpg = gnupg.GPG(gnupghome="/urs/bin/gpg")
gpgKeyId = ""
password = ""
api = Flask(__name__)

@api.route('/companies', methods=['GET'])
def get_companies():
  return json.dumps(companies)

@api.route('/messages', methods=['POST'])
def checkMessages():
  if messages.length() == 0:
    return {"data": ""}
  else:
    return json.dumps(f"{{'data':{gpg.encrypt(messages, users, gpgKeyId, password,symmetric=False)}}}")

if __name__ == '__main__':
    api.run()

async def main():
    asyncio.new_event_loop().run_until_complete(await slackApi.main())
    asyncio.new_event_loop().run_until_complete(await discordApi.main())

