#!/usr/bin/env node

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../vars/.env') });
console.log(process.env.ORG);
console.log(process.env.API_KEY);
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
const configuration = new Configuration({
    organization: process.env.ORG,
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

/* async function start() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    
    if (response.data.choices[0].text) {
        console.log(response.data.choices[0].text);
    }
}

start(); */