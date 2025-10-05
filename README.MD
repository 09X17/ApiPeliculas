# 🎬 API de Películas y Series

API simple para gestionar películas, series y sus categorías.

## 🚀 Instalación

```bash
git clone ApiPeliculas
cd peliculas-api
npm install
node src/app.js
```

El servidor corre en: `https://apipeliculas-6end.onrender.com`

## 📋 Endpoints

### Géneros
- `POST /api/generos` - Crear género
- `GET /api/generos` - Listar géneros
- `PUT /api/generos/:id` - Actualizar
- `DELETE /api/generos/:id` - Eliminar

### Directores
- `POST /api/directores` - Crear director
- `GET /api/directores` - Listar directores

### Productoras  
- `POST /api/productoras` - Crear productora
- `GET /api/productoras` - Listar productoras

### Tipos
- `POST /api/tipos` - Crear tipo (Película/Serie)
- `GET /api/tipos` - Listar tipos

### Media
- `POST /api/media` - Crear película/serie
- `GET /api/media` - Listar todo el contenido

## 💡 Uso básico

1. Crear un género: `POST /api/generos`
```json
{
  "nombre": "Acción",
  "descripcion": "Películas con escenas intensas"
}
```

2. Crear una película: `POST /api/media`  
```json
{
  "serial": "M-001",
  "titulo": "Inception",
  "sinopsis": "Un ladrón en sueños",
  "url": "https://ejemplo.com/inception",
  "anioEstreno": 2010,
  "genero": "ID_GENERO",
  "director": "ID_DIRECTOR", 
  "productora": "ID_PRODUCTORA",
  "tipo": "ID_TIPO"
}
```

## 🛠️ Tecnologías
- Node.js + Express
- MongoDB + Mongoose

---
**Desarrollado por Nicolás Campillo**  
Universidad Digital de Antioquia

