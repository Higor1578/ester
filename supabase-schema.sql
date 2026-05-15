-- Tabela de usuários
create table if not exists profiles (
  id uuid primary key,
  email text not null unique,
  full_name text,
  role text default 'client',
  phone text,
  created_at timestamp with time zone default now()
);

-- Tabela de serviços
create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  duration_minutes int not null,
  price numeric(8,2) not null,
  description text,
  created_at timestamp with time zone default now()
);

-- Tabela de profissionais
create table if not exists professionals (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  title text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Tabela de agendamentos
create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references profiles(id) on delete cascade,
  professional_id uuid references professionals(id),
  service_id uuid references services(id),
  appointment_at timestamp with time zone not null,
  status text default 'pending',
  notes text,
  created_at timestamp with time zone default now()
);

-- Tabela de horários bloqueados
create table if not exists schedules (
  id uuid primary key default uuid_generate_v4(),
  professional_id uuid references professionals(id) not null,
  blocked_at timestamp with time zone not null,
  reason text,
  created_at timestamp with time zone default now()
);
