const data = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 28 },
    { nombre: "Marta", edad: 22 }
];

const createRow = (item) => `
    <tr>
        <td>${item.nombre}</td>
        <td>${item.edad}</td>
    </tr>
`;

const generateTable = (data) => {
    const rows = data.map(createRow).join('');
    return `
        <table border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
};

document.body.innerHTML = generateTable(data);