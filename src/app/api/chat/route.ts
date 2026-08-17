import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Placeholder rule-based fallback if no OpenAI API Key is provided
    const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
    
    let reply = "Thanks for reaching out! Please check out the Booking page or fill out the contact form for inquiries.";
    
    if (lastUserMessage.includes('rate') || lastUserMessage.includes('price')) {
      reply = "Rates vary depending on the type of session or event. Please visit the Booking page for structured packages or contact directly.";
    } else if (lastUserMessage.includes('book') || lastUserMessage.includes('schedule')) {
      reply = "You can schedule appointments directly using the Book Appointment tab in the menu!";
    } else if (lastUserMessage.includes('location') || lastUserMessage.includes('travel')) {
      reply = "Travel inquiries are evaluated case by case with advance notice and screening.";
    }

    /* 
      To connect OpenAI, uncomment below and add OPENAI_API_KEY to your environment variables:
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a professional booking assistant for an adult entertainer. Be polite, discreet, and direct clients to the booking tab.' },
            ...messages
          ]
        })
      });
      const data = await response.json();
      reply = data.choices[0].message.content;
    */

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Sorry, an error occurred processing your request." }, { status: 500 });
  }
}
