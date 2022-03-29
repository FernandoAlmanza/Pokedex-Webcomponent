import { css } from "lit";

export const mainBgColor = css`#fe0065`;
export const secondaryBgColor = css`#f2f2f2`;
export const mainScreenBgColor = css`#98cb98`;
export const secondaryScreenBgColor = css`#9e9d9d`;
export const mainButtonsColor = css`#585858`;
export const squareButtonsColor = css`#7ca9f7`;
export const red = css`.red{background-color: #ff0000}`;
export const yellow = css`.yellow{background-color: #fecb65}`;
export const green = css`.green{background-color: #32cb65}`;
export const blue = css`.blue{background-color: #3298cb}`;
export const lightBlue = css`.light-blue{background-color: #85bdfe}`;
export const lightRed = css`.light-red{background-color: #fe98cb}`;
export const lightYellow = css`.light-yellow{background-color: #fefecb}`;
export const lightGreen = css`.light-green{background-color: #98fe00}`;

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
