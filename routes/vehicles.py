from flask import Blueprint, request, jsonify
from models import db, Vehicle

vehicles_blueprint = Blueprint("vehicles", __name__)

@vehicles_blueprint.route("/", methods=["GET"])
def get_all_vehicles():
    vehicles = Vehicle.query.all()
    result = [
        {
            "id": v.id,
            "owner_id": v.owner_id,
            "type": v.type,
            "location": v.location,
            "availability": v.availability,
        }
        for v in vehicles
    ]
    return jsonify(result), 200

@vehicles_blueprint.route("/", methods=["POST"])
def add_vehicle():
    data = request.json
    new_vehicle = Vehicle(
        owner_id=data["owner_id"],
        type=data["type"],
        location=data["location"],
        availability=True,
    )
    db.session.add(new_vehicle)
    db.session.commit()
    return jsonify({"message": "Vehicle added successfully"}), 201
