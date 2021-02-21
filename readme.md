# CPF

Format, validate and generate CPF numbers.


```ts
import { validate, format, generate } from 'https://deno.land/x/cpf/mod.ts'

// Validation
const valid = validate('363.552.510-30'); // true

// Formating
const formatted = format(36355251030) // 363.552.510-30

// Generation
const generated = generate(); // randomly generated, valid CPF
```

### License

[MIT License](/license)
