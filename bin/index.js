#!/usr/bin/env node

require('dotenv').config({path: "./vars/.env"});
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const configuration = new Configuration({
    organization: "org-SA8UCjBrbhtyUaMZaCmWJXIU",
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
});

if (response.data.choices[0].text) {
    console.log(response.data.choices[0].text);
}
