import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BudgetComponent } from './pages/budget/budget.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: "portfolio",
        pathMatch: 'full',
        component: PortfolioComponent
    },
    {
        path: "budget",
        pathMatch: 'full',
        component: BudgetComponent
    },
];
