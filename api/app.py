from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:mysecretpassword@db:5432/counter'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Visit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    count = db.Column(db.Integer, default=0)
    environment = db.Column(db.String(50))

@app.route('/')
def hello():
    visit = Visit.query.first()
    if visit:
        visit.count += 1
        db.session.commit()
        
    return jsonify({
        'message': 'Hola Mundo',
        'visits': visit.count,
        'environment': visit.environment
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0')