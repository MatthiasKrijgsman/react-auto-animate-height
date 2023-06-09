# react-auto-animate-height

> Automatically animate height based on its children

[![NPM](https://img.shields.io/npm/v/react-auto-animate-height.svg)](https://www.npmjs.com/package/react-auto-animate-height) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-auto-animate-height
```

## Usage

```tsx
import React, { Component } from 'react'

import AutoAnimateHeight from 'react-auto-animate-height'

const Example = ({ children }) => {
  return (
    <div className={'card'}>
      <AutoAnimateHeight>
        { children }
      </AutoAnimateHeight>
    </div>
  )
}
```

## Result

[![example-3](https://github.com/MatthiasKrijgsman/react-auto-animate-height/assets/9784025/3ea9e71f-e248-49a5-8d91-6a57009387df)](https://github.com/MatthiasKrijgsman/react-auto-animate-height/assets/9784025/c5cea13f-98a8-4942-ad88-c119b677de24)

## License

MIT © [MatthiasKrijgsman](https://github.com/MatthiasKrijgsman)
