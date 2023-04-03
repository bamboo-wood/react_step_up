/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css`
    margin: 0;
    color: #3d84a8;
  `;

  const buttonStyle = css`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
  `;

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button css={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
