import api.slackApi as slackApi
import api.discordApi as discordApi
from flask import Flask, json, request
import gnupg
import asyncio
users=[]
messages = []
companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
gpg = gnupg.GPG(gnupghome="/urs/bin/gpg")
api = Flask(__name__)

@api.route('/companies', methods=['GET'])
def get_companies():
  return json.dumps(companies)

@api.route('/messages', methods=['POST'])
def checkMessages():
  if messages.length() == 0:
    return {"data": ""}
  else:
    return json.dumps(f"{{'data':{gpg.encrypt(messages, users,symmetric=False)}}}")
@api.route('/loadMessages', methods=["POST"])
def loadMessages():
  data = request.form["data"]
  messages.append(data)
if __name__ == '__main__':
    api.run(host='0.0.0.0',port=9999)

async def main():
    asyncio.new_event_loop().run_until_complete(await slackApi.main())
    asyncio.new_event_loop().run_until_complete(await discordApi.main())

