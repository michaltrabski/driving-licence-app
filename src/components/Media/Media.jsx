import React from "react";

const Media = props => {
  const path = "https://poznaj-testy.pl/wp-content/uploads/media/";

  return (
    <>
      {props.q.m.indexOf(".wmv") === -1 ? (
        <img className="img-thumbnail" src={path + props.q.m} alt="imagasde" />
      ) : (
        <div className="embed-responsive embed-responsive-16by9">
          <video className="embed-responsive-item" controls>
            <source
              src={path + props.q.m.replace(".wmv", ".mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
};

export default Media;
