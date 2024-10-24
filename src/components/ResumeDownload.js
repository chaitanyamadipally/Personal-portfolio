import { useState } from 'react';

const ResumeDownload = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/CM_Resume.pdf';  
    link.download = 'Chaitanya_Resume.pdf'; 
    link.click(); // Trigger the download

    setIsOpen(false); // Close popup after download
  };

  return (
    <>
      <button className="vvd" onClick={() => setIsOpen(true)}><span>Resume</span></button>

      {/* Popup for confirmation */}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            {/* <h3>Download Resume</h3> */}
            <p>Would you like to download the resume?</p>
            <button onClick={handleDownload}>Yes, Download</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeDownload;
