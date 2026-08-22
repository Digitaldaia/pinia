export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    const { producto, objetivo } = req.body || {};

    if (!producto) {
      return res.status(400).json({
        error: "Falta indicar qué querés promocionar."
      });
    }

    const objetivoFinal = objetivo || "Vender";

    const titulo = `Descubrí cómo empezar con ${producto}`;

    const descripcion =
      `Una forma simple y práctica de descubrir todo lo que ${producto} puede ayudarte a conseguir. Conocé más y empezá hoy.`;

    const palabrasClave = [
      producto,
      "guía",
      "ideas",
      "recursos",
      "aprender",
      "consejos"
    ];

    const cta = "Conocé más y descubrí cómo empezar.";

    const ideaVisual =
      `Crear una imagen vertical, limpia y profesional relacionada con ${producto}, utilizando un título corto y llamativo.`;

    return res.status(200).json({
      objetivo: objetivoFinal,
      titulo,
      descripcion,
      palabrasClave,
      cta,
      ideaVisual
    });

  } catch (error) {
    return res.status(500).json({
      error: "Ocurrió un error al generar el contenido."
    });
  }
}
