import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename

import numpy as np
import pose

# There is an environment folder called '/env' in backend. Make sure you
# activate that environment first before you code anything as that will
# change imports.

UPLOAD_FOLDER = './vids'

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def receive_vid():
    input = request.files['file']
    input.save(os.path.join(UPLOAD_FOLDER, secure_filename(input.filename)))
    
    return "saved successfully"

@app.route('/compute_poses', methods=['POST'])
def call_pose():
    file_name = request.form['name']

    return pose.compute_poses(file_name)

