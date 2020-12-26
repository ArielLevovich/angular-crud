import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // The following 3 routes were added to lazy load the home, calculator and students modules.
    // The lazy loading of these modules also required removing the imports for them from app.module.ts
    // and to change the paths to empty paths in home-routing.module.ts, calculator-routing.module.ts
    // and students-routing.module.ts.
    {
        path: 'students',
        loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
