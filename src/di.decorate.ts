import { decorate, injectable, inject } from "inversify";

//Example
//decorate(injectable(), LoginUseCase);
//decorate(injectable(), LoginApi);
//decorate(inject(TYPES.UserService), LoginUseCase, 0);
//decorate(inject(LoginApi), LoginUseCase, 1);