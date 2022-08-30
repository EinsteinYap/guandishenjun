//main
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '././material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ZhangfeiComponent } from './pages/zhangfei/zhangfei.component';
import { GuanyuComponent } from './pages/guanyu/guanyu.component';
import { LiubeiComponent } from './pages/liubei/liubei.component';

//components
import { MenuComponent } from './components/menu/menu.component';
import { CardsComponent } from './components/cards/cards.component';
import { Cards2Component } from './components/cards2/cards2.component';
import { CubeComponent } from './components/cube/cube.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    CardsComponent,
    Cards2Component,
    CubeComponent,
    ZhangfeiComponent,
    GuanyuComponent,
    LiubeiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
