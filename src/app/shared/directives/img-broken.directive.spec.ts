import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgBrokenDirective } from './img-broken.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock:any = null
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('😊😊 TestComponent should be instantiate correctly', () => {
    expect(component).toBeTruthy()
  })

  it('😎😎 Directive should change image by base64', (done: DoneFn) => {
    //TODO: Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src // TODO 👍 we have the URL before be changed for the Directive
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src // TODO 👍 we have the URL after be changed for the Directive

      expect(afterImgSrc).toMatch(/\bdata:image\b/) //TODO data:image:1010101010101
      done()
    }, 3000)
  })
});
