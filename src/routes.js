import React from 'react';

/**
 * Para utilizar a Routes teremos que fazer a Instalação
 * yarn add react-router-dom
 */

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

/**
 * BrowserRouter define que estamos as rotas atraves do Browser.
 * Switch aqui nesse contexto ele vai permitir que uma unica rota seja chamada ao mesmo tempo.
 * Exact ele só vai chamar a primeira rota quando nosso path for exatamente uma / = nada. 
*/

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;