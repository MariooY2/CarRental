import image1 from "../carsnobg/S.png"
import image2 from"../carsnobg/GLC.png"
import image3 from"../carsnobg/GT.png"
import image4 from "../carsnobg/GLESUV.webp"
import image5 from "../carsnobg/Cabriolet.webp"
import image6 from "../carsnobg/EQS1.png"
const products = [
    {
        id: 1,
        name: 'Mercedes-Benz S-Class',
        price: 109500.00,
        description: 'The epitome of luxury and innovation, the S-Class stands as the benchmark for sedans.',
        category: 'Luxury Sedans',
        imageUrl: image1
    },
    {
        id: 2,
        name: 'Mercedes-Benz GLE SUV',
        price: 77500.00,
        description: 'Versatility meets cost-efficiency, with advanced safety features and superior comfort.',
        category: 'SUVs',
        imageUrl: image4
    },
    {
        id: 3,
        name: 'Mercedes-AMG GT',
        price: 115900.00,
        description: 'Performance, crafted to perfection, bold design. The AMG GT is pure driving excitement.',
        category: 'Sports Cars',
        imageUrl: image3
    },
    {
        id: 4,
        name: 'Mercedes-Benz Cabriolet',
        price: 54700.00,
        description: 'The C-Class Cabriolet offers an unmatched combination of elegance, style, and openness',
        category: 'Convertibles',
        imageUrl: image5
    },
    {
        id: 5,
        name: 'Mercedes-Benz GLC',
        price: 51700.00,
        description: 'With its sporty performance and SUV versatility, the GLC Coupe defines modern luxury.',
        category: 'Coupes',
        imageUrl: image2
    },
    {
        id: 6,
        name: 'Mercedes-Benz EQC',
        price: 67900.00,
        description: 'The future of electric SUVs, providing exceptional comfort and unparalleled innovation.',
        category: 'Electric Vehicles',
        imageUrl: image6
    }
];
export default products;