from flask import Flask, request, jsonify, render_template
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('predictive-climate-analytics.html')

@app.route('/run_analysis', methods=['POST'])
def run_analysis():
    # Load your dataset
    data = pd.read_csv('weather_data.csv')
    
    # Define features and label
    features = ['rainfall (mm)', 'temperature (°C)', 'humidity (%)', 'soil_moisture (%)', 'river_levels (m)']
    X = data[features]
    y = data['label']

    # Train the model (if not already trained, consider moving this outside the endpoint)
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)

    # Make predictions and calculate probabilities
    predictions = model.predict(X)
    probabilities = model.predict_proba(X)

    # Create a DataFrame for results
    results_df = pd.DataFrame(X, columns=features)
    results_df['Prediction'] = predictions

    for i, label in enumerate(model.classes_):
        results_df[f'Probability_{label} (%)'] = probabilities[:, i] * 100

    # Generate basis for prediction
    results_df['Basis for Prediction'] = [
        f"Flood likely due to high rainfall ({row['rainfall (mm)']} mm) and humidity ({row['humidity (%)']}%)" if row['Prediction'] == 'Flood' else \
        f"Deluge likely due to high humidity ({row['humidity (%)']}%)" if row['Prediction'] == 'Deluge' else \
        f"Drought likely due to low rainfall ({row['rainfall (mm)']} mm)"
        for _, row in results_df.iterrows()
    ]

    # Convert results to JSON
    result_json = results_df.to_dict(orient='records')

    # Send JSON response
    return jsonify(result_json)

if __name__ == '__main__':
    app.run(debug=True)
