import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/page-home/home.component";
import { PortfolioComponent } from "./pages/portfolio/page-portfolio/portfolio.component";
import { BudgetComponent } from "./pages/budget/page-budget/budget.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: HomeComponent,
	},
	{
		path: "portfolio",
		pathMatch: "full",
		component: PortfolioComponent,
	},
	{
		path: "budget",
		pathMatch: "full",
		component: BudgetComponent,
	},
];
