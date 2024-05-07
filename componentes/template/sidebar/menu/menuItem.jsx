
import {
    ExpandLess,
    ExpandMore,
    Home,
    Input,
    LocalGroceryStore,
    Lock,
    Wallet
} from '@mui/icons-material';

const generateSubMenu = (baseLink, subItems) => {
    return subItems.map(subItem => ({
        ...subItem,
        link: `${baseLink}${subItem.link}`
    }));
};

export const menuItem = [
    {
        item: 'Home',
        icon: <Home/>,
        link: '/',
        open: false,
        hovered: false,
        subMenu: [],
    },
    {
        item: 'Acesso',
        icon: <Lock />,
        link: null,
        open: false,
        hovered: false,
        subMenu: generateSubMenu('/acesso', [
            {
                item: 'Perfil',
                link: '/perfil',
            },
            {
                item: 'Usuário',
                link: '/usuario',
            },
            {
                item: 'Log de acesso',
                link: '/log',
            },                        
        ]),
    },    
    {
        item: 'Cadastros Básicos',
        icon: <Input />,
        link: null,
        open: false,
        hovered: false,
        subMenu: generateSubMenu('/cadastro',  [
            {
                item: 'Certificado',
                link: '/certificado',
            },
            {
                item: 'Unidade Medida',
                link: '/unidademedida',
            },
            {
                item: 'Produto e Serviço',
                link: '/produto_servico',
            },    
            {
                item: 'Segmento/Tipo de Fornecedor',
                link: '/segmentotipo_fornecedor',
            },    
            {
                item: 'Pergunta',
                link: '/pergunta',
            },  
            {
                item: 'Documentação',
                link: '/documentacao',
            },   
            {
                item: 'Recurso Fornecido',
                link: '/recurso_fornecido',
            },  
            {
                item: 'Critério de Avaliação',
                link: '/criterio_avaliacao',
            },    
            {
                item: 'Insumo',
                link: '/insumo',
            },   
            {
                item: 'Serviços (CNAE)',
                link: '/servicos_cnae',
            },    
            {
                item: 'Centro de Custo',
                link: '/centro_custo',
            },  
            {
                item: 'Condição de Pagamento',
                link: '/condicao_pagamento',
            },  
            {
                item: 'Localização',
                link: '/localizacao',
            },                                                                                                                            
        ]),
    },   
    {
        item: 'Fornecedor',
        icon: <Wallet />,
        link: null,
        open: false,
        hovered: false,
        subMenu: generateSubMenu('/fornecedor', [
            {
                item: 'Cadastro',
                link: '/cadastro',
            },
            {
                item: 'Qualificação',
                link: '/qualificacao',
            },
            {
                item: 'Painel de Avaliação',
                link: '/painel_avaliacao',
            },  
            {
                item: 'Editáveis do Fornecedor',
                link: '/editaveis_fornecedor',
            },                                   
        ]),
    }, 
    {
        item: 'Compras',
        icon: <LocalGroceryStore />,
        link: null,
        open: false,
        hovered: false,
        subMenu: generateSubMenu('/compras', [
            {
                item: 'Cadastro',
                link: '/cadastro',
            },
            {
                item: 'Qualificação',
                link: '/qualificacao',
            },
            {
                item: 'Painel de Avaliação',
                link: '/painel_avaliacao',
            },  
            {
                item: 'Editáveis do Fornecedor',
                link: '/editaveis_fornecedor',
            },                                   
        ]),
    },     
];

export default {
    menuItem,
}