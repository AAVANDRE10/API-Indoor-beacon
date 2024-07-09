const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllWeights = async (req, res) => {
    try {
        const weights = await prisma.weight.findMany();
        res.status(200).json(weights);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};