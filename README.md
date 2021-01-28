# ESLINT CONFIG

## Install 

Установка последней версии пакета:
```
npm install @blaze-su/code-style
```

## ESLint

Подключение настроек `ESLint`

```js
// package.json

"eslintConfig": {
    "extends": ["@blaze-su/code-style"]
}
```

## VS Code
```js
// .vscode/settings.json

{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": true,
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ],
    "prettier.disableLanguages": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "markdown"
    ]
  }
```

##