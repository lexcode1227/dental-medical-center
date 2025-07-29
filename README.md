# 🦷 Clínica Médica Dental

Bienvenido al repositorio del proyecto **Clínica Médica Dental**, una solución web moderna y profesional para la gestión y promoción de una clínica dental y médica. Este proyecto ha sido desarrollado con el objetivo de ofrecer una experiencia digital completa tanto para pacientes como para el personal administrativo y médico.

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características Principales](#características-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Guía de Uso](#guía-de-uso)
- [Personalización](#personalización)
- [Despliegue](#despliegue)
- [Preguntas Frecuentes](#preguntas-frecuentes)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Descripción General

**Clínica Médica Dental** es una plataforma web diseñada para clínicas odontológicas y médicas que buscan digitalizar su presencia, facilitar la interacción con pacientes y optimizar la gestión de servicios. El sitio está construido utilizando Astro y [Tailwind CSS](https://tailwindcss.com/), lo que garantiza un rendimiento óptimo, diseño responsivo y facilidad de personalización.

El proyecto está enfocado en la experiencia del usuario, la accesibilidad y la facilidad de administración de contenidos.

---

## Características Principales

- **Página de Inicio Atractiva:** Presentación clara de la clínica, sus valores y servicios destacados.
- **Sección de Servicios:** Detalle de todos los servicios médicos y dentales ofrecidos, con descripciones, imágenes y beneficios.
- **Blog Informativo:** Espacio para publicar artículos, noticias y consejos de salud bucal y general, con soporte para categorías y etiquetas.
- **Formulario de Contacto:** Permite a los pacientes enviar consultas o solicitar citas de manera sencilla y segura.
- **Gestión de Citas:** Integración para agendar citas en línea (puede conectarse con sistemas externos o gestionarse manualmente).
- **Equipo Médico:** Presentación del staff profesional con perfiles, especialidades y experiencia.
- **Testimonios de Pacientes:** Sección para mostrar opiniones y experiencias de pacientes satisfechos.
- **Optimización SEO:** Estructura preparada para un buen posicionamiento en buscadores y redes sociales.
- **Modo Oscuro/Claro:** Interfaz adaptable a las preferencias del usuario.
- **Adaptabilidad Móvil:** Diseño completamente responsivo para cualquier dispositivo.
- **Redes Sociales:** Enlaces directos a los perfiles sociales de la clínica.
---

## Estructura del Proyecto
La estructura del proyecto está organizada para facilitar el desarrollo, la personalización y el mantenimiento. A continuación se describen los directorios y archivos principales:


2. Navega al directorio del proyecto:
   ```bash
   cd clinica-médica-dental
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Abre tu navegador y navega a `http://localhost:4321` para ver el sitio en modo desarrollo.

### Construcción para Producción

1. Construye el sitio para producción:
   ```bash
   npm run build
   ```

2. Los archivos generados se encontrarán en la carpeta `dist/`.

### Personalización

1. **Contenido:**
   - Todas las páginas y secciones están organizadas en el directorio `src/content/`.
   - Para agregar nuevos artículos al blog, crea un nuevo archivo en `src/content/blog/`.
   - Para modificar la información de servicios, edita `src/content/services/`.
   - Para actualizar el equipo, modifica `src/content/team/`.

2. **Estilos:**
   - Los estilos globales se encuentran en `src/styles/`.
   - Puedes modificar los colores, fuentes, espaciados, etc.
   - Para agregar nuevos estilos, crea un nuevo archivo en `src/styles/`.

3. **Componentes:**
   - Los componentes reutilizables se encuentran en `src/components/`.
   - Puedes modificar sus estilos, comportamientos o estructura.
   - Para crear nuevos componentes, crea un nuevo archivo en `src/components/`.

### Despliegue

1. Para desplegar el sitio en un servidor web, necesitas:
   - Un servidor web (como Nginx, Apache, etc.)
   - Una base de datos (si es necesario)
   - Configurar el servidor para servir los archivos de la carpeta `dist/`.

2. Ejemplo de configuración de Nginx:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           root /path/to/your/dist;
           index index.html;
       }
   }
   ```

### Preguntas Frecuentes

1. **¿Cómo puedo agregar un nuevo servicio?**
   - Crea un nuevo archivo en `src/content/services/` con el nombre del servicio.
   - Asegúrate de incluir la descripción, precio, duración, etc.

2. **¿Qué es el modo oscuro?**
   - El modo oscuro es una funcionalidad que permite cambiar el tema de la interfaz a un fondo oscuro.
   - Esto se puede personalizar en `src/styles/` o en el archivo `astro.config.mjs`.

3. **¿Cómo puedo contactar con la clínica?**
   - El formulario de contacto se encuentra en `src/pages/contact.astro`.
   - Puedes modificar el contenido y el diseño de la página.

### Contribuciones

1. Si encuentras un bug o tienes una sugerencia de mejora, por favor, abre un issue en el repositorio.
2. Si deseas contribuir con código, sigue estos pasos:
   - Haz un fork del repositorio.
   - Crea una rama para tu nueva funcionalidad.
   - Realiza los cambios necesarios.
   - Abre un pull request.

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
