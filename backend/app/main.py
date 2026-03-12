from fastapi import FastAPI
from pydantic import BaseModel

from src.routers.projects import router as project_router

app = FastAPI()

app.include_router(project_router)
