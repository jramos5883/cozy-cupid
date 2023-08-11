import React from "react";

const DropboxVideoEmbed = ({ videoLink }) => {
  // Convert the shareable link to a direct link
  const directLink = videoLink.replace(
    "www.dropbox.com",
    "dl.dropboxusercontent.com"
  );

  return (
    <video width="1000" height="1000" controls>
      <source src={directLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default DropboxVideoEmbed;
