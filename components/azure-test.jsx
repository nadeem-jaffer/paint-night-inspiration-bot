import React from "react";
import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import async from "async";
import { Button } from "@mui/material";

/**
 * AUTHENTICATE
 * This single client is used for all examples.
 */
//import keys from environment variables
const key = import.meta.env.VITE_AZURE_VISION_KEY;
const endpoint = import.meta.env.VITE_AZURE_VISION_ENDPOINT;

//create a new instance of the ComputerVisionClient class
const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": key } }),
  endpoint
);
/**
 * END - Authenticate
 */

//React function component that will return a button that tests the Azure Computer Vision API when clicked. The results will be printed to console.
const AzureTestButton = () => {
  const testAzureAPI = async () => {
    async.series(
      [
        async function () {
          // Temporary image URL
          // Image of a kid riding a scooter and an adult with a skateboard.
          const imgURL =
            "https://plus.unsplash.com/premium_photo-1677105212175-5a5a9d0372c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";

          // Call Image Description API
          const description = (
            await computerVisionClient.analyzeImage(imgURL, {
              visualFeatures: ["Description"],
            })
          ).description;

          // Print results
          console.log("Description : " + description.captions[0].text);
          console.log("Confidence : " + description.captions[0].confidence);
        },
        function () {
          return new Promise((resolve) => {
            resolve();
          });
        },
      ],
      (err) => {
        throw err;
      }
    );
  };

  return (
    <Button variant="contained" onClick={testAzureAPI}>
      Test Azure API
    </Button>
  );
};

export default AzureTestButton;
