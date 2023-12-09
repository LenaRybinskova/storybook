
```
npx storybook@latest init
```

storybook запускает отдельный свой сервер

если ошибка установки, почистить кэш npm (-- force значит принудительно)

```
npx cache clear -- force
```

если опять ошибка - удалить node_modules и  yarn.lock
```
yarn install
```
переоткрыть webshtorm.

поменять порт на 9009 "storybook": "storybook dev -p 9009",