import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./Additional/_guards/auth.guard";
import {UnloggedComponent} from "./unlogged/unlogged.component";
import {SignComponent} from "./sign/sign.component";


const appRoutes: Routes = [
    { path: '', component: UnloggedComponent, canActivate: [AuthGuard] },
    { path: 'login', component: SignComponent },
   /* { path: 'register', component: RegisterComponent },
    { path: 'restore-password', component: RestorePasswordComponent},
    { path: 'confirm-register', component: ConfirmRegisterComponent},
    { path: 'forgotPassword', component: ForgotComponent},
    { path: 'lobby', component: LobbyComponent},
    { path: 'steam-register', component: SteamRegisterComponent},
    { path: 'steam-auth', component: SteamAuthComponent},*/
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
