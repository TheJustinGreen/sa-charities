import { Organization } from '../types';

export const organizations: Organization[] = [
    // Survival
    {
        id: 1,
        name: "Gift of the Givers",
        description: "The largest disaster response non-governmental organisation of African origin on the African continent.",
        causes: ["Survival"],
        website: "https://giftofthegivers.org/",
        imageUrl: "/orgs/gift-of-the-givers.png",
        tags: ["Emergency Response", "Food Security", "Essential Resources (Water/Sanitation)"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 6,
        name: "South African Red Cross Society",
        description: "Focuses on disaster management, relieving suffering from violence or conflict, and providing community health services.",
        causes: ["Survival", "Health & Wellbeing"],
        website: "https://redcross.org.za/",
        imageUrl: "/orgs/red-cross.png",
        tags: ["Emergency Response", "Healthcare Services", "Essential Resources (Water/Sanitation)"],
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
        tags: ["Food Security", "Sustainable Agriculture", "Emergency Response"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 9,
        name: "The Lunchbox Fund",
        description: "Provides daily nutritious meals to children in under-resourced schools to fuel learning and growth.",
        causes: ["Survival", "Economic Opportunity"],
        website: "https://www.thelunchboxfund.org/",
        imageUrl: "/orgs/lunchbox-fund.png",
        tags: ["Food Security", "Education & Literacy", "Child Protection"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 21,
        name: "SANCCOB",
        description: "Rescues and rehabilitates endangered seabirds, specifically the African penguin.",
        causes: ["Sustainability"],
        website: "https://sanccob.co.za/",
        imageUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&q=80&w=1000",
        tags: ["Animal & Marine Welfare", "Conservation"],
        section18a: true,
        type: 'NPO'
    },

    // Safety & Justice
    {
        id: 10,
        name: "ActionAid South Africa",
        description: "Globally and locally addresses poverty, human rights violations, and injustice against women and children.",
        causes: ["Safety & Justice", "Survival"],
        website: "https://actionaid.org.za/",
        imageUrl: "/orgs/action-aid.jpg",
        tags: ["Gender-Based Violence (GBV)", "Child Protection", "Legal Advocacy & Justice"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 11,
        name: "UNHCR (South Africa)",
        description: "Dedicated to protecting the rights and lives of refugees and displaced people, providing shelter and advocacy.",
        causes: ["Safety & Justice", "Survival"],
        website: "https://www.unhcr.org/south-africa.html",
        imageUrl: "/orgs/unhcr.jpg",
        tags: ["Refugee & Migrant Rights", "Housing & Shelter", "Legal Advocacy & Justice"],
        section18a: false,
        type: 'NPO'
    },
    {
        id: 30,
        name: "TEARS Foundation",
        description: "Provides crisis intervention, advocacy, and counseling for survivors of rape and sexual abuse.",
        causes: ["Safety & Justice", "Health & Wellbeing"],
        website: "https://tears.co.za",
        imageUrl: "/orgs/tears.jpg",
        tags: ["Gender-Based Violence (GBV)", "Mental Health & Trauma", "Emergency Response"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 31,
        name: "MOSAIC",
        description: "Training, Services and Healing Centre for Women, committed to ending violence against women.",
        causes: ["Safety & Justice"],
        website: "https://www.mosaic.org.za",
        imageUrl: "/orgs/mosaic.png",
        tags: ["Gender-Based Violence (GBV)", "Legal Advocacy & Justice", "Mental Health & Trauma"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 32,
        name: "Saartjie Baartman Centre",
        description: "A one-stop centre for women and children who are survivors of domestic violence.",
        causes: ["Safety & Justice", "Survival"],
        website: "https://www.saartjiebaartmancentre.org.za",
        imageUrl: "/orgs/saartjie.jpg",
        tags: ["Gender-Based Violence (GBV)", "Housing & Shelter", "Child Protection"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 33,
        name: "Rape Crisis",
        description: "Promoting safety in communities and justice in the criminal justice system for rape survivors.",
        causes: ["Safety & Justice", "Health & Wellbeing"],
        website: "https://rapecrisis.org.za",
        imageUrl: "/orgs/rapecrisis.jpg",
        tags: ["Gender-Based Violence (GBV)", "Legal Advocacy & Justice", "Mental Health & Trauma"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 20,
        name: "FOUR PAWS South Africa",
        description: "Global animal welfare organization focusing on sanctuaries, disaster relief, and protecting big cats.",
        causes: ["Sustainability"],
        website: "https://www.four-paws.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=1000",
        tags: ["Animal & Marine Welfare", "Conservation"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 38,
        name: "Asher's Sanctuary",
        description: "A sanctuary for rescued farm animals, promoting compassion and a vegan lifestyle.",
        causes: ["Sustainability"],
        website: "https://www.ashersfarmsanctuary.org",
        imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1000",
        tags: ["Animal & Marine Welfare", "Sustainable Agriculture", "Conservation"],
        section18a: true,
        type: 'NPO'
    },

    // Health & Wellbeing
    {
        id: 12,
        name: "SADAG",
        description: "Africa's largest mental health support network, providing 24-hour helplines and counseling services.",
        causes: ["Health & Wellbeing"],
        website: "https://www.sadag.org/",
        imageUrl: "/orgs/sadag.png",
        tags: ["Mental Health & Trauma"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 13,
        name: "Doctors Without Borders (MSF)",
        description: "Provides emergency medical care for HIV, TB, and independent aid to victims of sexual violence.",
        causes: ["Health & Wellbeing", "Survival"],
        website: "https://www.msf.org.za/",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        tags: ["Healthcare Services", "Emergency Response", "Serious & Chronic Illness"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 14,
        name: "mothers2mothers",
        description: "Employs women living with HIV as community health workers to protect families and eliminate pediatric AIDS.",
        causes: ["Health & Wellbeing", "Economic Opportunity"],
        website: "https://m2m.org/",
        imageUrl: "/orgs/mothers2mothers.png",
        tags: ["Serious & Chronic Illness", "Healthcare Services", "Skills Development"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 15,
        name: "CANSA",
        description: "Leads research and provides emotional and physical care and support for those affected by cancer.",
        causes: ["Health & Wellbeing"],
        website: "https://cansa.org.za/",
        imageUrl: "/orgs/cansa.png",
        tags: ["Serious & Chronic Illness", "Healthcare Services", "Mental Health & Trauma"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 16,
        name: "APCC",
        description: "Provides home-based hospice care and pain management for terminal illnesses, ensuring dignity in care.",
        causes: ["Health & Wellbeing"],
        website: "https://apcc.org.za/",
        imageUrl: "/orgs/apcc.png",
        tags: ["Serious & Chronic Illness", "Healthcare Services"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 28,
        name: "Unjani Clinic",
        description: "Empowering black women nurses to own and operate primary healthcare clinics in their communities.",
        causes: ["Health & Wellbeing", "Economic Opportunity"],
        website: "https://www.unjaniclinic.co.za",
        imageUrl: "/orgs/unjani.jpg",
        tags: ["Healthcare Services", "Entrepreneurship", "Skills Development"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 29,
        name: "HearX Group",
        description: "Digital health company providing affordable access to hearing care using smartphone technology.",
        causes: ["Health & Wellbeing", "Economic Opportunity"],
        website: "https://hearxgroup.com",
        imageUrl: "/orgs/hearx.jpg",
        tags: ["Healthcare Services", "Disability Support", "Entrepreneurship"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 34,
        name: "I Hear You",
        description: " bridging the gap between those who need mental health support and those who can provide it.",
        causes: ["Health & Wellbeing"],
        website: "https://www.ihearyou.org.za",
        imageUrl: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1000",
        tags: ["Mental Health & Trauma", "Healthcare Services"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 4,
        name: "Animal Anti-Cruelty League",
        description: "Protects animals and provides welfare hospitals for low-income pet owners.",
        causes: ["Sustainability"],
        website: "https://www.aacl.co.za/",
        imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1000",
        tags: ["Animal & Marine Welfare", "Healthcare Services"],
        section18a: true,
        type: 'NPO'
    },

    // Economic Opportunity
    {
        id: 3,
        name: "Cotlands",
        description: "Addresses the education and social crisis by establishing early learning playgroups for vulnerable children.",
        causes: ["Economic Opportunity", "Safety & Justice"],
        website: "https://www.cotlands.org/",
        imageUrl: "/orgs/cotlands.png",
        tags: ["Education & Literacy", "Child Protection"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 8,
        name: "Breadline Africa",
        description: "Provides critical infrastructure like kitchens and toilets to underprivileged schools to support education.",
        causes: ["Economic Opportunity", "Infrastructure"],
        website: "https://breadlineafrica.org/",
        imageUrl: "/orgs/breadline.png",
        tags: ["Education & Literacy", "Community Spaces", "Essential Resources (Water/Sanitation)"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 17,
        name: "Help2Read",
        description: "Provides volunteer reading support to children to break the cycle of poverty through literacy.",
        causes: ["Economic Opportunity"],
        website: "https://help2read.org/",
        imageUrl: "/orgs/help2read.png",
        tags: ["Education & Literacy", "Child Protection"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 18,
        name: "Earthchild Project",
        description: "Teaches children in township schools about environmental awareness, health, and self-development.",
        causes: ["Economic Opportunity", "Sustainability"],
        website: "https://earthchildproject.org/",
        imageUrl: "/orgs/earthchild.jpg",
        tags: ["Education & Literacy", "Conservation", "Health & Wellbeing"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 51,
        name: "WeThinkCode_",
        description: "Tuition-free software development academy democratizing access to digital skills.",
        causes: ["Economic Opportunity", "Infrastructure"],
        website: "https://wethinkcode.co.za",
        imageUrl: "/orgs/wethinkcode.jpg",
        tags: ["Skills Development", "Youth Employment", "Digital Connectivity"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 52,
        name: "Umuzi",
        description: "Supporting young people to access high-value digital careers through learnerships.",
        causes: ["Economic Opportunity"],
        website: "https://www.umuzi.org",
        imageUrl: "/orgs/umuzi.png",
        tags: ["Youth Employment", "Skills Development"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 53,
        name: "YES 4 Youth",
        description: "Business-led collaboration with government to create work experiences for youth.",
        causes: ["Economic Opportunity"],
        website: "https://www.yes4youth.co.za",
        imageUrl: "/orgs/yes4youth.jpg",
        tags: ["Youth Employment", "Entrepreneurship"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 54,
        name: "Siyabonga Africa",
        description: "Providing skills development and business creation support to alleviate poverty.",
        causes: ["Economic Opportunity"],
        website: "https://siyabongaafrica.org.za",
        imageUrl: "/orgs/siyabonga.jpg",
        tags: ["Entrepreneurship", "Skills Development", "Community Spaces"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 50,
        name: "Village Enterprise",
        description: "Equips people living in extreme poverty with resources to start sustainable businesses.",
        causes: ["Economic Opportunity"],
        website: "https://villageenterprise.org",
        imageUrl: "/orgs/village-enterprise.png",
        tags: ["Entrepreneurship", "Skills Development"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 48,
        name: "Livestock Wealth",
        description: "Crowdfarming platform connecting investors with farmers to grow assets.",
        causes: ["Economic Opportunity", "Sustainability"],
        website: "https://livestockwealth.com",
        imageUrl: "/orgs/livestock-wealth.png",
        tags: ["Entrepreneurship", "Sustainable Agriculture"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 49,
        name: "Khula!",
        description: "Ecosystem connecting farmers, inputs, and markets to grow the agricultural sector.",
        causes: ["Economic Opportunity", "Sustainability"],
        website: "https://www.khula.co.za",
        imageUrl: "/orgs/khula.png",
        tags: ["Entrepreneurship", "Sustainable Agriculture"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 41,
        name: "Kusini Water",
        description: "Social enterprise building locally invested nanotechnology water filtration systems.",
        causes: ["Survival", "Infrastructure"],
        website: "https://kusiniwater.co.za",
        imageUrl: "/orgs/kusini.png",
        tags: ["Essential Resources (Water/Sanitation)", "Digital Connectivity", "Entrepreneurship"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 42,
        name: "LiquidGold Africa",
        description: "Circular economy solution converting wastewater into valuable nutrients.",
        causes: ["Sustainability", "Survival"],
        website: "https://liquidgold.co.za",
        imageUrl: "/orgs/liquid-gold.png",
        tags: ["Sustainable Agriculture", "Essential Resources (Water/Sanitation)"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 43,
        name: "Arumloo",
        description: "Biomimicry-inspired low-flush toilets saving water and improving sanitation dignity.",
        causes: ["Survival", "Sustainability"],
        website: "https://www.arumloo.com",
        imageUrl: "/orgs/arumloo.jpg",
        tags: ["Essential Resources (Water/Sanitation)", "Conservation"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 44,
        name: "Amalooloo",
        description: "Holistic sanitation solutions focusing on hygiene, health, and dignity.",
        causes: ["Survival", "Health & Wellbeing"],
        website: "https://amalooloo.co.za",
        imageUrl: "/orgs/amalooloo.png",
        tags: ["Essential Resources (Water/Sanitation)", "Healthcare Services"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 45,
        name: "Live Easy",
        description: "Providing affordable, secure, remaining high-density housing in urban areas.",
        causes: ["Survival", "Infrastructure"],
        website: "https://www.liveeasy.co.za",
        imageUrl: "/orgs/live-easy.png",
        tags: ["Housing & Shelter", "Community Spaces"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 46,
        name: "TUHF",
        description: "Investing in inner-city urban regeneration by financing property entrepreneurs.",
        causes: ["Infrastructure", "Economic Opportunity"],
        website: "https://www.tuhf.co.za",
        imageUrl: "/orgs/tuhf.png",
        tags: ["Community Spaces", "Entrepreneurship", "Housing & Shelter"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 47,
        name: "IHS Investments",
        description: "Private equity managing investments in affordable green housing.",
        causes: ["Survival", "Sustainability"],
        website: "https://www.ihsinvestments.co.za",
        imageUrl: "/orgs/ihs.png",
        tags: ["Housing & Shelter", "Conservation", "Community Spaces"],
        section18a: false,
        type: 'Business'
    },

    // Sustainability
    {
        id: 19,
        name: "WWF South Africa",
        description: "Leading conservation organization looking after natural resources, biodiversity, and healthy ecosystems.",
        causes: ["Sustainability"],
        website: "https://www.wwf.org.za/",
        imageUrl: "/orgs/wwf.jpg",
        tags: ["Conservation", "Animal & Marine Welfare", "Climate Action"],
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
        tags: ["Sustainable Agriculture", "Climate Action", "Food Security"],
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
        tags: ["Sustainable Agriculture", "Climate Action"],
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
        tags: ["Sustainable Agriculture"],
        section18a: false,
        type: 'Business'
    },
    {
        id: 39,
        name: "Regenize",
        description: "Inclusive recycling solution integrating waste pickers into the formal economy.",
        causes: ["Sustainability", "Economic Opportunity"],
        website: "https://www.regenize.co.za",
        imageUrl: "/orgs/regenize.png",
        tags: ["Climate Action", "Skills Development", "Conservation"],
        section18a: false,
        type: 'Social Enterprise'
    },
    {
        id: 35,
        name: "Shark Spotters",
        description: "Innovative shark safety and conservation program finding a balance between people and sharks.",
        causes: ["Sustainability", "Safety & Justice"],
        website: "https://sharkspotters.org.za",
        imageUrl: "/orgs/shark-spotters.jpg",
        tags: ["Animal & Marine Welfare", "Conservation"],
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
        tags: ["Animal & Marine Welfare", "Conservation", "Climate Action"],
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
        tags: ["Animal & Marine Welfare", "Conservation"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 55,
        name: "Santa Shoebox Project",
        description: "Collects and distributes personalized shoeboxes of essential items and treats to underprivileged children.",
        causes: ["Economic Opportunity"],
        website: "https://santashoebox.org.za/",
        imageUrl: "/orgs/santa-shoebox.png",
        tags: ["Child Protection", "Education & Literacy"],
        section18a: true,
        type: 'NPO'
    },
    {
        id: 56,
        name: "Bright Stars Safe Home",
        description: "A safe haven providing love, protection, and care for abused, abandoned, and neglected children.",
        causes: ["Safety & Justice"],
        website: "https://brightstarssafehome.co.za/",
        imageUrl: "/orgs/bright-stars.png",
        tags: ["Child Protection", "Housing & Shelter"],
        section18a: false,
        type: 'NPO'
    }
];

export const CAUSE_TOOLTIPS: Record<string, string> = {
    "All": "View all effective altruism opportunities across South Africa.",
    "Survival": "Addressing immediate threats to life: Food, Water, Shelter, and Emergency Response.",
    "Safety & Justice": "Protecting vulnerable groups and ensuring rights: Child Protection, GBV, and Legal Advocacy.",
    "Health & Wellbeing": "Physical and mental health support: Healthcare Access, Trauma Support, and Disability Services.",
    "Economic Opportunity": "Breaking poverty cycles: Education, Skills, Employment, and Entrepreneurship.",
    "Sustainability": "Protecting our planet: Climate Action, Conservation, Welfare, and Sustainable Farming.",
    "Infrastructure": "Building for the future: Community Spaces, Transport, and Digital Connectivity."
};

export const causes = [
    "All",
    "Survival",
    "Safety & Justice",
    "Health & Wellbeing",
    "Economic Opportunity",
    "Sustainability",
    "Infrastructure"
];
