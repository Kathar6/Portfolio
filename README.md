# Portafolio

Este repositorio contiene un portafolio personal que permite mostrar experiencia,
habilidades y proyectos realizados a lo largo de los anos. La aplicacion tiene una
parte frontend (Next.js) y una API backend (FastAPI) que sirve datos de proyectos.

Estructura principal:

- `frontend/` - aplicacion Next.js (React + TypeScript + Tailwind).
- `backend/` - API en Python (FastAPI). Contiene el codigo en `backend/app/`.

Requisitos basicos:

- Node.js (v18+ recomendado) y npm/yarn/pnpm para el frontend.
- Python 3.10+ para el backend.
- Docker (opcional) si se prefiere ejecutar el backend en contenedor.

Frontend - comandos comunes (en `frontend/`):

- Instalar dependencias:
  `npm install`  # o `yarn` / `pnpm install`
- Desarrollo (hot-reload):
  `npm run dev`
- Construir para produccion:
  `npm run build`
- Iniciar servidor de produccion:
  `npm run start`
- Lint:
  `npm run lint`

Backend - comandos comunes (desde la raiz `backend/`):

- Crear y activar entorno virtual:
  `python -m venv .venv`
  `source .venv/bin/activate`  # Linux / macOS
  `.venv\Scripts\activate`    # Windows (PowerShell/CMD)
- Instalar dependencias:
  `pip install -r requirements.txt`
- Ejecutar en modo desarrollo (uvicorn, recarga automatica):
  `cd app`
  `uvicorn main:app --reload --port 8000`

Alternativa: usar la utilidad de FastAPI (si esta instalada):
  `cd app`
  `fastapi dev main.py`

Backend con Docker (opcional):

- Build imagen de desarrollo:
  `docker build -f Dockerfile.dev -t portfolio-backend:dev .`
- Ejecutar contenedor:
  `docker run -p 8000:8000 portfolio-backend:dev`

Notas y siguientes pasos:

- El frontend se conecta a la API del backend para obtener datos de proyectos.
- Si se despliega en produccion, revisar variables de entorno y puertos.
- Se pueden añadir scripts de test (por ejemplo `vitest`) en `frontend/` si
  se requiere testing automatizado.

Contacto / mantenimiento:

- Si necesitas que actualice este README con variables de entorno, ejemplos de
  peticiones a la API o instrucciones de despliegue concretas, dime que prefieres
  y lo agrego.
