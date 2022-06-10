import { colors } from "../../Theme/colors";
import { typography } from "../../Theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.black
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.black
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.black
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 12
    },
    small: {
        ...BASE,
        fontSize: 12
    }
}