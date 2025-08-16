/*import { faker } from '@faker-js/faker';

const primeiroNome = faker.person.firstName();
const sobrenome = faker.person.lastName();
const email = faker.internet.email(primeiroNome, sobrenome);
const senha = faker.internet.password();*/

import { faker } from '@faker-js/faker';

export function gerarDadosUsuario() {
  const primeiroNome = faker.person.firstName();
  const sobrenome = faker.person.lastName();
  const email = faker.internet.email(primeiroNome, sobrenome);
  const senha = faker.internet.password();

  return { primeiroNome, sobrenome, email, senha };
}


