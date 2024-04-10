from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="./.env", env_file_encoding="utf-8")

    # Variables
    github_access: str = ""
    github_endpoint: str = ""
    github_owner: str = ""
    github_api_version: str = ""


# Caches the function, so it will be called once
@lru_cache
def get_settings():
    return Settings()

