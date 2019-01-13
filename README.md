# react-typescript-starter
Based on react-redux-typescript-boilerplate
Example application of reactjs

## DEVELOPMENT

### Environment variables
* `env_name` environment file
* `webpack_devtool` webpack devtool option

### Environment Preset 1
```
set webpack_devtool=0
```

### Resources
* https://github.com/NoamELB/react-hot-loader-loader
* https://github.com/sokra/rawact
* State Managers
  * https://github.com/tock203/clax
  * https://github.com/eserozvataf/react-eventmanager
  * https://github.com/gunn/pure-store
  * https://github.com/davidgilbertson/react-recollect
  * https://github.com/Niryo/controllerim
  * https://github.com/diegohaz/constate
  * https://github.com/bcherny/undux
  * https://github.com/rematch/rematch
  * https://github.com/jamiebuilds/unstated
  * https://github.com/pedronauck/reworm
  * https://github.com/jeffijoe/mobx-task
  * https://github.com/BrodaNoel/duix
  * https://github.com/jaysoo/storebag
* React Example App
  * https://github.com/coryhouse/react-slingshot
  * https://github.com/markerikson/project-minimek
  * https://github.com/gothinkster/react-redux-realworld-example-app
  * https://github.com/jferrettiboke/react-auth-app-example
  * https://github.com/MikhailSemichev/vote-app
  * https://github.com/UruIT/react-seed

## DEBUG
```
node --inspect node_modules\webpack\bin\webpack.js --env.libs --progress
node --inspect node_modules/webpack-dev-server/bin/webpack-dev-server --hot --inline
```

## TODO
* ts-jest transpile only
* remove jest
* lazy loading (react-loadable)
* table of countries
* more eslint plugins
