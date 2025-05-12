# TAK24 Testimine

Lihtne TypeScript kalkulaatori rakendus koos testimisfunktsioonidega.

## Paigaldamine

```bash
bun install
```

## Käivitamine

```bash
bun run index.ts
```

## Testimine

Kõikide testide käivitamine:
```bash
bun test
```

Ühe testi käivitamine:
```bash
bun test tests/calc.test.ts
```

Kindla kirjeldusega testi käivitamine:
```bash
bun test --pattern "add"
```

## Tüüpide kontrollimine

```bash
bun run --bun tsc
```

## Koodistiil

Kood on vormindatud Prettier'i abil:
```bash
bunx prettier --write .
```

---

*Projekt on loodud kasutades `bun init` bun v1.2.8 abil. [Bun](https://bun.sh) on kiire kõik-ühes JavaScript runtime.*