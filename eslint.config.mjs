import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        rules: {
        },
        ignores: ["**/node_modules/ .dist/"],
        languageOptions: { globals: globals.node },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];