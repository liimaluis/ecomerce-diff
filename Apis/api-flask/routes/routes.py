from flask import Flask


@app.route('/pets', methods=['POST'])
def create_pet():
    pet_data = request.json

    pet_name = pet_data['pet_name']
    pet_type = pet_data['pet_type']
    pet_age = pet_data['pet_age']
    pet_description = pet_data['pet_description']

    pet_description = pet_data['pet_description']
    pet = Pet(pet_name=pet_name, pet_type=pet_type,
              pet_age=pet_age, pet_description=pet_description)
    db.session.add(pet)
    db.session.commit()

    return jsonify({"success": True, "response": "Pet added"})


@app.route('/todaspessoa', methods=['GET'])
def getpets():
    all_pessoa = []
    pessoa = Pessoa.query.all()
    for pet in pessoa:
        results = {
            "pessoa_id": pessoa.id,
            "pessoa_name": pessoa.pessoa_name,
            "pessoa_age": pessoa.pessoa_age,
            "pessoa_email": pessoa.pessoa_email}
        all_pessoa.append(results)

    return jsonify(
        {
            "success": True,
            "pessoa": all_pessoa,
            "total_pessoa": len(pessoa),
        }
    )


@app.route("/pets/<int:pet_id>", methods=["PATCH"])
def update_pet(pet_id):
    pet = Pet.query.get(pet_id)
    pet_age = request.json['pet_age']
    pet_description = request.json['pet_description']

    if pet is None:
        abort(404)
    else:
        pet.pet_age = pet_age
        pet.pet_description = pet_description
        db.session.add(pet)
        db.session.commit()
        return jsonify({"success": True, "response": "Pet Details updated"})
