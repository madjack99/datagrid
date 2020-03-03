import faker from 'faker';

const getAge = () => {
  let age = 0;
  while (age < 18) {
    age = Math.floor(Math.random() * 100);
  }
  return age;
};

const getColors = () => {
  const colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(faker.commerce.color());
  }
  return colors.join(', ');
};

const getFakeData = () => {
  faker.seed(1);
  const fakeData = [];
  for (let i = 0; i < 3; i++) {
    const name = faker.name.findName();
    const age = getAge();
    const job = faker.name.jobTitle();
    const married = faker.random.boolean();
    const salary = faker.random.number();
    const colors = getColors();
    const phone = faker.phone.phoneNumber();

    fakeData.push({ name, age, job, married, salary, colors, phone });
  }

  return fakeData;
};

export default getFakeData;
