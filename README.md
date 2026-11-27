# Portfolio personal - Diego Pereyra

Mi portfolio como desarrollador web trainee. Es mi primer proyecto de desarrollo web, creado como parte de mi formación, y lo voy actualizando a medida que avanzo y sumo nuevos proyectos.

## Ver proyecto

El portfolio se encuentra publicado mediante GitHub Pages:

https://diegopereyrasilvetti.github.io/portfolio-diego-pereyra/

## Secciones

- **Sobre mí:** quién soy y mi recorrido, con un enlace a T&M Studio (la empresa donde trabajo actualmente, con su logo) y botón para descargar mi CV.
- **Proyectos:** un proyecto destacado (Gestión de stock) y los demás en una grilla. Cada uno tiene su demo, su código en GitHub, las tecnologías usadas y un botón "Leer el caso" que abre una ventana con el problema, qué hace, las decisiones técnicas y las tecnologías.
- **Certificaciones:** cursos de LinkedIn Learning completados: HTML avanzado, CSS avanzado, JavaScript esencial, Domina React, GitHub para desarrolladores, Visual Studio Code 2022 esencial, MySQL: Instalación y configuración, Node.js esencial y Claude: el asistente de IA para optimizar tu trabajo. Al hacer clic en cada uno se abre una ventana modal con el certificado.
- **Tecnologías:** HTML, CSS, JavaScript, Tailwind CSS, React, Node.js y Git.
- **Herramientas:** GitHub, Visual Studio Code, Jira y Vercel.
- **Contacto:** mail directo y formulario de contacto.

## Proyectos

Son proyectos personales que estoy desarrollando.

| Proyecto | Descripción | Tecnologías | Demo | Código |
|---|---|---|---|---|
| E-commerce | Tienda online de hardware de PC con buscador, carrito, cuentas de usuario y API propia. | React, Vite, Node.js, Express, Supabase, PostgreSQL, Tailwind CSS, Zod, Helmet | [Ver](https://ecommerce-chi-hazel.vercel.app/) | [GitHub](https://github.com/diegopereyrasilvetti/E-commerce) |
| Sitio web de hotel | Sitio de un hotel en Bariloche con página de habitaciones, ventanas modales, formulario de reserva y mapa de ubicación. | React, Vite, Tailwind CSS | [Ver](https://hotelwebsite-vert.vercel.app/) | [GitHub](https://github.com/diegopereyrasilvetti/Hotel-Website) |
| Gestión de stock | Aplicación para organizar el stock de una empresa pequeña: inventario, productos, proveedores, ventas, gastos y balances, con alertas. | React, Vite, Node.js, Express, Supabase, PostgreSQL, Tailwind CSS, Zod, Helmet | [Ver](https://inventory-management-sigma-henna.vercel.app/) | [GitHub](https://github.com/diegopereyrasilvetti/inventory-management) |

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (menú hamburguesa, ventanas modales de certificados y casos de estudio, barra de progreso, header animado, sección activa del menú y fondo animado en canvas)
- Tailwind CSS (cargado desde CDN con `@tailwindcss/browser`, sin paso de build)
- Git y GitHub
- Formspree (envío del formulario de contacto)
- Font Awesome y Google Fonts

## Características

- Estructura HTML semántica
- Diseño responsive, probado desde 320 px de ancho
- Navegación entre secciones, con menú hamburguesa a pantalla completa en celulares y tablets
- Descarga de CV y botón para volver arriba en el footer
- Fondo animado de partículas conectadas que reaccionan al cursor (canvas, sin librerías). Se desactiva el movimiento si el sistema pide reducir animaciones y se pausa cuando la pestaña no está visible
- Barra de progreso de lectura arriba de la página, que avanza a medida que se hace scroll
- Header fijo: arriba de todo se ve normal y, al hacer scroll, se encoge por los laterales como una píldora flotante con contorno sutil y fondo translúcido con desenfoque
- Menú que subraya la sección en la que estás mientras hacés scroll
- Animación de entrada del header: el título aparece con un fade suave y el subtítulo se despliega después
- Foto de perfil circular
- Favicon propio
- Casos de estudio de cada proyecto en una ventana modal ("Leer el caso")
- Nueve certificados visibles en una ventana modal
- Formulario de contacto funcional, sin backend propio

## Estructura del proyecto

```
index.html                          Página principal
styles/style.css                    Estilos base (el resto del diseño usa clases de Tailwind en index.html)
js/main.js                          Menú hamburguesa, modales de certificados y casos de estudio, barra de progreso, header al hacer scroll y sección activa del menú
js/gravity.js                       Fondo animado de partículas con canvas
tailwind.config.js                  Vacío y sin uso: Tailwind por CDN no lo lee
images/                             Logos, foto de perfil, capturas de los proyectos y favicon
cursos/                             Imágenes de los certificados
CV_Diego_Pereyra_IT_v4_foto.pdf     CV descargable
```

## Sobre mí

Soy desarrollador web trainee y autodidacta. Actualmente trabajo en T&M Studio, en un equipo de desarrollo, donde pongo en práctica lo que aprendo y sigo sumando experiencia día a día.

Trabajo con HTML, CSS, JavaScript, Tailwind, React, Node.js, Git y bases de datos relacionales y no relacionales, y aprendo con cursos en YouTube y LinkedIn Learning. Vengo de trabajar en depósito, producción y control de procesos, donde aprendí a ser ordenado, a revisar el trabajo antes de darlo por terminado y a buscar la causa de los problemas.
