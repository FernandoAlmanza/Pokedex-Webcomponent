import { css } from "lit";

export const mainBgColor = css`#fe0065`;
export const secondaryBgColor = css`#f2f2f2`;
export const mainScreenBgColor = css`#98cb98`;
export const secondaryScreenBgColor = css`#9e9d9d`;
export const mainButtonsColor = css`#585858`;
export const squareButtonsColor = css`#7ca9f7`;
export const red = css`.red{background-color: #ff0000}`;
export const yellow = css`#fecb65`;
export const green = css`#32cb65`;
export const blue = css`#3298cb`;
export const lightBlue = css`#85bdfe`;
export const lightRed = css`#fe98cb`;
export const lightYellow = css`#fefecb`;
export const lightGreen = css`#98fe00`;

export const generalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--secondary-bg-color);
  }

  .search-container {
    width: 100%;
    height: 80px;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
