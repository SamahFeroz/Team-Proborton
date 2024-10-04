from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import cv2
from keras.models import load_model

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model
model = load_model('plant_disease_model.h5')

# Class names
CLASS_NAMES = ('Corn-Common_rust', 'Potato-Barly blight', 'Tomato-Bacterial_spot')

# Endpoint for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided.'}), 400

    file = request.files['file']
    
    # Read the image file
    img_array = np.fromstring(file.read(), np.uint8)
    opencv_image = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    
    if opencv_image is None:
        return jsonify({'error': 'Unable to read the image.'}), 400

    # Preprocess the image
    opencv_image = cv2.resize(opencv_image, (256, 256))
    opencv_image = np.expand_dims(opencv_image, axis=0)

    # Make prediction
    Y_pred = model.predict(opencv_image)
    result = CLASS_NAMES[np.argmax(Y_pred)]
    
    # Example treatment recommendations (you might want to customize this)
    treatment = "Use appropriate treatments as per the disease detected."

    return jsonify({'disease': result, 'treatment': treatment})

if __name__ == '__main__':
    app.run(debug=True)
