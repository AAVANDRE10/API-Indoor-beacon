const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllFloors = async (req, res) => {
    try {
        const floors = await prisma.floor.findMany({
            include: {
                matrix: true
            }
        });
        res.status(200).json(floors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFloorById = async (req, res) => {
    const { id } = req.params;
    try {
        const floor = await prisma.floor.findUnique({
            where: { id: parseInt(id) },
            include: {
                matrix: true
            }
        });
        if (floor) {
            res.status(200).json(floor);
        } else {
            res.status(404).json({ error: 'Floor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};