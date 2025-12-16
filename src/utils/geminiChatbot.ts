import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatbotOptions {
  apiKey: string;
  modelName?: string; // Defaults to "gemini-pro"
}

interface ChatbotResponse {
  answer: string | null;
  refusalReason: string | null;
}

/**
 * A documentation chatbot function that answers questions strictly from provided content.
 *
 * @param userQuery The question from the user.
 * @param documentationContent The documentation text to draw answers from.
 * @param options Configuration options including the Gemini API key and optional model name.
 * @returns A promise that resolves to a ChatbotResponse object containing the answer or a refusal reason.
 */
export async function documentationChatbot(
  userQuery: string,
  documentationContent: string | null | undefined,
  options: ChatbotOptions
): Promise<ChatbotResponse> {
  // 1. Handle missing documentation content
  if (!documentationContent || documentationContent.trim() === '') {
    return {
      answer: null,
      refusalReason: "I cannot answer your question because no documentation content was provided.",
    };
  }

  // 2. Initialize Gemini API
  if (!options.apiKey) {
    return {
      answer: null,
      refusalReason: "Gemini API key is missing. Please provide it in the chatbot options.",
    };
  }

  const genAI = new GoogleGenerativeAI(options.apiKey);
  const model = genAI.getGenerativeModel({ model: options.modelName || "gemini-pro" });

  // 3. Construct the prompt
  // The prompt explicitly instructs the model to act as a documentation chatbot,
  // use only the provided content, and politely refuse if the answer is not found.
  const prompt = `You are a documentation chatbot. Your goal is to answer questions strictly based on the provided documentation content.
If the answer to the question is not explicitly available in the provided documentation, you must politely state that you cannot find the answer in the given documentation and refuse to answer. Do not use any external knowledge.

---
DOCUMENTATION CONTENT:
${documentationContent}
---

QUESTION:
${userQuery}
---

ANSWER:`;

  // 4. Call Gemini API
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // The model's response should adhere to the prompt's instructions,
    // providing an answer or a polite refusal within the generated text.
    return { answer: text, refusalReason: null };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return {
      answer: null,
      refusalReason: "An error occurred while trying to process your request with the AI. Please check the API key and your network connection.",
    };
  }
}
