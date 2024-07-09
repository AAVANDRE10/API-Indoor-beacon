const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllBeacons = async (req, res) => {
    try {
        const beacons = await prisma.beacon.findMany();
        res.status(200).json(beacons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};