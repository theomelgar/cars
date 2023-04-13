import prisma from "../config/database.js";


async function getCars() {
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  const query= await prisma.cars.findUnique({
    where: {
      id: id
    },
  });
  return query
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUnique({
    where:{
      licensePlate: licensePlate
    },
  });
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data:{
      model:model,
      licensePlate:licensePlate,
      year:year,
      color:color,
    }
  });

}

async function deleteCar(id: number) {
  prisma.cars.delete({
    where:{
      id:id
    },
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;