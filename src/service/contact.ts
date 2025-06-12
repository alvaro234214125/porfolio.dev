export async function sendContactForm(data: Record<string, string>) {
  try {
    const response = await fetch("https://porfolio-backend-tp63.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json?.message || "Error en el servidor");
    }

    return { success: true, message: "Mensaje enviado con éxito." };
  } catch (error) {
    return { success: false, message: "Error al enviar el mensaje. Intenta de nuevo." };
  }
}
