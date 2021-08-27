import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from '@core/services/interceptors/token.interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpService} from '@core/services/httpClient/http.service';
import {MaterialModule} from '@core/material.module';
import {PrimengModule} from '@core/primeng.module';
import {FooterComponent} from '@core/components/footer/footer.component';
import {MapperService} from '@core/services/mapper/mapper.service';
import {BtnSubmitComponent} from '@core/components/btn-submit/btn-submit.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import {SearchComponent} from './components/search/search.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {BtnDeleteComponent} from '@core/components/btn-delete/btn-delete.component';
import {BtnEditComponent} from './components/btn-edit/btn-edit.component';
import {NotificationComponent} from '@core/components/notification/notification.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    imports: [
        // Modules
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        // Theme Modules
        FlexLayoutModule,
        FlexModule,
        MaterialModule,
        PrimengModule,
        ToastModule
    ],
    providers: [
        // Services
        HttpService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        MapperService
    ],
    declarations: [
        // Components
        FooterComponent,
        BtnSubmitComponent,
        ProgressBarComponent,
        SearchComponent,
        PaginatorComponent,
        BtnDeleteComponent,
        BtnEditComponent,
        NotificationComponent
    ],
    exports: [
        // Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FlexModule,
        MaterialModule,
        PrimengModule,
        // Components
        FooterComponent,
        BtnSubmitComponent,
        ProgressBarComponent,
        PaginatorComponent,
        SearchComponent,
        BtnDeleteComponent,
        BtnEditComponent,
        NotificationComponent
    ]
})
export class CoreModule {
}
