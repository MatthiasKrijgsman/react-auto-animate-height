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

![example](https://github.com/MatthiasKrijgsman/react-auto-animate-height/assets/9784025/f9196964-c397-4e82-bd21-e48260b2bb83)

## License

MIT © [MatthiasKrijgsman](https://github.com/MatthiasKrijgsman)
