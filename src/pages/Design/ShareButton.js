import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Snackbar from "../../shared/components/Snackbar";

function encodeData(data) {
  return Object.keys(data)
    .map(function(key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
    })
    .join("&");
}

const ShareButton = ({
  width,
  height,
  color,
  posts,
  beams,
  type,
  children,
  ...otherProps
}) => {
  const input = useRef();
  const [showToast, setShowToast] = useState(false);

  const link = `${window.location.host}/preview/${encodeData({
    width,
    height,
    color,
    posts,
    beams,
    type
  })}`;
  console.log(link);

  const handleClick = () => {
    input.current.select();
    console.log(input.current);
    document.execCommand("copy");
    setShowToast(true);
  };

  return (
    <>
      <Button {...otherProps} onClick={handleClick}>
        {children}
      </Button>
      <InvisibleInput ref={input} value={link} readOnly />
      {showToast && (
        <Snackbar
          variant="success"
          message={
            <span>
              <a href={link} target="_blank">
                Link
              </a>{" "}
              copied to clipboard! 😊
            </span>
          }
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { width, height, color, posts, beams, type } = state.configurator;
  return {
    width,
    height,
    color,
    posts,
    beams,
    type
  };
};

export default connect(
  mapStateToProps,
  null
)(ShareButton);

const Button = styled.button`
  padding: 6px 18px;
  width: auto;

  border-radius: 4px;
  background: rgba(194, 207, 216, 1);

  text-transform: uppercase;
  font-size: 8px;
  line-height: 10px;
  color: rgba(255, 255, 255, 1);
`;

const InvisibleInput = styled.input`
  display: inline-block;
  width: 1;
  height: 1;
  opacity: 0;
`;
