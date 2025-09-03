# 🎬 API REST de Películas y Series  

![NodeJS](https://img.shields.io/badge/Node.js-18.0-green?logo=node.js)  
![Express](https://img.shields.io/badge/Express-API-blue?logo=express)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)  

Aplicación **API REST** desarrollada en **Node.js + Express + MongoDB Atlas** para gestionar:  
- 🎭 **Géneros**  
- 🎬 **Directores**  
- 🏢 **Productoras**  
- 🎞️ **Tipos** (Película o Serie)  
- 📺 **Media** (Películas y Series)  

---

## 🚀 Instalación y ejecución

## Clonar el repositorio

```bash
git clone https://
cd peliculas-api
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar el servidor

```bash
node src/app.js
```

# El servidor correrá en:
```bash
http://localhost:4000
```

**Si todo está correcto, verás en consola:** 
```bash
✅ MongoDB conectado
🚀 Servidor corriendo en http://localhost:4000
📂 Estructura del proyecto
```


```bash
src/
 ├── Controllers/      # Controladores (lógica de negocio)
 ├── Models/           # Modelos de Mongoose
 ├── Routes/           # Rutas de Express
 ├── app.js            # Configuración principal del servidor
```

```json
{
  "nombre": "Acción",
  "descripcion": "Películas con escenas intensas",
  "estado": true
}
```

# GET /api/generos → **Listar géneros**
# PUT /api/generos/:id → **Actualizar género**
# DELETE /api/generos/:id → **Eliminar género**


## 🎬 Directores
# POST /api/directores → **Crear director**

```json
{
  "nombres": "Christopher Nolan",
  "estado": true
}
```

# GET /api/directores
# PUT /api/directores/:id
# DELETE /api/directores/:id

## 🏢 Productoras
# POST /api/productoras → **Crear productora**

```json
{
  "nombre": "Warner Bros",
  "estado": true,
  "slogan": "Entertainment for everyone",
  "descripcion": "Una de las productoras más grandes del mundo"
}
```

# GET /api/productoras
# PUT /api/productoras/:id
# DELETE /api/productoras/:id

## 🎞️ Tipos
# POST /api/tipos → **Crear tipo**

```json
{
  "nombre": "Película",
  "descripcion": "Producción cinematográfica"
}
```

# GET /api/tipos
# PUT /api/tipos/:id
# DELETE /api/tipos/:id

## 📺 Media (Películas y Series)
# POST /api/media → **Crear una película o serie**

```json
{
  "serial": "M-001",
  "titulo": "Inception",
  "sinopsis": "Un ladrón roba secretos infiltrándose en sueños.",
  "url": "https://example.com/inception",
  "imagenPortada": "https://example.com/inception.jpg",
  "anioEstreno": 2010,
  "genero": "ID_DEL_GENERO",
  "director": "ID_DEL_DIRECTOR",
  "productora": "ID_DE_LA_PRODUCTORA",
  "tipo": "ID_DEL_TIPO"
}
```

# GET /api/media → **Lista todas las películas/series con populate (trae género, director, productora y tipo completos).**
# PUT /api/media/:id → **Actualizar.**
# DELETE /api/media/:id → **Eliminar.**

## 🛠️ Tecnologías usadas
- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**

## 🎥 Ejemplo de flujo de uso
1. **Crear un Género → Acción.**
2. **Crear un Director → Tom.**
2. **Crear una Productora → Warner Bros.**
4. **Crear un Tipo → Película.**
5. **Crear una Media → Inception, asociando los IDs anteriores.**
6. **Consultar con GET /api/media → verás la película con toda la info populada.**

# Ejemplo de respuesta del GET:
```json
[
  {
    "serial": "M-001",
    "titulo": "Inception",
    "anioEstreno": 2010,
    "genero": {
      "nombre": "Acción"
    },
    "director": {
      "nombres": "Tom Holland"
    },
    "productora": {
      "nombre": "Warner Bros"
    },
    "tipo": {
      "nombre": "Película"
    }
  }
]
```

## ✨ Autor
## Desarrollado por Nicolás Campillo C
**Universidad Digital de Antioquia – Ingeniería Web II.**


