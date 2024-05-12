from flask_assets import Bundle

bundles = {

    'main_scss': Bundle(
        'scss/main.scss',
        filters='libsass',
        depends=[
            'scss/*.scss',
            'scss/base/*.scss',
            'scss/pages/*.scss',
        ],
        output='gen/css/main.%(version)s.css'

    ),

    'main_js': Bundle(
        'js/base/base.js',
        'js/base/variables.js',
        'js/base/body_event_listeners.js',

        'js/animations/index.js',
        depends=[
            'js/base/*js'
            'js/animations/*js'
            # 'js/pages/*js'
        ],
        output='gen/js/main.%(version)s.js'
    )



}