import discord
import asyncio
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Retrieve the bot token from the environment variables
TOKEN = os.getenv("MTMyMDc1NzkyNDMwOTYzNTE1Mw.GCHT2U.0solwmmduFgseRQPy9dXA_Cq5eetpFEwUoZ5Iw")

# Replace with your channel ID
CHANNEL_ID = 1226239998060265504

# Set up the bot's intents
intents = discord.Intents.default()
intents.messages = True
intents.guilds = True

# Initialize the bot client with the 'bot=False)' parameter
client = discord.Client(intents=intents, bot=False)

# Event that runs when the bot is ready
@client.event
async def on_ready():
    print(f"Logged in as {client.user}")
    await send_message_loop()

# Function to send messages to the channel in a loop
async def send_message_loop():
    # Get the channel object using its ID
    channel = client.get_channel(CHANNEL_ID)

    if not channel:
        print(f"Channel with ID {CHANNEL_ID} not found!")
        return

    # Send 'test' as a message in the channel every 3 minutes (180 seconds)
    while True:
        try:
            await channel.send("test")
            print("Message sent!")
        except Exception as e:
            print(f"Failed to send message: {e}")
        await asyncio.sleep(180)

# Run the bot
if TOKEN is None:
    print("Token not found! Please add your token to the .env file.")
else:
    client.run(TOKEN)
