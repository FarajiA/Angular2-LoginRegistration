import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { IdentityResolver } from '../_resolves/identity.resolve';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        // get identity of user before loading the app
        resolve: { user: IdentityResolver },
        children: [
            { path: 'dashboard', component: MainComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
  declarations: [
      MainComponent
  ],
  providers: [
      IdentityResolver
  ]
})
export class MainModule { }
