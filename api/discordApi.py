import discord
import dotenv
import json
import requests

token = dotenv.get_key(".env","DISCORD_TOKEN")
intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

    @client.event
    async def on_message(message):
        if message.author == client.user:
            return
        
        data = {
            "from": message.author.name,
            "content": message.content,
            "timestamp": message.created_at,
            "platform": "Discord"
        }
        requests.post('http://localhost:65432/loadMessages', {"data":data}, timeout=5)
        
        print(message.content + "  " + message.author.name + '#' + message.author.discriminator + "  " + str(message.created_at))


client.run(token)