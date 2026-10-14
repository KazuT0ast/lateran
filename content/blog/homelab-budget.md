---
title: "Homelabbing on a Budget"
date: "2026-10-13"
description: "A second life for old components."
tags: ["homelab", "guide", "tech", "computers", "budget", "linux"]
---

## Overview
Have you ever wanted to escape from corporate software such as Spotify, Google Cloud, or even services such as [Aternos?](https://aternos.org) (A free minecraft hosting service)

Or maybe, you have an old laptop or desktop laying around that you want to repurpose, as most of these older office PCs are relatively lightweight and power efficient. If you're planning on purchasing one, I'd look into some mini PCs that take up very little footprint and sip power.

In this blog, I'll show you how I turned an old "HP Compaq 8200 Elite" office pc into something that my friends and I could enjoy!

![Mindmap](/content/blog-images/homelab-budget/mindmap.png)

## The Beginning
Back in maybe 2020, or even further back, I bought this pc as a gift for my father to do his office work on. (Word, excel, etc)

I believe back then, it costed me around $200, plus another $20 for a cheap Kingston 128GB SSD. In hindsight, this is crazy cheap for an SSD considering what is happening now, where even entry level 500GB SSDs are costing upwards of $100+

The specs were:
- CPU: i5-7500 4c/4t with  Intel® HD Graphics 630 
- 4 GB of DDR3 OEM Ram -> 8GB of DDR3 Ram
- 256GB HDD -> 128GB Kingston SSD 

Had some extra DDR3 ram from my really old build that I was hoarding

## The Setup
Fast forward 5 years later in 2025, my father didn't have a use for it anymore, so instead of throwing it away, I thought "Maybe I could do something that was always on my bucket list." I had always wanted to host a server that was on 24/7, especially one for Minecraft where any of my friends could log on at any given time.

The dilemna was that, alright, if I used windows then I'd basically be losing like 4 out of the 8 gigs of ram that was on the system. This was honestly a good time to regain my skills in linux that had been forgotten since I was in college. I wanted to get another cheap drive so I didn't have to wipe any data off of the old one, so I went out and bought a "Lexar 512GB NS100" drive for only $50. 

### Linux (but which one?)
I used lots of Ubuntu during college, so I was thinking of just going with that, but I did some research and saw that Mint was a really good OS for someone going from Windows to Linux, so I decided with that. I downloaded the ISO from the official Mint site, and used balena etcher to put the image onto my USB drive since that was recommended in lots of posts. It was now officialy installed. 

I heard that drivers would be a problem since this was an OEM system, but it booted straight up and everything was working, even the internal speaker that was mounted in the front pannel. So overall, a pretty good first experience with Mint

### Applications

#### Docker
I knew that Docker would be really important, but this is also where I messed up. During college, I used lots of Docker Desktop, which is just Docker but with a heavy and clunky user interface. But what I didn't know is that I really did not need Docker Desktop and could have just downloaded the Docker Engine itself.

Why was this a mistake?

First of all, I would notice later down the line that it does not automatically launch in the background when I rebooted the system either through the physical button, or through CLI. I would always need a monitor plugged into the system so I could manually sign in, then click the Docker Desktop icon to launch it, then sign out.

Second, I would eventually blindly follow a Docker Compose for NextCloud where I would have a named volume instead of a binded folder for all the data (more on this later) which normally, would not be that bad, but for Docker Desktop, it made its own virtual Linux system where if you wanted to access the files, you would have to mount it into a folder, and it was a big headache.

But some good did come out of having Docker in general.

#### Minecraft Server
My very first service after installing Docker was to make a Minecraft Server that would allow my friends and I to play modpacks together, and it would be up 24/7 if anyone wanted to hop on at any time. One of our Modpacks we wanted to play was [Sunlit Valley](https://www.curseforge.com/minecraft/modpacks/society-sunlit-valley)


services:  
  mc:
    image: itzg/minecraft-server:java17
    container_name: sunlitvalley
    restart: unless-stopped
    environment:
      EULA: "TRUE"
      TYPE: "FORGE"
      VERSION: "1.20.1"
      SPAWN_PROTECTION: 0
      ALLOW_FLIGHT: true
      MEMORY: 7G
      WHITELIST: |
        -----
        -----
        -----
        -----
        -----
      OPS: |
        -----
    ports:
      - "25565:25565"
    volumes:
      - ./sunlitvalley-data:/data