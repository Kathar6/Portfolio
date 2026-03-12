from supabase import Client, create_client

from src.config import get_settings


def get_supabase_client() -> Client:
    settings = get_settings()
    return create_client(settings.master_url, settings.master_key)


supabase = get_supabase_client()
