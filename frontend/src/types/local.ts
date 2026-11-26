export type Categoria = 'FISIOTERAPIA' | 'TERAPIA';

export type DiaSemana = 'SEGUNDA' | 'TERCA' | 'QUARTA' | 'QUINTA' | 'SEXTA' | 'SABADO' | 'DOMINGO';

export interface Endereco {
    uf: string;
    cidade: string;
    logradouro: string;
    bairro: string;
    numero: string;
    cep?: string;
    latitude?: number;
    longitude?: number;
}

export interface HorarioDeFuncionamento {
    diaSemana: DiaSemana;
    abertura: string;
    fechamento: string;
}

export interface Local {
    id: number;
    nome: string;
    categoria: Categoria;
    instituicao: string;
    telefone?: string;
    email?: string;
    endereco: Endereco;
    horarios: HorarioDeFuncionamento[];
    servicos: string[];
    precisaAgendar: boolean;
    documentosNecessarios: string[];
    vagasDisponiveis: number | null;
    atualizadoEm: string;
}