import type { Local } from '../types/local';

export const local: Local[] = [
    {
        id: 1,
        nome: 'Clínica-escola Ufcg',
        categoria: 'TERAPIA',
        instituicao: 'UFCG',
        telefone: '83 988780278',
        email: 'teste@ufcg..edu.br',
        endereco: {
            uf: 'PB',
            cidade: 'Campina Grande',
            logradouro: 'Rua Aprígio Veloso',
            bairro: '8000',
            numero: '505',
        },
        horarios: [
            { diaSemana: 'SEGUNDA', abertura: '07:00', fechamento: '16:00' },
            { diaSemana: 'TERCA', abertura: '07:00', fechamento: '16:00' },
        ],
        servicos: ['Atendimento individual', 'Crianças e adolescentes', 'Grupos de apoio'],
        precisaAgendar: true,
        documentosNecessarios: ['Rg', 'Cartão do Sus', 'Registro de Nascimento'],
        vagasDisponiveis: 10,
        atualizadoEm: '2026-11-16'
    }
]