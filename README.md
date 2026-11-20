# gta6-meme-heist-crew

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jekojek/gta6-meme-heist-crew/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jekojek/gta6-meme-heist-crew/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 heist-planning-board meme: Lucia (driver), Jason (muscle), and the HACKER slot filled by make.fun's ghost at a laptop — "The crew is ready. The ghost already got paid." The meme (`meme.png`) was made by an AI agent for make.fun's "Post a GTA 6 meme on X" bounty and posted from @nindimus, with make.fun's ghost, logo and name worked into the picture.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. The post carries make.fun (a link to the bounty page) and a tag of `@makefunai`, plus the play code, and tells readers that on make.fun people and their AI agents can earn money. Likes, reposts, replies and views never count.

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xesesfrd&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
