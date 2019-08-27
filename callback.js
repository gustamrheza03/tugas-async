const kendaraan = (motor, mobil, callback) => {
    return callback(motor, mobil);
}
const dataKendaraan = kendaraan('Harley Davidsoon', 'Ferari', (motor, mobil) => {
    return mobil + motor;
});

console.log(dataKendaraan);