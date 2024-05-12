from pydantic import BaseModel, StringConstraints
from typing_extensions import Annotated
from app.config import settings


class metaAttribute(BaseModel):
    text:  Annotated['str', StringConstraints(strip_whitespace=True)]
    # text: constr(strip_whitespace=True)

class Meta(BaseModel):
    description: metaAttribute = metaAttribute(
        text='Tiio Capital is website used to track loan'
    )

    keywords: metaAttribute = metaAttribute(
        text='loan, loan management,'
    )

    domain: metaAttribute = metaAttribute(
        text='www.golbez.com'
    )

    domain_name: metaAttribute = metaAttribute(
        text='Golbez'
    )

    # incoming_phone_number: metaAttribute = metaAttribute(
    #     text=settings.incoming_phone_number
    # )

    # outgoing_email: metaAttribute = metaAttribute(
    #     text=settings.outgoing_email
    # )

    # office_address: metaAttribute = metaAttribute(
    #     text=settings.office_address
    # )

    # all_rights_reserved: metaAttribute = metaAttribute(
    #     text="© 2024 Tiio Capital. All rights reserved."
    # )