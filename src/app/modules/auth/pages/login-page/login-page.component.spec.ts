import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🐱‍👤💥 should return invalid format', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0x0',
      password: '11111111111111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert
    expect(component.formLogin.invalid).toBeTrue();
  });

  it('✅✅ shoul return valid format', () => {
    //TODO: Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert
    expect(component.formLogin.invalid).toBeFalse();
  });

  it('👍 Button must have the word "Start"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Start')

  })

});
