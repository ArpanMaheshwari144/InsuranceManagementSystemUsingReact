import React, { useState } from 'react';
import axios from 'axios';

const ExcelUploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first');
            return;
        }

        // accessing form data
        const formData = new FormData();
        formData.append('file', file);

        try {
            // calling api
            const response = await axios.post('http://localhost:8081/product/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload successful:', response.data);
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error.response ? error.response.data : error.message);
            alert('Failed to upload file');
        }
    };

    return (
        <div>
            <h2>Upload Excel File</h2>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ExcelUploadFile;
