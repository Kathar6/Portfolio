from fastapi import APIRouter, Depends

# Services
from backend.services.github import get_github_projects

from backend.config import get_settings

router = APIRouter(
    prefix="/projects",
    dependencies=[Depends(get_settings)]
)


@router.get("/")
async def get_projects():
    projects = get_github_projects()

    return projects
