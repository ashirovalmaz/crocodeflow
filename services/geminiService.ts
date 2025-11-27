
export const generateRoast = async (
  processDescription: string
): Promise<string | null> => {
  try {
    const response = await fetch('https://n8n.crocodeflow.com/webhook/website/roast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ process: processDescription }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    const data = await response.json();

    // Handle various possible response formats from n8n
    // Ideally n8n returns { output: "roast string" } or just { "roast string" }
    // We check for common properties
    return data.output || data.roast || data.text || data.message || (typeof data === 'string' ? data : JSON.stringify(data));

  } catch (error) {
    console.error("Error generating roast via webhook:", error);
    return "Your process is so broken that even our roasting server crashed trying to analyze it. (Connection Error)";
  }
};
