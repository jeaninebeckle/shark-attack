const students = [
  {
    studentId: 'student1',
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    imgUrl: 'https://avatars1.githubusercontent.com/u/56455496?v=4',
    isDead: false,
  },
  {
    studentId: 'student2',
    firstName: 'Austin',
    lastName: 'Phy',
    imgUrl: 'https://avatars3.githubusercontent.com/u/39771100?v=4',
    isDead: false,
  },
  {
    studentId: 'student3',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    imgUrl: 'https://avatars3.githubusercontent.com/u/62910336?v=4',
    isDead: false,
  },
  {
    studentId: 'student4',
    firstName: 'Geno',
    lastName: 'McNew',
    imgUrl: 'https://avatars1.githubusercontent.com/u/42584830?v=4',
    isDead: false,
  },
  {
    studentId: 'student5',
    firstName: 'Gwynne',
    lastName: 'Meeks',
    imgUrl: 'https://avatars1.githubusercontent.com/u/63276406?v=4',
    isDead: false,
  },
  {
    studentId: 'student6',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62957170?v=4',
    isDead: false,
  },
  {
    studentId: 'student7',
    firstName: 'Jim',
    lastName: 'Browning',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62916291?v=4',
    isDead: false,
  },
  {
    studentId: 'student8',
    firstName: 'Jonathan',
    lastName: 'Shearon',
    imgUrl: 'https://avatars3.githubusercontent.com/u/46360042?v=4',
    isDead: false,
  },
  {
    studentId: 'student9',
    firstName: 'Joshua',
    lastName: 'Medlen',
    imgUrl: 'https://avatars0.githubusercontent.com/u/62913995?v=4',
    isDead: false,
  },
  {
    studentId: 'student10',
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    imgUrl: 'https://avatars1.githubusercontent.com/u/20482946?v=4',
    isDead: false,
  },
  {
    studentId: 'student11',
    firstName: 'Mark',
    lastName: 'Young',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62973018?v=4',
    isDead: false,
  },
  {
    studentId: 'student12',
    firstName: 'Matt',
    lastName: 'Logan',
    imgUrl: 'https://avatars1.githubusercontent.com/u/62910269?v=4',
    isDead: false,
  },
  {
    studentId: 'student13',
    firstName: 'Michael',
    lastName: 'Dotson',
    imgUrl: 'https://avatars3.githubusercontent.com/u/61854037?v=4',
    isDead: false,
  },
  {
    studentId: 'student14',
    firstName: 'Nate',
    lastName: 'Owens',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62910227?v=4',
    isDead: false,
  },
  {
    studentId: 'student15',
    firstName: 'Nick',
    lastName: 'Walters',
    imgUrl: 'https://avatars3.githubusercontent.com/u/10491407?v=4',
    isDead: false,
  },
  {
    studentId: 'student16',
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    imgUrl: 'https://avatars1.githubusercontent.com/u/18632556?v=4',
    isDead: false,
  },
  {
    studentId: 'student17',
    firstName: 'Ola',
    lastName: 'Oladinni',
    imgUrl: 'https://avatars0.githubusercontent.com/u/59629698?v=4',
    isDead: false,
  },
  {
    studentId: 'student18',
    firstName: 'Pete',
    lastName: 'Stewart',
    imgUrl: 'https://avatars2.githubusercontent.com/u/62906411?v=4',
    isDead: false,
  },
  {
    studentId: 'student19',
    firstName: 'Ponch',
    lastName: 'Sihanorak',
    imgUrl: 'https://avatars0.githubusercontent.com/u/61893644?v=4',
    isDead: false,
  },
  {
    studentId: 'student20',
    firstName: 'Ryan',
    lastName: 'Beiden',
    imgUrl: 'https://avatars2.githubusercontent.com/u/25331401?v=4',
    isDead: true,
  },
  {
    studentId: 'student21',
    firstName: 'Billy',
    lastName: 'Campbell',
    imgUrl: 'https://avatars0.githubusercontent.com/u/62917622?v=4',
    isDead: true,
  },
];

const livingStudents = () => {
  const aliveStudents = [];

  students.forEach((student) => {
    if (student.isDead === false) {
      aliveStudents.push(student);
    }
  });
  return aliveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = [];

  students.forEach((student) => {
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  console.warn(deadStudents);
  return deadStudents;
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
