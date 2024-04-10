import requests

from backend.config import get_settings

def get_github_projects():
    settings = get_settings()

    headers = {
        "Authorization": f"Bearer {settings.github_access}",
        "X-Github-Api-Version": settings.github_api_version
    }

    # Request the github endpoint
    response = requests.get(f"{settings.github_endpoint}/repositories", headers=headers)

    return response.json()
