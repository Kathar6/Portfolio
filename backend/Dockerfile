# Usa la imagen oficial de Python 3.14 slim
FROM python:3.14-slim

# Evita que Python escriba archivos .pyc y fuerza que los logs de consola se muestren directamente
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia unicamente el archivo de requerimientos
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código del proyecto
# (Es necesario para producción, pero en desarrollo puedes sobreescribirlo usando un volumen)
COPY . .

# Expone el puerto por el que FastAPI escuchará peticiones
EXPOSE 80

# Comando para iniciar la aplicación usando el CLI de FastAPI en modo producción
CMD ["fastapi", "run", "main.py", "--port", "80"]
