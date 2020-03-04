import faker from 'faker';

const getAge = () => {
  let age = 0;
  while (age < 18) {
    age = Math.floor(Math.random() * 100);
  }
  return age;
};

const getFakeData = () => {
  faker.seed(1);
  const fakeData = [];
  for (let i = 0; i < 1000; i++) {
    const id = i + 1;
    const name = faker.name.findName();
    const age = getAge();
    const job = faker.name.jobTitle();
    const married = faker.random.boolean() ? 'Yes' : 'No';
    const salary = faker.random.number();
    const state = faker.address.stateAbbr();
    const company = faker.company.companyName();

    fakeData.push({ id, name, age, married, state, company, job, salary });
  }

  return fakeData;
};

export default getFakeData;
