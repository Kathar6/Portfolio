# Usa la imagen oficial de Python 3.14 slim
FROM python:3.14-slim

# Evita que Python escriba archivos .pyc y fuerza que los logs de consola se muestren directamente
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ACTUALIZAMOS PIP
RUN pip install --upgrade pip

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia unicamente el archivo de requerimientos
COPY requirements.txt .

# Instala herramientas del sistema necesarias para compilar extensiones
# (pyiceberg, pyroaring y otras dependencias con código nativo necesitan gcc y headers)
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  build-essential \
  gcc \
  pkg-config \
  libffi-dev \
  libssl-dev \
  && rm -rf /var/lib/apt/lists/*

# Instala las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código del proyecto
# (Es necesario para producción, pero en desarrollo puedes sobreescribirlo usando un volumen)
COPY . .

# Expone el puerto por el que FastAPI escuchará peticiones
EXPOSE 80

# Comando para iniciar la aplicación usando el CLI de FastAPI en modo producción
CMD ["fastapi", "run", "app/main.py", "--port", "80"]
