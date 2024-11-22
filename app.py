from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

# Flask 애플리케이션 설정
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///autotaxi.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 데이터베이스 및 CORS 설정
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

# 라우트 등록
from routes.vehicles import vehicles_blueprint
from routes.reservations import reservations_blueprint
from routes.users import users_blueprint

app.register_blueprint(vehicles_blueprint, url_prefix="/vehicles")
app.register_blueprint(reservations_blueprint, url_prefix="/reservations")
app.register_blueprint(users_blueprint, url_prefix="/users")

if __name__ == '__main__':
    app.run(debug=True)
