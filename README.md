# reckonsys-charts

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/reckonsys-charts.svg)](https://www.npmjs.com/package/reckonsys-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

1. Add this line in your `package.json`

```
"ReckonsysCharts": "git+https://github.com/CodeNinja47/ReckonsysCharts.git"
```

2. Run

```bash
yarn install
```

## Usage

```jsx
import React, { Component } from 'react';

import { ReckonsysCharts } from 'ReckonsysCharts';
import 'ReckonsysCharts/dist/index.css';

const options = {
    width: 350,
    height: 350,
    data: [
        {
            label: "water",
            val: 5,
            color: "#57d9ff"
        },
        {
            label: "mobile",
            val: 3,
            color: "#f16e23"
        },
        {
            label: "bulb",
            val: 1,
            color: "#ff00bf"
        },
        {
            label: "wire",
            val: 2,
            color: "#937e88"
        }
    ]
}

function Example () {
  return <ReckonsysCharts options={options} />
}
```

## License

MIT © [Reckonsys](https://github.com/Reckonsys)
