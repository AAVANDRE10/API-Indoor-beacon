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

exports.getBeaconsByMatrixSize = async (req, res) => {
    const { size } = req.query;
    try {
        const beacons = await prisma.beacon.findMany({
            where: {
                matrix: {
                    size: size
                }
            }
        });
        res.status(200).json(beacons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};