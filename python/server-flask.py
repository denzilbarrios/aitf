from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/apipy/data', methods=['GET'])
def get_data():
    # Aquí puedes realizar tu análisis y devolver los resultados
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
