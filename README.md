# Paint Night Inspiration Bot

by Alec Malenfant
and Nadeem Mahommed

# User Experience

For this application, users will either upload an existing image file and/or upload a picture taken from the device’s camera. These images can be uploaded into two categories : reference and inspiration. As long as one image is uploaded, the program can run. Next, the user will have the option to add any inspiration keywords to a text input box.

After hitting the “generate” button, the program will return a description or the uploaded image along with a confidence score. A new image will then be generated from the reference image, inspiration image(s), and any inspiration keywords. The image generation model will be encouraged to be similar to the reference image. This makes it more likely that the output image will be something useful that the artist can actually add to their canvas. However, the model will also be encouraged to add unexpected elements to bring something different that the amateur artist can enjoy. Paint-Night-Inspiration-Bot is designed to make wacky and bold images that bring something new to the canvas with every image generated.

# Current State of Development

I have been slowly but surely chugging away at UI development. The page and it's components are responsive to change in screen size.

<br/>These are the buttons that **do** work :

- All 3 buttons to test the API
- Upload image button
- Add keyword button

These are the buttons that **do not** work :

- Generate image
- Login

## Next Steps

The next steps are to:

- Integrate Nadeem's clerk code into this project
- Add image description + confidence to the bottom of the reference image modal
- Make 'Generate Image' button work
- Remove Test API buttons
- Maybe replace the image carousel with an image list. I think that could look better with lots of images on a wider screen
- Store Images for logged in users
- Deploy

# Quick Start

## Dependencies

Install the needed dependencies by running these commands in the terminal :

```
  npm install
  npm install @google/generative-ai
  npm install @azure/cognitiveservices-computervision
  npm install async
  npm install react-slick --save
  npm install slick-carousel --save
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  npm install @fontsource/roboto
```

- react-slick and slick-carousel allow the program to use a slick image carousel to display generated images
- mui is a component library called 'Material UI'

## API Key Environment Variables

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
