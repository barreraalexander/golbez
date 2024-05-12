from flask import Flask
from flask_assets import Environment
from app.utils.assets import bundles
from app.config import settings
from app.language import LanguagePack


assets = Environment()

def create_app(config_class=settings):
    app = Flask(__name__)

    app.config.from_object(config_class)

    assets.init_app(app)
    assets.register(bundles)
    
    # register the blueprints
    from app.blueprints.main.routes import router \
        as main_router
    
    app.register_blueprint(
        main_router,
    )


    @app.context_processor
    def load_language():
        return dict(language=LanguagePack())

    return app