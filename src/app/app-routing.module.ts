import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserComponent } from './github-user/github-user.component';
import { FindRepoComponent } from './find-repo/find-repo.component'; 

const routes: Routes = [
  { path: 'github-user', component: GithubUserComponent},
{ path: 'find-repo', component: FindRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
