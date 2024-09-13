# Open-Coding de Prisma ORM

Neste open-coding nós exploramos algumas das várias funcionalidades que o [Prisma ORM](https://www.prisma.io/docs) nos trás. 

# Get started

## Instalando dependências

Para rodar o projeto, você pode rodar:

```bash
npm i
```

## Criando env

Para criar o banco de dados você precisa criar um arquivo `.env` na raiz do seu projeto. Crie esse arquivo e insira o conteúdo:

```text
DATABASE_URL="file:../db/dev.db"
```

## Rodando migrations

Se você ainda não criou o banco de dados, esse comando vai criar o banco para você automaticamente. Este comando também vai ser usado para atualizar seu banco com novas migrations que forem criadas.

### Com seed

```bash
npx prisma migrate dev
```

### Sem seed

```bash
npx prisma migrate dev --skip-seed
```

## Editando exemplos

Dentro do arquivo [src/script.ts](./script.ts) você vai encontrar o código base que vamos utilizar para executar os exemplos. Todos os exemplos estão dentro da função `main` comentados, basta você ir descomentando e executando o projeto com o comando da próxima seção.

## Rodando projeto

Para rodar o script você pode executar:

```bash
npm run dev
```

## Abrindo o prisma studio

Para abrir o prisma studio rode o comando:

```bash
npx prisma studio
```

## Executando seed

Para servir de exemplo de seed nós configuramos um comando de seed para o prisma no `package.json` utilizando o arquivo `seed.ts` como seed. Para diretamente executar a seed use o comando:

```bash
npx prisma db seed
```

# Links

- [Prisma Docs](https://www.prisma.io/docs)