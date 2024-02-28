# Leonis
A open source and modern biolinks.

## Features
- [x] Customizable
- [x] Modern
- [x] Open Source
- [x] Easy to use

## Installation
For make your biolink page, you need to use the Builder.
1. Install the builder
```bash
npm install -g @leonis/builder
```
2. Create a resource folder
```bash
mkdir resources
```
3. Put your resources in the folder
4. Create a config file
```yaml
name: "Your name"
description: "Your description"
background: bg.png
background_blur: 5px
links:
  - icon: github
    url: https://github.com/yourgithub
    color: "#181717"
effects:
  background: night_time
  name: rainbow
  description: typewriter
profile:
  blur: 10px
  opacity: 20
  avatar: avatar.png
  layout: left
  discord: "YourDiscordID"
  geolocation:
    latitude: LatitudeOfYourLocation
    longitude: LongitudeOfYourLocation
music: music.mp3
backend: https://leonis.oriondev.fr
```
THIS IS A EXAMPLE CONFIG FILE, YOU CAN CHANGE THE VALUES
How to write the config file is detailed in the documentation.

5. Build your biolink page
```bash
leonis --input config.yml --output Leonis
```
6. Your biolink page is in the folder Leonis

## Documentation
You can find the documentation [here](https://leonis.oriondev.fr/docs)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.