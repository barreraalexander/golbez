from flask import Blueprint, render_template

router = Blueprint(
    'main_view',
    __name__
)


@router.route('/')
def index():
    
    return render_template(
        'index.html',
        title='Welcome',
    )