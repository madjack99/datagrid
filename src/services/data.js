import faker from 'faker';

const getFakeData = () => {
  faker.seed(1);
  const fakeData = [];
  for (let i = 0; i < 3; i++) {
    const id = i;
    const name = faker.name.findName();
    const age = faker.random.number({ min: 18, max: 100 });
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
