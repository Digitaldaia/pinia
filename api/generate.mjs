export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    const { producto, objetivo } = req.body || {};

    if (!producto || !producto.trim()) {
      return res.status(400).json({
        error: "Falta indicar qué querés promocionar."
      });
    }

    const productoNombre = producto.trim();
    const objetivoFinal = objetivo || "vender";
    const objetivoTexto = objetivoFinal.toLowerCase();

    /*
    ============================================================
    PINIA — PROTOTIPO FUNCIONAL

    Problema:
    Crear contenido estratégico para Pinterest puede resultar
    difícil cuando el usuario no sabe qué título, descripción,
    palabras clave, CTA o enfoque visual utilizar.

    Solución:
    PINIA transforma un producto + un objetivo en una propuesta
    de contenido adaptada a Pinterest.

    Esta versión es un PROTOTIPO DE DEMOSTRACIÓN.
    No pretende ser una solución comercial completamente
    optimizada para producción.
    ============================================================

    CASOS DE DEMOSTRACIÓN:

    1. Ebook de crochet para principiantes → tráfico
    2. Planner digital semanal → guardados
    3. Guía de marketing digital → ventas
    4. Guía de organización del hogar → seguidores
    5. Recetario de comidas fáciles → tráfico

    Estos casos sirven para demostrar el funcionamiento.
    PINIA no está limitado a ellos.
    ============================================================
    */

    /*
    ------------------------------------------------------------
    IDENTIFICACIÓN BÁSICA DEL TEMA
    ------------------------------------------------------------

    Separamos algunas palabras genéricas del producto para
    evitar frases artificiales como:

    "Ebook de crochet para principiantes para principiantes"
    */

    const tema = productoNombre
      .replace(/^ebook\s+de\s+/i, "")
      .replace(/^ebook\s+/i, "")
      .replace(/^curso\s+de\s+/i, "")
      .replace(/^curso\s+/i, "")
      .replace(/^gu[ií]a\s+de\s+/i, "")
      .replace(/^gu[ií]a\s+/i, "")
      .replace(/^planner\s+de\s+/i, "")
      .replace(/^plantilla\s+de\s+/i, "")
      .replace(/^recetario\s+de\s+/i, "")
      .replace(/\s+para\s+principiantes$/i, "")
      .trim();

    let titulo = "";
    let descripcion = "";
    let palabrasClave = [];
    let cta = "";
    let ideaVisual = "";

    /*
    ============================================================
    OBJETIVO 1 — VENDER
    ============================================================
    */

    if (
      objetivoTexto.includes("vender") ||
      objetivoTexto.includes("venta")
    ) {
      titulo =
        `✨ ${productoNombre}: descubrí una forma más simple de empezar`;

      descripcion =
        `¿Estás buscando una forma práctica de avanzar con ${tema}? ` +
        `${productoNombre} puede ayudarte a dar el primer paso con una propuesta clara y fácil de aplicar. ` +
        `Conocé el contenido y descubrí si es para vos.`;

      palabrasClave = [
        tema,
        `${tema} para principiantes`,
        `cómo empezar con ${tema}`,
        `aprender ${tema}`,
        `guía de ${tema}`,
        `ideas de ${tema}`,
        `recursos de ${tema}`,
        `mejor ${tema}`
      ];

      cta =
        "👉 Conocé la propuesta y descubrí cómo empezar.";

      ideaVisual =
        `Crear un Pin vertical de Pinterest orientado a conversión para promocionar ${productoNombre}. ` +
        `Mostrar claramente el producto y su principal beneficio. ` +
        `Usar fotografía realista y profesional, iluminación clara y natural, ` +
        `composición limpia, estética premium, alto contraste y un mensaje visual corto ` +
        `que genere deseo y curiosidad.`;
    }

    /*
    ============================================================
    OBJETIVO 2 — GENERAR TRÁFICO
    ============================================================
    */

    else if (
      objetivoTexto.includes("tráfico") ||
      objetivoTexto.includes("trafico") ||
      objetivoTexto.includes("clic") ||
      objetivoTexto.includes("visita")
    ) {
      titulo =
        `🔎 ${tema}: descubrí ideas que pueden ayudarte a empezar`;

      descripcion =
        `¿Querés conocer más sobre ${tema}? ` +
        `Descubrí ideas, consejos y recursos que pueden ayudarte a dar el siguiente paso. ` +
        `Entrá para conocer el contenido completo y descubrir qué podés aplicar.`;

      palabrasClave = [
        tema,
        `${tema} para principiantes`,
        `aprender ${tema} desde cero`,
        `cómo empezar con ${tema}`,
        `ideas de ${tema}`,
        `consejos de ${tema}`,
        `guía de ${tema}`,
        `recursos de ${tema}`,
        `tutorial de ${tema}`
      ];

      cta =
        "👉 Entrá y descubrí el contenido completo.";

      ideaVisual =
        `Crear un Pin vertical diseñado para generar clics desde Pinterest hacia el contenido. ` +
        `El tema principal es ${tema}. ` +
        `Utilizar una imagen atractiva que despierte curiosidad, ` +
        `un título visual corto, una composición limpia, fotografía realista, ` +
        `iluminación clara y natural y un elemento visual que invite a descubrir más.`;
    }

    /*
    ============================================================
    OBJETIVO 3 — CONSEGUIR SEGUIDORES
    ============================================================
    */

    else if (
      objetivoTexto.includes("segu") ||
      objetivoTexto.includes("comunidad")
    ) {
      titulo =
        `💡 Ideas y consejos sobre ${tema} que vale la pena conocer`;

      descripcion =
        `Descubrí contenido útil sobre ${tema}, encontrá nuevas ideas ` +
        `y aprendé algo que puedas aplicar. ` +
        `Seguí la cuenta para descubrir más contenido relacionado.`;

      palabrasClave = [
        tema,
        `ideas de ${tema}`,
        `consejos de ${tema}`,
        `aprender ${tema}`,
        `tutorial de ${tema}`,
        `guía de ${tema}`,
        `${tema} para principiantes`,
        `contenido sobre ${tema}`
      ];

      cta =
        "👉 Seguinos para descubrir más ideas.";

      ideaVisual =
        `Crear un Pin vertical orientado a generar interés y nuevos seguidores. ` +
        `El contenido debe estar relacionado con ${tema}. ` +
        `Usar fotografía realista, iluminación clara y natural, diseño profesional, ` +
        `título llamativo, composición limpia y sensación de contenido útil y confiable.`;
    }

    /*
    ============================================================
    OBJETIVO 4 — AUMENTAR VISIBILIDAD
    ============================================================
    */

    else if (
      objetivoTexto.includes("visibilidad") ||
      objetivoTexto.includes("alcance") ||
      objetivoTexto.includes("descubr")
    ) {
      titulo =
        `✨ Descubrí ideas, consejos y recursos sobre ${tema}`;

      descripcion =
        `Explorá contenido relacionado con ${tema} y descubrí nuevas ideas, ` +
        `consejos y recursos que pueden resultar útiles. ` +
        `Guardá o compartí este contenido si te resulta interesante.`;

      palabrasClave = [
        tema,
        `ideas de ${tema}`,
        `tendencias de ${tema}`,
        `consejos de ${tema}`,
        `aprender ${tema}`,
        `guía de ${tema}`,
        `recursos de ${tema}`,
        `contenido de ${tema}`,
        `${tema} para principiantes`
      ];

      cta =
        "✨ Descubrí más contenido sobre este tema.";

      ideaVisual =
        `Crear un Pin vertical diseñado para aumentar el alcance y descubrimiento del contenido. ` +
        `Representar visualmente ${tema} con una fotografía realista y profesional, ` +
        `iluminación clara y natural, composición atractiva, alto contraste y un título ` +
        `fácil de comprender en pocos segundos.`;
    }

    /*
    ============================================================
    OBJETIVO 5 — GUARDADOS
    ============================================================
    */

    else if (
      objetivoTexto.includes("guardar") ||
      objetivoTexto.includes("guardado")
    ) {
      titulo =
        `📌 Guardá esta guía práctica sobre ${tema}`;

      descripcion =
        `Encontrá ideas, consejos y recursos útiles relacionados con ${tema}. ` +
        `Guardá este Pin para volver a consultarlo cuando lo necesites.`;

      palabrasClave = [
        tema,
        `guía de ${tema}`,
        `ideas de ${tema}`,
        `consejos de ${tema}`,
        `tutorial de ${tema}`,
        `aprender ${tema}`,
        `${tema} paso a paso`,
        `recursos de ${tema}`
      ];

      cta =
        "📌 Guardá este Pin para consultarlo después.";

      ideaVisual =
        `Crear un Pin vertical pensado para generar guardados. ` +
        `Mostrar información útil relacionada con ${tema}, utilizando fotografía realista, ` +
        `composición clara, iluminación natural, estética profesional y un título que ` +
        `comunique claramente por qué vale la pena guardar el contenido.`;
    }

    /*
    ============================================================
    OBJETIVO POR DEFECTO
    ============================================================
    */

    else {
      titulo =
        `✨ Descubrí nuevas ideas sobre ${tema}`;

      descripcion =
        `Explorá contenido útil relacionado con ${tema}. ` +
        `Encontrá ideas, consejos y recursos que pueden ayudarte a empezar o avanzar.`;

      palabrasClave = [
        tema,
        `ideas de ${tema}`,
        `aprender ${tema}`,
        `cómo empezar con ${tema}`,
        `guía de ${tema}`,
        `consejos de ${tema}`,
        `tutorial de ${tema}`,
        `${tema} para principiantes`
      ];

      cta =
        "👉 Descubrí más.";

      ideaVisual =
        `Crear un Pin vertical profesional sobre ${tema}. ` +
        `Utilizar fotografía realista, iluminación clara y natural, composición limpia, ` +
        `estética premium, alto contraste y un título visual corto que genere curiosidad.`;
    }

    /*
    ============================================================
    RESPUESTA
    ============================================================
    */

    return res.status(200).json({
      objetivo: objetivoFinal,
      producto: productoNombre,
      titulo,
      descripcion,
      palabrasClave,
      cta,
      ideaVisual,

      prototipo: true,

      casosDemostracion: [
        "Ebook de crochet para principiantes",
        "Planner digital semanal",
        "Guía de marketing digital",
        "Guía de organización del hogar",
        "Recetario de comidas fáciles"
      ]
    });

  } catch (error) {
    console.error("PINIA ERROR:", error);

    return res.status(500).json({
      error: "Ocurrió un error al generar el contenido."
    });
  }
        }
