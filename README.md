# Paint Night Inspiration Bot

by Alec Malenfant
and Nadeem Mahommed

# Overview

This is the paint-night-inspiration-bot.

# Quick Start

## Dependencies

Install the needed dependencies by running these commands in the terminal :

```
  npm install
  npm install @google/generative-ai
  npm install @azure/cognitiveservices-computervision
  npm install async
```

# API Key Environment Variables

The API keys are stored as environment variables in a ".env.local" file in the root directory.
If no such file exist, create that file and create value-key pairs with the following values :

```
VITE_GEMINI_API_KEY="YOUR-KEY"
VITE_AZURE_VISION_KEY="YOUR-KEY"
VITE_AZURE_VISION_ENDPOINT="YOUR-ENDPOINT"
```

## Start Development Server

```
 npm run dev
```
