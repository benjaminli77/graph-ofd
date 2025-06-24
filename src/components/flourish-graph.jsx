import React from 'react'

function FlourishGraph({ src, height = "600px" }) {
  return (
    <div className='border border-gray-200 rounded-lg p-4'>
      <iframe
        src={src}
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        frameBorder="0"
        scrolling="no"
        style={{ width: "100%", height: height }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
    </div>
  );
}

export default FlourishGraph