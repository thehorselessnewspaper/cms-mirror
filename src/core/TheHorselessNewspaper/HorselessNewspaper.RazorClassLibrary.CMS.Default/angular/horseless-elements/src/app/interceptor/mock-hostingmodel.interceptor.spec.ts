import { TestBed } from '@angular/core/testing';

import { MockHostingmodelInterceptor } from './mock-hostingmodel.interceptor';

describe('MockHostingmodelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockHostingmodelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockHostingmodelInterceptor = TestBed.inject(MockHostingmodelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
function beforeEach(arg0: () => import("@angular/core/testing").TestBedStatic) {
  throw new Error('Function not implemented.');
}

