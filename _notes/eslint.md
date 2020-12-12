## Install
```
```


## Add rules
```
  npx install-peerdeps --dev eslint-config-airbnb
  npm i -D eslint
```

## .eslintrc
```
{
  "extends": "airbnb",
  "env": {
      // disable the complain to document undefined
      "browser": true,     
      "node": true 
  }
  "rules": {
    // disable warnning to React Class Component
    "react/prefer-stateless-function": "off"
  }
}
```

