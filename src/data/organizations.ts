import { Organization } from '../types';

export const organizations: Organization[] = [
    // Survival (Acute Distress)
    {
        id: 1,
        name: "Gift of the Givers",
        description: "The largest disaster response non-governmental organisation of African origin on the African continent.",
        causes: ["Survival"],
        website: "https://giftofthegivers.org/",
        imageUrl: "/orgs/gift-of-the-givers.png",
        tags: ["Disaster Relief", "Water", "Food Security"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 6,
        name: "South African Red Cross Society",
        description: "Focuses on disaster management, relieving suffering from violence or conflict, and providing community health services.",
        causes: ["Survival", "Health"],
        website: "https://redcross.org.za/",
        imageUrl: "/orgs/red-cross.png",
        tags: ["Disaster Relief", "Healthcare", "Community"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 7,
        name: "FoodForward SA",
        description: "Recovers surplus food to provide millions of meals to malnourished households across South Africa.",
        causes: ["Survival", "Sustainability"],
        website: "https://foodforwardsa.org/",
        imageUrl: "/orgs/food-forward.png",
        tags: ["Food Security", "Sustainability", "Logistics"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 9,
        name: "The Lunchbox Fund",
        description: "Provides daily nutritious meals to children in under-resourced schools to fuel learning and growth.",
        causes: ["Survival", "Opportunity"],
        website: "https://www.thelunchboxfund.org/",
        imageUrl: "/orgs/lunchbox-fund.png",
        tags: ["Food Security", "Children", "Education"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 21,
        name: "SANCCOB",
        description: "Rescues and rehabilitates endangered seabirds, specifically the African penguin.",
        causes: ["Survival", "Sustainability"],
        website: "https://sanccob.co.za/",
        imageUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&q=80&w=1000",
        tags: ["Birds", "Conservation", "Rescue"],
        section18a: true,
        type: 'NPO'
    },

    // Safety & Freedom (Violence & Oppression)
    {
        id: 10,
        name: "ActionAid South Africa",
        description: "Globally and locally addresses poverty, human rights violations, and injustice against women and children.",
        causes: ["Safety & Freedom", "Survival"],
        website: "https://actionaid.org.za/",
        imageUrl: "/orgs/action-aid.jpg",
        tags: ["Rights", "Women", "Children"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 11,
        name: "UNHCR (South Africa)",
        description: "Dedicated to protecting the rights and lives of refugees and displaced people, providing shelter and advocacy.",
        causes: ["Safety & Freedom", "Survival"],
        website: "https://www.unhcr.org/south-africa.html",
        imageUrl: "/orgs/unhcr.jpg",
        tags: ["Refugees", "Shelter", "Rights"],
        section18a: false,
        type: 'NPO'
    },
    {
        id: 30,
        name: "TEARS Foundation",
        description: "Provides crisis intervention, advocacy, and counseling for survivors of rape and sexual abuse.",
        causes: ["Safety & Freedom", "Health"],
        website: "https://tears.co.za",
        imageUrl: "/orgs/tears.jpg",
        tags: ["Crisis Tech", "GBV", "Helpline"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 31,
        name: "MOSAIC",
        description: "Training, Services and Healing Centre for Women, committed to ending violence against women.",
        causes: ["Safety & Freedom"],
        website: "https://www.mosaic.org.za",
        imageUrl: "/orgs/mosaic.png",
        tags: ["GBV", "Legal Support", "Women"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 32,
        name: "Saartjie Baartman Centre",
        description: "A one-stop centre for women and children who are survivors of domestic violence.",
        causes: ["Safety & Freedom", "Survival"],
        website: "https://www.saartjiebaartmancentre.org.za",
        imageUrl: "/orgs/saartjie.jpg",
        tags: ["Shelter", "Survivor Care", "Women"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 33,
        name: "Rape Crisis",
        description: "Promoting safety in communities and justice in the criminal justice system for rape survivors.",
        causes: ["Safety & Freedom"],
        website: "https://rapecrisis.org.za",
        imageUrl: "/orgs/rapecrisis.jpg",
        tags: ["Counseling", "Advocacy", "Justice"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 20,
        name: "FOUR PAWS South Africa",
        description: "Global animal welfare organization focusing on sanctuaries, disaster relief, and protecting big cats.",
        causes: ["Safety & Freedom", "Survival"],
        website: "https://www.four-paws.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=1000",
        tags: ["Sanctuary", "Wildlife", "Big Cats"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 38,
        name: "Asher's Sanctuary",
        description: "A sanctuary for rescued farm animals, promoting compassion and a vegan lifestyle.",
        causes: ["Safety & Freedom", "Sustainability"],
        website: "https://www.ashersfarmsanctuary.org",
        imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1000",
        tags: ["Sanctuary", "Farm Animals", "Rescue"],
        section18a: true,
        type: 'NPO'
    },

    // Health (Pain & Disease)
    {
        id: 12,
        name: "SADAG",
        description: "Africa's largest mental health support network, providing 24-hour helplines and counseling services.",
        causes: ["Health"],
        website: "https://www.sadag.org/",
        imageUrl: "/orgs/sadag.png",
        tags: ["Mental Health", "Support"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 13,
        name: "Doctors Without Borders (MSF)",
        description: "Provides emergency medical care for HIV, TB, and independent aid to victims of sexual violence.",
        causes: ["Health", "Survival"],
        website: "https://www.msf.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Medical Aid", "HIV/TB", "Emergency"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 14,
        name: "mothers2mothers",
        description: "Employs women living with HIV as community health workers to protect families and eliminate pediatric AIDS.",
        causes: ["Health", "Opportunity"],
        website: "https://m2m.org/",
        imageUrl: "/orgs/mothers2mothers.png",
        tags: ["HIV/AIDS", "Women", "Children"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 15,
        name: "CANSA",
        description: "Leads research and provides emotional and physical care and support for those affected by cancer.",
        causes: ["Health"],
        website: "https://cansa.org.za/",
        imageUrl: "/orgs/cansa.png",
        tags: ["Cancer", "Research", "Support"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 16,
        name: "APCC",
        description: "Provides home-based hospice care and pain management for terminal illnesses, ensuring dignity in care.",
        causes: ["Health"],
        website: "https://apcc.org.za/",
        imageUrl: "/orgs/apcc.png",
        tags: ["Palliative Care", "Hospice"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 28,
        name: "Unjani Clinic",
        description: "Empowering black women nurses to own and operate primary healthcare clinics in their communities.",
        causes: ["Health", "Opportunity"],
        website: "https://www.unjaniclinic.co.za",
        imageUrl: "/orgs/unjani.jpg",
        tags: ["Primary Care", "Women", "Community"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 29,
        name: "HearX Group",
        description: "Digital health company providing affordable access to hearing care using smartphone technology.",
        causes: ["Health", "Opportunity"],
        website: "https://hearxgroup.com",
        imageUrl: "/orgs/hearx.jpg",
        tags: ["HealthTech", "Innovation", "Access"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 34,
        name: "I Hear You",
        description: " bridging the gap between those who need mental health support and those who can provide it.",
        causes: ["Health"],
        website: "https://www.ihearyou.org.za",
        imageUrl: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1000",
        tags: ["Mental Health", "Therapy", "Access"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 4,
        name: "Animal Anti-Cruelty League",
        description: "Protects animals and provides welfare hospitals for low-income pet owners.",
        causes: ["Health", "Safety & Freedom"],
        website: "https://www.aacl.co.za/",
        imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1000",
        tags: ["Welfare", "Veterinary", "Pets"],
        section18a: true,
        type: 'NPO'
    },

    // Opportunity (Chronic Deprivation)
    {
        id: 3,
        name: "Cotlands",
        description: "Addresses the education and social crisis by establishing early learning playgroups for vulnerable children.",
        causes: ["Opportunity"],
        website: "https://www.cotlands.org/",
        imageUrl: "/orgs/cotlands.png",
        tags: ["Early Childhood", "Children", "Play"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 8,
        name: "Breadline Africa",
        description: "Provides critical infrastructure like kitchens and toilets to underprivileged schools to support education.",
        causes: ["Opportunity", "Survival"],
        website: "https://breadlineafrica.org/",
        imageUrl: "/orgs/breadline.png",
        tags: ["Infrastructure", "Children", "Education"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 17,
        name: "Help2Read",
        description: "Provides volunteer reading support to children to break the cycle of poverty through literacy.",
        causes: ["Opportunity"],
        website: "https://help2read.org/",
        imageUrl: "/orgs/help2read.png",
        tags: ["Literacy", "Children"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 18,
        name: "Earthchild Project",
        description: "Teaches children in township schools about environmental awareness, health, and self-development.",
        causes: ["Opportunity", "Sustainability"],
        website: "https://earthchildproject.org/",
        imageUrl: "/orgs/earthchild.jpg",
        tags: ["Environment", "Children", "Wellness"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 51,
        name: "WeThinkCode_",
        description: "Tuition-free software development academy democratizing access to digital skills.",
        causes: ["Opportunity"],
        website: "https://wethinkcode.co.za",
        imageUrl: "/orgs/wethinkcode.jpg",
        tags: ["EdTech", "Coding", "Youth"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 52,
        name: "Umuzi",
        description: "Supporting young people to access high-value digital careers through learnerships.",
        causes: ["Opportunity"],
        website: "https://www.umuzi.org",
        imageUrl: "/orgs/umuzi.png",
        tags: ["Skills", "Youth", "Employment"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 53,
        name: "YES 4 Youth",
        description: "Business-led collaboration with government to create work experiences for youth.",
        causes: ["Opportunity"],
        website: "https://www.yes4youth.co.za",
        imageUrl: "/orgs/yes4youth.jpg",
        tags: ["Youth Employment", "B-BBEE", "Impact"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 54,
        name: "Siyabonga Africa",
        description: "Providing skills development and business creation support to alleviate poverty.",
        causes: ["Opportunity"],
        website: "https://siyabongaafrica.org.za",
        imageUrl: "/orgs/siyabonga.jpg",
        tags: ["Skills", "Entrepreneurship", "Community"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 50,
        name: "Village Enterprise",
        description: "Equips people living in extreme poverty with resources to start sustainable businesses.",
        causes: ["Opportunity", "Survival"],
        website: "https://villageenterprise.org",
        imageUrl: "/orgs/village-enterprise.png",
        tags: ["Poverty Alleviation", "Entrepreneurship", "NPO"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 48,
        name: "Livestock Wealth",
        description: "Crowdfarming platform connecting investors with farmers to grow assets.",
        causes: ["Opportunity"],
        website: "https://livestockwealth.com",
        imageUrl: "/orgs/livestock-wealth.png",
        tags: ["Fintech", "AgriTech", "Investment"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 49,
        name: "Khula!",
        description: "Ecosystem connecting farmers, inputs, and markets to grow the agricultural sector.",
        causes: ["Opportunity", "Sustainability"],
        website: "https://www.khula.co.za",
        imageUrl: "/orgs/khula.png",
        tags: ["AgriTech", "Supply Chain", "SME"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 41,
        name: "Kusini Water",
        description: "Social enterprise building locally invested nanotechnology water filtration systems.",
        causes: ["Opportunity", "Survival"],
        website: "https://kusiniwater.co.za",
        imageUrl: "/orgs/kusini.png",
        tags: ["Water", "Social Enterprise", "Tech"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 42,
        name: "LiquidGold Africa",
        description: "Circular economy solution converting wastewater into valuable nutrients.",
        causes: ["Opportunity", "Sustainability"],
        website: "https://liquidgold.co.za",
        imageUrl: "/orgs/liquid-gold.png",
        tags: ["Sanitation", "Circular Economy", "Innovation"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 43,
        name: "Arumloo",
        description: "Biomimicry-inspired low-flush toilets saving water and improving sanitation dignity.",
        causes: ["Opportunity", "Sustainability"],
        website: "https://www.arumloo.com",
        imageUrl: "/orgs/arumloo.jpg",
        tags: ["Sanitation", "Deep Tech", "Water"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 44,
        name: "Amalooloo",
        description: "Holistic sanitation solutions focusing on hygiene, health, and dignity.",
        causes: ["Opportunity", "Health"],
        website: "https://amalooloo.co.za",
        imageUrl: "/orgs/amalooloo.png",
        tags: ["Sanitation", "Hygiene", "Community"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 45,
        name: "Live Easy",
        description: "Providing affordable, secure, remaining high-density housing in urban areas.",
        causes: ["Opportunity"],
        website: "https://www.liveeasy.co.za",
        imageUrl: "/orgs/live-easy.png",
        tags: ["Housing", "Urban", "Impact Property"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 46,
        name: "TUHF",
        description: "Investing in inner-city urban regeneration by financing property entrepreneurs.",
        causes: ["Opportunity"],
        website: "https://www.tuhf.co.za",
        imageUrl: "/orgs/tuhf.png",
        tags: ["Finance", "Property", "Urban Regen"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 47,
        name: "IHS Investments",
        description: "Private equity managing investments in affordable green housing.",
        causes: ["Opportunity", "Sustainability"],
        website: "https://www.ihsinvestments.co.za",
        imageUrl: "/orgs/ihs.png",
        tags: ["Housing", "Private Equity", "Green Building"],
        section18a: false,
        type: 'Business'
    },

    // Sustainability (Existential Threat)
    {
        id: 19,
        name: "WWF South Africa",
        description: "Leading conservation organization looking after natural resources, biodiversity, and healthy ecosystems.",
        causes: ["Sustainability"],
        website: "https://www.wwf.org.za/",
        imageUrl: "/orgs/wwf.jpg",
        tags: ["Conservation", "Wildlife", "Nature"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 2,
        name: "Food & Trees for Africa",
        description: "Addresses food security and environmental sustainability through greening, food gardening, and community development.",
        causes: ["Sustainability", "Survival"],
        website: "https://trees.org.za/",
        imageUrl: "/orgs/food-trees.jpg",
        tags: ["Food Security", "Trees", "Sustainability"],
        section18a: true,
        type: 'Social Enterprise'
    },
    {
        id: 23,
        name: "Urban Vegan",
        description: "Local manufacturing of vegan staples, promoting sustainable food choices.",
        causes: ["Sustainability"],
        website: "https://www.urbanvegan.co.za",
        imageUrl: "/orgs/urban-vegan.jpg",
        tags: ["Sustainability", "Plant-Based", "Local"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 25,
        name: "Flora Food Group",
        description: "Leading impact through plant-based spreads and cheese alternatives.",
        causes: ["Sustainability"],
        website: "https://www.florafoodgroup.com",
        imageUrl: "/orgs/flora.jpg",
        tags: ["Corporate Impact", "Plant-Based", "Global"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 39,
        name: "Regenize",
        description: "Inclusive recycling solution integrating waste pickers into the formal economy.",
        causes: ["Sustainability", "Opportunity"],
        website: "https://www.regenize.co.za",
        imageUrl: "/orgs/regenize.png",
        tags: ["Recycling", "Social Impact", "Innovation"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 35,
        name: "Shark Spotters",
        description: "Innovative shark safety and conservation program finding a balance between people and sharks.",
        causes: ["Sustainability", "Safety & Freedom"],
        website: "https://sharkspotters.org.za",
        imageUrl: "/orgs/shark-spotters.jpg",
        tags: ["Marine Life", "Safety", "Conservation"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 36,
        name: "Sustainable Seas Trust",
        description: "Science-based organization working to protect Africa's marine resources from plastic pollution.",
        causes: ["Sustainability"],
        website: "https://sst.org.za",
        imageUrl: "/orgs/sst.png",
        tags: ["Marine", "Plastic", "Research"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 37,
        name: "Dyer Island Trust",
        description: "Dedicated to the conservation of the critical marine ecosystem around Dyer Island.",
        causes: ["Sustainability", "Survival"],
        website: "https://dict.org.za",
        imageUrl: "/orgs/dyer-island.png",
        tags: ["Marine Big 5", "Conservation", "Rescue"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 38,
        name: "Santa Shoebox Project",
        description: "Collects and distributes personalized shoeboxes of essential items and treats to underprivileged children.",
        causes: ["Opportunity"],
        website: "https://santashoebox.org.za/",
        imageUrl: "/orgs/santa-shoebox.png",
        tags: ["Children", "Christmas", "Gifts", "Education"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 39,
        name: "Bright Stars Safe Home",
        description: "A safe haven providing love, protection, and care for abused, abandoned, and neglected children.",
        causes: ["Safety & Freedom"],
        website: "https://brightstarssafehome.co.za/",
        imageUrl: "/orgs/bright-stars.png",
        tags: ["Children", "Safety", "Shelter"],
        section18a: false,
        type: 'NPO'
    }
];

export const CAUSE_TOOLTIPS: Record<string, string> = {
    "All": "View all effective altruism opportunities across South Africa.",
    "Survival": "Interventions addressing immediate threats to life, physical deprivation, and emergency rescue.",
    "Safety & Freedom": "Protection from violence, abuse, captivity, and systemic oppression.",
    "Health": "Relief from physical pain, disease burden, and mental anguish.",
    "Opportunity": "Interventions that build capacity to break cycles of poverty and lack of agency.",
    "Sustainability": "Preserving the biosphere and ecosystems that support all life."
};

export const causes = ["All", "Survival", "Safety & Freedom", "Health", "Opportunity", "Sustainability"];
