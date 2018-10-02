import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@app/shared';
import { AuthRoutingModule } from '@app/auth/auth-routing.module';
import { LoginComponent } from '@app/auth/login/login.component';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [AuthComponent, LoginComponent]
})
export class AuthModule {}
