// components/AvatarUploadForm.js
import React, { useState } from 'react';

const ImageUploader = () => {
    const [profilePic, setProfilePic] = useState('')
    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile)); // Display the selected image
  };

  const handleRemove = () => {
    setFile(null);
  };
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {file && (
                <div>
                <img src={file} alt="Selected Avatar" />
                <button onClick={handleRemove}>Remove</button>
                </div>
            )}
    </div>
    );
}
 
export default ImageUploader;



