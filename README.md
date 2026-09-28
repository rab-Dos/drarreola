# Sitio web del Dr. Atzin Jahir Arreola Aguilar

Sitio informativo y de contacto para el Dr. Atzin Jahir Arreola Aguilar, ortopedista y traumatólogo con alta especialidad en cirugía articular en Ciudad de México (Activo de 2023 a 2025).

## Descripción

La página presenta el perfil profesional del médico, su experiencia y las áreas de atención que promociona, como cirugía articular, artroscopia, lesiones deportivas, prótesis, fracturas y traumatismos. También facilita la solicitud de citas e información mediante Doctoralia, WhatsApp, teléfono y correo electrónico, e incluye ubicación, horarios y enlaces a redes sociales.

## Tecnologías

- HTML para la estructura del sitio.
- Tailwind CSS para estilos y diseño adaptable.
- JavaScript para interacciones, fondos animados y movimiento de los textos destacados.
- Anime.js para animaciones.

## Desarrollo

1. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

2. Genera el CSS de Tailwind:

   ```bash
   npm run build
   ```

   El script genera `dist/css/output.css` y permanece en modo observación (`--watch`) para actualizar el CSS mientras editas los archivos fuente. Mantén el proceso activo durante el desarrollo.

3. Sirve la carpeta del proyecto con un servidor web estático local y abre `index.html`. El sitio referencia el CSS generado en `dist/css/output.css` y carga Anime.js desde un CDN.

## Estructura principal

- `index.html`: página principal, información profesional, servicios y contacto.
- `src/css/`: hojas de estilo y entrada de Tailwind.
- `src/js/`: interacciones y animaciones del sitio.
- `src/images/`: fotografías e iconografía.
- `public/fonts/`: archivos de tipografía.
- `cdn/`: imagen para compartir y vista previa del sitio.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE).
