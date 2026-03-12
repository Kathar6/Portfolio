from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Variables
    master_url: str = ""
    master_key: str = ""

    model_config = SettingsConfigDict(env_file="./.env", env_file_encoding="utf-8")


# Caches the function, so it will be called once
@lru_cache
def get_settings():
    return Settings()
