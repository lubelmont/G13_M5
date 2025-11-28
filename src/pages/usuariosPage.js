
import profile from '../assets/images/Profile.png';

const users = [
    { name: 'Alice', isActive: true, age: 30, departament: 'HR', image: profile  },
    { name: 'Bob', isActive: false, age: 25, department: 'IT', image: profile },
    { name: 'Charlie', isActive: true, age: 35, department: 'Finance', image: profile },
    { name: 'Diana', isActive: false, age: 28, department: 'Marketing', image: profile },
    { name: 'Ethan', isActive: true, age: 32, department: 'IT', image: profile },
    { name: 'Fiona', isActive: true, age: 29, department: 'HR', image: profile },
];


export function createUserPage() {
    const page = document.createElement('div');
    page.className = 'user-page';
    page.id = 'user-page';

    const title = document.createElement('h2');
    title.textContent = 'User Information';
    page.appendChild(title);

    const userList = document.createElement('div');
    userList.id = 'user-list';
    page.appendChild(userList);

     users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = `user-card ${user.isActive ? 'active' : 'inactive'}`;
        userCard.innerHTML = `
            <img src="${user.image}" alt="${user.name}" height="50"/>
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
            <p>Department: ${user.department}</p>
        `;
        userList.appendChild(userCard);
    });


    return page;

}
