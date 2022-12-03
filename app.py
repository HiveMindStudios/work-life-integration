import api.slackApi as slackApi
import api.discordApi as discordApi
from flask import Flask, request, json
import gnupg
import asyncio
print("eh")

async def main():
  print("uh")
  users=[] #Input users' emails connected to their public gpg key
  messages = []
  gpg = gnupg.GPG(gnupghome="/urs/bin/gpg")
  app = Flask(__name__)
  @app.route('/messages', methods=['POST'])
  def checkMessages():
    if messages.length() == 0:
      return {"data": ""}
    else:
      return json.dumps(f"{{'data':{gpg.encrypt(messages, users,symmetric=False)}}}")
  @app.route('/loadMessages', methods=["POST"])
  def loadMessages():
    data = request.form["data"]
    messages.append(data)
  if __name__ == '__main__':
    app.run(host='0.0.0.0',port=65432)
    print("Running on port 65432")
    init()
async def init():
  asyncio.new_event_loop().run_until_complete(await discordApi.main())
  asyncio.new_event_loop().run_until_complete(await slackApi.main())

