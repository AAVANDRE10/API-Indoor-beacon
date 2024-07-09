const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMatrices = async (req, res) => {
    try {
        const matrices = await prisma.matrix.findMany({
            include: {
                weight: true,
                beacons: true
            }
        });
        res.status(200).json(matrices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMatrixById = async (req, res) => {
    const { id } = req.params;
    try {
        const matrix = await prisma.matrix.findUnique({
            where: { id: parseInt(id) },
            include: {
                weight: true,
                beacons: true
            }
        });
        if (matrix) {
            res.status(200).json(matrix);
        } else {
            res.status(404).json({ error: 'Matrix not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};