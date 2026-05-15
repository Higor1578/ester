# Ester: SaaS de Agendamento para Salão de Beleza

Projeto Next.js moderno para agendamento de manicure e salão de beleza. Ele é mobile-first, PWA e pronto para deploy em Vercel.

## Funcionalidades
- Interface premium mobile-first
- Login / cadastro com Supabase
- Agendamento online com calendário
- Dashboard para clientes e admin/manicure
- PWA instalável
- Dark/Light mode

## Rodando localmente

1. Instale dependências:

```bash
npm install
```

2. Crie um projeto no Supabase e defina as variáveis de ambiente em `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

3. Inicie em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse `http://localhost:3000`

## Estrutura de banco de dados

Execute o arquivo `supabase-schema.sql` no SQL editor do Supabase.

## Deploy

Recomendamos deploy direto no Vercel. O app já está pronto para produção com `next build`.
