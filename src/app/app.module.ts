import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// kbao them ReactiveFormsModule để sử dụng Reactive form
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SubComponent } from './sub.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { IpComponent } from './ip.component';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';

// pipe
import { RoundPipe } from './round.pipe';
//service 
import { IpService } from './ip.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    SubComponent,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    RoundPipe,
    WeatherComponent,
    SignInComponent,
    SignUpComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
