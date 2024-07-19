import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { CarouselExampleComponent } from './components/carousel-example/carousel-example.component';
import { DemoForm2Component } from './components/demo-form-2/demo-form-2.component';
import { DemoForm3Component } from './components/demo-form-3/demo-form-3.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { PaginationExampleComponent } from './components/pagination-example/pagination-example.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { ScrollbarExampleComponent } from './components/scrollbar-example/scrollbar-example.component';
import { ThemeComponentComponent } from './components/theme-component/theme-component.component';

export const routes: Routes = [
  { path:"",component:AppComponent},
  { path:"modal",component:ModalsComponent},
  { path:"pop-over",component:PopOverComponent},
  { path:"form",component:DemoFormComponent},
  { path:"form2",component:DemoForm2Component},
  { path:"form3",component:DemoForm3Component},
  { path:"api-test",component:ApiTestComponent},
  { path:"observe-test",component:ObservableTestComponent},
  { path:"scroll-spy",component:ScrollbarExampleComponent},
  { path:"theme-link",component:ThemeComponentComponent},
  { path: 'caruousel',component:CarouselExampleComponent},
  { path: 'pagination-example',component:PaginationExampleComponent},
];
