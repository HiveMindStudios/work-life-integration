import discord
import dotenv
import json

token = dotenv.get_key(".env","DISCORD_TOKEN")
intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)
#print(token)

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
       
        messages.append(data) #todo append json serialized to list in main
        print(message.content + "  " + message.author.name + '#' + message.author.discriminator + "  " + str(message.created_at))


client.run(token)