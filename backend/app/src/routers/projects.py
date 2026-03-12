from fastapi import APIRouter

# Services
from src.services.projects import projects_service

router = APIRouter(prefix="/projects")


@router.get("/")
async def get_projects():
    service = projects_service

    data = service.get_all_projects()

    return data
