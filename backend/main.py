from typing import Annotated

from fastapi import Depends, FastAPI

from .config import Settings, get_settings
from .routers.projects import router as project_router

app = FastAPI()

app.include_router(project_router)
