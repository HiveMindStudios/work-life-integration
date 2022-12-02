import discord
import dotenv

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

        print(message.content + "  " + message.author.name + '#' + message.author.discriminator + "  " + str(message.created_at))

client.run(token)