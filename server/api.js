import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

if (!openaiApiKey) {
    // error message + close backend if API key is not set
    console.error('OPENAI_API_KEY is not set')
    process.exit(1)
}

const configuration = new Configuration( {
    // use curly brace because is like key: value pair object, not just single parameter
    apiKey: openaiApiKey
})

const openai = new OpenAIApi(configuration)

// will import this in another file to make api call
export default openai