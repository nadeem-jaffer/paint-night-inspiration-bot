//this component will return a button that tests the Gemini API when clicked. The results will be printed to console.
import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

//import key from environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GeminiTestButton = () => {
  const testGeminiAPI = async () => {
    //create a new instance of the GoogleGenerativeAI class and get the generative model
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //temporary prompt
    const prompt = "Write a story about a magic backpack.";

    //generate content using the prompt
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  };

  return <button onClick={testGeminiAPI}>Test Gemini API</button>;
};

export default GeminiTestButton;
