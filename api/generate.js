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

    
const titulo = `✨ ${producto}: ideas, consejos y guía para empezar`;

const descripcion =
  `Descubrí todo lo que necesitás saber sobre ${producto}. ` +
  `Encontrá ideas prácticas, consejos útiles y recursos para empezar ` +
  `de forma sencilla. Guardá este Pin y descubrí cómo aprovechar ${producto}.`;

const palabrasClave = [
const productoBase = producto
  .replace(/ebook\s+de\s+/i, "")
  .replace(/curso\s+de\s+/i, "")
  .replace(/guía\s+de\s+/i, "")
  .replace(/para\s+principiantes/gi, "")
  .trim();

const palabrasClave = [
  productoBase,
  `${productoBase} para principiantes`,
  `aprender ${productoBase} desde cero`,
  `cómo empezar con ${productoBase}`,
  `ideas de ${productoBase}`,
  `guía paso a paso de ${productoBase}`,
  `proyectos fáciles de ${productoBase}`,
  `consejos para aprender ${productoBase}`,
  `tutorial de ${productoBase}`
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
