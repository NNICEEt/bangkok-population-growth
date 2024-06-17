import { DARKGRAY, WHITE } from "common/foundation/color";
import { font16 } from "common/foundation/typography";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
		margin: 0;
		${font16}
	}

    #root {
        min-height: 100vh;
        padding: 28px 20px;
        background-color: ${DARKGRAY};
        color: ${WHITE};

        position: relative;     
        overflow-x: hidden;
    }
`;
