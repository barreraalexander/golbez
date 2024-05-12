from pydantic import BaseModel
from .meta import Meta



class LanguagePack(BaseModel):
    meta: Meta = Meta()
    pass