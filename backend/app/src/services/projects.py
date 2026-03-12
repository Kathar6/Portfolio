from src.services.supabase_client import supabase

from src.config import get_settings


class ProjectsService:
    def __init__(self) -> None:
        self.db = supabase

    def get_all_projects(self):
        return (
            self.db.table("projects")
            .select("name, description, url, repo_url, is_private")
            .execute()
        )

    def get_project(self, id: int):
        return (
            self.db.table("projects")
            .select("name, description, url, repo_url, is_private")
            .eq("id", id)
        )


projects_service = ProjectsService()
