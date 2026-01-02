import { Fragment } from 'react';
import Header from '../layout/Header.tsx' 
import SidebarFilters from '../components/SidebarFilters.tsx';
import ProductGrid from '../components/ProductGrid.tsx';
import ProductsToolbar from '../components/ProductsToolBar.tsx';

export default function Productos() {
    return (
        <Fragment>
            <Header />
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start'>
                
                {/* Contenedor de Productos (Arriba en móvil, derecha en PC) */}
                <div className="flex-1 w-full order-1 lg:order-2">
                    <ProductsToolbar />
                    <ProductGrid />
                </div>

                {/* Sidebar (Abajo en móvil, izquierda en PC) */}
                <div className="w-full lg:w-64 order-2 lg:order-1">
                    <SidebarFilters />
                </div>

            </div>
        </Fragment>
    );
}
