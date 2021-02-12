# CPF

Format, validate and generate CPF numbers.


```ts
import { validate, format, generate } from 'https://deno.land/x/cpf/mod.ts'

// Validation
const valid = validate('100.496.526-00'); // true

// Formating
const formatted = format(10049552600) // 100.495.526-00

// Generation
const generated = generate(); // randomly generated, valid CPF
```

### License

[MIT License](/license)
