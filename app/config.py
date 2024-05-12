from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    debug: bool = True
    SECRET_KEY: str
    server_port: int
    service_location: str


settings = Settings()