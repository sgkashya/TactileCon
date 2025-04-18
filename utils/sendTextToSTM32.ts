export async function sendTextToSTM32(text: string): Promise<void> {
    try {
      const encodedText = encodeURIComponent(text);
      const url = `http://192.168.137.107/?${encodedText}`;

      const response = await fetch(url, {
        method: "GET",
      });
  
      if (response.ok) {
        console.log("Text sent to STM32:", text);
      } else {
        console.warn("STM32 responded with error status");
      }
    } catch (error) {
      console.error("Failed to send text to STM32:", error);
    }
  }
  