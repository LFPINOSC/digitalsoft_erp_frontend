/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example1',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'usuario',
        title: 'Usuario',
        type : 'collapsable',
        icon : '',
        children: [ 
            {
                id   : 'listUser',
                title: 'Listar',
                type : 'basic',
                icon : '',
                link : '/usuario/listUser'
            },
            {
                id   : 'IngresarUser',
                title: 'Ingresar',
                type : 'basic',
                icon : '',
                link : '/usuario/ingUser'
            }
        ]
    },
    {
        id   : 'cliente',
        title: 'Clientes',
        type : 'collapsable',
        icon : '',
        children: [ 
            {
                id   : 'listCliente',
                title: 'Listar',
                type : 'basic',
                icon : '',
                link : '/cliente/listCliente'
            },
            {
                id   : 'IngresarCliente',
                title: 'Ingresar',
                type : 'basic',
                icon : '',
                link : '/cliente/ingUser'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
