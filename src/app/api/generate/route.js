import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = 
`
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

export async function POST(req) {
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
    const data = await req.text()
  
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
      response_format: { type: 'json_object' },
    })
    
    // Parse the JSON response from the OpenAI API
    const flashcards = JSON.parse(completion.choices[0].message.content)
    console.log(completion.choices[0].message.content)
    console.log(flashcards)
    
    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards)
  }