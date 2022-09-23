import { AppRouterModule } from './app-router.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MainComponent } from './screens/main/main.component'
import { PortfolioComponent } from './screens/portfolio/portfolio.component'
import { FooterComponent } from './layout/footer/footer.component'
import { HeaderComponent } from './layout/header/header.component'
import { BlogComponent } from './screens/blog/blog.component'
import { DocumentationComponent } from './screens/documentation/documentation.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PortfolioComponent, 
    BlogComponent,
    DocumentationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
