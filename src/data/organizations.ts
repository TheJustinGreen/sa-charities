import { Organization } from '../types';

export const organizations: Organization[] = [
    {
        id: 1,
        name: "Gift of the Givers",
        description: "The largest disaster response non-governmental organisation of African origin on the African continent.",
        cause: "Humanitarian",
        website: "https://giftofthegivers.org/",
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 2,
        name: "Food & Trees for Africa",
        description: "Address food security and environmental sustainability through greening, food gardening, and community development.",
        cause: "Environment",
        website: "https://trees.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        name: "Cotlands",
        description: "A non-profit early childhood development organisation addressing the education and social crisis by establishing early learning playgroups.",
        cause: "Education",
        website: "https://www.cotlands.org/",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        name: "SPCA South Africa",
        description: "Preventing cruelty and promoting the welfare of all animals in South Africa.",
        cause: "Animals",
        website: "https://nspca.co.za/",
        imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 5,
        name: "Treatment Action Campaign",
        description: "Advocating for access to quality healthcare for all, people living with HIV, and prevention of new infections.",
        cause: "Healthcare",
        website: "https://tac.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 6,
        name: "Rise Against Hunger SA",
        description: "International hunger relief organization that distributes food and life-changing aid to the world's most vulnerable.",
        cause: "Humanitarian",
        website: "https://rahafrica.org/",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    },
];

export const causes = ["All", "Humanitarian", "Environment", "Education", "Animals", "Healthcare"];
