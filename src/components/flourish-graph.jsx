import React from 'react'

function FlourishGraph({ src, height = "600px" }) {
  return (
    <iframe
      src={src}
      title="Interactive or visual content"
      className="flourish-embed-iframe"
      frameBorder="0"
      scrolling="no"
      style={{ width: "100%", height: height }}
      sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
    ></iframe>
  );
}

export default FlourishGraph