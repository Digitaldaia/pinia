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
    const objetivoTexto = objetivoFinal.toLowerCase();

    // Nombre completo introducido por el usuario
    const productoNombre = producto.trim();

    // Tema principal del producto, evitando repeticiones innecesarias
    const productoBase = productoNombre
      .replace(/^ebook\s+de\s+/i, "")
      .replace(/^curso\s+de\s+/i, "")
      .replace(/^gu[ií]a\s+de\s+/i, "")
      .replace(/\s+para\s+principiantes/gi, "")
      .trim();

    let titulo;
    let descripcion;
    let palabrasClave;
    let cta;
    let ideaVisual;

    // =========================================================
    // OBJETIVO: VENDER
    // =========================================================

    if (objetivoTexto.includes("vender")) {
      titulo =
        `✨ ${productoNombre}: descubrí por qué puede ser justo lo que necesitás`;

      descripcion =
        `Descubrí los beneficios y posibilidades de ${productoNombre}. ` +
        `Conocé cómo puede ayudarte, qué podés encontrar y por qué puede ser una opción ideal para empezar.`;

      palabrasClave = [
        productoBase,
        `${productoBase} para principiantes`,
        `aprender ${productoBase} desde cero`,
        `cómo empezar con ${productoBase}`,
        `mejor ${productoBase}`,
        `ideas de ${productoBase}`,
        `guía de ${productoBase}`,
        `comprar ${productoNombre}`
      ];

      cta = "👉 Descubrí más y empezá hoy.";

      ideaVisual =
        `Crear un Pin vertical de alta conversión para promocionar ${productoNombre}. ` +
        `Mostrar claramente el producto y su principal beneficio. ` +
        `Fotografía realista y profesional, iluminación clara y natural, composición premium, ` +
        `alto contraste y texto visual corto que genere deseo y curiosidad.`;
    }

    // =========================================================
    // OBJETIVO: TRÁFICO / CLICS / VISITAS
    // =========================================================

    else if (
      objetivoTexto.includes("clic") ||
      objetivoTexto.includes("tráfico") ||
      objetivoTexto.includes("trafico") ||
      objetivoTexto.includes("visita")
    ) {
      titulo =
  `🧶 ${productoBase} para principiantes: aprendé desde cero paso a paso`;

descripcion =
  `¿Querés aprender ${productoBase} desde cero? ` +
  `Descubrí una guía pensada para principiantes, con puntos básicos, ideas y proyectos fáciles para empezar. ` +
  `Entrá y conocé el contenido completo.`;

      palabrasClave = [
        productoBase,
        `${productoBase} para principiantes`,
        `aprender ${productoBase} desde cero`,
        `cómo empezar con ${productoBase}`,
        `ideas de ${productoBase}`,
        `guía de ${productoBase}`,
        `recursos de ${productoBase}`,
        `tutorial de ${productoBase}`,
        `consejos de ${productoBase}`
      ];

      cta = "👉 Entrá y descubrí más.";

      ideaVisual =
        `Crear un Pin vertical diseñado específicamente para generar clics en Pinterest sobre ${productoBase}. ` +
        `Usar una imagen atractiva que despierte curiosidad, un título corto y potente, ` +
        `composición limpia, fotografía realista, iluminación clara y natural y un elemento visual ` +
        `que invite a conocer el contenido completo.`;
    }

    // =========================================================
    // OBJETIVO: SEGUIDORES / COMUNIDAD
    // =========================================================

    else if (
      objetivoTexto.includes("segu") ||
      objetivoTexto.includes("comunidad")
    ) {
      titulo =
        `💡 Todo lo que necesitás saber sobre ${productoBase}`;

      descripcion =
        `Descubrí contenido útil sobre ${productoBase}, aprendé algo nuevo y encontrá ideas ` +
        `que podés aplicar fácilmente. SeguÍ a PINIA para descubrir más contenido.`;

      palabrasClave = [
        productoBase,
        `aprender ${productoBase}`,
        `ideas de ${productoBase}`,
        `consejos de ${productoBase}`,
        `tutorial de ${productoBase}`,
        `${productoBase} para principiantes`,
        `contenido de ${productoBase}`
      ];

      cta = "👉 Seguinos para descubrir más ideas.";

      ideaVisual =
        `Crear un Pin vertical pensado para atraer nuevos seguidores interesados en ${productoBase}. ` +
        `Diseño visual profesional, fotografía realista, iluminación clara y natural, ` +
        `título llamativo, estética premium y sensación de contenido útil y confiable.`;
    }

    // =========================================================
    // OBJETIVO: GUARDADOS
    // =========================================================

    else if (
      objetivoTexto.includes("guardar") ||
      objetivoTexto.includes("guardado")
    ) {
      titulo =
        `📌 Guardá esta guía sobre ${productoBase}`;

      descripcion =
        `Una guía práctica con ideas y consejos útiles sobre ${productoBase}. ` +
        `Guardá este Pin para volver a consultarlo cuando lo necesites.`;

      palabrasClave = [
        productoBase,
        `guía de ${productoBase}`,
        `consejos de ${productoBase}`,
        `ideas de ${productoBase}`,
        `tutorial de ${productoBase}`,
        `aprender ${productoBase}`,
        `${productoBase} paso a paso`
      ];

      cta = "📌 Guardá este Pin para verlo después.";

      ideaVisual =
        `Crear un Pin vertical diseñado para generar guardados sobre ${productoBase}. ` +
        `Mostrar información útil de manera visual, fotografía realista, composición limpia, ` +
        `iluminación clara y natural, estética premium y un título que haga pensar ` +
        `"esto lo quiero guardar".`;
    }

    // =========================================================
    // OBJETIVO POR DEFECTO
    // =========================================================

    else {
      titulo =
        `✨ ${productoNombre}: ideas, consejos y guía para empezar`;

      descripcion =
        `Descubrí todo lo que necesitás saber sobre ${productoBase}. ` +
        `Encontrá ideas prácticas, consejos útiles y recursos para empezar de forma sencilla.`;

      palabrasClave = [
        productoBase,
        `${productoBase} para principiantes`,
        `aprender ${productoBase} desde cero`,
        `cómo empezar con ${productoBase}`,
        `ideas de ${productoBase}`,
        `guía de ${productoBase}`,
        `consejos de ${productoBase}`,
        `proyectos de ${productoBase}`
      ];

      cta = "👉 Descubrí la guía completa y empezá hoy.";

      ideaVisual =
        `Crear un Pin vertical de alta conversión para Pinterest sobre ${productoBase}. ` +
        `Usar una fotografía realista y profesional, composición limpia, iluminación clara y natural, ` +
        `alto contraste, estética premium y un título visual corto que genere curiosidad.`;
    }

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
