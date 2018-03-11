import discord
from discord.ext import commands

bot = commands.Bot("!")

@bot.event
async def on_ready():
    print("bot online")


@bot.command(pass_context=True)
async def ping(ctx):
    await bot.say("pong")


@bot.command(pass_context=True)
async def hello(ctx):
    await bot.say("hi :wave:")



bot.run("token")
