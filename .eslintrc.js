export default {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true // 确保 process 被识别为全局变量
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		process: true
	},
	extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["vue"],
	rules: {
		"prettier/prettier": "error",
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"space-before-function-paren": "off",
		"vue/multi-word-component-names": "off",
		"max-len": ["error", { code: 120 }],
		"function-paren-newline": ["error", "multiline"]
	}
};
