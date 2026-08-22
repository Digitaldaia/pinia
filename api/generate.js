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
const titulo = `✨ ${producto}: ideas, consejos y guía para empezar`;

const descripcion =
  `Descubrí todo lo que necesitás saber sobre ${producto}. ` +
  `Encontrá ideas prácticas, consejos útiles y recursos para empezar ` +
  `de forma sencilla. Guardá este Pin y descubrí cómo aprovechar ${producto}.`;

const palabrasClave = [
  producto,
  `${producto} para principiantes`,
  `ideas de ${producto}`,
  `cómo empezar con ${producto}`,
  `guía de ${producto}`,
  `consejos de ${producto}`,
  `aprender ${producto}`,
  `recursos de ${producto}`,
  `tutorial de ${producto}`
];

const cta =
  "👉 Descubrí la guía completa y empezá hoy.";

const ideaVisual =
  `Crear un Pin vertical de alta conversión para Pinterest sobre ${producto}. ` +
  `Usar una fotografía realista y profesional relacionada directamente con el producto, ` +
  `composición limpia, iluminación clara y natural, alto contraste, estética premium ` +
  `y un título visual corto que genere curiosidad. ` +
  `Mostrar claramente el beneficio principal de ${producto} y evitar exceso de texto.`;
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
