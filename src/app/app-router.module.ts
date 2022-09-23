import { MainComponent } from './screens/main/main.component'
import { NgModule } from "@angular/core"
import { RouterModule, Routes} from "@angular/router"
import { PortfolioComponent } from "./screens/portfolio/portfolio.component"
import { BlogComponent } from './screens/blog/blog.component'
import { DocumentationComponent } from './screens/documentation/documentation.component'
import { ContactComponent } from './screens/contact/contact.component'

const routes: Routes = [
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'main', component: MainComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'documentation', component: DocumentationComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRouterModule{}